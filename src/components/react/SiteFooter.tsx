import { useTranslation } from 'react-i18next';
import I18nProvider from './I18nProvider';

type FooterLink = { labelKey: string; href: string };

type Props = {
	locale: string;
	siteName: string;
	supportEmail: string;
	shareUrl: string;
	checkoutUrl: string;
	storeHref: string;
	tagline: string;
	explore: FooterLink[];
	help: FooterLink[];
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

function SocialIcon({ type }: { type: 'x' | 'reddit' | 'facebook' }) {
	if (type === 'x') {
		return (
			<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
				<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
			</svg>
		);
	}
	if (type === 'reddit') {
		return (
			<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
				<path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
			</svg>
		);
	}
	return (
		<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
			<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
		</svg>
	);
}

function SiteFooterInner({
	siteName,
	supportEmail,
	shareUrl,
	checkoutUrl,
	storeHref,
	tagline,
	explore,
	help,
}: Props) {
	const { t } = useTranslation();
	const year = new Date().getFullYear();
	const brandParts = splitBrandName(siteName);

	const legal = help.filter((l) => l.labelKey.includes('privacy') || l.labelKey.includes('terms'));
	const helpNav = help.filter((l) => !l.labelKey.includes('privacy') && !l.labelKey.includes('terms'));

	const shareLinks = [
		{
			href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(siteName)}`,
			label: t('common.shareX'),
			icon: 'x' as const,
		},
		{
			href: `https://reddit.com/submit?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(siteName)}`,
			label: t('common.shareReddit'),
			icon: 'reddit' as const,
		},
		{
			href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
			label: t('common.shareFacebook'),
			icon: 'facebook' as const,
		},
	];

	return (
		<footer className="site-footer">
			<div className="site-footer__accent" aria-hidden="true" />
			<div className="shell site-footer__main">
				<div className="site-footer__intro">
					<p className="site-footer__brand">
						<span className="site-footer__brand-game">{brandParts.game}</span>
						{brandParts.rest ? <span className="site-footer__brand-rest">{brandParts.rest}</span> : null}
					</p>
					<p className="site-footer__tagline">{tagline}</p>
					<div className="site-footer__actions">
						<a className="site-footer__cta" href={checkoutUrl} rel="noopener noreferrer" target="_blank">
							{t('cta.buy')}
						</a>
						<a className="site-footer__cta site-footer__cta--ghost" href={storeHref}>
							{t('nav.store')}
						</a>
					</div>
					<div className="site-footer__social" aria-label={t('common.share')}>
						{shareLinks.map((link) => (
							<a
								key={link.href}
								className="site-footer__social-btn"
								href={link.href}
								rel="noopener noreferrer"
								target="_blank"
								aria-label={link.label}
							>
								<SocialIcon type={link.icon} />
							</a>
						))}
					</div>
				</div>

				<nav className="site-footer__col" aria-label={t('footer.explore')}>
					<p className="site-footer__label">{t('footer.explore')}</p>
					<ul>
						{explore.map((link) => (
							<li key={link.href}>
								<a href={link.href}>{t(link.labelKey)}</a>
							</li>
						))}
					</ul>
				</nav>

				<nav className="site-footer__col" aria-label={t('footer.help')}>
					<p className="site-footer__label">{t('footer.help')}</p>
					<ul>
						{helpNav.map((link) => (
							<li key={link.href}>
								<a href={link.href}>{t(link.labelKey)}</a>
							</li>
						))}
					</ul>
				</nav>
			</div>

			<div className="shell site-footer__bottom">
				<p>{t('common.copyright', { year, brand: siteName })}</p>
				<nav className="site-footer__legal" aria-label="Legal">
					{legal.map((link) => (
						<a key={link.href} href={link.href}>
							{t(link.labelKey)}
						</a>
					))}
					<a href={`mailto:${supportEmail}`}>{supportEmail}</a>
				</nav>
			</div>
		</footer>
	);
}

export default function SiteFooterApp(props: Props) {
	return (
		<I18nProvider locale={props.locale}>
			<SiteFooterInner {...props} />
		</I18nProvider>
	);
}
