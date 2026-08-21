#!/usr/bin/env node
/**
 * Generates src/data/blog/posts.generated.ts — NLP-first Tarkov Intel posts.
 * Natural language, entity-rich copy for Google semantic matching.
 * Run: node scripts/generate-blog-posts.mjs
 */
import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '..', 'src', 'data', 'blog', 'posts.generated.ts');

const LOCALES = ['en'];

const EXT = {
	tarkov:
		'<a href="https://www.escapefromtarkov.com/" target="_blank" rel="noopener noreferrer">Escape from Tarkov</a>',
	status:
		'<a href="https://www.escapefromtarkov.com/support/" target="_blank" rel="noopener noreferrer">Escape from Tarkov Support</a>',
	battleye:
		'<a href="https://www.battleye.com/" target="_blank" rel="noopener noreferrer">BattlEye</a>',
};

/** @typedef {{ h2: string, paragraphs: string[] }} Section */
/** @typedef {{ id: string, imageKey: string, published: string, updated: string, category: string, featured?: boolean, slug: string, title: string, metaDescription: string, h1: string, intro: string, keywords: string[], imageAlt: string, sections: Section[] }} SourcePost */

/** @type {SourcePost[]} */
const sources = [
	{
		id: 'patch-notes-breakdown',
		imageKey: 'squadFight',
		published: '2026-07-29',
		updated: '2026-08-13',
		category: 'Patch Notes',
		featured: false,
		slug: 'tarkov-patch-notes-guide',
		title: 'How to Read Escape from Tarkov Patch Notes',
		metaDescription:
			'Learn how Escape from Tarkov patch notes change PMC loadouts, ammo economy, and maps. What to do after BattlEye and wipe updates in 2026.',
		h1: 'How to Read Escape from Tarkov Patch Notes Without Guessing',
		intro:
			'When Battlestate Games drops a patch, most players skim the headline and queue anyway. That is how you walk into Customs with the wrong ammo and a gun that just lost its armor pen. Here is a calmer way to read Escape from Tarkov patch notes so your next raid still makes sense.',
		keywords: [
			'escape from tarkov patch notes',
			'tarkov wipe update',
			'battleye patch',
			'pmc loadout',
			'tarkov intel',
		],
		imageAlt: 'Player reviewing Escape from Tarkov patch notes before a PMC raid',
		sections: [
			{
				h2: 'What actually matters in a Tarkov patch?',
				paragraphs: [
					`Official notes live on ${EXT.tarkov}. Treat that page as the source of truth — Discord rumors and streamer hot takes come second. Ask three plain questions for every bullet: Does this change how I kill armored PMCs? Does this change what loot is worth looting? Does this change which extract or map I should run tonight?`,
					'Ammo tables, armor classes, boss spawn rates, and trader unlocks move the real economy. A small recoil tweak on an M4 looks boring in a video title, but it quietly reshapes mid-range fights on Woods and Interchange. Cosmetic lines and UI polish almost never decide whether you survive dorms.',
					`If you also run third-party tools, separate game balance from anti-cheat maintenance. After a ${EXT.battleye} or client update, check our <a href="/updates/">Tarkov Cheats status page</a> before you blame your own aim.`,
				],
			},
			{
				h2: 'Buffs, nerfs, and removed items — a simple framework',
				paragraphs: [
					'When an item is removed from raid loot pools, delete it from your mental shopping list the same day. Heavy nerfs demote a weapon from “default kit” to “situational.” Light nerfs are fine if you already shoot cleaner than most lobbies. Buffs deserve a short test block — ten focused raids — before you rebuild your entire stash around them.',
					'Armor and ammunition changes usually matter more than a single gun’s recoil number. If a popular round loses penetration against class-five plates, your Customs push into three-stacks suddenly needs a different mag. Pair this reading habit with our <a href="/blog/tarkov-weapon-tier-list/">Tarkov weapon tier list</a> so you are not chasing streamer kits that ignore your budget.',
				],
			},
			{
				h2: 'How patches reshuffle loadouts and map plans',
				paragraphs: [
					'When mid-range rifles feel strong, prioritize optics and ammo that win 40–70 meter peeks. When healing items get tighter, play more conservatively near extracts and avoid ego third-parties. When a map POI shifts — new locked rooms, moved spawns, boss path changes — rewrite your first three minutes on that map before you farm it for quests.',
					'Keep cosmetic shop chatter out of patch-day focus. Skin talk is fun; time-to-kill and extract camping patterns are what get you killed. For aggressive Scav timing after a meta shift, see our <a href="/blog/tarkov-scav-run-aggressive-strategies/">Scav run strategies</a>.',
					`On big mornings, confirm ${EXT.status} looks healthy before you assume your client is broken. Then run a short checklist: note removed items, update your stash “buy list,” play five intentional raids, and only then lock a new main kit.`,
				],
			},
		],
	},
	{
		id: 'tarkov-skin-leaks',
		imageKey: 'headerArt',
		published: '2026-07-27',
		updated: '2026-08-13',
		category: 'Cosmetics',
		featured: false,
		slug: 'tarkov-skin-leaks-guide',
		title: 'Tarkov Cosmetics & Skin Leaks: What Is Worth Buying',
		metaDescription:
			'Sensible advice on Escape from Tarkov cosmetics and skin leaks — what to buy on the Flea Market, what to skip, and how looks affect raid readability.',
		h1: 'Tarkov Cosmetics and Skin Leaks: Buy Smart, Not Impulsive',
		intro:
			'Leaks make every wipe feel like a fashion drop. Before you dump roubles into another loud outfit, decide whether the skin helps you play Escape from Tarkov — or just looks cool in a screenshot.',
		keywords: [
			'tarkov skins',
			'tarkov cosmetics',
			'flea market skins',
			'escape from tarkov apparel',
			'tarkov intel',
		],
		imageAlt: 'Escape from Tarkov character cosmetics and gear appearance options',
		sections: [
			{
				h2: 'Why most impulse cosmetic buys feel bad after a week',
				paragraphs: [
					`Shop rotations and official apparel come from ${EXT.tarkov}. Leaks are entertainment, not a shopping list. Many players spend hard-earned flea money the night before a wipe, then realize they still need meds, ammo, and a backup kit.`,
					'Controversial but useful: most cosmetics do not raise your survival rate. Some loud patterns even make you easier to spot in bushes on Woods or in dark Interchange hallways. Pros often prefer quieter silhouettes so enemy outlines stay readable in chaotic peeks.',
				],
			},
			{
				h2: 'A simple worth-it checklist for Tarkov cosmetics',
				paragraphs: [
					'Buy if you will still wear it in ninety days and it stays readable in night raids. Pause if it overlaps three outfits you already own. Skip FOMO bundles packed with fillers you will never equip. Always keep a rouble floor for ammo and healing before fashion.',
					'Do the math on bundles. Paying extra for two fillers you hate is worse than waiting for a single piece on the Flea Market. If a leak only hypes one jacket, wait for confirmation instead of panic-buying a full set.',
				],
			},
			{
				h2: 'How to use leaks without getting played',
				paragraphs: [
					'Treat late-wipe leak waves as theme previews, not release dates. Decide a budget before something hits the store, not during the five-minute panic. A quiet daily habit works: open the shop for one minute, check your wishlist, then leave.',
					'For competitive readability tips that actually affect fights, pair this with our <a href="/blog/tarkov-pro-settings-guide/">pro settings guide</a>. Looking clean matters less than seeing the other PMC first.',
				],
			},
		],
	},
	{
		id: 'tarkov-weapon-tier-list',
		imageKey: 'aimbotCombat',
		published: '2026-07-25',
		updated: '2026-08-13',
		category: 'Weapons',
		featured: true,
		slug: 'tarkov-weapon-tier-list',
		title: 'Tarkov Weapon Tier List: Best Guns for Raids',
		metaDescription:
			'A practical Escape from Tarkov weapon tier list for PMC and Scav raids — ARs, SMGs, bolt-actions, ammo, and when each gun actually wins fights.',
		h1: 'Tarkov Weapon Tier List: What Wins Raids in 2026',
		intro:
			'Creator tier lists love flashy guns. Escape from Tarkov rewards expected value: armor penetration, recoil you can control, and a kit you can rebuild after you die. Here is how to rank weapons for real raids — not highlight reels.',
		keywords: [
			'tarkov weapon tier list',
			'best tarkov guns',
			'tarkov meta weapons',
			'm4a1 tarkov',
			'tarkov intel',
		],
		imageAlt: 'Escape from Tarkov weapons laid out for a PMC loadout comparison',
		sections: [
			{
				h2: 'How should you define S-tier in Tarkov?',
				paragraphs: [
					'S-tier means the best expected value across a hundred PMC fights on maps like Customs, Woods, and Interchange — not the gun that looks strongest in a controlled offline range. Mid-range rifles win many of the fights that actually decide raids: forty to seventy meters through doorways, parking lots, and tree lines.',
					'Shotguns still own tight interiors. Bolt-actions still punish long peeks on Shoreline and Lighthouse. Everything between those extremes is usually assault-rifle country, which is why a well-built M4A1 or similar 5.56 platform stays relevant wipe after wipe when ammo and mods are available.',
					`Always re-check live values after patches on ${EXT.tarkov}. The hierarchy logic stays useful even when numbers nudge.`,
				],
			},
			{
				h2: 'Ammo, TTK, and peek discipline matter more than brand names',
				paragraphs: [
					'Time-to-kill in Tarkov is really time-to-pen. A soft gun with the right rounds beats a loud meta rifle feeding trash ammo into class-five armor. Learn which rounds you can afford this wipe, then pick a platform that controls recoil at your skill level.',
					'First-shot accuracy decides many peeks. A clean cadence — peek, fire a short burst, jiggle back, re-peek — beats standing still for ego sprays. Pair this mid-range plan with loot discipline from our <a href="/blog/tarkov-loot-routes-guide/">loot routes guide</a> so you actually spawn with the ammo you planned to use.',
				],
			},
			{
				h2: 'Loadout pairings and common mistakes',
				paragraphs: [
					'A durable kit is usually a reliable mid rifle, a close-range option for dorms or Factory, enough meds, and an armor class you can replace after deaths. In Scav runs, that same spine supports the aggression patterns in our <a href="/blog/tarkov-scav-run-aggressive-strategies/">Scav strategies article</a>.',
					'Common mistakes: full-spraying from eighty meters, re-peeking the same pixel, swapping to an SMG at forty meters out of habit, and never practicing controlled bursts offline. If you also use aim-assist tooling, lock sensitivity and fundamentals first, then review <a href="/tarkov-aimbot/">Tarkov aimbot settings</a>.',
				],
			},
		],
	},
	{
		id: 'tarkov-scav-run-meta',
		imageKey: 'battleRoyaleCombat',
		published: '2026-07-22',
		updated: '2026-08-13',
		category: 'Scav Runs',
		featured: true,
		slug: 'tarkov-scav-run-aggressive-strategies',
		title: 'Tarkov Scav Run Strategies That Actually Print Loot',
		metaDescription:
			'Five aggressive but smart Escape from Tarkov Scav strategies — timings, extracts, third-parties, and how to leave raids with gear instead of empty pockets.',
		h1: 'Tarkov Scav Run Strategies: How to Leave With Gear',
		intro:
			'Passive Scav players wait behind a bush while two PMC teams erase each other, then spray into the mess and die. Strong Scav runs manufacture a short advantage, grab what matters, and extract before the map collapses on you.',
		keywords: [
			'tarkov scav run',
			'scav strategies',
			'escape from tarkov scav',
			'tarkov extracts',
			'tarkov esp',
		],
		imageAlt: 'Scav player moving toward extract with loot in Escape from Tarkov',
		sections: [
			{
				h2: 'Why so many Scav runs feel soft',
				paragraphs: [
					'Scav kits are random, timers are limited, and player Scavs can turn on you. Waiting forever for a “perfect” third-party often means you arrive late to a wiped lobby with nothing left. Information tools like <a href="/tarkov-esp/">Tarkov ESP</a> can help you see fights early — but you still need an exit plan.',
					'Decide your extract before you swing. Take a clear damage window, grab high-value loot, then leave. The usual third-party clock in hot POIs is only a few seconds long once gunfire starts.',
				],
			},
			{
				h2: 'Five aggressive habits that still work',
				paragraphs: [
					'Pre-aim common corners on Customs dorms and Interchange tech stores so you clear angles in under a second. Enter rooms with an exit path, not a panic turn. Fake one side of a doorway, then finish from the safer angle when their magazine is weak.',
					`Stay close to hard cover while you move — never more than a short sprint from a wall or vehicle. Pressure late rotates near extracts when players are silhouetted and greedy. Mode rules evolve with ${EXT.tarkov} wipes; the geometry of first-shot advantage does not.`,
				],
			},
			{
				h2: 'Warmup checklist before you queue a Scav',
				paragraphs: [
					'Know your map’s main extracts, bring a simple med plan, and pick two POIs with cover ladders instead of open fields. Pair this article with <a href="/blog/tarkov-loot-routes-guide/">loot routes</a>, <a href="/blog/tarkov-weapon-tier-list/">weapon tiers</a>, and <a href="/blog/tarkov-warmup-maps-ranked/">warmup routines</a>.',
					'Try one session where you force early contact only when you have armor and a usable gun — then track whether you extracted before the third-party window closed.',
				],
			},
		],
	},
	{
		id: 'tarkov-tournament-meta',
		imageKey: 'rebootFight',
		published: '2026-07-20',
		updated: '2026-08-13',
		category: 'Competitive',
		featured: false,
		slug: 'tarkov-tournament-meta-guide',
		title: 'What Competitive Tarkov Players Optimize For',
		metaDescription:
			'What strong Escape from Tarkov competitors optimize — spawn plans, loadouts, mid-raid habits, and which tournament habits help normal PMC queues.',
		h1: 'What Competitive Tarkov Players Optimize For',
		intro:
			'Tournament winners and high-level duos are not lucky spawn gods. They optimize expected value: safer loot paths, cleaner mid-raid habits, and fights they choose on purpose. Here is what translates into your normal Escape from Tarkov queues.',
		keywords: [
			'tarkov competitive',
			'tarkov tournament',
			'tarkov meta',
			'pmc habits',
			'tarkov intel',
		],
		imageAlt: 'Competitive Escape from Tarkov players reviewing raid strategy',
		sections: [
			{
				h2: 'Watch competitive VODs like a coach, not a fan',
				paragraphs: [
					`Start with schedules and film from ${EXT.tarkov} community events or trusted creators, then tag habits instead of memorizing a single POI name. Note the landing plan, first heal, first rotate, first voluntary fight, and the key late-raid decision.`,
					'Five clear timestamps beat a full passive watch. You are stealing decision patterns, not cosplaying someone else’s spawn.',
				],
			},
			{
				h2: 'Spawn EV and loadout patterns that keep showing up',
				paragraphs: [
					'Score every spawn on contest rate, loot quality in the first few minutes, extract pain, exit paths, and split potential with teammates. Edge spawns with clean exits often beat “sexy” mid-map landmarks that look good on stream and then get third-partied.',
					'Expect a reliable mid rifle, a close-range option, mobility or stamina management, and enough meds. High-tier loot is taken when free, not forced — matching the mindset in our <a href="/blog/tarkov-weapon-tier-list/">weapon tier list</a>.',
				],
			},
			{
				h2: 'What actually translates to normal raids',
				paragraphs: [
					'Steal loot-timer discipline, a simple loadout spine, earlier rotates, and selective fights. Do not blindly mirror a trio drop when you solo queue. Winners rotate early enough to choose sides — the same idea shows up in our <a href="/blog/tarkov-scav-run-aggressive-strategies/">Scav aggression guide</a>.',
					'Try this: watch fifteen minutes of a strong VOD with five timestamps. Steal one mid-raid habit only. Run it for a six-raid PMC block before adding another.',
				],
			},
		],
	},
	{
		id: 'tarkov-loot-routes',
		imageKey: 'battleRoyaleIslandMap',
		published: '2026-07-18',
		updated: '2026-08-13',
		category: 'Loot Routes',
		featured: true,
		slug: 'tarkov-loot-routes-guide',
		title: 'Tarkov Loot Routes That Leave Spawn Ready to Fight',
		metaDescription:
			'High-percentage Escape from Tarkov loot routes for Customs, Woods, and Interchange — how to leave spawn with guns, armor, and meds that win mid-raid fights.',
		h1: 'Tarkov Loot Routes: Leave Spawn Ready to Fight',
		intro:
			'Winning in Escape from Tarkov starts before the first gunfight. Random looting gets you killed with a pistol and no meds. These route habits consistently convert a spawn into a kit you can actually fight with.',
		keywords: [
			'tarkov loot routes',
			'customs loot path',
			'interchange loot',
			'tarkov spawn guide',
			'tarkov esp',
		],
		imageAlt: 'Loot route planning across an Escape from Tarkov map',
		sections: [
			{
				h2: 'Why early inventory is the real bottleneck',
				paragraphs: [
					'Many early raid deaths happen because players loot like tourists. Strong players treat the first ninety seconds like a shopping list: usable gun, enough ammo, basic armor, and a heal. Drop spot matters less than sequence — a mediocre POI with discipline beats a stacked landmark with panic looting.',
					'Secure a primary weapon and meds before hunting kills. Early ego chases are how hot-spawn players stay broke.',
				],
			},
			{
				h2: 'Three route archetypes that keep printing gear',
				paragraphs: [
					'Contested edge POI: land outer loot, snake inward, leave before late third parties. Uncontested chain: sacrifice early fights for a fuller kit by minute three. Mid-map surge: vacuum piles ninety to one hundred fifty seconds after hot spawns empty out.',
					`Timing targets help: first gun quickly, clear a cluster, grab heals, then upgrade or leave. Slot priority is usually gun, ammo, armor, meds, then flex loot. POI names shift with ${EXT.tarkov} wipes — keep the geometry, not just the landmark brand.`,
				],
			},
			{
				h2: 'Convert a strong spawn into a win',
				paragraphs: [
					'Pair these routes with <a href="/blog/tarkov-scav-run-aggressive-strategies/">Scav aggression</a> and <a href="/blog/tarkov-weapon-tier-list/">weapon tiers</a>. Leave spawn rich so mid-raid becomes a skill check instead of a scavenger panic.',
					'If you practice with loot markers, read <a href="/tarkov-esp/">Tarkov ESP</a> for category toggles — then still run the timer so your habits stay sharp without overlays.',
				],
			},
		],
	},
	{
		id: 'tarkov-pro-settings',
		imageKey: 'cheatsPackage',
		published: '2026-07-12',
		updated: '2026-08-13',
		category: 'Settings',
		featured: false,
		slug: 'tarkov-pro-settings-guide',
		title: 'Tarkov Pro Settings That Actually Help You See Enemies',
		metaDescription:
			'Practical Escape from Tarkov settings used by strong players — visibility, audio cues, sensitivity, and what to copy vs ignore from pro configs.',
		h1: 'Tarkov Settings Guide: See More, Panic Less',
		intro:
			'Copying a champion’s entire config will not make you one. But a few Escape from Tarkov settings reliably improve visibility, audio reads, and aim consistency. Here is what is worth stealing.',
		keywords: [
			'tarkov settings',
			'tarkov sensitivity',
			'tarkov visibility',
			'tarkov audio settings',
			'tarkov intel',
		],
		imageAlt: 'Escape from Tarkov graphics and control settings menu',
		sections: [
			{
				h2: 'Visibility and performance before fancy numbers',
				paragraphs: [
					'If your frame rate collapses in Streets of Tarkov or Interchange interiors, no sensitivity tip will save you. Prioritize a stable FPS and readable shadows over maximum eye candy. Many strong players lower clutter so PMC silhouettes pop sooner in tree lines and warehouse lighting.',
					'Test changes in offline mode or a quiet Scav before locking them for serious PMC raids. Your eyes adapt in a few sessions — give settings that long before declaring them useless.',
				],
			},
			{
				h2: 'Sensitivity, ADS, and muscle memory',
				paragraphs: [
					'Pick one hip-fire and ADS relationship and stick with it for at least a week. Constantly rewriting sens after every death trains nothing. Warm up with the routine in our <a href="/blog/tarkov-warmup-maps-ranked/">warmup guide</a> so your hands match the new numbers.',
					'If you later add soft aim tooling, match the in-game sens first, then tune FOV in the <a href="/tarkov-aimbot/">aimbot guide</a>. Tools on top of a chaotic sens feel robotic and obvious.',
				],
			},
			{
				h2: 'Audio cues that win extracts',
				paragraphs: [
					'Footsteps, magazine reloads, and extract buzzing often matter more than a tiny graphics slider. Use headphones, keep voice chat from drowning game audio, and learn the sound difference between a scav AI shuffle and a player PMC push.',
					'Settings are leverage, not a cheat code. Pair them with map knowledge from our <a href="/blog/tarkov-loot-routes-guide/">loot routes</a> article so you know where those sounds are coming from.',
				],
			},
		],
	},
	{
		id: 'tarkov-warmup-maps',
		imageKey: 'playerEsp',
		published: '2026-07-10',
		updated: '2026-08-13',
		category: 'Warmup',
		featured: false,
		slug: 'tarkov-warmup-maps-ranked',
		title: 'Tarkov Warmup Routine Before Serious PMC Raids',
		metaDescription:
			'A short Escape from Tarkov warmup routine before PMC raids — aim, peeks, audio focus, and what to practice offline so your first fight is not your warmup.',
		h1: 'Tarkov Warmup Routine Before You Queue PMC',
		intro:
			'Queuing cold into Factory or dorms is how you donate a kit. A short Escape from Tarkov warmup — even ten to fifteen minutes — makes your first real fight feel like your third.',
		keywords: [
			'tarkov warmup',
			'tarkov aim practice',
			'pmc warmup routine',
			'tarkov offline practice',
			'tarkov intel',
		],
		imageAlt: 'Player warming up aim before an Escape from Tarkov PMC raid',
		sections: [
			{
				h2: 'Why your first raid should not be the warmup',
				paragraphs: [
					'Most players boot the game, slap on a kit, and die to the first clean peeker. Hands are cold, audio is not dialed, and map timing feels off. Treat warmup as part of the session, not optional fluff.',
					'Offline practice, shooting range habits, and a couple of low-stakes Scav runs exist so your expensive PMC kit is not the experiment.',
				],
			},
			{
				h2: 'A simple 15-minute routine that scales',
				paragraphs: [
					'Minutes 1–5: tracking and short bursts on a range or offline bots. Minutes 6–10: peek practice on common angles — jiggle, counter-strafe, pre-aim head height. Minutes 11–15: one focused Scav or offline fight block where you only work one habit, like holding an extract or clearing a room.',
					'Keep the routine identical for a week so improvements are measurable. Rotate maps later — Customs one day, Woods the next — after the habit sticks.',
				],
			},
			{
				h2: 'What to do right before you ready up',
				paragraphs: [
					'Check stash meds and ammo, confirm your map extracts, and skim <a href="/updates/">cheat status</a> if you use overlays after a patch. Pair warmup with <a href="/blog/tarkov-pro-settings-guide/">settings</a> and <a href="/blog/tarkov-weapon-tier-list/">weapon tiers</a> so you are not reinventing the kit every night.',
					'If the first two PMC deaths feel mechanical, stop stacking kits and repeat five minutes of peek practice. Ego queueing while tilted is not a strategy.',
				],
			},
		],
	},
	{
		id: 'tarkov-cheats-complete-guide',
		imageKey: 'espWallhack',
		published: '2026-07-30',
		updated: '2026-08-13',
		category: 'Cheats Guide',
		featured: true,
		slug: 'tarkov-cheats-complete-guide-2026',
		title: 'Tarkov Cheats 2026: Complete Undetected Guide',
		metaDescription:
			'A clear 2026 guide to tarkov cheats — what ESP, soft aim, and radar actually do in Escape from Tarkov, how BattlEye maintenance works, and how to buy safely.',
		h1: 'Tarkov Cheats in 2026: What They Are and How to Use Them Carefully',
		intro:
			'People search “tarkov cheats” for a simple reason: Escape from Tarkov is information-heavy, punishing, and full of extract campers. This guide explains what modern undetected packages actually include, how BattlEye maintenance works, and how to decide whether a tool fits your play style.',
		keywords: [
			'tarkov cheats',
			'undetected tarkov cheats',
			'tarkov esp',
			'tarkov aimbot',
			'battleye',
		],
		imageAlt: 'Overview of Tarkov Cheats ESP soft aim and radar tools for 2026',
		sections: [
			{
				h2: 'What do people mean when they say tarkov cheats?',
				paragraphs: [
					'In plain language, tarkov cheats are third-party tools that add information or aim assistance on top of the Escape from Tarkov client. The common stack is ESP wallhack for players and loot, a 2D radar for threats outside your view, and configurable soft aim for firefights. One license should cover that loop instead of forcing you to juggle separate downloads.',
					'Searchers also say “escape from tarkov cheats,” “eft hacks,” or “tarkov wallhack.” Those phrases usually point at the same intent: survive raids with better reads. Start at our <a href="/tarkov-cheats/">tarkov cheats pillar</a> if you want the product overview without the long essay.',
				],
			},
			{
				h2: 'ESP, soft aim, and radar — what each tool is for',
				paragraphs: [
					'ESP answers “who is near me and what is worth looting?” Soft aim answers “can I finish the fight once I choose it?” Radar answers “is someone flanking while I heal?” Used together, they cover information and combat. Used badly, they create noisy overlays and obvious aim corrections.',
					'Deep dives live on <a href="/tarkov-esp/">ESP</a>, <a href="/tarkov-aimbot/">aimbot</a>, <a href="/tarkov-radar-hack/">wallhack</a>, and <a href="/tarkov-radar-hack/">radar</a>. Read those before you buy if you only need one job done well.',
				],
			},
			{
				h2: 'BattlEye, “undetected,” and honest expectations',
				paragraphs: [
					`${EXT.battleye} protects Escape from Tarkov. No seller can promise permanent undetected status. What a serious vendor can offer is maintenance: rebuilds after patches, a public status note, and clear setup steps. That workflow is documented on <a href="/tarkov-cheats/">undetected tarkov cheats</a> and <a href="/updates/">BattlEye maintenance</a>.`,
					'Before every patch-day queue, read <a href="/updates/">Updates</a>. If status is quiet, wait. Responsible settings matter as much as the binary itself.',
				],
			},
			{
				h2: 'How to buy and set up without wasting a night',
				paragraphs: [
					'Compare monthly and lifetime on <a href="/pricing/">Pricing</a>, then follow <a href="/setup/">Setup</a> after delivery. Keep your order ID ready for <a href="/support/">Support</a>. If you are still shopping, the <a href="/blog/escape-from-tarkov-cheats-buyers-guide/">buyers guide</a> lists the checklist we wish every shopper used.',
					'Tarkov Cheats is built for Windows PC PMC and Scav play. It will not replace map knowledge — it amplifies the reads you already practice in raids.',
				],
			},
		],
	},
	{
		id: 'escape-from-tarkov-cheats-buyers-guide',
		imageKey: 'cheatsPackage',
		published: '2026-07-28',
		updated: '2026-08-13',
		category: 'Buyers Guide',
		featured: true,
		slug: 'escape-from-tarkov-cheats-buyers-guide',
		title: 'Escape from Tarkov Cheats Buyers Guide',
		metaDescription:
			'What to check before you buy escape from tarkov cheats — status pages, ESP features, soft aim, refunds, pricing, and red flags in 2026.',
		h1: 'Escape from Tarkov Cheats: What to Check Before You Buy',
		intro:
			'Buying escape from tarkov cheats is noisy. Every storefront promises “undetected,” instant delivery, and god mode. This buyers guide slows you down with a practical checklist so you spend money on maintenance and clarity — not banners.',
		keywords: [
			'escape from tarkov cheats',
			'tarkov cheats buyers guide',
			'buy tarkov cheats',
			'undetected eft cheats',
			'tarkov pricing',
		],
		imageAlt: 'Checklist for buying Escape from Tarkov cheats safely',
		sections: [
			{
				h2: 'Start with status, not screenshots',
				paragraphs: [
					'Ask whether the seller publishes a dated status page after BattlEye or client patches. Fancy galleries do not help if the tool is offline for three days. Tarkov Cheats posts rebuild notes on <a href="/updates/">Updates</a> for that reason.',
					'If a shop only answers in private Discord and never writes public notes, assume you will miss patch windows.',
				],
			},
			{
				h2: 'Feature checklist that matches real Tarkov raids',
				paragraphs: [
					'For Escape from Tarkov, useful features usually mean player ESP with distance, loot filters, extract awareness, radar for flanks, and soft aim you can tone down. “Unlock all” marketing and battle-royale leftovers are red flags that the page was cloned from another game.',
					'Compare the stack on <a href="/features/">Features</a>, <a href="/tarkov-esp/">ESP</a>, and <a href="/tarkov-aimbot/">Aimbot</a>. If radar matters to how you hold extracts, confirm it exists before checkout.',
				],
			},
			{
				h2: 'Price, delivery, and support questions worth asking',
				paragraphs: [
					'Know whether you are paying monthly or lifetime, how the license arrives, and how fast support replies with an order ID. Read the <a href="/refund-policy/">refund policy</a> before you pay — digital tools often have narrow windows.',
					'Our plans live on <a href="/pricing/">Pricing</a>. Setup steps are on <a href="/setup/">Setup</a>. If something fails after a patch, <a href="/support/">Support</a> needs your order details, Windows version, and what you already tried.',
				],
			},
		],
	},
	{
		id: 'tarkov-cheats-2026-whats-new',
		imageKey: 'hero',
		published: '2026-07-26',
		updated: '2026-08-13',
		category: 'Product Updates',
		featured: false,
		slug: 'tarkov-cheats-2026-whats-new',
		title: 'Tarkov Cheats 2026: What Changed This Year',
		metaDescription:
			'What changed for tarkov cheats in 2026 — wipe cadence, BattlEye maintenance habits, ESP focus, and how Tarkov Cheats adapted for Escape from Tarkov.',
		h1: 'What Changed for Tarkov Cheats in 2026',
		intro:
			'2026 did not invent cheating in Escape from Tarkov — it raised the bar for maintenance. Wipes, BattlEye pushes, and map updates punish stale builds. Here is what changed in how serious tarkov cheats packages need to operate.',
		keywords: [
			'tarkov cheats 2026',
			'eft cheats 2026',
			'battleye 2026',
			'tarkov wipe',
			'tarkov cheats updates',
		],
		imageAlt: '2026 updates for Tarkov Cheats on Escape from Tarkov',
		sections: [
			{
				h2: 'Why 2026 buyers care more about status pages',
				paragraphs: [
					'Players got tired of “undetected forever” slogans. They want a dated note after patches. That is why we invest in the <a href="/updates/">Updates</a> log and the <a href="/tarkov-cheats/">undetected explainer</a> instead of empty guarantees.',
					`${EXT.battleye} and Battlestate client updates still force rebuilds. The shops that survive are the ones that communicate during those windows.`,
				],
			},
			{
				h2: 'Feature focus shifted toward raid information',
				paragraphs: [
					'The winning feature set in 2026 is still ESP, radar, and tunable soft aim — because Tarkov fights are about information and first peeks. Loud rage features matter less than readable overlays you can turn down near extracts.',
					'See the current stack on <a href="/features/">Features</a> and the pillar at <a href="/tarkov-cheats/">tarkov cheats</a>.',
				],
			},
			{
				h2: 'What we recommend you do differently this year',
				paragraphs: [
					'Check status before patch-day queues. Keep soft aim conservative. Use loot ESP filters so your screen stays clean. Read the <a href="/blog/tarkov-cheats-complete-guide-2026/">complete 2026 guide</a> if you are new to the category.',
					'Pricing remains monthly and lifetime on <a href="/pricing/">Pricing</a> with digital delivery after payment.',
				],
			},
		],
	},
	{
		id: 'tarkov-aimbot-settings-guide',
		imageKey: 'aimbotCombat',
		published: '2026-07-24',
		updated: '2026-08-13',
		category: 'Aimbot',
		featured: false,
		slug: 'tarkov-aimbot-settings-guide',
		title: 'Tarkov Aimbot Settings: Smooth FOV Without Looking Robotic',
		metaDescription:
			'How to tune tarkov aimbot and soft aim settings — FOV, smoothness, bone priority, and per-weapon profiles that feel natural in Escape from Tarkov raids.',
		h1: 'Tarkov Aimbot Settings That Feel Natural',
		intro:
			'A harsh aimbot gets you killed by reports and by your own bad habits. Soft, tunable aim assistance is what most Escape from Tarkov players actually want. Here is how to think about FOV, smoothness, and weapon profiles.',
		keywords: [
			'tarkov aimbot settings',
			'tarkov soft aim',
			'aimbot fov',
			'tarkov aim assist',
			'tarkov cheats',
		],
		imageAlt: 'Soft aim and FOV settings for Tarkov aimbot on Windows PC',
		sections: [
			{
				h2: 'Start softer than you think you need',
				paragraphs: [
					'Begin with a smaller FOV and higher smoothness so the assist helps tracking instead of snapping. Play five raids on Customs or Factory and only then widen FOV. If friends watching a demo say it looks robotic, you went too far.',
					'Full control docs live on <a href="/tarkov-aimbot/">Tarkov Aimbot</a> and <a href="/tarkov-aimbot/">soft aim</a>.',
				],
			},
			{
				h2: 'Per-weapon profiles beat one global slider',
				paragraphs: [
					'ARs, SMGs, and bolt-actions want different assist. Save separate profiles so dorms sprays and long Woods peeks do not share the same magnet. Bone priority should favor what you can actually hit under stress — usually upper chest to head transitions, not miracles.',
					'Hotkeys matter mid-raid. You need to disable assist when you are looting friendlies or holding a suspicious angle where obvious corrections would look wrong.',
				],
			},
			{
				h2: 'Pair aim settings with information tools',
				paragraphs: [
					'Soft aim finishes fights that ESP and radar help you choose. If your overlays are noisy, fix <a href="/tarkov-esp/">ESP categories</a> before blaming aim. After BattlEye patches, confirm <a href="/updates/">Updates</a> before you tune anything on an old build.',
				],
			},
		],
	},
	{
		id: 'tarkov-esp-wallhack-explained',
		imageKey: 'espWallhack',
		published: '2026-07-21',
		updated: '2026-08-13',
		category: 'ESP',
		featured: false,
		slug: 'tarkov-esp-wallhack-explained',
		title: 'Tarkov ESP and Wallhack Explained in Plain English',
		metaDescription:
			'What tarkov ESP and wallhack actually show in Escape from Tarkov — players, loot, distance, extracts — and how to keep overlays readable in raids.',
		h1: 'Tarkov ESP and Wallhack Explained Clearly',
		intro:
			'“ESP” and “wallhack” get used interchangeably. In Escape from Tarkov they both mean information through walls — but the useful details are distance, filters, and what you choose to hide so your screen stays readable.',
		keywords: [
			'tarkov esp',
			'tarkov wallhack',
			'eft esp',
			'loot esp tarkov',
			'tarkov cheats',
		],
		imageAlt: 'ESP wallhack overlay showing players and loot in Escape from Tarkov',
		sections: [
			{
				h2: 'What ESP shows during a real raid',
				paragraphs: [
					'Player ESP outlines PMCs and Scavs through walls and terrain, often with distance. Loot ESP highlights containers or high-value items. Extract cues help you avoid camping surprises. That information gap is why people search for tarkov esp in the first place.',
					'Read the dedicated pages for <a href="/tarkov-esp/">ESP</a> and <a href="/tarkov-radar-hack/">wallhack</a> if you want category-level detail.',
				],
			},
			{
				h2: 'How to keep overlays from becoming noise',
				paragraphs: [
					'Toggle categories. During a hot push you may want players only. During a loot route you may want containers. Near extract you may want threats and exits. Too many boxes at once create hesitation — the opposite of an advantage.',
					'Pair ESP with <a href="/tarkov-radar-hack/">radar</a> for flanks outside your field of view. Visibility wins information wars; aim tools cover the firefight afterward.',
				],
			},
			{
				h2: 'Maintenance and responsible use',
				paragraphs: [
					'ESP modules rebuild after BattlEye patches like everything else. Check <a href="/updates/">Updates</a> and the <a href="/tarkov-cheats/">undetected guide</a>. No overlay replaces listening and map knowledge — it shortens the time between “I heard something” and “I know where.”',
				],
			},
		],
	},
	{
		id: 'undetected-tarkov-cheats-battleye',
		imageKey: 'playerEsp',
		published: '2026-07-19',
		updated: '2026-08-13',
		category: 'Undetected',
		featured: true,
		slug: 'undetected-tarkov-cheats-battleye',
		title: 'Undetected Tarkov Cheats and BattlEye Reality',
		metaDescription:
			'What “undetected tarkov cheats” really means under BattlEye — maintenance, patch days, risk, and how to read status before you queue Escape from Tarkov.',
		h1: 'Undetected Tarkov Cheats: What BattlEye Reality Looks Like',
		intro:
			'“Undetected” is the most abused word in cheat marketing. Under BattlEye, it means a package is being maintained against current detections — not that bans are impossible. Here is the honest version for Escape from Tarkov players.',
		keywords: [
			'undetected tarkov cheats',
			'battleye tarkov',
			'tarkov ban risk',
			'eft undetected',
			'tarkov status',
		],
		imageAlt: 'BattlEye maintenance status for undetected Tarkov cheats',
		sections: [
			{
				h2: 'What undetected can honestly mean',
				paragraphs: [
					`BattlEye is documented at ${EXT.battleye}. It evolves. Vendors who care publish rebuild notes when ESP, radar, or aim modules need work. Tarkov Cheats does that on <a href="/updates/">Updates</a> and explains the workflow on <a href="/updates/">BattlEye maintenance</a>.`,
					'If a seller says “100% undetected forever,” treat it as advertising. Your risk also depends on how obviously you play.',
				],
			},
			{
				h2: 'Patch-day habits that reduce pain',
				paragraphs: [
					`After a Tarkov or BattlEye update, wait for a status note before queueing. Confirm Battlestate services on ${EXT.status} if the launcher itself is failing. Do not run yesterday’s build into today’s anti-cheat and call it bad luck.`,
					'Keep soft aim conservative and avoid highlight-reel rage settings that attract reports even when the binary is clean.',
				],
			},
			{
				h2: 'Where to go next',
				paragraphs: [
					'Read <a href="/tarkov-cheats/">undetected tarkov cheats</a>, the <a href="/blog/tarkov-cheats-complete-guide-2026/">2026 complete guide</a>, and <a href="/pricing/">Pricing</a> if you want the maintained stack. Undetected status is a process you check — not a sticker on the box.',
				],
			},
		],
	},
	{
		id: 'tarkov-cheats-vs-cheatvault',
		imageKey: 'cheatsPackage',
		published: '2026-07-15',
		updated: '2026-08-13',
		category: 'Comparisons',
		featured: false,
		slug: 'tarkov-cheats-vs-cheatvault-comparison',
		title: 'Tarkov Cheats vs Typical Budget EFT Shops',
		metaDescription:
			'How Tarkov Cheats compares to typical budget Escape from Tarkov cheat shops — ESP depth, radar, status pages, pricing, and what “cheap” usually skips.',
		h1: 'Tarkov Cheats vs Typical Budget EFT Cheat Shops',
		intro:
			'Budget Escape from Tarkov stores often look identical: neon banners, “undetected” badges, and a low weekly price. Tarkov Cheats costs more than the cheapest tier on purpose. Here is what you usually trade when you chase the lowest sticker.',
		keywords: [
			'tarkov cheats comparison',
			'budget eft cheats',
			'tarkov cheats vs other shops',
			'esp radar pricing',
			'tarkov cheats',
		],
		imageAlt: 'Comparing Tarkov Cheats features against budget EFT cheat shops',
		sections: [
			{
				h2: 'What budget shops usually optimize for',
				paragraphs: [
					'Low entry price and fast checkout. That can be fine for a weekend experiment. The common gaps are thin loot ESP, no real radar, Discord-only status, and slow rebuild communication after BattlEye pushes.',
					'Tarkov Cheats focuses on a full raid stack — player ESP, loot filters, radar, soft aim profiles — with a public <a href="/updates/">Updates</a> page. See <a href="/features/">Features</a> for the list.',
				],
			},
			{
				h2: 'Price versus what you touch every raid',
				paragraphs: [
					'If you only want basic player boxes in casual raids, a cheaper shop might feel enough. If you hold extracts, run loot routes, and hate dying to unseen flanks, radar and clean filters pay for themselves quickly.',
					'Our monthly and lifetime options are on <a href="/pricing/">Pricing</a>. Read the <a href="/blog/escape-from-tarkov-cheats-buyers-guide/">buyers guide</a> before you compare three storefronts at once.',
				],
			},
			{
				h2: 'How to decide without brand loyalty',
				paragraphs: [
					'Write down must-haves: dated status, loot ESP, radar, soft aim profiles, Windows PC support. Open each seller’s status channel and feature list side by side. If a shop fails the status test, price does not matter.',
					'Then return to <a href="/tarkov-cheats/">tarkov cheats</a> and <a href="/tarkov-cheats/">undetected notes</a> if that checklist matches what we ship.',
				],
			},
		],
	},
	{
		id: 'elitefn-two-week-test',
		imageKey: 'aimbotSkeleton',
		published: '2026-07-08',
		updated: '2026-08-13',
		category: 'Comparisons',
		featured: false,
		slug: 'elitefn-vs-tarkov-cheats-two-week-test',
		title: 'I Tested Another Tarkov Cheat for 2 Weeks First',
		metaDescription:
			'A two-week test of another Escape from Tarkov cheat before switching to Tarkov Cheats — ESP feel, soft aim, patch downtime, and support differences.',
		h1: 'I Tested Another Tarkov Cheat for Two Weeks Before Switching',
		intro:
			'My Discord kept recommending a popular Escape from Tarkov cheat brand. I gave it fourteen days on the same PC and playlists, then moved to Tarkov Cheats. This is what actually differed — without the usual affiliate script.',
		keywords: [
			'tarkov cheats review',
			'eft cheat comparison',
			'tarkov cheat downtime',
			'soft aim test',
			'tarkov cheats',
		],
		imageAlt: 'Two week hands-on comparison between Tarkov cheat providers',
		sections: [
			{
				h2: 'Week one — setup and first impressions',
				paragraphs: [
					'Delivery was fine: license in email, loader as admin, overlays disabled. Menu learning took a couple evenings. Player ESP was readable. Loot ESP felt secondary. I ran several nights with information tools only and no aim assist so I could judge visibility on its own.',
					'Tarkov Cheats later felt similar on install time, but filters for loot and extracts were easier to toggle independently during loot routes.',
				],
			},
			{
				h2: 'Soft aim and the mid-raid feel',
				paragraphs: [
					'Conservative FOV soft aim helped SMG and AR tracking. Sniping needed manual profile swaps that slowed me down. When I pushed smoothness too low, corrections looked obvious in review clips. Tuning toward smoother tracking fixed kills and reduced the robotic look.',
					'On Tarkov Cheats I relied more on per-weapon profiles so dorms and long peeks did not share one magnet. Details are in the <a href="/tarkov-aimbot/">aimbot guide</a>.',
				],
			},
			{
				h2: 'The patch window that ended the trial',
				paragraphs: [
					'A Tarkov plus BattlEye update landed mid-test. The other tool’s status went quiet without a clear ETA. I skipped queues while my group played without me. A rebuild arrived days later; stability was mixed. That downtime — not a single feature screenshot — pushed me to switch.',
					'Tarkov Cheats won me over with written notes on <a href="/updates/">Updates</a>. I still do not queue blind after patches on any tool.',
				],
			},
			{
				h2: 'After switching — what improved for my raids',
				paragraphs: [
					'Independent loot and player toggles cleaned late-raid screens. Radar helped extract holds. Support replies with order ID were fast enough during setup week. Pricing math favored a single full stack over stacking weekly subs — see <a href="/pricing/">Pricing</a>.',
					'If you run your own test, measure patch downtime hours, not just day-one vibes. Then read <a href="/setup/">Setup</a> before you buy anything.',
				],
			},
		],
	},
	{
		id: 'tarkov-cheats-vs-ghostware',
		imageKey: 'espWallhack',
		published: '2026-07-05',
		updated: '2026-08-13',
		category: 'Comparisons',
		featured: false,
		slug: 'tarkov-cheats-vs-ghostware-features-pricing',
		title: 'Full-Stack Tarkov Cheats vs Minimal ESP Tools',
		metaDescription:
			'Full-stack Tarkov Cheats versus minimal ESP-only Escape from Tarkov tools — feature depth, radar, soft aim, pricing, and who should buy which style.',
		h1: 'Full-Stack Tarkov Cheats vs Minimal ESP-Only Tools',
		intro:
			'Some Escape from Tarkov tools sell a slim ESP module and call it a day. Tarkov Cheats ships the wider raid stack. Neither philosophy is automatically wrong — they fit different players. Here is a clear comparison.',
		keywords: [
			'tarkov esp only cheat',
			'tarkov cheats features',
			'radar vs esp',
			'tarkov cheat pricing',
			'tarkov cheats',
		],
		imageAlt: 'Full stack Tarkov Cheats compared with minimal ESP-only tools',
		sections: [
			{
				h2: 'Two philosophies: minimal surface vs full raid loop',
				paragraphs: [
					'Minimal tools focus on player boxes and light assist. Fewer features can mean a simpler menu and a lower price. Full-stack tools add loot filters, radar, and soft aim profiles so one menu covers information and fights.',
					'Tarkov Cheats is intentionally full-stack. If you only need outlines in quiet raids, a slim ESP product may feel enough. If you rotate, loot, and hold extracts, missing radar becomes obvious.',
				],
			},
			{
				h2: 'Feature and pricing reality check',
				paragraphs: [
					'Tarkov Cheats monthly is $35 and lifetime is $150 for ESP, radar, and soft aim together. Slimmer competitors often undercut sticker price while charging extra for modules you assumed were included. Always read the feature list, not the banner.',
					'Our public comparison points live on <a href="/features/">Features</a>, <a href="/tarkov-esp/">ESP</a>, <a href="/tarkov-radar-hack/">radar</a>, and <a href="/pricing/">Pricing</a>.',
				],
			},
			{
				h2: 'Detection talk without fairy tales',
				paragraphs: [
					'Smaller user bases generate fewer public ban screenshots — that is not proof of safety. Larger brands generate more noise even when maintenance is solid. Judge sellers by patch communication speed and whether you can find a dated status note.',
					'Tarkov Cheats documents maintenance on <a href="/updates/">BattlEye workflow</a> and <a href="/tarkov-cheats/">undetected notes</a>.',
				],
			},
			{
				h2: 'Which style should you buy?',
				paragraphs: [
					'Choose minimal ESP if budget is tight, you play casually, and you accept Discord-only status tracking. Choose Tarkov Cheats if radar, loot filters, configurable soft aim, and a public Updates URL are must-haves.',
					'Decide your must-haves on paper first. Then open <a href="/tarkov-cheats/">tarkov cheats</a> or keep shopping slim tools — but do not skip patch-day checks on either path.',
				],
			},
		],
	},
];

function translationBlock(src) {
	const sections = src.sections
		.map(
			(s) => `			{
				h2: ${JSON.stringify(s.h2)},
				paragraphs: [
${s.paragraphs.map((p) => `					${JSON.stringify(p)},`).join('\n')}
				],
			}`,
		)
		.join(',\n');

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

const file = `/* Auto-generated by scripts/generate-blog-posts.mjs — do not edit by hand. */
import type { BlogPostDefinition } from './types';

export const blogPosts: BlogPostDefinition[] = [
${sources.map(buildPost).join(',\n')}
];
`;

writeFileSync(OUT, file);
console.log(`Wrote ${sources.length} NLP blog posts → ${OUT}`);
