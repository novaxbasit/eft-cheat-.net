/**
 * SINGLE SOURCE OF TRUTH for template rebrands.
 * Employees: use Brand Studio at http://localhost:4321/brand-studio/ during `astro dev`.
 * Do not scatter brand strings across components.
 */
export const brand = {
	/** Public brand name (nav, footer, H1 hero, schema Organization) */
	name: 'Rainbow Six Siege Cheats',
	/** Short product label if needed */
	shortName: 'Rainbow Six Siege',
	/** Canonical origin — no trailing slash */
	url: 'https://r6siegecheats.net',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@r6siegecheats.net',
	checkoutUrl: 'https://zadeyo.com/go/BASIT?to=%2Fproducts%2Frainbow-six-siege',

	/** Game this template instance targets */
	game: 'Rainbow Six Siege',
	/** Anti-cheat name used in Status / FAQ copy */
	antiCheat: 'BattlEye',

	logo: '/images/r6-siege-cheats-logo.webp',
	logoRaster: '/images/r6-siege-cheats-logo.png',
	logoRasterWidth: 512,
	logoRasterHeight: 512,
	logoAlt: 'Rainbow Six Siege Cheats logo',
	defaultOgImage: '/images/r6-siege-cheats-hero-1024w.webp',
	heroImage: '/images/r6-siege-cheats-hero-1024w.webp',

	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	] as const,
	currency: 'USD',
	platforms: ['Windows PC'] as const,

	/**
	 * Site color tones — accent + canvas + soft/deep/hover/panel.
	 * Edit in Brand Studio → Colors (tones are fully customizable).
	 */
	theme: {
		accent: '#1e90ff',
		bg: '#0a0f18',
		soft: '#7dd3fc',
		deep: '#0369a1',
		hover: '#38bdf8',
		panel: '#0c1220',
	},

	/**
	 * Keyword system — primary drives titles; list feeds schema / light targeting.
	 * Keep 5–8 terms.
	 */
	keywords: {
		primary: 'Rainbow Six Siege cheats',
		list: [
			'Rainbow Six Siege cheats',
			'Rainbow Six Siege hacks',
			'Rainbow Six Siege ESP',
			'Rainbow Six Siege aimbot',
			'Rainbow Six Siege wallhack',
			'Rainbow Six Siege cheats PC',
			'Rainbow Six Siege cheats 2026',
			'undetected Rainbow Six Siege cheats',
		] as const,
	},

	/**
	 * Editable SEO meta — tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 * Aim ~50–60 chars titles, ~140–160 chars descriptions.
	 */
	seo: {
		/** Titles ≤60 chars; descriptions ~140–160 (Google SERP display). */
		/** Home = brand hub. Money URL /r6-siege-cheats/ owns the head term. */
		homeTitle: 'Rainbow Six Siege Cheats | Official Windows PC Site',
		homeDescription:
			'Official Rainbow Six Siege Cheats site for Windows PC. Compare features, store plans, and live status — then buy ESP, aimbot, and wallhack in one license.',
		featuresTitle: '{game} Features | {brand}',
		featuresDescription:
			'Everything in one {game} license for Windows PC — operator ESP, aimbot, wallhack, no recoil, and patch updates after {antiCheat}. See what is included.',
		storeTitle: '{game} Store | {brand}',
		storeDescription:
			'Monthly and lifetime {game} plans for Windows PC. Same ESP, aimbot, and wallhack features on both. Instant delivery after payment checkout.',
		statusTitle: '{game} Status | {brand}',
		statusDescription:
			'Live undetected status for {brand} after {game} or {antiCheat} patches. Check here before you queue ranked on Windows PC today.',
		/** Money page meta — primary target for "Rainbow Six Siege cheats". */
		previewTitle: 'Rainbow Six Siege Cheats | Undetected ESP & Aimbot',
		previewDescription:
			'Buy undetected Rainbow Six Siege cheats for Windows PC. ESP, aimbot, wallhack, stream-proof overlay, and BattlEye patch updates in one license.',
		setupTitle: '{game} Setup | {brand}',
		setupDescription:
			'Install and launch {brand} on Windows PC after checkout. Short setup steps so you can queue faster. Follow each step in order before your first match.',
		supportTitle: '{game} Support | {brand}',
		supportDescription:
			'Get help with {brand} on Windows PC. Email {email} with your order ID for setup, delivery, or billing help after you buy.',
		faqTitle: '{game} FAQ | {brand}',
		faqDescription:
			'Short answers about {brand} for Rainbow Six Siege — delivery, setup, {antiCheat} updates, refunds, and Windows PC system notes before you buy.',
		reviewsTitle: '{brand} Reviews | Buyer Feedback',
		reviewsDescription:
			'Buyer reviews for {brand} — ESP, aimbot, wallhack, and patch updates for Rainbow Six Siege on Windows PC. Real feedback from license holders.',
		blogTitle: '{game} Intel | {brand}',
		blogDescription:
			'Guides and notes for {game} — ranked tips, ESP, aimbot, operator meta, and {antiCheat} update coverage for Windows PC players.',
	},

	/** On-page marketing copy (tokens allowed) */
	copy: {
		tagline: 'Undetected {primaryKeyword} — ESP, aimbot, and wallhack for PC',
		summary:
			'{brand} is an undetected {game} cheat package for Windows PC. Includes operator ESP, aimbot, and wallhack, with {antiCheat} maintenance after patches.',
		heroLede: 'Undetected ESP, aimbot, and wallhack for Rainbow Six Siege on Windows PC.',
		blogLabel: 'Rainbow Six Siege Intel',
		ctaBuy: 'Get Access',
		ctaBuyShort: 'Buy',
		featuresIntro: 'These Features are included in one license for {game} on Windows PC.',
		storeIntro: 'Store plans for {brand}. Same features on both. Instant delivery after payment.',
		statusIntro: 'Live Status for {brand} — check here after a {game} or {antiCheat} patch before you queue.',
		previewIntro:
			'{brand} for Rainbow Six Siege — operator ESP, wallhack, aimbot with FOV limit, no recoil tuning, and stream-proof overlay.',
		setupIntro: 'Setup guide for {brand} on Windows PC after you buy. Follow these short steps.',
		supportIntro: 'Support for {brand} — email {email} with your order ID.',
		faqIntro: 'FAQ with short answers about delivery, setup, updates, and refunds.',
		reviewsIntro: '{brand} reviews from buyers — ESP, aimbot, wallhack, and support.',
		chipEsp: 'ESP / wallhack',
		chipAim: 'Aimbot',
		chipRadar: 'Stream-proof',
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
		contentLastmod: '2026-08-17',
		blogImageTitle: '{brand} blog',
		blogImageCaption: 'Tips and updates for {primaryKeyword}',
		reviewsImageTitle: '{brand} reviews',
		reviewsImageCaption: 'What buyers say about {primaryKeyword}',
		images: [
			{
				src: '/images/r6-siege-cheats-esp.webp',
				title: 'ESP overlay in Rainbow Six Siege',
				caption: 'Operator ESP boxes and distance readouts during a ranked match',
			},
			{
				src: '/images/r6-siege-cheats-wallhack.webp',
				title: 'Wallhack visibility for Rainbow Six Siege matches',
				caption: 'Enemy operator outlines through walls and barricades',
			},
			{
				src: '/images/r6-siege-cheats-aimbot.webp',
				title: 'Aimbot with FOV limit for Rainbow Six Siege',
				caption: 'Configurable aimbot FOV and bone priority',
			},
			{
				src: '/images/r6-siege-cheats-aimbot-view.webp',
				title: 'Aimbot view in Rainbow Six Siege Cheats',
				caption: 'In-menu aimbot controls for Windows PC',
			},
			{
				src: '/images/r6-siege-cheats-radar.webp',
				title: 'Stream-proof overlay',
				caption: 'Stream-proof ESP overlay for ranked play',
			},
			{
				src: '/images/r6-siege-cheats-raid.webp',
				title: 'Rainbow Six Siege Cheats license plans',
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
