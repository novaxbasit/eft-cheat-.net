#!/usr/bin/env node
/**
 * One-time setup: copy hero PNG, generate WebP ladder + gallery assets + logo/favicons.
 */
import { mkdir, copyFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve('.');
const imagesDir = path.join(ROOT, 'public/images');
const publicDir = path.join(ROOT, 'public');
const heroSource =
	process.env.R6_HERO_SOURCE ??
	path.join(
		process.env.USERPROFILE ?? '',
		'.cursor/projects/c-Users-Ryzen-Documents-r6siege-cheats-net/assets/c__Users_Ryzen_AppData_Roaming_Cursor_User_workspaceStorage_7d92bc60d730c4c8ceacaee1a7b89c1a_images_ChatGPT_Image_Aug_17__2026__08_47_18_PM-a23aec46-9b90-4df4-8442-7cfed638f81e.png',
	);

const BG = { r: 10, g: 15, b: 24, alpha: 1 };

const HERO_WIDTHS = [640, 1024, 1400];
const CONTENT_WIDTHS = [480, 960];

const contentNames = [
	'r6-siege-cheats-esp',
	'r6-siege-cheats-wallhack',
	'r6-siege-cheats-aimbot',
	'r6-siege-cheats-aimbot-view',
	'r6-siege-cheats-radar',
	'r6-siege-cheats-raid',
];

await mkdir(imagesDir, { recursive: true });

const heroFull = path.join(imagesDir, 'r6-siege-cheats-hero-full.png');
await copyFile(heroSource, heroFull);
console.log('Copied hero full PNG');

const meta = await sharp(heroFull).metadata();
console.log(`Hero native: ${meta.width}x${meta.height}`);

for (const width of HERO_WIDTHS) {
	if (meta.width && width > meta.width) continue;
	const file = `r6-siege-cheats-hero-${width}w.webp`;
	const buffer = await sharp(heroFull)
		.resize({ width, withoutEnlargement: true })
		.webp({ quality: width <= 640 ? 82 : 88, effort: 6 })
		.toBuffer();
	await writeFile(path.join(imagesDir, file), buffer);
	console.log(`Wrote ${file} (${buffer.length} bytes)`);
}

for (const name of contentNames) {
	const baseWebp = path.join(imagesDir, `${name}.webp`);
	const buffer = await sharp(heroFull)
		.resize({ width: 960, withoutEnlargement: true })
		.webp({ quality: 85, effort: 6 })
		.toBuffer();
	await writeFile(baseWebp, buffer);
	for (const w of CONTENT_WIDTHS) {
		if (meta.width && w >= 960) continue;
		const variant = path.join(imagesDir, `${name}-${w}w.webp`);
		const vbuf = await sharp(baseWebp)
			.resize({ width: w, withoutEnlargement: true })
			.webp({ quality: 80, effort: 6 })
			.toBuffer();
		await writeFile(variant, vbuf);
	}
	console.log(`Wrote ${name}.webp + variants`);
}

const logoBuffer = await sharp(heroFull)
	.extract({ left: Math.floor((meta.width ?? 1024) * 0.55), top: 0, width: Math.floor((meta.width ?? 1024) * 0.4), height: meta.height ?? 1024 })
	.resize(512, 512, { fit: 'cover', position: 'centre' })
	.png()
	.toBuffer();

await writeFile(path.join(imagesDir, 'r6-siege-cheats-logo.png'), logoBuffer);
await writeFile(
	path.join(imagesDir, 'r6-siege-cheats-logo.webp'),
	await sharp(logoBuffer).webp({ quality: 90 }).toBuffer(),
);
console.log('Wrote logo PNG + WebP');

const favSizes = [
	{ name: 'favicon-16x16.png', size: 16 },
	{ name: 'favicon-32x32.png', size: 32 },
	{ name: 'apple-touch-icon.png', size: 180 },
	{ name: 'favicon.png', size: 192 },
];
for (const { name, size } of favSizes) {
	await writeFile(
		path.join(publicDir, name),
		await sharp(logoBuffer).resize(size, size).png().toBuffer(),
	);
}
await writeFile(
	path.join(publicDir, 'favicon.ico'),
	await sharp(logoBuffer).resize(32, 32).png().toBuffer(),
);
console.log('Wrote favicons');

console.log('Done — r6-siege image assets ready.');
