#!/usr/bin/env node
/**
 * Validates built sitemaps match all routable pages.
 * Run after `npm run build`: node scripts/validate-sitemaps.mjs
 * Site URL and image-sitemap count come from src/data/brand.ts.
 */
import { readFileSync } from 'node:fs';
import { access, readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

function readBrandSource() {
	return readFileSync(path.join(ROOT, 'src/data/brand.ts'), 'utf8');
}

function readBrandUrl() {
	const src = readBrandSource();
	const m = src.match(/(?:^|\n)\turl:\s*'((?:\\'|[^'])*)'/);
	if (!m) throw new Error('brand.ts missing url');
	return m[1].replace(/\\'/g, "'").replace(/\/$/, '');
}

function countBrandSitemapImages() {
	const src = readBrandSource();
	const block = src.match(/sitemap:\s*\{([\s\S]*?)\n\t\},/);
	if (!block) return 6;
	const srcs = [...block[1].matchAll(/src:\s*'((?:\\'|[^'])*)'/g)].map((m) => m[1]);
	return new Set(srcs).size || 6;
}

/** dist/ for static builds; dist/client/ when a Cloudflare adapter rearranges assets. */
async function resolveDistRoot() {
	const candidates = [
		path.join(ROOT, 'dist'),
		path.join(ROOT, 'dist', 'client'),
	];
	for (const dir of candidates) {
		try {
			await access(path.join(dir, 'sitemap.xml'));
			return dir;
		} catch {
			// try next candidate
		}
	}
	throw new Error(
		'Could not find sitemap.xml in dist/ or dist/client/. Run `astro build` first.',
	);
}
const SITE = readBrandUrl();
const IMAGE_SITEMAP_ENTRIES = countBrandSitemapImages();

const BLOG_PAGES = 20; // /blog/ index + 19 posts
const REVIEW_PAGES = 11; // /reviews/ index + 10 review detail pages
const FAQ_PAGES = 5; // unique FAQ answer pages (hub duplicates 301 to /faq/)
const HTML_SITEMAP_PAGES = 1; // /site-map/
const BLOG_SLUG_REDIRECTS = 6; // old keyword slugs that matched product URLs
const IA_ALIAS_REDIRECTS = 4; // /status/ /store/ /hacks/ /guides/
const FAQ_HUB_REDIRECTS = 7; // generic FAQ answers now on /faq/
/** Product pages in sitemap — excludes cannibal EN URLs that 301 to stronger pillars */
const ENGLISH_PRODUCT_PAGES = 14;
const ENGLISH_PAGES =
	ENGLISH_PRODUCT_PAGES + BLOG_PAGES + REVIEW_PAGES + FAQ_PAGES + HTML_SITEMAP_PAGES;
const I18N_LOCALES = 21;
/** Locale product pages also exclude the same cannibal pageIds */
const PRODUCT_PAGES_PER_LOCALE = 14;
const BLOG_PAGES_PER_LOCALE = 0; // Locale blog URLs 301 to EN; not in sitemaps
const HTML_SITEMAP_PER_LOCALE = 1;
const PAGES_PER_LOCALE = PRODUCT_PAGES_PER_LOCALE + BLOG_PAGES_PER_LOCALE + HTML_SITEMAP_PER_LOCALE;
const I18N_URLS = I18N_LOCALES * PAGES_PER_LOCALE;
const TOTAL_PAGES = ENGLISH_PAGES + I18N_URLS;
/** Full EN HTML may still emit redirect stubs for cannibal URLs; sitemaps omit them */
const ENGLISH_HTML_PAGES =
	25 +
	IA_ALIAS_REDIRECTS +
	BLOG_PAGES +
	BLOG_SLUG_REDIRECTS +
	REVIEW_PAGES +
	FAQ_PAGES +
	FAQ_HUB_REDIRECTS +
	HTML_SITEMAP_PAGES;
/** Locale HTML = product pages + blog redirect stubs + HTML sitemap */
const LOCALE_BLOG_REDIRECT_PAGES = 20;
const TOTAL_HTML_PAGES =
	ENGLISH_HTML_PAGES +
	I18N_LOCALES * (PRODUCT_PAGES_PER_LOCALE + LOCALE_BLOG_REDIRECT_PAGES + HTML_SITEMAP_PER_LOCALE);
const HREFLANG_PER_URL = 23;
const SITEMAP_INDEX_ENTRIES = 1 + I18N_LOCALES + 1; // EN + locales + images

/** Built HTML that intentionally 301s — allowed to be absent from sitemaps */
const REDIRECT_ONLY_PATHS = new Set([
	'/best-tarkov-cheats/',
	'/tarkov-aimbot-hack/',
	'/tarkov-esp-hack/',
	'/tarkov-cheats-2026/',
	'/undetected-tarkov-cheats/',
	'/tarkov-mod-menu/',
	'/tarkov-unlock-all/',
	'/tarkov-soft-aim/',
	'/tarkov-wallhack/',
	'/tarkov-cheat-download/',
	'/battleye-bypass/',
	'/status/',
	'/store/',
	'/hacks/',
	'/guides/',
	'/faq/what-are-tarkov-cheats/',
	'/faq/are-tarkov-cheats-undetected-in-2026/',
	'/faq/pmc-raids-and-scav-runs/',
	'/faq/esp-wallhack-radar-or-aimbot/',
	'/faq/how-are-licenses-delivered/',
	'/faq/where-to-check-updates/',
	'/faq/how-to-contact-support/',
	'/blog/best-tarkov-cheats/',
	'/blog/tarkov-esp/',
	'/blog/tarkov-aimbot/',
	'/blog/tarkov-wallhack/',
	'/blog/undetected-tarkov-cheats/',
	'/blog/tarkov-radar/',
]);

const ENGLISH_PATHS = [
	'/',
	'/tarkov-esp/',
	'/tarkov-aimbot/',
	'/features/',
	'/pricing/',
	'/setup/',
	'/updates/',
	'/faq/',
	'/support/',
	'/undetected-tarkov-cheats/',
	'/tarkov-wallhack/',
	'/tarkov-radar-hack/',
	'/battleye-bypass/',
	'/tarkov-cheats-2026/',
	'/tarkov-cheats/',
	'/tarkov-cheat-download/',
	'/tarkov-mod-menu/',
	'/tarkov-soft-aim/',
	'/tarkov-unlock-all/',
	'/privacy-policy/',
	'/refund-policy/',
	'/terms/',
	'/blog/',
	'/blog/tarkov-cheats-review/',
	'/blog/comparing-tarkov-cheats/',
	'/blog/cheatvault-tarkov/',
	'/blog/ghostware-tarkov/',
	'/blog/kernaim-tarkov/',
	'/blog/cosmo-tarkov/',
	'/blog/phoenix-tarkov/',
	'/blog/tarkov-esp-notes/',
	'/blog/buy-tarkov-cheats/',
	'/blog/tarkov-cheats-price/',
	'/blog/tarkov-cheats-pc/',
	'/blog/tarkov-loot-esp/',
	'/blog/tarkov-aimbot-notes/',
	'/blog/tarkov-wallhack-notes/',
	'/blog/patch-day-notes/',
	'/blog/tarkov-arena/',
	'/blog/cloud-dma/',
	'/blog/tarkov-no-recoil/',
	'/blog/tarkov-radar-notes/',
	'/site-map/',
	'/reviews/',
	'/reviews/tarkov-aimbot-review-xkrypt0/',
	'/reviews/tarkov-esp-raid-review-buildsr4k/',
	'/reviews/tarkov-cloud-dma-review-dma-wizard/',
	'/reviews/tarkov-aimbot-review-ctrl-player99/',
	'/reviews/tarkov-cheat-setup-review-stormchaser07/',
	'/reviews/tarkov-loot-esp-review-lootgoblinx/',
	'/reviews/tarkov-no-recoil-review-raidgrind42/',
	'/reviews/tarkov-stream-proof-review-vanlifeeft/',
	'/reviews/tarkov-battleye-update-review-patchdaymike/',
	'/reviews/tarkov-sniper-aimbot-review-snipezonly/',
	'/faq/what-is-a-tarkov-wallhack/',
	'/faq/does-tarkov-cheats-include-stream-proof/',
	'/faq/battleye-anti-cheat-and-tarkov-cheats/',
	'/faq/is-cloud-dma-required/',
	'/faq/buy-undetected-tarkov-cheats-windows-pc/',
];

const LOCALE_CODES = [
	'en', 'es', 'fr', 'de', 'pt', 'it', 'nl', 'pl', 'ru', 'tr',
	'ar', 'ja', 'ko', 'zh', 'hi', 'id', 'th', 'vi', 'uk', 'cs', 'ro', 'sv',
];

const I18N_LOCALE_CODES = LOCALE_CODES.filter((code) => code !== 'en');

function extractLocs(xml) {
	return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

function extractHreflangCount(xml, url) {
	const block = xml.split('<loc>').find((part) => part.startsWith(url.replace(/&/g, '&amp;')));
	if (!block) return 0;
	return (block.match(/hreflang="/g) ?? []).length;
}

async function collectHtmlPaths(dir, base = '') {
	const entries = await readdir(dir, { withFileTypes: true });
	const paths = [];
	for (const entry of entries) {
		const rel = `${base}/${entry.name}`.replace(/\\/g, '/');
		if (entry.isDirectory()) {
			paths.push(...(await collectHtmlPaths(path.join(dir, entry.name), rel)));
		} else if (entry.name === 'index.html') {
			const urlPath = rel.replace(/\/index\.html$/, '/') || '/';
			paths.push(urlPath === '' ? '/' : urlPath);
		}
	}
	return paths;
}

function fail(msg) {
	console.error(`✗ ${msg}`);
	process.exitCode = 1;
}

function ok(msg) {
	console.log(`✓ ${msg}`);
}

async function main() {
	console.log('Validating sitemaps…\n');
	let errors = 0;
	const bump = () => {
		errors += 1;
	};

	const DIST = await resolveDistRoot();
	if (DIST !== path.join(ROOT, 'dist')) {
		console.log(`Using build output at ${path.relative(ROOT, DIST)}/\n`);
	}

	const sitemapIndex = await readFile(path.join(DIST, 'sitemap.xml'), 'utf8');
	const sitemapEn = await readFile(path.join(DIST, 'sitemap-en.xml'), 'utf8');
	const sitemapI18n = await readFile(path.join(DIST, 'sitemap-i18n.xml'), 'utf8');
	const sitemapImages = await readFile(path.join(DIST, 'sitemap-images.xml'), 'utf8');
	const robots = await readFile(path.join(ROOT, 'public', 'robots.txt'), 'utf8');
	const redirects = await readFile(path.join(ROOT, 'public', '_redirects'), 'utf8');

	const indexLocs = extractLocs(sitemapIndex);
	const enLocs = extractLocs(sitemapEn);
	const i18nLocs = extractLocs(sitemapI18n);
	const imageLocs = extractLocs(sitemapImages);

	// sitemap.xml must be a sitemap index (not a urlset)
	if (!sitemapIndex.includes('<sitemapindex')) {
		fail('sitemap.xml must be a sitemap index (<sitemapindex>)');
		bump();
	} else ok('sitemap.xml is a valid sitemap index');

	// Legacy sitemap-index.xml must not be emitted — redirect handles old URLs
	try {
		await access(path.join(DIST, 'sitemap-index.xml'));
		fail('sitemap-index.xml must not exist in dist/ (use redirect to sitemap.xml)');
		bump();
	} catch {
		ok('sitemap-index.xml not emitted (legacy URL redirects to sitemap.xml)');
	}

	if (!redirects.includes('/sitemap-index.xml /sitemap.xml 301')) {
		fail('_redirects missing 301: /sitemap-index.xml → /sitemap.xml');
		bump();
	} else ok('_redirects 301s sitemap-index.xml → sitemap.xml');

	// Per-locale sitemap files
	const localeSitemapLocs = {};
	let localeUrlTotal = 0;
	for (const locale of I18N_LOCALE_CODES) {
		const file = path.join(DIST, `sitemap-${locale}.xml`);
		const xml = await readFile(file, 'utf8');
		const locs = extractLocs(xml);
		localeSitemapLocs[locale] = locs;
		localeUrlTotal += locs.length;

		if (locs.length !== PAGES_PER_LOCALE) {
			fail(`sitemap-${locale}.xml: expected ${PAGES_PER_LOCALE} URLs, got ${locs.length}`);
			bump();
		}
	}
	if (errors === 0) {
		ok(`All 21 locale sitemaps have ${PAGES_PER_LOCALE} URLs each (${localeUrlTotal} total)`);
	}

	// Count checks
	if (enLocs.length !== ENGLISH_PAGES) {
		fail(`sitemap-en.xml: expected ${ENGLISH_PAGES} URLs, got ${enLocs.length}`);
		bump();
	} else ok(`sitemap-en.xml has ${ENGLISH_PAGES} English URLs`);

	if (i18nLocs.length !== I18N_URLS) {
		fail(`sitemap-i18n.xml: expected ${I18N_URLS} URLs, got ${i18nLocs.length}`);
		bump();
	} else ok(`sitemap-i18n.xml has ${I18N_URLS} localized URLs (backward-compat aggregate)`);

	if (localeUrlTotal !== I18N_URLS) {
		fail(`Per-locale sitemaps total: expected ${I18N_URLS}, got ${localeUrlTotal}`);
		bump();
	}

	if (imageLocs.length !== IMAGE_SITEMAP_ENTRIES) {
		fail(`sitemap-images.xml: expected ${IMAGE_SITEMAP_ENTRIES} image host URLs, got ${imageLocs.length}`);
		bump();
	} else ok(`sitemap-images.xml has ${IMAGE_SITEMAP_ENTRIES} image entries`);

	const uniqueImageHosts = new Set(imageLocs);
	if (uniqueImageHosts.size !== imageLocs.length) {
		fail(
			`sitemap-images.xml has duplicate <loc> hosts (${imageLocs.length} locs, ${uniqueImageHosts.size} unique) — causes crawl warnings`,
		);
		bump();
	} else ok('sitemap-images.xml has unique page <loc> hosts (no duplicates)');

	for (const required of [`${SITE}/features/`, `${SITE}/pricing/`, `${SITE}/updates/`]) {
		if (!enLocs.includes(required)) {
			fail(`Missing core page in sitemap-en.xml: ${required}`);
			bump();
		}
	}
	if (errors === 0) {
		ok('Core pages present in sitemap-en.xml: /features/ /pricing/ /updates/');
	}

	for (const required of [`${SITE}/features/`, `${SITE}/pricing/`, `${SITE}/updates/`]) {
		if (!imageLocs.includes(required)) {
			fail(`Missing core host in sitemap-images.xml: ${required}`);
			bump();
		}
	}
	if (errors === 0) {
		ok('Image sitemap hosts Features, Pricing (/pricing/), and Updates (/updates/)');
	}

	// English path coverage (skip intentional 301 stubs)
	for (const p of ENGLISH_PATHS) {
		if (REDIRECT_ONLY_PATHS.has(p)) continue;
		const full = `${SITE}${p === '/' ? '/' : p}`;
		if (!enLocs.includes(full)) {
			fail(`Missing English URL in sitemap-en.xml: ${full}`);
			bump();
		}
	}
	if (errors === 0) ok(`All ${ENGLISH_PAGES} English canonical paths present in sitemap-en.xml`);

	if (sitemapEn.includes('/undefined') || sitemapEn.includes('undefined</image:loc>')) {
		fail('sitemap-en.xml contains broken image:loc ending in /undefined');
		bump();
	} else ok('sitemap-en.xml has no undefined image URLs');

	// Every page URL must include Google image sitemap annotations (SERP / Images crawl)
	function countUrlsMissingImages(xml) {
		const blocks = xml.split(/<url>/i).slice(1);
		return blocks.filter((block) => !/<image:image[\s>]/i.test(block)).length;
	}

	const enMissingImages = countUrlsMissingImages(sitemapEn);
	if (enMissingImages > 0) {
		fail(`sitemap-en.xml: ${enMissingImages} <url> entries missing <image:image>`);
		bump();
	} else ok('Every English sitemap URL has <image:image>');

	let localeMissingImages = 0;
	for (const locale of I18N_LOCALE_CODES) {
		const xml = await readFile(path.join(DIST, `sitemap-${locale}.xml`), 'utf8');
		localeMissingImages += countUrlsMissingImages(xml);
	}
	if (localeMissingImages > 0) {
		fail(`Locale sitemaps: ${localeMissingImages} <url> entries missing <image:image>`);
		bump();
	} else ok('Every locale sitemap URL has <image:image>');

	// No overlap between EN and i18n sitemaps
	const overlap = enLocs.filter((u) => i18nLocs.includes(u));
	if (overlap.length > 0) {
		fail(`Duplicate URLs in both sitemaps: ${overlap.join(', ')}`);
		bump();
	} else ok('No duplicate URLs between sitemap-en.xml and sitemap-i18n.xml');

	// Per-locale sitemaps match combined i18n sitemap
	const perLocaleSet = new Set(Object.values(localeSitemapLocs).flat());
	const i18nSet = new Set(i18nLocs);
	const missingInAggregate = [...perLocaleSet].filter((u) => !i18nSet.has(u));
	const extraInAggregate = [...i18nSet].filter((u) => !perLocaleSet.has(u));
	if (missingInAggregate.length > 0 || extraInAggregate.length > 0) {
		fail('Per-locale sitemaps and sitemap-i18n.xml URL sets differ');
		bump();
	} else ok('Per-locale sitemaps match sitemap-i18n.xml URL set');

	// HTTPS + trailing slash (page URLs only — sub-sitemap .xml locs omit trailing slash)
	for (const loc of [...enLocs, ...i18nLocs]) {
		if (!loc.startsWith('https://')) {
			fail(`Non-HTTPS URL: ${loc}`);
			bump();
		}
		if (!loc.endsWith('/')) {
			fail(`URL missing trailing slash: ${loc}`);
			bump();
		}
		if (loc.includes('www.')) {
			fail(`URL must use apex domain (no www): ${loc}`);
			bump();
		}
	}
	for (const loc of indexLocs) {
		if (!loc.startsWith('https://')) {
			fail(`Non-HTTPS sub-sitemap URL: ${loc}`);
			bump();
		}
		if (loc.includes('www.')) {
			fail(`Sub-sitemap URL must use apex domain (no www): ${loc}`);
			bump();
		}
	}
	if (errors === 0) ok('All sitemap URLs use HTTPS apex with trailing slashes');

	// hreflang on homepage
	const homeHreflang = extractHreflangCount(sitemapEn, `${SITE}/`);
	if (homeHreflang !== HREFLANG_PER_URL) {
		fail(`Homepage hreflang links: expected ${HREFLANG_PER_URL}, got ${homeHreflang}`);
		bump();
	} else ok(`Homepage has ${HREFLANG_PER_URL} hreflang alternates (22 locales + x-default)`);

	// sitemap.xml index — EN + 21 locale sitemaps + images
	if (indexLocs.length !== SITEMAP_INDEX_ENTRIES) {
		fail(`sitemap.xml: expected ${SITEMAP_INDEX_ENTRIES} sub-sitemaps, got ${indexLocs.length}`);
		bump();
	} else ok(`sitemap.xml lists ${SITEMAP_INDEX_ENTRIES} sub-sitemaps`);

	if (!indexLocs.includes(`${SITE}/sitemap-en.xml`)) {
		fail('sitemap.xml missing sitemap-en.xml');
		bump();
	}
	if (!indexLocs.includes(`${SITE}/sitemap-images.xml`)) {
		fail('sitemap.xml missing sitemap-images.xml');
		bump();
	}
	for (const locale of I18N_LOCALE_CODES) {
		const loc = `${SITE}/sitemap-${locale}.xml`;
		if (!indexLocs.includes(loc)) {
			fail(`sitemap.xml missing sitemap-${locale}.xml`);
			bump();
		}
	}
	if (errors === 0) ok('sitemap.xml lists English, all 21 locale, and image sitemaps');

	// robots.txt — single GSC submission path
	if (!robots.includes(`${SITE}/sitemap.xml`)) {
		fail('robots.txt missing Sitemap: sitemap.xml');
		bump();
	}
	if (robots.includes(`${SITE}/sitemap-index.xml`)) {
		fail('robots.txt must not list legacy sitemap-index.xml');
		bump();
	}
	for (const sub of ['sitemap-i18n.xml', 'sitemap-images.xml', 'sitemap-en.xml', 'sitemap-blog.xml']) {
		if (robots.includes(`${SITE}/${sub}`)) {
			fail(`robots.txt must not list redundant sitemap: ${sub} (already covered by sitemap.xml index)`);
			bump();
		}
	}
	if (errors === 0) ok('robots.txt lists sitemap.xml only (primary GSC submission path)');

	// Built HTML vs sitemap total
	const htmlPaths = await collectHtmlPaths(DIST);
	const sitemapPaths = new Set([
		...enLocs.map((u) => u.replace(SITE, '') || '/'),
		...i18nLocs.map((u) => u.replace(SITE, '')),
	]);

	const htmlSet = new Set(htmlPaths);
	const missingFromSitemap = [...htmlSet].filter((p) => {
		if (sitemapPaths.has(p) || REDIRECT_ONLY_PATHS.has(p)) return false;
		// Locale blog stubs 301 to EN — intentionally omitted from sitemaps
		if (/^\/[a-z]{2}\/blog(\/|$)/.test(p)) return false;
		return true;
	});
	const extraInSitemap = [...sitemapPaths].filter((p) => !htmlSet.has(p));

	if (htmlSet.size !== TOTAL_HTML_PAGES) {
		fail(`Built HTML pages: expected ${TOTAL_HTML_PAGES}, got ${htmlSet.size}`);
		bump();
	} else ok(`${TOTAL_HTML_PAGES} HTML pages built (${REDIRECT_ONLY_PATHS.size} EN redirect-only omitted from sitemaps)`);

	if (missingFromSitemap.length > 0) {
		fail(`HTML pages missing from sitemaps: ${missingFromSitemap.slice(0, 5).join(', ')}${missingFromSitemap.length > 5 ? '…' : ''}`);
		bump();
	} else ok('Every indexable HTML page is listed in a sitemap');

	if (extraInSitemap.length > 0) {
		fail(`Sitemap URLs without HTML: ${extraInSitemap.slice(0, 5).join(', ')}`);
		bump();
	} else ok('Every sitemap URL has a matching HTML page');

	// Locale homepages in per-locale sitemaps
	for (const locale of I18N_LOCALE_CODES) {
		const home = `${SITE}/${locale}/`;
		if (!localeSitemapLocs[locale].includes(home)) {
			fail(`Missing locale homepage in sitemap-${locale}.xml: ${home}`);
			bump();
		}
	}
	if (errors === 0) ok('All 21 non-English locale homepages in per-locale sitemaps');

	// Locale URL count summary
	console.log('\nLocale URL counts (per-locale sitemaps):');
	for (const locale of I18N_LOCALE_CODES) {
		console.log(`  ${locale}: ${localeSitemapLocs[locale].length}`);
	}

	console.log('');
	if (errors > 0) {
		console.error(`Validation failed with ${errors} error(s).`);
		process.exit(1);
	}
	console.log('All sitemap checks passed.');
	console.log(`\nSubmit to Google Search Console: ${SITE}/sitemap.xml`);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
