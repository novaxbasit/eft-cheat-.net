/**
 * Cloudflare Worker — host + path canonicalization before static assets.
 * Canonical host is kept in sync with brand.url by `npm run sync:brand`.
 * Path 301s come from public/_redirects via functions/path-redirects.json.
 */
import PATH_REDIRECTS from '../functions/path-redirects.json';
import CANNIBAL_REDIRECTS from '../functions/cannibal-redirects.json';

export interface Env {
	ASSETS: Fetcher;
}

const CANONICAL_HOST = 'eftcheat.net';

const LEGACY_HOSTS = new Set([
	'tarkovcheats.org',
	'www.tarkovcheats.org',
	'besttarkovcheats.com',
	'www.besttarkovcheats.com',
	'fortnitehack.net',
	'www.fortnitehack.net',
	'fortnitecheats.xyz',
	'www.fortnitecheats.xyz',
	'fortnitecheats.net',
	'www.fortnitecheats.net',
	'fortnitecheats.com',
	'www.fortnitecheats.com',
	'warzonehacks.net',
	'www.warzonehacks.net',
	'warzonescheats.net',
	'www.warzonescheats.net',
	'warzonescheats.com',
	'www.warzonescheats.com',
	'warzonescheats.xyz',
	'www.warzonescheats.xyz',
]);

function xmlTrailingSlashRedirect(pathname: string): string | null {
	if (!pathname.endsWith('.xml/')) return null;
	return pathname.slice(0, -1);
}

function trailingSlashRedirect(pathname: string): string | null {
	if (!pathname || pathname === '/' || pathname.includes('.') || pathname.endsWith('/')) {
		return null;
	}
	return `${pathname}/`;
}

function resolvePathRedirect(pathname: string): string | null {
	const map = PATH_REDIRECTS as Record<string, string>;
	const cannibal = CANNIBAL_REDIRECTS as Record<string, string>;
	return (
		map[pathname] ??
		cannibal[pathname] ??
		xmlTrailingSlashRedirect(pathname) ??
		trailingSlashRedirect(pathname)
	);
}

function canonicalUrl(request: Request): URL | null {
	const url = new URL(request.url);
	const host = (request.headers.get('host') || url.hostname).split(':')[0].toLowerCase();
	let changed = false;

	if (url.protocol === 'http:') {
		url.protocol = 'https:';
		changed = true;
	}

	if (
		host === `www.${CANONICAL_HOST}` ||
		url.hostname === `www.${CANONICAL_HOST}` ||
		LEGACY_HOSTS.has(host)
	) {
		url.hostname = CANONICAL_HOST;
		changed = true;
	}

	return changed ? url : null;
}

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const url = new URL(request.url);

		const hostTarget = canonicalUrl(request);
		if (hostTarget) {
			const mappedPath = resolvePathRedirect(url.pathname) ?? url.pathname;
			hostTarget.pathname = mappedPath;
			hostTarget.search = url.search;
			return Response.redirect(hostTarget.toString(), 301);
		}

		const pathRedirect = resolvePathRedirect(url.pathname);
		if (pathRedirect) {
			return Response.redirect(`${url.origin}${pathRedirect}${url.search}`, 301);
		}

		return env.ASSETS.fetch(request);
	},
};
