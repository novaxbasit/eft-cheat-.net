import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve('.');
const publicDir = path.join(root, 'public');
const faviconSource = path.join(publicDir, 'images/eft-favicon-source.png');
const BG = { r: 0, g: 0, b: 0, alpha: 1 };

async function faviconBuffer(size) {
	return sharp(faviconSource)
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
