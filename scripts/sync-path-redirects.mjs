#!/usr/bin/env node
/**
 * Builds functions/path-redirects.json from public/_redirects (301 rules only).
 * Used by functions/_middleware.js and src/worker.ts — single source with _redirects.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const REDIRECTS = path.join(ROOT, 'public/_redirects');
const OUT = path.join(ROOT, 'functions/path-redirects.json');

const EXTRA = {
	'/sitemap-0.xml': '/sitemap.xml',
	'/sitemap.xml/': '/sitemap.xml',
	'/sitemap-en.xml/': '/sitemap-en.xml',
	'/sitemap-i18n.xml/': '/sitemap-i18n.xml',
	'/sitemap-images.xml/': '/sitemap-images.xml',
};

/** @type {Record<string, string>} */
const map = { ...EXTRA };

for (const line of readFileSync(REDIRECTS, 'utf8').split('\n')) {
	const trimmed = line.trim();
	if (!trimmed || trimmed.startsWith('#')) continue;
	const m = trimmed.match(/^(\S+)\s+(\S+)\s+301$/);
	if (!m) continue;
	map[m[1]] = m[2];
}

writeFileSync(OUT, `${JSON.stringify(map, null, 2)}\n`);
console.log(`Synced ${Object.keys(map).length} path redirects → functions/path-redirects.json`);
