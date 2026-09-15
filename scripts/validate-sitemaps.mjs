#!/usr/bin/env node
/**
 * Validates built sitemaps match the English-only IA.
 * Run after `npm run build`: node scripts/validate-sitemaps.mjs
 */
import { access, readFile, readdir } from 'node:fs/promises';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const MIN_DATE = '2026-08-20';

function readBrandUrl() {
	const src = readFileSync(path.join(ROOT, 'src/data/brand.ts'), 'utf8');
	const m = src.match(/(?:^|\n)\turl:\s*'((?:\\'|[^'])*)'/);
	if (!m) throw new Error('brand.ts missing url');
	return m[1].replace(/\\'/g, "'").replace(/\/$/, '');
}

async function resolveDistRoot() {
	for (const dir of [path.join(ROOT, 'dist'), path.join(ROOT, 'dist', 'client')]) {
		try {
			await access(path.join(dir, 'sitemap.xml'));
			return dir;
		} catch {
			// next
		}
	}
	throw new Error('Could not find sitemap.xml in dist/. Run `astro build` first.');
}

const SITE = readBrandUrl();

const REQUIRED_PATHS = [
	'/',
	'/features/',
	'/tarkov-esp/',
	'/tarkov-aimbot/',
	'/tarkov-radar-hack/',
	'/pricing/',
	'/updates/',
	'/setup/',
	'/faq/',
	'/support/',
	'/reviews/',
	'/blog/',
	'/privacy-policy/',
	'/refund-policy/',
	'/terms/',
	'/sitemap/',
];

const FORBIDDEN_PATH_SNIPPETS = [
	'/tarkov-cheats/',
	'/site-map/',
	'/cheats/',
	'/guides/',
	'/esp/',
	'/aimbot/',
	'/privacy/',
	'/undetected-tarkov-cheats/',
	'/battleye-bypass/',
	'/tarkov-wallhack/',
	'/blog/phoenix-tarkov/',
	'/blog/cosmo-tarkov/',
	'/blog/ghostware-tarkov/',
	'/blog/kernaim-tarkov/',
	'/blog/cheatvault-tarkov/',
];

const LOCALE_PREFIXES = [
	'es', 'fr', 'de', 'pt', 'it', 'nl', 'pl', 'ru', 'tr', 'ar',
	'ja', 'ko', 'zh', 'hi', 'id', 'th', 'vi', 'uk', 'cs', 'ro', 'sv',
];

function pathFromLoc(loc) {
	return loc.replace(SITE, '') || '/';
}

function htmlRel(urlPath) {
	if (urlPath === '/') return 'index.html';
	return `${urlPath.replace(/^\//, '').replace(/\/$/, '')}/index.html`;
}

let errors = 0;
const fail = (msg) => {
	console.error(`✗ ${msg}`);
	errors += 1;
};
const ok = (msg) => console.log(`✓ ${msg}`);

async function main() {
	const DIST = await resolveDistRoot();
	const sitemapXml = await readFile(path.join(DIST, 'sitemap.xml'), 'utf8');
	const enXml = await readFile(path.join(DIST, 'sitemap-en.xml'), 'utf8');
	const imagesXml = await readFile(path.join(DIST, 'sitemap-images.xml'), 'utf8');

	if (sitemapXml.includes('<sitemapindex')) fail('sitemap.xml must be a urlset, not a sitemapindex');
	else ok('sitemap.xml is a urlset');

	if (!sitemapXml.includes('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"')) {
		fail('sitemap.xml missing sitemap 0.9 xmlns');
	}
	if (sitemapXml.includes('xmlns:xhtml=')) fail('sitemap.xml should not include xhtml/hreflang');
	if (sitemapXml.includes('xmlns:image=')) fail('sitemap.xml should not include image extensions');
	if (sitemapXml.includes('<image:') || sitemapXml.includes('<xhtml:')) {
		fail('sitemap.xml should be loc/lastmod/changefreq/priority only');
	}

	if (sitemapXml !== enXml) fail('sitemap-en.xml must match sitemap.xml');
	else ok('sitemap-en.xml matches sitemap.xml');

	const locs = [...sitemapXml.matchAll(/<url>[\s\S]*?<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
	const paths = locs.map(pathFromLoc);

	for (const p of REQUIRED_PATHS) {
		if (!paths.includes(p)) fail(`sitemap.xml missing ${p}`);
	}
	ok(`Required IA URLs present (${REQUIRED_PATHS.length})`);

	for (const loc of locs) {
		const p = pathFromLoc(loc);
		if (!loc.startsWith(SITE)) fail(`non-apex loc ${loc}`);
		if (!loc.endsWith('/')) fail(`missing trailing slash ${loc}`);
		if (FORBIDDEN_PATH_SNIPPETS.some((snip) => p === snip || p.startsWith(snip))) {
			fail(`forbidden URL in sitemap ${p}`);
		}
		if (LOCALE_PREFIXES.some((code) => p === `/${code}/` || p.startsWith(`/${code}/`))) {
			fail(`locale URL in sitemap ${p}`);
		}
		if (p.startsWith('/faq/') && p !== '/faq/') fail(`FAQ permalink in sitemap ${p}`);
		if (p.startsWith('/reviews/') && p !== '/reviews/') fail(`review permalink in sitemap ${p}`);

		const lastmod = sitemapXml.includes(loc)
			? (sitemapXml.split(`<loc>${loc}</loc>`)[1] || '').match(/<lastmod>([^<]+)<\/lastmod>/)?.[1]
			: null;
		if (lastmod && lastmod < MIN_DATE) fail(`${p} lastmod ${lastmod} is before ${MIN_DATE}`);

		try {
			await access(path.join(DIST, htmlRel(p)));
		} catch {
			fail(`no HTML for ${p}`);
		}
	}
	ok(`${locs.length} English URL(s) in sitemap.xml`);

	const dupes = locs.filter((loc, i) => locs.indexOf(loc) !== i);
	if (dupes.length) fail(`duplicate loc in sitemap.xml: ${[...new Set(dupes)].join(', ')}`);
	else ok('No duplicate loc URLs');

	const imageHosts = [...imagesXml.matchAll(/<url>[\s\S]*?<loc>([^<]+)<\/loc>/g)].map((m) => pathFromLoc(m[1]));
	for (const p of ['/', '/features/', '/pricing/', '/updates/', '/tarkov-esp/', '/tarkov-aimbot/']) {
		if (!imageHosts.includes(p)) fail(`sitemap-images.xml missing host ${p}`);
	}
	ok('Image sitemap hosts match the IA');

	const localeXmls = (await readdir(DIST)).filter((f) => /^sitemap-[a-z]{2}\.xml$/.test(f) && f !== 'sitemap-en.xml');
	if (localeXmls.length) fail(`locale sitemap files still in dist: ${localeXmls.join(', ')}`);
	else ok('No locale sitemap files in dist');

	const robots = await readFile(path.join(ROOT, 'public/robots.txt'), 'utf8');
	if (!robots.includes('Disallow: /brand-studio/')) fail('robots.txt missing brand-studio disallow');
	if (!robots.includes('Disallow: /__brand/')) fail('robots.txt missing __brand disallow');
	if (!robots.includes(`Sitemap: ${SITE}/sitemap.xml`)) fail('robots.txt missing Sitemap');
	else ok('robots.txt');

	const home = await readFile(path.join(DIST, 'index.html'), 'utf8');
	const h1s = [...home.matchAll(/<h1\b[^>]*>[\s\S]*?<\/h1>/gi)];
	if (h1s.length !== 1) fail(`homepage has ${h1s.length} H1(s), expected 1`);
	else if (!/Escape from Tarkov[\s\S]*Cheats/i.test(h1s[0][0])) fail('homepage H1 is not Escape from Tarkov Cheats');
	else ok('Homepage has 1 H1: Escape from Tarkov Cheats');

	if (/class="[^"]*pubg-/.test(home) || /id="[^"]*pubg-/.test(home)) fail('homepage still has pubg-* classes');
	else ok('No pubg-* classes on homepage');

	if (!home.includes('"@type":"FAQPage"') && !home.includes('"@type": "FAQPage"')) fail('homepage missing FAQPage JSON-LD');
	else ok('Homepage FAQPage JSON-LD present');

	if (!home.includes(`"url":"${SITE}/"`) && !home.includes(`"url": "${SITE}/"`)) {
		fail('homepage Product/WebPage url is not the homepage');
	} else ok('Homepage Product.url / WebPage.url is the homepage');

	if (!home.includes('site-faq__a')) fail('homepage FAQ answers missing');
	else ok('Homepage FAQ answers are in the HTML');

	if (errors) {
		console.error(`\n${errors} sitemap validation error(s)`);
		process.exit(1);
	}
	console.log('\nSitemap validation passed.');
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
