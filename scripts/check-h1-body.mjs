#!/usr/bin/env node
/**
 * Seobility-style check: every word in EN simple-page H1 must appear in intro + sections.
 * Skips stop words under 3 chars except FAQ/ESP etc.
 */
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const brandSrc = readFileSync(path.join(ROOT, 'src/data/brand.ts'), 'utf8');
const pagesSrc = readFileSync(path.join(ROOT, 'src/data/i18n/simple-pages.ts'), 'utf8');

function pick(re, src = brandSrc) {
	const m = src.match(re);
	if (!m) throw new Error(`missing ${re}`);
	return m[1].replace(/\\'/g, "'");
}

const brand = {
	name: pick(/(?:^|\n)\tname:\s*'((?:\\'|[^'])*)'/),
	game: pick(/(?:^|\n)\tgame:\s*'((?:\\'|[^'])*)'/),
	antiCheat: pick(/(?:^|\n)\tantiCheat:\s*'((?:\\'|[^'])*)'/),
	email: pick(/(?:^|\n)\tsupportEmail:\s*'((?:\\'|[^'])*)'/),
	primaryKeyword: pick(/\tprimary:\s*'((?:\\'|[^'])*)'/),
};

function fill(input) {
	return input
		.replaceAll('{brand}', brand.name)
		.replaceAll('{game}', brand.game)
		.replaceAll('{antiCheat}', brand.antiCheat)
		.replaceAll('{email}', brand.email)
		.replaceAll('{primaryKeyword}', brand.primaryKeyword)
		.trim();
}

function stripHtml(html) {
	return html.replace(/<[^>]+>/g, ' ');
}

function h1Words(h1) {
	return h1
		.split(/[\s\-_]+/)
		.map((w) => w.replace(/[^a-zA-Z0-9]/g, ''))
		.filter((w) => w.length >= 2 || w.toUpperCase() === w);
}

function pageBlocks(src) {
	const blocks = [];
	const re = /(?:^|\n\t)(?:'([^']+)'|(\w[\w-]*)):\s*page\(\{([\s\S]*?)\n\t\}\),/g;
	let m;
	while ((m = re.exec(src))) {
		blocks.push({ id: m[1] ?? m[2], body: m[3] });
	}
	return blocks;
}

function pickQuoted(key, body) {
	const re = new RegExp(`${key}:\\s*'((?:\\\\'|[^'])*)'`);
	const reBrand = new RegExp(`${key}:\\s*brandCopy\\.\\w+`);
	if (reBrand.test(body)) {
		const copyKey = body.match(/intro:\s*brandCopy\.(\w+)/)?.[1];
		if (copyKey) {
			const copyRe = new RegExp(`\\t${copyKey}:\\s*'((?:\\\\'|[^'])*)'`);
			const cm = brandSrc.match(copyRe);
			if (cm) return fill(cm[1].replace(/\\'/g, "'"));
		}
	}
	const m = body.match(re);
	return m ? fill(m[1].replace(/\\'/g, "'")) : '';
}

function sectionText(body) {
	const chunks = [];
	const paraRe = /paragraphs:\s*\[([\s\S]*?)\],/g;
	const listRe = /list:\s*\[([\s\S]*?)\],/g;
	for (const re of [paraRe, listRe]) {
		let m;
		while ((m = re.exec(body))) {
			const inner = m[1];
			for (const s of inner.matchAll(/'((?:\\'|[^'])*)'/g)) {
				chunks.push(fill(s[1].replace(/\\'/g, "'")));
			}
		}
	}
	return stripHtml(chunks.join(' '));
}

let failures = 0;
for (const { id, body } of pageBlocks(pagesSrc)) {
	const h1 = pickQuoted('h1', body);
	if (!h1) continue;
	const intro = pickQuoted('intro', body);
	const sections = sectionText(body);
	const text = normalize(`${intro} ${sections}`);
	const missing = h1Words(h1).filter((word) => !text.includes(word.toLowerCase()));
	if (missing.length) {
		failures++;
		console.error(`FAIL ${id}: H1 "${h1}" — missing in body: ${missing.join(', ')}`);
	} else {
		console.log(`OK   ${id}: "${h1}"`);
	}
}

// Reviews page (not in simple-pages)
const reviewsH1 = `${brand.name} reviews`.toLowerCase();
const reviewsIntro = fill(
	pick(/\treviewsIntro:\s*'((?:\\'|[^'])*)'/, brandSrc).replace(/\\'/g, "'"),
);
const reviewsText = normalize(`${reviewsIntro} reviews`);
const reviewsMissing = h1Words(`${brand.name} reviews`).filter((w) => !reviewsText.includes(w.toLowerCase()));
if (reviewsMissing.length) {
	failures++;
	console.error(`FAIL reviews: missing ${reviewsMissing.join(', ')}`);
} else {
	console.log(`OK   reviews: "${brand.name} reviews"`);
}

function normalize(s) {
	return stripHtml(s).toLowerCase().replace(/[^a-z0-9]+/g, ' ');
}

function check(id, h1, body) {
	const text = normalize(body);
	const missing = h1Words(h1).filter((word) => !text.includes(word.toLowerCase()));
	if (missing.length) {
		failures++;
		console.error(`FAIL ${id}: H1 "${h1}" — missing in body: ${missing.join(', ')}`);
	} else {
		console.log(`OK   ${id}: "${h1}"`);
	}
}

const siteSrc = readFileSync(path.join(ROOT, 'src/data/site.ts'), 'utf8');
const faqBlocks = [...siteSrc.matchAll(/question:\s*'((?:\\'|[^'])*)',\s*\n\t\tanswer:\s*\n?\t\t\t?'((?:\\'|[^'])*)'/g)];
for (const m of faqBlocks) {
	const q = fill(m[1].replace(/\\'/g, "'"));
	const a = fill(m[2].replace(/\\'/g, "'"));
	check(`faq:${m[1].slice(0, 40)}`, q, a);
}

const blogSrc = readFileSync(path.join(ROOT, 'src/data/blog/posts.generated.ts'), 'utf8');
const blogRe =
	/\ten: \{[\s\S]*?slug: "([^"]+)"[\s\S]*?h1: "([^"]+)"[\s\S]*?intro: "([^"]+)"([\s\S]*?)\n\t\},/g;
let bm;
while ((bm = blogRe.exec(blogSrc))) {
	const paras = [...bm[4].matchAll(/"([^"]{20,})"/g)].map((x) => x[1]).join(' ');
	check(`blog:${bm[1]}`, bm[2], `${bm[3]} ${paras}`);
}

const localesSrc = readFileSync(path.join(ROOT, 'src/data/i18n/locales.ts'), 'utf8');
const blogH1 = localesSrc.match(/\ten: \{[\s\S]*?blogH1: '([^']+)'[\s\S]*?blogIntro:\s*\n?\t\t\t?'((?:\\'|[^'])*)'/) 
	|| localesSrc.match(/blogH1: '([^']+)',\s*\n\t\tblogIntro:\s*\n\t\t\t'((?:\\'|[^'])*)'/);
if (blogH1) check('blog-index', blogH1[1], fill(blogH1[2].replace(/\\'/g, "'")));

const heroLede = fill(pick(/\theroLede:\s*'((?:\\'|[^'])*)'/).replace(/\\'/g, "'"));
check('home', brand.name, `${heroLede} ${fill(pick(/\tfeaturesIntro:\s*'((?:\\'|[^'])*)'/).replace(/\\'/g, "'"))}`);

const gen = readFileSync(path.join(ROOT, 'src/data/i18n/content.generated.ts'), 'utf8');
const enLegal = gen.slice(0, gen.indexOf('\n\t\tes:'));
for (const id of ['privacy', 'refund', 'terms']) {
	const block = enLegal.match(new RegExp(`${id}: \\{[\\s\\S]*?h1: "([^"]+)"[\\s\\S]*?intro: "([^"]+)"`));
	if (block) check(`legal:${id}`, block[1], block[2]);
}

check('404', 'Page not found', 'This page was not found. The URL you opened is not on this site.');

const reviewLede = `This review by @handle covers ${brand.name} for Windows PC.`;
check('review-detail', `${brand.name} review by @xKrypt0_EFT`, `This review by @xKrypt0_EFT covers ${brand.name} for Windows PC.`);

if (failures) {
	console.error(`\n${failures} page(s) fail H1/body alignment (Seobility).`);
	process.exit(1);
}
console.log('\nAll EN pages pass H1/body word check.');
