import { getBlogSitemapEntries } from './blog/helpers';
import { getHtmlSitemapXmlEntries } from './html-sitemap';
import { defaultLocale } from './i18n/locales';
import { absolutePageUrl, pageSitemapEntries } from './page-sitemap';
import { getReviewSitemapEntries } from './reviews';
import { escapeXml, renderUrlsetXml } from './sitemap-xml';

/**
 * Canonical English urlset for /sitemap.xml — same shape as a standard Google sitemap:
 * loc, lastmod, changefreq, priority. Images live in /sitemap-images.xml.
 */
export function buildEnglishUrlsetXml(): string {
	const blogEntries = getBlogSitemapEntries().map((entry) => ({
		path: entry.path,
		lastmod: entry.lastmod,
		changefreq: entry.changefreq,
		priority: entry.priority,
	}));

	const htmlSitemapEntries = getHtmlSitemapXmlEntries(defaultLocale);
	const reviewEntries = getReviewSitemapEntries();

	const urls = [...pageSitemapEntries, ...blogEntries, ...reviewEntries, ...htmlSitemapEntries].map((entry) => {
		return `  <url>
    <loc>${escapeXml(absolutePageUrl(entry.path))}</loc>
    <lastmod>${escapeXml(entry.lastmod)}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority.toFixed(2)}</priority>
  </url>`;
	});

	return renderUrlsetXml(urls);
}
