import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve('.');
const publicDir = path.join(root, 'public');
const faviconSource = path.join(publicDir, 'images/eft-favicon-source.png');
const BG = { r: 10, g: 12, b: 15, alpha: 1 };

/** Portrait EFT logo — crop to the TARKOV wordmark so 16px tabs stay readable. */
async function faviconPipeline() {
	const meta = await sharp(faviconSource).metadata();
	const width = meta.width ?? 381;
	const height = meta.height ?? 424;
	const cropHeight = Math.min(width, Math.round(height * 0.72));
	const top = Math.max(0, Math.round(height * 0.22));

	return sharp(faviconSource)
		.extract({
			left: 0,
			top,
			width,
			height: Math.min(cropHeight, height - top),
		});
}

async function faviconBuffer(size) {
	return (await faviconPipeline())
		.resize(size, size, { fit: 'contain', background: BG })
		.png()
		.toBuffer();
}

const sizes = [
	{ name: 'favicon-16x16.png', size: 16 },
	{ name: 'favicon-32x32.png', size: 32 },
	{ name: 'apple-touch-icon.png', size: 180 },
	{ name: 'favicon.png', size: 192 },
];

for (const { name, size } of sizes) {
	await writeFile(path.join(publicDir, name), await faviconBuffer(size));
	console.log(`Wrote public/${name}`);
}

await writeFile(path.join(publicDir, 'favicon.ico'), await faviconBuffer(32));
console.log('Wrote public/favicon.ico');
console.log('Favicons regenerated from public/images/eft-favicon-source.png');
