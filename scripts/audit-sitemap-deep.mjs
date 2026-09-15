#!/usr/bin/env node
/**
 * Deep sitemap crawlability audit beyond validate-sitemaps.mjs
 */
import { access, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const MIN_DATE = '2026-08-20';

function readBrandUrl() {
	const src = readFileSync(path.join(ROOT, 'src/data/brand.ts'), 'utf8');
	const m = src.match(/(?:^|\n)\turl:\s*'((?:\\'|[^'])*)'/);
	if (!m) throw new Error('brand.ts missing url');
	return m[1].replace(/\\'/g, "'").replace(/\/$/, '');
}

const SITE = readBrandUrl();

async function resolveDist() {
	for (const dir of [path.join(ROOT, 'dist'), path.join(ROOT, 'dist', 'client')]) {
		try {
			await access(path.join(dir, 'sitemap.xml'));
			return dir;
		} catch {
			/* next */
		}
	}
	throw new Error('dist/sitemap.xml missing — run build first');
}

function extractUrlBlocks(xml) {
	return xml.split(/<url>/i).slice(1).map((b) => `<url>${b.split(/<\/url>/i)[0]}</url>`);
}

function pick(block, re) {
	return [...block.matchAll(re)].map((m) => m[1]);
}

function pathFromUrl(url) {
	return url.replace(SITE, '') || '/';
}

function htmlPathFor(urlPath) {
	if (urlPath === '/') return 'index.html';
	return `${urlPath.replace(/^\//, '').replace(/\/$/, '')}/index.html`;
}

const REDIRECT_MAP = (() => {
	const text = readFileSync(path.join(ROOT, 'public/_redirects'), 'utf8');
	const map = new Map();
	for (const line of text.split(/\r?\n/)) {
		const t = line.trim();
		if (!t || t.startsWith('#')) continue;
		const parts = t.split(/\s+/);
		if (parts.length < 3) continue;
		const [from, to, status] = parts;
		if (status === '301' || status === '302') map.set(from, to);
	}
	try {
		const json = JSON.parse(readFileSync(path.join(ROOT, 'functions/cannibal-redirects.json'), 'utf8'));
		for (const [from, to] of Object.entries(json)) map.set(from, to);
	} catch {
		/* optional */
	}
	try {
		const json = JSON.parse(readFileSync(path.join(ROOT, 'functions/path-redirects.json'), 'utf8'));
		for (const [from, to] of Object.entries(json)) map.set(from, to);
	} catch {
		/* optional */
	}
	return map;
})();

let errors = 0;
const fail = (msg) => {
	console.error(`✗ ${msg}`);
	errors += 1;
};
const ok = (msg) => console.log(`✓ ${msg}`);

async function main() {
	const DIST = await resolveDist();
	console.log(`Deep sitemap audit (${path.relative(ROOT, DIST)})\n`);

	const sitemapXml = await readFile(path.join(DIST, 'sitemap.xml'), 'utf8');
	const enXml = await readFile(path.join(DIST, 'sitemap-en.xml'), 'utf8');
	const imagesXml = await readFile(path.join(DIST, 'sitemap-images.xml'), 'utf8');

	if (sitemapXml.includes('<sitemapindex')) fail('sitemap.xml is still a sitemapindex');
	else ok('sitemap.xml is a urlset');

	if (sitemapXml !== enXml) fail('sitemap-en.xml does not match sitemap.xml');
	else ok('sitemap-en.xml matches sitemap.xml');

	const allPageUrls = new Set();
	const allImageUrls = new Set();

	for (const [file, xml] of [
		['sitemap.xml', sitemapXml],
		['sitemap-images.xml', imagesXml],
	]) {
		if (!xml.includes('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"')) {
			fail(`${file}: missing sitemap 0.9 xmlns`);
		}
		if (file === 'sitemap.xml') {
			if (xml.includes('xmlns:xhtml=') || xml.includes('xmlns:image=') || xml.includes('<image:') || xml.includes('<xhtml:')) {
				fail(`${file}: must be a plain urlset (no image/hreflang extensions)`);
			}
		}
		if (file === 'sitemap-images.xml' && !xml.includes('xmlns:image=')) {
			fail(`${file}: missing image xmlns`);
		}

		for (const block of extractUrlBlocks(xml)) {
			const locs = pick(block, /<loc>([^<]+)<\/loc>/g);
			const pageLoc = locs[0];
			if (!pageLoc) {
				fail(`${file}: url block missing loc`);
				continue;
			}
			allPageUrls.add(pageLoc);

			if (!pageLoc.startsWith(SITE)) fail(`${file}: non-apex loc ${pageLoc}`);
			if (!pageLoc.endsWith('/')) fail(`${file}: missing trailing slash ${pageLoc}`);

			const p = pathFromUrl(pageLoc);
			if (REDIRECT_MAP.has(p) || REDIRECT_MAP.has(p.replace(/\/$/, ''))) {
				fail(`${file}: sitemap lists redirected URL ${pageLoc}`);
			}

			try {
				await access(path.join(DIST, htmlPathFor(p)));
			} catch {
				fail(`${file}: no HTML for ${pageLoc}`);
			}

			for (const lm of pick(block, /<lastmod>([^<]+)<\/lastmod>/g)) {
				if (!/^\d{4}-\d{2}-\d{2}/.test(lm)) fail(`${file}: bad lastmod ${lm} on ${pageLoc}`);
				if (lm < MIN_DATE) fail(`${file}: lastmod ${lm} before ${MIN_DATE} on ${pageLoc}`);
			}

			for (const img of pick(block, /<image:loc>([^<]+)<\/image:loc>/g)) {
				allImageUrls.add(img);
				const imgPath = img.replace(SITE, '');
				const candidates = [
					path.join(DIST, imgPath.replace(/^\//, '')),
					path.join(ROOT, 'public', imgPath.replace(/^\//, '')),
				];
				let found = false;
				for (const c of candidates) {
					try {
						await access(c);
						found = true;
						break;
					} catch {
						/* next */
					}
				}
				if (!found) fail(`${file}: image file missing for ${img}`);
			}

			for (const [, lang, href] of block.matchAll(/hreflang="([^"]+)"\s+href="([^"]+)"/g)) {
				if (!['en', 'x-default'].includes(lang)) fail(`${file}: extra hreflang ${lang} on ${pageLoc}`);
				const hp = pathFromUrl(href);
				if (REDIRECT_MAP.has(hp) || REDIRECT_MAP.has(hp.replace(/\/$/, ''))) {
					fail(`${file}: hreflang ${lang} points at redirect ${href}`);
				}
			}
		}
	}

	ok(`Audited ${allPageUrls.size} unique page URLs`);
	ok(`Audited ${allImageUrls.size} unique image URLs`);

	const robots = await readFile(path.join(ROOT, 'public/robots.txt'), 'utf8');
	if (!robots.includes(`Sitemap: ${SITE}/sitemap.xml`)) fail('robots.txt missing primary Sitemap');
	else ok('robots.txt points at sitemap.xml');

	const home = await readFile(path.join(DIST, 'index.html'), 'utf8');
	if (!home.includes('href="/sitemap.xml"') && !home.includes(`href="${SITE}/sitemap.xml"`)) {
		fail('Homepage missing <link rel="sitemap">');
	} else ok('Homepage links to sitemap.xml');

	console.log('');
	if (errors) {
		console.error(`${errors} issue(s) found`);
		process.exit(1);
	}
	console.log('Deep sitemap audit passed — all links crawlable.');
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
