import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { isPastBanner } from '../../lib/navbar-scroll';
import I18nProvider from './I18nProvider';
import LanguageSwitcher, { type LocaleMeta } from './LanguageSwitcher';

type NavLink = {
	id: string;
	labelKey: string;
	edit?: string;
	href: string;
};

type Props = {
	locale: string;
	siteName: string;
	checkoutUrl: string;
	currentPath: string;
	homeHref: string;
	reviewsBasePath: string;
	locales: LocaleMeta[];
	hrefForLocale: Record<string, string>;
	links: NavLink[];
	hasHeroBanner?: boolean;
};

const icons: Record<string, string> = {
	hacks:
		'M12 3.5l7.5 4.2v8.6L12 20.5l-7.5-4.2V7.7L12 3.5zm0 2.2L6.8 8.5v6.9L12 18.3l5.2-2.9V8.5L12 5.7z',
	esp: 'M12 5a7 7 0 100 14 7 7 0 000-14zm0 2.2a4.8 4.8 0 110 9.6 4.8 4.8 0 010-9.6zM12 10.2v2.4l1.8 1.1',
	pricing:
		'M7.5 7.2h9M7.5 12h9M7.5 16.8H14M5 4.8h14a1.2 1.2 0 011.2 1.2v12a1.2 1.2 0 01-1.2 1.2H5A1.2 1.2 0 013.8 18V6A1.2 1.2 0 015 4.8z',
	updates:
		'M12 4.2v3.2M12 16.6v3.2M4.2 12h3.2M16.6 12h3.2M7.1 7.1l2.3 2.3M14.6 14.6l2.3 2.3M16.9 7.1l-2.3 2.3M9.4 14.6l-2.3 2.3',
	reviews:
		'M12 4.5l1.8 4.9H19l-4.1 3.2 1.6 5L12 14.9 7.5 17.6l1.6-5L5 9.4h5.2L12 4.5z',
};

function splitBrandName(name: string): { game: string; rest: string } {
	const parts = name.trim().split(/\s+/);
	if (parts.length < 2) return { game: name, rest: '' };
	const last = parts[parts.length - 1] ?? '';
	if (/^(cheats|hacks|cheat|hack)$/i.test(last)) {
		return { game: parts.slice(0, -1).join(' '), rest: last };
	}
	return { game: parts[0] ?? name, rest: parts.slice(1).join(' ') };
}

function NavbarInner({
	locale,
	siteName,
	checkoutUrl,
	currentPath,
	homeHref,
	reviewsBasePath,
	locales,
	hrefForLocale,
	links,
	hasHeroBanner = false,
}: Props) {
	const { t } = useTranslation();
	const [scrolled, setScrolled] = useState(false);

	const isActive = (href: string) => {
		if (href === '/') return currentPath === '/' || currentPath === `/${locale}/`;
		if (href === reviewsBasePath) return currentPath === href || currentPath.startsWith(href);
		return currentPath === href || currentPath.startsWith(href);
	};

	const closeDrawer = (event: React.SyntheticEvent<HTMLAnchorElement>) => {
		const drawer = event.currentTarget.closest<HTMLDetailsElement>('.site-nav-drawer');
		drawer?.removeAttribute('open');
	};

	useEffect(() => {
		const onChange = () => setScrolled(isPastBanner());

		onChange();
		window.addEventListener('load', onChange, { once: true });
		window.addEventListener('scroll', onChange, { passive: true });
		window.addEventListener('resize', onChange);

		const hero =
			document.querySelector<HTMLElement>('.pubg-hero') ??
			document.querySelector<HTMLElement>('.pubg-page__banner');
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
	}, []);

	const navLinks = useMemo(
		() =>
			links.map((item) => ({
				...item,
				label: t(item.labelKey),
				active: isActive(item.href),
			})),
		[links, t, currentPath, locale, reviewsBasePath],
	);

	const brandParts = splitBrandName(siteName);

	return (
		<header
			className={`site-header${hasHeroBanner && !scrolled ? ' is-transparent' : ''}${scrolled ? ' is-scrolled' : ''}`}
			data-nav
		>
			<div className="shell site-header__bar">
				<a className="site-brand" href={homeHref} data-edit="name">
					{brandParts.rest ? (
						<>
							<span className="site-brand__game">{brandParts.game}</span>
							<span className="site-brand__rest">{brandParts.rest}</span>
						</>
					) : (
						siteName
					)}
				</a>

				<nav className="site-nav" aria-label={t('nav.primaryAria')}>
					{navLinks.map((item) => (
						<a
							key={item.id}
							href={item.href}
							className={item.active ? 'is-active' : undefined}
							onClick={closeDrawer}
						>
							<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
								<path
									d={icons[item.id]}
									stroke="currentColor"
									strokeWidth="1.6"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							<span data-edit={item.edit}>{item.label}</span>
						</a>
					))}
				</nav>

				<div className="site-tools">
					<div className="site-tools__pair">
						<div className="site-tools__lang">
							<LanguageSwitcher
								currentLocale={locale}
								locales={locales}
								hrefForLocale={hrefForLocale}
							/>
						</div>
						<a
							href={checkoutUrl}
							className="site-tools__buy site-tools__pill site-tools__pill--buy"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span data-edit="ctaBuyShort">{t('cta.buyShort')}</span>
						</a>
					</div>
					<details className="site-nav-drawer">
						<summary className="site-menu" aria-label={t('nav.openMenu')}>
							<span className="site-menu__bars" aria-hidden="true">
								<span />
								<span />
								<span />
							</span>
						</summary>
					</details>
				</div>
			</div>
		</header>
	);
}

export default function NavbarApp(props: Props) {
	return (
		<I18nProvider locale={props.locale}>
			<NavbarInner {...props} />
		</I18nProvider>
	);
}
