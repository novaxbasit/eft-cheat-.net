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
				h2: 'ESP & wallhack',
				paragraphs: [
					'These ESP and wallhack Features show PMCs, bots, and loot through walls with distance readouts.',
					'Use filters so the overlay stays clear in PMC raids and Scav runs.',
				],
				list: [
					'PMC and bot ESP',
					'Loot container ESP',
					'Extract helicopter markers',
					'Key and quest item highlights',
				],
			},
			{
				h2: 'Aimbot & no recoil',
				paragraphs: [
					'Aimbot with FOV limit you can tune to feel natural.',
					'Set FOV, smoothness, and no recoil tuning per weapon before you queue.',
				],
				list: ['Aimbot with FOV limit', 'No recoil tuning', 'Hotkeys mid-match'],
			},
			{
				h2: 'Stream-proof & cloud DMA',
				paragraphs: [
					'Stream-proof overlay for ranked sessions.',
					'Cloud-DMA option and AWS hosting available for advanced setups.',
				],
				list: ['Stream-proof overlay', 'Cloud-DMA option', 'AWS option'],
			},
			{
				h2: 'Updates & support',
				paragraphs: [
					'We rebuild after big {game} or {antiCheat} patches.',
					'Check Status before you play after a patch day.',
				],
				list: ['Status on the Status page', 'Setup guide included', 'Email support with your order ID'],
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
					'The Store includes full package access for Windows 10 / 11.',
					'Same ESP, aimbot, and wallhack on monthly and lifetime plans.',
				],
				list: ['ESP, aimbot, and wallhack', 'Patch rebuilds while active', 'Digital delivery after checkout'],
			},
			{
				h2: 'Plans',
				paragraphs: [
					'Pick monthly to try first, or lifetime for one payment.',
					'Both plans unlock the same features after checkout.',
				],
				list: ['Monthly — 30 days', 'Lifetime — one-time', 'Instant license by email'],
			},
			{
				h2: 'Before you buy',
				paragraphs: ['Read the refund policy if you need it. Contact support with your order ID for help.'],
				list: [
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
					'Escape from Tarkov Cheats is one license for Escape from Tarkov on Windows PC — built for PMC raids and Scav runs.',
				],
				list: [
					'PMC and bot ESP / wallhack',
					'Loot container ESP',
					'Extract helicopter markers',
					'Key and quest item highlights',
					'Aimbot with FOV limit',
					'No recoil tuning',
					'Stream-proof overlay',
					'Cloud-DMA option and AWS option',
				],
			},
			{
				h2: 'Built for Escape from Tarkov',
				paragraphs: [
					'Escape from Tarkov Cheats helps you read PMCs and bots before you push, mark loot worth the risk, and stay aware near extracts. Tune aimbot FOV and no recoil per weapon for close quarters and long-range gunfights.',
				],
				list: [
					'<a href="/tarkov-esp/">ESP guide</a>',
					'<a href="/tarkov-aimbot/">Aimbot controls</a>',
					'<a href="/tarkov-radar-hack/">Stream-proof overlay</a>',
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
			'Escape from Tarkov ESP and wallhack for Windows PC — PMC boxes, loot containers, extract markers, and clear overlays in raids.',
		h1: 'ESP',
		intro: 'Escape from Tarkov ESP shows PMCs, bots, and loot containers through walls. Part of the same {brand} license.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Full product',
		ctaSecondaryHref: '/tarkov-cheats/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'What ESP shows',
				paragraphs: [
					'Escape from Tarkov ESP includes boxes, distance, and filters for PMCs, bots, and loot containers.',
				],
				list: ['PMC and bot ESP', 'Loot container ESP', 'Extract helicopter markers', 'Key and quest item highlights'],
			},
			{
				h2: 'When to use it',
				paragraphs: ['Clear PMC raids without flooding the screen.'],
				list: ['Tune opacity', 'Filter noise', 'Pair with stream-proof overlay'],
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
			'Escape from Tarkov aimbot for Windows PC — FOV limit, smoothness, and no recoil tuning you can set per weapon.',
		h1: 'Aimbot',
		intro: 'Escape from Tarkov aimbot with FOV limit and no recoil tuning. Included in the same {brand} license.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Full product',
		ctaSecondaryHref: '/tarkov-cheats/',
		galleryTitle: 'Aimbot view',
		sections: [
			{
				h2: 'Controls',
				paragraphs: ['Set FOV limit, smoothness, and no recoil before you queue.'],
				list: ['Aimbot with FOV limit', 'No recoil tuning', 'Hotkeys mid-match'],
			},
			{
				h2: 'Play styles',
				paragraphs: ['Keep settings subtle for longer sessions. Raise strength only when you accept more risk.'],
				list: ['Legit aim settings', 'Per-weapon profiles', 'Works with ESP'],
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
			'Escape from Tarkov wallhack for Windows PC — see PMCs and bots through walls with a stream-proof overlay.',
		h1: 'Wallhack',
		intro: 'Escape from Tarkov wallhack with stream-proof overlay. Included in the same {brand} license.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Full product',
		ctaSecondaryHref: '/tarkov-cheats/',
		galleryTitle: 'Wallhack overlay',
		sections: [
			{
				h2: 'What it shows',
				paragraphs: ['This Wallhack shows enemy PMC and bot outlines through walls with adjustable range.'],
				list: ['See through walls', 'Stream-proof overlay', 'Adjustable filters'],
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
				paragraphs: ['Start Setup after you buy a plan. You get a license by email.'],
				list: ['Windows 10 / 11 PC', 'Disable conflicting overlays', 'Have your order email ready'],
			},
			{
				h2: 'Install steps',
				paragraphs: ['Run the loader as admin, paste your license, then launch {game}.'],
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
