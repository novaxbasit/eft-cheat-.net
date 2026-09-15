/** Public support address — keep in sync with brand.supportEmail. */
export const SUPPORT_EMAIL = 'support@eftcheat.net';

export function mailtoSupport(email: string = SUPPORT_EMAIL): string {
	return `mailto:${email}`;
}

/** Visible mailto that Cloudflare Email Address Obfuscation should leave alone. */
export function cloakedEmailHtml(email: string = SUPPORT_EMAIL): string {
	return `<!--email_off--><a href="mailto:${email}">${email}</a><!--email_on-->`;
}

export function cloakEmailsInHtml(html: string, email: string = SUPPORT_EMAIL): string {
	if (!html.includes(email) || html.includes('email_off')) return html;
	const cloaked = cloakedEmailHtml(email);
	return html.replace(new RegExp(`(?:<a href="mailto:${email}">)?${email}(?:</a>)?`, 'g'), cloaked);
}
