export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "Technology", href: "/technology" },
  { label: "Schools", href: "/schools" },
  { label: "Innovation Labs", href: "/innovation-labs" },
  { label: "About Us", href: "/about" },
];

const PROGRAM_ROUTES = ["/robotics", "/stem", "/ai", "/ar-vr", "/coding"];
const SCHOOL_ROUTES = ["/school-programs", "/school-solutions"];

/**
 * Returns whether a given navigation href is active based on the current pathname.
 * 
 * Rules:
 * - "/" strictly matches only exact root pathname "/".
 * - Other hrefs match if pathname === href or pathname starts with `${href}/`.
 * - Standalone program routes (/robotics, /stem, etc.) activate the "/programs" nav item.
 * - Standalone school routes (/school-programs, etc.) activate the "/schools" nav item.
 */
export function isRouteActive(
  pathname: string | null | undefined,
  href: string
): boolean {
  if (!pathname) return false;

  // Exact match for Home to prevent matching every page
  if (href === "/") {
    return pathname === "/";
  }

  // Exact match or sub-route match (e.g. /technology/xyz)
  if (pathname === href || pathname.startsWith(`${href}/`)) {
    return true;
  }

  // Handle program subpages mapping to Programs nav item
  if (href === "/programs") {
    return PROGRAM_ROUTES.some(
      (route) => pathname === route || pathname.startsWith(`${route}/`)
    );
  }

  // Handle school subpages mapping to Schools nav item
  if (href === "/schools") {
    return SCHOOL_ROUTES.some(
      (route) => pathname === route || pathname.startsWith(`${route}/`)
    );
  }

  return false;
}
