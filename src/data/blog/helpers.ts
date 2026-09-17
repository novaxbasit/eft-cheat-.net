import { siteConfig } from '../site';
import { tarkovImages } from '../tarkov';
import { blogSitemapImageMeta } from '../brand-sitemap';
import {
	defaultLocale,
	localeMap,
	type LocaleCode,
	locales,
} from '../i18n/locales';
import { resolvePageContextFromPath } from '../i18n/routing';
import type { BlogImageKey, BlogPostDefinition, BlogTranslation, ResolvedBlogPost } from './types';
import { blogPosts as rawBlogPosts } from './posts.generated';

const imageMap: Record<BlogImageKey, string> = {
	hero: tarkovImages.espWallhack,
	espWallhack: tarkovImages.espWallhack,
	aimbotCombat: tarkovImages.aimbotCombat,
	aimbotSkeleton: tarkovImages.aimbotSkeleton,
	squadFight: tarkovImages.aimbotCombat,
	headerArt: tarkovImages.patchNotes,
	cheatsPackage: tarkovImages.patchNotes,
	playerEsp: tarkovImages.patchNotes,
	rebootFight: tarkovImages.aimbotCombat,
	battleRoyaleCombat: tarkovImages.cheatsCombat,
	battleRoyaleIslandMap: tarkovImages.espWallhack,
};

const FALLBACK_BLOG_IMAGE = tarkovImages.espWallhack;

function expandTranslations(
	translations: Partial<Record<LocaleCode, BlogTranslation>> & { en: BlogTranslation },
): Record<LocaleCode, BlogTranslation> {
	const en = translations.en;
	const full = {} as Record<LocaleCode, BlogTranslation>;
	for (const code of Object.keys(localeMap) as LocaleCode[]) {
		full[code] = translations[code] ?? { ...en };
	}
	return full;
}

export const doorwayBlogSlugs = new Set([
	'phoenix-tarkov',
	'cosmo-tarkov',
	'ghostware-tarkov',
	'kernaim-tarkov',
	'cheatvault-tarkov',
]);

export const blogPosts: BlogPostDefinition[] = rawBlogPosts
	.filter((post) => !doorwayBlogSlugs.has(post.translations.en.slug))
	.map((post) => ({
		...post,
		translations: expandTranslations(post.translations as Partial<Record<LocaleCode, BlogTranslation>> & { en: BlogTranslation }),
	}));

export function getBlogImageSrc(key: BlogImageKey): string {
	const src = imageMap[key] ?? FALLBACK_BLOG_IMAGE;
	if (!src || src.includes('undefined')) {
		throw new Error(`[blog] Invalid image path for key "${key}"`);
	}
	return src;
}

/** Public forum base path (legacy `/blog/` URLs 301 here). */
export function getBlogBasePath(locale: LocaleCode): string {
	return locale === defaultLocale ? '/forum/' : `/${locale}/forum/`;
}

export function isBlogPath(pathname: string): boolean {
	const context = resolvePageContextFromPath(pathname);
	return Boolean(context.isBlogIndex || context.blogSlug);
}

export function findPostBySlug(slug: string, locale?: LocaleCode): BlogPostDefinition | undefined {
	return blogPosts.find((post) => {
		if (locale) {
			return post.translations[locale]?.slug === slug;
		}
		return (Object.keys(localeMap) as LocaleCode[]).some((code) => post.translations[code]?.slug === slug);
	});
}

/** Target URL for the same blog index or post — always English until translations exist. */
export function getBlogLocaleSwitchHref(pathname: string, _targetLocale: LocaleCode): string {
	const context = resolvePageContextFromPath(pathname);

	if (context.blogSlug) {
		const post = findPostBySlug(context.blogSlug, context.locale) ?? findPostBySlug(context.blogSlug);
		if (post) {
			return getBlogPostPath(defaultLocale, post.translations[defaultLocale].slug);
		}
	}

	if (context.isBlogIndex) return getBlogBasePath(defaultLocale);
	return getBlogBasePath(defaultLocale);
}

export function getBlogPostPath(locale: LocaleCode, slug: string): string {
	const base = getBlogBasePath(locale);
	return `${base}${slug}/`;
}

/** Retired forum slugs → current H1-derived slugs. Served as /forum/ 301s. */
export const blogSlugRedirects: Record<string, string> = {
	// Original long slugs
	'tarkov-cheats-review': 'is-it-worth-it',
	'comparing-tarkov-cheats': 'how-does-it-compare',
	'best-tarkov-cheats': 'how-does-it-compare',
	'tarkov-esp-notes': 'esp-not-showing-in-raid',
	'tarkov-esp': 'esp-not-showing-in-raid',
	'buy-tarkov-cheats': 'how-do-i-get-access',
	'tarkov-cheats-price': 'how-much-does-it-cost',
	'tarkov-cheats-pc': 'system-requirements',
	'tarkov-loot-esp': 'loot-esp-too-cluttered',
	'tarkov-aimbot-notes': 'best-aimbot-settings',
	'tarkov-aimbot': 'best-aimbot-settings',
	'tarkov-wallhack-notes': 'wallhack-and-chams',
	'tarkov-wallhack': 'wallhack-and-chams',
	'patch-day-notes': 'safe-to-play-after-a-patch',
	'undetected-tarkov-cheats': 'safe-to-play-after-a-patch',
	'tarkov-arena': 'does-it-work-in-arena',
	'tarkov-no-recoil': 'no-recoil-settings',
	'tarkov-radar-notes': 'is-radar-worth-it',
	'tarkov-radar': 'is-radar-worth-it',
	// Retired doorway comparison pages
	'phoenix-tarkov': 'how-does-it-compare',
	'cosmo-tarkov': 'how-does-it-compare',
	'ghostware-tarkov': 'how-does-it-compare',
	'kernaim-tarkov': 'how-does-it-compare',
	'cheatvault-tarkov': 'how-does-it-compare',
	// Interim short slugs (previous rename)
	'worth-it': 'is-it-worth-it',
	'vs-other-cheats': 'how-does-it-compare',
	'esp-not-showing': 'esp-not-showing-in-raid',
	'how-to-buy': 'how-do-i-get-access',
	'how-much': 'how-much-does-it-cost',
	'loot-filter': 'loot-esp-too-cluttered',
	'aimbot-settings': 'best-aimbot-settings',
	wallhack: 'wallhack-and-chams',
	'after-patch': 'safe-to-play-after-a-patch',
	arena: 'does-it-work-in-arena',
	'cloud-dma': 'cloud-dma-setup',
	'no-recoil': 'no-recoil-settings',
	radar: 'is-radar-worth-it',
	'grey-menu': 'menu-greyed-out',
	'not-delivered': 'order-not-delivered',
	'is-it-safe': 'is-it-undetected',
	'streamproof-obs': 'streamproof-on-obs',
};

export function absoluteBlogUrl(locale: LocaleCode, slug?: string): string {
	const path = slug ? getBlogPostPath(locale, slug) : getBlogBasePath(locale);
	return new URL(path, siteConfig.url).href;
}

export function resolvePost(post: BlogPostDefinition, locale: LocaleCode): ResolvedBlogPost {
	const translation = post.translations[locale];
	return {
		...post,
		locale,
		translation,
		imageSrc: getBlogImageSrc(post.imageKey),
		canonicalPath: getBlogPostPath(locale, translation.slug),
	};
}

export function getAllPostsForLocale(locale: LocaleCode): ResolvedBlogPost[] {
	return blogPosts
		.map((post) => resolvePost(post, locale))
		.sort((a, b) => (a.published < b.published ? 1 : -1));
}

export function getFeaturedPosts(locale: LocaleCode, limit = 3): ResolvedBlogPost[] {
	const all = getAllPostsForLocale(locale);
	const featured = all.filter((p) => p.featured);
	return (featured.length >= limit ? featured : all).slice(0, limit);
}

export function getPostBySlug(locale: LocaleCode, slug: string): ResolvedBlogPost | undefined {
	const post = blogPosts.find((p) => p.translations[locale]?.slug === slug);
	return post ? resolvePost(post, locale) : undefined;
}

/** Hreflang alternates for a blog post — English-only until real translations exist. */
export function getBlogPostHreflangAlternates(
	post: BlogPostDefinition,
	_currentLocale: LocaleCode = defaultLocale,
) {
	const href = absoluteBlogUrl(defaultLocale, post.translations[defaultLocale].slug);
	return [
		{ hreflang: locales.find((l) => l.code === defaultLocale)!.hreflang, href },
		{ hreflang: 'x-default' as const, href },
	];
}

/** Hreflang alternates for a blog index — English-only until real translations exist. */
export function getBlogIndexHreflangAlternates(_currentLocale: LocaleCode = defaultLocale) {
	const href = absoluteBlogUrl(defaultLocale);
	return [
		{ hreflang: locales.find((l) => l.code === defaultLocale)!.hreflang, href },
		{ hreflang: 'x-default' as const, href },
	];
}

/**
 * Localized blog routes are not translated — do not build/index them.
 * Use EN `/forum/` only. Locale paths 301 to EN via [lang]/forum pages.
 */
export function getAllBlogStaticPaths(): { params: { lang?: string; slug: string }; props: { locale: LocaleCode } }[] {
	return blogPosts.map((post) => ({
		params: { slug: post.translations[defaultLocale].slug },
		props: { locale: defaultLocale },
	}));
}

/** Blog sitemap entries for one locale (index + all posts). Non-EN returns empty. */
export function getBlogSitemapEntriesForLocale(locale: LocaleCode) {
	if (locale !== defaultLocale) return [];

	const indexLastmod = blogPosts.reduce(
		(max, post) => (post.updated > max ? post.updated : max),
		blogPosts[0]?.updated ?? new Date().toISOString().slice(0, 10),
	);

	const entries: {
		path: string;
		lastmod: string;
		priority: number;
		changefreq: 'daily' | 'weekly' | 'monthly';
		images: { url: string; title: string; caption: string }[];
	}[] = [
		{
			path: getBlogBasePath(locale),
			lastmod: indexLastmod,
			priority: 0.92,
			changefreq: 'daily',
			images: [
				{
					url: new URL(siteConfig.defaultOgImage, siteConfig.url).href,
					...blogSitemapImageMeta(),
				},
			],
		},
	];

	for (const post of blogPosts) {
		const t = post.translations[locale];
		const imageSrc = getBlogImageSrc(post.imageKey);
		const isProductPost = /Cheats|Aimbot|ESP|Wallhack|Combat|Status|Setup|Overlay|Store/i.test(post.category);
		entries.push({
			path: getBlogPostPath(locale, t.slug),
			lastmod: post.updated,
			priority: isProductPost ? 0.95 : 0.88,
			changefreq: 'weekly',
			images: [
				{
					url: new URL(imageSrc, siteConfig.url).href,
					title: t.title,
					caption: t.imageAlt,
				},
			],
		});
	}

	return entries;
}

/** English blog routes in the primary sitemap (localized posts live in per-locale sitemaps). */
export function getBlogSitemapEntries() {
	return getBlogSitemapEntriesForLocale(defaultLocale);
}
