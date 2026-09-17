#!/usr/bin/env node
/**
 * Generates src/data/blog/posts.generated.ts — the /forum/ threads.
 *
 * Each entry is the OPENING POST of a closed support thread: a short, real
 * question or troubleshooting problem a Tarkov player would actually search.
 * The discussion (replies) lives in src/data/forum.ts, keyed by slug.
 *
 * Rules for this file:
 *  - Slugs are short, high-intent keywords (no filler, no stuffing).
 *  - Titles read like a forum question, not an SEO headline.
 *  - The opening post is 2-3 short first-person paragraphs.
 *  - Plain ASCII only (straight quotes, hyphens) so the build stays clean.
 *  - `sections` holds the opening-post body (one block, no visible H2).
 *
 * Run: node scripts/generate-blog-posts.mjs
 */
import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '..', 'src', 'data', 'blog', 'posts.generated.ts');
const LOCALES = ['en'];

/** @typedef {{ h2: string, paragraphs: string[] }} Section */
/** @typedef {{ id: string, imageKey: string, published: string, updated: string, category: string, featured?: boolean, slug: string, title: string, metaDescription: string, h1: string, intro: string, keywords: string[], imageAlt: string, op: string[] }} SourcePost */

/** @type {SourcePost[]} */
const threads = [
	{
		id: 'worth',
		imageKey: 'cheatsPackage',
		published: '2026-08-20',
		updated: '2026-09-14',
		category: 'Opinion',
		featured: true,
		slug: 'worth-it',
		title: 'Is it worth it? Honest take after 3 wipes',
		h1: 'Is it worth it?',
		keywords: ['tarkov cheats worth it', 'tarkov cheats review'],
		imageAlt: 'Tarkov raid loadout after buying cheats on Windows PC',
		intro: 'For anyone running this long term - is it actually worth it, or does it get old fast?',
		op: [
			'Been on the fence for a while. For anyone who has run this over a few wipes - is it worth it, or does it get old fast? I mostly do Customs and Interchange, not really an Arena player.',
			'What I care about is staying alive and saving time on loot, not rage clips. Before I grab a plan on the <a href="/pricing/">Pricing</a> page I just want an honest take from people who actually use it.',
		],
	},
	{
		id: 'compare',
		imageKey: 'cheatsPackage',
		published: '2026-08-21',
		updated: '2026-09-13',
		category: 'Comparison',
		featured: true,
		slug: 'vs-other-cheats',
		title: 'How does it compare to other providers?',
		h1: 'How does it compare?',
		keywords: ['tarkov cheat comparison', 'best tarkov cheats'],
		imageAlt: 'Comparing Tarkov cheat providers before buying',
		intro: 'Coming from a provider that kept going dark after patches - how does this one compare?',
		op: [
			'My last provider kept going dark after every BattlEye wave. How does this one compare - is it actually maintained, and is everything included or is there a Lite/Full split?',
			'I do not want to pay and then find out ESP or loot filters are behind a higher tier. What am I actually getting here vs the other shops? The <a href="/features/">Features</a> list looks like one package but I want to hear it from buyers.',
		],
	},
	{
		id: 'esp',
		imageKey: 'espWallhack',
		published: '2026-08-22',
		updated: '2026-09-15',
		category: 'ESP',
		slug: 'esp-not-showing',
		title: 'ESP not showing in raid',
		h1: 'ESP not showing in raid',
		keywords: ['tarkov esp not working', 'esp not showing'],
		imageAlt: 'Player ESP boxes drawn in a Tarkov raid',
		intro: 'Overlay draws but player ESP is not showing at all, even on a green status.',
		op: [
			'Loaded into a raid and the overlay draws fine, but player ESP is not showing at all. The <a href="/updates/">Updates</a> page is green so I do not think it is a patch. Fresh Windows 11 install.',
			'Menu opens, the toggles are on, but in raid I get nothing on screen. What should I check before I open a support ticket?',
		],
	},
	{
		id: 'buy',
		imageKey: 'cheatsPackage',
		published: '2026-08-23',
		updated: '2026-09-12',
		category: 'Store',
		slug: 'how-to-buy',
		title: 'How do I buy and get access?',
		h1: 'How do I get access?',
		keywords: ['buy tarkov cheats', 'how to get access'],
		imageAlt: 'Checkout flow to buy Tarkov cheats and get access',
		intro: 'First time buyer - how does checkout work and where do I get access after paying?',
		op: [
			'First time buyer here. How do I buy and get access - do I get a key instantly after checkout, and where do I download from?',
			'I also want to make sure I grab the raids license and not the wrong product. Can someone link the right page so I do not get access to something I did not mean to buy?',
		],
	},
	{
		id: 'price',
		imageKey: 'cheatsPackage',
		published: '2026-08-24',
		updated: '2026-09-11',
		category: 'Store',
		slug: 'how-much',
		title: 'How much does it cost?',
		h1: 'How much does it cost?',
		keywords: ['tarkov cheat price', 'tarkov cheats cost'],
		imageAlt: 'Tarkov cheat pricing plans on Windows PC',
		intro: 'How much does it cost right now, and is the feature set the same on monthly and lifetime?',
		op: [
			'Trying to work out the pricing. How much does it cost for monthly vs lifetime right now, and is the feature set the same on both plans?',
			'I play on and off depending on the wipe, so I am not sure lifetime is worth it yet. What do people actually run? Live numbers are on <a href="/pricing/">Pricing</a> but I want the real-world view.',
		],
	},
	{
		id: 'reqs',
		imageKey: 'playerEsp',
		published: '2026-08-25',
		updated: '2026-09-10',
		category: 'Product',
		slug: 'system-requirements',
		title: 'What are the system requirements?',
		h1: 'System requirements?',
		keywords: ['tarkov cheat requirements', 'windows 11'],
		imageAlt: 'Windows PC meeting Tarkov cheat system requirements',
		intro: 'What are the system requirements - is a single Windows 11 gaming PC enough?',
		op: [
			'Before I buy, what are the actual system requirements? I am on Windows 11, a normal gaming rig, single PC. Is that enough or do I need a second machine?',
			'I keep seeing Cloud DMA mentioned and I am not sure if that means extra hardware. Want to confirm the requirements before I pay.',
		],
	},
	{
		id: 'loot',
		imageKey: 'espWallhack',
		published: '2026-08-26',
		updated: '2026-09-15',
		category: 'ESP',
		slug: 'loot-filter',
		title: 'Loot ESP too cluttered - how to filter?',
		h1: 'Loot ESP too cluttered',
		keywords: ['tarkov loot esp', 'loot filter'],
		imageAlt: 'Filtered loot ESP on Interchange in Tarkov',
		intro: 'Loot ESP is way too cluttered - every bolt and bandage shows. How do I filter it down to the valuable stuff?',
		op: [
			'My loot ESP is on but it is too cluttered - every bolt, bandage and screw shows up. Interchange is a wall of text and I cannot find the good stuff.',
			'How do you filter this down so only the valuable loot shows? There must be a price floor setting somewhere.',
		],
	},
	{
		id: 'aimbot',
		imageKey: 'aimbotCombat',
		published: '2026-08-27',
		updated: '2026-09-14',
		category: 'Aimbot',
		slug: 'aimbot-settings',
		title: 'Best aimbot settings to look legit?',
		h1: 'Best aimbot settings',
		keywords: ['tarkov aimbot settings', 'legit aimbot'],
		imageAlt: 'Aimbot FOV and bone settings in Tarkov',
		intro: 'Aimbot feels robotic and the killcams look obvious - what are the best settings?',
		op: [
			'My aimbot feels robotic and the killcams look obvious. What are the best settings to keep it subtle - FOV, bone selection, visible check?',
			'I would rather win close fights and not get clipped than snap across the map. What values do you all run?',
		],
	},
	{
		id: 'wallhack',
		imageKey: 'espWallhack',
		published: '2026-08-28',
		updated: '2026-09-09',
		category: 'ESP',
		slug: 'wallhack',
		title: 'Wallhack / chams - what do you run?',
		h1: 'Wallhack and chams',
		keywords: ['tarkov wallhack', 'tarkov chams'],
		imageAlt: 'Wallhack chams on players through a wall in Tarkov',
		intro: 'For seeing players through walls - boxes, skeleton or chams? Chams feel distracting.',
		op: [
			'New to this. For a wallhack, do you run boxes, skeleton or chams? The chams look cool but feel distracting in an actual fight.',
			'Trying to find the cleanest wallhack and chams setup that still reads well on Factory close range.',
		],
	},
	{
		id: 'patch',
		imageKey: 'headerArt',
		published: '2026-08-29',
		updated: '2026-09-15',
		category: 'Status',
		slug: 'after-patch',
		title: 'Safe to play after a patch?',
		h1: 'Safe to play after a patch?',
		keywords: ['tarkov cheat after patch', 'undetected update'],
		imageAlt: 'Checking status after a Tarkov patch before loading in',
		intro: 'Game patched this morning - is it safe to play after a patch or do I wait for a rebuild?',
		op: [
			'Game patched this morning. Is it safe to play after a patch, or do I wait for a rebuild? I do not want to be the guy who queues on day one and gets flagged.',
			'Where is the right place to check status before I load in?',
		],
	},
	{
		id: 'arena',
		imageKey: 'playerEsp',
		published: '2026-08-30',
		updated: '2026-09-08',
		category: 'Product',
		slug: 'arena',
		title: 'Does it work in Arena?',
		h1: 'Does it work in Arena?',
		keywords: ['tarkov arena cheat', 'arena'],
		imageAlt: 'Tarkov Arena match on Windows PC',
		intro: 'Does it work in Arena, or is the raids license separate from Tarkov Arena?',
		op: [
			'About to buy but I want to confirm - does it work in Arena, or is Tarkov Arena a separate product?',
			'I do not want to pay and then find out my Arena matches are not covered by this key.',
		],
	},
	{
		id: 'dma',
		imageKey: 'cheatsPackage',
		published: '2026-08-31',
		updated: '2026-09-13',
		category: 'Setup',
		slug: 'cloud-dma',
		title: 'Cloud DMA setup help',
		h1: 'Cloud DMA setup',
		keywords: ['cloud dma', 'tarkov dma setup'],
		imageAlt: 'Cloud DMA setup steps for Tarkov on Windows PC',
		intro: 'What is Cloud DMA and how do I set it up? Do I need a second PC and a card?',
		op: [
			'I keep seeing Cloud DMA is required but I do not fully get what it is or how the setup works. Do I need a second PC and a DMA card, or is this different?',
			'On my first launch the menu was half greyed out and I panicked. I want to do the Cloud DMA setup properly this time - the <a href="/setup/">Setup</a> page has steps but I want a plain-English version.',
		],
	},
	{
		id: 'recoil',
		imageKey: 'aimbotCombat',
		published: '2026-09-01',
		updated: '2026-09-12',
		category: 'Aimbot',
		slug: 'no-recoil',
		title: 'No recoil settings?',
		h1: 'No recoil settings',
		keywords: ['tarkov no recoil', 'no sway'],
		imageAlt: 'No recoil spray pattern in Tarkov',
		intro: 'Do you run no recoil and no sway maxed all the time, or is that a giveaway?',
		op: [
			'Do you run no recoil and no sway maxed all the time, or is that a giveaway? Mine feels floaty on full auto.',
			'Looking for sane no recoil settings that do not look ridiculous in a clip.',
		],
	},
	{
		id: 'radar',
		imageKey: 'espWallhack',
		published: '2026-09-02',
		updated: '2026-09-10',
		category: 'ESP',
		slug: 'radar',
		title: 'Is the radar worth using?',
		h1: 'Is radar worth it?',
		keywords: ['tarkov radar', 'radar hack'],
		imageAlt: 'Radar map showing players in a Tarkov raid',
		intro: 'Is the radar worth it over normal on-screen ESP, or is on-screen ESP enough?',
		op: [
			'Is the radar worth using, or is normal ESP enough? I keep tunnel-visioning on the boxes and getting third-partied.',
			'Wondering if a minimap-style radar helps me read the whole map better instead of just what is in front of me.',
		],
	},
	{
		id: 'grey',
		imageKey: 'cheatsPackage',
		published: '2026-09-03',
		updated: '2026-09-15',
		category: 'Setup',
		slug: 'grey-menu',
		title: 'Menu greyed out on launch',
		h1: 'Menu greyed out',
		keywords: ['menu greyed out', 'cheat not loading'],
		imageAlt: 'Greyed out cheat menu on first launch',
		intro: 'Loader runs and the menu opens, but every toggle is greyed out - no ESP or aimbot.',
		op: [
			'Loader runs, the menu opens, but it is all greyed out and I get no ESP or aimbot. The overlay itself shows. Status is green.',
			'Windows says Core Isolation is on. What actually causes the menu to be greyed out and how do I fix it?',
		],
	},
	{
		id: 'delivery',
		imageKey: 'cheatsPackage',
		published: '2026-09-04',
		updated: '2026-09-14',
		category: 'Store',
		slug: 'not-delivered',
		title: 'Order not delivered after payment',
		h1: 'Order not delivered',
		keywords: ['order not delivered', 'key not received'],
		imageAlt: 'Checking order delivery after paying for Tarkov cheats',
		intro: 'Paid and the order is not delivered yet - card was charged. Is delivery instant?',
		op: [
			'Paid a few minutes ago and my order is not delivered - I do not see a key or download anywhere, but the card was charged. Is delivery instant or is there a delay?',
			'Getting a little nervous. What do I do if the order still does not show up?',
		],
	},
	{
		id: 'safe',
		imageKey: 'headerArt',
		published: '2026-09-05',
		updated: '2026-09-15',
		category: 'Status',
		slug: 'is-it-safe',
		title: 'Is it actually undetected?',
		h1: 'Is it undetected?',
		keywords: ['tarkov cheat undetected', 'is it safe'],
		imageAlt: 'Undetected status for Tarkov cheats on Windows PC',
		intro: 'Before I risk my account - is it undetected right now, and how safe is it long term?',
		op: [
			'Real question before I risk my account - is it undetected right now, and how safe is it long term with BattlEye?',
			'I know nothing is ever 100%. I just want to understand how you keep it safe and what I should avoid doing on my end.',
		],
	},
	{
		id: 'obs',
		imageKey: 'espWallhack',
		published: '2026-09-06',
		updated: '2026-09-11',
		category: 'ESP',
		slug: 'streamproof-obs',
		title: 'Is it streamproof on OBS?',
		h1: 'Streamproof on OBS?',
		keywords: ['streamproof', 'obs capture'],
		imageAlt: 'Streamproof overlay hidden from OBS capture',
		intro: 'Is the overlay streamproof on OBS, or will my ESP and menu show up in the recording?',
		op: [
			'I clip for a small Discord. Is the overlay streamproof on OBS, or will my ESP and menu show up in the recording?',
			'I do not want to expose myself in a highlight. Has anyone tested OBS game capture with it on?',
		],
	},
];

function translationBlock(src) {
	const sections = `			{
				h2: "",
				paragraphs: [
${src.op.map((p) => `					${JSON.stringify(p)},`).join('\n')}
				],
			}`;

	return `{
		slug: ${JSON.stringify(src.slug)},
		title: ${JSON.stringify(src.title)},
		metaDescription: ${JSON.stringify(src.metaDescription)},
		h1: ${JSON.stringify(src.h1)},
		intro: ${JSON.stringify(src.intro)},
		keywords: ${JSON.stringify(src.keywords)},
		imageAlt: ${JSON.stringify(src.imageAlt)},
		sections: [
${sections}
		],
	}`;
}

function buildPost(src) {
	const translations = LOCALES.map((code) => `\t\t${code}: ${translationBlock(src)},`).join('\n');
	return `	{
		id: ${JSON.stringify(src.id)},
		imageKey: ${JSON.stringify(src.imageKey)},
		published: ${JSON.stringify(src.published)},
		updated: ${JSON.stringify(src.updated)},
		category: ${JSON.stringify(src.category)},
		featured: ${src.featured ? 'true' : 'false'},
		translations: {
${translations}
		},
	}`;
}

/** URL slug from the H1, so the slug reads like the thread title. */
function slugify(h1) {
	return h1
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');
}

/** Meta description: benefit + what's included + platform, ~140-160 chars. Keyed by stable id. */
const metaById = {
	worth:
		'Is it worth it? Long-time buyers weigh in after several wipes on Windows PC - ESP, aimbot, and what actually changed their raids.',
	compare:
		'How does it compare to other Tarkov cheat providers? Buyers explain what made them switch - one package, patch rebuilds, no Lite/Full bait.',
	esp:
		'ESP not showing in raid on a green status? Players walk through the fixes - Cloud DMA, launch order, and overlay conflicts on Windows PC.',
	buy:
		'How to buy and get access on Windows PC - checkout, instant delivery, and where your key and download show up after payment.',
	price:
		'How much does it cost? Current monthly and lifetime pricing on Windows PC, and which plan makes sense if you play on and off.',
	reqs:
		'System requirements before you buy - Windows 10/11, Cloud DMA, and the BIOS settings you need on for the full menu to load.',
	loot:
		'Loot ESP too cluttered? Set a price floor and filter presets so Interchange and Labs stay readable on Windows PC raids.',
	aimbot:
		'Best aimbot settings so killcams look human - FOV, visible check, smart bone, and prediction values buyers actually run.',
	wallhack:
		'Wallhack and chams settings for raids - box vs skeleton vs chams, visible check, and keeping the screen readable in a fight.',
	patch:
		'Safe to play after a game or BattlEye patch? How rebuilds work, where to check status, and why you wait for green first.',
	arena:
		'Does the raids license work in Tarkov Arena? Short answer from staff plus why Arena needs a separate product on Windows PC.',
	dma:
		'Cloud DMA setup walkthrough - what it is, why it is required, and the HVCI and Secure Boot steps for a full menu on launch.',
	recoil:
		'No recoil and no sway settings - how much to run, when to dial it back, and saving a profile so you do not retune each session.',
	radar:
		'Is the radar worth using over on-screen ESP? Players compare the map radar, distance, and arrows for spotting third parties.',
	grey:
		'Menu greyed out with no ESP? The usual cause is HVCI or Secure Boot off in BIOS - here is the fix that works for most people.',
	delivery:
		'Paid but the order is not delivered yet? What to check first, how long delivery takes, and what Support needs to sort it fast.',
	safe:
		'Is it actually undetected and safe on Windows PC? What undetected really means and how BattlEye waves are handled between rebuilds.',
	obs:
		'Is the overlay streamproof on OBS and Discord? Buyers share capture tests so your ESP and menu stay off the recording.',
};

for (const t of threads) {
	// Slug is derived from the H1 so the URL reads like the question.
	t.slug = slugify(t.h1);
	t.metaDescription = metaById[t.id];
	if (!t.metaDescription) throw new Error(`Missing meta for ${t.id}`);
}

const file = `/* Auto-generated by scripts/generate-blog-posts.mjs - do not edit by hand. */
import type { BlogPostDefinition } from './types';

export const blogPosts: BlogPostDefinition[] = [
${threads.map(buildPost).join(',\n')}
];
`;

writeFileSync(OUT, file);
const words = threads.reduce((n, p) => n + [p.intro, ...p.op].join(' ').split(/\s+/).length, 0);
console.log(`Wrote ${threads.length} forum threads, ~${Math.round(words / threads.length)} words avg -> ${OUT}`);
