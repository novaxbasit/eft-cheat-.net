import type { APIRoute } from 'astro';

export const prerender = true;

/** Locale sitemaps retired — English sitemap only. */
export const GET: APIRoute = () =>
	new Response(null, {
		status: 301,
		headers: {
			Location: '/sitemap.xml',
			'Cache-Control': 'no-store',
		},
	});
