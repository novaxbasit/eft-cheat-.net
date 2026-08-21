#!/usr/bin/env node
/**
 * One-time: Rainbow Six Siege template → Escape from Tarkov / eftcheat.net
 */
import { readFile, writeFile, readdir, rename } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const RENAME_PAGE_DIRS = [
	['r6-siege-aimbot', 'tarkov-aimbot'],
	['r6-siege-esp', 'tarkov-esp'],
	['r6-siege-wallhack', 'tarkov-wallhack'],
	['r6-siege-radar-hack', 'tarkov-radar-hack'],
	['undetected-r6-siege-cheats', 'undetected-tarkov-cheats'],
	['r6-siege-cheats-2026', 'tarkov-cheats-2026'],
	['r6-siege-cheat-download', 'tarkov-cheat-download'],
	['r6-siege-mod-menu', 'tarkov-mod-menu'],
	['r6-siege-soft-aim', 'tarkov-soft-aim'],
	['best-r6-siege-cheats', 'best-tarkov-cheats'],
	['r6-siege-aimbot-hack', 'tarkov-aimbot-hack'],
	['r6-siege-esp-hack', 'tarkov-esp-hack'],
	['r6-siege-unlock-all', 'tarkov-unlock-all'],
	['r6-siege-cheats', 'tarkov-cheats'],
];

const REPLACEMENTS = [
	['https://r6siegecheats.net', 'https://eftcheat.net'],
	['https://www.r6siegecheats.net', 'https://www.eftcheat.net'],
	['www.r6siegecheats.net', 'www.eftcheat.net'],
	['r6siegecheats.net', 'eftcheat.net'],
	['support@r6siegecheats.net', 'support@eftcheat.net'],
	['/products/rainbow-six-siege', '/products/escape-from-tarkov'],
	['project-name=r6siegecheats', 'project-name=eftcheat'],
	['undetected-r6-siege-cheats', 'undetected-tarkov-cheats'],
	['best-r6-siege-cheats', 'best-tarkov-cheats'],
	['r6-siege-cheat-download', 'tarkov-cheat-download'],
	['r6-siege-cheats-2026', 'tarkov-cheats-2026'],
	['r6-siege-radar-hack', 'tarkov-radar-hack'],
	['r6-siege-aimbot-hack', 'tarkov-aimbot-hack'],
	['r6-siege-esp-hack', 'tarkov-esp-hack'],
	['r6-siege-unlock-all', 'tarkov-unlock-all'],
	['r6-siege-soft-aim', 'tarkov-soft-aim'],
	['r6-siege-mod-menu', 'tarkov-mod-menu'],
	['r6-siege-wallhack', 'tarkov-wallhack'],
	['r6-siege-cheats', 'tarkov-cheats'],
	['r6-siege-aimbot', 'tarkov-aimbot'],
	['r6-siege-esp', 'tarkov-esp'],
	['rainbow-six-siege-cheats', 'escape-from-tarkov-cheats'],
	['linkRainbowSixSiegeCheats', 'linkTarkovCheats'],
	['Rainbow Six Siege Cheats', 'Tarkov Cheats'],
	['Rainbow Six Siege cheats', 'Escape from Tarkov cheats'],
	['Rainbow Six Siege cheat', 'Escape from Tarkov cheat'],
	['Rainbow Six Siege hacks', 'Escape from Tarkov hacks'],
	['Rainbow Six Siege hack', 'Escape from Tarkov hack'],
	['Rainbow Six Siege ESP', 'Escape from Tarkov ESP'],
	['Rainbow Six Siege Aimbot', 'Escape from Tarkov Aimbot'],
	['Rainbow Six Siege Wallhack', 'Escape from Tarkov Wallhack'],
	['Rainbow Six Siege Intel', 'Tarkov Intel'],
	['Rainbow Six Siege', 'Escape from Tarkov'],
	['what-are-r6-siege-cheats', 'what-are-tarkov-cheats'],
	['are-r6-siege-cheats-undetected-in-2026', 'are-tarkov-cheats-undetected-in-2026'],
	['what-is-a-r6-siege-wallhack', 'what-is-a-tarkov-wallhack'],
	['does-r6-siege-cheats-include-stream-proof', 'does-tarkov-cheats-include-stream-proof'],
	['battleye-anti-cheat-and-r6-siege-cheats', 'battleye-anti-cheat-and-tarkov-cheats'],
	['buy-undetected-r6-siege-cheats-windows-pc', 'buy-undetected-tarkov-cheats-windows-pc'],
	['r6-siege-aimbot-review-xkrypt0', 'tarkov-aimbot-review-xkrypt0'],
	['r6-siege-esp-ranked-review-buildsr4k', 'tarkov-esp-raid-review-buildsr4k'],
	['r6-siege-cloud-dma-review-dma-wizard', 'tarkov-cloud-dma-review-dma-wizard'],
	['r6-siege-aimbot-review-ctrl-player99', 'tarkov-aimbot-review-ctrl-player99'],
	['r6-siege-cheat-setup-review-stormchaser07', 'tarkov-cheat-setup-review-stormchaser07'],
	['r6-siege-gadget-esp-review-gadgetgoblinx', 'tarkov-loot-esp-review-lootgoblinx'],
	['r6-siege-no-recoil-review-rankedgrind42', 'tarkov-no-recoil-review-raidgrind42'],
	['r6-siege-stream-proof-review-vanlifer6', 'tarkov-stream-proof-review-vanlifeeft'],
	['r6-siege-battleye-update-review-patchdaymike', 'tarkov-battleye-update-review-patchdaymike'],
	['r6-siege-sniper-aimbot-review-snipezonly', 'tarkov-sniper-aimbot-review-snipezonly'],
];

const TEXT_EXTENSIONS = new Set([
	'.ts',
	'.tsx',
	'.js',
	'.mjs',
	'.astro',
	'.css',
	'.json',
	'.toml',
	'.txt',
	'.md',
	'.html',
	'.mdc',
]);

const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', '.astro']);
const SKIP_FILES = new Set([
	'adapt-warzone.mjs',
	'adapt-fortnite.mjs',
	'adapt-tarkov.mjs',
	'adapt-r6-to-eft.mjs',
	'setup-r6-images.mjs',
]);
const SKIP_BASENAMES = new Set(['_redirects', 'path-redirects.json', 'cannibal-redirects.json']);

async function walk(dir, files = []) {
	const entries = await readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		if (SKIP_DIRS.has(entry.name)) continue;
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) await walk(full, files);
		else files.push(full);
	}
	return files;
}

function applyReplacements(content) {
	let result = content;
	for (const [from, to] of REPLACEMENTS) {
		if (from === to) continue;
		result = result.split(from).join(to);
	}
	return result;
}

async function renamePageDirs() {
	for (const [from, to] of RENAME_PAGE_DIRS) {
		const src = path.join(ROOT, 'src', 'pages', from);
		const dest = path.join(ROOT, 'src', 'pages', to);
		try {
			await rename(src, dest);
			console.log(`Renamed page: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip rename ${from}: ${e.message}`);
		}
	}
}

async function transformTextFiles() {
	const files = await walk(ROOT);
	let changed = 0;
	for (const file of files) {
		const ext = path.extname(file);
		const base = path.basename(file);
		if (!TEXT_EXTENSIONS.has(ext)) continue;
		if (SKIP_FILES.has(base) || SKIP_BASENAMES.has(base)) continue;
		const original = await readFile(file, 'utf8');
		const updated = applyReplacements(original);
		if (updated !== original) {
			await writeFile(file, updated, 'utf8');
			changed++;
		}
	}
	console.log(`Transformed ${changed} text files`);
}

async function writeLivePages() {
	const live = {
		'tarkov-aimbot': 'tarkov-aimbot',
		'tarkov-esp': 'tarkov-esp',
		'tarkov-radar-hack': 'radar',
		'tarkov-cheats': 'hacks',
	};
	for (const [dir, pageId] of Object.entries(live)) {
		await writeFile(
			path.join(ROOT, 'src', 'pages', dir, 'index.astro'),
			`---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="${pageId}" />
`,
			'utf8',
		);
	}

	const cannibals = {
		'tarkov-wallhack': '/tarkov-esp/',
		'undetected-tarkov-cheats': '/tarkov-cheats/',
		'tarkov-cheats-2026': '/tarkov-cheats/',
		'tarkov-cheat-download': '/setup/',
		'tarkov-mod-menu': '/tarkov-cheats/',
		'tarkov-soft-aim': '/tarkov-aimbot/',
		'best-tarkov-cheats': '/tarkov-cheats/',
		'tarkov-aimbot-hack': '/tarkov-aimbot/',
		'tarkov-esp-hack': '/tarkov-esp/',
		'tarkov-unlock-all': '/tarkov-cheats/',
		'battleye-bypass': '/updates/',
	};
	for (const [dir, target] of Object.entries(cannibals)) {
		await writeFile(
			path.join(ROOT, 'src', 'pages', dir, 'index.astro'),
			`---
return Astro.redirect('${target}', 301);
---
`,
			'utf8',
		);
	}
	console.log('Wrote live + cannibal EN page files');
}

async function writeRedirectsHead() {
	const redirectsPath = path.join(ROOT, 'public', '_redirects');
	let src = await readFile(redirectsPath, 'utf8');
	const marker = '# Auto-generated cannibal locale redirects';
	const autoStart = src.indexOf(marker);
	const autoBlock = autoStart >= 0 ? src.slice(src.lastIndexOf('\n', autoStart) + 1) : '';

	const head = `# Brand Studio — blocked on deploy (Workers assets reject status 404; use 200 → 404 page)
/brand-studio /404.html 200
/brand-studio/ /404.html 200
/brand-studio/* /404.html 200
/__brand /404.html 200
/__brand/ /404.html 200
/__brand/* /404.html 200

# Legacy sitemap URL → primary index (GSC / old crawlers)
/sitemap-index.xml /sitemap.xml 301

# Cannibalization → canonical EN landings (not in sitemap; internal links go to pillars)
/tarkov-esp-hack /tarkov-esp/ 301
/tarkov-esp-hack/ /tarkov-esp/ 301
/tarkov-aimbot-hack /tarkov-aimbot/ 301
/tarkov-aimbot-hack/ /tarkov-aimbot/ 301
/best-tarkov-cheats /tarkov-cheats/ 301
/best-tarkov-cheats/ /tarkov-cheats/ 301
/tarkov-cheats-2026 /tarkov-cheats/ 301
/tarkov-cheats-2026/ /tarkov-cheats/ 301
/undetected-tarkov-cheats /tarkov-cheats/ 301
/undetected-tarkov-cheats/ /tarkov-cheats/ 301
/tarkov-mod-menu /tarkov-cheats/ 301
/tarkov-mod-menu/ /tarkov-cheats/ 301
/tarkov-unlock-all /tarkov-cheats/ 301
/tarkov-unlock-all/ /tarkov-cheats/ 301
/tarkov-soft-aim /tarkov-aimbot/ 301
/tarkov-soft-aim/ /tarkov-aimbot/ 301
/tarkov-wallhack /tarkov-esp/ 301
/tarkov-wallhack/ /tarkov-esp/ 301
/tarkov-cheat-download /setup/ 301
/tarkov-cheat-download/ /setup/ 301
/battleye-bypass /updates/ 301
/battleye-bypass/ /updates/ 301
`;

	await writeFile(redirectsPath, `${head}\n${autoBlock}`.replace(/\n{3,}/g, '\n\n'), 'utf8');
	console.log('Rewrote public/_redirects EN head (no Tarkov→R6 chains)');
}

async function main() {
	console.log('Adapting R6 Siege template → Tarkov Cheats (eftcheat.net)...\n');
	await renamePageDirs();
	await transformTextFiles();
	await writeLivePages();
	await writeRedirectsHead();
	console.log('\nDone. Next: brand.ts, images, sync:brand.');
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
