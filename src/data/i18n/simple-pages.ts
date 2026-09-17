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
		ctaSecondary: 'Buy on homepage',
		ctaSecondaryHref: '/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'How this list supports the product page',
				paragraphs: [
					'This Features page lists modules in the license. Buy on the <a href="/">Escape from Tarkov Cheats</a> homepage. Scan this list, then open Pricing or checkout.',
				],
				list: [
					'<a href="/">Buy on homepage</a>',
					'<a href="/pricing/">Pricing</a>',
					'<a href="/updates/">Updates</a>',
				],
			},
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
					'Streamproof overlay keeps ESP and menus off OBS. Cloud DMA is required for full functionality. Check Updates after a patch.',
				],
				list: [
					'Windows 10 / 11 — HVCI, TPM, and Secure Boot on',
					'Cloud DMA required for full functionality',
					'Updates on the Updates page',
				],
			},
		],
	}),
	pricing: page({
		title: brandSeo.storeTitle,
		description: brandSeo.storeDescription,
		h1: 'Pricing',
		intro: brandCopy.storeIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Setup guide',
		ctaSecondaryHref: '/setup/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'What you get',
				paragraphs: [
					'Pricing includes full package access for Windows 10 / 11 raids.',
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
		h1: 'Updates',
		intro: brandCopy.statusIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Buy on homepage',
		ctaSecondaryHref: '/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Current updates',
				paragraphs: [
					'Last checked 2026-09-15. We post a new Updates note here when a game or BattlEye patch needs a rebuild. This is not a forever-online claim.',
					'If Updates is green, you can raid. If we are rebuilding, wait for the next note.',
				],
				list: [
					'Check this page before every match after a patch',
					'Monthly and lifetime licenses get rebuilds while active',
					'No cheat stays undetected forever — Updates first, then play',
				],
			},
			{
				h2: 'After a patch',
				paragraphs: [
					'Wait for our rebuild note, then launch. Do not play on an old build after a big update.',
				],
				list: ['Read the latest Updates note', 'Follow setup if something fails', 'Email support with your order ID'],
			},
			{
				h2: 'Important',
				paragraphs: ['No cheat is 100% safe forever. Stay updated and use safe settings.'],
				list: ['Updates first, then play', '<a href="/support/">Support</a> for license help'],
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
					'<a href="/forum/">Forum</a>',
					'<a href="/updates/">Updates</a>',
				],
			},
			{
				h2: 'How to start',
				paragraphs: [
					'Buy a plan, get your license by email, then follow setup. Check Updates after every major patch.',
				],
				list: [
					'<a href="/pricing/">Pricing</a>',
					'<a href="/setup/">Setup guide</a>',
					'<a href="/updates/">Updates</a>',
				],
			},
		],
	}),
	'tarkov-esp': page({
		title: 'Player ESP | Escape from Tarkov Cheats',
		description:
			'Player ESP for Escape from Tarkov raids — PMC, Scav, and boss boxes, skeletons, and distance. Buy the full license on the homepage.',
		h1: 'Player ESP',
		intro: 'Player ESP for Tarkov raids. See PMCs, Scavs, and bosses through walls. This page is only the player overlay — not loot, not aimbot, not the buy page.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Buy on homepage',
		ctaSecondaryHref: '/',
		galleryTitle: 'Player ESP overlay',
		sections: [
			{
				h2: 'What player ESP shows',
				paragraphs: [
					'Player ESP draws boxes, skeletons, chams, health, nickname, weapon, and distance on PMCs, bosses, bots, and Scavs. Quest marks and extracts sit next to that overlay. It does not replace loot filters or aimbot lock.',
				],
				list: ['PMC, boss, bot, and Scav outlines', 'Health, weapon, and distance', 'Extracts next to player marks'],
			},
			{
				h2: 'How it differs from the homepage',
				paragraphs: [
					'The homepage sells the full raids license. This URL is the player-ESP deep dive. Loot ESP lives under Features. Aimbot has its own page. Radar is a 2D map cue, not this overlay.',
				],
				list: ['Tune max player distance', 'Keep loot filters on a different toggle', 'Pair with streamproof if you clip'],
			},
			{
				h2: 'Next steps',
				paragraphs: ['Player ESP is included in the same raids license as loot ESP and aimbot. Buy on the homepage.'],
				list: [
					'<a href="/">Buy Escape from Tarkov Cheats</a>',
					'<a href="/features/">All features</a>',
					'<a href="/pricing/">Pricing</a>',
				],
			},
		],
	}),
	'tarkov-aimbot': page({
		title: 'Aimbot | Escape from Tarkov Cheats',
		description:
			'Aimbot for Escape from Tarkov raids — FOV, vis check, prediction, no recoil. Buy the full license on the homepage.',
		h1: 'Aimbot',
		intro: 'Aimbot for Tarkov raids. FOV, vis check, and prediction in one menu. This page is only aim and recoil tools — not player ESP, not radar, not the buy page.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Buy on homepage',
		ctaSecondaryHref: '/',
		galleryTitle: 'Aimbot view',
		sections: [
			{
				h2: 'Aimbot controls',
				paragraphs: [
					'Set FOV, vis check, smart bone, prediction, and lock before you queue. No recoil and no sway sit in Misc. Wide FOV looks wrong in clips; keep it tight for raids.',
				],
				list: ['FOV, vis check, and prediction', 'No recoil and no sway', 'Hotkeys and config saves'],
			},
			{
				h2: 'How it differs from ESP',
				paragraphs: [
					'ESP shows who is in the building. Aimbot only helps the shot once you take the fight. The homepage packages both. This URL stays on aim settings.',
				],
				list: ['Visible-only aim for raids', 'Bone priority', 'Works with player ESP, sold on the homepage'],
			},
			{
				h2: 'Next steps',
				paragraphs: ['Aimbot ships with player ESP and loot ESP in one raids license. Arena needs a separate key.'],
				list: [
					'<a href="/">Buy Escape from Tarkov Cheats</a>',
					'<a href="/features/">All features</a>',
					'<a href="/pricing/">Pricing</a>',
				],
			},
		],
	}),
	radar: page({
		title: 'Radar | Escape from Tarkov Cheats',
		description:
			'2D radar for Escape from Tarkov raids — flank and extract cues on a map, not wall ESP. Buy the full license on the homepage.',
		h1: 'Radar',
		intro: '2D radar for Tarkov raids. Map cues for flanks and extracts. This is not player ESP through walls and not aimbot. Buy the license on the homepage.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Buy on homepage',
		ctaSecondaryHref: '/',
		galleryTitle: 'Radar overlay',
		sections: [
			{
				h2: 'What radar shows',
				paragraphs: [
					'Radar is a top-down cue: nearby threats, out-of-FOV arrows, and extract context on a 2D map. It does not draw boxes through Factory walls. That job is player ESP.',
				],
				list: ['2D threat cues', 'Out-of-FOV arrows', 'Extract context on the map'],
			},
			{
				h2: 'Radar vs ESP',
				paragraphs: [
					'Use radar when you need rotation and flank reads. Use player ESP when you need through-wall outlines. Both are in one raids license. This URL stays on radar.',
				],
				list: [
					'<a href="/tarkov-esp/">Player ESP</a>',
					'<a href="/">Buy on homepage</a>',
					'<a href="/pricing/">Pricing</a>',
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
		ctaSecondary: 'Updates',
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
				paragraphs: ['Check Updates after a patch. Email <!--email_off--><a href="mailto:support@eftcheat.net">support@eftcheat.net</a><!--email_on--> with your order ID.'],
				list: ['<a href="/updates/">Updates</a>', '<a href="/support/">Support</a>', '<a href="/faq/">FAQ</a>'],
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
				paragraphs: [
					'Support is by email at <!--email_off--><a href="mailto:support@eftcheat.net">support@eftcheat.net</a><!--email_on-->. Include your order ID and a short note about the issue.',
				],
				list: ['Order ID from your receipt', 'Windows version', 'What you already tried'],
			},
			{
				h2: 'Faster answers',
				paragraphs: ['Check FAQ and Updates before you write. Many setup questions are already covered.'],
				list: ['<a href="/faq/">FAQ</a>', '<a href="/updates/">Updates</a>', '<a href="/setup/">Setup</a>'],
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
				paragraphs: ['Follow Setup after you buy. Check Updates after big {game} or {antiCheat} patches.'],
				list: ['<a href="/setup/">Setup guide</a>', '<a href="/updates/">Updates</a>'],
			},
			{
				h2: 'Refunds',
				paragraphs: ['Read the refund policy before you buy if you need details.'],
				list: ['<a href="/refund-policy/">Refund policy</a>', '<a href="/support/">Support</a>'],
			},
		],
	}),
};
