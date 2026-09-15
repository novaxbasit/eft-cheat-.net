/**
 * Map retired locale prefixes to English canonical paths (one hop).
 * Imported by functions/_middleware.js and src/worker.ts.
 */
import SLUG_MAP from './locale-slug-map.js';

export const REDIRECT_LOCALES = new Set([
	'es',
	'fr',
	'de',
	'pt',
	'it',
	'nl',
	'pl',
	'ru',
	'tr',
	'ar',
	'ja',
	'ko',
	'zh',
	'hi',
	'id',
	'th',
	'vi',
	'uk',
	'cs',
	'ro',
	'sv',
]);

const BLOG_SLUG_REDIRECTS = {
	'phoenix-tarkov': '/blog/comparing-tarkov-cheats/',
	'cosmo-tarkov': '/blog/comparing-tarkov-cheats/',
	'ghostware-tarkov': '/blog/comparing-tarkov-cheats/',
	'kernaim-tarkov': '/blog/comparing-tarkov-cheats/',
	'cheatvault-tarkov': '/blog/comparing-tarkov-cheats/',
};

const KNOWN_ENGLISH_PREFIXES = new Set([
	'features',
	'pricing',
	'setup',
	'updates',
	'faq',
	'support',
	'reviews',
	'blog',
	'privacy-policy',
	'refund-policy',
	'terms',
	'sitemap',
	'tarkov-esp',
	'tarkov-aimbot',
	'tarkov-radar-hack',
]);

/**
 * @param {string} pathname
 * @returns {string | null}
 */
export function localeToEnglish(pathname) {
	const segs = pathname.split('/').filter(Boolean);
	if (segs.length === 0) return null;
	const lang = segs[0].toLowerCase();
	if (!REDIRECT_LOCALES.has(lang)) return null;

	const rest = segs.slice(1);
	if (rest.length === 0) return '/';

	const first = rest[0];
	if (first.endsWith('.xml')) return '/sitemap.xml';

	if (first === 'blog') {
		if (rest.length === 1) return '/blog/';
		const slug = rest[1];
		return BLOG_SLUG_REDIRECTS[slug] || `/blog/${slug}/`;
	}

	if (first === 'site-map' || first === 'sitemap') return '/sitemap/';
	if (first === 'reviews') return '/reviews/';
	if (first === 'faq') {
		if (rest.length === 1) return '/faq/';
		return `/faq/#${rest[1]}`;
	}

	const mapped = SLUG_MAP[first];
	if (mapped) return mapped;

	if (KNOWN_ENGLISH_PREFIXES.has(first)) {
		return `/${rest.join('/')}/`.replace(/\/{2,}/g, '/');
	}

	return '/';
}
