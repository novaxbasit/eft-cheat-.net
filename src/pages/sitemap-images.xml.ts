import type { APIRoute } from 'astro';
import { absolutePageUrl } from '../data/page-sitemap';
import { assertCrawlableAssetUrl, escapeXml, sitemapResponseHeaders } from '../data/sitemap-xml';
import { latestPageLastmod } from '../data/sitemap-meta';
import { siteConfig } from '../data/site';
import { tarkovImages } from '../data/tarkov';

export const prerender = true;

const IMAGE_HOSTS = [
	{
		path: '/',
		src: siteConfig.defaultOgImage,
		title: 'Escape from Tarkov Cheats homepage hero',
		caption: 'Homepage hero for Escape from Tarkov Cheats on Windows PC',
	},
	{
		path: '/features/',
		src: tarkovImages.espWallhack,
		title: 'Escape from Tarkov wallhack feature screenshot',
		caption: 'Feature screenshot: through-wall visibility in Tarkov raids',
	},
	{
		path: '/pricing/',
		src: '/images/tarkov-cheats-raid.webp',
		title: 'Escape from Tarkov Cheats in a raid',
		caption: 'Raid view used on the pricing page for the Windows PC license',
	},
	{
		path: '/updates/',
		src: tarkovImages.patchNotes,
		title: 'Escape from Tarkov patch notes banner',
		caption: 'Patch-notes banner on the Updates page',
	},
	{
		path: '/tarkov-esp/',
		src: '/images/tarkov-cheats-esp.webp',
		title: 'Player ESP overlay in Escape from Tarkov',
		caption: 'PMC ESP boxes and distance on the player ESP page',
	},
	{
		path: '/tarkov-aimbot/',
		src: tarkovImages.aimbotCombat,
		title: 'Aimbot overlay in Escape from Tarkov',
		caption: 'Aimbot screenshot on the aimbot page',
	},
] as const;

export const GET: APIRoute = () => {
	const lastmod = latestPageLastmod();
	const urls = IMAGE_HOSTS.map((row) => {
		const loc = absolutePageUrl(row.path);
		const imageLoc = new URL(row.src, siteConfig.url).href;
		assertCrawlableAssetUrl(imageLoc, row.path);
		return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${escapeXml(lastmod)}</lastmod>
    <image:image>
      <image:loc>${escapeXml(imageLoc)}</image:loc>
      <image:title>${escapeXml(row.title)}</image:title>
      <image:caption>${escapeXml(row.caption)}</image:caption>
    </image:image>
  </url>`;
	}).join('\n');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>
`;

	return new Response(xml, { headers: sitemapResponseHeaders });
};
