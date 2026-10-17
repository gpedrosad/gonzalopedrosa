export function loadExcludedPrefixes(projectRoot: string): string[];
export function isExcludedRoute(route: string, prefixes: string[]): boolean;
export function loadRedirectSources(projectRoot: string): Set<string>;
export function discoverIndexableRoutes(projectRoot: string): string[];
