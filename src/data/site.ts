export {
	brand,
	blogLabel,
	fillBrandTokens,
	homeSeo,
	seoDescription,
	seoPageTitle,
	seoTitle,
	siteConfig,
	seoKeywords,
	productInfo,
} from './site-core';

import { fillBrandTokens } from './brand';

function faq<T extends { question: string; answer: string; seoTitle: string; seoDescription: string }>(item: T): T {
	return {
		...item,
		question: fillBrandTokens(item.question),
		answer: fillBrandTokens(item.answer),
		seoTitle: fillBrandTokens(item.seoTitle),
		seoDescription: fillBrandTokens(item.seoDescription),
	};
}

function reviewMeta<T extends { seoTitle: string; seoDescription: string }>(item: T): T {
	return {
		...item,
		seoTitle: fillBrandTokens(item.seoTitle),
		seoDescription: fillBrandTokens(item.seoDescription),
	};
}

export const trustSignals = {
	status: 'Online',
	statusNote: fillBrandTokens('{brand} is live for {game} on Windows PC.'),
	delivery: 'Instant digital delivery',
	platform: 'Windows 10 & 11',
	antiCheat: fillBrandTokens('{antiCheat} maintenance supported'),
} as const;

export const seoLandingPages = [
	{ label: fillBrandTokens('{game} hacks'), href: '/r6-siege-cheats/' },
	{ label: fillBrandTokens('{primaryKeyword}'), href: '/r6-siege-cheats/' },
	{ label: fillBrandTokens('{game} esp'), href: '/r6-siege-esp/' },
	{ label: fillBrandTokens('{game} aimbot'), href: '/r6-siege-aimbot/' },
	{ label: fillBrandTokens('{game} setup'), href: '/setup/' },
	{ label: fillBrandTokens('Undetected {primaryKeyword}'), href: '/r6-siege-cheats/' },
	{ label: fillBrandTokens('{game} wallhack'), href: '/r6-siege-esp/' },
	{ label: fillBrandTokens('{game} radar hack'), href: '/r6-siege-radar-hack/' },
] as const;

export const mainNav = [
	{ label: 'Home', href: '/' },
	{ label: 'Cheats', href: '/r6-siege-cheats/' },
	{ label: 'Aimbot', href: '/r6-siege-aimbot/' },
	{ label: 'ESP', href: '/r6-siege-esp/' },
	{ label: 'Features', href: '/features/' },
	{ label: 'Pricing', href: '/pricing/' },
	{ label: 'Setup', href: '/setup/' },
	{ label: 'Updates', href: '/updates/' },
	{ label: 'FAQ', href: '/faq/' },
] as const;

export const footerNav = [
	{ label: fillBrandTokens('{game} hack update log'), href: '/updates/' },
	{ label: fillBrandTokens('Contact {brand} support'), href: '/support/' },
	{ label: 'Refund policy details', href: '/refund-policy/' },
	{ label: 'Privacy policy details', href: '/privacy-policy/' },
	{ label: 'Terms of use', href: '/terms/' },
] as const;

export const footerExplore = [
	{ label: fillBrandTokens('{brand} home'), href: '/' },
	{ label: fillBrandTokens('{game} hacks pillar'), href: '/r6-siege-cheats/' },
	{ label: fillBrandTokens('Live {game} status'), href: '/updates/' },
	{ label: fillBrandTokens('{game} ESP overlays'), href: '/r6-siege-esp/' },
	{ label: fillBrandTokens('{game} Aimbot controls'), href: '/r6-siege-aimbot/' },
	{ label: fillBrandTokens('{game} radar hack'), href: '/r6-siege-radar-hack/' },
	{ label: fillBrandTokens('Full {game} hack feature list'), href: '/features/' },
	{ label: 'Monthly & lifetime pricing', href: '/pricing/' },
	{ label: fillBrandTokens('{game} hack setup guide'), href: '/setup/' },
	{ label: fillBrandTokens('{game} hacks FAQ'), href: '/faq/' },
	{ label: fillBrandTokens('{brand} reviews'), href: '/reviews/' },
	{ label: fillBrandTokens('{game} Intel blog'), href: '/blog/' },
	{ label: fillBrandTokens('Contact {brand} support'), href: '/support/' },
] as const;

export type FaqItem = {
	question: string;
	answer: string;
	slug: string;
	seoTitle: string;
	seoDescription: string;
};

export const homeFaqs: readonly FaqItem[] = [
	faq({
		question: 'What is {brand}?',
		answer:
			'{brand} is an undetected {primaryKeyword} package for Rainbow Six Siege on Windows PC. It includes ESP wallhack, aimbot with FOV limit, and stream-proof overlay, with {antiCheat} maintenance and setup support.',
		slug: 'what-are-r6-siege-cheats',
		seoTitle: 'What is {brand}? | FAQ',
		seoDescription:
			'{brand} explained: undetected ESP, radar, and aimbot for {game} on Windows PC with {antiCheat} maintenance.',
	}),
	faq({
		question: 'Are {primaryKeyword} undetected in 2026?',
		answer:
			'{brand} is maintained for {game} with rebuilds after {antiCheat} and game patches. Check the Status page before you queue. No cheat can guarantee permanent undetected status — maintenance and responsible use matter.',
		slug: 'are-r6-siege-cheats-undetected-in-2026',
		seoTitle: 'Are {brand} Undetected in 2026? | FAQ',
		seoDescription:
			'How {brand} stays maintained after {antiCheat} patches in 2026 — and why no cheat can promise permanent undetected status.',
	}),
	faq({
		question: 'Does this work in ranked and unranked matches?',
		answer:
			'Yes. ESP, aimbot, and wallhack are built for {game} match flow — reading operators and bots, spotting gadgets, and staying aware near objectives.',
		slug: 'ranked-and-unranked-matches',
		seoTitle: 'Ranked and Unranked Support | FAQ',
		seoDescription:
			'{brand} works in ranked and unranked matches — ESP, aimbot, and wallhack for Windows PC.',
	}),
	faq({
		question: 'What is included — ESP, wallhack, radar, or Aimbot?',
		answer:
			'{brand} bundles ESP wallhack, operator and bot ESP, aimbot with FOV limit, and no recoil tuning in one license. See Features for the full list.',
		slug: 'esp-wallhack-radar-or-aimbot',
		seoTitle: 'What Is Included: ESP, Wallhack, Radar, Aimbot | FAQ',
		seoDescription:
			'One {brand} license includes ESP wallhack, loot markers, 2D radar cues, and configurable Aimbot for Windows PC.',
	}),
	faq({
		question: 'How are licenses delivered?',
		answer:
			'After payment is confirmed, {brand} license details are delivered digitally through checkout. Timing can vary by payment method and order review. Keep your order confirmation ready if you contact support.',
		slug: 'how-are-licenses-delivered',
		seoTitle: 'How Are {brand} Licenses Delivered? | FAQ',
		seoDescription:
			'{brand} licenses are delivered digitally after payment confirmation. Timing varies by payment method and order review.',
	}),
	faq({
		question: 'Where do I check updates after a Rainbow Six Siege or {antiCheat} patch?',
		answer:
			'Maintenance notes are posted on the Status page when a Rainbow Six Siege or {antiCheat} update affects the package. That is the fastest place to confirm whether a new {brand} build is live.',
		slug: 'where-to-check-updates',
		seoTitle: 'Where to Check {game} / {antiCheat} Updates | FAQ',
		seoDescription:
			'Check the Status page after {game} or {antiCheat} patches to confirm the latest {brand} build status.',
	}),
	faq({
		question: 'How do I contact support?',
		answer:
			'Use the Support page or email {email}. Include your order details, package length, and a clear description of the setup issue so replies can be faster.',
		slug: 'how-to-contact-support',
		seoTitle: 'How to Contact {brand} Support | FAQ',
		seoDescription:
			'Contact {brand} support via the Support page or {email} with your order details for faster help.',
	}),
] as const;

export const seoFaqs: readonly FaqItem[] = [
	...homeFaqs,
	faq({
		question: 'What is a {game} wallhack?',
		answer:
			'A {game} wallhack is an ESP overlay that shows operators, bots, and gadgets through walls. {brand} includes distance readouts, objective cues, and toggleable categories.',
		slug: 'what-is-a-r6-siege-wallhack',
		seoTitle: 'What Is a {game} Wallhack? | FAQ',
		seoDescription:
			'A {game} wallhack is ESP that reveals PMCs, Scavs, and loot through walls — with distance, extracts, and category toggles.',
	}),
	faq({
		question: 'Does {brand} include a stream-proof overlay?',
		answer:
			'Yes. {brand} includes a stream-proof overlay so ESP and wallhack stay hidden on capture software — useful for ranked sessions.',
		slug: 'does-r6-siege-cheats-include-stream-proof',
		seoTitle: 'Does {brand} Include Stream-Proof Overlay? | FAQ',
		seoDescription:
			'Yes — {brand} includes a stream-proof overlay for ESP and wallhack on Windows PC.',
	}),
	faq({
		question: 'How does {antiCheat} affect {primaryKeyword}?',
		answer:
			'{antiCheat} monitors {game} on Windows PC. {brand} posts maintenance notes after patches that may need a rebuild. Check Status before you raid.',
		slug: 'battleye-anti-cheat-and-r6-siege-cheats',
		seoTitle: 'How {antiCheat} Affects {brand} | FAQ',
		seoDescription:
			'{antiCheat} may require {brand} rebuilds after patches. Status notes explain the update workflow.',
	}),
	faq({
		question: 'Can I buy undetected {game} cheats for Windows PC?',
		answer:
			'Yes — {brand} sells monthly and lifetime licenses for Windows PC with ESP, radar, and aimbot in one stack. Compare plans on Store before checkout.',
		slug: 'buy-undetected-r6-siege-cheats-windows-pc',
		seoTitle: 'Buy Undetected {game} Cheats for Windows PC | FAQ',
		seoDescription:
			'Buy monthly or lifetime {brand} licenses for Windows PC — ESP, radar, and aimbot in one stack. Compare pricing before checkout.',
	}),
] as const;

export type CustomerReview = {
	handle: string;
	rating: 3 | 4 | 5;
	text: string;
	short: string;
	slug: string;
	seoTitle: string;
	seoDescription: string;
	date: string;
	tag?: string;
};

export const customerReviews = [
	reviewMeta({
		handle: 'xKrypt0_R6',
		rating: 5,
		text: 'Aimbot in Rainbow Six Siege Cheats feels smooth in ranked. The menu took a few minutes to learn. After that, gunfights felt easier.',
		short: 'Aimbot in Rainbow Six Siege Cheats feels smooth in ranked.',
		slug: 'r6-siege-aimbot-review-xkrypt0',
		seoTitle: 'Aimbot Review by @xKrypt0_R6 — 5/5 | {brand}',
		seoDescription: '@xKrypt0_R6 rates {brand} aimbot 5/5 for ranked on Windows PC.',
		date: '2026-07-24',
		tag: 'Aimbot',
	}),
	reviewMeta({
		handle: 'buildsR4K',
		rating: 4,
		text: 'ESP boxes help in unranked. You can see who is holding a hallway before you push. Still worth the price for Rainbow Six Siege Cheats.',
		short: 'ESP boxes help in unranked. Still worth the price for Rainbow Six Siege Cheats.',
		slug: 'r6-siege-esp-ranked-review-buildsr4k',
		seoTitle: 'ESP Review by @buildsR4K — 4/5 | {brand}',
		seoDescription: '@buildsR4K rates {brand} ESP 4/5 for ranked on Windows PC.',
		date: '2026-07-19',
		tag: 'Ranked',
	}),
	reviewMeta({
		handle: 'dma_wizard',
		rating: 5,
		text: 'I moved to Rainbow Six Siege Cheats this season. Setup was simple. It stayed up after the last BattlEye update when my old cheat failed. Lifetime was a good buy.',
		short: 'Rainbow Six Siege Cheats stayed up after the last BattlEye update. Lifetime was a good buy.',
		slug: 'r6-siege-cloud-dma-review-dma-wizard',
		seoTitle: 'Update Review by @dma_wizard — 5/5 | {brand}',
		seoDescription: '@dma_wizard rates {brand} 5/5 after a {antiCheat} update on Windows PC.',
		date: '2026-06-27',
		tag: 'Updates',
	}),
	reviewMeta({
		handle: 'ctrl_player99',
		rating: 4,
		text: 'Aimbot FOV in Rainbow Six Siege Cheats is easy to tune on PC. I changed FOV a little and it felt natural. Menu is clear enough.',
		short: 'Aimbot FOV in Rainbow Six Siege Cheats is easy to tune on PC.',
		slug: 'r6-siege-aimbot-review-ctrl-player99',
		seoTitle: 'Aimbot Review by @ctrl_player99 — 4/5 | {brand}',
		seoDescription: '@ctrl_player99 rates {brand} aimbot 4/5 on Windows PC.',
		date: '2026-07-11',
		tag: 'Aimbot',
	}),
	reviewMeta({
		handle: 'stormChaser_07',
		rating: 3,
		text: 'Rainbow Six Siege Cheats works well once it is running. First launch was slow because Windows Defender flagged the loader. Support replied in about two hours. ESP on Clubhouse is solid.',
		short: 'ESP on Clubhouse is solid. Support helped after a slow first launch.',
		slug: 'r6-siege-cheat-setup-review-stormchaser07',
		seoTitle: 'Setup Review by @stormChaser_07 — 3/5 | {brand}',
		seoDescription: '@stormChaser_07 rates {brand} setup 3/5. ESP on Clubhouse is solid after support help.',
		date: '2026-06-15',
		tag: 'Setup',
	}),
	reviewMeta({
		handle: 'gadgetGoblinx',
		rating: 5,
		text: 'Gadget ESP in Rainbow Six Siege Cheats pays for the monthly plan. Objective markers and distance make early ranked faster.',
		short: 'Gadget ESP in Rainbow Six Siege Cheats pays for the monthly plan.',
		slug: 'r6-siege-gadget-esp-review-gadgetgoblinx',
		seoTitle: 'Gadget ESP Review by @gadgetGoblinx — 5/5 | {brand}',
		seoDescription: '@gadgetGoblinx rates {brand} gadget ESP 5/5 for ranked on Windows PC.',
		date: '2026-08-01',
	}),
	reviewMeta({
		handle: 'rankedGrind42',
		rating: 4,
		text: 'I have used Rainbow Six Siege Cheats since last season. No recoil tuning per weapon helps on close maps. Status updates after BattlEye patches could be clearer, but it came back the next day.',
		short: 'No recoil tuning in Rainbow Six Siege Cheats helps on close maps.',
		slug: 'r6-siege-no-recoil-review-rankedgrind42',
		seoTitle: 'No Recoil Review by @rankedGrind42 — 4/5 | {brand}',
		seoDescription: '@rankedGrind42 rates {brand} no recoil 4/5 for ranked on Windows PC.',
		date: '2026-07-07',
		tag: 'Ranked',
	}),
	reviewMeta({
		handle: 'vanLifeR6',
		rating: 5,
		text: 'Stream-proof overlay in Rainbow Six Siege Cheats saved my ranked sessions. Seeing the third operator early in duos is huge. ESP plus wallhack look clean.',
		short: 'Stream-proof overlay in Rainbow Six Siege Cheats saved my ranked sessions.',
		slug: 'r6-siege-stream-proof-review-vanlifer6',
		seoTitle: 'Stream-Proof Review by @vanLifeR6 — 5/5 | {brand}',
		seoDescription: '@vanLifeR6 rates {brand} stream-proof overlay 5/5 on Windows PC.',
		date: '2026-07-28',
		tag: 'Stream-proof',
	}),
	reviewMeta({
		handle: 'patchDayMike',
		rating: 4,
		text: 'Most cheats go down on patch day. Rainbow Six Siege Cheats posted on the status page within a few hours and was back the next morning. My old tool left me waiting for days.',
		short: 'Rainbow Six Siege Cheats was back the next morning after a patch.',
		slug: 'r6-siege-battleye-update-review-patchdaymike',
		seoTitle: 'Status Review by @patchDayMike — 4/5 | {brand}',
		seoDescription: '@patchDayMike rates {brand} status updates 4/5 after {antiCheat} patches.',
		date: '2026-06-09',
		tag: 'BattlEye updates',
	}),
	reviewMeta({
		handle: 'snipezOnly_',
		rating: 5,
		text: 'DMR aimbot plus ESP in Rainbow Six Siege Cheats is excellent for long angles. Simple and strong.',
		short: 'DMR aimbot plus ESP in Rainbow Six Siege Cheats is excellent.',
		slug: 'r6-siege-sniper-aimbot-review-snipezonly',
		seoTitle: 'Sniper Aimbot by @snipezOnly_ — 5/5 | {brand}',
		seoDescription: '@snipezOnly_ rates {brand} sniper aimbot 5/5 with ESP on Windows PC.',
		date: '2026-08-01',
	}),
] as const satisfies readonly CustomerReview[];

export const customerReviewStats = {
	averageRating: 4.4,
	totalCount: customerReviews.length,
} as const;
