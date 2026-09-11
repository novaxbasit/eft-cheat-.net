/**
 * SINGLE SOURCE OF TRUTH for template rebrands.
 * Employees: use Brand Studio at http://localhost:4321/brand-studio/ during `astro dev`.
 * Do not scatter brand strings across components.
 */
export const brand = {
	/** Public brand name (nav, footer, H1 hero, schema Organization) */
	name: 'Escape from Tarkov Cheats',
	/** Short product label if needed */
	shortName: 'Escape from Tarkov',
	/** Canonical origin — no trailing slash */
	url: 'https://eftcheat.net',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@eftcheat.net',
	checkoutUrl: 'https://zadeyo.com/go/BASIT?to=%2Fproducts%2Fescape-from-tarkov',

	/** Game this template instance targets */
	game: 'Escape from Tarkov',
	/** Anti-cheat name used in Status / FAQ copy */
	antiCheat: 'BattlEye',

	logo: '/images/tarkov-cheats-logo.webp',
	logoRaster: '/images/tarkov-cheats-logo.png',
	logoRasterWidth: 512,
	logoRasterHeight: 512,
	logoAlt: 'Escape from Tarkov Cheats logo',
	/** Bump when favicon files change — busts browser cache on tab icons. */
	faviconVersion: '2',
	defaultOgImage: '/images/tarkov-cheats-hero-1024w.webp',
	heroImage: '/images/tarkov-cheats-hero-1024w.webp',

	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P31D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	] as const,
	currency: 'USD',
	platforms: ['Windows PC'] as const,

	/**
	 * Warehouse raid tones — cool charcoal, fog-lit steel blue (from hero banner).
	 * Edit in Brand Studio → Colors (tones are fully customizable).
	 */
	theme: {
		accent: '#7a94a8',
		bg: '#0a0c0f',
		soft: '#b8c8d4',
		deep: '#3a4d5a',
		hover: '#92aaba',
		panel: '#14181c',
	},

	/**
	 * Keyword system — primary drives titles; list feeds schema / light targeting.
	 * Keep 5–8 terms.
	 */
	keywords: {
		primary: 'Escape from Tarkov cheats',
		list: [
			'Escape from Tarkov cheats',
			'Escape from Tarkov hacks',
			'Escape from Tarkov ESP',
			'Escape from Tarkov aimbot',
			'Escape from Tarkov wallhack',
			'Escape from Tarkov cheats PC',
			'Escape from Tarkov cheats 2026',
			'undetected Escape from Tarkov cheats',
		] as const,
	},

	/**
	 * Editable SEO meta — tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 * Aim ~50–60 chars titles, ~140–160 chars descriptions.
	 */
	seo: {
		/** Titles ≤60 chars; descriptions ~140–160 (Google SERP display). */
		/** Home = brand hub. Money URL /tarkov-cheats/ owns the head term. */
		homeTitle: 'Escape from Tarkov Cheats | Features & Store',
		homeDescription:
			'Official Escape from Tarkov Cheats site for Windows PC. Player ESP, loot ESP, and aimbot for raids — not Arena. Check status, then buy.',
		featuresTitle: 'Escape from Tarkov Features | Cheats',
		featuresDescription:
			'One Escape from Tarkov license for Windows PC — player ESP, loot ESP, aimbot, no recoil, streamproof overlay, and Cloud DMA.',
		storeTitle: 'Escape from Tarkov Store | Cheats',
		storeDescription:
			'Monthly $35 and lifetime $150 Escape from Tarkov cheat plans. Same player ESP, loot ESP, and aimbot on both. Instant delivery after checkout.',
		statusTitle: 'Escape from Tarkov Status | Cheats',
		statusDescription:
			'Live undetected status for Escape from Tarkov Cheats after game or BattlEye patches. Check Status here before you raid on a Windows PC today.',
		previewTitle: 'Escape from Tarkov Cheats | Undetected ESP & Aimbot',
		previewDescription:
			'Buy Escape from Tarkov cheats for Windows PC raids. Player ESP, loot ESP, aimbot, streamproof overlay. Separate key from Arena.',
		setupTitle: 'Escape from Tarkov Setup | Cheats',
		setupDescription:
			'Install Escape from Tarkov Cheats on Windows PC after checkout. Short setup steps so you can raid faster. Follow each step in order before you raid.',
		supportTitle: 'Escape from Tarkov Support | Cheats',
		supportDescription:
			'Get help with Escape from Tarkov Cheats on Windows PC. Email support@eftcheat.net with your order ID for setup, delivery, or billing help after you buy.',
		faqTitle: 'Escape from Tarkov FAQ | Cheats',
		faqDescription:
			'Short answers about Escape from Tarkov Cheats — delivery, setup, BattlEye updates, refunds, and Windows PC system notes before you buy a plan.',
		reviewsTitle: 'Escape from Tarkov Cheats Reviews | Buyers',
		reviewsDescription:
			'Buyer reviews for Escape from Tarkov Cheats — ESP, aimbot, wallhack, and patch updates on Windows PC. Real feedback from current license holders.',
		blogTitle: 'Tarkov Cheat Blog | Cheats',
		blogDescription:
			'Tarkov cheat blog — comparisons vs Cosmo Cheats, Phoenix, CheatVault, ESP vs aimbot, settings, and buyer notes. Raids on Windows PC.',
	},

	/** On-page marketing copy (tokens allowed) */
	copy: {
		tagline: 'Undetected {primaryKeyword} — player ESP, loot ESP, and aimbot for PC raids',
		summary:
			'{brand} is an undetected {game} cheat for Windows PC raids. Player ESP, loot ESP, aimbot, and no recoil, with streamproof overlay and {antiCheat} updates after patches. Separate key from Arena.',
		heroLede: 'Escape from Tarkov Cheats — player ESP, loot ESP, and aimbot for raids on Windows PC.',
		blogLabel: 'Blog',
		ctaBuy: 'Get Access',
		ctaBuyShort: 'Buy',
		featuresIntro: 'These Features are in one license for {game} raids on Windows PC. Not Arena.',
		storeIntro: 'Store plans for {brand}. Same features on both. Instant delivery after payment.',
		statusIntro: 'Live Status for {brand} — check here after a {game} or {antiCheat} patch before you queue.',
		previewIntro:
			'Escape from Tarkov Cheats for Windows PC raids — player ESP, loot ESP, aimbot, no recoil, and a streamproof overlay. Separate key from Arena.',
		setupIntro: 'Setup guide for {brand} on Windows PC after you buy. Follow these short steps.',
		supportIntro: 'Support for {brand} — email {email} with your order ID.',
		faqIntro: 'FAQ with short answers about delivery, setup, updates, and refunds.',
		reviewsIntro: '{brand} reviews from buyers — ESP, loot ESP, aimbot, and support.',
		chipEsp: 'Player ESP',
		chipAim: 'Aimbot',
		chipRadar: 'Loot ESP',
		chipUpdates: 'Patch updates',
		navPreview: 'Cheats',
		navFeatures: 'Features',
		navStore: 'Store',
		navStatus: 'Status',
		navReviews: 'Reviews',
	},

	/**
	 * Sitemap labels — XML is generated at build/dev from routes + these strings.
	 * Domain comes from `url` (also written to robots.txt via sync:brand).
	 * Tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 */
	sitemap: {
		/** YYYY-MM-DD — Brand Studio can bump this on save to refresh crawl dates */
		contentLastmod: '2026-08-21',
		blogImageTitle: '{brand} blog',
		blogImageCaption: 'Tips and updates for {primaryKeyword}',
		reviewsImageTitle: '{brand} reviews',
		reviewsImageCaption: 'What buyers say about {primaryKeyword}',
		images: [
			{
				src: '/images/tarkov-cheats-esp.webp',
				title: 'ESP overlay in Escape from Tarkov',
				caption: 'PMC and bot ESP boxes and distance readouts during a raid',
			},
			{
				src: '/images/tarkov-cheats-wallhack.webp',
				title: 'Wallhack visibility for Escape from Tarkov matches',
				caption: 'Enemy PMC outlines through walls on Customs and Interchange',
			},
			{
				src: '/images/tarkov-cheats-aimbot.webp',
				title: 'Aimbot with FOV limit for Escape from Tarkov',
				caption: 'Configurable aimbot FOV and bone priority',
			},
			{
				src: '/images/tarkov-cheats-aimbot-view.webp',
				title: 'Aimbot view in Escape from Tarkov Cheats',
				caption: 'In-menu aimbot controls for Windows PC',
			},
			{
				src: '/images/tarkov-patch-notes-banner.jpg',
				title: 'Tarkov patch notes banner',
				caption: 'Escape from Tarkov operators patch notes art',
			},
			{
				src: '/images/tarkov-cheats-raid.webp',
				title: 'Escape from Tarkov Cheats license plans',
				caption: 'Monthly and lifetime plans for Windows PC',
			},
		],
	},
} as const;

export type Brand = typeof brand;

/** Replace {brand} {game} {antiCheat} {email} {primaryKeyword} {checkout} */
export function fillBrandTokens(input: string): string {
	return input
		.replaceAll('{brand}', brand.name)
		.replaceAll('{game}', brand.game)
		.replaceAll('{antiCheat}', brand.antiCheat)
		.replaceAll('{email}', brand.supportEmail)
		.replaceAll('{primaryKeyword}', brand.keywords.primary)
		.replaceAll('{checkout}', brand.checkoutUrl);
}

/** Locked title formula fallback: `{Game} {Topic} | {Brand}` */
export function seoTitle(topic: string): string {
	const title = `${brand.game} ${topic} | ${brand.name}`;
	return title.length <= 60 ? title : `${topic} | ${brand.name}`;
}

/** Keep descriptions short; tokens allowed. */
export function seoDescription(template: string): string {
	const text = fillBrandTokens(template).trim();
	return text.length <= 160 ? text : `${text.slice(0, 157).trim()}…`;
}

/** Resolved EN home meta from brand.seo (title clamp lives in site-core.seoPageTitle). */
export function homeSeo() {
	return {
		title: fillBrandTokens(brand.seo.homeTitle),
		description: seoDescription(brand.seo.homeDescription),
	};
}
