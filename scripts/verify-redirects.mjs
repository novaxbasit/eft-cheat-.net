import { readFileSync } from 'node:fs';
import { localeToEnglish } from '../functions/locale-english.js';

const PATH = JSON.parse(readFileSync(new URL('../functions/path-redirects.json', import.meta.url), 'utf8'));
const CANNIBAL = JSON.parse(readFileSync(new URL('../functions/cannibal-redirects.json', import.meta.url), 'utf8'));

function xmlTrailingSlashRedirect(pathname) {
	if (!pathname.endsWith('.xml/')) return null;
	return pathname.slice(0, -1);
}

function trailingSlashRedirect(pathname) {
	if (!pathname || pathname === '/' || pathname.includes('.') || pathname.endsWith('/')) {
		return null;
	}
	return `${pathname}/`;
}

function resolvePathRedirect(pathname) {
	return (
		localeToEnglish(pathname) ??
		PATH[pathname] ??
		CANNIBAL[pathname] ??
		xmlTrailingSlashRedirect(pathname) ??
		trailingSlashRedirect(pathname)
	);
}

const must = {
	'/esp': '/tarkov-esp/',
	'/esp/': '/tarkov-esp/',
	'/aimbot': '/tarkov-aimbot/',
	'/aimbot/': '/tarkov-aimbot/',
	'/cheats': '/',
	'/cheats/': '/',
	'/privacy': '/privacy-policy/',
	'/privacy/': '/privacy-policy/',
	'/sitemap': '/sitemap/',
	'/site-map': '/sitemap/',
	'/site-map/': '/sitemap/',
	'/guides': '/',
	'/guides/': '/',
	'/tarkov-cheats': '/',
	'/tarkov-cheats/': '/',
	'/es/': '/',
	'/ja/': '/',
	'/privacy/': '/privacy-policy/',
};

let fail = 0;
for (const [from, want] of Object.entries(must)) {
	const got = resolvePathRedirect(from);
	const ok = got === want;
	console.log(ok ? 'OK' : 'FAIL', from, '->', got, ok ? '' : `(want ${want})`);
	if (!ok) fail += 1;
}

const sitemapStay = resolvePathRedirect('/sitemap.xml');
console.log(sitemapStay ? `FAIL /sitemap.xml redirected to ${sitemapStay}` : 'OK /sitemap.xml stays (no redirect)');
if (sitemapStay) fail += 1;

const htmlSitemap = resolvePathRedirect('/sitemap/');
console.log(htmlSitemap ? `FAIL /sitemap/ redirected to ${htmlSitemap}` : 'OK /sitemap/ stays (HTML)');
if (htmlSitemap) fail += 1;

if (fail) process.exit(1);
console.log('All required redirect mappings are one hop.');
