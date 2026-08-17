import { siteConfig } from '../site';
import {
	defaultLocale,
	isLocaleCode,
	localeCodes,
	localeMap,
	type LocaleCode,
	locales,
} from './locales';
import { getCannibalTargetId, isCannibalPageId } from '../seo-cannibal-map';

/** Canonical page identifiers shared across all locales. */
export type PageId =
	| 'home'
	| 'tarkov-esp'
	| 'tarkov-aimbot'
	| 'features'
	| 'pricing'
	| 'setup'
	| 'updates'
	| 'faq'
	| 'support'
	| 'undetected'
	| 'wallhack'
	| 'radar'
	| 'battleye'
	| 'cheats-2026'
	| 'hacks'
	| 'cheat-download'
	| 'mod-menu'
	| 'soft-aim'
	| 'best-cheats'
	| 'aimbot-hack'
	| 'esp-hack'
	| 'unlock-all'
	| 'privacy'
	| 'refund'
	| 'terms';

/** English (official) paths — served at site root without /en/ prefix. */
export const englishPaths: Record<PageId, string> = {
	home: '/',
	'tarkov-esp': '/r6-siege-esp/',
	'tarkov-aimbot': '/r6-siege-aimbot/',
	features: '/features/',
	pricing: '/pricing/',
	setup: '/setup/',
	updates: '/updates/',
	faq: '/faq/',
	support: '/support/',
	undetected: '/undetected-r6-siege-cheats/',
	wallhack: '/r6-siege-wallhack/',
	radar: '/r6-siege-radar-hack/',
	'battleye': '/battleye-bypass/',
	'cheats-2026': '/r6-siege-cheats-2026/',
	hacks: '/r6-siege-cheats/',
	'cheat-download': '/r6-siege-cheat-download/',
	'mod-menu': '/r6-siege-mod-menu/',
	'soft-aim': '/r6-siege-soft-aim/',
	'best-cheats': '/best-r6-siege-cheats/',
	'aimbot-hack': '/r6-siege-aimbot-hack/',
	'esp-hack': '/r6-siege-esp-hack/',
	'unlock-all': '/r6-siege-unlock-all/',
	privacy: '/privacy-policy/',
	refund: '/refund-policy/',
	terms: '/terms/',
};

/**
 * Localized URL slugs (path after /{lang}/).
 * English uses englishPaths at root; other locales use these slugs under /{lang}/.
 */
export const localizedSlugs: Record<PageId, Record<LocaleCode, string>> = {
	home: {
		en: '',
		es: '',
		fr: '',
		de: '',
		pt: '',
		it: '',
		nl: '',
		pl: '',
		ru: '',
		tr: '',
		ar: '',
		ja: '',
		ko: '',
		zh: '',
		hi: '',
		id: '',
		th: '',
		vi: '',
		uk: '',
		cs: '',
		ro: '',
		sv: '',
	},
	'tarkov-esp': {
		en: 'r6-siege-esp',
		es: 'trucos-tarkov-esp',
		fr: 'triche-tarkov-esp',
		de: 'tarkov-esp-wallhack',
		pt: 'cheats-tarkov-esp',
		it: 'trucchi-tarkov-esp',
		nl: 'tarkov-esp-wallhack',
		pl: 'cheaty-tarkov-esp',
		ru: 'tarkov-esp-chity',
		tr: 'tarkov-esp-hile',
		ar: 'tarkov-esp-wallhack',
		ja: 'tarkov-esp-wallhack',
		ko: 'tarkov-esp-wallhack',
		zh: 'tarkov-esp-wallhack',
		hi: 'tarkov-esp-wallhack',
		id: 'tarkov-esp-wallhack',
		th: 'tarkov-esp-wallhack',
		vi: 'tarkov-esp-wallhack',
		uk: 'tarkov-esp-chity',
		cs: 'tarkov-esp-wallhack',
		ro: 'tarkov-esp-wallhack',
		sv: 'tarkov-esp-wallhack',
	},
	'tarkov-aimbot': {
		en: 'r6-siege-aimbot',
		es: 'trucos-tarkov-aimbot',
		fr: 'triche-tarkov-aimbot',
		de: 'tarkov-aimbot',
		pt: 'cheats-tarkov-aimbot',
		it: 'trucchi-tarkov-aimbot',
		nl: 'tarkov-aimbot',
		pl: 'cheaty-tarkov-aimbot',
		ru: 'tarkov-aimbot-chity',
		tr: 'tarkov-aimbot-hile',
		ar: 'tarkov-aimbot',
		ja: 'tarkov-aimbot',
		ko: 'tarkov-aimbot',
		zh: 'tarkov-aimbot',
		hi: 'tarkov-aimbot',
		id: 'tarkov-aimbot',
		th: 'tarkov-aimbot',
		vi: 'tarkov-aimbot',
		uk: 'tarkov-aimbot-chity',
		cs: 'tarkov-aimbot',
		ro: 'tarkov-aimbot',
		sv: 'tarkov-aimbot',
	},
	features: {
		en: 'features',
		es: 'caracteristicas-trucos-tarkov',
		fr: 'fonctionnalites-triche-tarkov',
		de: 'escape-from-tarkov-cheats-funktionen',
		pt: 'recursos-cheats-tarkov',
		it: 'funzioni-trucchi-tarkov',
		nl: 'escape-from-tarkov-cheats-functies',
		pl: 'funkcje-cheatow-tarkov',
		ru: 'funkcii-chitov-tarkov',
		tr: 'tarkov-hile-ozellikleri',
		ar: 'escape-from-tarkov-cheats-features',
		ja: 'escape-from-tarkov-cheats-features',
		ko: 'escape-from-tarkov-cheats-features',
		zh: 'escape-from-tarkov-cheats-features',
		hi: 'escape-from-tarkov-cheats-features',
		id: 'escape-from-tarkov-cheats-features',
		th: 'escape-from-tarkov-cheats-features',
		vi: 'escape-from-tarkov-cheats-features',
		uk: 'funkcii-chitiv-tarkov',
		cs: 'escape-from-tarkov-cheats-funkce',
		ro: 'functii-cheats-tarkov',
		sv: 'escape-from-tarkov-cheats-funktioner',
	},
	pricing: {
		en: 'pricing',
		es: 'precios-trucos-tarkov',
		fr: 'prix-triche-tarkov',
		de: 'escape-from-tarkov-cheats-preise',
		pt: 'precos-cheats-tarkov',
		it: 'prezzi-trucchi-tarkov',
		nl: 'escape-from-tarkov-cheats-prijzen',
		pl: 'ceny-cheatow-tarkov',
		ru: 'ceny-chitov-tarkov',
		tr: 'tarkov-hile-fiyatlari',
		ar: 'escape-from-tarkov-cheats-pricing',
		ja: 'escape-from-tarkov-cheats-pricing',
		ko: 'escape-from-tarkov-cheats-pricing',
		zh: 'escape-from-tarkov-cheats-pricing',
		hi: 'escape-from-tarkov-cheats-pricing',
		id: 'escape-from-tarkov-cheats-pricing',
		th: 'escape-from-tarkov-cheats-pricing',
		vi: 'escape-from-tarkov-cheats-pricing',
		uk: 'ciny-chitiv-tarkov',
		cs: 'escape-from-tarkov-cheats-ceny',
		ro: 'preturi-cheats-tarkov',
		sv: 'escape-from-tarkov-cheats-priser',
	},
	setup: {
		en: 'setup',
		es: 'instalacion-trucos-tarkov',
		fr: 'installation-triche-tarkov',
		de: 'escape-from-tarkov-cheats-installation',
		pt: 'instalacao-cheats-tarkov',
		it: 'installazione-trucchi-tarkov',
		nl: 'escape-from-tarkov-cheats-installatie',
		pl: 'instalacja-cheatow-tarkov',
		ru: 'ustanovka-chitov-tarkov',
		tr: 'tarkov-hile-kurulum',
		ar: 'escape-from-tarkov-cheats-setup',
		ja: 'escape-from-tarkov-cheats-setup',
		ko: 'escape-from-tarkov-cheats-setup',
		zh: 'escape-from-tarkov-cheats-setup',
		hi: 'escape-from-tarkov-cheats-setup',
		id: 'escape-from-tarkov-cheats-setup',
		th: 'escape-from-tarkov-cheats-setup',
		vi: 'escape-from-tarkov-cheats-setup',
		uk: 'vstanovka-chitiv-tarkov',
		cs: 'escape-from-tarkov-cheats-instalace',
		ro: 'instalare-cheats-tarkov',
		sv: 'escape-from-tarkov-cheats-installation',
	},
	updates: {
		en: 'updates',
		es: 'actualizaciones-trucos-tarkov',
		fr: 'mises-a-jour-triche-tarkov',
		de: 'escape-from-tarkov-cheats-updates',
		pt: 'atualizacoes-cheats-tarkov',
		it: 'aggiornamenti-trucchi-tarkov',
		nl: 'escape-from-tarkov-cheats-updates',
		pl: 'aktualizacje-cheatow-tarkov',
		ru: 'obnovleniya-chitov-tarkov',
		tr: 'tarkov-hile-guncellemeleri',
		ar: 'escape-from-tarkov-cheats-updates',
		ja: 'escape-from-tarkov-cheats-updates',
		ko: 'escape-from-tarkov-cheats-updates',
		zh: 'escape-from-tarkov-cheats-updates',
		hi: 'escape-from-tarkov-cheats-updates',
		id: 'escape-from-tarkov-cheats-updates',
		th: 'escape-from-tarkov-cheats-updates',
		vi: 'escape-from-tarkov-cheats-updates',
		uk: 'onovlennya-chitiv-tarkov',
		cs: 'escape-from-tarkov-cheats-aktualizace',
		ro: 'actualizari-cheats-tarkov',
		sv: 'escape-from-tarkov-cheats-uppdateringar',
	},
	faq: {
		en: 'faq',
		es: 'preguntas-trucos-tarkov',
		fr: 'faq-triche-tarkov',
		de: 'escape-from-tarkov-cheats-faq',
		pt: 'faq-cheats-tarkov',
		it: 'faq-trucchi-tarkov',
		nl: 'escape-from-tarkov-cheats-faq',
		pl: 'faq-cheatow-tarkov',
		ru: 'faq-chitov-tarkov',
		tr: 'tarkov-hile-sss',
		ar: 'escape-from-tarkov-cheats-faq',
		ja: 'escape-from-tarkov-cheats-faq',
		ko: 'escape-from-tarkov-cheats-faq',
		zh: 'escape-from-tarkov-cheats-faq',
		hi: 'escape-from-tarkov-cheats-faq',
		id: 'escape-from-tarkov-cheats-faq',
		th: 'escape-from-tarkov-cheats-faq',
		vi: 'escape-from-tarkov-cheats-faq',
		uk: 'faq-chitiv-tarkov',
		cs: 'escape-from-tarkov-cheats-faq',
		ro: 'faq-cheats-tarkov',
		sv: 'escape-from-tarkov-cheats-faq',
	},
	support: {
		en: 'support',
		es: 'soporte-trucos-tarkov',
		fr: 'support-triche-tarkov',
		de: 'escape-from-tarkov-cheats-support',
		pt: 'suporte-cheats-tarkov',
		it: 'supporto-trucchi-tarkov',
		nl: 'escape-from-tarkov-cheats-support',
		pl: 'wsparcie-cheatow-tarkov',
		ru: 'podderzhka-chitov-tarkov',
		tr: 'tarkov-hile-destek',
		ar: 'escape-from-tarkov-cheats-support',
		ja: 'escape-from-tarkov-cheats-support',
		ko: 'escape-from-tarkov-cheats-support',
		zh: 'escape-from-tarkov-cheats-support',
		hi: 'escape-from-tarkov-cheats-support',
		id: 'escape-from-tarkov-cheats-support',
		th: 'escape-from-tarkov-cheats-support',
		vi: 'escape-from-tarkov-cheats-support',
		uk: 'pidtrymka-chitiv-tarkov',
		cs: 'escape-from-tarkov-cheats-podpora',
		ro: 'suport-cheats-tarkov',
		sv: 'escape-from-tarkov-cheats-support',
	},
	undetected: {
		en: 'undetected-r6-siege-cheats',
		es: 'trucos-tarkov-indetectables',
		fr: 'triche-tarkov-indetectable',
		de: 'unentdeckte-escape-from-tarkov-cheats',
		pt: 'cheats-tarkov-indetectaveis',
		it: 'trucchi-tarkov-indetectabili',
		nl: 'undetected-tarkov-cheats',
		pl: 'niewykrywalne-cheats-tarkov',
		ru: 'nedecektiruemye-chity-tarkov',
		tr: 'tespit-edilemeyen-tarkov-hileleri',
		ar: 'undetected-tarkov-cheats',
		ja: 'undetected-tarkov-cheats',
		ko: 'undetected-tarkov-cheats',
		zh: 'undetected-tarkov-cheats',
		hi: 'undetected-tarkov-cheats',
		id: 'undetected-tarkov-cheats',
		th: 'undetected-tarkov-cheats',
		vi: 'undetected-tarkov-cheats',
		uk: 'nedecektovani-chity-tarkov',
		cs: 'undetected-tarkov-cheats',
		ro: 'cheats-tarkov-nedetectabile',
		sv: 'undetected-tarkov-cheats',
	},
	wallhack: {
		en: 'r6-siege-wallhack',
		es: 'wallhack-trucos-tarkov',
		fr: 'wallhack-triche-tarkov',
		de: 'tarkov-wallhack',
		pt: 'wallhack-cheats-tarkov',
		it: 'wallhack-trucchi-tarkov',
		nl: 'tarkov-wallhack',
		pl: 'wallhack-cheatow-tarkov',
		ru: 'wallhack-chity-tarkov',
		tr: 'tarkov-wallhack-hile',
		ar: 'tarkov-wallhack',
		ja: 'tarkov-wallhack',
		ko: 'tarkov-wallhack',
		zh: 'tarkov-wallhack',
		hi: 'tarkov-wallhack',
		id: 'tarkov-wallhack',
		th: 'tarkov-wallhack',
		vi: 'tarkov-wallhack',
		uk: 'wallhack-chity-tarkov',
		cs: 'tarkov-wallhack',
		ro: 'wallhack-cheats-tarkov',
		sv: 'tarkov-wallhack',
	},
	radar: {
		en: 'r6-siege-radar-hack',
		es: 'radar-hack-trucos-tarkov',
		fr: 'radar-hack-triche-tarkov',
		de: 'tarkov-radar-hack',
		pt: 'radar-hack-cheats-tarkov',
		it: 'radar-hack-trucchi-tarkov',
		nl: 'tarkov-radar-hack',
		pl: 'radar-hack-cheatow-tarkov',
		ru: 'radar-hack-chity-tarkov',
		tr: 'tarkov-radar-hack',
		ar: 'tarkov-radar-hack',
		ja: 'tarkov-radar-hack',
		ko: 'tarkov-radar-hack',
		zh: 'tarkov-radar-hack',
		hi: 'tarkov-radar-hack',
		id: 'tarkov-radar-hack',
		th: 'tarkov-radar-hack',
		vi: 'tarkov-radar-hack',
		uk: 'radar-hack-chity-tarkov',
		cs: 'tarkov-radar-hack',
		ro: 'radar-hack-cheats-tarkov',
		sv: 'tarkov-radar-hack',
	},
	'battleye': {
		en: 'battleye-bypass',
		es: 'battleye-bypass-trucos',
		fr: 'battleye-bypass-triche',
		de: 'battleye-bypass',
		pt: 'battleye-bypass-cheats',
		it: 'battleye-bypass-trucchi',
		nl: 'battleye-bypass',
		pl: 'battleye-bypass-cheatow',
		ru: 'battleye-bypass-chity',
		tr: 'battleye-bypass',
		ar: 'battleye-bypass',
		ja: 'battleye-bypass',
		ko: 'battleye-bypass',
		zh: 'battleye-bypass',
		hi: 'battleye-bypass',
		id: 'battleye-bypass',
		th: 'battleye-bypass',
		vi: 'battleye-bypass',
		uk: 'battleye-bypass-chity',
		cs: 'battleye-bypass',
		ro: 'battleye-bypass-cheats',
		sv: 'battleye-bypass',
	},
	'cheats-2026': {
		en: 'r6-siege-cheats-2026',
		es: 'trucos-tarkov-2026',
		fr: 'triche-tarkov-2026',
		de: 'tarkov-cheats-2026',
		pt: 'cheats-tarkov-2026',
		it: 'trucchi-tarkov-2026',
		nl: 'tarkov-cheats-2026',
		pl: 'cheaty-tarkov-2026',
		ru: 'chity-tarkov-2026',
		tr: 'tarkov-hileleri-2026',
		ar: 'tarkov-cheats-2026',
		ja: 'tarkov-cheats-2026',
		ko: 'tarkov-cheats-2026',
		zh: 'tarkov-cheats-2026',
		hi: 'tarkov-cheats-2026',
		id: 'tarkov-cheats-2026',
		th: 'tarkov-cheats-2026',
		vi: 'tarkov-cheats-2026',
		uk: 'chity-tarkov-2026',
		cs: 'tarkov-cheats-2026',
		ro: 'cheats-tarkov-2026',
		sv: 'tarkov-cheats-2026',
	},
	hacks: {
		en: 'r6-siege-cheats',
		es: 'hacks-trucos-tarkov',
		fr: 'hacks-triche-tarkov',
		de: 'tarkov-cheats',
		pt: 'hacks-cheats-tarkov',
		it: 'hacks-trucchi-tarkov',
		nl: 'tarkov-cheats',
		pl: 'hacks-cheatow-tarkov',
		ru: 'haksy-chity-tarkov',
		tr: 'tarkov-hile-hacks',
		ar: 'tarkov-cheats',
		ja: 'tarkov-cheats',
		ko: 'tarkov-cheats',
		zh: 'tarkov-cheats',
		hi: 'tarkov-cheats',
		id: 'tarkov-cheats',
		th: 'tarkov-cheats',
		vi: 'tarkov-cheats',
		uk: 'haksy-chity-tarkov',
		cs: 'tarkov-cheats',
		ro: 'hacks-cheats-tarkov',
		sv: 'tarkov-cheats',
	},
	'cheat-download': {
		en: 'r6-siege-cheat-download',
		es: 'descarga-trucos-tarkov',
		fr: 'telechargement-triche-tarkov',
		de: 'tarkov-cheat-download',
		pt: 'download-cheats-tarkov',
		it: 'download-trucchi-tarkov',
		nl: 'tarkov-cheat-download',
		pl: 'pobieranie-cheatow-tarkov',
		ru: 'skachat-chity-tarkov',
		tr: 'tarkov-hile-indir',
		ar: 'tarkov-cheat-download',
		ja: 'tarkov-cheat-download',
		ko: 'tarkov-cheat-download',
		zh: 'tarkov-cheat-download',
		hi: 'tarkov-cheat-download',
		id: 'tarkov-cheat-download',
		th: 'tarkov-cheat-download',
		vi: 'tarkov-cheat-download',
		uk: 'zavantazhennya-chitiv-tarkov',
		cs: 'tarkov-cheat-download',
		ro: 'descarcare-cheats-tarkov',
		sv: 'tarkov-cheat-download',
	},
	'mod-menu': {
		en: 'r6-siege-mod-menu',
		es: 'menu-mod-trucos-tarkov',
		fr: 'menu-mod-triche-tarkov',
		de: 'tarkov-mod-menu',
		pt: 'menu-mod-cheats-tarkov',
		it: 'menu-mod-trucchi-tarkov',
		nl: 'tarkov-mod-menu',
		pl: 'menu-mod-cheatow-tarkov',
		ru: 'mod-menu-chity-tarkov',
		tr: 'tarkov-mod-menu',
		ar: 'tarkov-mod-menu',
		ja: 'tarkov-mod-menu',
		ko: 'tarkov-mod-menu',
		zh: 'tarkov-mod-menu',
		hi: 'tarkov-mod-menu',
		id: 'tarkov-mod-menu',
		th: 'tarkov-mod-menu',
		vi: 'tarkov-mod-menu',
		uk: 'mod-menu-chity-tarkov',
		cs: 'tarkov-mod-menu',
		ro: 'meniu-mod-cheats-tarkov',
		sv: 'tarkov-mod-menu',
	},
	'soft-aim': {
		en: 'r6-siege-soft-aim',
		es: 'soft-aim-trucos-tarkov',
		fr: 'soft-aim-triche-tarkov',
		de: 'tarkov-soft-aim',
		pt: 'soft-aim-cheats-tarkov',
		it: 'soft-aim-trucchi-tarkov',
		nl: 'tarkov-soft-aim',
		pl: 'soft-aim-cheatow-tarkov',
		ru: 'soft-aim-chity-tarkov',
		tr: 'tarkov-soft-aim',
		ar: 'tarkov-soft-aim',
		ja: 'tarkov-soft-aim',
		ko: 'tarkov-soft-aim',
		zh: 'tarkov-soft-aim',
		hi: 'tarkov-soft-aim',
		id: 'tarkov-soft-aim',
		th: 'tarkov-soft-aim',
		vi: 'tarkov-soft-aim',
		uk: 'soft-aim-chity-tarkov',
		cs: 'tarkov-soft-aim',
		ro: 'soft-aim-cheats-tarkov',
		sv: 'tarkov-soft-aim',
	},
	'best-cheats': {
		en: 'best-r6-siege-cheats',
		es: 'mejores-trucos-tarkov',
		fr: 'meilleures-triches-tarkov',
		de: 'beste-escape-from-tarkov-cheats',
		pt: 'melhores-cheats-tarkov',
		it: 'migliori-trucchi-tarkov',
		nl: 'beste-escape-from-tarkov-cheats',
		pl: 'najlepsze-cheats-tarkov',
		ru: 'luchshie-chity-tarkov',
		tr: 'en-iyi-tarkov-hileleri',
		ar: 'best-tarkov-cheats',
		ja: 'best-tarkov-cheats',
		ko: 'best-tarkov-cheats',
		zh: 'best-tarkov-cheats',
		hi: 'best-tarkov-cheats',
		id: 'best-tarkov-cheats',
		th: 'best-tarkov-cheats',
		vi: 'best-tarkov-cheats',
		uk: 'naykrashchi-chity-tarkov',
		cs: 'nejlepsi-escape-from-tarkov-cheats',
		ro: 'cele-mai-bune-cheats-tarkov',
		sv: 'basta-escape-from-tarkov-cheats',
	},
	'aimbot-hack': {
		en: 'r6-siege-aimbot-hack',
		es: 'aimbot-hack-trucos-tarkov',
		fr: 'aimbot-hack-triche-tarkov',
		de: 'tarkov-aimbot-hack',
		pt: 'aimbot-hack-cheats-tarkov',
		it: 'aimbot-hack-trucchi-tarkov',
		nl: 'tarkov-aimbot-hack',
		pl: 'aimbot-hack-cheatow-tarkov',
		ru: 'aimbot-hack-chity-tarkov',
		tr: 'tarkov-aimbot-hack',
		ar: 'tarkov-aimbot-hack',
		ja: 'tarkov-aimbot-hack',
		ko: 'tarkov-aimbot-hack',
		zh: 'tarkov-aimbot-hack',
		hi: 'tarkov-aimbot-hack',
		id: 'tarkov-aimbot-hack',
		th: 'tarkov-aimbot-hack',
		vi: 'tarkov-aimbot-hack',
		uk: 'aimbot-hack-chity-tarkov',
		cs: 'tarkov-aimbot-hack',
		ro: 'aimbot-hack-cheats-tarkov',
		sv: 'tarkov-aimbot-hack',
	},
	'esp-hack': {
		en: 'r6-siege-esp-hack',
		es: 'esp-hack-trucos-tarkov',
		fr: 'esp-hack-triche-tarkov',
		de: 'tarkov-esp-hack',
		pt: 'esp-hack-cheats-tarkov',
		it: 'esp-hack-trucchi-tarkov',
		nl: 'tarkov-esp-hack',
		pl: 'esp-hack-cheatow-tarkov',
		ru: 'esp-hack-chity-tarkov',
		tr: 'tarkov-esp-hack',
		ar: 'tarkov-esp-hack',
		ja: 'tarkov-esp-hack',
		ko: 'tarkov-esp-hack',
		zh: 'tarkov-esp-hack',
		hi: 'tarkov-esp-hack',
		id: 'tarkov-esp-hack',
		th: 'tarkov-esp-hack',
		vi: 'tarkov-esp-hack',
		uk: 'esp-hack-chity-tarkov',
		cs: 'tarkov-esp-hack',
		ro: 'esp-hack-cheats-tarkov',
		sv: 'tarkov-esp-hack',
	},
	'unlock-all': {
		en: 'r6-siege-unlock-all',
		es: 'unlock-all-trucos-tarkov',
		fr: 'unlock-all-triche-tarkov',
		de: 'tarkov-unlock-all',
		pt: 'unlock-all-cheats-tarkov',
		it: 'unlock-all-trucchi-tarkov',
		nl: 'tarkov-unlock-all',
		pl: 'unlock-all-cheatow-tarkov',
		ru: 'unlock-all-chity-tarkov',
		tr: 'tarkov-unlock-all',
		ar: 'tarkov-unlock-all',
		ja: 'tarkov-unlock-all',
		ko: 'tarkov-unlock-all',
		zh: 'tarkov-unlock-all',
		hi: 'tarkov-unlock-all',
		id: 'tarkov-unlock-all',
		th: 'tarkov-unlock-all',
		vi: 'tarkov-unlock-all',
		uk: 'unlock-all-chity-tarkov',
		cs: 'tarkov-unlock-all',
		ro: 'unlock-all-cheats-tarkov',
		sv: 'tarkov-unlock-all',
	},
	privacy: {
		en: 'privacy-policy',
		es: 'politica-privacidad',
		fr: 'politique-confidentialite',
		de: 'datenschutz',
		pt: 'politica-privacidade',
		it: 'privacy-policy',
		nl: 'privacybeleid',
		pl: 'polityka-prywatnosci',
		ru: 'politika-konfidencialnosti',
		tr: 'gizlilik-politikasi',
		ar: 'privacy-policy',
		ja: 'privacy-policy',
		ko: 'privacy-policy',
		zh: 'privacy-policy',
		hi: 'privacy-policy',
		id: 'privacy-policy',
		th: 'privacy-policy',
		vi: 'privacy-policy',
		uk: 'polityka-konfidentsijnosti',
		cs: 'ochrana-osobnich-udaju',
		ro: 'politica-confidentialitate',
		sv: 'integritetspolicy',
	},
	refund: {
		en: 'refund-policy',
		es: 'politica-reembolso',
		fr: 'politique-remboursement',
		de: 'rueckerstattung',
		pt: 'politica-reembolso',
		it: 'politica-rimborso',
		nl: 'terugbetalingsbeleid',
		pl: 'polityka-zwrotow',
		ru: 'politika-vozvrata',
		tr: 'iade-politikasi',
		ar: 'refund-policy',
		ja: 'refund-policy',
		ko: 'refund-policy',
		zh: 'refund-policy',
		hi: 'refund-policy',
		id: 'refund-policy',
		th: 'refund-policy',
		vi: 'refund-policy',
		uk: 'polityka-povorennya',
		cs: 'refund-policy',
		ro: 'politica-rambursare',
		sv: 'aterbetalningspolicy',
	},
	terms: {
		en: 'terms',
		es: 'terminos-uso',
		fr: 'conditions-utilisation',
		de: 'nutzungsbedingungen',
		pt: 'termos-uso',
		it: 'termini-uso',
		nl: 'gebruiksvoorwaarden',
		pl: 'regulamin',
		ru: 'usloviya-ispolzovaniya',
		tr: 'kullanim-kosullari',
		ar: 'terms',
		ja: 'terms',
		ko: 'terms',
		zh: 'terms',
		hi: 'terms',
		id: 'terms',
		th: 'terms',
		vi: 'terms',
		uk: 'umovy-vykorystannya',
		cs: 'podminky-uziti',
		ro: 'termeni-utilizare',
		sv: 'anvandarvillkor',
	},
};

export const pageIds = Object.keys(englishPaths) as PageId[];

export function getLocalizedPath(pageId: PageId, locale: LocaleCode): string {
	if (locale === defaultLocale) {
		return englishPaths[pageId];
	}
	const slug = localizedSlugs[pageId][locale];
	return slug ? `/${locale}/${slug}/` : `/${locale}/`;
}

/** Map English root paths to the correct locale URL (for CTAs and inline links). */
export function localizeInternalHref(href: string, locale: LocaleCode): string {
	if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) {
		return href;
	}
	const trimmed = href.replace(/\/+$/, '') || '/';
	const withSlash = trimmed === '/' ? '/' : `${trimmed}/`;
	for (const pageId of pageIds) {
		const english = englishPaths[pageId];
		if (english === withSlash || english.replace(/\/+$/, '') === trimmed) {
			const targetId = getCannibalTargetId(pageId) as PageId;
			return getLocalizedPath(targetId, locale);
		}
	}
	return href;
}

/** Canonical absolute URL — always https apex with trailing slash (matches Layout.astro). */
export function buildCanonicalUrl(path: string): string {
	const normalized =
		!path || path === '/'
			? '/'
			: path.endsWith('/') || path.includes('.')
				? path
				: `${path}/`;
	return new URL(normalized, siteConfig.url).href;
}

export function absoluteLocalizedUrl(pageId: PageId, locale: LocaleCode): string {
	return buildCanonicalUrl(getLocalizedPath(pageId, locale));
}

export type HreflangAlternate = { hreflang: string; href: string };

/** Self-referential hreflang for single-locale pages (reviews, 404). */
export function getSelfHreflangAlternates(
	path: string,
	locale: LocaleCode = defaultLocale,
): HreflangAlternate[] {
	const href = buildCanonicalUrl(path);
	return [
		{ hreflang: localeMap[locale].hreflang, href },
		{ hreflang: 'x-default', href },
	];
}

export function getHreflangAlternates(pageId: PageId, currentLocale: LocaleCode = defaultLocale) {
	const resolvedId = (isCannibalPageId(pageId) ? getCannibalTargetId(pageId) : pageId) as PageId;
	const byLocale = localeCodes.map((code) => ({
		hreflang: localeMap[code].hreflang,
		href: absoluteLocalizedUrl(resolvedId, code),
		code,
	}));
	const self = byLocale.find((alt) => alt.code === currentLocale)!;
	const others = byLocale.filter((alt) => alt.code !== currentLocale);
	const xDefault = {
		hreflang: 'x-default' as const,
		href: absoluteLocalizedUrl(resolvedId, defaultLocale),
	};
	// Self-referential hreflang first — required by Google/Seobility for the active locale.
	return [
		{ hreflang: self.hreflang, href: self.href },
		...others.map(({ hreflang, href }) => ({ hreflang, href })),
		xDefault,
	];
}

export function resolvePageIdFromPath(path: string): PageId | undefined {
	const normalized = path.endsWith('/') ? path : `${path}/`;
	for (const id of pageIds) {
		if (englishPaths[id] === normalized) return id;
	}
	return undefined;
}

/** Parsed locale + page from any site URL (English root or /{lang}/…). */
export type PageContext = {
	locale: LocaleCode;
	pageId?: PageId;
	isBlogIndex?: boolean;
	blogSlug?: string;
};

function normalizePathname(pathname: string): string {
	if (!pathname || pathname === '/') return '/';
	if (pathname.includes('.') || pathname.endsWith('/')) return pathname;
	return `${pathname}/`;
}

/** Resolve locale and page/blog context from the current URL path. */
export function resolvePageContextFromPath(pathname: string): PageContext {
	const path = normalizePathname(pathname);

	if (path === '/') {
		return { locale: defaultLocale, pageId: 'home' };
	}

	const segments = path.split('/').filter(Boolean);
	let locale: LocaleCode = defaultLocale;
	let offset = 0;

	if (segments.length > 0 && isLocaleCode(segments[0]) && segments[0] !== defaultLocale) {
		locale = segments[0];
		offset = 1;
	}

	const rest = segments.slice(offset);

	if (rest.length === 0) {
		return { locale, pageId: 'home' };
	}

	if (rest[0] === 'blog') {
		if (rest.length === 1) {
			return { locale, isBlogIndex: true };
		}
		return { locale, blogSlug: rest[1] };
	}

	if (locale === defaultLocale) {
		return { locale, pageId: resolvePageIdFromPath(path) };
	}

	return { locale, pageId: resolvePageFromLocalizedPath(locale, rest[0]) };
}

/** Target URL for the same page in another locale (non-blog pages). */
export function getPageLocaleSwitchHref(context: PageContext, targetLocale: LocaleCode): string {
	if (context.pageId) {
		return getLocalizedPath(context.pageId, targetLocale);
	}
	return getLocalizedPath('home', targetLocale);
}

export function hreflangLinksXml(pageId: PageId, escapeXml: (v: string) => string): string {
	return getHreflangAlternates(pageId)
		.map(
			(alt) =>
				`    <xhtml:link rel="alternate" hreflang="${escapeXml(alt.hreflang)}" href="${escapeXml(alt.href)}"/>`,
		)
		.join('\n');
}

export function resolvePageFromLocalizedPath(
	locale: LocaleCode,
	slug: string | undefined,
): PageId | undefined {
	if (!slug) return 'home';
	for (const pageId of pageIds) {
		if (localizedSlugs[pageId][locale] === slug) return pageId;
	}
	return undefined;
}

/** Map Accept-Language header to preferred locale (region-aware). */
export function localeFromAcceptLanguage(header: string | null): LocaleCode {
	if (!header) return defaultLocale;
	const prefs = header
		.split(',')
		.map((part) => {
			const [tag, qPart] = part.trim().split(';');
			const q = qPart?.startsWith('q=') ? Number.parseFloat(qPart.slice(2)) : 1;
			return { tag: tag.toLowerCase(), q };
		})
		.sort((a, b) => b.q - a.q);

	for (const { tag } of prefs) {
		const primary = tag.split('-')[0];
		if (localeCodes.includes(primary as LocaleCode)) return primary as LocaleCode;
	}
	return defaultLocale;
}

export function getNavForLocale(locale: LocaleCode, labels: Record<string, string>) {
	const items: { label: string; href: string; pageId?: PageId }[] = [
		{ label: labels.home, href: getLocalizedPath('home', locale), pageId: 'home' },
	{ label: labels.hacks ?? 'Hacks', href: getLocalizedPath('hacks', locale), pageId: 'hacks' },
		{ label: labels.aimbot, href: getLocalizedPath('tarkov-aimbot', locale), pageId: 'tarkov-aimbot' },
		{ label: labels.esp, href: getLocalizedPath('tarkov-esp', locale), pageId: 'tarkov-esp' },
		{ label: 'Blog', href: locale === defaultLocale ? '/blog/' : `/${locale}/blog/` },
		{ label: labels.features, href: getLocalizedPath('features', locale), pageId: 'features' },
		{ label: labels.pricing, href: getLocalizedPath('pricing', locale), pageId: 'pricing' },
		{ label: labels.setup, href: getLocalizedPath('setup', locale), pageId: 'setup' },
		{ label: labels.updates, href: getLocalizedPath('updates', locale), pageId: 'updates' },
		{ label: labels.faq, href: getLocalizedPath('faq', locale), pageId: 'faq' },
	];
	return items;
}
