import { readFileSync, writeFileSync } from 'node:fs';

const files = [
	'public/locales/en/translation.json',
	'src/data/site.ts',
	'src/data/i18n/simple-pages.ts',
	'src/data/i18n/content.generated.ts',
	'src/data/tarkov.ts',
];

const replacements = [
	['R6 Siege Cheats', 'Rainbow Six Siege Cheats'],
	['R6 Siege Intel', 'Rainbow Six Siege Intel'],
	['Undetected R6 Siege Cheats', 'Undetected Rainbow Six Siege Cheats'],
	['for R6 Siege', 'for Rainbow Six Siege'],
	['in R6 Siege', 'in Rainbow Six Siege'],
	['a R6 Siege', 'a Rainbow Six Siege'],
	['R6 Siege raid', 'Rainbow Six Siege match'],
	['R6 Siege firefight', 'Rainbow Six Siege firefight'],
	['R6 Siege on', 'Rainbow Six Siege on'],
	['"gameBadge": "R6 Siege"', '"gameBadge": "Rainbow Six Siege"'],
	['linkR6SiegeCheats', 'linkRainbowSixSiegeCheats'],
	['R6 Siege Cheats overview', 'Rainbow Six Siege Cheats overview'],
	['R6 Siege Cheats pillar', 'Rainbow Six Siege Cheats pillar'],
];

for (const p of files) {
	let s = readFileSync(p, 'utf8');
	for (const [from, to] of replacements) {
		s = s.replaceAll(from, to);
	}
	writeFileSync(p, s);
	console.log('Updated', p);
}
