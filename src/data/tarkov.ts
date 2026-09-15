import { siteConfig } from './site';

/** Screenshots used across product pages — Escape from Tarkov cheats keyword alts. */
export const tarkovImages = {
	/** Static OG / schema image — banner itself is hero-banner.webm */
	hero: '/images/tarkov-cheats-hero-1024w.webp',
	/** Homepage / inner-page banner loop — public/images/hero-banner.webm */
	heroVideo: '/images/hero-banner.webm',
	espWallhack: '/images/tarkov-cheats-wallhack.webp',
	aimbotCombat: '/images/tarkov-cheats-aimbot.webp',
	aimbotSkeleton: '/images/tarkov-cheats-aimbot-view.webp',
	playerEsp: '/images/tarkov-cheats-esp.webp',
	cheatsCombat: '/images/tarkov-cheats-raid.webp',
	patchNotes: '/images/tarkov-patch-notes-banner.jpg',
	logo: siteConfig.logo,
	/** @deprecated Blog / legacy aliases — each maps to one of the six assets above */
	cover: '/images/tarkov-cheats-raid.webp',
	loadoutBuilder: '/images/tarkov-patch-notes-banner.jpg',
	squadFight: '/images/tarkov-cheats-aimbot-view.webp',
	cheatsPackage: '/images/tarkov-patch-notes-banner.jpg',
	headerArt: '/images/tarkov-cheats-aimbot-view.webp',
	battleRoyaleCombat: '/images/tarkov-cheats-raid.webp',
	extractFight: '/images/tarkov-cheats-aimbot.webp',
	rebootFight: '/images/tarkov-cheats-aimbot.webp',
	scavRunCombat: '/images/tarkov-cheats-wallhack.webp',
	scavRunMode: '/images/tarkov-cheats-esp.webp',
	battleRoyaleIsland: '/images/tarkov-cheats-esp.webp',
	raidMap: '/images/tarkov-cheats-esp.webp',
	product: [
		{ src: '/images/tarkov-cheats-esp.webp', alt: 'PMC and bot ESP boxes in Escape from Tarkov' },
		{ src: '/images/tarkov-cheats-wallhack.webp', alt: 'Wallhack outlines for enemy PMCs' },
		{ src: '/images/tarkov-cheats-aimbot.webp', alt: 'Aimbot overlay for Escape from Tarkov' },
		{ src: '/images/tarkov-cheats-esp.webp', alt: 'Loot container and extract ESP markers' },
		{ src: '/images/tarkov-cheats-wallhack.webp', alt: 'Through-wall visibility during a PMC raid' },
		{ src: '/images/tarkov-cheats-aimbot.webp', alt: 'Aimbot FOV limit settings' },
	],
	gallery: [
		{ src: '/images/tarkov-cheats-esp.webp', alt: 'ESP overlay showing PMC distance', featured: true },
		{ src: '/images/tarkov-cheats-wallhack.webp', alt: 'Wallhack view through factory walls' },
		{ src: '/images/tarkov-cheats-aimbot.webp', alt: 'Aimbot FOV ring in combat' },
		{ src: '/images/tarkov-cheats-esp.webp', alt: 'PMC and bot ESP pins' },
		{ src: '/images/tarkov-cheats-wallhack.webp', alt: 'Enemy PMC wallhack filters' },
	],
	/**
	 * @deprecated Prefer brand.sitemap.images via brand-sitemap / page-sitemap.
	 * Kept as path aliases for older imports; titles come from Brand Studio.
	 */
	sitemap: [
		{ src: '/images/tarkov-cheats-esp.webp', title: '', caption: '' },
		{ src: '/images/tarkov-cheats-wallhack.webp', title: '', caption: '' },
		{ src: '/images/tarkov-cheats-aimbot.webp', title: '', caption: '' },
		{ src: '/images/tarkov-cheats-aimbot-view.webp', title: '', caption: '' },
		{ src: '/images/tarkov-patch-notes-banner.jpg', title: '', caption: '' },
		{ src: '/images/tarkov-cheats-raid.webp', title: '', caption: '' },
	],
} as const;
