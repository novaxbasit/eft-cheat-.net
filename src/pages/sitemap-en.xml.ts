import type { APIRoute } from 'astro';
import { buildEnglishUrlsetXml } from '../data/english-urlset';
import { sitemapResponseHeaders } from '../data/sitemap-xml';

export const prerender = true;

/** Alias of /sitemap.xml for older Search Console submissions. */
export const GET: APIRoute = () =>
	new Response(buildEnglishUrlsetXml(), { headers: sitemapResponseHeaders });
