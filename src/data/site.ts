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
	statusNote: fillBrandTokens('Last checked 2026-09-15. {brand} is live for {game} raids on Windows PC — not a forever-online claim.'),
	delivery: 'Instant digital delivery',
	platform: 'Windows 10 & 11',
	antiCheat: fillBrandTokens('{antiCheat} maintenance supported'),
} as const;

export const seoLandingPages = [
	{ label: fillBrandTokens('{game} hacks'), href: '/' },
	{ label: fillBrandTokens('{primaryKeyword}'), href: '/' },
	{ label: fillBrandTokens('{game} esp'), href: '/tarkov-esp/' },
	{ label: fillBrandTokens('{game} aimbot'), href: '/tarkov-aimbot/' },
	{ label: fillBrandTokens('{game} setup'), href: '/setup/' },
	{ label: fillBrandTokens('Undetected {primaryKeyword}'), href: '/' },
	{ label: fillBrandTokens('{game} wallhack'), href: '/tarkov-esp/' },
	{ label: fillBrandTokens('{game} radar hack'), href: '/tarkov-radar-hack/' },
] as const;

export const mainNav = [
	{ label: 'Home', href: '/' },
	{ label: 'Cheats', href: '/' },
	{ label: 'Features', href: '/features/' },
	{ label: 'Pricing', href: '/pricing/' },
	{ label: 'Updates', href: '/updates/' },
	{ label: 'Forum', href: '/forum/' },
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
	{ label: fillBrandTokens('{game} cheats'), href: '/' },
	{ label: fillBrandTokens('Live {game} status'), href: '/updates/' },
	{ label: fillBrandTokens('{game} ESP overlays'), href: '/tarkov-esp/' },
	{ label: fillBrandTokens('{game} Aimbot controls'), href: '/tarkov-aimbot/' },
	{ label: fillBrandTokens('{game} radar hack'), href: '/tarkov-radar-hack/' },
	{ label: fillBrandTokens('Full {game} hack feature list'), href: '/features/' },
	{ label: 'Monthly & lifetime pricing', href: '/pricing/' },
	{ label: fillBrandTokens('{game} hack setup guide'), href: '/setup/' },
	{ label: fillBrandTokens('{game} hacks FAQ'), href: '/faq/' },
	{ label: fillBrandTokens('{brand} reviews'), href: '/reviews/' },
	{ label: fillBrandTokens('{game} cheat guides'), href: '/forum/' },
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
			'{brand} is one license for Escape from Tarkov raids on Windows PC. It includes player ESP, loot ESP, aimbot, no recoil, and a streamproof overlay, with {antiCheat} maintenance after patches. This key is for raids only. Arena needs a separate key. Cloud DMA is required for full functionality.',
		slug: 'what-is-escape-from-tarkov-cheats',
		seoTitle: 'What is {brand}? | FAQ',
		seoDescription:
			'{brand} explained: player ESP, loot ESP, and aimbot for {game} raids on Windows PC with {antiCheat} maintenance.',
	}),
	faq({
		question: 'Are {primaryKeyword} undetected in 2026?',
		answer:
			'They stay maintained while we rebuild after {antiCheat} and game patches. Check the Updates page before you queue. No cheat can guarantee permanent undetected status — maintenance and responsible use matter.',
		slug: 'are-tarkov-cheats-undetected-in-2026',
		seoTitle: 'Are {brand} Undetected in 2026? | FAQ',
		seoDescription:
			'How {brand} stays maintained after {antiCheat} patches in 2026 — and why no cheat can promise permanent undetected status.',
	}),
	faq({
		question: 'Does this work in Tarkov raids? Is it the same as Arena?',
		answer:
			'Yes — this key works in Tarkov raids. No — it is not the same as Arena. Buy this product for PMC and Scav raids on Windows PC. Arena needs a separate key.',
		slug: 'tarkov-raids-vs-arena',
		seoTitle: 'Tarkov Raids vs Arena | FAQ',
		seoDescription:
			'{brand} is for Tarkov raids only. Arena needs a separate key. Player ESP, loot ESP, and aimbot on Windows PC.',
	}),
	faq({
		question: 'What is included — player ESP, loot ESP, or aimbot?',
		answer:
			'One {brand} license includes player ESP, loot ESP, aimbot, no recoil, a streamproof overlay, and a config system. Cloud DMA is required for full functionality. See Features for the list, then buy on the homepage.',
		slug: 'what-is-included',
		seoTitle: 'What Is Included: ESP, Loot, Aimbot | FAQ',
		seoDescription:
			'One {brand} license includes player ESP, loot ESP, and aimbot for Tarkov raids on Windows PC.',
	}),
	faq({
		question: 'How are licenses delivered?',
		answer:
			'Licenses are delivered digitally after payment is confirmed. {brand} license details arrive through checkout. Timing can vary by payment method and order review. Keep your order confirmation ready if you contact support.',
		slug: 'how-are-licenses-delivered',
		seoTitle: 'How Are {brand} Licenses Delivered? | FAQ',
		seoDescription:
			'{brand} licenses are delivered digitally after payment confirmation. Timing varies by payment method and order review.',
	}),
	faq({
		question: 'Where do I check updates after an Escape from Tarkov or {antiCheat} patch?',
		answer:
			'Check the Updates page after an Escape from Tarkov or {antiCheat} patch. Maintenance notes post there when a patch affects the package. That is the fastest place to confirm whether a new {brand} build is live.',
		slug: 'where-to-check-updates',
		seoTitle: 'Where to Check {game} / {antiCheat} Updates | FAQ',
		seoDescription:
			'Check the Updates page after {game} or {antiCheat} patches to confirm the latest {brand} build status.',
	}),
	faq({
		question: 'How do I contact support?',
		answer:
			'Open the Support page or email support@eftcheat.net. Include your order details, plan length, and a short note about the setup issue so replies can be faster.',
		slug: 'how-to-contact-support',
		seoTitle: 'How to Contact {brand} Support | FAQ',
		seoDescription:
			'Contact {brand} support via the Support page or support@eftcheat.net with your order details for faster help.',
	}),
] as const;

/** Extra FAQ answers shown on the /faq/ hub (permalinks 301 here). */
export const uniqueFaqs: readonly FaqItem[] = [
	faq({
		question: 'What is an {game} wallhack?',
		answer:
			'On this site a wallhack means through-wall visibility in Tarkov raids — not a separate product. {brand} uses player ESP boxes, skeletons, and chams so you can read PMCs, Scavs, and bosses through walls, then pair that with distance, health, and extract marks. Loot ESP is a different toggle: it names items and containers, it does not replace player outlines. Radar is also separate: it is a 2D map cue, not a wall overlay. Buyers who only want “see people through walls” should start on the ESP page, then come back to Features if they also want loot filters. Streamproof overlay keeps those draws off OBS when you clip. This key is for raids. Arena needs a separate key. Cloud DMA is required for full functionality. Check Updates after a {antiCheat} patch before you treat last night’s settings as still safe.',
		slug: 'what-is-a-tarkov-wallhack',
		seoTitle: 'What Is a {game} Wallhack? | FAQ',
		seoDescription:
			'A {game} wallhack here is ESP that reveals PMCs, Scavs, and loot through walls — with distance and toggles.',
	}),
	faq({
		question: 'Does {brand} include a streamproof overlay?',
		answer:
			'Yes. ESP and menus stay off OBS and most capture tools when streamproof is on. Test a short local recording before you go live. Streamproof does not hide a rage aimbot in a face-cam VOD if the mouse path looks wrong — keep FOV tight if you clip. It also does not replace {antiCheat} maintenance. If a patch lands, read Updates before you queue. The overlay is included on monthly ($35 / 31 days) and lifetime ($150). Same license as player ESP, loot ESP, and aimbot. Raids only. Cloud DMA is required for full functionality. Windows 10 / 11 with HVCI, Core Isolation, TPM, and Secure Boot on.',
		slug: 'does-tarkov-cheats-include-stream-proof',
		seoTitle: 'Does {brand} Include Streamproof Overlay? | FAQ',
		seoDescription:
			'Yes — {brand} includes a streamproof overlay so ESP and menus stay off OBS on Windows PC.',
	}),
	faq({
		question: 'How does {antiCheat} affect {primaryKeyword}?',
		answer:
			'{antiCheat} monitors {game} on Windows PC. After a game or {antiCheat} patch we may need a rebuild. Status is posted on Updates with a last-checked date — not a forever-undetected promise. If Updates says wait, wait. Playing an old build after a big patch is how people burn keys. Monthly and lifetime both get rebuilds while the license is active. Lifetime does not skip patch days. When the note is green again, launch through the current loader. If something fails, email support@eftcheat.net with your order ID and Windows version. Cloud DMA is required for full functionality, including after rebuilds.',
		slug: 'battleye-anti-cheat-and-tarkov-cheats',
		seoTitle: 'How {antiCheat} Affects {brand} | FAQ',
		seoDescription:
			'{antiCheat} may require {brand} rebuilds after patches. Updates notes explain the update workflow.',
	}),
	faq({
		question: 'Is Cloud DMA required?',
		answer:
			'Yes. Cloud DMA is required for full functionality. Plan for Windows 10 / 11 with HVCI, Core Isolation, TPM, and Secure Boot on. If those are off, the menu can be grey or empty even with a valid key. Setup walks through the order: buy, read the delivery email, confirm firmware and Windows match, then launch. Do not turn security features off to “make it work.” That is the wrong direction for this product. Arena is still a separate key. After a {antiCheat} patch, confirm Updates before you raid. Support replies faster if you include the order ID and what you already tried.',
		slug: 'is-cloud-dma-required',
		seoTitle: 'Is Cloud DMA Required? | FAQ',
		seoDescription:
			'Cloud DMA is required for full {brand} functionality on Windows 10 / 11 with HVCI, TPM, and Secure Boot.',
	}),
	faq({
		question: 'Can I buy undetected {game} cheats for Windows PC?',
		answer:
			'You can buy {brand} for Windows PC raids: monthly $35 for 31 days or lifetime $150. Both plans include the same player ESP, loot ESP, and aimbot. Checkout currently runs through zadeyo.com. Delivery is digital after payment. This is not an Arena key. Undetected only means we maintain the build after {antiCheat} patches — check Updates before you queue. Cloud DMA is required for full functionality. Read Setup after you pay. Email support@eftcheat.net with the order ID if delivery or launch fails.',
		slug: 'buy-undetected-tarkov-cheats-windows-pc',
		seoTitle: 'Buy Undetected {game} Cheats for Windows PC | FAQ',
		seoDescription:
			'Buy monthly ($35) or lifetime ($150) {brand} licenses for Windows PC — player ESP, loot ESP, and aimbot.',
	}),
] as const;

/** All questions shown on /faq/. Child URLs exist only for uniqueFaqs. */
export const hubFaqs: readonly FaqItem[] = [...homeFaqs, ...uniqueFaqs];
export const uniqueFaqSlugs = new Set(uniqueFaqs.map((item) => item.slug));
export const hubOnlyFaqSlugs = new Set(homeFaqs.map((item) => item.slug));
/** Child FAQ routes — unique answers only. */
export const seoFaqs = uniqueFaqs;

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
		handle: 'xKrypt0_EFT',
		rating: 5,
		text: 'Aimbot in Escape from Tarkov Cheats feels smooth in PMC raids. The menu took a few minutes to learn. After that, gunfights felt easier.',
		short: 'Aimbot in Escape from Tarkov Cheats feels smooth in PMC raids.',
		slug: 'tarkov-aimbot-review-xkrypt0',
		seoTitle: 'Aimbot Review by @xKrypt0_EFT — 5/5 | {brand}',
		seoDescription: '@xKrypt0_EFT rates {brand} aimbot 5/5 for raids on Windows PC.',
		date: '2026-08-24',
		tag: 'Aimbot',
	}),
	reviewMeta({
		handle: 'buildsR4K',
		rating: 4,
		text: 'ESP boxes help on Scav runs. You can see who is holding a hallway before you push. Still worth the price for Escape from Tarkov Cheats.',
		short: 'ESP boxes help on Scav runs. Still worth the price for Escape from Tarkov Cheats.',
		slug: 'tarkov-esp-raid-review-buildsr4k',
		seoTitle: 'ESP Review by @buildsR4K — 4/5 | {brand}',
		seoDescription: '@buildsR4K rates {brand} ESP 4/5 for raids on Windows PC.',
		date: '2026-08-22',
		tag: 'Raids',
	}),
	reviewMeta({
		handle: 'dma_wizard',
		rating: 5,
		text: 'I moved to Escape from Tarkov Cheats this wipe. Setup was simple. It stayed up after the last BattlEye update when my old cheat failed. Lifetime was a good buy.',
		short: 'Escape from Tarkov Cheats stayed up after the last BattlEye update. Lifetime was a good buy.',
		slug: 'tarkov-cloud-dma-review-dma-wizard',
		seoTitle: 'Update Review by @dma_wizard — 5/5 | {brand}',
		seoDescription: '@dma_wizard rates {brand} 5/5 after a {antiCheat} update on Windows PC.',
		date: '2026-08-28',
		tag: 'Updates',
	}),
	reviewMeta({
		handle: 'ctrl_player99',
		rating: 4,
		text: 'Aimbot FOV in Escape from Tarkov Cheats is easy to tune on PC. I changed FOV a little and it felt natural. Menu is clear enough.',
		short: 'Aimbot FOV in Escape from Tarkov Cheats is easy to tune on PC.',
		slug: 'tarkov-aimbot-review-ctrl-player99',
		seoTitle: 'Aimbot Review by @ctrl_player99 — 4/5 | {brand}',
		seoDescription: '@ctrl_player99 rates {brand} aimbot 4/5 on Windows PC.',
		date: '2026-08-26',
		tag: 'Aimbot',
	}),
	reviewMeta({
		handle: 'stormChaser_07',
		rating: 3,
		text: 'Escape from Tarkov Cheats works well once it is running. First launch was slow because Windows Defender flagged the loader. Support replied in about two hours. ESP on Customs is solid.',
		short: 'ESP on Customs is solid. Support helped after a slow first launch.',
		slug: 'tarkov-cheat-setup-review-stormchaser07',
		seoTitle: 'Setup Review by @stormChaser_07 — 3/5 | {brand}',
		seoDescription: '@stormChaser_07 rates {brand} setup 3/5. ESP on Customs is solid after support help.',
		date: '2026-08-21',
		tag: 'Setup',
	}),
	reviewMeta({
		handle: 'lootGoblinx',
		rating: 5,
		text: 'Loot container ESP in Escape from Tarkov Cheats pays for the monthly plan. Key highlights and extract markers make early raids faster.',
		short: 'Loot container ESP in Escape from Tarkov Cheats pays for the monthly plan.',
		slug: 'tarkov-loot-esp-review-lootgoblinx',
		seoTitle: 'Loot ESP Review by @lootGoblinx — 5/5 | {brand}',
		seoDescription: '@lootGoblinx rates {brand} loot ESP 5/5 for raids on Windows PC.',
		date: '2026-09-01',
	}),
	reviewMeta({
		handle: 'raidGrind42',
		rating: 4,
		text: 'I have used Escape from Tarkov Cheats since last wipe. No recoil tuning per weapon helps in dorms. Status updates after BattlEye patches could be clearer, but it came back the next day.',
		short: 'No recoil tuning in Escape from Tarkov Cheats helps in dorms.',
		slug: 'tarkov-no-recoil-review-raidgrind42',
		seoTitle: 'No Recoil Review by @raidGrind42 — 4/5 | {brand}',
		seoDescription: '@raidGrind42 rates {brand} no recoil 4/5 for raids on Windows PC.',
		date: '2026-08-25',
		tag: 'Raids',
	}),
	reviewMeta({
		handle: 'vanLifeEFT',
		rating: 5,
		text: 'Stream-proof overlay in Escape from Tarkov Cheats saved my raid sessions. Seeing the third PMC early in duos is huge. ESP plus wallhack look clean.',
		short: 'Stream-proof overlay in Escape from Tarkov Cheats saved my raid sessions.',
		slug: 'tarkov-stream-proof-review-vanlifeeft',
		seoTitle: 'Stream-Proof Review by @vanLifeEFT — 5/5 | {brand}',
		seoDescription: '@vanLifeEFT rates {brand} stream-proof overlay 5/5 on Windows PC.',
		date: '2026-08-29',
		tag: 'Stream-proof',
	}),
	reviewMeta({
		handle: 'patchDayMike',
		rating: 4,
		text: 'Most cheats go down on patch day. Escape from Tarkov Cheats posted on the status page within a few hours and was back the next morning. My old tool left me waiting for days.',
		short: 'Escape from Tarkov Cheats was back the next morning after a patch.',
		slug: 'tarkov-battleye-update-review-patchdaymike',
		seoTitle: 'Status Review by @patchDayMike — 4/5 | {brand}',
		seoDescription: '@patchDayMike rates {brand} status updates 4/5 after {antiCheat} patches.',
		date: '2026-08-23',
		tag: 'BattlEye updates',
	}),
	reviewMeta({
		handle: 'snipezOnly_',
		rating: 5,
		text: 'DMR aimbot plus ESP in Escape from Tarkov Cheats is excellent for long angles. Simple and strong.',
		short: 'DMR aimbot plus ESP in Escape from Tarkov Cheats is excellent.',
		slug: 'tarkov-sniper-aimbot-review-snipezonly',
		seoTitle: 'Sniper Aimbot by @snipezOnly_ — 5/5 | {brand}',
		seoDescription: '@snipezOnly_ rates {brand} sniper aimbot 5/5 with ESP on Windows PC.',
		date: '2026-09-01',
	}),
] as const satisfies readonly CustomerReview[];

export const customerReviewStats = {
	averageRating: 4.4,
	totalCount: customerReviews.length,
} as const;
