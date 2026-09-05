/**
 * Primary navigation.
 *
 * Deliberately plain-language. The ritual voice lives in page and section
 * headings, not the menu: promoters, bookers and press must never have to
 * decode a nav item to find the EPK.
 */
export const nav = [
  { label: "Music", path: "/music" },
  { label: "Tour", path: "/tour" },
  { label: "Videos", path: "/videos" },
  { label: "Merch", path: "/merch" },
  { label: "About", path: "/about" },
  { label: "Press", path: "/press" },
] as const;

export const navCta = { label: "Booking", path: "/booking" } as const;
