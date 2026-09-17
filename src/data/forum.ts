/**
 * Discussion for every /forum/ thread — the replies under each opening post.
 *
 * Each thread is CLOSED (read-only, no live commenting). The opening post lives
 * in src/data/blog/posts.generated.ts; the back-and-forth below is keyed by that
 * post's slug so the board and the thread page always agree.
 *
 * Voices:
 *   op     — reuses the thread starter's handle (follow-ups, "solved it", thanks)
 *   staff  — the official support account (accurate product answers)
 *   member — community members. Give two messages the same `as` tag to make them
 *            the same person following up; leave it off for a fresh face.
 *
 * Content is deterministic per thread seed so handles, helpful counts, and view
 * counts are identical every build. Product facts referenced (kept in sync with
 * the site): player ESP, loot ESP, aimbot (FOV, visible check, smart bone,
 * prediction), no recoil / no sway, streamproof overlay, Cloud DMA + HVCI / TPM /
 * Secure Boot, raids only (not Arena), monthly $35 / 31 days, lifetime $150,
 * Windows 10/11, and checking the Updates page after patches.
 */

export type ForumReply = {
	handle: string;
	initial: string;
	body: string;
	helpful: number;
	staff?: boolean;
	op?: boolean;
	solution?: boolean;
};

export type ForumThreadMeta = {
	op: { handle: string; initial: string };
	replyCount: number;
	views: number;
	replies: ForumReply[];
	closed: true;
};

type Msg = {
	who: 'op' | 'staff' | 'member';
	body: string;
	solution?: boolean;
	/** Same tag = same member across the thread. */
	as?: string;
};

const STAFF_HANDLE = 'eftcheat_staff';

/** Believable, low-key community handles (no spam, no brand stuffing). */
const HANDLES = [
	'dorms_diff',
	'exfil_or_die',
	'kappa_grind',
	'scav_karma',
	'labs_keycard',
	'reserve_d2',
	'streets_recoil',
	'woods_afk',
	'factory_gremlin',
	'gpu_hoarder',
	'vis_check_andy',
	'quiet_pmc',
	'night_raider',
	'salty_extract',
	'timmy_nomore',
	'hexgrid',
	'tagilla_l2p',
	'prapor_deal',
	'jaeger_camp',
	'ledx_andy',
	'flea_flipper',
	'thermal_tim',
	'pmc_owl',
	'coldbore',
];

const THREADS: Record<string, Msg[]> = {
	'is-it-worth-it': [
		{ who: 'member', as: 'a', body: 'Wipe three here on lifetime. For raids, yes, worth it. Player ESP alone changed how I play — I leave when a third PMC is on Dorms instead of dying to it. Aimbot I barely touch.' },
		{ who: 'member', as: 'b', body: 'Depends what you want. If you only play Arena, skip it, this is the raids product. For Customs and Interchange loot runs it pays for itself in saved kits.' },
		{ who: 'member', as: 'a', body: 'It does not teach extracts though. I still die when I push a fight I should have walked. That part is on me, not the cheat.' },
		{ who: 'staff', solution: true, body: 'Best tell before you buy: read the <a href="/features/">Features</a> list against the live menu, and check the <a href="/updates/">Updates</a> page has a recent green build. Same package on monthly and lifetime, so you can start monthly and decide.' },
		{ who: 'member', as: 'c', body: 'Started monthly at $35, went lifetime after two wipes once my setup was stable. No regrets. Numbers are on <a href="/pricing/">Pricing</a>.' },
		{ who: 'member', as: 'b', body: 'The streamproof overlay is a nice bonus if you clip. I tested OBS before I posted anything and it is invisible in the file.' },
		{ who: 'member', as: 'd', body: 'One tip — do a Scav run first on a map you know before you take a juiced PMC in. Confirms everything loads.' },
		{ who: 'op', body: 'This is the honest read I wanted. Grabbing monthly to test my rig first, thanks all.' },
		{ who: 'member', as: 'c', body: 'Smart. If it works day one it will keep working — they rebuild after patches instead of vanishing.' },
	],

	'how-does-it-compare': [
		{ who: 'member', as: 'a', body: 'Switched from one that went dark every BattlEye wave. Big difference here is they rebuild and post it on the <a href="/updates/">Updates</a> page instead of ghosting the Discord.' },
		{ who: 'member', as: 'b', body: 'No Lite/Full split, which was my worry too. One package — player ESP, loot ESP, aimbot, no recoil, streamproof. It is all on <a href="/features/">Features</a> and it matches the menu.' },
		{ who: 'member', as: 'a', body: 'The Lite/Full thing burned a friend on another shop. He bought "Lite", wanted ESP, got recoil-only and no loot filters. None of that here.' },
		{ who: 'staff', solution: true, body: 'One SKU. Same player ESP, loot ESP, and aimbot on monthly ($35) and lifetime ($150). Nothing paywalled behind a higher tier, and delivery is instant after checkout.' },
		{ who: 'member', as: 'c', body: 'The buying frame that helped me: compare dates, not logos. Check each shop has a recent rebuild before you pay anywhere.' },
		{ who: 'member', as: 'd', body: 'Marketplaces are the sketchy ones — you are trusting a random seller listing, not one maintained build. That is why I moved here.' },
		{ who: 'op', body: 'That is the reassurance I needed — one package and actual rebuilds. Switching over.' },
		{ who: 'member', as: 'b', body: 'You will be fine. Just wait for green after patches like everyone else and you are set.' },
	],

	'esp-not-showing-in-raid': [
		{ who: 'member', as: 'a', body: 'Classic first-launch thing. Overlay drawing but no boxes usually means the DMA layer is not fully up. Did you enable HVCI, TPM and Secure Boot in BIOS?' },
		{ who: 'op', body: 'Windows shows Core Isolation on. I have not actually gone into BIOS though.' },
		{ who: 'member', as: 'a', body: 'That is the trap — Windows can say on while firmware is off. Turn it on in BIOS itself, then reboot.' },
		{ who: 'staff', solution: true, body: 'Empty ESP on a green status is almost always Cloud DMA requirements. Enable HVCI, TPM and Secure Boot in BIOS, reboot, then launch in the order on the <a href="/setup/">Setup</a> page. Cloud DMA is required for the full feature set.' },
		{ who: 'member', as: 'b', body: 'Also kill other overlays while you test — RTSS, GeForce, Discord. They can fight the streamproof layer on first run.' },
		{ who: 'op', body: 'Secure Boot was off in BIOS even though Windows said on. Enabled it, rebooted, boxes are drawing now.' },
		{ who: 'member', as: 'a', body: 'Every time. Glad it was that and not a patch.' },
		{ who: 'member', as: 'c', body: 'For future — if ESP ever goes empty after a game update, check <a href="/updates/">Updates</a> first. Empty boxes on a yellow day is the build, not your setup.' },
		{ who: 'staff', body: 'Right. If it is green and still empty after the BIOS steps, open a <a href="/support/">Support</a> ticket with your order ID and we will walk it live.' },
	],

	'how-do-i-get-access': [
		{ who: 'member', as: 'a', body: 'Checkout is instant. You pay, you get access right away — key and download show in your account. No waiting around.' },
		{ who: 'staff', solution: true, body: 'Use Get Access on the site, complete checkout, and delivery is instant. Keep your order ID for <a href="/support/">Support</a>. This is the raids license for Windows PC.' },
		{ who: 'member', as: 'b', body: 'Make sure you are buying the raids product and not an Arena listing from somewhere else. The <a href="/pricing/">Pricing</a> page here is the right one.' },
		{ who: 'op', body: 'So one checkout covers the whole package, not add-ons for ESP and aimbot separately?' },
		{ who: 'member', as: 'a', body: 'One package. ESP, loot ESP, aimbot, no recoil, streamproof — all included. Full list on <a href="/features/">Features</a>.' },
		{ who: 'member', as: 'c', body: 'First thing after you get access: do the <a href="/setup/">Setup</a> steps and a Scav run to confirm it loads before a real raid.' },
		{ who: 'op', body: 'Bought, key showed up instantly. Doing setup now, thanks everyone.' },
	],

	'how-much-does-it-cost': [
		{ who: 'member', as: 'a', body: '$35 for 31 days, $150 lifetime last I checked. Same features on both — the only difference is how long access lasts.' },
		{ who: 'staff', solution: true, body: 'Monthly is $35 / 31 days, lifetime is a one-time $150 for ongoing access to the maintained build. Same player ESP, loot ESP and aimbot on both. Live numbers on <a href="/pricing/">Pricing</a>.' },
		{ who: 'member', as: 'b', body: 'If you play on and off, start monthly. No downside since the feature set is identical.' },
		{ who: 'op', body: 'Is lifetime actually lifetime, or does it quietly turn into a sub?' },
		{ who: 'staff', body: 'One-time payment, no recurring charge. Monthly is the subscription option if you would rather test first.' },
		{ who: 'member', as: 'c', body: 'Bought lifetime last year, still getting rebuilds after patches. Paid for itself vs re-subbing every wipe.' },
		{ who: 'member', as: 'a', body: 'Math for me: about two wipes of monthly equals lifetime, so if you stay past that, lifetime wins.' },
		{ who: 'op', body: 'Starting monthly this wipe, will go lifetime if my rig stays stable. Thanks.' },
	],

	'system-requirements': [
		{ who: 'member', as: 'a', body: 'Single Windows 11 PC is fine. You do not need a second machine or a physical DMA card — the "Cloud DMA" name throws people.' },
		{ who: 'staff', solution: true, body: 'Requirements: Windows 10/11 with Escape from Tarkov from the launcher, and HVCI + TPM + Secure Boot enabled in BIOS. Cloud DMA is included, not extra hardware you buy.' },
		{ who: 'op', body: 'Oh good. I read "DMA" and assumed I needed a second PC and a capture card.' },
		{ who: 'member', as: 'b', body: 'Common mix-up. Physical DMA is a two-PC setup. This is different and runs on your one gaming rig.' },
		{ who: 'member', as: 'a', body: 'Just make sure Secure Boot is on in BIOS or the menu comes up greyed out. There is a whole <a href="/forum/menu-greyed-out/">grey menu</a> thread if that happens.' },
		{ who: 'staff', body: 'Full steps are on the <a href="/setup/">Setup</a> page. If anything is unclear before you buy, ask <a href="/support/">Support</a>.' },
		{ who: 'op', body: 'Perfect, one PC it is. Thanks for clearing that up.' },
	],

	'loot-esp-too-cluttered': [
		{ who: 'member', as: 'a', body: 'Set a Minimal Price floor — I run about 60k. Instantly cuts the bandages and bolts and Interchange becomes readable.' },
		{ who: 'member', as: 'b', body: 'Also turn on "Ignore not Selected Items" and use the Loot Filter presets. You can color the valuable categories too.' },
		{ who: 'staff', solution: true, body: 'Set a loot price floor, enable the item filter, and toggle Containers / Stash / Dead Body separately. Add a Draw Distance so far junk does not clutter the screen. Full option list is on <a href="/features/">Features</a>.' },
		{ who: 'op', body: 'Where is the price floor — under loot settings?' },
		{ who: 'member', as: 'a', body: 'Yeah, loot section, Minimal Price. Bump it to 60-80k for late wipe when everyone is rich.' },
		{ who: 'member', as: 'c', body: 'Save it as a preset so you do not redo it every session. I keep one for Interchange and one for Labs.' },
		{ who: 'op', body: 'Floor at 60k plus a preset fixed it. Mall runs are so much cleaner now, thanks.' },
		{ who: 'member', as: 'b', body: 'For Labs raise the floor higher — the cheap stuff is just noise in there.' },
	],

	'best-aimbot-settings': [
		{ who: 'member', as: 'a', body: 'Drop FOV to around 50, turn on Visible Check and Smart Bone, add a little prediction. Killcams look night-and-day cleaner.' },
		{ who: 'member', as: 'b', body: 'Cap Max Aimbot Distance too so it is not snapping across the map. That is what makes clips look obvious.' },
		{ who: 'staff', solution: true, body: 'Small FOV (40-60), Visible Check on so you only lock players who can see you, Smart Bone, and light prediction. Save it under the Config System so you do not retune every session.' },
		{ who: 'op', body: 'Do you run it always-on or hold-to-aim?' },
		{ who: 'member', as: 'a', body: 'Hold-to-aim, always. Always-on is how people get clipped and reported.' },
		{ who: 'member', as: 'c', body: 'Add a tiny bit of bone trembling if you record. Removes the perfect-lock look.' },
		{ who: 'op', body: '50 FOV + visible check + smart bone on a hold key — feels legit now. Thanks.' },
		{ who: 'member', as: 'b', body: 'Pair it with sane no recoil, not maxed. There is a good thread on that: <a href="/forum/no-recoil-settings/">no recoil settings</a>.' },
	],

	'wallhack-and-chams': [
		{ who: 'member', as: 'a', body: 'Box + distance + visible check for me. Skeleton on close maps like Factory, chams off — too distracting in a fight, like you said.' },
		{ who: 'member', as: 'b', body: 'Chams look great in screenshots and terrible when you actually need to shoot. I keep them off.' },
		{ who: 'staff', solution: true, body: 'Run boxes + the health/armor readout + Visible Check for general play. Skeleton helps at close range and chams are optional. Tune colors and draw distance so it stays readable.' },
		{ who: 'op', body: 'Does visible check hide people who cannot see me?' },
		{ who: 'member', as: 'a', body: 'It flags who actually has line of sight on you, so you react to real threats instead of the whole map.' },
		{ who: 'member', as: 'c', body: 'On Factory I run skeleton plus a short draw distance. Anything past 40m is noise in there.' },
		{ who: 'op', body: 'Boxes + visible check + skeleton on Factory it is. Way cleaner, thanks.' },
	],

	'safe-to-play-after-a-patch': [
		{ who: 'member', as: 'a', body: 'Wait for the green rebuild note. Do not queue on patch morning — that is how people get caught in a wave.' },
		{ who: 'staff', solution: true, body: 'After a game or BattlEye patch, wait for the rebuild note on the <a href="/updates/">Updates</a> page. If it is not green, do not load in. Undetected means maintained, not a forever promise.' },
		{ who: 'op', body: 'How long do rebuilds usually take after a big BattlEye wave?' },
		{ who: 'staff', body: 'We post status as soon as the build is verified — check the Updates page rather than guessing from Discord chatter.' },
		{ who: 'member', as: 'b', body: 'Queued early on a yellow day once. Regretted it. Updates page first, every time now.' },
		{ who: 'member', as: 'a', body: 'Patience is the only real cost on lifetime. No shop refunds BattlEye downtime, they just rebuild.' },
		{ who: 'op', body: 'Green now, ran two raids, no issues. Thanks.' },
	],

	'does-it-work-in-arena': [
		{ who: 'staff', solution: true, body: 'This license is for main Tarkov raids on Windows PC. Arena needs a separate product — do not buy this expecting both.' },
		{ who: 'member', as: 'a', body: 'Learned this the hard way on another shop. Raids key is raids only. Arena is its own thing everywhere.' },
		{ who: 'op', body: 'Good to know before I bought the wrong thing. So everything here is raids-focused?' },
		{ who: 'member', as: 'b', body: 'Yeah — player ESP, loot ESP and aimbot are all tuned for raids. Arena maps are not covered.' },
		{ who: 'member', as: 'a', body: 'If Arena is your main mode, this is not the product for you. If you do raids too, it is great for that half.' },
		{ who: 'op', body: 'I do mostly raids so that is fine. Thanks for saving me a wrong purchase.' },
	],

	'cloud-dma-setup': [
		{ who: 'member', as: 'a', body: 'Cloud DMA is not a physical card or a second PC. It runs on your one rig. The name confuses everyone at first.' },
		{ who: 'staff', solution: true, body: 'Cloud DMA is required for the full feature set and is included. Enable HVCI, TPM and Secure Boot in BIOS, reboot, and launch in the order on the <a href="/setup/">Setup</a> page. That is what fixes the half-grey menu.' },
		{ who: 'op', body: 'So the half-grey menu on first launch was just BIOS settings?' },
		{ who: 'member', as: 'a', body: 'Almost always. Mine looked fine in Windows but Secure Boot was off in firmware. Turned it on and everything went live.' },
		{ who: 'member', as: 'b', body: 'Do not skip the launch order either. Out-of-order launch is the other common cause of a partial menu.' },
		{ who: 'op', body: 'Enabled Secure Boot + TPM in BIOS, launched in order, full menu now. Cloud DMA makes sense, thanks.' },
		{ who: 'member', as: 'c', body: 'If it is still partial after that, it is a <a href="/support/">Support</a> ticket, not a reinstall. They will walk it with you.' },
	],

	'no-recoil-settings': [
		{ who: 'member', as: 'a', body: 'Situational, not maxed. Full on for Factory hallways, dial it back on Shoreline long range or it looks off.' },
		{ who: 'staff', solution: true, body: 'Run no recoil light on full-auto, off or low for bolt guns, and no sway moderate. Save the profile under the Config System so it survives a rebuild.' },
		{ who: 'member', as: 'b', body: 'Maxed no recoil plus a wide FOV is exactly how clips end up looking fake. Keep it subtle.' },
		{ who: 'op', body: 'So not 100% on everything?' },
		{ who: 'member', as: 'a', body: 'Nope. I run maybe 70% recoil reduction and a bit of no sway. Still controllable, still looks human.' },
		{ who: 'member', as: 'c', body: 'Instant ADS is the sleeper toggle for me, more than maxing recoil.' },
		{ who: 'op', body: 'Dialed it to about 70% plus light sway. Controllable without looking silly. Thanks.' },
	],

	'is-radar-worth-it': [
		{ who: 'member', as: 'a', body: 'Radar is great for reading third parties early. On-screen ESP is tunnel-vision — the radar shows the whole map at a glance.' },
		{ who: 'staff', solution: true, body: 'Distance and directional arrows are already in the on-screen ESP, so try those first. The radar helps most on open maps like Woods and Shoreline for tracking flanks.' },
		{ who: 'op', body: 'Ah, I did not have arrows on. Might not need a full radar then.' },
		{ who: 'member', as: 'b', body: 'Arrows plus the OOF indicators saved me from so many Customs third-parties. Start there.' },
		{ who: 'member', as: 'a', body: 'I still like the radar on Interchange to see who is heading to the same loot. Personal preference.' },
		{ who: 'op', body: 'Turning on arrows and OOF first, then I will try radar on Woods. Thanks.' },
	],

	'menu-greyed-out': [
		{ who: 'member', as: 'a', body: 'Grey menu means HVCI / Core Isolation reads on in Windows but off in BIOS. Enable it in firmware and reboot.' },
		{ who: 'staff', solution: true, body: 'A greyed menu with a working overlay is almost always HVCI or Secure Boot off in BIOS. Turn on HVCI, TPM and Secure Boot, reboot, then relaunch in the order on <a href="/setup/">Setup</a>. Cloud DMA needs those on.' },
		{ who: 'op', body: 'Windows definitely says Core Isolation is on though.' },
		{ who: 'member', as: 'a', body: 'That is the exact trap. Windows says on, firmware is off. Check BIOS directly.' },
		{ who: 'member', as: 'b', body: 'Also make sure Secure Boot is actually enabled, not just supported — different line in most BIOS.' },
		{ who: 'op', body: 'Secure Boot was off in BIOS. Enabled it, rebooted, every toggle went live. Thank you.' },
		{ who: 'member', as: 'c', body: 'Bookmark this for the next new buyer — it is the number one first-launch issue.' },
	],

	'order-not-delivered': [
		{ who: 'member', as: 'a', body: 'Delivery is instant for me every time. Check your account page and the email you used at checkout — the key usually shows there first.' },
		{ who: 'staff', solution: true, body: 'Delivery is instant after checkout. If the payment cleared but you do not see access, do not re-pay — open a <a href="/support/">Support</a> ticket with your order ID and we will release it fast.' },
		{ who: 'op', body: 'Found the confirmation email but no key in it yet. Card was definitely charged.' },
		{ who: 'staff', body: 'Send that order ID via Support. Sometimes a payment sits "pending" on the processor side and we push it manually within a short window.' },
		{ who: 'member', as: 'b', body: 'Happened to me once on a card. Support sorted it in about 20 minutes. Do not buy again, just ticket it.' },
		{ who: 'op', body: 'Ticketed with the order ID and they released access. All good now, thanks.' },
		{ who: 'member', as: 'a', body: 'Glad it sorted. Keep that order ID saved for any future support stuff.' },
	],

	'is-it-undetected': [
		{ who: 'member', as: 'a', body: 'Nothing is ever 100%, but the difference here is they maintain it — take it down and rebuild after BattlEye instead of leaving it live and risky.' },
		{ who: 'staff', solution: true, body: 'Undetected means we pull and rebuild when the game or BattlEye patches. Only load on a green <a href="/updates/">Updates</a> status and do not play patch-day. That is how you keep risk low.' },
		{ who: 'op', body: 'So the main risk is playing before a rebuild?' },
		{ who: 'member', as: 'b', body: 'Pretty much. Most bans people blame on the cheat are them queuing on a yellow or patch day.' },
		{ who: 'member', as: 'a', body: 'Also do not be blatant. Wide always-on aimbot in every fight gets you reported by players, which is a different risk than detection.' },
		{ who: 'member', as: 'c', body: 'Use a hold key, small FOV, visible check. See <a href="/forum/best-aimbot-settings/">aimbot settings</a>. Blend in.' },
		{ who: 'op', body: 'Makes sense — wait for green and do not be obvious. Thanks for the straight answer.' },
	],

	'streamproof-on-obs': [
		{ who: 'member', as: 'a', body: 'Yes, streamproof. ESP and menus stay off OBS and most capture tools. I record for a small group and it is clean in the file.' },
		{ who: 'staff', solution: true, body: 'The streamproof overlay is included, not an add-on. It stays off OBS Game Capture and Discord streams. Test your own OBS before you post anything — capture mode is a setting, so confirm it.' },
		{ who: 'op', body: 'Game capture specifically? That is what I use.' },
		{ who: 'member', as: 'a', body: 'Game capture confirmed clean here. Overlay only on my screen, invisible in the recording.' },
		{ who: 'member', as: 'b', body: 'Do a 30-second test clip every time you change OBS settings. Trust your own capture, not a forum promise.' },
		{ who: 'op', body: 'Recorded a test raid — overlay is invisible in the file. Perfect, thanks.' },
		{ who: 'staff', body: 'If a capture tool ever does show it, send your setup to <a href="/support/">Support</a> and we will look.' },
	],
};

/** Fallback discussion if a slug ever has no bespoke script. */
const DEFAULT_THREAD: Msg[] = [
	{ who: 'op', body: 'Anyone got experience with this before I buy?' },
	{ who: 'staff', solution: true, body: 'Read the <a href="/features/">Features</a> list against the live menu and check the <a href="/updates/">Updates</a> page has a recent green build. Same package on monthly and lifetime.' },
	{ who: 'member', as: 'a', body: 'Been on it a couple of wipes. Rebuilds land after patches, so wait for green and you are fine.' },
	{ who: 'op', body: 'Appreciate it, that answers my question.' },
];

/** Small, stable string hash (FNV-1a) for deterministic seeding. */
function hashSeed(input: string): number {
	let hash = 2166136261;
	for (let i = 0; i < input.length; i += 1) {
		hash ^= input.charCodeAt(i);
		hash = Math.imul(hash, 16777619);
	}
	return hash >>> 0;
}

function pickUnique<T>(pool: T[], count: number, seed: number): T[] {
	const target = Math.min(count, pool.length);
	const chosen: T[] = [];
	const used = new Set<number>();
	let cursor = seed >>> 0;
	for (let i = 0; chosen.length < target && i < pool.length * 20; i += 1) {
		cursor = (Math.imul(cursor, 1103515245) + 12345) >>> 0;
		const idx = cursor % pool.length;
		if (used.has(idx)) continue;
		used.add(idx);
		chosen.push(pool[idx]);
	}
	for (let i = 0; chosen.length < target; i += 1) {
		if (!used.has(i)) {
			used.add(i);
			chosen.push(pool[i]);
		}
	}
	return chosen;
}

const initialOf = (handle: string) => handle.charAt(0).toUpperCase();

/**
 * Build the closed thread meta for a given seed + slug.
 * Deterministic: same inputs → same conversation, handles, and counts every build.
 */
export function getThreadMeta(seed: string, slug?: string): ForumThreadMeta {
	const base = hashSeed(seed);
	const script = (slug && THREADS[slug]) || DEFAULT_THREAD;

	// Distinct member identities, in first-seen order.
	const memberKeys: string[] = [];
	script.forEach((msg, i) => {
		if (msg.who !== 'member') return;
		const key = msg.as ?? `anon${i}`;
		if (!memberKeys.includes(key)) memberKeys.push(key);
	});

	const handles = pickUnique(HANDLES, memberKeys.length + 1, base ^ 0x9e3779b9);
	const opHandle = handles[0];
	const handleByKey = new Map<string, string>();
	memberKeys.forEach((key, idx) => handleByKey.set(key, handles[idx + 1] ?? opHandle));

	const replies: ForumReply[] = script.map((msg, i) => {
		let handle: string;
		let staff = false;
		let op = false;
		if (msg.who === 'staff') {
			handle = STAFF_HANDLE;
			staff = true;
		} else if (msg.who === 'op') {
			handle = opHandle;
			op = true;
		} else {
			const key = msg.as ?? `anon${i}`;
			handle = handleByKey.get(key) ?? opHandle;
		}
		const helpfulBase = 3 + ((base >>> (i + 1)) % 30); // 3–32
		return {
			handle,
			initial: initialOf(handle),
			body: msg.body,
			helpful: msg.solution ? helpfulBase + 24 : helpfulBase,
			staff,
			op,
			solution: msg.solution,
		};
	});

	return {
		op: { handle: opHandle, initial: initialOf(opHandle) },
		replyCount: replies.length,
		views: 1200 + (base % 13800), // 1,200–14,999
		replies,
		closed: true,
	};
}
