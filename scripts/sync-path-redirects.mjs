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
	'/sitemap-en.xml': '/sitemap.xml',
	'/sitemap-en.xml/': '/sitemap.xml',
	'/sitemap-i18n.xml': '/sitemap.xml',
	'/sitemap-i18n.xml/': '/sitemap.xml',
	'/sitemap-images.xml/': '/sitemap-images.xml',
	'/sitemap-index.xml': '/sitemap.xml',
	'/sitemap-es.xml': '/sitemap.xml',
	'/sitemap-fr.xml': '/sitemap.xml',
	'/sitemap-de.xml': '/sitemap.xml',
	'/sitemap-pt.xml': '/sitemap.xml',
	'/sitemap-it.xml': '/sitemap.xml',
	'/sitemap-nl.xml': '/sitemap.xml',
	'/sitemap-pl.xml': '/sitemap.xml',
	'/sitemap-ru.xml': '/sitemap.xml',
	'/sitemap-tr.xml': '/sitemap.xml',
	'/sitemap-ar.xml': '/sitemap.xml',
	'/sitemap-ja.xml': '/sitemap.xml',
	'/sitemap-ko.xml': '/sitemap.xml',
	'/sitemap-zh.xml': '/sitemap.xml',
	'/sitemap-hi.xml': '/sitemap.xml',
	'/sitemap-id.xml': '/sitemap.xml',
	'/sitemap-th.xml': '/sitemap.xml',
	'/sitemap-vi.xml': '/sitemap.xml',
	'/sitemap-uk.xml': '/sitemap.xml',
	'/sitemap-cs.xml': '/sitemap.xml',
	'/sitemap-ro.xml': '/sitemap.xml',
	'/sitemap-sv.xml': '/sitemap.xml',
};

const REDIRECT_LOCALES = new Set([
	'es','fr','de','pt','it','nl','pl','ru','tr','ar','ja','ko','zh','hi','id','th','vi','uk','cs','ro','sv',
]);

function isLocalePath(pathname) {
	const first = pathname.split('/').filter(Boolean)[0];
	return Boolean(first && REDIRECT_LOCALES.has(first.toLowerCase()));
}

/** @type {Record<string, string>} */
const map = { ...EXTRA };

for (const line of readFileSync(REDIRECTS, 'utf8').split('\n')) {
	const trimmed = line.trim();
	if (!trimmed || trimmed.startsWith('#')) continue;
	const m = trimmed.match(/^(\S+)\s+(\S+)\s+301$/);
	if (!m) continue;
	// Splats are handled by Cloudflare _redirects + middleware blog→forum rewrite.
	if (m[1].includes('*') || m[2].includes(':splat')) continue;
	map[m[1]] = m[2];
}

for (const [from, to] of Object.entries(map)) {
	if (isLocalePath(from)) {
		delete map[from];
		continue;
	}
	if (isLocalePath(to)) {
		delete map[from];
	}
}

writeFileSync(OUT, `${JSON.stringify(map, null, 2)}\n`);
console.log(`Synced ${Object.keys(map).length} path redirects → functions/path-redirects.json`);
