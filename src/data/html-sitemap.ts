import { defaultLocale, type LocaleCode } from './i18n/locales';
import { getLocalizedPath, type PageId } from './i18n/routing';
import { getBlogBasePath, getBlogPostPath, getAllPostsForLocale } from './blog/helpers';
import { siteConfig } from './site';
import { reviewsBasePath } from './reviews';
import { crawlPhotoMeta } from './page-images';
import { sitemapLastmod } from './brand-sitemap';

export const htmlSitemapBasePath = '/sitemap/';
export const htmlSitemapLastmod = '2026-09-15';

export function getHtmlSitemapPath(_locale: LocaleCode = defaultLocale): string {
	return htmlSitemapBasePath;
}

export function absoluteHtmlSitemapUrl(_locale: LocaleCode = defaultLocale): string {
	return new URL(getHtmlSitemapPath(), siteConfig.url).href;
}

export type HtmlSitemapLink = {
	label: string;
	href: string;
};

export type HtmlSitemapGroup = {
	title: string;
	links: HtmlSitemapLink[];
};

export function getHtmlSitemapGroups(_locale: LocaleCode): HtmlSitemapGroup[] {
	const page = (pageId: PageId, label: string): HtmlSitemapLink => ({
		label,
		href: getLocalizedPath(pageId, defaultLocale),
	});

	return [
		{
			title: 'Product',
			links: [page('home', 'Escape from Tarkov Cheats')],
		},
		{
			title: 'Features',
			links: [
				page('features', 'Features'),
				page('tarkov-esp', 'Player ESP'),
				page('tarkov-aimbot', 'Aimbot'),
				page('radar', 'Radar'),
			],
		},
		{
			title: 'Buy/Help',
			links: [
				page('pricing', 'Pricing'),
				page('updates', 'Updates'),
				page('setup', 'Setup'),
				page('faq', 'FAQ'),
				page('support', 'Support'),
				{ label: 'Reviews', href: reviewsBasePath },
			],
		},
		{
			title: 'Blog',
			links: [
				{ label: 'Blog', href: getBlogBasePath(defaultLocale) },
				...getAllPostsForLocale(defaultLocale).map((post) => ({
					label: post.translation.title,
					href: getBlogPostPath(defaultLocale, post.translation.slug),
				})),
			],
		},
		{
			title: 'Legal',
			links: [
				page('privacy', 'Privacy policy'),
				page('refund', 'Refund policy'),
				page('terms', 'Terms'),
			],
		},
	];
}

export function getHtmlSitemapXmlEntries(_locale: LocaleCode) {
	const photo = crawlPhotoMeta(
		'sitemap',
		'Escape from Tarkov Cheats sitemap',
		'HTML sitemap of canonical Escape from Tarkov Cheats pages',
	);

	return [
		{
			path: getHtmlSitemapPath(),
			lastmod: sitemapLastmod(htmlSitemapLastmod),
			changefreq: 'weekly' as const,
			priority: 0.4,
			images: [
				{
					url: photo.url,
					title: photo.title,
					caption: photo.caption,
				},
			],
		},
	];
}
