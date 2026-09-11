type RevealEl = HTMLElement & { dataset: DOMStringMap };

function reveal(el: RevealEl) {
	requestAnimationFrame(() => {
		requestAnimationFrame(() => {
			el.classList.add('is-revealed');
		});
	});
}

function setIndex(el: RevealEl, index: number) {
	el.style.setProperty('--reveal-index', String(index));
}

function mark(el: Element, type = 'up', index?: number) {
	const node = el as RevealEl;
	if (node.hasAttribute('data-reveal') || node.hasAttribute('data-reveal-immediate')) return;
	node.setAttribute('data-reveal', type);
	if (index !== undefined) setIndex(node, index);
}

function markImmediate(el: Element, type = 'up', index?: number) {
	const node = el as RevealEl;
	if (node.hasAttribute('data-reveal-immediate')) return;
	node.setAttribute('data-reveal-immediate', type);
	if (index !== undefined) setIndex(node, index);
}

function staggerChildren(parent: Element, selector: string, type = 'up') {
	parent.querySelectorAll<RevealEl>(selector).forEach((child, index) => {
		mark(child, type, index);
	});
}

function autoEnhance() {
	document
		.querySelectorAll('.pubg-hero__title, .pubg-hero__sub, .pubg-hero__cta')
		.forEach((el, index) => markImmediate(el, 'up', index));

	document
		.querySelectorAll('.banner__title, .banner__intro, .banner__actions')
		.forEach((el, index) => markImmediate(el, 'up', index));

	document
		.querySelectorAll('.pubg-page__banner-title, .pubg-page__banner-intro')
		.forEach((el, index) => markImmediate(el, 'up', index));

	document
		.querySelectorAll('.reviews-index__banner h1, .reviews-index__intro, .review-page__banner-title')
		.forEach((el, index) => markImmediate(el, 'up', index));

	document.querySelectorAll('.pubg-section__head:not([data-reveal])').forEach((el) => mark(el, 'up'));
	document.querySelectorAll('.pubg-patch:not([data-reveal])').forEach((el) => mark(el, 'scale'));
	document.querySelectorAll('.pubg-faq details:not([data-reveal])').forEach((el, index) => mark(el, 'up', index));

	document.querySelectorAll('.pubg-gallery').forEach((gallery) => {
		staggerChildren(gallery, '.pubg-gallery__item:not([data-reveal])', 'up');
	});

	document.querySelectorAll('.pubg-community').forEach((grid) => {
		staggerChildren(grid, '.pubg-community__card:not([data-reveal])', 'up');
	});

	document.querySelectorAll('.card-panel:not([data-reveal])').forEach((el, index) => mark(el, 'up', index % 3));
	document.querySelectorAll('.pubg-panel:not([data-reveal])').forEach((el, index) => mark(el, 'up', index % 3));
	document.querySelectorAll('.price-card:not([data-reveal])').forEach((el, index) => mark(el, 'scale', index));
	document.querySelectorAll('.blog__feature-card:not([data-reveal]), .blog__card:not([data-reveal])').forEach((el, index) =>
		mark(el, 'up', index % 4),
	);
	document.querySelectorAll('.guides__grid').forEach((grid) => {
		staggerChildren(grid, 'a:not([data-reveal]), article:not([data-reveal])', 'up');
	});

	document.querySelectorAll('.reviews-index__summary:not([data-reveal])').forEach((el) => mark(el, 'fade'));
	document.querySelectorAll('.reviews-index__grid').forEach((grid) => {
		staggerChildren(grid, '.reviews-index__card:not([data-reveal])', 'up');
	});
	document.querySelectorAll('.review-detail:not([data-reveal])').forEach((el) => mark(el, 'up'));
	document.querySelectorAll('.review-detail__more-card:not([data-reveal])').forEach((el, index) =>
		mark(el, 'up', index),
	);

	document.querySelectorAll('.site-footer__col:not([data-reveal]), .site-footer__intro:not([data-reveal])').forEach((el, index) =>
		mark(el, 'up', index),
	);
}

export function initScrollReveal() {
	document.documentElement.classList.add('has-reveal');
	autoEnhance();

	const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	const scrollEls = document.querySelectorAll<RevealEl>('[data-reveal]');
	const immediateEls = document.querySelectorAll<RevealEl>('[data-reveal-immediate]');

	if (reduceMotion) {
		scrollEls.forEach(reveal);
		immediateEls.forEach(reveal);
		return;
	}

	immediateEls.forEach((el) => {
		const index = Number(el.style.getPropertyValue('--reveal-index') || 0);
		window.setTimeout(() => reveal(el), 180 + index * 140);
	});

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				const el = entry.target as RevealEl;
				const delay = Number(el.dataset.revealDelay ?? 0) * 100;
				window.setTimeout(() => reveal(el), delay);
				if (el.dataset.revealOnce !== 'false') observer.unobserve(el);
			}
		},
		{ threshold: 0.08, rootMargin: '0px 0px -4% 0px' },
	);

	scrollEls.forEach((el) => observer.observe(el));
}

if (typeof document !== 'undefined') {
	const boot = () => window.setTimeout(initScrollReveal, 60);
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', boot, { once: true });
	} else {
		boot();
	}
}
