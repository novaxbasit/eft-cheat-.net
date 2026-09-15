import { seoFaqs, siteConfig, type FaqItem } from './site';
import { crawlPhotoMeta } from './page-images';

export const faqBasePath = '/faq/';

export function getFaqPath(slug: string): string {
	return `${faqBasePath}${slug}/`;
}

export function absoluteFaqUrl(slug?: string): string {
	return new URL(slug ? getFaqPath(slug) : faqBasePath, siteConfig.url).href;
}

export function getFaqBySlug(slug: string): FaqItem | undefined {
	return seoFaqs.find((item) => item.slug === slug);
}

/** Neighbouring FAQ items for internal linking on answer pages. */
export function getRelatedFaqs(slug: string, count = 4): FaqItem[] {
	const index = seoFaqs.findIndex((item) => item.slug === slug);
	if (index < 0) return seoFaqs.slice(0, count);

	const related: FaqItem[] = [];
	for (let offset = 1; related.length < count && offset < seoFaqs.length; offset += 1) {
		related.push(seoFaqs[(index + offset) % seoFaqs.length]);
	}
	return related;
}

export function getFaqCrawlImage(item: FaqItem) {
	return crawlPhotoMeta(item.slug, item.question, item.seoDescription);
}

/** FAQ permalinks 301 into /faq/#anchor — keep them out of XML sitemaps. */
export function getFaqSitemapEntries() {
	return [];
}
