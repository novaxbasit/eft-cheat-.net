#!/usr/bin/env node
/**
 * Builds functions/locale-slug-map.json from localizedSlugs + cannibal targets.
 * Locale prefixes then 301 to English in one hop.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ROUTING = path.join(ROOT, 'src/data/i18n/routing.ts');
const CANONICAL = path.join(ROOT, 'src/data/seo-cannibal-map.ts');
const OUT = path.join(ROOT, 'functions/locale-slug-map.js');

function readCannibalTargets() {
	const src = readFileSync(CANONICAL, 'utf8');
	const block = src.match(/cannibalRedirectTargets\s*=\s*\{([\s\S]*?)\}\s*as const/);
	if (!block) throw new Error('cannibalRedirectTargets missing');
	/** @type {Record<string, string>} */
	const targets = {};
	for (const row of block[1].matchAll(/['"]?([\w-]+)['"]?\s*:\s*['"]([\w-]+)['"]/g)) {
		targets[row[1]] = row[2];
	}
	return targets;
}

function extractSlugBlock(src, pageId) {
	const re = new RegExp(`\\t'${pageId}':\\s*\\{([\\s\\S]*?)\\n\\t\\},|\\t${pageId}:\\s*\\{([\\s\\S]*?)\\n\\t\\},`);
	const m = src.match(re);
	const block = m?.[1] ?? m?.[2];
	if (!block) return {};
	/** @type {Record<string, string>} */
	const slugs = {};
	for (const row of block.matchAll(/(\w+):\s*'([^']*)'/g)) {
		slugs[row[1]] = row[2];
	}
	return slugs;
}

function extractEnglishPaths(src) {
	const m = src.match(/export const englishPaths[^=]*=\s*\{([\s\S]*?)\n\};/);
	if (!m) throw new Error('englishPaths missing');
	/** @type {Record<string, string>} */
	const paths = {};
	for (const row of m[1].matchAll(/['"]?([\w-]+)['"]?\s*:\s*'([^']+)'/g)) {
		paths[row[1]] = row[2];
	}
	return paths;
}

const TARGETS = readCannibalTargets();
const routing = readFileSync(ROUTING, 'utf8');
const englishPaths = extractEnglishPaths(routing);

function canonicalPath(pageId) {
	const target = TARGETS[pageId] ?? pageId;
	const resolved = target === 'hacks' ? 'home' : target;
	return englishPaths[resolved] ?? '/';
}

const pageIds = Object.keys(englishPaths);
/** @type {Record<string, string>} */
const map = {};

for (const pageId of pageIds) {
	const dest = canonicalPath(pageId);
	const slugs = extractSlugBlock(routing, pageId);
	for (const slug of Object.values(slugs)) {
		if (!slug) continue;
		map[slug] = dest;
	}
	const enPath = englishPaths[pageId];
	const enSlug = enPath.replace(/^\/|\/$/g, '');
	if (enSlug) map[enSlug] = dest;
}

writeFileSync(OUT, `export default ${JSON.stringify(map, null, 2)};\n`);
console.log(`Wrote ${Object.keys(map).length} locale slug → English path mappings`);
