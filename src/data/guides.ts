import { brandSitemap, sitemapLastmod } from './brand-sitemap';
import { tarkovImages } from './tarkov';
import { crawlPhotoMeta } from './page-images';
import { siteConfig } from './site';

export type InternalGuide = {
	href: string;
	title: string;
	description: string;
	image: string;
	imageAlt: string;
};

export type ExternalGuideSite = {
	/** Canonical HTTPS homepage — used in href for outbound backlinks. */
	url: string;
	/** Bare hostname for display, e.g. pubgcheats.org */
	host: string;
	game: string;
	label: string;
};

/** Normalize a partner domain to a canonical HTTPS homepage backlink. */
export function partnerHomeUrl(domain: string): string {
	const host = domain
		.replace(/^https?:\/\//i, '')
		.replace(/^www\./i, '')
		.replace(/\/.*$/, '')
		.toLowerCase();
	return `https://${host}/`;
}

function partnerSite(domain: string, game: string, label: string): ExternalGuideSite {
	const host = domain
		.replace(/^https?:\/\//i, '')
		.replace(/^www\./i, '')
		.replace(/\/.*$/, '')
		.toLowerCase();
	return { url: partnerHomeUrl(host), host, game, label };
}

/** In-site Escape from Tarkov guide cards — top of /guides/ */
export const internalGuides: InternalGuide[] = [
	{
		href: '/tarkov-cheats/',
		title: 'Escape from Tarkov cheats overview',
		description: 'Full product page for player ESP, loot ESP, and aimbot on Windows PC raids.',
		image: tarkovImages.hero,
		imageAlt: 'Escape from Tarkov cheats overview',
	},
	{
		href: '/features/',
		title: 'Features',
		description: 'What is included in one raid license.',
		image: tarkovImages.espWallhack,
		imageAlt: 'Escape from Tarkov cheats features menu',
	},
	{
		href: '/tarkov-esp/',
		title: 'ESP guide',
		description: 'Player boxes, loot filters, quest ESP, and exfils.',
		image: tarkovImages.scavRunMode,
		imageAlt: 'Escape from Tarkov ESP guide',
	},
	{
		href: '/tarkov-aimbot/',
		title: 'Aimbot',
		description: 'FOV, vis check, prediction, no recoil, and no sway.',
		image: tarkovImages.aimbotCombat,
		imageAlt: 'Escape from Tarkov aimbot guide',
	},
	{
		href: '/setup/',
		title: 'Setup',
		description: 'Loader steps after checkout. Cloud DMA required for full functionality.',
		image: tarkovImages.patchNotes,
		imageAlt: 'Escape from Tarkov cheats setup and install',
	},
];

/** Partner / network cheat sites — HTTPS homepage backlinks, sorted by game name. */
export const externalGuideSites: ExternalGuideSite[] = [
	partnerSite('arcraidershacks.org', 'ARC Raiders', 'ARC Raiders Hacks'),
	partnerSite('abicheats.net', 'Arena Breakout Infinite', 'ABI Cheats'),
	partnerSite('armareforgercheats.org', 'Arma Reforger', 'Reforger Cheats'),
	partnerSite('codcheat.net', 'Call of Duty', 'COD Cheats'),
	partnerSite('dailygamingguides.com', 'Daily Gaming Guides', 'Daily Gaming Guides'),
	partnerSite('dayzcheat.org', 'DayZ', 'DayZ Cheat'),
	partnerSite('deltaforcehacks.org', 'Delta Force', 'Delta Force Hacks'),
	partnerSite('destiny2cheats.net', 'Destiny 2', 'Destiny 2 Cheats'),
	partnerSite('duneawakeningcheats.org', 'Dune Awakening', 'Dune Awakening Cheats'),
	partnerSite('buyfortnitecheats.com', 'Fortnite', 'Fortnite Cheats'),
	partnerSite('getfortnitecheats.com', 'Fortnite', 'Fortnite Hacks'),
	partnerSite('fivemcheats.org', 'FiveM', 'FiveM Cheats'),
	partnerSite('genshinimpactcheats.com', 'Genshin Impact', 'Genshin Cheats'),
	partnerSite('grayzonecheats.net', 'Gray Zone Warfare', 'Gray Zone Cheats'),
	partnerSite('lolhacks.org', 'League of Legends', 'LoL Cheats'),
	partnerSite('marvelrivalshacks.org', 'Marvel Rivals', 'Marvel Rivals Hacks'),
	partnerSite('palworldhack.net', 'Palworld', 'Palworld Hack'),
	partnerSite('pubgcheats.org', 'PUBG', 'PUBG Cheats'),
	partnerSite('raftcheats.net', 'Raft', 'Raft Cheats'),
	partnerSite('r6siegecheats.net', 'Rainbow Six Siege', 'R6 Siege Cheats'),
	partnerSite('rustcheat.org', 'Rust', 'Rust Cheat'),
	partnerSite('scumcheats.net', 'SCUM', 'SCUM Cheats'),
	partnerSite('valocheats.net', 'Valorant', 'Valo Cheats'),
];

export const guidesBasePath = '/guides/';

export function getGuidesSitemapEntries() {
	const photo = crawlPhotoMeta(
		'guides',
		'Escape from Tarkov Cheats guides',
		'ESP, aimbot, and setup guides for Escape from Tarkov raids',
	);

	return [
		{
			path: guidesBasePath,
			lastmod: sitemapLastmod(brandSitemap.contentLastmod),
			changefreq: 'monthly' as const,
			priority: 0.55,
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

export function absoluteGuidesUrl(path = guidesBasePath) {
	return new URL(path, siteConfig.url).href;
}
