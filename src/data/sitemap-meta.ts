import type { PageId } from './i18n/routing';
import { brandSitemap, sitemapLastmod } from './brand-sitemap';

export type SitemapFreq = 'daily' | 'weekly' | 'monthly' | 'yearly';

export type PageSitemapMeta = {
	priority: number;
	changefreq: SitemapFreq;
	/** Priority for non-English locale URLs in sitemap-i18n.xml */
	i18nPriority: number;
	/** Real content modification date (YYYY-MM-DD) — update when the page content changes. */
	lastmod: string;
};

/**
 * SEO priority and crawl hints per page — keyed by PageId (single source of truth).
 * English URLs use `priority`; localized URLs use `i18nPriority`.
 * `lastmod` reflects when BattlEye page's content actually changed — do NOT reset all
 * pages to the same date on deploy, only bump pages whose content was edited.
 */
export const pageSitemapMeta: Record<PageId, PageSitemapMeta> = {
	home: { priority: 1.0, changefreq: 'daily', i18nPriority: 0.88, lastmod: '2026-09-15' },
	/** Retired money URL — 301s to homepage */
	hacks: { priority: 0.3, changefreq: 'yearly', i18nPriority: 0.2, lastmod: '2026-09-15' },
	undetected: { priority: 0.3, changefreq: 'yearly', i18nPriority: 0.2, lastmod: '2026-08-17' },
	'cheats-2026': { priority: 0.3, changefreq: 'yearly', i18nPriority: 0.2, lastmod: '2026-08-17' },
	'cheat-download': { priority: 0.3, changefreq: 'yearly', i18nPriority: 0.2, lastmod: '2026-08-17' },
	'mod-menu': { priority: 0.3, changefreq: 'yearly', i18nPriority: 0.2, lastmod: '2026-08-17' },
	'soft-aim': { priority: 0.3, changefreq: 'yearly', i18nPriority: 0.2, lastmod: '2026-08-17' },
	'best-cheats': { priority: 0.3, changefreq: 'yearly', i18nPriority: 0.2, lastmod: '2026-08-17' },
	'aimbot-hack': { priority: 0.3, changefreq: 'yearly', i18nPriority: 0.2, lastmod: '2026-08-17' },
	'esp-hack': { priority: 0.3, changefreq: 'yearly', i18nPriority: 0.2, lastmod: '2026-08-17' },
	'unlock-all': { priority: 0.3, changefreq: 'yearly', i18nPriority: 0.2, lastmod: '2026-08-17' },
	wallhack: { priority: 0.3, changefreq: 'yearly', i18nPriority: 0.2, lastmod: '2026-08-17' },
	radar: { priority: 0.9, changefreq: 'weekly', i18nPriority: 0.85, lastmod: '2026-09-15' },
	'battleye': { priority: 0.3, changefreq: 'yearly', i18nPriority: 0.2, lastmod: '2026-08-21' },
	'tarkov-esp': { priority: 0.92, changefreq: 'weekly', i18nPriority: 0.86, lastmod: '2026-09-15' },
	'tarkov-aimbot': { priority: 0.92, changefreq: 'weekly', i18nPriority: 0.86, lastmod: '2026-09-15' },
	pricing: { priority: 0.94, changefreq: 'weekly', i18nPriority: 0.85, lastmod: '2026-09-15' },
	features: { priority: 0.9, changefreq: 'weekly', i18nPriority: 0.84, lastmod: '2026-09-15' },
	setup: { priority: 0.88, changefreq: 'weekly', i18nPriority: 0.84, lastmod: '2026-09-15' },
	updates: { priority: 0.93, changefreq: 'daily', i18nPriority: 0.85, lastmod: '2026-09-15' },
	faq: { priority: 0.8, changefreq: 'monthly', i18nPriority: 0.82, lastmod: '2026-09-15' },
	support: { priority: 0.8, changefreq: 'monthly', i18nPriority: 0.82, lastmod: '2026-09-15' },
	privacy: { priority: 0.4, changefreq: 'yearly', i18nPriority: 0.35, lastmod: '2026-08-21' },
	refund: { priority: 0.4, changefreq: 'yearly', i18nPriority: 0.35, lastmod: '2026-08-21' },
	terms: { priority: 0.4, changefreq: 'yearly', i18nPriority: 0.35, lastmod: '2026-08-21' },
};

/** Most recent page lastmod — used by the image sitemap. */
export function latestPageLastmod(): string {
	const fromPages = Object.values(pageSitemapMeta).reduce(
		(max, meta) => (meta.lastmod > max ? meta.lastmod : max),
		'0000-00-00',
	);
	return sitemapLastmod(fromPages) || brandSitemap.contentLastmod || fromPages;
}

/**
 * Expected URL counts for sitemap validation.
 * Product pages = all PageIds minus cannibal 301 targets (11) → 14.
 */
export const SITEMAP_COUNTS = {
	englishPages: 13,
	i18nLocales: 0,
	pagesPerLocale: 0,
	i18nUrls: 0,
	totalIndexablePages: 13,
	hreflangLinksPerUrl: 2,
} as const;
