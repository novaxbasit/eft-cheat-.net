import type { PageId } from './i18n/routing';
import {
	cannibalPageIds,
	cannibalRedirectTargets,
	getCannibalTargetId,
	isCannibalPageId,
	type CannibalPageId,
} from './seo-cannibal-map';

export {
	cannibalPageIds,
	cannibalRedirectTargets,
	isCannibalPageId,
	type CannibalPageId,
};

/** Product pages that stay indexable. Everything else 301s and stays out of XML sitemaps. */
export const indexablePageIds = [
	'home',
	'features',
	'tarkov-esp',
	'tarkov-aimbot',
	'radar',
	'pricing',
	'updates',
	'setup',
	'faq',
	'support',
	'privacy',
	'refund',
	'terms',
] as const satisfies readonly PageId[];

export const sitemapExcludedPageIds = new Set<PageId>([
	...cannibalPageIds,
	'hacks',
] as PageId[]);

/** Canonical product URL is the English homepage. */
export const MONEY_PAGE_ID = 'home' as const satisfies PageId;
export const MONEY_PATH = '/' as const;

export function getCannibalTarget(pageId: PageId): PageId {
	return getCannibalTargetId(pageId) as PageId;
}
