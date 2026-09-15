import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta } from './constants.mjs';
import { phrases } from './phrases.mjs';
import { PAGE_IMAGE_ALTS } from './image-alts.mjs';

/** Page-specific translated meta for home across locales. */
const PAGE_META_HOME = {
	es: { title: 'Tarkov Cheats 2026 | ESP, Wallhack y Aimbot', desc: 'Trucos Escape from Tarkov indetectables para Escape from Tarkov en PC. ESP wallhack, radar hack y Aimbot con mantenimiento BattlEye anti-cheat. Entrega digital instantánea.', h1: 'Tarkov Cheats — ESP, Wallhack y Aimbot indetectables', intro: 'Paquete undetected para Escape from Tarkov en Windows PC: ESP wallhack, radar y Aimbot con mantenimiento BattlEye anti-cheat tras cada parche.', imageAlt: 'Tarkov ESP player tags hack', gallery: 'Galería Tarkov Cheats — ESP, Aimbot y wallhack', cta2: 'Ver funciones', h2a: 'Por qué eligen Tarkov Cheats en 2026', h2b: 'ESP wallhack, radar y Aimbot en una licencia', topicA: 'Ideal para leer raids de PMC y Scav.', topicB: 'Una licencia en lugar de herramientas separadas.' },
	fr: { title: 'Tarkov Cheats 2026 | ESP, Wallhack et Aimbot', desc: 'Triches Escape from Tarkov indétectables pour Escape from Tarkov sur PC. ESP wallhack, radar hack et Aimbot avec maintenance BattlEye anti-cheat. Livraison numérique instantanée.', h1: 'Tarkov Cheats — ESP, Wallhack et Aimbot indétectables', intro: 'Pack undetected pour Escape from Tarkov sur PC Windows : ESP wallhack, radar et Aimbot avec maintenance BattlEye anti-cheat après chaque patch.', imageAlt: 'Tarkov ESP player tags hack', gallery: 'Galerie Tarkov Cheats — ESP, Aimbot et wallhack', cta2: 'Voir les fonctions', h2a: 'Pourquoi choisir Tarkov Cheats en 2026', h2b: 'ESP wallhack, radar et Aimbot en une licence', topicA: 'Parfait pour lire les raids PMC et Scav.', topicB: 'Une licence au lieu d\'outils séparés.' },
	de: { title: 'Tarkov Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Tarkov Cheats für Escape from Tarkov auf PC. ESP Wallhack, Radar Hack und Aimbot mit BattlEye anti-cheat-Wartung. Sofortige digitale Lieferung.', h1: 'Tarkov Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC Paket für Escape from Tarkov: ESP Wallhack, Radar und Aimbot mit BattlEye anti-cheat-Wartung nach jedem Patch.', imageAlt: 'Tarkov ESP player tags hack', gallery: 'Tarkov Cheats Galerie — ESP, Aimbot und Wallhack', cta2: 'Features ansehen', h2a: 'Warum Tarkov Cheats 2026 führt', h2b: 'ESP Wallhack, Radar und Aimbot in einer Lizenz', topicA: 'Ideal um feindliche PMCs und Scavs in Raids zu lesen.', topicB: 'Eine Lizenz statt separater Tools.' },
	pt: { title: 'Tarkov Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheats Escape from Tarkov indetectáveis para Escape from Tarkov no PC. ESP wallhack, radar hack e Aimbot com manutenção BattlEye anti-cheat. Entrega digital instantánea.', h1: 'Tarkov Cheats — ESP, Wallhack e Aimbot indetectáveis', intro: 'Pacote undetected para Escape from Tarkov no Windows PC: ESP wallhack, radar e Aimbot com manutenção BattlEye anti-cheat após cada patch.', imageAlt: 'Tarkov ESP player tags hack', gallery: 'Galeria Tarkov Cheats — ESP, Aimbot e wallhack', cta2: 'Ver recursos', h2a: 'Por que escolher Tarkov Cheats em 2026', h2b: 'ESP wallhack, radar e Aimbot numa licença', topicA: 'Ideal para ler esquadrões inimigos em BR e scav-run.', topicB: 'Uma licença em vez de ferramentas separadas.' },
	it: { title: 'Tarkov Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheat Escape from Tarkov indetectable per Escape from Tarkov su PC. ESP wallhack, radar hack e Aimbot con manutenzione BattlEye anti-cheat. Consegna digitale istantanea.', h1: 'Tarkov Cheats — ESP, Wallhack e Aimbot indetectable', intro: 'Pacchetto undetected per Escape from Tarkov su PC Windows: ESP wallhack, radar e Aimbot con manutenzione BattlEye anti-cheat dopo ogni patch.', imageAlt: 'Tarkov ESP player tags hack', gallery: 'Galleria Tarkov Cheats — ESP, Aimbot e wallhack', cta2: 'Vedi funzioni', h2a: 'Perché scegliere Tarkov Cheats nel 2026', h2b: 'ESP wallhack, radar e Aimbot in una licenza', topicA: 'Ideale per leggere squadre nemiche in BR e scav-run.', topicB: 'Una licenza invece di tool separati.' },
	nl: { title: 'Tarkov Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Tarkov cheats voor Escape from Tarkov op PC. ESP wallhack, radar hack en Aimbot met BattlEye anti-cheat-onderhoud. Directe digitale levering.', h1: 'Tarkov Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC pakket voor Escape from Tarkov: ESP wallhack, radar en Aimbot met BattlEye anti-cheat-onderhoud na elke patch.', imageAlt: 'Tarkov ESP player tags hack', gallery: 'Tarkov Cheats galerij — ESP, Aimbot en wallhack', cta2: 'Bekijk functies', h2a: 'Waarom Tarkov Cheats in 2026', h2b: 'ESP wallhack, radar en Aimbot in één licentie', topicA: 'Ideaal om vijandelijke squads te lezen in BR en scav-run.', topicB: 'Eén licentie in plaats van losse tools.' },
	pl: { title: 'Tarkov Cheats 2026 | ESP, Wallhack i Aimbot', desc: 'Undetected cheaty Escape from Tarkov dla Escape from Tarkov na PC. ESP wallhack, radar hack i Aimbot z konserwacją BattlEye anti-cheat. Natychmiastowa dostawa cyfrowa.', h1: 'Tarkov Cheats — Undetected ESP, Wallhack i Aimbot', intro: 'Pakiet undetected dla Escape from Tarkov na Windows PC: ESP wallhack, radar i Aimbot z konserwacją BattlEye anti-cheat po każdym patchu.', imageAlt: 'Tarkov ESP player tags hack', gallery: 'Galeria Tarkov Cheats — ESP, Aimbot i wallhack', cta2: 'Zobacz funkcje', h2a: 'Dlaczego Tarkov Cheats w 2026', h2b: 'ESP wallhack, radar i Aimbot w jednej licencji', topicA: 'Idealny do czytania wrogich squadów w BR i scav-run.', topicB: 'Jedna licencja zamiast osobnych narzędzi.' },
	ru: { title: 'Tarkov Cheats 2026 | ESP, Wallhack и Aimbot', desc: 'Undetected читы Escape from Tarkov для Escape from Tarkov на PC. ESP wallhack, radar hack и Aimbot с обслуживанием BattlEye anti-cheat. Мгновенная цифровая доставка.', h1: 'Tarkov Cheats — Undetected ESP, Wallhack и Aimbot', intro: 'Undetected пакет для Escape from Tarkov на Windows PC: ESP wallhack, radar и Aimbot с обслуживанием BattlEye anti-cheat после патчей.', imageAlt: 'Tarkov ESP player tags hack', gallery: 'Галерея Tarkov Cheats — ESP, Aimbot и wallhack', cta2: 'Смотреть функции', h2a: 'Почему выбирают Tarkov Cheats в 2026', h2b: 'ESP wallhack, radar и Aimbot в одной лицензии', topicA: 'Идеально для чтения вражеских отрядов в BR и scav-run.', topicB: 'Одна лицензия вместо отдельных инструментов.' },
	tr: { title: 'Tarkov Cheats 2026 | ESP, Wallhack ve Aimbot', desc: 'Escape from Tarkov için undetected hileler. ESP wallhack, radar hack ve Aimbot — BattlEye anti-cheat bakımı. Anında dijital teslimat.', h1: 'Tarkov Cheats — Undetected ESP, Wallhack ve Aimbot', intro: 'Escape from Tarkov Windows PC undetected paketi: ESP wallhack, radar ve Aimbot — BattlEye anti-cheat bakımı dahil.', imageAlt: 'Tarkov ESP player tags hack', gallery: 'Tarkov Cheats galeri — ESP, Aimbot ve wallhack', cta2: 'Özellikleri gör', h2a: '2026\'da neden Tarkov Cheats', h2b: 'ESP wallhack, radar ve Aimbot tek lisans', topicA: 'PMC ve Scav raid\'da düşman squad okumak için ideal.', topicB: 'Ayrı araçlar yerine tek lisans.' },
	ar: { title: 'Tarkov Cheats 2026 | ESP وWallhack وAimbot', desc: 'غش Escape from Tarkov undetected لـ Escape from Tarkov على PC. ESP wallhack ورadar hack وAimbot مع صيانة BattlEye anti-cheat. تسليم رقمي فوري.', h1: 'Tarkov Cheats — ESP وWallhack وAimbot غير مكتشف', intro: 'حزمة undetected لـ Escape from Tarkov على Windows PC: ESP wallhack ورadar وAimbot مع صيانة BattlEye anti-cheat.', imageAlt: 'Tarkov ESP player tags hack', gallery: 'معرض Tarkov Cheats — ESP وAimbot وwallhack', cta2: 'عرض الميزات', h2a: 'لماذا Tarkov Cheats في 2026', h2b: 'ESP wallhack ورadar وAimbot في ترخيص واحد', topicA: 'مثالي لقراءة فرق العدو في BR وscav-run.', topicB: 'ترخيص واحد بدلاً من أدوات منفصلة.' },
	ja: { title: 'Tarkov Cheats 2026 | ESP・Wallhack・Aimbot', desc: 'Escape from Tarkov向けundetectedチート。ESP wallhack、radar hack、Aimbot、BattlEye anti-cheatメンテナンス。即時デジタル配信。', h1: 'Tarkov Cheats — Undetected ESP・Wallhack・Aimbot', intro: 'Escape from Tarkov Windows PC向けundetectedパッケージ：ESP wallhack、radar、Aimbot、BattlEye anti-cheatメンテナンス付き。', imageAlt: 'Tarkov cheats hero ESP aimbot wallhack', gallery: 'Tarkov Cheatsギャラリー — ESP、Aimbot、wallhack', cta2: '機能を見る', h2a: '2026年にTarkov Cheatsを選ぶ理由', h2b: 'ESP wallhack、radar、Aimbotが1ライセンス', topicA: 'PMCとScavのレイド向け。', topicB: '別ツールではなく1ライセンス。' },
	ko: { title: 'Tarkov Cheats 2026 | ESP, Wallhack, Aimbot', desc: 'Escape from Tarkov undetected 치트. ESP wallhack, radar hack, Aimbot, BattlEye anti-cheat 유지보수. 즉시 디지털 배송.', h1: 'Tarkov Cheats — Undetected ESP, Wallhack, Aimbot', intro: 'Escape from Tarkov Windows PC undetected 패키지: ESP wallhack, radar, Aimbot, BattlEye anti-cheat 유지보수 포함.', imageAlt: 'Tarkov cheats hero ESP aimbot wallhack', gallery: 'Tarkov Cheats 갤러리 — ESP, Aimbot, wallhack', cta2: '기능 보기', h2a: '2026년 Tarkov Cheats를 선택하는 이유', h2b: 'ESP wallhack, radar, Aimbot 단일 라이선스', topicA: 'PMC/Scav 레이드에서 적 분대 읽기에 이상적.', topicB: '별도 도구 대신 단일 라이선스.' },
	zh: { title: 'Tarkov Cheats 2026 | ESP、Wallhack、Aimbot', desc: 'Escape from Tarkov undetected作弊。ESP wallhack、radar hack、Aimbot、BattlEye anti-cheat维护。即时数字交付。', h1: 'Tarkov Cheats — Undetected ESP、Wallhack、Aimbot', intro: 'Escape from Tarkov Windows PC undetected套餐：ESP wallhack、radar、Aimbot，含BattlEye anti-cheat维护。', imageAlt: 'Tarkov cheats hero ESP aimbot wallhack', gallery: 'Tarkov Cheats图库 — ESP、Aimbot、wallhack', cta2: '查看功能', h2a: '2026年选择Tarkov Cheats的原因', h2b: 'ESP wallhack、radar、Aimbot单一许可证', topicA: '适合在PMC 和 Scav 突袭中读取敌方小队。', topicB: '一个许可证而非多个工具。' },
	hi: { title: 'Tarkov Cheats 2026 | ESP, Wallhack और Aimbot', desc: 'Escape from Tarkov undetected cheats. ESP wallhack, radar hack, Aimbot, BattlEye maintenance. Instant digital delivery.', h1: 'Tarkov Cheats — Undetected ESP, Wallhack और Aimbot', intro: 'Escape from Tarkov Windows PC undetected पैकेज: ESP wallhack, radar, Aimbot, BattlEye maintenance सहित.', imageAlt: 'Tarkov cheats hero ESP aimbot wallhack', gallery: 'Tarkov Cheats gallery — ESP, Aimbot, wallhack', cta2: 'फ़ीचर्स देखें', h2a: '2026 में Tarkov Cheats क्यों', h2b: 'ESP wallhack, radar, Aimbot एक लाइसेंस में', topicA: 'BR और scav-run में दुश्मन squad पढ़ने के लिए आदर्श.', topicB: 'अलग टूल्स के बजाय एक लाइसेंस.' },
	id: { title: 'Tarkov Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Escape from Tarkov undetected untuk Escape from Tarkov di PC. ESP wallhack, radar hack, Aimbot, pemeliharaan BattlEye anti-cheat. Pengiriman digital instan.', h1: 'Tarkov Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Paket undetected Escape from Tarkov di Windows PC: ESP wallhack, radar, Aimbot dengan pemeliharaan BattlEye anti-cheat.', imageAlt: 'Tarkov ESP player tags hack', gallery: 'Galeri Tarkov Cheats — ESP, Aimbot, wallhack', cta2: 'Lihat fitur', h2a: 'Mengapa Tarkov Cheats di 2026', h2b: 'ESP wallhack, radar, Aimbot dalam satu lisensi', topicA: 'Ideal membaca squad musuh di BR dan scav-run.', topicB: 'Satu lisensi alih-alih alat terpisah.' },
	th: { title: 'Tarkov Cheats 2026 | ESP, Wallhack และ Aimbot', desc: 'Cheat Escape from Tarkov undetected สำหรับ Escape from Tarkov บน PC. ESP wallhack, radar hack, Aimbot, BattlEye maintenance. จัดส่งดิจิทัลทันที.', h1: 'Tarkov Cheats — Undetected ESP, Wallhack และ Aimbot', intro: 'แพ็ก undetected สำหรับ Escape from Tarkov บน Windows PC: ESP wallhack, radar, Aimbot พร้อม BattlEye maintenance', imageAlt: 'Tarkov ESP player tags hack', gallery: 'แกลเลอรี Tarkov Cheats — ESP, Aimbot, wallhack', cta2: 'ดูฟีเจอร์', h2a: 'ทำไมเลือก Tarkov Cheats ปี 2026', h2b: 'ESP wallhack, radar, Aimbot ในใบอนุญาตเดียว', topicA: 'เหมาะสำหรับอ่าน squad ศัตรูใน BR และ scav-run', topicB: 'ใบอนุญาตเดียวแทนเครื่องมือแยก' },
	vi: { title: 'Tarkov Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Escape from Tarkov undetected cho Escape from Tarkov trên PC. ESP wallhack, radar hack, Aimbot, bảo trì BattlEye anti-cheat. Giao hàng kỹ thuật số tức thì.', h1: 'Tarkov Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Gói undetected Escape from Tarkov trên Windows PC: ESP wallhack, radar, Aimbot với bảo trì BattlEye anti-cheat.', imageAlt: 'Tarkov ESP player tags hack', gallery: 'Thư viện Tarkov Cheats — ESP, Aimbot, wallhack', cta2: 'Xem tính năng', h2a: 'Vì sao chọn Tarkov Cheats 2026', h2b: 'ESP wallhack, radar, Aimbot trong một giấy phép', topicA: 'Lý tưởng đọc squad địch trong BR và scav-run.', topicB: 'Một giấy phép thay vì công cụ riêng.' },
	uk: { title: 'Tarkov Cheats 2026 | ESP, Wallhack і Aimbot', desc: 'Undetected чіти Escape from Tarkov для Escape from Tarkov на PC. ESP wallhack, radar hack, Aimbot, обслуговування BattlEye anti-cheat. Мгновенная цифровая доставка.', h1: 'Tarkov Cheats — Undetected ESP, Wallhack і Aimbot', intro: 'Undetected пакет для Escape from Tarkov на Windows PC: ESP wallhack, radar, Aimbot з обслуговуванням BattlEye anti-cheat.', imageAlt: 'Tarkov ESP player tags hack', gallery: 'Галерея Tarkov Cheats — ESP, Aimbot, wallhack', cta2: 'Дивитися функції', h2a: 'Чому Tarkov Cheats у 2026', h2b: 'ESP wallhack, radar і Aimbot в одній ліцензії', topicA: 'Ідеально для читання ворожих загонів у BR і scav-run.', topicB: 'Одна ліцензія замість окремих інструментів.' },
	cs: { title: 'Tarkov Cheats 2026 | ESP, Wallhack a Aimbot', desc: 'Undetected Tarkov cheaty pro Escape from Tarkov na PC. ESP wallhack, radar hack, Aimbot, údržba BattlEye anti-cheat. Okamžité digitální doručení.', h1: 'Tarkov Cheats — Undetected ESP, Wallhack a Aimbot', intro: 'Undetected balíček pro Escape from Tarkov na Windows PC: ESP wallhack, radar, Aimbot s údržbou BattlEye anti-cheat.', imageAlt: 'Tarkov ESP player tags hack', gallery: 'Galerie Tarkov Cheats — ESP, Aimbot, wallhack', cta2: 'Zobrazit funkce', h2a: 'Proč Tarkov Cheats v roce 2026', h2b: 'ESP wallhack, radar a Aimbot v jedné licenci', topicA: 'Ideální pro čtení nepřátelských squadů v BR a scav-run.', topicB: 'Jedna licence místo samostatných nástrojů.' },
	ro: { title: 'Tarkov Cheats 2026 | ESP, Wallhack și Aimbot', desc: 'Cheats Escape from Tarkov undetected pentru Escape from Tarkov pe PC. ESP wallhack, radar hack, Aimbot, mentenanță BattlEye anti-cheat. Livrare digitală instantă.', h1: 'Tarkov Cheats — Undetected ESP, Wallhack și Aimbot', intro: 'Pachet undetected Escape from Tarkov pe Windows PC: ESP wallhack, radar, Aimbot cu mentenanță BattlEye anti-cheat.', imageAlt: 'Tarkov ESP player tags hack', gallery: 'Galerie Tarkov Cheats — ESP, Aimbot, wallhack', cta2: 'Vezi funcții', h2a: 'De ce Tarkov Cheats în 2026', h2b: 'ESP wallhack, radar și Aimbot într-o licență', topicA: 'Ideal pentru citirea squad-urilor inamice în BR și scav-run.', topicB: 'O licență în loc de instrumente separate.' },
	sv: { title: 'Tarkov Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Tarkov cheats för Escape from Tarkov på PC. ESP wallhack, radar hack, Aimbot, BattlEye anti-cheat-underhåll. Omedelbar digital leverans.', h1: 'Tarkov Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected paket för Escape from Tarkov på Windows PC: ESP wallhack, radar, Aimbot med BattlEye anti-cheat-underhåll.', imageAlt: 'Tarkov ESP player tags hack', gallery: 'Tarkov Cheats galleri — ESP, Aimbot, wallhack', cta2: 'Se funktioner', h2a: 'Varför Tarkov Cheats 2026', h2b: 'ESP wallhack, radar och Aimbot i en licens', topicA: 'Ideal för att läsa fiendesquads i BR och scav-run.', topicB: 'En licens istället för separata verktyg.' },
};

function buildHome(locale) {
	const p = phrases[locale];
	const m = PAGE_META_HOME[locale];
	return {
		title: clampTitle(stripZadeyoFromMeta(m.title)),
		description: clampDesc(stripZadeyoFromMeta(m.desc)),
		h1: m.h1,
		intro: m.intro,
		imageAlt: m.imageAlt,
		galleryTitle: m.gallery,
		heroImage: HERO_IMAGES.home,
		ctaPrimary: p.buy,
		ctaSecondary: m.cta2,
		ctaSecondaryHref: '/features/',
		sections: [
			section(m.h2a, p.s1(m.topicA), p.s2()),
			section(m.h2b, p.s1(m.topicB), p.s3()),
		],
	};
}

/** Unique title/desc tails per page — English base + locale overrides for hero H1/subtitle. */
const PAGE_META_TAILS = {
	'tarkov-esp': { suffix: 'Player Boxes & Wallhack', focus: 'player boxes, loot markers, and wallhack overlays', altKeyword: 'ESP wallhack overlay' },
	'tarkov-aimbot': { suffix: 'Soft Aim Controls', focus: 'soft aim, FOV, and per-weapon Aimbot profiles', altKeyword: 'aimbot combat' },
	features: { suffix: 'Full Feature List', focus: 'ESP, soft aim, radar controls', altKeyword: 'cheats package ESP aimbot' },
	pricing: { suffix: 'Monthly & Lifetime', focus: '$35 monthly or $150 lifetime licenses', altKeyword: 'cheats pricing' },
	setup: { suffix: 'PC Setup Guide', focus: 'Windows PC activation and first-launch setup', altKeyword: 'setup PC activation' },
	updates: { suffix: 'BattlEye Maintenance Log', focus: 'BattlEye patch status and rebuild notes', altKeyword: 'updates BattlEye maintenance' },
	faq: { suffix: 'Common Answers', focus: 'ESP, soft aim, delivery, and BattlEye questions', altKeyword: 'FAQ ESP aimbot' },
	support: { suffix: 'Help & Contact', focus: 'order help and license support contact', altKeyword: 'support license help' },
	undetected: { suffix: 'BattlEye Safe Status', focus: 'undetected maintenance after BattlEye anti-cheat patches', altKeyword: 'undetected cheats ESP' },
	wallhack: { suffix: 'ESP Visibility', focus: 'wallhack ESP for players, loot, and distance', altKeyword: 'wallhack ESP visibility' },
	radar: { suffix: '2D Threat Overlay', focus: '2D radar cues for flanks and rotations', altKeyword: 'radar hack overlay' },
	battleye: { suffix: 'Patch Maintenance', focus: 'how BattlEye updates are handled for Escape from Tarkov hacks', altKeyword: 'BattlEye bypass ESP aimbot' },
	'cheats-2026': { suffix: 'Buyer Guide', focus: '2026 Tarkov cheats checklist before checkout', altKeyword: 'cheats 2026 ESP aimbot' },
	hacks: { suffix: 'ESP Aimbot Guide', focus: 'the Escape from Tarkov hacks pillar for ESP and Aimbot', altKeyword: 'hacks ESP aimbot' },
	'cheat-download': { suffix: 'Instant Access', focus: 'digital license download after payment', altKeyword: 'cheat download ESP aimbot' },
	'mod-menu': { suffix: 'In-Game Toggles', focus: 'in-client ESP and soft aim toggles', altKeyword: 'mod menu ESP aimbot' },
	'soft-aim': { suffix: 'Smooth Aim Settings', focus: 'smooth soft aim settings for Windows PC', altKeyword: 'soft aim aimbot' },
	'best-cheats': { suffix: 'Buyer Checklist', focus: 'what to compare before buying Tarkov cheats', altKeyword: 'best cheats ESP aimbot' },
	'aimbot-hack': { suffix: 'Soft Aim Assist', focus: 'undetected Aimbot hack assist for Escape from Tarkov', altKeyword: 'aimbot hack combat' },
	'esp-hack': { suffix: 'Boxes & Loot', focus: 'ESP hack boxes, loot pins, and distance', altKeyword: 'ESP hack wallhack' },
	'unlock-all': { suffix: 'What It Means', focus: 'unlock-all searches vs real ESP and Aimbot tools', altKeyword: 'unlock all ESP aimbot' },
};

/** Localized H1 suffixes (title/subtitle language change on product pages). */
const SUFFIX_I18N = {
	es: {
		'tarkov-esp': 'Cajas de jugador y wallhack',
		'tarkov-aimbot': 'Controles soft aim',
		features: 'Lista completa de funciones',
		pricing: 'Mensual y de por vida',
		setup: 'Guía de instalación PC',
		updates: 'Registro BattlEye',
		faq: 'Preguntas frecuentes',
		support: 'Ayuda y contacto',
		undetected: 'Estado indetectable',
		wallhack: 'Visibilidad ESP',
		radar: 'Radar 2D de amenazas',
		battleye: 'Mantenimiento de parches',
		'cheats-2026': 'Guía del comprador',
		hacks: 'Guía ESP y Aimbot',
		'cheat-download': 'Acceso instantáneo',
		'mod-menu': 'Controles en partida',
		'soft-aim': 'Ajustes soft aim',
		'best-cheats': 'Lista de compra',
		'aimbot-hack': 'Asistencia soft aim',
		'esp-hack': 'Cajas y loot',
		'unlock-all': 'Qué significa',
	},
	fr: {
		'tarkov-esp': 'Boîtes joueur et wallhack',
		'tarkov-aimbot': 'Contrôles soft aim',
		features: 'Liste complète des fonctions',
		pricing: 'Mensuel et à vie',
		setup: 'Guide d\'installation PC',
		updates: 'Journal BattlEye',
		faq: 'Questions fréquentes',
		support: 'Aide et contact',
		undetected: 'Statut indétectable',
		wallhack: 'Visibilité ESP',
		radar: 'Radar 2D des menaces',
		battleye: 'Maintenance des patchs',
		'cheats-2026': 'Guide acheteur',
		hacks: 'Guide ESP et Aimbot',
		'cheat-download': 'Accès instantané',
		'mod-menu': 'Contrôles en jeu',
		'soft-aim': 'Réglages soft aim',
		'best-cheats': 'Checklist acheteur',
		'aimbot-hack': 'Assistance soft aim',
		'esp-hack': 'Boîtes et loot',
		'unlock-all': 'Ce que ça signifie',
	},
	de: {
		'tarkov-esp': 'Spielerboxen & Wallhack',
		'tarkov-aimbot': 'Soft-Aim Steuerung',
		features: 'Vollständige Feature-Liste',
		pricing: 'Monatlich & Lifetime',
		setup: 'PC Setup-Anleitung',
		updates: 'BattlEye Wartungslog',
		faq: 'Häufige Fragen',
		support: 'Hilfe & Kontakt',
		undetected: 'Undetected Status',
		wallhack: 'ESP Sichtbarkeit',
		radar: '2D Bedrohungsradar',
		battleye: 'Patch-Wartung',
		'cheats-2026': 'Käuferleitfaden',
		hacks: 'ESP Aimbot Guide',
		'cheat-download': 'Sofortzugang',
		'mod-menu': 'In-Game Toggles',
		'soft-aim': 'Soft-Aim Einstellungen',
		'best-cheats': 'Käufer-Checkliste',
		'aimbot-hack': 'Soft-Aim Assist',
		'esp-hack': 'Boxen & Loot',
		'unlock-all': 'Was es bedeutet',
	},
	pt: {
		'tarkov-esp': 'Caixas de jogador e wallhack',
		'tarkov-aimbot': 'Controles soft aim',
		features: 'Lista completa de recursos',
		pricing: 'Mensal e vitalício',
		setup: 'Guia de instalação PC',
		updates: 'Registro BattlEye',
		faq: 'Perguntas frequentes',
		support: 'Ajuda e contato',
		undetected: 'Status indetectável',
		wallhack: 'Visibilidade ESP',
		radar: 'Radar 2D de ameaças',
		battleye: 'Manutenção de patches',
		'cheats-2026': 'Guia do comprador',
		hacks: 'Guia ESP e Aimbot',
		'cheat-download': 'Acesso instantâneo',
		'mod-menu': 'Controles in-game',
		'soft-aim': 'Ajustes soft aim',
		'best-cheats': 'Checklist do comprador',
		'aimbot-hack': 'Assistência soft aim',
		'esp-hack': 'Caixas e loot',
		'unlock-all': 'O que significa',
	},
	it: {
		'tarkov-esp': 'Box giocatore e wallhack',
		'tarkov-aimbot': 'Controlli soft aim',
		features: 'Elenco completo funzioni',
		pricing: 'Mensile e lifetime',
		setup: 'Guida setup PC',
		updates: 'Log manutenzione BattlEye',
		faq: 'Domande frequenti',
		support: 'Aiuto e contatto',
		undetected: 'Stato indetectable',
		wallhack: 'Visibilità ESP',
		radar: 'Radar 2D minacce',
		battleye: 'Manutenzione patch',
		'cheats-2026': 'Guida acquirente',
		hacks: 'Guida ESP e Aimbot',
		'cheat-download': 'Accesso istantaneo',
		'mod-menu': 'Toggle in-game',
		'soft-aim': 'Impostazioni soft aim',
		'best-cheats': 'Checklist acquirente',
		'aimbot-hack': 'Assist soft aim',
		'esp-hack': 'Box e loot',
		'unlock-all': 'Cosa significa',
	},
	ru: {
		'tarkov-esp': 'Боксы игроков и wallhack',
		'tarkov-aimbot': 'Управление soft aim',
		features: 'Полный список функций',
		pricing: 'Месяц и lifetime',
		setup: 'Гайд по установке',
		updates: 'Журнал BattlEye',
		faq: 'Частые вопросы',
		support: 'Помощь и контакт',
		undetected: 'Статус undetected',
		wallhack: 'Видимость ESP',
		radar: '2D радар угроз',
		battleye: 'Обслуживание патчей',
		'cheats-2026': 'Гайд покупателя',
		hacks: 'Гайд ESP и Aimbot',
		'cheat-download': 'Мгновенный доступ',
		'mod-menu': 'Игровые переключатели',
		'soft-aim': 'Настройки soft aim',
		'best-cheats': 'Чеклист покупателя',
		'aimbot-hack': 'Soft aim ассист',
		'esp-hack': 'Боксы и лут',
		'unlock-all': 'Что это значит',
	},
};

function productPage(locale, pageKey, topicName, cta2href) {
	const p = phrases[locale];
	const home = PAGE_META_HOME[locale];
	const meta = PAGE_META_TAILS[pageKey] ?? { suffix: 'Tarkov Cheats', focus: 'ESP wallhack, radar, and Aimbot', altKeyword: 'ESP aimbot wallhack' };
	const suffix = SUFFIX_I18N[locale]?.[pageKey] ?? meta.suffix;
	const titleBase = `${topicName} | ${suffix}`;
	return {
		title: clampTitle(stripZadeyoFromMeta(titleBase)),
		description: clampDesc(
			stripZadeyoFromMeta(`${topicName}: ${meta.focus}. ${p.delivery}. ${p.undetected} — ${p.win}.`),
		),
		h1: topicName,
		intro: p.s1(`${topicName}.`),
		imageAlt: PAGE_IMAGE_ALTS[pageKey] || `${topicName} — Tarkov Cheats screenshot`,
		galleryTitle: topicName,
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: p.buy,
		ctaSecondary: home.cta2,
		ctaSecondaryHref: cta2href,
		sections: [
			section(topicName, p.s1(`${meta.focus}.`), p.s2()),
			section(`${p.undetected}`, p.s3(), p.s2()),
			section(p.delivery, p.s2(), p.legal()),
		],
	};
}

const TOPIC_NAMES = {
	'tarkov-esp': { en: 'Tarkov ESP', es: 'ESP Tarkov', fr: 'ESP Tarkov', de: 'Tarkov ESP', pt: 'ESP Tarkov', it: 'ESP Tarkov', nl: 'Tarkov ESP', pl: 'ESP Tarkov', ru: 'ESP Tarkov', tr: 'Tarkov ESP', ar: 'ESP Tarkov', ja: 'Tarkov ESP', ko: 'Tarkov ESP', zh: 'Tarkov ESP', hi: 'Tarkov ESP', id: 'ESP Tarkov', th: 'Tarkov ESP', vi: 'ESP Tarkov', uk: 'ESP Tarkov', cs: 'Tarkov ESP', ro: 'ESP Tarkov', sv: 'Tarkov ESP' },
	'tarkov-aimbot': { en: 'Tarkov Aimbot', es: 'Aimbot Tarkov', fr: 'Aimbot Tarkov', de: 'Tarkov Aimbot', pt: 'Aimbot Tarkov', it: 'Aimbot Tarkov', nl: 'Tarkov Aimbot', pl: 'Aimbot Tarkov', ru: 'Aimbot Tarkov', tr: 'Tarkov Aimbot', ar: 'Aimbot Tarkov', ja: 'Tarkov Aimbot', ko: 'Tarkov Aimbot', zh: 'Tarkov Aimbot', hi: 'Tarkov Aimbot', id: 'Aimbot Tarkov', th: 'Tarkov Aimbot', vi: 'Aimbot Tarkov', uk: 'Aimbot Tarkov', cs: 'Tarkov Aimbot', ro: 'Aimbot Tarkov', sv: 'Tarkov Aimbot' },
	features: { en: 'Features', es: 'Funciones', fr: 'Fonctions', de: 'Features', pt: 'Recursos', it: 'Funzioni', nl: 'Functies', pl: 'Funkcje', ru: 'Функции', tr: 'Özellikler', ar: 'الميزات', ja: '機能', ko: '기능', zh: '功能', hi: 'फ़ीचर्स', id: 'Fitur', th: 'ฟีเจอร์', vi: 'Tính năng', uk: 'Функції', cs: 'Funkce', ro: 'Funcții', sv: 'Funktioner' },
	pricing: { en: 'Pricing', es: 'Precios', fr: 'Tarifs', de: 'Preise', pt: 'Preços', it: 'Prezzi', nl: 'Prijzen', pl: 'Cennik', ru: 'Цены', tr: 'Fiyatlar', ar: 'الأسعار', ja: '料金', ko: '가격', zh: '价格', hi: 'कीमत', id: 'Harga', th: 'ราคา', vi: 'Giá', uk: 'Ціни', cs: 'Ceny', ro: 'Prețuri', sv: 'Priser' },
	setup: { en: 'Setup', es: 'Instalación', fr: 'Installation', de: 'Setup', pt: 'Instalação', it: 'Setup', nl: 'Setup', pl: 'Instalacja', ru: 'Установка', tr: 'Kurulum', ar: 'التثبيت', ja: 'セットアップ', ko: '설치', zh: '安装', hi: 'सेटअप', id: 'Setup', th: 'ติดตั้ง', vi: 'Cài đặt', uk: 'Встановлення', cs: 'Instalace', ro: 'Instalare', sv: 'Installation' },
	updates: { en: 'Updates', es: 'Actualizaciones', fr: 'Mises à jour', de: 'Updates', pt: 'Atualizações', it: 'Aggiornamenti', nl: 'Updates', pl: 'Aktualizacje', ru: 'Обновления', tr: 'Güncellemeler', ar: 'التحديثات', ja: '更新', ko: '업데이트', zh: '更新', hi: 'अपडेट', id: 'Pembaruan', th: 'อัปเดต', vi: 'Cập nhật', uk: 'Оновлення', cs: 'Aktualizace', ro: 'Actualizări', sv: 'Uppdateringar' },
	faq: { en: 'FAQ', es: 'FAQ', fr: 'FAQ', de: 'FAQ', pt: 'FAQ', it: 'FAQ', nl: 'FAQ', pl: 'FAQ', ru: 'FAQ', tr: 'SSS', ar: 'الأسئلة', ja: 'FAQ', ko: 'FAQ', zh: '常见问题', hi: 'FAQ', id: 'FAQ', th: 'FAQ', vi: 'FAQ', uk: 'FAQ', cs: 'FAQ', ro: 'FAQ', sv: 'FAQ' },
	support: { en: 'Support', es: 'Soporte', fr: 'Support', de: 'Support', pt: 'Suporte', it: 'Supporto', nl: 'Support', pl: 'Wsparcie', ru: 'Поддержка', tr: 'Destek', ar: 'الدعم', ja: 'サポート', ko: '지원', zh: '支持', hi: 'सहायता', id: 'Dukungan', th: 'สนับสนุน', vi: 'Hỗ trợ', uk: 'Підтримка', cs: 'Podpora', ro: 'Suport', sv: 'Support' },
	undetected: { en: 'Undetected Cheats', es: 'Trucos indetectables', fr: 'Triches indétectables', de: 'Undetected Cheats', pt: 'Cheats indetectáveis', it: 'Cheat indetectable', nl: 'Undetected Cheats', pl: 'Cheaty undetected', ru: 'Undetected читы', tr: 'Undetected hileler', ar: 'غش undetected', ja: 'Undetectedチート', ko: 'Undetected 치트', zh: 'Undetected作弊', hi: 'Undetected cheats', id: 'Cheat undetected', th: 'Cheats undetected', vi: 'Cheat undetected', uk: 'Undetected чіти', cs: 'Undetected cheaty', ro: 'Cheats undetected', sv: 'Undetected cheats' },
	wallhack: { en: 'Tarkov Wallhack', es: 'Wallhack Tarkov', fr: 'Wallhack Tarkov', de: 'Tarkov Wallhack', pt: 'Wallhack Tarkov', it: 'Wallhack Tarkov', nl: 'Tarkov Wallhack', pl: 'Wallhack Tarkov', ru: 'Wallhack Tarkov', tr: 'Tarkov Wallhack', ar: 'Wallhack Tarkov', ja: 'Tarkov Wallhack', ko: 'Tarkov Wallhack', zh: 'Tarkov Wallhack', hi: 'Tarkov Wallhack', id: 'Wallhack Tarkov', th: 'Tarkov Wallhack', vi: 'Wallhack Tarkov', uk: 'Wallhack Tarkov', cs: 'Tarkov Wallhack', ro: 'Wallhack Tarkov', sv: 'Tarkov Wallhack' },
	radar: { en: 'Radar Hack', es: 'Radar hack', fr: 'Radar hack', de: 'Radar Hack', pt: 'Radar hack', it: 'Radar hack', nl: 'Radar Hack', pl: 'Radar hack', ru: 'Radar hack', tr: 'Radar hack', ar: 'Radar hack', ja: 'Radar Hack', ko: 'Radar Hack', zh: 'Radar Hack', hi: 'Radar Hack', id: 'Radar hack', th: 'Radar Hack', vi: 'Radar hack', uk: 'Radar hack', cs: 'Radar Hack', ro: 'Radar hack', sv: 'Radar Hack' },
	battleye: { en: 'BattlEye Bypass', es: 'Bypass BattlEye', fr: 'Bypass BattlEye', de: 'BattlEye Bypass', pt: 'Bypass BattlEye', it: 'Bypass BattlEye', nl: 'BattlEye Bypass', pl: 'Bypass BattlEye', ru: 'Bypass BattlEye', tr: 'BattlEye bypass', ar: 'Bypass BattlEye', ja: 'BattlEye Bypass', ko: 'BattlEye Bypass', zh: 'BattlEye Bypass', hi: 'BattlEye Bypass', id: 'Bypass BattlEye', th: 'BattlEye Bypass', vi: 'Bypass BattlEye', uk: 'Bypass BattlEye', cs: 'BattlEye Bypass', ro: 'Bypass BattlEye', sv: 'BattlEye Bypass' },
	'cheats-2026': { en: 'Tarkov Cheats 2026', es: 'Trucos Tarkov 2026', fr: 'Triches Tarkov 2026', de: 'Tarkov Cheats 2026', pt: 'Cheats Tarkov 2026', it: 'Cheat Tarkov 2026', nl: 'Tarkov Cheats 2026', pl: 'Cheaty Tarkov 2026', ru: 'Читы Tarkov 2026', tr: 'Tarkov Hileleri 2026', ar: 'غش Tarkov 2026', ja: 'Tarkov Cheats 2026', ko: 'Tarkov Cheats 2026', zh: 'Tarkov作弊 2026', hi: 'Tarkov Cheats 2026', id: 'Cheat Tarkov 2026', th: 'Tarkov Cheats 2026', vi: 'Cheat Tarkov 2026', uk: 'Чіти Tarkov 2026', cs: 'Tarkov cheaty 2026', ro: 'Cheats Tarkov 2026', sv: 'Tarkov Cheats 2026' },
	hacks: { en: 'Tarkov Cheats', es: 'Trucos Tarkov', fr: 'Triches Tarkov', de: 'Tarkov Cheats', pt: 'Cheats Tarkov', it: 'Cheat Tarkov', nl: 'Tarkov Cheats', pl: 'Cheaty Tarkov', ru: 'Читы Tarkov', tr: 'Tarkov Hileleri', ar: 'غش Tarkov', ja: 'Tarkov Cheats', ko: 'Tarkov Cheats', zh: 'Tarkov作弊', hi: 'Tarkov Cheats', id: 'Cheat Tarkov', th: 'Tarkov Cheats', vi: 'Cheat Tarkov', uk: 'Чіти Tarkov', cs: 'Tarkov cheaty', ro: 'Cheats Tarkov', sv: 'Tarkov Cheats' },
	'cheat-download': { en: 'Tarkov Cheat Download', es: 'Descarga Tarkov Cheats', fr: 'Téléchargement Tarkov Cheats', de: 'Tarkov Cheat Download', pt: 'Download Tarkov Cheats', it: 'Download Tarkov Cheats', nl: 'Tarkov Cheat Download', pl: 'Pobieranie Tarkov Cheats', ru: 'Скачать Tarkov Cheats', tr: 'Tarkov Hile İndir', ar: 'تحميل Tarkov Cheats', ja: 'Tarkov Cheat Download', ko: 'Tarkov Cheat Download', zh: 'Tarkov作弊下载', hi: 'Tarkov Cheat Download', id: 'Download Cheat Tarkov', th: 'ดาวน์โหลด Tarkov Cheats', vi: 'Tải Cheat Tarkov', uk: 'Завантаження Tarkov Cheats', cs: 'Stáhnout Tarkov Cheats', ro: 'Descărcare Tarkov Cheats', sv: 'Tarkov Cheat Download' },
	'mod-menu': { en: 'Tarkov Mod Menu', es: 'Menú mod Tarkov', fr: 'Menu mod Tarkov', de: 'Tarkov Mod-Menü', pt: 'Menu mod Tarkov', it: 'Mod menu Tarkov', nl: 'Tarkov Mod Menu', pl: 'Mod menu Tarkov', ru: 'Мод-меню Tarkov', tr: 'Tarkov Mod Menü', ar: 'قائمة مود Tarkov', ja: 'Tarkov Mod Menu', ko: 'Tarkov 모드 메뉴', zh: 'Tarkov修改菜单', hi: 'Tarkov Mod Menu', id: 'Menu mod Tarkov', th: 'เมนูมอด Tarkov', vi: 'Mod menu Tarkov', uk: 'Мод-меню Tarkov', cs: 'Tarkov mod menu', ro: 'Meniu mod Tarkov', sv: 'Tarkov Mod-meny' },
	'soft-aim': { en: 'Tarkov Soft Aim', es: 'Soft aim Tarkov', fr: 'Soft aim Tarkov', de: 'Tarkov Soft Aim', pt: 'Soft aim Tarkov', it: 'Soft aim Tarkov', nl: 'Tarkov Soft Aim', pl: 'Soft aim Tarkov', ru: 'Soft aim Tarkov', tr: 'Tarkov Soft Aim', ar: 'Soft aim Tarkov', ja: 'Tarkov Soft Aim', ko: 'Tarkov Soft Aim', zh: 'Tarkov Soft Aim', hi: 'Tarkov Soft Aim', id: 'Soft aim Tarkov', th: 'Tarkov Soft Aim', vi: 'Soft aim Tarkov', uk: 'Soft aim Tarkov', cs: 'Tarkov Soft Aim', ro: 'Soft aim Tarkov', sv: 'Tarkov Soft Aim' },
	'best-cheats': { en: 'Best Tarkov Cheats', es: 'Mejores trucos Tarkov', fr: 'Meilleures triches Tarkov', de: 'Beste Tarkov Cheats', pt: 'Melhores cheats Tarkov', it: 'Migliori cheat Tarkov', nl: 'Beste Tarkov Cheats', pl: 'Najlepsze cheaty Tarkov', ru: 'Лучшие читы Tarkov', tr: 'En İyi Tarkov Hileleri', ar: 'أفضل غش Tarkov', ja: '最強Tarkovチート', ko: '최고의 Tarkov 치트', zh: '最佳Tarkov作弊', hi: 'सर्वश्रेष्ठ Tarkov Cheats', id: 'Cheat Tarkov terbaik', th: 'Cheat Tarkov ที่ดีที่สุด', vi: 'Cheat Tarkov tốt nhất', uk: 'Найкращі чіти Tarkov', cs: 'Nejlepší Tarkov cheaty', ro: 'Cele mai bune cheats Tarkov', sv: 'Bästa Tarkov Cheats' },
	'aimbot-hack': { en: 'Tarkov Aimbot Hack', es: 'Hack aimbot Tarkov', fr: 'Hack aimbot Tarkov', de: 'Tarkov Aimbot Hack', pt: 'Hack aimbot Tarkov', it: 'Hack aimbot Tarkov', nl: 'Tarkov Aimbot Hack', pl: 'Hack aimbot Tarkov', ru: 'Хак aimbot Tarkov', tr: 'Tarkov Aimbot Hilesi', ar: 'هاك Aimbot Tarkov', ja: 'Tarkov Aimbot Hack', ko: 'Tarkov 에임봇 핵', zh: 'Tarkov自瞄外挂', hi: 'Tarkov Aimbot Hack', id: 'Hack aimbot Tarkov', th: 'Hack Aimbot Tarkov', vi: 'Hack aimbot Tarkov', uk: 'Хак aimbot Tarkov', cs: 'Tarkov aimbot hack', ro: 'Hack aimbot Tarkov', sv: 'Tarkov Aimbot Hack' },
	'esp-hack': { en: 'Tarkov ESP Hack', es: 'Hack ESP Tarkov', fr: 'Hack ESP Tarkov', de: 'Tarkov ESP Hack', pt: 'Hack ESP Tarkov', it: 'Hack ESP Tarkov', nl: 'Tarkov ESP Hack', pl: 'Hack ESP Tarkov', ru: 'Хак ESP Tarkov', tr: 'Tarkov ESP Hilesi', ar: 'هاك ESP Tarkov', ja: 'Tarkov ESP Hack', ko: 'Tarkov ESP 핵', zh: 'Tarkov ESP外挂', hi: 'Tarkov ESP Hack', id: 'Hack ESP Tarkov', th: 'Hack ESP Tarkov', vi: 'Hack ESP Tarkov', uk: 'Хак ESP Tarkov', cs: 'Tarkov ESP hack', ro: 'Hack ESP Tarkov', sv: 'Tarkov ESP Hack' },
	'unlock-all': { en: 'Tarkov Unlock All', es: 'Unlock all Tarkov', fr: 'Unlock all Tarkov', de: 'Tarkov Unlock All', pt: 'Unlock all Tarkov', it: 'Unlock all Tarkov', nl: 'Tarkov Unlock All', pl: 'Unlock all Tarkov', ru: 'Unlock all Tarkov', tr: 'Tarkov Unlock All', ar: 'Unlock all Tarkov', ja: 'Tarkov Unlock All', ko: 'Tarkov Unlock All', zh: 'Tarkov Unlock All', hi: 'Tarkov Unlock All', id: 'Unlock all Tarkov', th: 'Tarkov Unlock All', vi: 'Unlock all Tarkov', uk: 'Unlock all Tarkov', cs: 'Tarkov Unlock All', ro: 'Unlock all Tarkov', sv: 'Tarkov Unlock All' },
};

const CTA2_HREF = {
	'tarkov-esp': '/tarkov-cheats/',
	'tarkov-aimbot': '/tarkov-esp/',
	features: '/pricing/',
	pricing: '/setup/',
	setup: '/support/',
	updates: '/tarkov-cheats/',
	faq: '/support/',
	support: '/setup/',
	undetected: '/tarkov-cheats/',
	wallhack: '/tarkov-esp/',
	radar: '/tarkov-esp/',
	battleye: '/updates/',
	'cheats-2026': '/tarkov-cheats/',
	hacks: '/features/',
	'cheat-download': '/setup/',
	'mod-menu': '/features/',
	'soft-aim': '/tarkov-aimbot/',
	'best-cheats': '/pricing/',
	'aimbot-hack': '/tarkov-aimbot/',
	'esp-hack': '/tarkov-esp/',
	'unlock-all': '/features/',
};

function buildLegal(locale, pageKey, kind) {
	const p = phrases[locale];
	const titles = {
		privacy: { es: 'Política de privacidad', fr: 'Politique de confidentialité', de: 'Datenschutz', pt: 'Política de privacidade', it: 'Informativa privacy', nl: 'Privacybeleid', pl: 'Polityka prywatności', ru: 'Политика конфиденциальности', tr: 'Gizlilik politikası', ar: 'سياسة الخصوصية', ja: 'プライバシーポリシー', ko: '개인정보 처리방침', zh: '隐私政策', hi: 'गोपनीयता नीति', id: 'Kebijakan privasi', th: 'นโยบายความเป็นส่วนตัว', vi: 'Chính sách bảo mật', uk: 'Політика конфіденційності', cs: 'Zásady ochrany soukromí', ro: 'Politica de confidențialitate', sv: 'Integritetspolicy' },
		refund: { es: 'Política de reembolso', fr: 'Politique de remboursement', de: 'Rückerstattung', pt: 'Política de reembolso', it: 'Politica di rimborso', nl: 'Restitutiebeleid', pl: 'Polityka zwrotów', ru: 'Политика возврата', tr: 'İade politikası', ar: 'سياسة الاسترداد', ja: '返金ポリシー', ko: '환불 정책', zh: '退款政策', hi: 'रिफंड नीति', id: 'Kebijakan refund', th: 'นโยบายการคืนเงิน', vi: 'Chính sách hoàn tiền', uk: 'Політика повернення', cs: 'Zásady vrácení peněz', ro: 'Politica de rambursare', sv: 'Återbetalningspolicy' },
		terms: { es: 'Términos de uso', fr: 'Conditions d\'utilisation', de: 'Nutzungsbedingungen', pt: 'Termos de uso', it: 'Termini di utilizzo', nl: 'Gebruiksvoorwaarden', pl: 'Warunki użytkowania', ru: 'Условия использования', tr: 'Kullanım şartları', ar: 'شروط الاستخدام', ja: '利用規約', ko: '이용 약관', zh: '使用条款', hi: 'उपयोग की शर्तें', id: 'Syarat penggunaan', th: 'ข้อกำหนดการใช้งาน', vi: 'Điều khoản sử dụng', uk: 'Умови використання', cs: 'Podmínky použití', ro: 'Termeni de utilizare', sv: 'Användarvillkor' },
	};
	const h1 = titles[kind][locale] ?? (kind === 'privacy' ? 'Privacy Policy' : kind === 'refund' ? 'Refund Policy' : 'Terms of Use');
	return {
		title: clampTitle(stripZadeyoFromMeta(`${h1} | Tarkov Cheats`)),
		description: clampDesc(stripZadeyoFromMeta(`${h1} for Tarkov Cheats — ESP wallhack, Aimbot, ${p.win}.`)),
		h1,
		intro: p.s1(`${h1} for tarkovcheats.org and Escape from Tarkov licenses.`),
		imageAlt: 'tarkov cheats',
		galleryTitle: 'tarkov cheats',
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: locale === 'ar' ? 'مراسلة الدعم' : locale === 'ja' ? 'サポートにメール' : locale === 'ko' ? '지원 이메일' : locale === 'zh' ? '邮件支持' : 'Email support',
		ctaSecondary: kind === 'privacy' ? (locale === 'es' ? 'Leer términos' : locale === 'fr' ? 'Lire conditions' : locale === 'de' ? 'Nutzungsbedingungen' : locale === 'ar' ? 'اقرأ الشروط' : locale === 'ja' ? '利用規約' : 'Read terms') : kind === 'refund' ? (locale === 'es' ? 'Leer privacidad' : 'Read privacy') : (locale === 'es' ? 'Leer privacidad' : 'Read privacy'),
		ctaSecondaryHref: kind === 'privacy' ? '/terms/' : '/privacy-policy/',
		sections: [
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Información que recopilamos' : locale === 'fr' ? 'Informations collectées' : locale === 'de' ? 'Erhobene Daten' : locale === 'ar' ? 'المعلومات التي نجمعها' : locale === 'ja' ? '収集する情報' : 'Information we collect') :
				kind === 'refund' ? (locale === 'es' ? 'Entrega digital' : locale === 'fr' ? 'Livraison numérique' : locale === 'de' ? 'Digitale Lieferung' : locale === 'ar' ? 'التسليم الرقمي' : locale === 'ja' ? 'デジタル配信' : 'Digital delivery') :
				(locale === 'es' ? 'Aceptación de términos' : locale === 'fr' ? 'Acceptation' : locale === 'de' ? 'Annahme' : locale === 'ar' ? 'قبول الشروط' : locale === 'ja' ? '規約への同意' : 'Acceptance of terms'),
				p.s1('Contact email, Zadeyo order references, and basic site security data.'),
				kind === 'privacy' ? 'Payment details are processed by Zadeyo checkout — not stored on tarkovcheats.org.' : p.s2(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Uso de la información' : locale === 'fr' ? 'Utilisation' : locale === 'de' ? 'Datennutzung' : locale === 'ar' ? 'استخدام المعلومات' : locale === 'ja' ? '情報の利用' : 'How we use data') :
				kind === 'refund' ? (locale === 'es' ? 'Cuándo se aprueba' : locale === 'fr' ? 'Approbation' : locale === 'de' ? 'Genehmigung' : locale === 'ar' ? 'موافقة الاسترداد' : locale === 'ja' ? '返金承認' : 'Refund approval') :
				(locale === 'es' ? 'Riesgos y anti-cheat' : locale === 'fr' ? 'Risques' : locale === 'de' ? 'Risiko' : locale === 'ar' ? 'المخاطر' : locale === 'ja' ? 'リスク' : 'Risk disclaimer'),
				p.s1('Support responses, order resolution, and legal compliance when required.'),
				kind === 'terms' ? 'Using cheats may violate Epic Games terms — you assume all ban risk.' : p.s3(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Tus derechos' : locale === 'fr' ? 'Vos droits' : locale === 'de' ? 'Ihre Rechte' : locale === 'ar' ? 'حقوقك' : locale === 'ja' ? 'あなたの権利' : 'Your rights') :
				kind === 'refund' ? (locale === 'es' ? 'Cómo solicitar' : locale === 'fr' ? 'Comment demander' : locale === 'de' ? 'Anfrage stellen' : locale === 'ar' ? 'كيفية الطلب' : locale === 'ja' ? '申請方法' : 'How to request') :
				(locale === 'es' ? 'Cambios' : locale === 'fr' ? 'Modifications' : locale === 'de' ? 'Änderungen' : locale === 'ar' ? 'التغييرات' : locale === 'ja' ? '変更' : 'Policy changes'),
				p.legal(),
				'Email: support@tarkovcheats.org',
			),
		],
	};
}

/** Build all pages for a non-English locale. */
export function buildPagesForLocale(locale) {
	const pages = { home: buildHome(locale) };
	for (const [pageKey, names] of Object.entries(TOPIC_NAMES)) {
		pages[pageKey] = productPage(locale, pageKey, names[locale], CTA2_HREF[pageKey]);
	}
	for (const kind of ['privacy', 'refund', 'terms']) {
		pages[kind] = buildLegal(locale, kind, kind);
	}
	return pages;
}
