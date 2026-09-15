import type { APIRoute } from 'astro';
import { buildEnglishUrlsetXml } from '../data/english-urlset';
import { sitemapResponseHeaders } from '../data/sitemap-xml';

export const prerender = true;

/** Primary sitemap listed in robots.txt — full English urlset, not an index. */
export const GET: APIRoute = () =>
	new Response(buildEnglishUrlsetXml(), { headers: sitemapResponseHeaders });
