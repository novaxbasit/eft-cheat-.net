const BANNER_READY_MIN_PX = 80;
const SCROLL_TOP_THRESHOLD = 8;

function headerHeight(): number {
	return parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 60;
}

function bannerEl(): HTMLElement | null {
	return (
		document.querySelector<HTMLElement>('.pubg-hero') ??
		document.querySelector<HTMLElement>('.pubg-page__banner')
	);
}

export function isPastBanner(): boolean {
	if (window.scrollY <= SCROLL_TOP_THRESHOLD) return false;

	const hero = bannerEl();
	if (!hero) return window.scrollY > SCROLL_TOP_THRESHOLD;

	const rect = hero.getBoundingClientRect();
	// Hero may not be laid out yet on slow connections — don't treat as scrolled.
	if (rect.height < BANNER_READY_MIN_PX) return false;

	return rect.bottom <= headerHeight();
}

export function syncNavbarHeaderClasses(): void {
	const header = document.querySelector<HTMLElement>('.site-header');
	const hero = bannerEl();
	if (!header || header.closest('.site-nav-drawer[open]')) return;

	const scrolled = isPastBanner();
	header.classList.toggle('is-scrolled', scrolled);
	header.classList.toggle('is-transparent', Boolean(hero) && !scrolled);
}

export function initNavbarScrollSync(): () => void {
	const onChange = () => syncNavbarHeaderClasses();

	onChange();
	document.addEventListener('DOMContentLoaded', onChange, { once: true });
	window.addEventListener('load', onChange, { once: true });
	window.addEventListener('scroll', onChange, { passive: true });
	window.addEventListener('resize', onChange);

	const hero = bannerEl();
	let ro: ResizeObserver | undefined;
	if (hero && typeof ResizeObserver !== 'undefined') {
		ro = new ResizeObserver(onChange);
		ro.observe(hero);
	}

	return () => {
		window.removeEventListener('scroll', onChange);
		window.removeEventListener('resize', onChange);
		ro?.disconnect();
	};
}
