import type { APIRoute } from 'astro';
import { absolutePageUrl, pageSitemapEntries } from '../data/page-sitemap';
import { getBlogSitemapEntries } from '../data/blog/helpers';
import { getReviewSitemapEntries } from '../data/reviews';
import { getFaqSitemapEntries } from '../data/faq';
import { getGuidesSitemapEntries } from '../data/guides';
import { hreflangLinksXml, resolvePageIdFromPath } from '../data/i18n/routing';
import { escapeXml, renderImageExtension, renderUrlsetXml, sitemapResponseHeaders } from '../data/sitemap-xml';

export const prerender = true;

/** English page urlset (listed under sitemap.xml index). */
export const GET: APIRoute = () => {
	const blogEntries = getBlogSitemapEntries()
		.filter((entry) => !entry.path.match(/^\/[a-z]{2}\//))
		.map((entry) => ({
			path: entry.path,
			lastmod: entry.lastmod,
			changefreq: entry.changefreq,
			priority: entry.priority,
			images: entry.images,
		}));

	const reviewEntries = getReviewSitemapEntries();
	const faqEntries = getFaqSitemapEntries();
	const guidesEntries = getGuidesSitemapEntries();

	const urls = [...pageSitemapEntries, ...blogEntries, ...reviewEntries, ...faqEntries, ...guidesEntries].map((entry) => {
		const images = entry.images
			.map((image) => renderImageExtension(image, entry.path))
			.join('\n');

		const imageBlock = images ? `\n${images}` : '';
		const pageId = resolvePageIdFromPath(entry.path);
		const hreflangBlock = pageId ? `\n${hreflangLinksXml(pageId, escapeXml)}` : '';

		return `  <url>
    <loc>${escapeXml(absolutePageUrl(entry.path))}</loc>
    <lastmod>${escapeXml(entry.lastmod)}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority.toFixed(2)}</priority>${hreflangBlock}${imageBlock}
  </url>`;
	});

	const xml = renderUrlsetXml(urls);

	return new Response(xml, { headers: sitemapResponseHeaders });
};
