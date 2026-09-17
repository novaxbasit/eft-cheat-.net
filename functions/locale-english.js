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
	'phoenix-tarkov': '/forum/how-does-it-compare/',
	'cosmo-tarkov': '/forum/how-does-it-compare/',
	'ghostware-tarkov': '/forum/how-does-it-compare/',
	'kernaim-tarkov': '/forum/how-does-it-compare/',
	'cheatvault-tarkov': '/forum/how-does-it-compare/',
	'comparing-tarkov-cheats': '/forum/how-does-it-compare/',
	'tarkov-cheats-review': '/forum/is-it-worth-it/',
	'tarkov-esp-notes': '/forum/esp-not-showing-in-raid/',
	'buy-tarkov-cheats': '/forum/how-do-i-get-access/',
	'tarkov-cheats-price': '/forum/how-much-does-it-cost/',
	'tarkov-cheats-pc': '/forum/system-requirements/',
	'tarkov-loot-esp': '/forum/loot-esp-too-cluttered/',
	'tarkov-aimbot-notes': '/forum/best-aimbot-settings/',
	'tarkov-wallhack-notes': '/forum/wallhack-and-chams/',
	'patch-day-notes': '/forum/safe-to-play-after-a-patch/',
	'tarkov-arena': '/forum/does-it-work-in-arena/',
	'tarkov-no-recoil': '/forum/no-recoil-settings/',
	'tarkov-radar-notes': '/forum/is-radar-worth-it/',
};

const KNOWN_ENGLISH_PREFIXES = new Set([
	'features',
	'pricing',
	'setup',
	'updates',
	'faq',
	'support',
	'reviews',
	'forum',
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

	if (first === 'blog' || first === 'forum') {
		if (rest.length === 1) return '/forum/';
		const slug = rest[1];
		return BLOG_SLUG_REDIRECTS[slug] || `/forum/${slug}/`;
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
