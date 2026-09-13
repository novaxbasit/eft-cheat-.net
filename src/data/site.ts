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
	const question = fillBrandTokens(item.question);
	const filledAnswer = fillBrandTokens(item.answer);
	const answer = filledAnswer.startsWith(question) ? filledAnswer : `${question} ${filledAnswer}`;
	return {
		...item,
		question,
		answer,
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
	{ label: fillBrandTokens('{game} hacks'), href: '/tarkov-cheats/' },
	{ label: fillBrandTokens('{primaryKeyword}'), href: '/tarkov-cheats/' },
	{ label: fillBrandTokens('{game} esp'), href: '/tarkov-esp/' },
	{ label: fillBrandTokens('{game} aimbot'), href: '/tarkov-aimbot/' },
	{ label: fillBrandTokens('{game} setup'), href: '/setup/' },
	{ label: fillBrandTokens('Undetected {primaryKeyword}'), href: '/tarkov-cheats/' },
	{ label: fillBrandTokens('{game} wallhack'), href: '/tarkov-radar-hack/' },
	{ label: fillBrandTokens('{game} radar hack'), href: '/tarkov-radar-hack/' },
] as const;

export const mainNav = [
	{ label: 'Home', href: '/' },
	{ label: 'Cheats', href: '/tarkov-cheats/' },
	{ label: 'Features', href: '/features/' },
	{ label: 'Pricing', href: '/pricing/' },
	{ label: 'Updates', href: '/updates/' },
	{ label: 'Blog', href: '/blog/' },
	{ label: 'FAQ', href: '/faq/' },
	{ label: 'Setup', href: '/setup/' },
	{ label: 'Support', href: '/support/' },
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
	{ label: fillBrandTokens('{game} hacks pillar'), href: '/tarkov-cheats/' },
	{ label: fillBrandTokens('Live {game} status'), href: '/updates/' },
	{ label: fillBrandTokens('{game} ESP overlays'), href: '/tarkov-esp/' },
	{ label: fillBrandTokens('{game} Aimbot controls'), href: '/tarkov-aimbot/' },
	{ label: fillBrandTokens('{game} radar hack'), href: '/tarkov-radar-hack/' },
	{ label: fillBrandTokens('Full {game} hack feature list'), href: '/features/' },
	{ label: 'Monthly & lifetime pricing', href: '/pricing/' },
	{ label: fillBrandTokens('{game} hack setup guide'), href: '/setup/' },
	{ label: fillBrandTokens('{game} hacks FAQ'), href: '/faq/' },
	{ label: fillBrandTokens('{brand} reviews'), href: '/reviews/' },
	{ label: fillBrandTokens('{game} cheat guides'), href: '/blog/' },
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
			'What is {brand}? {brand} is an undetected {primaryKeyword} package for Escape from Tarkov raids on Windows PC. It includes player ESP, loot ESP, aimbot, no recoil, and a streamproof overlay, with {antiCheat} maintenance. Arena needs a separate key.',
		slug: 'what-are-tarkov-cheats',
		seoTitle: 'What is {brand}? | FAQ',
		seoDescription:
			'{brand} explained: player ESP, loot ESP, and aimbot for {game} raids on Windows PC with {antiCheat} maintenance.',
	}),
	faq({
		question: 'Are {primaryKeyword} undetected in 2026?',
		answer:
			'Are {primaryKeyword} undetected in 2026? Yes — {primaryKeyword} stay undetected in 2026 only while we rebuild after {antiCheat} and game patches. Check the Updates page before you queue. No cheat can guarantee permanent undetected status — maintenance and responsible use matter.',
		slug: 'are-tarkov-cheats-undetected-in-2026',
		seoTitle: 'Are {brand} Undetected in 2026? | FAQ',
		seoDescription:
			'How {brand} stays maintained after {antiCheat} patches in 2026 — and why no cheat can promise permanent undetected status.',
	}),
	faq({
		question: 'Does this work in Tarkov raids? Is it the same as Arena?',
		answer:
			'Does this work in Tarkov raids? Is it the same as Arena? Yes — this works in Tarkov raids. No — it is not the same as Arena. This key is for main Tarkov raids only. Arena needs a separate key.',
		slug: 'pmc-raids-and-scav-runs',
		seoTitle: 'Tarkov Raids vs Arena | FAQ',
		seoDescription:
			'{brand} is for Tarkov raids only. Arena needs a separate key. Player ESP, loot ESP, and aimbot on Windows PC.',
	}),
	faq({
		question: 'What is included — player ESP, loot ESP, or aimbot?',
		answer:
			'What is included — player ESP, loot ESP, or aimbot? One {brand} license includes player ESP, loot ESP, aimbot, no recoil, streamproof overlay, and a config system. Cloud DMA is required for full functionality. See Features for the list.',
		slug: 'esp-wallhack-radar-or-aimbot',
		seoTitle: 'What Is Included: ESP, Loot, Aimbot | FAQ',
		seoDescription:
			'One {brand} license includes player ESP, loot ESP, and aimbot for Tarkov raids on Windows PC.',
	}),
	faq({
		question: 'How are licenses delivered?',
		answer:
			'How are licenses delivered? Licenses are delivered digitally after payment is confirmed. {brand} license details arrive through checkout. Timing can vary by payment method and order review. Keep your order confirmation ready if you contact support.',
		slug: 'how-are-licenses-delivered',
		seoTitle: 'How Are {brand} Licenses Delivered? | FAQ',
		seoDescription:
			'{brand} licenses are delivered digitally after payment confirmation. Timing varies by payment method and order review.',
	}),
	faq({
		question: 'Where do I check updates after an Escape from Tarkov or {antiCheat} patch?',
		answer:
			'Where do I check updates after an Escape from Tarkov or {antiCheat} patch? Check updates on the Updates page after an Escape from Tarkov or {antiCheat} patch. Maintenance notes post there when a patch affects the package. That is the fastest place to confirm whether a new {brand} build is live.',
		slug: 'where-to-check-updates',
		seoTitle: 'Where to Check {game} / {antiCheat} Updates | FAQ',
		seoDescription:
			'Check the Updates page after {game} or {antiCheat} patches to confirm the latest {brand} build status.',
	}),
	faq({
		question: 'How do I contact support?',
		answer:
			'How do I contact support? Contact support on the Support page or email {email}. Include your order details, package length, and a clear description of the setup issue so replies can be faster.',
		slug: 'how-to-contact-support',
		seoTitle: 'How to Contact {brand} Support | FAQ',
		seoDescription:
			'Contact {brand} support via the Support page or {email} with your order details for faster help.',
	}),
] as const;

/** Unique FAQ answers that deserve their own URL. Hub duplicates redirect to /faq/. */
export const uniqueFaqs: readonly FaqItem[] = [
	faq({
		question: 'What is an {game} wallhack?',
		answer:
			'What is an {game} wallhack? An {game} wallhack here means chams and ESP that show PMCs, Scavs, and loot through walls. {brand} includes box, skeleton, radar, and a streamproof overlay.',
		slug: 'what-is-a-tarkov-wallhack',
		seoTitle: 'What Is a {game} Wallhack? | FAQ',
		seoDescription:
			'A {game} wallhack is ESP that reveals PMCs, Scavs, and loot through walls — with distance, extracts, and category toggles.',
	}),
	faq({
		question: 'Does {brand} include a streamproof overlay?',
		answer:
			'Does {brand} include a streamproof overlay? Yes — ESP and menus stay off OBS and most capture tools.',
		slug: 'does-tarkov-cheats-include-stream-proof',
		seoTitle: 'Does {brand} Include Streamproof Overlay? | FAQ',
		seoDescription:
			'Yes — {brand} includes a streamproof overlay so ESP and menus stay off OBS on Windows PC.',
	}),
	faq({
		question: 'How does {antiCheat} affect {primaryKeyword}?',
		answer:
			'How does {antiCheat} affect {primaryKeyword}? {antiCheat} can affect {primaryKeyword} because it monitors {game} on Windows PC. {brand} posts maintenance notes after patches that may need a rebuild. Check Updates before you raid.',
		slug: 'battleye-anti-cheat-and-tarkov-cheats',
		seoTitle: 'How {antiCheat} Affects {brand} | FAQ',
		seoDescription:
			'{antiCheat} may require {brand} rebuilds after patches. Updates notes explain the update workflow.',
	}),
	faq({
		question: 'Is Cloud DMA required?',
		answer:
			'Is Cloud DMA required? Cloud DMA is required for full functionality. Windows 10 / 11 with HVCI, Core Isolation, TPM, and Secure Boot on.',
		slug: 'is-cloud-dma-required',
		seoTitle: 'Is Cloud DMA Required? | FAQ',
		seoDescription:
			'Cloud DMA is required for full {brand} functionality on Windows 10 / 11 with HVCI, TPM, and Secure Boot.',
	}),
	faq({
		question: 'Can I buy undetected {game} cheats for Windows PC?',
		answer:
			'Can I buy undetected {game} cheats for Windows PC? Yes — you can buy undetected {game} cheats for Windows PC. {brand} sells monthly ($35) and lifetime ($150) licenses with player ESP, loot ESP, and aimbot. This key is for raids, not Arena.',
		slug: 'buy-undetected-tarkov-cheats-windows-pc',
		seoTitle: 'Buy Undetected {game} Cheats for Windows PC | FAQ',
		seoDescription:
			'Buy monthly ($35) or lifetime ($150) {brand} licenses for Windows PC — player ESP, loot ESP, and aimbot. Compare pricing before checkout.',
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
		date: '2026-07-24',
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
		date: '2026-07-19',
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
		date: '2026-06-27',
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
		date: '2026-07-11',
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
		date: '2026-06-15',
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
		date: '2026-08-01',
	}),
	reviewMeta({
		handle: 'raidGrind42',
		rating: 4,
		text: 'I have used Escape from Tarkov Cheats since last wipe. No recoil tuning per weapon helps in dorms. Status updates after BattlEye patches could be clearer, but it came back the next day.',
		short: 'No recoil tuning in Escape from Tarkov Cheats helps in dorms.',
		slug: 'tarkov-no-recoil-review-raidgrind42',
		seoTitle: 'No Recoil Review by @raidGrind42 — 4/5 | {brand}',
		seoDescription: '@raidGrind42 rates {brand} no recoil 4/5 for raids on Windows PC.',
		date: '2026-07-07',
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
		date: '2026-07-28',
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
		date: '2026-06-09',
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
		date: '2026-08-01',
	}),
] as const satisfies readonly CustomerReview[];

export const customerReviewStats = {
	averageRating: 4.4,
	totalCount: customerReviews.length,
} as const;
