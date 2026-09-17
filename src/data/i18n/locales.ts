export type LocaleCode =
	| 'en'
	| 'es'
	| 'fr'
	| 'de'
	| 'pt'
	| 'it'
	| 'nl'
	| 'pl'
	| 'ru'
	| 'tr'
	| 'ar'
	| 'ja'
	| 'ko'
	| 'zh'
	| 'hi'
	| 'id'
	| 'th'
	| 'vi'
	| 'uk'
	| 'cs'
	| 'ro'
	| 'sv';

export type LocaleMeta = {
	code: LocaleCode;
	name: string;
	nativeName: string;
	hreflang: string;
	ogLocale: string;
	dir: 'ltr' | 'rtl';
	region: string;
};

/** Full locale metadata, including retired prefixes that 301 to English. */
export const allLocaleMetas: LocaleMeta[] = [
	{ code: 'en', name: 'English', nativeName: 'English', hreflang: 'en', ogLocale: 'en_US', dir: 'ltr', region: 'English' },
	{ code: 'es', name: 'Spanish', nativeName: 'Español', hreflang: 'es', ogLocale: 'es_ES', dir: 'ltr', region: '' },
	{ code: 'fr', name: 'French', nativeName: 'Français', hreflang: 'fr', ogLocale: 'fr_FR', dir: 'ltr', region: '' },
	{ code: 'de', name: 'German', nativeName: 'Deutsch', hreflang: 'de', ogLocale: 'de_DE', dir: 'ltr', region: '' },
	{ code: 'pt', name: 'Portuguese', nativeName: 'Português', hreflang: 'pt', ogLocale: 'pt_BR', dir: 'ltr', region: '' },
	{ code: 'it', name: 'Italian', nativeName: 'Italiano', hreflang: 'it', ogLocale: 'it_IT', dir: 'ltr', region: '' },
	{ code: 'nl', name: 'Dutch', nativeName: 'Nederlands', hreflang: 'nl', ogLocale: 'nl_NL', dir: 'ltr', region: '' },
	{ code: 'pl', name: 'Polish', nativeName: 'Polski', hreflang: 'pl', ogLocale: 'pl_PL', dir: 'ltr', region: '' },
	{ code: 'ru', name: 'Russian', nativeName: 'Русский', hreflang: 'ru', ogLocale: 'ru_RU', dir: 'ltr', region: '' },
	{ code: 'tr', name: 'Turkish', nativeName: 'Türkçe', hreflang: 'tr', ogLocale: 'tr_TR', dir: 'ltr', region: '' },
	{ code: 'ar', name: 'Arabic', nativeName: 'العربية', hreflang: 'ar', ogLocale: 'ar_SA', dir: 'rtl', region: '' },
	{ code: 'ja', name: 'Japanese', nativeName: '日本語', hreflang: 'ja', ogLocale: 'ja_JP', dir: 'ltr', region: '' },
	{ code: 'ko', name: 'Korean', nativeName: '한국어', hreflang: 'ko', ogLocale: 'ko_KR', dir: 'ltr', region: '' },
	{ code: 'zh', name: 'Chinese', nativeName: '中文', hreflang: 'zh', ogLocale: 'zh_CN', dir: 'ltr', region: '' },
	{ code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', hreflang: 'hi', ogLocale: 'hi_IN', dir: 'ltr', region: '' },
	{ code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', hreflang: 'id', ogLocale: 'id_ID', dir: 'ltr', region: '' },
	{ code: 'th', name: 'Thai', nativeName: 'ไทย', hreflang: 'th', ogLocale: 'th_TH', dir: 'ltr', region: '' },
	{ code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', hreflang: 'vi', ogLocale: 'vi_VN', dir: 'ltr', region: '' },
	{ code: 'uk', name: 'Ukrainian', nativeName: 'Українська', hreflang: 'uk', ogLocale: 'uk_UA', dir: 'ltr', region: '' },
	{ code: 'cs', name: 'Czech', nativeName: 'Čeština', hreflang: 'cs', ogLocale: 'cs_CZ', dir: 'ltr', region: '' },
	{ code: 'ro', name: 'Romanian', nativeName: 'Română', hreflang: 'ro', ogLocale: 'ro_RO', dir: 'ltr', region: '' },
	{ code: 'sv', name: 'Swedish', nativeName: 'Svenska', hreflang: 'sv', ogLocale: 'sv_SE', dir: 'ltr', region: '' },
];

/** Shipped UI / hreflang locales. English-only until real translations exist. */
export const locales: LocaleMeta[] = allLocaleMetas.filter((l) => l.code === 'en');

export const defaultLocale: LocaleCode = 'en';

export const localeCodes = locales.map((l) => l.code);

export const redirectLocaleCodes = allLocaleMetas
	.filter((l) => l.code !== defaultLocale)
	.map((l) => l.code);

export const localeMap = Object.fromEntries(allLocaleMetas.map((l) => [l.code, l])) as Record<
	LocaleCode,
	LocaleMeta
>;

export function isLocaleCode(value: string): value is LocaleCode {
	return value in localeMap;
}

export function isPublicLocale(value: string): value is LocaleCode {
	return localeCodes.includes(value as LocaleCode);
}

export function getLocale(code: string): LocaleMeta | undefined {
	return isLocaleCode(code) ? localeMap[code] : undefined;
}

/** UI strings for blog index pages per locale. */
export const blogUi: Record<
	LocaleCode,
	{
		blogTitle: string;
		blogDescription: string;
		blogH1: string;
		blogIntro: string;
		readMore: string;
		published: string;
		updated: string;
		relatedPosts: string;
		allPosts: string;
		home: string;
		language: string;
	}
> = {
	en: {
		blogTitle: 'Tarkov Cheats Forum | Cheats',
		blogDescription:
			'Tarkov Cheats community forum — closed threads on ESP, aimbot, loot ESP, Cloud DMA, updates, and buyer notes for the raids license at eftcheat.net.',
		blogH1: 'Forum',
		blogIntro:
			'Real questions from the community forum — setup fixes, ESP and aimbot settings, pricing, and undetected status. Threads are archived and closed to new replies.',
		readMore: 'Open thread',
		published: 'Started',
		updated: 'Last reply',
		relatedPosts: 'Related threads',
		allPosts: 'All threads',
		home: 'Tarkov Cheats home',
		language: 'Language',
	},
	es: {
		blogTitle: 'Blog Tarkov Cheats 2026 | Guías en 22 idiomas',
		blogDescription:
			'Blog de Tarkov Cheats con guías de trucos indetectables, ESP wallhack, radar y Aimbot para Escape from Tarkov en PC Windows.',
		blogH1: 'Blog Tarkov Cheats — Guías globales',
		blogIntro:
			'Guías SEO de trucos Escape from Tarkov indetectables, ESP wallhack, radar hack, Aimbot y mantenimiento BattlEye anti-cheat en 22 idiomas.',
		readMore: 'Leer guía',
		published: 'Publicado',
		updated: 'Actualizado',
		relatedPosts: 'Guías Escape from Tarkov relacionadas',
		allPosts: 'Todos los artículos',
		home: 'Inicio Tarkov Cheats',
		language: 'Idioma',
	},
	fr: {
		blogTitle: 'Blog Tarkov Cheats 2026 | Guides en 22 langues',
		blogDescription:
			'Blog Tarkov Cheats : triches indétectables, ESP wallhack, radar et Aimbot pour Escape from Tarkov sur PC Windows.',
		blogH1: 'Blog Tarkov Cheats — Guides mondiaux',
		blogIntro:
			'Guides SEO triches Escape from Tarkov indétectables, ESP wallhack, radar hack, Aimbot et BattlEye anti-cheat en 22 langues.',
		readMore: 'Lire le guide',
		published: 'Publié',
		updated: 'Mis à jour',
		relatedPosts: 'Guides Escape from Tarkov associés',
		allPosts: 'Tous les articles',
		home: 'Accueil Tarkov Cheats',
		language: 'Langue',
	},
	de: {
		blogTitle: 'Tarkov Cheats Blog 2026 | Guides in 22 Sprachen',
		blogDescription:
			'Tarkov Cheats Blog mit undetected ESP, Wallhack, Radar und Aimbot Guides für Escape from Tarkov auf Windows PC.',
		blogH1: 'Tarkov Cheats Blog — Globale Guides',
		blogIntro:
			'SEO-Guides für undetected Tarkov Cheats, ESP Wallhack, Radar Hack, Aimbot und BattlEye anti-cheat in 22 Sprachen.',
		readMore: 'Guide lesen',
		published: 'Veröffentlicht',
		updated: 'Aktualisiert',
		relatedPosts: 'Verwandte Escape from Tarkov Guides',
		allPosts: 'Alle Beiträge',
		home: 'Tarkov Cheats Start',
		language: 'Sprache',
	},
	pt: {
		blogTitle: 'Blog Tarkov Cheats 2026 | Guias em 22 idiomas',
		blogDescription:
			'Blog Tarkov Cheats com guias de cheats indetectáveis, ESP wallhack, radar e Aimbot para Escape from Tarkov no PC.',
		blogH1: 'Blog Tarkov Cheats — Guias globais',
		blogIntro:
			'Guias SEO de cheats Escape from Tarkov indetectáveis, ESP wallhack, radar hack, Aimbot e BattlEye anti-cheat em 22 idiomas.',
		readMore: 'Ler guia',
		published: 'Publicado',
		updated: 'Atualizado',
		relatedPosts: 'Guias Escape from Tarkov relacionados',
		allPosts: 'Todos os posts',
		home: 'Início Tarkov Cheats',
		language: 'Idioma',
	},
	it: {
		blogTitle: 'Blog Tarkov Cheats 2026 | Guide in 22 lingue',
		blogDescription:
			'Blog Tarkov Cheats con guide cheat indetectable, ESP wallhack, radar e Aimbot per Escape from Tarkov su PC Windows.',
		blogH1: 'Blog Tarkov Cheats — Guide globali',
		blogIntro:
			'Guide SEO cheat Escape from Tarkov indetectable, ESP wallhack, radar hack, Aimbot e BattlEye anti-cheat in 22 lingue.',
		readMore: 'Leggi guida',
		published: 'Pubblicato',
		updated: 'Aggiornato',
		relatedPosts: 'Guide Escape from Tarkov correlate',
		allPosts: 'Tutti gli articoli',
		home: 'Home Tarkov Cheats',
		language: 'Lingua',
	},
	nl: {
		blogTitle: 'Tarkov Cheats Blog 2026 | Gidsen in 22 talen',
		blogDescription:
			'Tarkov Cheats blog met undetected ESP, wallhack, radar en Aimbot gidsen voor Escape from Tarkov op Windows PC.',
		blogH1: 'Tarkov Cheats Blog — Wereldwijde gidsen',
		blogIntro:
			'SEO-gidsen voor undetected Tarkov cheats, ESP wallhack, radar hack, Aimbot en BattlEye anti-cheat in 22 talen.',
		readMore: 'Lees gids',
		published: 'Gepubliceerd',
		updated: 'Bijgewerkt',
		relatedPosts: 'Gerelateerde Escape from Tarkov gidsen',
		allPosts: 'Alle posts',
		home: 'Tarkov Cheats home',
		language: 'Taal',
	},
	pl: {
		blogTitle: 'Blog Tarkov Cheats 2026 | Poradniki w 22 językach',
		blogDescription:
			'Blog Tarkov Cheats z poradnikami undetected ESP, wallhack, radar i Aimbot dla Escape from Tarkov na PC.',
		blogH1: 'Blog Tarkov Cheats — Globalne poradniki',
		blogIntro:
			'Poradniki SEO undetected cheatów Escape from Tarkov, ESP wallhack, radar hack, Aimbot i BattlEye anti-cheat w 22 językach.',
		readMore: 'Czytaj poradnik',
		published: 'Opublikowano',
		updated: 'Zaktualizowano',
		relatedPosts: 'Powiązane poradniki Escape from Tarkov',
		allPosts: 'Wszystkie artykuły',
		home: 'Strona główna Tarkov Cheats',
		language: 'Język',
	},
	ru: {
		blogTitle: 'Блог Tarkov Cheats 2026 | Гайды на 22 языках',
		blogDescription:
			'Блог Tarkov Cheats: undetected ESP, wallhack, radar и Aimbot для Escape from Tarkov на Windows PC.',
		blogH1: 'Блог Tarkov Cheats — Глобальные гайды',
		blogIntro:
			'SEO-гайды по undetected читам Escape from Tarkov, ESP wallhack, radar hack, Aimbot и BattlEye anti-cheat на 22 языках.',
		readMore: 'Читать гайд',
		published: 'Опубликовано',
		updated: 'Обновлено',
		relatedPosts: 'Похожие гайды Escape from Tarkov',
		allPosts: 'Все статьи',
		home: 'Главная Tarkov Cheats',
		language: 'Язык',
	},
	tr: {
		blogTitle: 'Tarkov Cheats Blog 2026 | 22 dilde rehberler',
		blogDescription:
			'Tarkov Cheats blog: undetected ESP, wallhack, radar ve Aimbot rehberleri Escape from Tarkov Windows PC.',
		blogH1: 'Tarkov Cheats Blog — Küresel rehberler',
		blogIntro:
			'Undetected Escape from Tarkov hileleri, ESP wallhack, radar hack, Aimbot ve BattlEye anti-cheat SEO rehberleri 22 dilde.',
		readMore: 'Rehberi oku',
		published: 'Yayınlandı',
		updated: 'Güncellendi',
		relatedPosts: 'İlgili Escape from Tarkov rehberleri',
		allPosts: 'Tüm yazılar',
		home: 'Tarkov Cheats ana sayfa',
		language: 'Dil',
	},
	ar: {
		blogTitle: 'مدونة Tarkov Cheats 2026 | أدلة بـ 22 لغة',
		blogDescription:
			'مدونة Tarkov Cheats: غش undetected وESP wallhack ورadar وAimbot لـ Escape from Tarkov على Windows PC.',
		blogH1: 'مدونة Tarkov Cheats — أدلة عالمية',
		blogIntro:
			'أدلة SEO لغش Escape from Tarkov undetected وESP wallhack ورadar hack وAimbot وBattlEye anti-cheat بـ 22 لغة.',
		readMore: 'اقرأ الدليل',
		published: 'نُشر',
		updated: 'تم التحديث',
		relatedPosts: 'أدلة Escape from Tarkov ذات صلة',
		allPosts: 'جميع المقالات',
		home: 'الرئيسية Tarkov Cheats',
		language: 'اللغة',
	},
	ja: {
		blogTitle: 'Tarkov Cheats ブログ 2026 | 22言語ガイド',
		blogDescription:
			'Tarkov Cheatsブログ：undetected ESP、wallhack、radar、Aimbotガイド。Escape from Tarkov Windows PC向け。',
		blogH1: 'Tarkov Cheats ブログ — グローバルガイド',
		blogIntro:
			'undetected Escape from Tarkovチート、ESP wallhack、radar hack、Aimbot、BattlEye anti-cheatのSEOガイドを22言語で提供。',
		readMore: 'ガイドを読む',
		published: '公開日',
		updated: '更新日',
		relatedPosts: '関連Escape from Tarkovガイド',
		allPosts: 'すべての記事',
		home: 'Tarkov Cheats ホーム',
		language: '言語',
	},
	ko: {
		blogTitle: 'Tarkov Cheats 블로그 2026 | 22개 언어 가이드',
		blogDescription:
			'Tarkov Cheats 블로그: undetected ESP, wallhack, radar, Aimbot 가이드. Escape from Tarkov Windows PC.',
		blogH1: 'Tarkov Cheats 블로그 — 글로벌 가이드',
		blogIntro:
			'undetected Escape from Tarkov 치트, ESP wallhack, radar hack, Aimbot, BattlEye anti-cheat SEO 가이드를 22개 언어로 제공.',
		readMore: '가이드 읽기',
		published: '게시일',
		updated: '업데이트',
		relatedPosts: '관련 Escape from Tarkov 가이드',
		allPosts: '모든 게시물',
		home: 'Tarkov Cheats 홈',
		language: '언어',
	},
	zh: {
		blogTitle: 'Tarkov Cheats 博客 2026 | 22种语言指南',
		blogDescription:
			'Tarkov Cheats博客：undetected ESP、wallhack、radar和Aimbot指南，适用于Escape from Tarkov Windows PC。',
		blogH1: 'Tarkov Cheats 博客 — 全球指南',
		blogIntro:
			'undetected Escape from Tarkov作弊、ESP wallhack、radar hack、Aimbot和BattlEye anti-cheat的SEO指南，共22种语言。',
		readMore: '阅读指南',
		published: '发布',
		updated: '更新',
		relatedPosts: '相关Escape from Tarkov指南',
		allPosts: '所有文章',
		home: 'Tarkov Cheats 首页',
		language: '语言',
	},
	hi: {
		blogTitle: 'Tarkov Cheats ब्लॉग 2026 | 22 भाषाओं में गाइड',
		blogDescription:
			'Tarkov Cheats ब्लॉग: undetected ESP, wallhack, radar और Aimbot गाइड Escape from Tarkov Windows PC के लिए।',
		blogH1: 'Tarkov Cheats ब्लॉग — वैश्विक गाइड',
		blogIntro:
			'undetected Tarkov cheats, ESP wallhack, radar hack, Aimbot और BattlEye anti-cheat SEO गाइड 22 भाषाओं में।',
		readMore: 'गाइड पढ़ें',
		published: 'प्रकाशित',
		updated: 'अपडेट',
		relatedPosts: 'संबंधित Escape from Tarkov गाइड',
		allPosts: 'सभी पोस्ट',
		home: 'Tarkov Cheats होम',
		language: 'भाषा',
	},
	id: {
		blogTitle: 'Blog Tarkov Cheats 2026 | Panduan 22 bahasa',
		blogDescription:
			'Blog Tarkov Cheats: panduan undetected ESP, wallhack, radar dan Aimbot untuk Escape from Tarkov di PC Windows.',
		blogH1: 'Blog Tarkov Cheats — Panduan global',
		blogIntro:
			'Panduan SEO cheat Escape from Tarkov undetected, ESP wallhack, radar hack, Aimbot dan BattlEye anti-cheat dalam 22 bahasa.',
		readMore: 'Baca panduan',
		published: 'Dipublikasikan',
		updated: 'Diperbarui',
		relatedPosts: 'Panduan Escape from Tarkov terkait',
		allPosts: 'Semua artikel',
		home: 'Beranda Tarkov Cheats',
		language: 'Bahasa',
	},
	th: {
		blogTitle: 'บล็อก Tarkov Cheats 2026 | คู่มือ 22 ภาษา',
		blogDescription:
			'บล็อก Tarkov Cheats: คู่มือ undetected ESP, wallhack, radar และ Aimbot สำหรับ Escape from Tarkov บน PC',
		blogH1: 'บล็อก Tarkov Cheats — คู่มือทั่วโลก',
		blogIntro:
			'คู่มือ SEO สำหรับ cheat Escape from Tarkov undetected, ESP wallhack, radar hack, Aimbot และ BattlEye anti-cheat 22 ภาษา',
		readMore: 'อ่านคู่มือ',
		published: 'เผยแพร่',
		updated: 'อัปเดต',
		relatedPosts: 'คู่มือ Escape from Tarkov ที่เกี่ยวข้อง',
		allPosts: 'บทความทั้งหมด',
		home: 'หน้าแรก Tarkov Cheats',
		language: 'ภาษา',
	},
	vi: {
		blogTitle: 'Blog Tarkov Cheats 2026 | Hướng dẫn 22 ngôn ngữ',
		blogDescription:
			'Blog Tarkov Cheats: hướng dẫn undetected ESP, wallhack, radar và Aimbot cho Escape from Tarkov trên PC.',
		blogH1: 'Blog Tarkov Cheats — Hướng dẫn toàn cầu',
		blogIntro:
			'Hướng dẫn SEO cheat Escape from Tarkov undetected, ESP wallhack, radar hack, Aimbot và BattlEye anti-cheat bằng 22 ngôn ngữ.',
		readMore: 'Đọc hướng dẫn',
		published: 'Xuất bản',
		updated: 'Cập nhật',
		relatedPosts: 'Hướng dẫn Escape from Tarkov liên quan',
		allPosts: 'Tất cả bài viết',
		home: 'Trang chủ Tarkov Cheats',
		language: 'Ngôn ngữ',
	},
	uk: {
		blogTitle: 'Блог Tarkov Cheats 2026 | Гайди 22 мовами',
		blogDescription:
			'Блог Tarkov Cheats: undetected ESP, wallhack, radar та Aimbot для Escape from Tarkov на Windows PC.',
		blogH1: 'Блог Tarkov Cheats — Глобальні гайди',
		blogIntro:
			'SEO-гайди з undetected читів Escape from Tarkov, ESP wallhack, radar hack, Aimbot та BattlEye anti-cheat 22 мовами.',
		readMore: 'Читати гайд',
		published: 'Опубліковано',
		updated: 'Оновлено',
		relatedPosts: "Пов'язані гайди Escape from Tarkov",
		allPosts: 'Усі статті',
		home: 'Головна Tarkov Cheats',
		language: 'Мова',
	},
	cs: {
		blogTitle: 'Blog Tarkov Cheats 2026 | Průvodce ve 22 jazycích',
		blogDescription:
			'Blog Tarkov Cheats: undetected ESP, wallhack, radar a Aimbot pro Escape from Tarkov na Windows PC.',
		blogH1: 'Blog Tarkov Cheats — Globální průvodce',
		blogIntro:
			'SEO průvodce undetected Tarkov cheaty, ESP wallhack, radar hack, Aimbot a BattlEye anti-cheat ve 22 jazycích.',
		readMore: 'Číst průvodce',
		published: 'Publikováno',
		updated: 'Aktualizováno',
		relatedPosts: 'Související Escape from Tarkov průvodce',
		allPosts: 'Všechny články',
		home: 'Domů Tarkov Cheats',
		language: 'Jazyk',
	},
	ro: {
		blogTitle: 'Blog Tarkov Cheats 2026 | Ghiduri în 22 de limbi',
		blogDescription:
			'Blog Tarkov Cheats: ghiduri undetected ESP, wallhack, radar și Aimbot pentru Escape from Tarkov pe PC.',
		blogH1: 'Blog Tarkov Cheats — Ghiduri globale',
		blogIntro:
			'Ghiduri SEO cheat-uri Escape from Tarkov undetected, ESP wallhack, radar hack, Aimbot și BattlEye anti-cheat în 22 de limbi.',
		readMore: 'Citește ghidul',
		published: 'Publicat',
		updated: 'Actualizat',
		relatedPosts: 'Ghiduri Escape from Tarkov related',
		allPosts: 'Toate articolele',
		home: 'Acasă Tarkov Cheats',
		language: 'Limbă',
	},
	sv: {
		blogTitle: 'Tarkov Cheats Blogg 2026 | Guider på 22 språk',
		blogDescription:
			'Tarkov Cheats blogg med undetected ESP, wallhack, radar och Aimbot guider för Escape from Tarkov på PC.',
		blogH1: 'Tarkov Cheats Blogg — Globala guider',
		blogIntro:
			'SEO-guider för undetected Tarkov cheats, ESP wallhack, radar hack, Aimbot och BattlEye anti-cheat på 22 språk.',
		readMore: 'Läs guide',
		published: 'Publicerad',
		updated: 'Uppdaterad',
		relatedPosts: 'Relaterade Escape from Tarkov guider',
		allPosts: 'Alla inlägg',
		home: 'Tarkov Cheats hem',
		language: 'Språk',
	},
};
