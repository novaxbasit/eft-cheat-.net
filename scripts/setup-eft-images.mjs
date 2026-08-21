#!/usr/bin/env node
/**
 * Copy the HD hero master and emit high-quality WebP (no extra downscale of native size).
 */
import { mkdir, copyFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve('.');
const imagesDir = path.join(ROOT, 'public/images');
const publicDir = path.join(ROOT, 'public');
const heroSource = path.join(
	process.env.USERPROFILE ?? '',
	'.cursor/projects/c-Users-Ryzen-Documents-eft-cheat-net/assets/c__Users_Ryzen_AppData_Roaming_Cursor_User_workspaceStorage_823c5c1ed1e024353d4336492d36b4e4_images_escape_from_tarkov_main_banner-9653cd21-bac6-422b-9730-05f3e117f183.png',
);

const BG = { r: 10, g: 6, b: 20, alpha: 1 };

await mkdir(imagesDir, { recursive: true });

const heroFull = path.join(imagesDir, 'tarkov-cheats-hero-full.png');
const src = sharp(heroSource).rotate();
const meta = await src.metadata();
const width = meta.width ?? 1024;
const height = meta.height ?? 409;
console.log(`Hero native: ${width}x${height} (${meta.format})`);

const pngMaster = await sharp(heroSource)
	.rotate()
	.png({ compressionLevel: 1, adaptiveFiltering: true })
	.toBuffer();
await writeFile(heroFull, pngMaster);
console.log(`Wrote tarkov-cheats-hero-full.png (${pngMaster.length} bytes)`);

const nativeWebp = await sharp(heroSource)
	.rotate()
	.webp({ quality: 95, effort: 6, smartSubsample: true })
	.toBuffer();
await writeFile(path.join(imagesDir, 'tarkov-cheats-hero-1024w.webp'), nativeWebp);
console.log(`Wrote tarkov-cheats-hero-1024w.webp (${nativeWebp.length} bytes)`);

if (width > 640) {
	const mobile = await sharp(heroSource)
		.rotate()
		.resize({ width: 640, withoutEnlargement: true })
		.webp({ quality: 92, effort: 6, smartSubsample: true })
		.toBuffer();
	await writeFile(path.join(imagesDir, 'tarkov-cheats-hero-640w.webp'), mobile);
	console.log(`Wrote tarkov-cheats-hero-640w.webp (${mobile.length} bytes)`);
}

const crops = [
	{ name: 'tarkov-cheats-esp', left: 0.02, top: 0.08, w: 0.62, h: 0.9 },
	{ name: 'tarkov-cheats-wallhack', left: 0.18, top: 0.05, w: 0.55, h: 0.92 },
	{ name: 'tarkov-cheats-aimbot', left: 0.38, top: 0.0, w: 0.6, h: 1 },
	{ name: 'tarkov-cheats-aimbot-view', left: 0.48, top: 0.0, w: 0.5, h: 1 },
	{ name: 'tarkov-cheats-radar', left: 0.08, top: 0.12, w: 0.5, h: 0.8 },
	{ name: 'tarkov-cheats-raid', left: 0.0, top: 0.0, w: 1, h: 1 },
];

for (const crop of crops) {
	const left = Math.max(0, Math.floor(width * crop.left));
	const top = Math.max(0, Math.floor(height * crop.top));
	const extractWidth = Math.min(width - left, Math.floor(width * crop.w));
	const extractHeight = Math.min(height - top, Math.floor(height * crop.h));
	const base = await sharp(heroSource)
		.rotate()
		.extract({ left, top, width: extractWidth, height: extractHeight })
		.resize({ width: Math.min(960, extractWidth), withoutEnlargement: true })
		.webp({ quality: 92, effort: 6 })
		.toBuffer();
	await writeFile(path.join(imagesDir, `${crop.name}.webp`), base);
	const variant = await sharp(base)
		.resize({ width: 480, withoutEnlargement: true })
		.webp({ quality: 90, effort: 6 })
		.toBuffer();
	await writeFile(path.join(imagesDir, `${crop.name}-480w.webp`), variant);
	console.log(`Wrote ${crop.name}.webp + 480w`);
}

const logoLeft = Math.floor(width * 0.58);
const logoWidth = Math.min(width - logoLeft, Math.floor(width * 0.4));
const logoBuffer = await sharp(heroSource)
	.rotate()
	.extract({ left: logoLeft, top: 0, width: logoWidth, height })
	.resize(512, 512, { fit: 'cover', position: 'centre', background: BG })
	.png({ compressionLevel: 1 })
	.toBuffer();
await writeFile(path.join(imagesDir, 'tarkov-cheats-logo.png'), logoBuffer);
await writeFile(
	path.join(imagesDir, 'tarkov-cheats-logo.webp'),
	await sharp(logoBuffer).webp({ quality: 92, effort: 6 }).toBuffer(),
);
console.log('Wrote logo PNG + WebP');

const favSizes = [
	{ name: 'favicon-16x16.png', size: 16 },
	{ name: 'favicon-32x32.png', size: 32 },
	{ name: 'apple-touch-icon.png', size: 180 },
	{ name: 'favicon.png', size: 192 },
];
for (const { name, size } of favSizes) {
	await writeFile(path.join(publicDir, name), await sharp(logoBuffer).resize(size, size).png().toBuffer());
}
await writeFile(path.join(publicDir, 'favicon.ico'), await sharp(logoBuffer).resize(32, 32).png().toBuffer());
console.log('Wrote favicons');
console.log('Done — EFT hero kept at native size with high-quality WebP.');
