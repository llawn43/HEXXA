const base = import.meta.env.BASE_URL.replace(/\/$/, "");

/**
 * Builds an internal link that respects the configured `base` path.
 *
 * Hardcoding "/music" would 404 on GitHub Pages, where the site is served
 * from "/HEXXA/". Every internal href goes through here so switching to a
 * custom domain later needs no template changes.
 */
export function href(path: string): string {
  if (path === "/") return base || "/";
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

/** True when `path` is the page currently being rendered. */
export function isCurrent(currentPath: string, path: string): boolean {
  const strip = (value: string) => value.replace(base, "").replace(/\/$/, "") || "/";
  return strip(currentPath) === strip(path);
}
