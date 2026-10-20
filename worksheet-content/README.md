# CBSE Worksheet Corner: existing Hostinger website

This branch extends the website currently deployed to Hostinger. It is based on
`a6f5e17`; rebuilding that commit produced a byte-identical `index.html` to the
file downloaded from Hostinger on 20 October 2026, including all four asset hashes.
The current `main` branch contains the newer Astro site and its Worksheet Corner.
Keep that source intact; this compatibility branch is not a replacement for main.

## Content and build

`worksheets.json.br` contains 361 unchanged PDF files copied from www.physics.guru:
189 subjective chapter sheets, 160 objective chapter sheets and 12 objective
booklets. Every file has its original bytes and SHA-256 checksum. Run `npm ci`
and `npm run build`; the prebuild script verifies and restores the PDFs into
`public/practice-papers/`, then Vite includes them in `dist/`.

The new route is `/cbse-worksheets/`; `/cbse-practice-papers/` redirects there.
Class, subject, worksheet type, chapter search, chapter order and downloads match
the source. The selector is adapted only to mount and unmount safely inside React.
Online attempts link to the existing www.physics.guru assessment and sign-in
service with the selected class and subject.

## Hostinger upload

The prepared update ZIP contains only changed/new production files relative to
the verified original build. Extract its contents directly inside this site's
`public_html`, replacing matching files. Keep all other existing files and folders.
It does not include server configuration, secrets, dependency folders or source.
The only original paths replaced are `index.html` and `sitemap.xml`. New hashed
assets and worksheet PDFs are added; the original hashed assets remain available.

The uploaded original index is saved separately, and the original sitemap is
preserved in the repository's `a6f5e17` version. Restoring those two originals
returns visitors to the previous site without deleting any of the added files.

Do not use the historical `deploy-ftp.js`: it deletes the remote directory before
uploading. The prepared update uses File Manager and preserves existing files.
The historical main-only GitHub workflow does not run for this branch.
