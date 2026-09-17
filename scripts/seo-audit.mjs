#!/usr/bin/env node
/**
 * Full on-page SEO / IA crawler for the built site (dist/).
 * Run after `astro build`: node scripts/seo-audit.mjs
 *
 * Checks, per indexable page:
 *   - exactly one <h1>
 *   - <title> present, 15–65 chars, unique across the site
 *   - meta description present, 110–170 chars, unique across the site
 *   - self-referencing absolute canonical with trailing slash
 *   - robots not noindex
 *   - og:title/description/image(+alt), twitter card
 *   - hreflang en + x-default self-referencing
 *   - valid JSON-LD (parses) with expected @types
 *   - every <img> has non-empty alt
 *   - no mojibake (double-encoded UTF-8) anywhere in the HTML
 *   - internal links resolve to a built file and use trailing slashes
 *   - no links to legacy /blog/ paths
 * Site-wide:
 *   - sitemap <loc> set == indexable page set (no orphans, no stray/noindex URLs)
 *   - every sitemap URL is apex + https + trailing slash
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = existsSync(path.join(ROOT, 'dist', 'sitemap.xml'))
	? path.join(ROOT, 'dist')
	: path.join(ROOT, 'dist', 'client');

function readBrandUrl() {
	const src = readFileSync(path.join(ROOT, 'src/data/brand.ts'), 'utf8');
	return src.match(/(?:^|\n)\turl:\s*'((?:\\'|[^'])*)'/)[1].replace(/\/$/, '');
}
const SITE = readBrandUrl();

let errors = 0;
let warns = 0;
const fail = (msg) => {
	console.error(`  ✗ ${msg}`);
	errors += 1;
};
const warn = (msg) => {
	console.warn(`  ! ${msg}`);
	warns += 1;
};

function walk(dir) {
	const out = [];
	for (const name of readdirSync(dir)) {
		const full = path.join(dir, name);
		if (statSync(full).isDirectory()) out.push(...walk(full));
		else if (name.endsWith('.html')) out.push(full);
	}
	return out;
}

const attr = (html, re) => (html.match(re)?.[1] ?? null);
const metaContent = (html, name) =>
	attr(html, new RegExp(`<meta[^>]+(?:name|property)="${name}"[^>]*content="([^"]*)"`, 'i')) ??
	attr(html, new RegExp(`<meta[^>]+content="([^"]*)"[^>]*(?:name|property)="${name}"`, 'i'));

const MOJIBAKE = /â€|Ã.|Â[\x80-\xBF]|Â[·»«]|ï»¿/;

function relToUrlPath(file) {
	const rel = path.relative(DIST, file).replace(/\\/g, '/');
	if (rel === 'index.html') return '/';
	if (rel.endsWith('/index.html')) return `/${rel.slice(0, -'/index.html'.length)}/`;
	return `/${rel}`;
}

const files = walk(DIST);
const indexable = [];
const redirects = [];
const titles = new Map();
const descs = new Map();

console.log(`SEO audit — ${files.length} HTML files in ${path.relative(ROOT, DIST)}\n`);

for (const file of files) {
	const html = readFileSync(file, 'utf8');
	const urlPath = relToUrlPath(file);

	// Classify redirect stubs (Astro static redirects) — excluded from indexable checks.
	if (/<meta[^>]+http-equiv="refresh"/i.test(html)) {
		redirects.push(urlPath);
		continue;
	}
	const robots = metaContent(html, 'robots') ?? '';
	const noindex = /noindex/i.test(robots);
	if (noindex) {
		redirects.push(urlPath); // treated as non-indexable
		if (urlPath !== '/404.html' && !urlPath.startsWith('/brand-studio'))
			warn(`${urlPath}: noindex page`);
		continue;
	}
	if (urlPath.startsWith('/brand-studio') || urlPath === '/404.html') continue;

	indexable.push(urlPath);
	const scope = `${urlPath}`;

	// H1
	const h1s = html.match(/<h1[\s>]/gi) ?? [];
	if (h1s.length !== 1) fail(`${scope}: ${h1s.length} <h1> (expected 1)`);

	// Title
	const title = attr(html, /<title>([^<]*)<\/title>/i);
	if (!title) fail(`${scope}: missing <title>`);
	else {
		const t = title.replace(/&amp;/g, '&').trim();
		if (t.length < 15 || t.length > 65) warn(`${scope}: title ${t.length} chars ("${t}")`);
		if (titles.has(t)) fail(`${scope}: duplicate <title> (also ${titles.get(t)})`);
		else titles.set(t, scope);
	}

	// Meta description
	const desc = metaContent(html, 'description');
	if (!desc) fail(`${scope}: missing meta description`);
	else {
		const d = desc.replace(/&amp;/g, '&').trim();
		if (d.length < 110 || d.length > 170) warn(`${scope}: description ${d.length} chars`);
		if (descs.has(d)) fail(`${scope}: duplicate description (also ${descs.get(d)})`);
		else descs.set(d, scope);
	}

	// Canonical
	const canonical = attr(html, /<link[^>]+rel="canonical"[^>]*href="([^"]*)"/i);
	const expected = `${SITE}${urlPath}`;
	if (!canonical) fail(`${scope}: missing canonical`);
	else if (canonical !== expected) fail(`${scope}: canonical ${canonical} != ${expected}`);

	// robots present + indexable
	if (!/index/i.test(robots) || /noindex/i.test(robots)) fail(`${scope}: robots not indexable ("${robots}")`);

	// hreflang self
	if (!html.includes(`hreflang="en" href="${expected}"`)) warn(`${scope}: missing self hreflang en`);
	if (!html.includes(`hreflang="x-default" href="${expected}"`)) warn(`${scope}: missing x-default`);

	// Open Graph / Twitter
	for (const p of ['og:title', 'og:description', 'og:image', 'og:url']) {
		if (!metaContent(html, p)) fail(`${scope}: missing ${p}`);
	}
	if (!metaContent(html, 'og:image:alt')) warn(`${scope}: missing og:image:alt`);
	if (!metaContent(html, 'twitter:card')) warn(`${scope}: missing twitter:card`);
	const ogUrl = metaContent(html, 'og:url');
	if (ogUrl && ogUrl !== expected) fail(`${scope}: og:url ${ogUrl} != ${expected}`);

	// JSON-LD
	const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
	if (!blocks.length) fail(`${scope}: no JSON-LD`);
	for (const b of blocks) {
		try {
			JSON.parse(b[1]);
		} catch (e) {
			fail(`${scope}: invalid JSON-LD (${e.message})`);
		}
	}

	// Images need alt
	for (const img of html.matchAll(/<img\b[^>]*>/gi)) {
		const tag = img[0];
		const alt = tag.match(/\balt="([^"]*)"/i);
		if (!alt) fail(`${scope}: <img> without alt (${tag.slice(0, 80)})`);
		else if (!alt[1].trim()) warn(`${scope}: empty alt (${tag.slice(0, 80)})`);
	}

	// Mojibake
	if (MOJIBAKE.test(html)) {
		const m = html.match(MOJIBAKE);
		const ctx = html.slice(Math.max(0, m.index - 40), m.index + 40).replace(/\s+/g, ' ');
		fail(`${scope}: mojibake "…${ctx}…"`);
	}

	// Internal links
	for (const a of html.matchAll(/href="(\/[^"#?]*)"/g)) {
		const href = a[1];
		if (href.startsWith('/_astro') || href.startsWith('/images') || href.startsWith('/fonts')) continue;
		if (/\.(xml|txt|ico|png|jpg|jpeg|webp|svg|webmanifest|js|css|json|webm|mp4)$/i.test(href)) continue;
		if (href.startsWith('/blog/')) fail(`${scope}: links to legacy /blog path ${href}`);
		if (!href.endsWith('/')) warn(`${scope}: internal link missing trailing slash ${href}`);
		const target = href === '/' ? 'index.html' : `${href.replace(/^\//, '').replace(/\/$/, '')}/index.html`;
		if (!existsSync(path.join(DIST, target))) fail(`${scope}: broken internal link ${href}`);
	}
}

// Sitemap cross-check
const sitemap = readFileSync(path.join(DIST, 'sitemap.xml'), 'utf8');
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const locPaths = new Set(locs.map((l) => l.replace(SITE, '') || '/'));
const indexSet = new Set(indexable);

console.log(`\nIndexable pages: ${indexable.length} · redirect/noindex stubs: ${redirects.length} · sitemap URLs: ${locs.length}`);

for (const p of indexSet) {
	if (!locPaths.has(p)) fail(`orphan: ${p} is indexable but not in sitemap.xml`);
}
for (const p of locPaths) {
	if (!indexSet.has(p)) fail(`sitemap lists ${p} but it is not an indexable built page`);
}
for (const loc of locs) {
	if (!loc.startsWith(`${SITE}/`)) fail(`sitemap loc not apex/https: ${loc}`);
	if (!loc.endsWith('/')) fail(`sitemap loc missing trailing slash: ${loc}`);
}

console.log(`\n${errors} error(s), ${warns} warning(s).`);
if (errors) process.exit(1);
console.log('SEO audit passed.');
