import type { PageId } from './content.generated';
import { fillBrandTokens, seoDescription } from '../brand';
import { brandCopy, brandSeo, seoPageTitle } from '../site-core';

export type SimpleSection = {
	h2: string;
	paragraphs: string[];
	list?: string[];
};

export type SimplePageCopy = {
	title: string;
	description: string;
	h1: string;
	intro: string;
	ctaPrimary: string;
	ctaSecondary?: string;
	ctaSecondaryHref?: string;
	galleryTitle: string;
	sections: SimpleSection[];
};

function page(copy: SimplePageCopy): SimplePageCopy {
	return {
		...copy,
		title: seoPageTitle(copy.title),
		description: seoDescription(copy.description),
		intro: fillBrandTokens(copy.intro),
		sections: copy.sections.map((section) => ({
			...section,
			h2: fillBrandTokens(section.h2),
			paragraphs: section.paragraphs.map(fillBrandTokens),
			list: section.list?.map(fillBrandTokens),
		})),
	};
}

/** Short, plain-English overrides for key EN nav pages — meta from brand.seo */
export const simplePageCopy: Partial<Record<PageId, SimplePageCopy>> = {
	features: page({
		title: brandSeo.featuresTitle,
		description: brandSeo.featuresDescription,
		h1: 'Features',
		intro: brandCopy.featuresIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'View store',
		ctaSecondaryHref: '/pricing/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Player ESP',
				paragraphs: [
					'Player ESP shows PMCs, bosses, bots, and Scavs with box, skeleton, chams, health, and distance.',
					'Quest marks, nicknames, weapons, and radar sit in the same overlay.',
				],
				list: [
					'Player, boss, bot, and Scav ESP',
					'Box, skeleton, chams, and health',
					'Quest ESP, exfils, and transitions',
					'Radar and out-of-FOV arrows',
				],
			},
			{
				h2: 'Loot ESP and world',
				paragraphs: [
					'Loot ESP filters items by category, price, and distance. Containers, stashes, corpses, and computers can show too.',
					'World tools include weather, fog, rain, and custom loot colors.',
				],
				list: [
					'Loot names, price, and filters',
					'Containers, stashes, and corpses',
					'Weather, fog, and rain controls',
				],
			},
			{
				h2: 'Aimbot and combat',
				paragraphs: [
					'Aimbot includes FOV, vis check, smart bone, prediction, and lock. No recoil and no sway sit in Misc.',
					'Thermal, third person, loot through walls, and a config system are in the same menu.',
				],
				list: [
					'FOV, vis check, and prediction',
					'No recoil, no sway, and instant ADS',
					'Thermal, third person, and configs',
				],
			},
			{
				h2: 'System, streamproof, updates',
				paragraphs: [
					'This license is for Tarkov raids only. Arena needs a separate key.',
					'Streamproof overlay keeps ESP and menus off OBS. Cloud DMA is required for full functionality. Check Status after a patch.',
				],
				list: [
					'Windows 10 / 11 — HVCI, TPM, and Secure Boot on',
					'Cloud DMA required for full functionality',
					'Status on the Status page',
				],
			},
		],
	}),
	pricing: page({
		title: brandSeo.storeTitle,
		description: brandSeo.storeDescription,
		h1: 'Store',
		intro: brandCopy.storeIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Setup guide',
		ctaSecondaryHref: '/setup/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'What you get',
				paragraphs: [
					'The Store includes full package access for Windows 10 / 11 raids.',
					'Same player ESP, loot ESP, and aimbot on monthly ($35) and lifetime ($150). Not Arena.',
				],
				list: ['Player ESP, loot ESP, and aimbot', 'Patch rebuilds while active', 'Digital delivery after checkout'],
			},
			{
				h2: 'Plans',
				paragraphs: [
					'Pick monthly to try first, or lifetime for one payment.',
					'Both plans unlock the same features after checkout.',
				],
				list: ['Monthly — 31 days ($35)', 'Lifetime — one-time ($150)', 'Instant license by email'],
			},
			{
				h2: 'Before you buy',
				paragraphs: ['Read the refund policy if you need it. Contact support with your order ID for help.'],
				list: [
					'Cloud DMA required for full functionality',
					'Windows 10 / 11 — HVCI, TPM, and Secure Boot on',
					'<a href="/refund-policy/">Refund policy</a>',
					'<a href="/faq/">FAQ</a>',
					'<a href="/support/">Support</a>',
				],
			},
		],
	}),
	updates: page({
		title: brandSeo.statusTitle,
		description: brandSeo.statusDescription,
		h1: 'Status',
		intro: brandCopy.statusIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Full product',
		ctaSecondaryHref: '/tarkov-cheats/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Current status',
				paragraphs: [
					'As of 21 Aug 2026 the package is online for Escape from Tarkov on Windows PC. We post a new note here when a game or BattlEye patch needs a rebuild.',
					'If Status is green, you can raid. If we are rebuilding, wait for the next note.',
				],
				list: [
					'Check this page before every match after a patch',
					'Monthly and lifetime licenses get rebuilds while active',
					'No cheat stays undetected forever — status first, then play',
				],
			},
			{
				h2: 'After a patch',
				paragraphs: [
					'Wait for our rebuild note, then launch. Do not play on an old build after a big update.',
				],
				list: ['Read the latest status note', 'Follow setup if something fails', 'Email support with your order ID'],
			},
			{
				h2: 'Important',
				paragraphs: ['No cheat is 100% safe forever. Stay updated and use safe settings.'],
				list: ['Status first, then play', '<a href="/support/">Support</a> for license help'],
			},
		],
	}),
	hacks: page({
		title: brandSeo.previewTitle,
		description: brandSeo.previewDescription,
		h1: 'Escape from Tarkov Cheats',
		intro: brandCopy.previewIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'View features',
		ctaSecondaryHref: '/features/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'What you get',
				paragraphs: [
					'Escape from Tarkov Cheats is one license for Tarkov raids on Windows PC. Arena needs a separate key.',
				],
				list: [
					'Player, boss, bot, and Scav ESP',
					'Loot ESP with filters and containers',
					'Quest ESP, exfils, and radar',
					'Aimbot with FOV, vis check, and prediction',
					'No recoil, no sway, and instant ADS',
					'Streamproof overlay',
					'Cloud DMA for full functionality',
					'Config save, load, import, and export',
				],
			},
			{
				h2: 'Built for Escape from Tarkov',
				paragraphs: [
					'Escape from Tarkov Cheats helps you read PMCs, Scavs, and bosses before you push, filter loot worth the risk, and mark exfils. Tune aimbot FOV and vis check for close quarters and long-range fights.',
				],
				list: [
					'<a href="/tarkov-esp/">ESP guide</a>',
					'<a href="/tarkov-aimbot/">Aimbot controls</a>',
					'<a href="/guides/">Guides</a>',
					'<a href="/updates/">Live status</a>',
				],
			},
			{
				h2: 'How to start',
				paragraphs: [
					'Buy a plan, get your license by email, then follow setup. Check Status after every major patch.',
				],
				list: [
					'<a href="/pricing/">Open store</a>',
					'<a href="/setup/">Setup guide</a>',
					'<a href="/updates/">Check status</a>',
				],
			},
		],
	}),
	'tarkov-esp': page({
		title: 'Escape from Tarkov ESP | {brand}',
		description:
			'Escape from Tarkov ESP for Windows PC — player, loot, quest, and exfil overlays in raids.',
		h1: 'ESP',
		intro: 'Escape from Tarkov ESP shows PMCs, Scavs, bosses, and loot through walls. Part of the same {brand} license for raids.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Full product',
		ctaSecondaryHref: '/tarkov-cheats/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'What ESP shows',
				paragraphs: [
					'Player ESP includes box, skeleton, chams, health, nickname, weapon, and distance. Boss, bot, Scav, and quest ESP share the same menu.',
				],
				list: ['Player, boss, bot, and Scav ESP', 'Loot ESP with filters and price', 'Quest ESP, exfils, and radar'],
			},
			{
				h2: 'When to use it',
				paragraphs: ['Filter loot by price and category so the overlay stays clear in a raid.'],
				list: ['Tune max distance', 'Filter loot noise', 'Pair with the streamproof overlay'],
			},
			{
				h2: 'Next steps',
				paragraphs: ['ESP is included with aimbot and wallhack in one plan.'],
				list: [
					'<a href="/tarkov-cheats/">Full product</a>',
					'<a href="/features/">All features</a>',
					'<a href="/pricing/">Store</a>',
				],
			},
		],
	}),
	'tarkov-aimbot': page({
		title: 'Escape from Tarkov Aimbot | {brand}',
		description:
			'Escape from Tarkov aimbot for Windows PC — FOV, vis check, prediction, no recoil, and no sway.',
		h1: 'Aimbot',
		intro: 'Escape from Tarkov aimbot with FOV, vis check, and no recoil. Included in the same {brand} license for raids.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Full product',
		ctaSecondaryHref: '/tarkov-cheats/',
		galleryTitle: 'Aimbot view',
		sections: [
			{
				h2: 'Controls',
				paragraphs: ['Set FOV, vis check, smart bone, prediction, and lock before you queue.'],
				list: ['FOV, vis check, and prediction', 'No recoil and no sway', 'Hotkeys and config saves'],
			},
			{
				h2: 'Play styles',
				paragraphs: ['Keep FOV tight for raids. Raise strength only when you accept more risk.'],
				list: ['Visible-only aim', 'Bone priority', 'Works with player ESP'],
			},
			{
				h2: 'Next steps',
				paragraphs: ['Aimbot ships with ESP and wallhack in one license.'],
				list: [
					'<a href="/tarkov-cheats/">Full product</a>',
					'<a href="/features/">All features</a>',
					'<a href="/pricing/">Store</a>',
				],
			},
		],
	}),
	radar: page({
		title: 'Escape from Tarkov Wallhack | {brand}',
		description:
			'Escape from Tarkov wallhack for Windows PC — chams and ESP through walls with a streamproof overlay.',
		h1: 'Wallhack',
		intro: 'Escape from Tarkov wallhack uses chams and ESP so you read PMCs through walls. Streamproof overlay included.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Full product',
		ctaSecondaryHref: '/tarkov-cheats/',
		galleryTitle: 'Wallhack overlay',
		sections: [
			{
				h2: 'What it shows',
				paragraphs: ['Chams, skeleton, and box ESP show enemies through walls. Radar and out-of-FOV arrows help on the flanks.'],
				list: ['Chams and skeleton ESP', 'Streamproof overlay', 'Radar and OOF arrows'],
			},
			{
				h2: 'With ESP',
				paragraphs: ['Use wallhack for threats you cannot see yet. Use ESP when you push.'],
				list: [
					'<a href="/tarkov-esp/">ESP guide</a>',
					'<a href="/tarkov-cheats/">Full product</a>',
					'<a href="/pricing/">Store</a>',
				],
			},
		],
	}),
	setup: page({
		title: brandSeo.setupTitle,
		description: brandSeo.setupDescription,
		h1: 'Setup',
		intro: brandCopy.setupIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Check status',
		ctaSecondaryHref: '/updates/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Before you install',
				paragraphs: ['Start Setup after you buy a plan. You get a license by email. This key is for raids, not Arena.'],
				list: [
					'Windows 10 / 11 PC, Intel or AMD',
					'HVCI, Core Isolation, TPM, and Secure Boot on',
					'Have your order email ready',
				],
			},
			{
				h2: 'Install steps',
				paragraphs: ['Run the loader as admin, paste your license, then launch {game}. Cloud DMA is required for full functionality.'],
				list: ['Download the loader from your delivery email', 'Paste license key', 'Launch the game'],
			},
			{
				h2: 'If something fails',
				paragraphs: ['Check Status after a patch. Email {email} with your order ID.'],
				list: ['<a href="/updates/">Status page</a>', '<a href="/support/">Support</a>', '<a href="/faq/">FAQ</a>'],
			},
		],
	}),
	support: page({
		title: brandSeo.supportTitle,
		description: brandSeo.supportDescription,
		h1: 'Support',
		intro: brandCopy.supportIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'FAQ',
		ctaSecondaryHref: '/faq/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'How to contact us',
				paragraphs: ['Support is by email at {email}. Include your order ID and a short note about the issue.'],
				list: ['Order ID from your receipt', 'Windows version', 'What you already tried'],
			},
			{
				h2: 'Faster answers',
				paragraphs: ['Check FAQ and Status before you write. Many setup questions are already covered.'],
				list: ['<a href="/faq/">FAQ</a>', '<a href="/updates/">Status</a>', '<a href="/setup/">Setup</a>'],
			},
		],
	}),
	faq: page({
		title: brandSeo.faqTitle,
		description: brandSeo.faqDescription,
		h1: 'FAQ',
		intro: brandCopy.faqIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Support',
		ctaSecondaryHref: '/support/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Buying & delivery',
				paragraphs: ['This FAQ covers buying and delivery. You get a digital license by email after payment.'],
				list: ['Instant delivery after checkout', 'Keep your order email', 'One license per purchase'],
			},
			{
				h2: 'Setup & updates',
				paragraphs: ['Follow Setup after you buy. Check Status after big {game} or {antiCheat} patches.'],
				list: ['<a href="/setup/">Setup guide</a>', '<a href="/updates/">Status</a>'],
			},
			{
				h2: 'Refunds',
				paragraphs: ['Read the refund policy before you buy if you need details.'],
				list: ['<a href="/refund-policy/">Refund policy</a>', '<a href="/support/">Support</a>'],
			},
		],
	}),
};
