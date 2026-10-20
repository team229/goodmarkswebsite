# CBSE worksheet source

`worksheets.json.br` contains the 361 original PDF files copied from the
www.physics.guru worksheet collection on 20 October 2026:

- 189 subjective chapter worksheets for Classes VIII–XII.
- 160 objective chapter worksheets for Classes IX–XII (2,400 questions).
- 12 complete objective class–subject booklets.

The archive uses Brotli-compressed JSON and records each filename, SHA-256
checksum and base64 PDF data. Node's built-in libraries are sufficient to
unpack it. `npm run build` and `npm run dev` run the preparation script
automatically. It verifies every PDF before writing `public/practice-papers/`.
Astro then publishes the ordinary individual PDF files under `/practice-papers/`.

Worksheet content, answer keys, filenames, chapter order and catalogue options
are unchanged. The source catalogue and selector are in `public/worksheet-assets/`.
The local page is `/cbse-worksheets/`; `/cbse-practice-papers/` redirects there.

Objective-sheet online practice links to the existing authenticated service at
https://www.physics.guru/cbse-worksheets/online/ with the selected class and subject.
Google/email sign-in, question serving, scoring and saved reports remain in that
service. No authentication secrets, account records or student data are copied.
