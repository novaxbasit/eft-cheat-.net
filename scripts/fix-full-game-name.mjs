import { readFileSync, writeFileSync } from 'node:fs';

const files = [
	'public/locales/en/translation.json',
	'src/data/site.ts',
	'src/data/i18n/simple-pages.ts',
	'src/data/i18n/content.generated.ts',
	'src/data/tarkov.ts',
];

const replacements = [
	['R6 Siege Cheats', 'Tarkov Cheats'],
	['R6 Siege Intel', 'Tarkov Intel'],
	['Undetected R6 Siege Cheats', 'Undetected Tarkov Cheats'],
	['for R6 Siege', 'for Escape from Tarkov'],
	['in R6 Siege', 'in Escape from Tarkov'],
	['a R6 Siege', 'a Escape from Tarkov'],
	['R6 Siege raid', 'Escape from Tarkov match'],
	['R6 Siege firefight', 'Escape from Tarkov firefight'],
	['R6 Siege on', 'Escape from Tarkov on'],
	['"gameBadge": "R6 Siege"', '"gameBadge": "Escape from Tarkov"'],
	['linkR6SiegeCheats', 'linkTarkovCheats'],
	['R6 Siege Cheats overview', 'Tarkov Cheats overview'],
	['R6 Siege Cheats pillar', 'Tarkov Cheats pillar'],
];

for (const p of files) {
	let s = readFileSync(p, 'utf8');
	for (const [from, to] of replacements) {
		s = s.replaceAll(from, to);
	}
	writeFileSync(p, s);
	console.log('Updated', p);
}
