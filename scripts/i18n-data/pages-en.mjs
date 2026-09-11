import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta, EXT } from './constants.mjs';

/** Richest English page content — source of truth for structure. */
export const enPages = {
	home: {
		title: 'Tarkov Cheats 2026 | Undetected ESP, Aimbot & Wallhack',
		description:
			'Tarkov cheats for Windows PC — ESP, soft aim, radar, and BattlEye updates. Compare plans and buy.',
		h1: 'Tarkov Cheats — Undetected ESP, Wallhack & Aimbot',
		intro:
			'Tarkov Cheats is the undetected tarkov cheats package for Windows PC — built for Escape from Tarkov on Windows PC. Tarkov esp wallhack, 2D radar, and tarkov aimbot with BattlEye maintenance after every major patch.',
		imageAlt: "Tarkov Cheats homepage hero — ESP and aimbot for Escape from Tarkov",
		galleryTitle: 'Tarkov Cheats gallery — ESP, Aimbot and wallhack visuals',
		ctaPrimary: 'Buy Tarkov Cheats',
		ctaSecondary: 'See all features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Why players choose Tarkov cheats in 2026',
				'Tarkov rewards map awareness. Tarkov Cheats combines ESP wallhack for enemy players and loot, radar-style threat cues, and configurable Aimbot so you can read fights before committing — on raid, scav-run, and competitive lobbies.',
				`Official seasons, patches, and anti-cheat updates come from ${EXT.tarkov} and ${EXT.battleye}. We rebuild ESP, radar, and Aimbot modules when those patches require maintenance — then post status on the <a href="/updates/">Updates page</a>.`,
				'Licenses ship digitally after payment confirmation. Monthly ($35) and lifetime ($150) plans include BattlEye maintenance rebuilds when anti-cheat or game patches require updates.',
				'Start with the <a href="/tarkov-cheats/">Tarkov cheats pillar</a>, <a href="/tarkov-esp/">ESP guide</a>, <a href="/tarkov-aimbot/">Aimbot controls</a>, and <a href="/tarkov-cheats/">undetected status</a> pages if you are comparing tools before checkout.',
			),
			section(
				'ESP wallhack, radar hack, and Aimbot in one license',
				'Instead of stacking separate tools, Tarkov Cheats bundles player ESP wallhack, loot markers, 2D radar overlays, and Aimbot profiles in one undetected package built for PMC raids and scav-runs — covering both “tarkov cheats” and “escape from tarkov cheats” search intent.',
				'Browse the <a href="/tarkov-esp/">ESP</a>, <a href="/tarkov-aimbot/">Aimbot</a>, <a href="/tarkov-esp/">wallhack</a>, and <a href="/tarkov-radar-hack/">radar</a> pages for control details — or jump to <a href="/pricing/">Pricing</a> for monthly and lifetime options.',
				`Before patch days, check ${EXT.status} for Battlestate Games service health, then confirm our maintenance notes so you are not queueing on an outdated build.`,
				'Ready to buy? Open <a href="/pricing/">Pricing</a>, follow <a href="/setup/">Setup</a> after delivery, and keep <a href="/faq/">FAQ</a> / <a href="/support/">Support</a> bookmarked for license questions.',
			),
		],
	},
	'tarkov-esp': {
		title: 'Tarkov ESP 2026 | Player Boxes & Wallhack',
		description:
			'Tarkov ESP for Windows PC — player boxes, loot markers, and distance readouts. Part of our undetected tarkov cheats for Escape from Tarkov.',
		h1: 'Tarkov ESP — Player Boxes & Wallhack',
		intro:
			'Tarkov esp visibility tools for raid and scav-run. Read enemy squads, PMCs, Scavs, loot, and distance before you commit — toggleable tarkov esp wallhack overlays bundled in our tarkov cheats package.',
		imageAlt: "Tarkov ESP player boxes and distance readouts in a raid",
		galleryTitle: 'Tarkov ESP overlay visuals',
		ctaPrimary: 'Buy Tarkov Cheats',
		ctaSecondary: 'Tarkov wallhack guide',
		ctaSecondaryHref: '/tarkov-esp/',
		sections: [
			section(
				'What Tarkov ESP solves in raids',
				'Tarkov maps punish incomplete information. Tarkov Cheats ESP wallhack helps you spot enemy squads early, spot PMCs and Scavs before they push your angle, and mark high-value loot worth the detour.',
				'On raid, scav-run, and competitive lobbies, that visibility gap is often the difference between a clean third-party and a wiped squad. ESP ships bundled with radar overlays and Aimbot in one license.',
				`Tarkov’s live seasons and map updates are published by Battlestate Games (${EXT.tarkov}). When POIs or loot rules shift, ESP categories stay useful because they track players and containers — not a single static landmark.`,
			),
			section(
				'Player, boss, and loot ESP wallhack categories',
				'Toggle enemy player outlines, boss markers, extract cues, and loot pins so only raid-critical ESP wallhack overlays stay active during rotations.',
				'Distance readouts and snapline options help you control engagement range. Team and enemy colour coding supports PMC raids and scav-runs lobbies alike.',
				'Compare category detail on the <a href="/tarkov-esp/">wallhack page</a> and pair visibility with the <a href="/tarkov-radar-hack/">radar hack</a> for flanks outside your FOV.',
				[
					'Enemy player ESP outlines with distance',
					'Loot and container markers for faster rotations',
					'Boss and extract awareness cues',
					'Toggleable categories to reduce overlay noise',
				],
			),
			section(
				'Undetected ESP with BattlEye maintenance',
				'Tarkov Cheats ESP wallhack is maintained for Tarkov with rebuilds after BattlEye anti-cheat patches. Check the <a href="/updates/">Updates page</a> before you queue — no cheat guarantees permanent undetected status.',
				`Read ${EXT.battleye} for how anti-cheat updates ship, then cross-check our <a href="/updates/">BattlEye bypass maintenance guide</a> after major patches.`,
				'Checkout includes instant digital delivery for Windows 10 and 11. After purchase, follow the <a href="/setup/">Setup guide</a> and tune overlays before your first raid.',
			),
			section(
				'ESP next steps — Aimbot, pricing, and support',
				'ESP alone wins information wars; Aimbot covers the firefight. Review <a href="/tarkov-aimbot/">Aimbot controls</a> if you want one license for visibility and assist.',
				'Compare monthly ($35) and lifetime ($150) on <a href="/pricing/">Pricing</a>, then keep <a href="/support/">Support</a> ready if activation needs a human reply.',
				'Still researching? The <a href="/tarkov-cheats/">Tarkov cheats pillar</a> and <a href="/tarkov-cheats/">2026 buyer guide</a> summarize the full stack.',
			),
		],
	},
	'tarkov-aimbot': {
		title: 'Tarkov Aimbot 2026 | Soft Aim for Windows PC',
		description:
			'Tarkov aimbot with soft aim tuning for Windows PC. FOV, bone priority, and hotkeys bundled with ESP boxes in our tarkov cheats package.',
		h1: 'Tarkov Aimbot — Soft Aim for Windows PC',
		intro:
			'Configurable Aimbot tools for Tarkov firefights. Smoothness, FOV, bone priority, and per-weapon profiles — bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: "Tarkov aimbot and soft aim controls on Windows PC",
		galleryTitle: 'Tarkov Aimbot combat previews',
		ctaPrimary: 'Buy Tarkov Cheats',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/tarkov-esp/',
		sections: [
			section(
				'Aimbot tuned for Tarkov combat pace',
				'Tarkov mixes long-range AR fights with close-quarters SMG pushes. Tarkov Cheats Aimbot includes smoothness, FOV, and sensitivity controls tuned for that pace — with hotkey toggles mid-match.',
				'Bone priority and target selection options cover closest player, lowest health, or highest-threat targets during squad fights and close-range scav fights.',
				`Weapon balance and season rules change via ${EXT.tarkov}. Revisit Aimbot FOV and smoothness after major combat patches so assist still matches the live TTK windows.`,
			),
			section(
				'Per-weapon Aimbot profiles',
				'Save separate Aimbot profiles for ARs, SMGs, and bolt-actions. Switch between long-range DMR fights and dorms clears without reopening menus every raid.',
				'Prefer softer tracking? Read the <a href="/tarkov-aimbot/">soft aim guide</a>.',
				'Aimbot ships alongside <a href="/tarkov-esp/">ESP wallhack</a> and <a href="/tarkov-radar-hack/">2D radar</a> in the same Tarkov Cheats license.',
				[
					'Smoothness, FOV, and sensitivity sliders',
					'Bone priority and threat-based targeting',
					'Hotkeys to toggle Aimbot mid-match',
					'Per-weapon profile slots for AR / SMG / bolt-action',
				],
			),
			section(
				'BattlEye maintenance for undetected Aimbot',
				'Tarkov Cheats rebuilds Aimbot behavior when BattlEye anti-cheat or major Tarkov patches land. Maintenance notes appear on the <a href="/updates/">Updates page</a> so you know when a new build is live.',
				`Cross-check service health on ${EXT.status} and anti-cheat context on ${EXT.battleye}, then follow our <a href="/updates/">BattlEye maintenance guide</a> before queueing on patch day.`,
				'Responsible settings matter — undetected status requires ongoing maintenance, not set-and-forget configs. Start with conservative smoothness, then tune.',
			),
			section(
				'Buy Aimbot with ESP — pricing and setup',
				'Every plan includes Aimbot plus ESP and radar. Compare options on <a href="/pricing/">Pricing</a>, then activate with the <a href="/setup/">Setup guide</a>.',
				'Questions about delivery or profiles? Use <a href="/faq/">FAQ</a> or email <a href="/support/">Support</a> with your order ID.',
				'Want the full control list first? Open <a href="/features/">Features</a> before checkout.',
			),
		],
	},
	features: {
		title: 'Tarkov Cheats Features | ESP, Soft Aim & Radar',
		description:
			'Full tarkov cheats feature list: ESP boxes, soft aim, radar, and toggles for Windows PC. Review controls before checkout.',
		h1: 'Tarkov Cheats Features — Full Control List',
		intro:
			'Every ESP wallhack, radar hack, and Aimbot control included in the Tarkov Cheats package for Tarkov on Windows PC — with BattlEye maintenance after major patches.',
		imageAlt: "Tarkov Cheats features — ESP, soft aim, and radar screenshots",
		galleryTitle: 'Tarkov Cheats feature gallery',
		ctaPrimary: 'Buy Tarkov Cheats',
		ctaSecondary: 'View pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'ESP wallhack and visibility features',
				'Enemy player ESP wallhack, boss and extract awareness cues, loot and container markers, distance readouts, snaplines, and toggleable ESP categories for raid-critical overlays only.',
				'Team and enemy colour coding supports PMC raids and scav-runs. Deep-dive the <a href="/tarkov-esp/">ESP page</a> and <a href="/tarkov-esp/">wallhack guide</a> for category-level detail.',
				`Map and loot systems evolve with ${EXT.tarkov} wipe and map updates — toggleable ESP categories keep overlays useful when POIs rotate.`,
			),
			section(
				'Radar hack and Aimbot controls',
				'2D radar overlay with directional threat cues, configurable range for rotations and late-raid extracts, plus Aimbot smoothness, FOV, bone priority, hotkeys, and per-weapon profiles.',
				'All tools share in-client toggles so you can adjust ESP, radar, and Aimbot during live Tarkov sessions. See <a href="/tarkov-radar-hack/">radar</a> and <a href="/tarkov-aimbot/">Aimbot</a> for settings walkthroughs.',
				'Prefer a menu-first workflow? The <a href="/tarkov-cheats/">mod menu page</a> explains mid-match toggles without alt-tabbing.',
			),
			section(
				'Licensing, delivery, and BattlEye maintenance',
				'Monthly ($35) and lifetime ($150) licenses with instant digital delivery. BattlEye maintenance rebuilds publish on the <a href="/updates/">Updates page</a> after anti-cheat or game patches.',
				`Monitor ${EXT.status} on patch days, then confirm rebuild notes before you queue. Setup and billing help lives on <a href="/support/">Support</a> and support@tarkovcheats.org.`,
				'Next step: compare plans on <a href="/pricing/">Pricing</a> or read <a href="/tarkov-cheats/">how undetected maintenance works</a>.',
			),
		],
	},
	pricing: {
		title: 'Tarkov Cheats Pricing | $35/mo or $150 Life',
		description:
			'Tarkov cheats pricing: $35/month or $150 lifetime for ESP, soft aim, and radar on Windows PC. Instant delivery — pick a plan.',
		h1: 'Tarkov Cheats Pricing — Monthly & Lifetime',
		intro:
			'Choose monthly or lifetime access to undetected Tarkov Cheats — ESP wallhack, radar hack, and Aimbot for Tarkov on Windows PC. Instant digital delivery after payment.',
		imageAlt: "Tarkov Cheats store plans for monthly and lifetime licenses",
		galleryTitle: 'Tarkov Cheats package visuals',
		ctaPrimary: 'Buy Tarkov Cheats',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'Monthly and lifetime Tarkov Cheats plans',
				'Monthly license: $35 USD for 30 days of full ESP wallhack, radar hack, and Aimbot access with BattlEye maintenance included during your term.',
				'Lifetime license: $150 USD for long-term access to the same undetected Tarkov Cheats package — ideal if you play Tarkov regularly across seasons.',
				'Both plans unlock the same feature stack described on <a href="/features/">Features</a>. Choose monthly to test, or lifetime if you already know you want the full toolkit.',
			),
			section(
				'What every plan includes',
				'Player ESP wallhack, loot markers, 2D radar overlays, Aimbot controls, in-client toggles, and maintenance rebuilds after BattlEye anti-cheat or major Tarkov patches.',
				`Season calendars and client updates come from ${EXT.tarkov}. Active licenses receive rebuild access when we publish maintenance on <a href="/updates/">Updates</a>.`,
				'Digital delivery starts after payment confirmation. Keep your order reference for <a href="/support/">Support</a> requests and follow <a href="/setup/">Setup</a> for first launch.',
			),
			section(
				'Refund, billing, and buying checklist',
				'Review the <a href="/refund-policy/">Refund Policy</a> before purchase. For billing or delivery issues, contact Support with your order details.',
				'Prices are listed in USD. Availability is worldwide for Windows 10 and 11 PCs.',
				'Still comparing tools? Read <a href="/tarkov-cheats/">Tarkov cheats</a>, <a href="/tarkov-cheats/">undetected status</a>, and <a href="/faq/">FAQ</a> before you checkout.',
			),
		],
	},
	setup: {
		title: 'Tarkov Cheats Setup | Windows PC Guide',
		description:
			'Set up tarkov cheats on Windows PC — activate ESP boxes, soft aim profiles, and . Check BattlEye updates before your first queue.',
		h1: 'Tarkov Cheats Setup — Windows PC Guide',
		intro:
			'Install and configure Tarkov Cheats for Tarkov on Windows 10 or 11. Activate your license, load ESP wallhack and Aimbot profiles, and verify BattlEye maintenance status before queueing.',
		imageAlt: "Tarkov Cheats setup guide screenshot for Windows PC",
		galleryTitle: 'Tarkov Cheats setup visuals',
		ctaPrimary: 'Buy Tarkov Cheats',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'Before you install Tarkov Cheats',
				'Confirm your order email and license details. Check the <a href="/updates/">Updates page</a> for the latest BattlEye maintenance build before launching Tarkov.',
				`Also glance at ${EXT.status} if Battlestate Games services look unstable on patch day — a platform outage is not a license fault.`,
				'Tarkov Cheats requires Windows 10 or 11. Close conflicting overlay software that may interfere with ESP wallhack or Aimbot toggles.',
			),
			section(
				'Activate ESP wallhack and Aimbot profiles',
				'Follow the delivery instructions in your license email. Load default ESP wallhack categories for PMCs, Scavs, and loot — then tune radar range and Aimbot smoothness to your playstyle.',
				'Use in-client hotkeys to toggle ESP, radar, and Aimbot mid-match. Details for BattlEye module live on <a href="/tarkov-esp/">ESP</a>, <a href="/tarkov-aimbot/">Aimbot</a>, and <a href="/tarkov-cheats/">mod menu</a>.',
				'Prefer a soft tracking feel? Start with the <a href="/tarkov-aimbot/">soft aim</a> recommendations before raising aggressiveness.',
			),
			section(
				'After Tarkov or BattlEye anti-cheat patches',
				'When Battlestate Games ships a major Tarkov update or BattlEye anti-cheat patch, revisit Updates before queueing. Download maintenance rebuilds when posted.',
				`Official anti-cheat background: ${EXT.battleye}. Our practical workflow is documented on the <a href="/updates/">BattlEye bypass page</a> and <a href="/tarkov-cheats/">undetected guide</a>.`,
				'Contact <a href="/support/">Support</a> with your order ID if activation fails after a patch — include Windows version and error details for faster replies.',
			),
		],
	},
	updates: {
		title: 'Tarkov Cheats Updates | BattlEye Maintenance Log',
		description:
			'Tarkov cheats update log: BattlEye rebuilds for ESP boxes, soft aim, and radar on Windows PC. Check status before queueing after patches.',
		h1: 'Tarkov Cheats Updates — Maintenance Log',
		intro:
			'Track BattlEye maintenance and Tarkov patch rebuilds for the undetected ESP wallhack, radar hack, and Aimbot package. Check here before queueing after major updates.',
		imageAlt: "Tarkov Cheats live status after BattlEye and game patches",
		galleryTitle: 'Tarkov patch and maintenance visuals',
		ctaPrimary: 'Buy Tarkov Cheats',
		ctaSecondary: 'Undetected status guide',
		ctaSecondaryHref: '/tarkov-cheats/',
		sections: [
			section(
				'Why the Updates page matters',
				'Tarkov and BattlEye anti-cheat receive frequent patches. Tarkov Cheats publishes maintenance notes when ESP wallhack, radar, or Aimbot behavior needs a rebuild.',
				`Use ${EXT.status} for Battlestate Games platform health and this page for Tarkov Cheats build status — both matter on big update days.`,
				'Checking this log before you queue reduces surprises after game days or seasonal launches on raid and scav-run.',
			),
			section(
				'What maintenance entries cover',
				'Entries note BattlEye anti-cheat compatibility status, rebuilt ESP wallhack overlays, radar range fixes, Aimbot tuning after weapon balance changes, and digital delivery of new builds to active licenses.',
				'Lifetime and monthly subscribers receive rebuild access during active license terms. See <a href="/pricing/">Pricing</a> if you need to renew.',
				'For context on why rebuilds happen, read the <a href="/updates/">BattlEye bypass guide</a> and <a href="/tarkov-cheats/">undetected Tarkov cheats</a> explainer.',
			),
			section(
				'Staying undetected after patches',
				'No cheat guarantees permanent undetected status. Combine maintenance updates with responsible in-game settings and patch awareness.',
				`Follow season notes from ${EXT.tarkov}, then confirm our rebuild is live before you queue.`,
				'For urgent status questions after a BattlEye update, contact <a href="/support/">Support</a> with your license tier and last played build version.',
			),
		],
	},
	faq: {
		title: 'Tarkov Cheats FAQ | ESP, Soft Aim & Radar Answers',
		description:
			'Tarkov cheats FAQ: ESP boxes, soft aim, BattlEye maintenance, and pricing for PC. Clear answers before you buy.',
		h1: 'Tarkov Cheats FAQ — Common Questions',
		intro:
			'Answers about undetected Tarkov Cheats — ESP wallhack, radar hack, Aimbot, BattlEye maintenance, checkout, and Tarkov compatibility on Windows PC.',
		imageAlt: "Tarkov Cheats FAQ — delivery, setup, and update answers",
		galleryTitle: 'Tarkov Cheats FAQ visuals',
		ctaPrimary: 'Buy Tarkov Cheats',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'What is Tarkov Cheats?',
				'Tarkov Cheats is an undetected cheat package for Tarkov on Windows PC. It includes ESP wallhack, 2D radar-style awareness, and Aimbot controls with BattlEye maintenance updates.',
				'Packages cover raid and scav-run. Explore <a href="/features/">Features</a> for the full control list and <a href="/tarkov-esp/">ESP</a> / <a href="/tarkov-aimbot/">Aimbot</a> for module detail.',
				`Tarkov itself is published by Battlestate Games (${EXT.tarkov}). Cheats are third-party tools and may violate Battlestate Games' rules — use is at your own risk.`,
			),
			section(
				'Are Tarkov Cheats undetected in 2026?',
				'Tarkov Cheats is maintained with rebuilds after BattlEye anti-cheat and game patches. Check the <a href="/updates/">Updates page</a> for current status — no cheat can guarantee permanent undetected operation.',
				'Read <a href="/tarkov-cheats/">undetected Tarkov cheats</a> and the <a href="/updates/">BattlEye guide</a> for the maintenance workflow.',
				'Responsible settings and reading maintenance notes before queueing are essential.',
			),
			section(
				'Delivery, pricing, and support',
				'Licenses deliver digitally after payment confirmation. Monthly is $35; lifetime is $150 USD — see <a href="/pricing/">Pricing</a>.',
				'Contact support@tarkovcheats.org or the <a href="/support/">Support page</a> with order details for setup or billing help. First launch steps are on <a href="/setup/">Setup</a>.',
				'Refund eligibility is covered in the <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	support: {
		title: 'Tarkov Cheats Support | Help & Contact',
		description:
			'Contact tarkov cheats support for licenses, ESP setup, soft aim profiles, and on Windows PC. Include your order ID for faster help.',
		h1: 'Tarkov Cheats Support — Contact Us',
		intro:
			'Get help with Tarkov Cheats licenses, checkout, ESP wallhack setup, Aimbot profiles, and BattlEye maintenance for Tarkov on Windows PC.',
		imageAlt: "Tarkov Cheats support page for license and setup help",
		galleryTitle: 'Tarkov Cheats support resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'When to contact support',
				'Reach out for order issues, license activation failures, ESP wallhack or Aimbot setup questions, and post-patch problems after BattlEye maintenance rebuilds.',
				'Include your order ID, license tier (monthly or lifetime), Windows version, and a clear description of the issue.',
				'Many answers already live in <a href="/faq/">FAQ</a>, <a href="/setup/">Setup</a>, and <a href="/updates/">Updates</a> — check those first for faster resolution.',
			),
			section(
				'Response times and scope',
				'Support requests are reviewed daily. Tarkov Cheats support covers delivery, billing, setup, and maintenance — not in-game coaching or account recovery for Battlestate Games bans.',
				`Account and game policy questions belong with Battlestate Games. We can help with license delivery and product configuration only.`,
				'Check the Updates page and FAQ before opening a ticket — many post-patch questions are answered there.',
			),
			section(
				'Self-service resources',
				'Setup guide, Features list, Updates log, Refund Policy, and Terms of Use are linked from the footer. BattlEye bypass notes live on the dedicated <a href="/updates/">BattlEye anti-cheat page</a>.',
				'Email: support@tarkovcheats.org',
				'Ready to purchase or renew? Open <a href="/pricing/">Pricing</a>. Need feature detail first? See <a href="/features/">Features</a>.',
			),
		],
	},
	undetected: {
		title: 'Undetected Tarkov Cheats 2026 | BattlEye Maintenance',
		description:
			'Undetected tarkov cheats with BattlEye maintenance for ESP boxes, soft aim, and radar on Windows PC. Check status before you queue.',
		h1: 'Undetected Tarkov Cheats — BattlEye Maintenance',
		intro:
			'How Tarkov Cheats stays maintained for Tarkov after BattlEye anti-cheat patches — ESP wallhack, radar hack, and Aimbot rebuilds for Windows PC.',
		imageAlt: "Tarkov Cheats undetected status overview for Windows PC",
		galleryTitle: 'Undetected Tarkov Cheats visuals',
		ctaPrimary: 'Buy Tarkov Cheats',
		ctaSecondary: 'BattlEye bypass guide',
		ctaSecondaryHref: '/updates/',
		sections: [
			section(
				'What undetected means for Tarkov Cheats',
				'Undetected Tarkov Cheats means the package is actively maintained against BattlEye anti-cheat and major Tarkov patches — not that detection is impossible forever.',
				'Rebuilds target ESP wallhack overlays, radar behavior, and Aimbot signatures after BattlEye security updates.',
				`Anti-cheat technology is documented by ${EXT.battleye}; Tarkov client updates ship through ${EXT.activision}. Undetected status is an ongoing process tied to those releases.`,
			),
			section(
				'BattlEye maintenance workflow',
				'When BattlEye anti-cheat or Tarkov updates ship, the team assesses ESP, radar, and Aimbot modules, publishes status on the <a href="/updates/">Updates page</a>, and delivers rebuilt builds to active licenses.',
				`On patch mornings, also check ${EXT.status} for launcher outages that can look like product failures.`,
				'Deep technical workflow: <a href="/updates/">BattlEye bypass Tarkov guide</a>. Feature stack: <a href="/features/">Features</a>.',
			),
			section(
				'Responsible use and next steps',
				'Combine maintenance with conservative in-game settings. Read the <a href="/faq/">FAQ</a> and Updates log regularly — undetected status is not a one-time promise.',
				'Lifetime and monthly plans include rebuild access during active terms — see <a href="/pricing/">Pricing</a>.',
				'New buyers should also read <a href="/tarkov-cheats/">Tarkov cheats 2026</a> and complete <a href="/setup/">Setup</a> after delivery.',
			),
		],
	},
	wallhack: {
		title: 'Tarkov Wallhack 2026 | ESP Boxes & Visibility',
		description:
			'Tarkov wallhack ESP with player boxes and loot markers for Windows PC. Undetected tarkov cheats — learn overlays and buy.',
		h1: 'Tarkov Wallhack — ESP Boxes & Visibility',
		intro:
			'Tarkov wallhack ESP for Tarkov — see players, loot, bosses, and containers through toggleable wallhack overlays built for PMC raids and scav-runs.',
		imageAlt: "Tarkov wallhack visibility through walls in a raid",
		galleryTitle: 'Tarkov wallhack ESP gallery',
		ctaPrimary: 'Buy Tarkov Cheats',
		ctaSecondary: 'Tarkov ESP page',
		ctaSecondaryHref: '/tarkov-esp/',
		sections: [
			section(
				'Wallhack ESP vs raw aim tools',
				'A Tarkov wallhack focuses on information — player outlines, loot pins, boss threat cues — rather than automatic aiming. Tarkov Cheats bundles wallhack ESP with radar and optional Aimbot in one license.',
				'Toggle categories so only the wallhack overlays you need stay active during rotations and extract holds.',
				'For the broader ESP keyword page see <a href="/tarkov-esp/">Tarkov ESP</a>; for combat assist see <a href="/tarkov-aimbot/">Aimbot</a>.',
			),
			section(
				'Map coverage for wallhack ESP',
				'Wallhack overlays support raid, scav-run, and competitive lobbies with distance readouts and snaplines for engagement control.',
				`Season maps and POI changes are announced via ${EXT.tarkov}. Wallhack remains useful because it tracks entities, not fixed landmarks alone.`,
				'Pair wallhack awareness with <a href="/tarkov-radar-hack/">radar hack</a> cues for flanks during building and rooftop fights.',
			),
			section(
				'Undetected wallhack maintenance',
				'ESP wallhack modules rebuild after BattlEye anti-cheat patches. Follow the <a href="/updates/">Updates page</a> and complete checkout for instant license delivery on Windows PC.',
				'Learn the full maintenance story on <a href="/tarkov-cheats/">undetected Tarkov cheats</a> and <a href="/updates/">BattlEye bypass</a>.',
				'Ready to buy? Compare <a href="/pricing/">Pricing</a> or continue to the <a href="/tarkov-esp/">ESP hack</a> landing for alternate search wording.',
			),
		],
	},
	radar: {
		title: 'Tarkov Radar Hack 2026 | 2D Threat Overlay',
		description:
			'Tarkov radar hack for flank awareness on Windows PC. Bundled with ESP boxes, soft aim, and radar in our tarkov cheats package.',
		h1: 'Tarkov Radar Hack — 2D Threat Awareness',
		intro:
			'2D radar-style overlay for Tarkov — directional threat cues for nearby players outside your line of sight, bundled with ESP wallhack and Aimbot.',
		imageAlt: "Tarkov 2D radar overlay showing nearby threats",
		galleryTitle: 'Tarkov radar hack visuals',
		ctaPrimary: 'Buy Tarkov Cheats',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/tarkov-esp/',
		sections: [
			section(
				'Why radar hack matters in Tarkov',
				'raids fights happen in three dimensions — rooftops, windows, and flanks. A 2D radar overlay shows nearby player threats outside direct line of sight so you can reposition before a third party.',
				'Tarkov Cheats radar complements <a href="/tarkov-esp/">ESP wallhack</a> markers during squad pushes and extract camp fights.',
				`Mode rules and seasonal changes come from ${EXT.tarkov}. Radar range remains configurable when map scale or mobility meta shifts.`,
			),
			section(
				'Configurable radar range',
				'Adjust radar range for early rotations versus tight extract holds. Directional cues highlight flanks during building clears and flank pushes across raid and scav-run.',
				'Toggle radar alongside ESP and Aimbot with in-client hotkeys during live matches — see the <a href="/tarkov-cheats/">mod menu</a> page.',
				'Combat follow-up lives on <a href="/tarkov-aimbot/">Aimbot</a> when you convert radar info into a fight.',
			),
			section(
				'Maintenance and licensing',
				'Radar hack modules receive BattlEye maintenance rebuilds with the full Tarkov Cheats package. Monthly and lifetime licenses include digital delivery — see <a href="/pricing/">Pricing</a>.',
				'Check <a href="/updates/">Updates</a> after major Tarkov patches before relying on previous radar configs.',
				'New to the stack? Start at <a href="/features/">Features</a> or <a href="/tarkov-cheats/">undetected status</a>.',
			),
		],
	},
	'battleye': {
		title: 'BattlEye Bypass Tarkov | Tarkov Cheats Maintenance',
		description:
			'How tarkov cheats rebuild after BattlEye patches — ESP boxes, soft aim, and radar maintenance for Windows PC. Read before queueing.',
		h1: 'BattlEye Bypass — Tarkov Cheats Maintenance',
		intro:
			'Understand BattlEye anti-cheat maintenance for Tarkov Cheats — how ESP wallhack, radar hack, and Aimbot rebuild after Tarkov security updates.',
		imageAlt: "Tarkov Cheats maintenance after a BattlEye patch",
		galleryTitle: 'BattlEye maintenance visuals',
		ctaPrimary: 'Buy Tarkov Cheats',
		ctaSecondary: 'Check updates',
		ctaSecondaryHref: '/updates/',
		sections: [
			section(
				'BattlEye anti-cheat overview',
				`BattlEye anti-cheat is Battlestate Games' anti-cheat for Tarkov on PC (see ${EXT.battleye}). Security updates can affect ESP wallhack, radar, and Aimbot behavior — requiring maintenance rebuilds for undetected packages.`,
				`Tarkov Cheats monitors BattlEye patch notes and Tarkov seasonal updates from ${EXT.tarkov} to schedule module reviews.`,
				'“BattlEye bypass” in our wording means timely maintenance — not a permanent free pass around anti-cheat.',
			),
			section(
				'What happens after a BattlEye patch',
				'The team tests ESP overlays, radar signatures, and Aimbot profiles against the new build, publishes status on <a href="/updates/">Updates</a>, and ships rebuilt packages to active licenses.',
				`Confirm Battlestate Games service health on ${EXT.status} if the launcher or matchmaking fails during the same window.`,
				'Avoid queueing on old builds after major patch days until maintenance notes confirm a new release. Related reading: <a href="/tarkov-cheats/">undetected Tarkov cheats</a>.',
			),
			section(
				'No permanent bypass guarantee',
				'BattlEye bypass in practice means timely maintenance. Read the undetected guide, <a href="/faq/">FAQ</a>, and Updates log before every session.',
				'Contact <a href="/support/">Support</a> if activation fails immediately after a posted rebuild.',
				'Buying for the first time? Compare <a href="/pricing/">Pricing</a> and finish <a href="/setup/">Setup</a> only after Updates shows a live build.',
			),
		],
	},
	'cheats-2026': {
		title: 'Tarkov Cheats 2026 | ESP Soft Aim & Radar',
		description:
			'Best tarkov cheats 2026: ESP boxes, soft aim, and radar for Windows PC. Undetected tarkov cheats with BattlEye maintenance — compare and buy.',
		h1: 'Tarkov Cheats 2026 — ESP, Soft Aim & Radar',
		intro:
			'The 2026 Tarkov Cheats package for Tarkov — undetected ESP wallhack, radar hack, and Aimbot with BattlEye maintenance, instant delivery, and Windows PC support.',
		imageAlt: "Tarkov Cheats product overview for Escape from Tarkov",
		galleryTitle: 'Tarkov Cheats 2026 gallery',
		ctaPrimary: 'Buy Tarkov Cheats',
		ctaSecondary: 'Compare features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Why tarkov cheats buyers choose Tarkov Cheats in 2026',
				'2026 seasons bring new maps, weapons, and BattlEye anti-cheat updates. Tarkov Cheats bundles ESP wallhack, radar hack, and Aimbot with active maintenance — not a stale prior-year build.',
				`Track official season messaging on ${EXT.tarkov}, then use our <a href="/updates/">Updates log</a> for product rebuild timing.`,
				'Monthly ($35) and lifetime ($150) plans cover raid and scav-run loops — see <a href="/pricing/">Pricing</a>.',
			),
			section(
				'Full feature stack for 2026 buyers',
				'Player ESP wallhack, loot markers, 2D radar overlays, Aimbot profiles, in-client toggles, and post-patch rebuilds — one license instead of stacking separate tools.',
				'Deep links: <a href="/tarkov-cheats/">Tarkov cheats pillar</a>, <a href="/tarkov-esp/">ESP</a>, <a href="/tarkov-aimbot/">Aimbot</a>, <a href="/tarkov-esp/">wallhack</a>, <a href="/tarkov-radar-hack/">radar</a>, <a href="/tarkov-cheats/">undetected</a>.',
				'Instant digital delivery after checkout confirmation worldwide.',
			),
			section(
				'Before you buy in 2026',
				'Read the <a href="/tarkov-cheats/">Tarkov cheats</a> pillar, Features, Pricing, Setup, and Updates pages. Check undetected status notes after every major patch — responsible use and maintenance awareness matter.',
				'Also compare the <a href="/tarkov-cheats/">Tarkov cheats</a> checklist, <a href="/blog/worth/">are cheats worth it</a>, and <a href="/faq/">FAQ</a>.',
				'Support is available at support@tarkovcheats.org via the <a href="/support/">Support page</a>.',
			),
		],
	},
	hacks: {
		title: 'Tarkov Cheats 2026 | Undetected ESP Aimbot Guide',
		description:
			'Tarkov cheats for Windows PC: undetected ESP wallhack, radar hack, and Aimbot with BattlEye maintenance. Compare tarkov cheats options and buy the full package.',
		h1: 'Tarkov Cheats — Undetected ESP, Aimbot & Wallhack',
		intro:
			'Tarkov cheats for raid and scav-run combine ESP wallhack visibility, 2D radar-style threat cues, and Aimbot controls in one undetected Windows PC license — maintained after BattlEye anti-cheat patches. This is the pillar guide for tarkov cheats in 2026.',
		imageAlt: "Tarkov Cheats product page — ESP, aimbot, and radar",
		galleryTitle: 'Tarkov cheats gallery — ESP, Aimbot, wallhack',
		ctaPrimary: 'Buy Tarkov Cheats',
		ctaSecondary: 'See undetected guide',
		ctaSecondaryHref: '/tarkov-cheats/',
		sections: [
			section(
				'What Tarkov cheats include in 2026',
				'Players searching for Tarkov cheats usually want visibility and combat tools without stacking separate downloads. Tarkov Cheats bundles player ESP wallhack, loot markers, 2D radar overlays, and configurable Aimbot in one maintained package — the same toolkit often called tarkov cheats.',
				'Coverage spans raid and scav-run with in-client toggles for live matches. Monthly ($35) and lifetime ($150) licenses unlock the full stack.',
				`Official game updates come from ${EXT.tarkov}; our hacks package tracks those releases via the <a href="/updates/">Updates page</a>. Cross-check platform health on ${EXT.status} before patch-day queues.`,
			),
			section(
				'How this Tarkov cheats pillar fits nearby pages',
				'Use this pillar for the core product overview. For year-specific buying notes, see the <a href="/tarkov-cheats/">tarkov cheats 2026</a> and <a href="/tarkov-cheats/">Tarkov cheats</a> pages cover buyer comparisons in cheats wording.',
				'Deep-dive modules: <a href="/tarkov-esp/">Tarkov ESP</a>, <a href="/tarkov-aimbot/">Tarkov Aimbot</a>, <a href="/tarkov-esp/">wallhack</a>, <a href="/tarkov-radar-hack/">radar hack</a>, and <a href="/tarkov-aimbot/">soft aim</a>.',
				'Blog guides: <a href="/blog/cosmo/">vs Cosmo Cheats</a>, <a href="/blog/phoenix/">vs Phoenix</a>, and <a href="/blog/compare/">compare cheat sites</a>.',
			),
			section(
				'Tarkov cheats vs single-feature tools',
				'Standalone hacks often cover only wallhack or only aim assist. Tarkov Cheats maps the full raid loop: read enemy squads, track bosses and containers, spot flanks on radar, and tune Aimbot per weapon class.',
				'Compare the <a href="/tarkov-esp/">ESP</a>, <a href="/tarkov-aimbot/">Aimbot</a>, and <a href="/features/">Features</a> pages — or review <a href="/pricing/">Pricing</a> for monthly and lifetime licenses.',
				'Related landings: <a href="/setup/">cheat download</a>, <a href="/tarkov-cheats/">mod menu</a>, <a href="/tarkov-aimbot/">aimbot</a>, <a href="/tarkov-esp/">ESP</a>.',
			),
			section(
				'Undetected Tarkov cheats with BattlEye maintenance',
				'Undetected Tarkov cheats require rebuilds after BattlEye anti-cheat and major Tarkov patches. Check Updates before queueing — maintenance notes confirm when a new build is live. No package can promise permanent undetected status.',
				`See ${EXT.battleye} for anti-cheat background and our <a href="/updates/">BattlEye bypass guide</a> for the practical workflow. Pair with <a href="/tarkov-cheats/">undetected Tarkov cheats</a> for status language buyers expect.`,
				'Digital delivery runs after checkout for Windows 10 and 11 PCs worldwide. After purchase, follow <a href="/setup/">Setup</a> and keep <a href="/support/">Support</a> ready with your order ID.',
			),
		],
	},
	'cheat-download': {
		title: 'Tarkov Hack Download 2026 | Instant Access',
		description:
			'Tarkov cheat download with instant license delivery — ESP boxes, soft aim, and radar for Windows PC. Buy, activate, and play.',
		h1: 'Tarkov Hack Download — Instant License Delivery',
		intro:
			'How Tarkov cheat download works for Tarkov — digital license delivery after payment confirmation, with ESP wallhack, radar hack, and Aimbot access on Windows PC.',
		imageAlt: "Tarkov Cheats download and install delivery flow",
		galleryTitle: 'Tarkov cheat download visuals',
		ctaPrimary: 'Buy Tarkov Cheats',
		ctaSecondary: 'Setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'How Tarkov cheat download delivery works',
				'After checkout confirms payment, Tarkov Cheats license details arrive digitally by email. No physical shipment — access begins once activation instructions are delivered.',
				'Keep your order confirmation and license email ready for the <a href="/setup/">Setup guide</a> and Support requests.',
				`If Battlestate Games services are down, check ${EXT.status} before assuming a download failure.`,
			),
			section(
				'What your download unlocks',
				'Every Tarkov cheat download includes player ESP wallhack, loot and container markers, 2D radar overlays, Aimbot profiles, and in-client toggles for PMC raids and scav-runs.',
				'Monthly ($35) and lifetime ($150) plans share the same feature stack — compare options on the <a href="/pricing/">Pricing page</a>.',
				'Feature detail: <a href="/features/">Features</a>. Module pages: <a href="/tarkov-esp/">ESP</a>, <a href="/tarkov-aimbot/">Aimbot</a>.',
			),
			section(
				'After purchase — setup and updates',
				'Follow Setup to activate ESP wallhack and Aimbot on Windows 10 or 11. When Tarkov or BattlEye anti-cheat patches ship, check the <a href="/updates/">Updates page</a> for maintenance rebuilds.',
				'Contact <a href="/support/">Support</a> with your order ID if delivery or activation fails within 24 hours of purchase.',
				'Also read <a href="/tarkov-cheats/">undetected status</a> so you know what “download ready” means after a patch.',
			),
		],
	},
	'mod-menu': {
		title: 'Tarkov Mod Menu 2026 | ESP & Soft Aim Toggles',
		description:
			'Tarkov mod menu for in-match toggles — ESP boxes, soft aim, radar, and on Windows PC. Undetected tarkov cheats package.',
		h1: 'Tarkov Mod Menu — In-Client Control Panel',
		intro:
			'Tarkov mod menu controls for Tarkov — toggle ESP wallhack categories, radar range, and Aimbot profiles mid-match without leaving your Tarkov session on Windows PC.',
		imageAlt: "Tarkov Cheats in-game menu controls",
		galleryTitle: 'Tarkov mod menu gallery',
		ctaPrimary: 'Buy Tarkov Cheats',
		ctaSecondary: 'Full feature list',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What a Tarkov mod menu controls',
				'A Tarkov mod menu is the in-client panel where you enable ESP wallhack overlays, adjust radar range, and switch Aimbot profiles during live matches. Tarkov Cheats keeps those toggles accessible with hotkeys.',
				'Toggle player outlines, loot markers, vehicle cues, and per-weapon Aimbot settings without alt-tabbing out of Tarkov.',
				'Control deep-dives: <a href="/tarkov-esp/">ESP</a>, <a href="/tarkov-aimbot/">Aimbot</a>, <a href="/tarkov-radar-hack/">radar</a>.',
			),
			section(
				'Mod menu categories for PMC raids and scav-runs',
				'Separate ESP wallhack categories for players, loot, containers, and bosses let you reduce overlay noise during rotations and extract holds.',
				'Radar hack range and Aimbot smoothness adjust from the same mod menu — useful when ${EXT.tarkov} seasons change fight distances and mobility.',
				'Soft tracking players should start with <a href="/tarkov-aimbot/">soft aim</a> profiles before aggressive FOV.',
			),
			section(
				'Maintained mod menu after BattlEye patches',
				'Tarkov mod menu behavior is rebuilt when BattlEye anti-cheat or major Tarkov updates land. Follow the <a href="/updates/">Updates page</a> and <a href="/updates/">BattlEye bypass guide</a> before queueing on patch days.',
				'Checkout with instant digital delivery for monthly and lifetime licenses — see <a href="/pricing/">Pricing</a>.',
				'Need install steps? Open <a href="/setup/">Setup</a> after your license email arrives.',
			),
		],
	},
	'soft-aim': {
		title: 'Tarkov Soft Aim 2026 | Smooth Aimbot Settings',
		description:
			'Tarkov soft aim settings for natural tracking on Windows PC. Smoothness, FOV, and bone priority — included in our tarkov cheats with ESP boxes.',
		h1: 'Tarkov Soft Aim — Smooth Aimbot Controls',
		intro:
			'Tarkov soft aim settings for Tarkov — configurable Aimbot smoothness, FOV, bone priority, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: "Tarkov soft aim FOV and smoothness settings",
		galleryTitle: 'Tarkov soft aim gallery',
		ctaPrimary: 'Buy Tarkov Cheats',
		ctaSecondary: 'Aimbot controls',
		ctaSecondaryHref: '/tarkov-aimbot/',
		sections: [
			section(
				'What Tarkov soft aim means',
				'Tarkov soft aim refers to Aimbot behavior tuned for smooth, natural-looking tracking rather than instant snap. Tarkov Cheats exposes smoothness, FOV, and sensitivity sliders so you control how assist feels in BR firefights.',
				'Bone priority and target selection cover closest player, lowest health, or highest-threat targets during squad fights.',
				'Full Aimbot documentation: <a href="/tarkov-aimbot/">Tarkov Aimbot</a>. Alternate wording: <a href="/tarkov-aimbot/">aimbot hack</a>.',
			),
			section(
				'Soft aim profiles per weapon class',
				'Save separate soft aim profiles for ARs, SMGs, and bolt-actions. Switch between long-range AR beams and close-quarters room clears with hotkeys mid-match.',
				`Weapon TTKs shift with ${EXT.tarkov} balance patches — retune smoothness after major combat updates.`,
				'Soft aim ships alongside <a href="/tarkov-esp/">ESP wallhack</a> and <a href="/tarkov-radar-hack/">2D radar</a> overlays.',
			),
			section(
				'Undetected soft aim with BattlEye maintenance',
				'Aimbot modules rebuild after BattlEye anti-cheat patches. Check the <a href="/updates/">Updates page</a> before queueing — responsible settings and maintenance awareness matter for undetected play.',
				'Monthly and lifetime licenses checkout with digital delivery on Windows PC — <a href="/pricing/">Pricing</a>.',
				'Activation help: <a href="/setup/">Setup</a> · status questions: <a href="/support/">Support</a>.',
			),
		],
	},
	'best-cheats': {
		title: 'Best Tarkov Cheats 2026 | Buyer Guide',
		description:
			'Best tarkov cheats for 2026: ESP boxes, soft aim, and BattlEye maintenance on Windows PC. Use this checklist before checkout.',
		h1: 'Best Tarkov Cheats — 2026 Buyer Guide',
		intro:
			'Compare the Tarkov cheats for Tarkov in 2026 — undetected ESP wallhack, radar hack, and Aimbot in one maintained package with BattlEye anti-cheat rebuilds and instant delivery.',
		imageAlt: "Tarkov Cheats overview for Escape from Tarkov on PC",
		galleryTitle: 'Best Tarkov cheats gallery',
		ctaPrimary: 'Buy Tarkov Cheats',
		ctaSecondary: 'Compare pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'What makes the Tarkov cheats in 2026',
				'The Tarkov cheats combine active BattlEye maintenance, a full ESP wallhack and radar stack, configurable Aimbot, and clear update communication — not a stale build from a prior season.',
				'Tarkov Cheats covers raid and scav-run with in-client toggles and post-patch rebuilds.',
				`Verify the live game is healthy via ${EXT.status}, then confirm our <a href="/updates/">Updates</a> note before you judge any package “best.”`,
			),
			section(
				'Best Tarkov cheats feature checklist',
				'Look for player ESP wallhack, loot markers, 2D radar overlays, Aimbot profiles, hotkey toggles, and documented maintenance after Tarkov patches.',
				'Review <a href="/features/">Features</a>, <a href="/tarkov-cheats/">undetected status</a>, and <a href="/tarkov-cheats/">Tarkov cheats 2026</a> before checkout — monthly ($35) and lifetime ($150) plans available.',
				'Module pages worth opening: <a href="/tarkov-esp/">ESP</a>, <a href="/tarkov-aimbot/">Aimbot</a>, <a href="/tarkov-cheats/">hacks</a>.',
			),
			section(
				'Buying the Tarkov cheats safely',
				'Purchase through secure checkout for instant digital delivery. Read Setup, FAQ, and Updates pages before your first queue — and contact Support with order details if activation needs help.',
				'No cheat guarantees permanent undetected status — combine maintenance with responsible in-game settings.',
				`Remember: using cheats can violate Battlestate Games terms. Proceed only if you accept that risk.`,
			),
		],
	},
	'aimbot-hack': {
		title: 'Tarkov Aimbot Hack 2026 | Soft Aim Assist',
		description:
			'Tarkov aimbot hack with soft aim for Windows PC. FOV, bone priority, and hotkeys — bundled with ESP boxes in our tarkov cheats package.',
		h1: 'Tarkov Aimbot Hack — Soft Aim Assist',
		intro:
			'Tarkov aimbot hack tools for Tarkov — smoothness, FOV, bone priority, per-weapon profiles, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: "Tarkov aimbot hack controls and bone priority",
		galleryTitle: 'Tarkov aimbot hack gallery',
		ctaPrimary: 'Buy Tarkov Cheats',
		ctaSecondary: 'Aimbot settings',
		ctaSecondaryHref: '/tarkov-aimbot/',
		sections: [
			section(
				'Tarkov aimbot hack vs visibility tools',
				'A Tarkov aimbot hack focuses on assisted targeting during firefights — while ESP wallhack and radar handle map awareness. Tarkov Cheats bundles aimbot hack modules with visibility overlays in one license.',
				'Smoothness, FOV, and sensitivity controls tune assist for Tarkov combat pace across PMC raids and scav-runs.',
				'Prefer softer tracking language? See <a href="/tarkov-aimbot/">soft aim</a>. Full settings: <a href="/tarkov-aimbot/">Aimbot page</a>.',
			),
			section(
				'Aimbot hack controls and hotkeys',
				'Bone priority options cover head, chest, or dynamic targets. Hotkeys enable or disable aimbot hack mid-match without opening menus during rotations or late-raid extracts.',
				'Per-weapon profile slots separate long-range AR tuning from close-quarters SMG settings.',
				`Balance patches from ${EXT.tarkov} can change ideal FOV — retune after major weapon updates.`,
			),
			section(
				'Undetected aimbot hack maintenance',
				'Aimbot hack signatures rebuild after BattlEye anti-cheat updates. Follow the <a href="/updates/">Updates page</a> and <a href="/updates/">BattlEye bypass guide</a> before queueing after patch days.',
				'Checkout with instant digital delivery for Windows 10 and 11 — <a href="/pricing/">Pricing</a>.',
				'Pair with <a href="/tarkov-esp/">ESP</a> for the full information + assist loop.',
			),
		],
	},
	'esp-hack': {
		title: 'Tarkov ESP Hack 2026 | Player Boxes & Loot',
		description:
			'Tarkov ESP hack with player boxes and loot markers for Windows PC. Undetected tarkov cheats with — see overlays and buy.',
		h1: 'Tarkov ESP Hack — Player Boxes Guide',
		intro:
			'Tarkov ESP hack overlays for Tarkov — player outlines, boss threat cues, loot and container markers with distance readouts across raid and scav-run.',
		imageAlt: "Tarkov ESP hack boxes and loot markers",
		galleryTitle: 'Tarkov ESP hack gallery',
		ctaPrimary: 'Buy Tarkov Cheats',
		ctaSecondary: 'ESP controls',
		ctaSecondaryHref: '/tarkov-esp/',
		sections: [
			section(
				'What a Tarkov ESP hack shows',
				'A Tarkov ESP hack renders enemy player outlines, vehicle positions, and loot pins through walls and terrain — closing the information gap before you commit to a fight.',
				'Distance readouts and snapline options help control engagement range during squad pushes and third-party scenarios.',
				'Canonical visibility guide: <a href="/tarkov-esp/">Tarkov ESP</a>. Wallhack wording: <a href="/tarkov-esp/">wallhack</a>.',
			),
			section(
				'ESP hack categories for raids',
				'Toggle player ESP hack, loot markers, chest pins, and vehicle cues independently so only raid-critical overlays stay active during rotations.',
				'Team and enemy colour coding supports PMC raids and scav-runs.',
				`POI and loot changes publish through ${EXT.activision} — keep categories toggled to what the current map rewards.`,
			),
			section(
				'Undetected ESP hack with BattlEye maintenance',
				'ESP hack modules rebuild after BattlEye anti-cheat and Tarkov patches. Check the <a href="/updates/">Updates page</a> before queueing — pair ESP hack awareness with <a href="/tarkov-radar-hack/">radar hack</a> for flank reads.',
				'Licenses deliver digitally after checkout on Windows PC — see <a href="/pricing/">Pricing</a>.',
				'Install steps: <a href="/setup/">Setup</a>. Status questions: <a href="/tarkov-cheats/">undetected guide</a>.',
			),
		],
	},
	'unlock-all': {
		title: 'Tarkov Unlock All 2026 | What It Really Means',
		description:
			'Tarkov unlock all explained vs real tarkov cheats — ESP boxes, soft aim, and radar for Windows PC. Know what you are buying.',
		h1: 'Tarkov Unlock All — What Players Search For',
		intro:
			'Tarkov unlock all is a common search term for Tarkov — this page clarifies what unlock-all tools claim versus the ESP wallhack, radar hack, and Aimbot tools Tarkov Cheats actually provides on Windows PC.',
		imageAlt: "Tarkov Cheats license features overview",
		galleryTitle: 'Tarkov unlock all guide visuals',
		ctaPrimary: 'Buy Tarkov Cheats',
		ctaSecondary: 'See features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What Tarkov unlock all usually means',
				'Tarkov unlock all searches often refer to instant access to weapons, camos, skins, or battle pass tiers. Those claims differ from visibility and combat-assist tools like ESP wallhack and Aimbot.',
				'Tarkov Cheats focuses on in-match awareness — player ESP, loot markers, radar overlays, and configurable Aimbot — not account-wide cosmetic unlocks.',
				`Cosmetics and wipe progression items are sold through ${EXT.tarkov}. Be wary of unlock-all downloads that promise free skins — they are often scams.`,
			),
			section(
				'Visibility tools vs unlock-all claims',
				'ESP wallhack helps you spot enemy squads, bosses, and high-value loot during live matches. Radar hack adds flank awareness; Aimbot covers combat assist with smoothness and hotkey controls.',
				'For loadout planning during a match, loot and container markers speed map rotations — see the <a href="/tarkov-esp/">ESP</a> and <a href="/features/">Features</a> pages for the full tool list.',
				'Related: <a href="/tarkov-cheats/">Tarkov cheats</a> and <a href="/tarkov-cheats/">Tarkov cheats</a>.',
			),
			section(
				'Buying Tarkov Cheats for the right reasons',
				'If you need undetected ESP wallhack, radar hack, and Aimbot for Tarkov on Windows PC, compare <a href="/pricing/">Pricing</a> and read the <a href="/setup/">Setup guide</a> before checkout.',
				'Check the <a href="/updates/">Updates page</a> after BattlEye anti-cheat patches — maintenance rebuilds publish for active licenses.',
				'Questions? <a href="/faq/">FAQ</a> and <a href="/support/">Support</a> cover delivery and configuration — not cosmetic unlocks.',
			),
		],
	},
	privacy: {
		title: 'Privacy Policy | Tarkov Cheats',
		description:
			'Privacy policy for Tarkov Cheats. How we handle support emails, order data, and checkout for tarkov cheats licenses on tarkovcheats.org.',
		h1: 'Privacy Policy',
		intro: 'How Tarkov Cheats handles information when you browse tarkovcheats.org or contact support about a Tarkov license.',
		imageAlt: "Tarkov Cheats privacy policy page",
		galleryTitle: 'Tarkov Cheats legal resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read terms of use',
		ctaSecondaryHref: '/terms/',
		sections: [
			section(
				'Information we may collect',
				'We may collect contact details you send by email, order references needed to resolve support requests, and basic technical data used to operate and secure the website.',
				'We do not sell personal data. Checkout payment details are processed by the checkout provider — review their privacy terms for transaction data.',
				['Contact details you send by email', 'Order references for support requests', 'Basic technical data for site security'],
			),
			section(
				'How information is used',
				'Information is used to respond to support requests, process order issues, improve site reliability, and meet legal obligations when required.',
				'Analytics may use aggregated traffic data without identifying individual Tarkov Cheats customers.',
			),
			section(
				'Your choices and contact',
				'You may request correction or deletion of support email data by contacting support@tarkovcheats.org with your request details.',
				'Policy updates publish on this page. Continued use of tarkovcheats.org after updates means you accept the revised policy. Also see <a href="/terms/">Terms of Use</a> and <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	refund: {
		title: 'Refund Policy | Tarkov Cheats',
		description:
			'Refund policy for Tarkov Cheats. Digital delivery terms and eligibility for tarkov cheats packages with ESP, soft aim, and radar.',
		h1: 'Refund Policy',
		intro:
			'Refund terms for Tarkov Cheats licenses — ESP wallhack, radar hack, and Aimbot packages purchased through checkout for Tarkov.',
		imageAlt: "Tarkov Cheats refund policy page",
		galleryTitle: 'Tarkov Cheats billing resources',
		ctaPrimary: 'Contact support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Digital delivery and eligibility',
				'Tarkov Cheats licenses deliver digitally after payment confirmation. Because access begins immediately, refunds are limited to cases outlined below.',
				'Submit refund requests within 24 hours of purchase with your order ID and reason.',
			),
			section(
				'When refunds may be approved',
				'Duplicate charges, failed delivery despite confirmed payment, or technical activation failures verified by support may qualify for review.',
				'Refund decisions are final. Chargebacks without contacting support first may result in license revocation. See also <a href="/terms/">Terms of Use</a>.',
			),
			section(
				'How to request a refund',
				'Email support@tarkovcheats.org with subject "Refund Request", your order ID, purchase date, and issue summary — or use the <a href="/support/">Support page</a>.',
				'Approved refunds process back to the original payment method when possible. Pricing details live on <a href="/pricing/">Pricing</a>.',
			),
		],
	},
	terms: {
		title: 'Terms of Use 2026 | Tarkov Cheats Rules',
		description:
			'Terms of use for tarkovcheats.org and Tarkov Cheats licenses. Usage rules, anti-cheat risk, and liability for Windows PC cheats.',
		h1: 'Terms of Use',
		intro: 'Terms governing use of tarkovcheats.org and Tarkov Cheats licenses for Tarkov on Windows PC.',
		imageAlt: "Tarkov Cheats terms of use page",
		galleryTitle: 'Tarkov Cheats legal pages',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Acceptance and license scope',
				'By purchasing or using Tarkov Cheats you agree to these terms. Licenses grant personal use of ESP wallhack, radar, and Aimbot tools for Tarkov on Windows PC only.',
				'Sharing, reselling, or reverse-engineering the package violates these terms and may revoke access.',
			),
			section(
				'Risk and anti-cheat disclaimer',
				`Using cheats in Tarkov may violate Battlestate Games terms and result in account penalties. Tarkov Cheats provides maintenance but does not guarantee undetected status or account safety.`,
				'You assume all risk. We are not liable for bans, data loss, or damages arising from product use. See also <a href="/tarkov-cheats/">undetected status</a>.',
			),
			section(
				'Changes and governing law',
				'We may update these terms by posting revisions on this page. Continued use after changes constitutes acceptance.',
				'Contact support@tarkovcheats.org for questions. Related policies: <a href="/privacy-policy/">Privacy</a> and <a href="/refund-policy/">Refunds</a>.',
			),
		],
	},
};

/** Attach heroImage paths and clamp meta lengths. */
export function finalizePage(pageId, page) {
	return {
		...page,
		title: clampTitle(stripZadeyoFromMeta(page.title)),
		description: clampDesc(stripZadeyoFromMeta(page.description)),
		heroImage: HERO_IMAGES[pageId],
	};
}

export function finalizePages(pages) {
	const out = {};
	for (const [id, page] of Object.entries(pages)) {
		out[id] = finalizePage(id, page);
	}
	return out;
}

export const englishPagesFinal = finalizePages(enPages);
