# Location and local SEO audit

Reviewed 5 November 2026 against `main` at `53c9d9e33230da57759f3e5183c8518299a6f862`.

## Supported location model

| Category | Representation | Evidence and treatment |
| --- | --- | --- |
| Main physical teaching centre | Sector 85, Gurugram, Haryana, India | Existing contact-page address, visible map and CBSE landing page agree. The existing map URL and coordinates are retained. |
| Gurgaon coverage | Sectors 78–99, plus Sector 88A | Service areas; classroom attendance is at Sector 85, with online, hybrid and home tuition options subject to availability. |
| Manesar coverage | Sectors 1–5 and NSG Manesar | Service areas with the same learning-format distinction. No separate Manesar physical branch is established by the reviewed evidence. |
| Other proposed or historical centres | No new physical locations added | A landing-page keyword or an old promotional reference is insufficient evidence of a teaching centre. |

The source provides a sector-level address, not a verified building/unit number or postal code. Those details have not been invented. The retained map coordinates have not been independently surveyed or geocoded during this audit.

## Findings and changes

| Surface | Finding | Correction |
| --- | --- | --- |
| Homepage | Two inline organization definitions described Gurgaon and Manesar as physical locations/addresses, alongside a third organization in the layout. Address descriptions listed service sectors. | Removed the duplicate inline entities. One shared organization uses the Sector 85 address and one physical `Place`; all coverage goes in `areaServed`. |
| Shared layout | Organization address identified only Gurgaon. | Uses the same organization identity, address, existing map and service coverage on every page. Shared data lives in `src/data/business.ts`; schema lives in `src/lib/organizationSchema.ts`. |
| Contact page | Visible Sector 85 wording was more precise than its independent organization schema. Service-area badges could be mistaken for additional sites. | `ContactPage.mainEntity` references the shared organization. Visible copy and location/learning-format FAQ answers distinguish classroom attendance from online, hybrid and home tuition coverage. |
| Locations directory | Description advertised “coaching centres”; heading and counts called service pages “locations.” | Renamed visible navigation and directory labels to “Areas We Serve” and “service areas.” Retained `/locations` and every directory entry. |
| 81 sector landing pages | Each created a sector-specific organization with a city address and parent-organization relationship. Some text claimed a centre in Sector 78, Sector 86 or a Manesar sector, promised a short commute, or invited a demo in an unverified sector. | Each now describes a `Service` with a precise `areaServed` and the shared organization as `provider`. Removed branch/address claims, corrected location FAQs and demo invitations, and qualified learning-format availability. Retained course content, local search terms, all 81 slugs and links. |
| 8 city tuition pages | Extra organization entities and one explicit “Manesar center” FAQ. | Use service entities and a visible Sector 85 notice; corrected the Manesar attendance FAQ. All 8 city tuition URLs remain available. |
| Blog schema and Manesar article | Blog organization summaries repeated an incomplete address. One article claimed an option based in Manesar and “without leaving Manesar.” | Blog publisher/about fields reference the shared organization. The article, excerpt and description explain the Sector 85 classroom location and travel alternatives; original publication date is preserved and `updated` records this revision. |
| Footer and homepage FAQ | General Gurgaon wording and proximity claims lacked a clear centre/service distinction. | State the Sector 85 centre and distinguish the service areas and available formats. Existing contact details and maps remain. |

## Verification

Run from a clean checkout with the repository dependencies installed:

```sh
npm run build -- --force
node scripts/check-location-schema.mjs
git diff --check
```

The forced rebuild avoids reusing content-layer output from an earlier build when checking the shared blog schema.

Result on 5 November 2026:

- Astro production build passed: 171 rendered pages.
- Inspected 202 generated HTML files, including redirect/static files.
- Parsed all 574 JSON-LD blocks successfully.
- Confirmed the same shared organization definition on all 171 content pages, one physical Sector 85 location, and consistent postal locality and map information.
- Confirmed no generated address or organization identity claims a Manesar branch or a sector-specific branch.
- Confirmed all 81 sector service pages and 8 city tuition pages retain their canonical URLs, indexability and sitemap entries; the 81 sector pages also retain directory links and `ItemList` entries.
- Confirmed service-page FAQ JSON-LD answers match the server-rendered visible answers.
- `git diff --check` passed.

These are local checks of the generated HTML, JSON syntax and intended location model. They are not a Google Rich Results Test, Search Console inspection, or an independent confirmation of business ownership/address details. Browser layout QA was not performed. The build also reports an existing `/courses/prefoundation` redirect/route overlap, unrelated to these location changes.

## Review and release

This change is prepared for review on a separate branch. It does not publish the website. Approval is required before merging or deploying.

Before adding any future physical branch, confirm its operating teaching address, contact/map details and public-facing wording. Keep service-area landing pages as services unless that evidence supports a real centre. After an approved deployment, check the live homepage/contact/location markup with Schema Markup Validator and Google's Rich Results Test, then inspect representative URLs in Search Console.

## Reference definitions

- [Schema.org `location`](https://schema.org/location): the location where an organization is located.
- [Schema.org `areaServed`](https://schema.org/areaServed): geographic coverage of a service or offering.
- [Schema.org `Service`](https://schema.org/Service): services can identify a provider and area served without inventing a local branch.
- [Google local business structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business): a business address describes its physical location.
- [Google general structured data guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies): markup should accurately represent visible page content.
