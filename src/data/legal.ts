/**
 * Shared types, contact block and metadata shape for legal pages
 * (Privacy Policy, Terms of Service) so both documents render from one component.
 */

export type PolicyBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'subheading'; text: string };

export interface PolicySection {
  /** Anchor id, also used for the table of contents link. */
  id: string;
  /** Heading as it appears in the policy, e.g. "1. Information We Collect". */
  heading: string;
  blocks: PolicyBlock[];
}

export interface LegalMeta {
  /** Small label above the H1. */
  eyebrow: string;
  /** H1 text. */
  title: string;
  /** Optional one-line summary shown under the H1. */
  lede?: string;
}

export const legalContact = {
  website: 'https://www.goodmarksclasses.com',
  websiteLabel: 'www.goodmarksclasses.com',
  location: 'Gurgaon, Haryana, India',
  phone: '8800 8800 28',
  phoneHref: 'tel:8800880028',
  email: 'info@goodmarksclasses.com',
} as const;

export const legalTagline = 'Small batches. Real attention. No student gets lost.';
