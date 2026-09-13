import { defaultLocale, localeCodes, localeMap, type LocaleCode } from './i18n/locales';
import { getLocalizedPath, type HreflangAlternate, type PageId } from './i18n/routing';
import { getBlogBasePath, getBlogPostPath, getAllPostsForLocale } from './blog/helpers';
import { customerReviews, siteConfig, uniqueFaqs } from './site';
import { getFaqPath } from './faq';
import { reviewsBasePath } from './reviews';
import { crawlPhotoMeta } from './page-images';
import { sitemapLastmod } from './brand-sitemap';

export const htmlSitemapBasePath = '/site-map/';
export const htmlSitemapLastmod = '2026-09-14';

export function getHtmlSitemapPath(locale: LocaleCode = defaultLocale): string {
	return locale === defaultLocale ? htmlSitemapBasePath : `/${locale}/site-map/`;
}

export function absoluteHtmlSitemapUrl(locale: LocaleCode = defaultLocale): string {
	return new URL(getHtmlSitemapPath(locale), siteConfig.url).href;
}

export function htmlSitemapHreflangXml(
	escapeXml: (value: string) => string,
	locale: LocaleCode = defaultLocale,
): string {
	return getHtmlSitemapHreflangAlternates(locale)
		.map(
			(alt) =>
				`    <xhtml:link rel="alternate" hreflang="${escapeXml(alt.hreflang)}" href="${escapeXml(alt.href)}"/>`,
		)
		.join('\n');
}

export function getHtmlSitemapHreflangAlternates(
	currentLocale: LocaleCode = defaultLocale,
): HreflangAlternate[] {
	const byLocale = localeCodes.map((code) => ({
		hreflang: localeMap[code].hreflang,
		href: absoluteHtmlSitemapUrl(code),
		code,
	}));
	const self = byLocale.find((alt) => alt.code === currentLocale)!;
	const others = byLocale.filter((alt) => alt.code !== currentLocale);
	return [
		{ hreflang: self.hreflang, href: self.href },
		...others.map(({ hreflang, href }) => ({ hreflang, href })),
		{ hreflang: 'x-default', href: absoluteHtmlSitemapUrl(defaultLocale) },
	];
}

export type HtmlSitemapLink = {
	label: string;
	href: string;
};

export type HtmlSitemapGroup = {
	title: string;
	links: HtmlSitemapLink[];
};

export function getHtmlSitemapGroups(locale: LocaleCode): HtmlSitemapGroup[] {
	const page = (pageId: PageId, label: string): HtmlSitemapLink => ({
		label,
		href: getLocalizedPath(pageId, locale),
	});

	const groups: HtmlSitemapGroup[] = [
		{
			title: 'Product',
			links: [
				page('hacks', 'Cheats'),
				page('features', 'Features'),
				page('pricing', 'Pricing'),
				page('tarkov-esp', 'ESP'),
				page('tarkov-aimbot', 'Aimbot'),
				page('radar', 'Wallhack'),
			],
		},
		{
			title: 'Help',
			links: [
				page('updates', 'Updates'),
				page('setup', 'Setup'),
				page('faq', 'FAQ'),
				page('support', 'Support'),
				{ label: 'Blog', href: getBlogBasePath(defaultLocale) },
				{ label: 'Reviews', href: reviewsBasePath },
			],
		},
		{
			title: 'Legal',
			links: [
				page('privacy', 'Privacy'),
				page('refund', 'Refund policy'),
				page('terms', 'Terms'),
			],
		},
	];

	if (locale === defaultLocale) {
		groups.push({
			title: 'Blog posts',
			links: getAllPostsForLocale(defaultLocale).map((post) => ({
				label: post.translation.title,
				href: getBlogPostPath(defaultLocale, post.translation.slug),
			})),
		});
		groups.push({
			title: 'FAQ answers',
			links: uniqueFaqs.map((item) => ({
				label: item.question,
				href: getFaqPath(item.slug),
			})),
		});
		groups.push({
			title: 'Reviews',
			links: customerReviews.map((item) => ({
				label: `@${item.handle}`,
				href: `${reviewsBasePath}${item.slug}/`,
			})),
		});
	}

	return groups;
}

export function getHtmlSitemapXmlEntries(locale: LocaleCode) {
	const photo = crawlPhotoMeta(
		'site-map',
		'Escape from Tarkov Cheats sitemap',
		'HTML sitemap of canonical Escape from Tarkov Cheats pages',
	);

	return [
		{
			path: getHtmlSitemapPath(locale),
			lastmod: sitemapLastmod(htmlSitemapLastmod),
			changefreq: 'weekly' as const,
			priority: locale === defaultLocale ? 0.4 : 0.3,
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
