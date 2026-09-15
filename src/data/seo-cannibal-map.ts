/**
 * Near-duplicate pageIds → stronger pillars.
 * Kept free of routing imports to avoid circular deps with localizeInternalHref.
 */
export const cannibalRedirectTargets = {
	'best-cheats': 'home',
	'cheats-2026': 'home',
	undetected: 'home',
	'mod-menu': 'home',
	'unlock-all': 'home',
	hacks: 'home',
	'aimbot-hack': 'tarkov-aimbot',
	'soft-aim': 'tarkov-aimbot',
	'esp-hack': 'tarkov-esp',
	wallhack: 'tarkov-esp',
	'cheat-download': 'setup',
	battleye: 'updates',
} as const;

export type CannibalPageId = keyof typeof cannibalRedirectTargets;

export const cannibalPageIds = Object.keys(cannibalRedirectTargets) as CannibalPageId[];

export function isCannibalPageId(pageId: string): pageId is CannibalPageId {
	return pageId in cannibalRedirectTargets;
}

export function getCannibalTargetId(pageId: string): string {
	return (cannibalRedirectTargets as Record<string, string>)[pageId] ?? pageId;
}
