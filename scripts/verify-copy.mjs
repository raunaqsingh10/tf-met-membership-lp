import { readFile } from 'node:fs/promises';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createServer } from 'vite';

const approved = JSON.parse(await readFile(new URL('../docs/approved-copy.json', import.meta.url), 'utf8'));
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom', optimizeDeps: { noDiscovery: true, include: [] } });

function normalize(value) {
  return value
    .replace(/<[^>]+>/g, ' ')
    .replace(/&#x([\da-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ').replace(/\s+([,.?!:;])/g, '$1').trim();
}

try {
  const { default: App } = await server.ssrLoadModule('/src/App.tsx');
  const rendered = normalize(renderToStaticMarkup(createElement(App)));
  const missing = approved.passages.filter(passage => !rendered.includes(normalize(passage)));
  if (missing.length) {
    console.error('Approved copy missing or changed:', missing);
    process.exitCode = 1;
  } else {
    console.log(`Approved copy verified: ${approved.passages.length}/${approved.passages.length} passages match ${approved.source}.`);
  }
} finally {
  await server.close();
}
