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
    applyLinkAt(result, slots[k], links[k]);
  }

  const fallback = links.slice(perSlot);
  if (fallback.length > 0 && slots.length > 0) {
    const last = slots[slots.length - 1];
    const orphan: string[] = [];
    for (const link of fallback) {
      const placed = applyLinkIn(result, link);
      if (!placed) orphan.push(linkMarker(link));
    }
    if (orphan.length > 0) {
      result[last] +=
        ' Students comparing options also come across ' +
        orphan.join(', ') +
        '.';
    }
  }

  return result.map((p) => renderContent(p));
}

/**
 * Assign `link` to prose slot at `idx`: wraps the keyword at its first natural
 * (non-anchored) occurrence in that slot; otherwise searches every paragraph;
 * otherwise appends a fallback clause so the keyword is always anchored.
 */
function applyLinkAt(paragraphs: string[], idx: number, link: InternalLink): boolean {
  if (alreadyAnchoredAnywhere(paragraphs, link)) return true;
  const slot = tryWrap(paragraphs[idx], link);
  if (slot !== null) {
    paragraphs[idx] = slot;
    return true;
  }
  if (applyLinkIn(paragraphs, link)) return true;
  paragraphs[idx] += ` Students comparing options also come across ${linkMarker(link)}.`;
  return true;
}

/** Wraps `link` at its first natural (non-anchored) occurrence across all paragraphs. */
function applyLinkIn(paragraphs: string[], link: InternalLink): boolean {
  for (let i = 0; i < paragraphs.length; i++) {
    const wrapped = tryWrap(paragraphs[i], link);
    if (wrapped !== null) {
      paragraphs[i] = wrapped;
      return true;
    }
  }
  return false;
}

/** True if `link`'s keyword already appears inside an anchor anywhere in the copy. */
function alreadyAnchoredAnywhere(paragraphs: string[], link: InternalLink): boolean {
  const kwLower = link.kw.toLowerCase();
  for (const para of paragraphs) {
    let from = 0;
    while (true) {
      const idx = para.toLowerCase().indexOf(kwLower, from);
      if (idx === -1) break;
      if (insideAnchor(para, idx)) return true;
      from = idx + kwLower.length;
    }
  }
  return false;
}

/** Wraps `kw` at its first occurrence in `text` that is not already inside an anchor. */
function tryWrap(text: string, link: InternalLink): string | null {
  const kwLower = link.kw.toLowerCase();
  let from = 0;
  while (true) {
    const idx = text.toLowerCase().indexOf(kwLower, from);
    if (idx === -1) return null;
    if (!insideAnchor(text, idx)) {
      return text.slice(0, idx) + linkMarker(link) + text.slice(idx + link.kw.length);
    }
    from = idx + link.kw.length;
  }
}

/** True if character offset `pos` sits between an opening `<a ` and its `</a>`. */
function insideAnchor(text: string, pos: number): boolean {
  const before = text.slice(0, pos);
  const opens = (before.match(/<a\s/gi) || []).length;
  const closes = (before.match(/<\/a>/gi) || []).length;
  return opens > closes;
}

function linkMarker(link: InternalLink): string {
  return `<a href="${link.href}" class="text-primary-600 font-semibold hover:underline">${link.kw}</a>`;
}

function escapeAttr(s: string): string {
  return s.replace(/"/g, '&quot;');
}