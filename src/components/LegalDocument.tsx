import { Mail, MapPin, Phone, Globe } from 'lucide-react';
import {
  legalContact,
  legalTagline,
  type LegalMeta,
  type PolicyBlock,
  type PolicySection,
} from '../data/legal';

export interface Props {
  meta: LegalMeta;
  intro?: string[];
  sections: PolicySection[];
  /** Section id after which the contact card is rendered. Omit to hide it. */
  contactAfter?: string;
}

function Block({ block }: { block: PolicyBlock }) {
  if (block.type === 'subheading') {
    return (
      <h3 className="font-heading text-lg sm:text-xl font-bold text-secondary-900 mt-8 mb-3">
        {block.text}
      </h3>
    );
  }

  if (block.type === 'list') {
    return (
      <ul className="space-y-2.5 my-5">
        {block.items.map((item) => (
          <li key={item} className="flex gap-3 text-[15px] sm:text-base text-slate-600 leading-relaxed">
            <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  return <p className="text-[15px] sm:text-base text-slate-600 leading-relaxed mt-4">{block.text}</p>;
}

function ContactCard() {
  const rows = [
    { icon: Globe, label: 'Website', value: legalContact.websiteLabel, href: legalContact.website, external: true },
    { icon: MapPin, label: 'Location', value: legalContact.location },
    { icon: Phone, label: 'Phone', value: legalContact.phone, href: legalContact.phoneHref },
    { icon: Mail, label: 'Email', value: legalContact.email, href: `mailto:${legalContact.email}` },
  ];

  return (
    <div className="mt-6 rounded-2xl border-2 border-primary-200 bg-gradient-to-br from-primary-50 to-white p-6 sm:p-7">
      <p className="font-heading text-lg font-bold text-secondary-900">Good Marks Classes</p>
      <dl className="mt-4 grid gap-3 sm:grid-cols-2">
        {rows.map(({ icon: Icon, label, value, href, external }) => (
          <div key={label} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-secondary-900 text-primary-400">
              <Icon className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <dt className="text-xs uppercase tracking-wider font-label-bold text-slate-500">{label}</dt>
              <dd className="text-[15px] font-semibold text-secondary-900 break-words">
                {href ? (
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="hover:text-primary-700 transition-colors"
                  >
                    {value}
                  </a>
                ) : (
                  value
                )}
              </dd>
            </div>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function LegalDocument({ meta, intro = [], sections, contactAfter }: Props) {
  return (
    <>
      {/* Hero */}
      <section className="dark-section pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div className="max-w-container-max mx-auto px-6">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-slate-400">
            <a href="/" className="hover:text-primary-400 transition-colors">Home</a>
            <span aria-hidden="true">/</span>
            <span className="text-slate-200">{meta.title}</span>
          </nav>

          <p className="font-label-bold uppercase tracking-widest text-primary-400 text-xs">{meta.eyebrow}</p>
          <h1 className="font-heading font-black tracking-tight text-white mt-3 text-[clamp(32px,6vw,54px)] leading-[1.1]">
            {meta.title}
          </h1>

          {meta.lede && (
            <p className="mt-6 text-base sm:text-lg text-slate-300/90 max-w-3xl leading-relaxed">
              {meta.lede}
            </p>
          )}

          {intro.length > 0 && (
            <div className="mt-8 space-y-4 max-w-3xl">
              {intro.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className="text-base sm:text-lg text-slate-300/90 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Body */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-container-max mx-auto px-6 grid lg:grid-cols-[280px_minmax(0,1fr)] gap-10 lg:gap-14 items-start">
          {/* Table of contents */}
          <nav aria-label={`${meta.title} sections`} className="lg:sticky lg:top-28">
            <p className="font-label-bold uppercase tracking-widest text-xs text-slate-500 mb-4">
              On this page
            </p>
            <ol className="space-y-1 max-h-[60vh] overflow-y-auto pr-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="block text-[13px] leading-snug text-slate-600 hover:text-primary-700 transition-colors py-1.5 border-l-2 border-transparent hover:border-primary-400 pl-3"
                  >
                    {section.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Sections */}
          <article className="max-w-3xl">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28 mb-12 last:mb-0">
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-secondary-900 tracking-tight pb-3 border-b-2 border-primary-200">
                  {section.heading}
                </h2>

                {section.blocks.map((block, index) => (
                  <Block key={`${section.id}-${index}`} block={block} />
                ))}

                {section.id === contactAfter && <ContactCard />}
              </section>
            ))}

            <p className="mt-12 pt-8 border-t border-slate-200 font-heading text-base font-semibold text-secondary-900">
              {legalTagline}
            </p>

            <a
              href="/"
              className="inline-flex items-center gap-2 mt-6 text-sm font-bold text-primary-700 hover:text-primary-800 transition-colors"
            >
              <span aria-hidden="true">&larr;</span>
              Back to Home
            </a>
          </article>
        </div>
      </section>
    </>
  );
}
