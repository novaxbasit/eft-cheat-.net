import { siteConfig } from './site';

/** Screenshots used across product pages — Rainbow Six Siege cheats keyword alts. */
export const tarkovImages = {
	hero: '/images/r6-siege-cheats-hero-full.png',
	espWallhack: '/images/r6-siege-cheats-wallhack.webp',
	aimbotCombat: '/images/r6-siege-cheats-aimbot.webp',
	aimbotSkeleton: '/images/r6-siege-cheats-aimbot-view.webp',
	playerEsp: '/images/r6-siege-cheats-radar.webp',
	cheatsCombat: '/images/r6-siege-cheats-raid.webp',
	logo: siteConfig.logo,
	/** @deprecated Blog / legacy aliases — each maps to one of the six assets above */
	cover: '/images/r6-siege-cheats-raid.webp',
	loadoutBuilder: '/images/r6-siege-cheats-radar.webp',
	squadFight: '/images/r6-siege-cheats-aimbot-view.webp',
	cheatsPackage: '/images/r6-siege-cheats-radar.webp',
	headerArt: '/images/r6-siege-cheats-aimbot-view.webp',
	battleRoyaleCombat: '/images/r6-siege-cheats-raid.webp',
	extractFight: '/images/r6-siege-cheats-aimbot.webp',
	rebootFight: '/images/r6-siege-cheats-aimbot.webp',
	scavRunCombat: '/images/r6-siege-cheats-wallhack.webp',
	scavRunMode: '/images/r6-siege-cheats-esp.webp',
	battleRoyaleIsland: '/images/r6-siege-cheats-esp.webp',
	raidMap: '/images/r6-siege-cheats-esp.webp',
	product: [
		{ src: '/images/r6-siege-cheats-esp.webp', alt: 'ESP player boxes in Rainbow Six Siege' },
		{ src: '/images/r6-siege-cheats-wallhack.webp', alt: 'Wallhack outlines for enemy operators' },
		{ src: '/images/r6-siege-cheats-aimbot.webp', alt: 'Aimbot overlay for Rainbow Six Siege' },
		{ src: '/images/r6-siege-cheats-esp.webp', alt: 'Gadget and objective ESP markers' },
		{ src: '/images/r6-siege-cheats-wallhack.webp', alt: 'Through-wall visibility during a ranked match' },
		{ src: '/images/r6-siege-cheats-aimbot.webp', alt: 'Aimbot FOV limit settings' },
	],
	gallery: [
		{ src: '/images/r6-siege-cheats-esp.webp', alt: 'ESP overlay showing enemy distance', featured: true },
		{ src: '/images/r6-siege-cheats-wallhack.webp', alt: 'Wallhack view through barricades' },
		{ src: '/images/r6-siege-cheats-aimbot.webp', alt: 'Aimbot FOV ring in combat' },
		{ src: '/images/r6-siege-cheats-esp.webp', alt: 'Operator and bot ESP pins' },
		{ src: '/images/r6-siege-cheats-wallhack.webp', alt: 'Enemy operator wallhack filters' },
	],
	/**
	 * @deprecated Prefer brand.sitemap.images via brand-sitemap / page-sitemap.
	 * Kept as path aliases for older imports; titles come from Brand Studio.
	 */
	sitemap: [
		{ src: '/images/r6-siege-cheats-esp.webp', title: '', caption: '' },
		{ src: '/images/r6-siege-cheats-wallhack.webp', title: '', caption: '' },
		{ src: '/images/r6-siege-cheats-aimbot.webp', title: '', caption: '' },
		{ src: '/images/r6-siege-cheats-aimbot-view.webp', title: '', caption: '' },
		{ src: '/images/r6-siege-cheats-radar.webp', title: '', caption: '' },
		{ src: '/images/r6-siege-cheats-raid.webp', title: '', caption: '' },
	],
} as const;
