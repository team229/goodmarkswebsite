import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { brotliDecompressSync } from 'node:zlib';

// The archive preserves the original PDFs byte for byte, with a checksum for
// each file. Keep generated PDFs out of Git; Astro copies them into dist/.
const archive = new URL('../worksheet-content/worksheets.json.br', import.meta.url);
const destination = new URL('../public/practice-papers/', import.meta.url);
const bundle = JSON.parse(brotliDecompressSync(await readFile(archive)).toString('utf8'));
if (bundle.version !== 1 || bundle.files?.length !== 361) {
  throw new Error('The worksheet archive is incomplete or unsupported.');
}
const names = new Set();
const verified = bundle.files.map(({ name, sha256, data }) => {
  if (!/^[a-z0-9-]+\.pdf$/.test(name) || names.has(name)) {
    throw new Error(`Invalid or duplicate worksheet filename: ${name}`);
  }
  names.add(name);
  const bytes = Buffer.from(data, 'base64');
  if (bytes.subarray(0, 5).toString() !== '%PDF-' ||
      createHash('sha256').update(bytes).digest('hex') !== sha256) {
    throw new Error(`Worksheet integrity check failed: ${name}`);
  }
  return { name, bytes };
});
await mkdir(destination, { recursive: true });
for (const { name, bytes } of verified) {
  await writeFile(new URL(name, destination), bytes);
}
console.log(`Prepared ${verified.length} verified CBSE worksheet PDFs.`);
