import type { APIRoute, GetStaticPaths } from 'astro';

export const prerender = true;

export const getStaticPaths = (() => []) satisfies GetStaticPaths;

export const GET: APIRoute = () =>
	new Response(null, {
		status: 301,
		headers: {
			Location: '/sitemap.xml',
			'Cache-Control': 'no-store',
		},
	});
