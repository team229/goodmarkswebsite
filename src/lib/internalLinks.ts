export interface InternalLink {
  kw: string;
  href: string;
}

/**
 * Render light markdown-style links used in page content (`[text](url)` and
 * `[**text**](url)`) into real anchors. Applied after keyword wrapping.
 */
export function renderContent(text: string): string {
  return text.replace(/\[\*\*(.+?)\*\*\]\((.+?)\)/g, (_, label, href) => {
    return `<a href="${escapeAttr(href)}" class="text-primary-600 font-semibold hover:underline">${label}</a>`;
  }).replace(/\[(.+?)\]\((.+?)\)/g, (_, label, href) => {
    return `<a href="${escapeAttr(href)}" class="text-primary-600 font-semibold hover:underline">${label}</a>`;
  });
}

/**
 * Place keyword-anchored internal links into the first, second and third prose
 * paragraphs of a page, one link per paragraph (when up to 3 links are provided).
 *
 * - The first `count` non-heading paragraphs of content are treated as the slots.
 * - For each slot, one link is assigned in order (link 1 -> paragraph 1, link 2 ->
 *   paragraph 2, link 3 -> paragraph 3).
 * - The keyword is wrapped at its first natural occurrence in the slot; if absent
 *   there but present elsewhere in the content, it is wrapped at that natural spot.
 * - Only when the keyword appears nowhere in the page copy is a short clause
 *   appended to the paragraph, so every planned keyword still gets anchored.
 */
export function injectLinks(paragraphs: string[], links: InternalLink[], count: number = 3, headingLength: number = 55): string[] {
  const result = paragraphs.map((para) => para);

  // First `count` prose slots — skip short heading-like paragraphs.
  const slots: number[] = [];
  for (let i = 0; i < result.length && slots.length < count; i++) {
    if (result[i].trim().length >= headingLength) slots.push(i);
  }

  const perSlot = Math.min(links.length, slots.length);
  for (let k = 0; k < perSlot; k++) {
    const idx = slots[k];
    const applied = applyLink(result, idx, links[k]);
    // applyLink mutates result in place and returns true/false for appended-fallback marker
    applied.flag = applied.flag;
  }

  const fallback = links.slice(perSlot);
  if (fallback.length > 0 && slots.length > 0) {
    const last = slots[slots.length - 1];
    const already: string[] = [];
    for (const link of fallback) {
      if (containsKeyword(result.join('\n'), link.kw)) {
        // Keyword exists naturally somewhere in the copy — wrap it there.
        const where = findKeywordIndex(result, link.kw);
        if (where !== -1) {
          result[where] = wrapKeywordAt(result[where], link.kw, linkMarker(link));
          continue;
        }
      }
      already.push(linkMarker(link));
    }
    if (already.length > 0) {
      result[last] +=
        ' Students comparing options also come across ' +
        already.join(', ') +
        '.';
    }
  }

  return result.map((p) => renderContent(p));
}

/** Wraps `kw` at its first occurrence in `text` that is not already inside an anchor. */
function wrapKeywordAt(text: string, kw: string, marker: string): string {
  const kwLower = kw.toLowerCase();
  let from = 0;
  while (true) {
    const idx = text.toLowerCase().indexOf(kwLower, from);
    if (idx === -1) return text;
    if (!insideAnchor(text, idx)) {
      return text.slice(0, idx) + marker + text.slice(idx + kw.length);
    }
    from = idx + kw.length;
  }
}

/** True if character offset `pos` sits between an opening `<a ` and its `</a>`. */
function insideAnchor(text: string, pos: number): boolean {
  const before = text.slice(0, pos);
  const opens = (before.match(/<a\s/gi) || []).length;
  const closes = (before.match(/<\/a>/gi) || []).length;
  return opens > closes;
}

function containsKeyword(text: string, kw: string): boolean {
  return text.toLowerCase().indexOf(kw.toLowerCase()) !== -1;
}

/** Finds the paragraph index containing `kw`, preferring the earliest prose slot. */
function findKeywordIndex(paragraphs: string[], kw: string): number {
  for (let i = 0; i < paragraphs.length; i++) {
    if (containsKeyword(paragraphs[i], kw)) return i;
  }
  return -1;
}

/**
 * Assign `link` to prose slot at `idx`. Wraps the keyword at its first natural
 * occurrence in that paragraph; if absent there but present elsewhere in the
 * content, wraps it at that natural spot; otherwise appends a fallback clause.
 */
function applyLink(paragraphs: string[], idx: number, link: InternalLink): { flag: boolean } {
  if (containsKeyword(paragraphs[idx], link.kw)) {
    paragraphs[idx] = wrapKeywordAt(paragraphs[idx], link.kw, linkMarker(link));
    return { flag: false };
  }
  const where = findKeywordIndex(paragraphs, link.kw);
  if (where !== -1 && where !== idx) {
    paragraphs[where] = wrapKeywordAt(paragraphs[where], link.kw, linkMarker(link));
    return { flag: false };
  }
  paragraphs[idx] += ` Students comparing options also come across ${linkMarker(link)}.`;
  return { flag: true };
}

function linkMarker(link: InternalLink): string {
  return `<a href="${link.href}" class="text-primary-600 font-semibold hover:underline">${link.kw}</a>`;
}

function escapeAttr(s: string): string {
  return s.replace(/"/g, '&quot;');
}