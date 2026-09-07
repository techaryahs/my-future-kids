import type { ReactNode, SVGProps } from "react";

const iconPaths = {
  ai: (
    <>
      <path d="M9 3.5a3 3 0 0 0-3 3v.4a3.5 3.5 0 0 0-.8 6.2A3.2 3.2 0 0 0 8.4 17H9" />
      <path d="M15 3.5a3 3 0 0 1 3 3v.4a3.5 3.5 0 0 1 .8 6.2A3.2 3.2 0 0 1 15.6 17H15" />
      <path d="M9 3.5V20" />
      <path d="M15 3.5V20" />
      <path d="M9 8h6" />
      <path d="M9 13h6" />
      <path d="M11.5 20h1" />
    </>
  ),
  arrowRight: (
    <>
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="8" r="5" />
      <path d="m8.5 12.2-1.4 7.3 4.9-2.7 4.9 2.7-1.4-7.3" />
    </>
  ),
  book: (
    <>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 1 4 16.5z" />
      <path d="M4 16.5A2.5 2.5 0 0 0 6.5 19H20" />
      <path d="M8 7h8" />
      <path d="M8 10h6" />
    </>
  ),
  building: (
    <>
      <path d="M4 21V5.8L12 3l8 2.8V21" />
      <path d="M9 21v-6h6v6" />
      <path d="M8 8h.01" />
      <path d="M12 8h.01" />
      <path d="M16 8h.01" />
      <path d="M8 12h.01" />
      <path d="M16 12h.01" />
    </>
  ),
  calendar: (
    <>
      <path d="M7 2v4" />
      <path d="M17 2v4" />
      <rect x="4" y="5" width="16" height="16" rx="2" />
      <path d="M4 10h16" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
    </>
  ),
  check: (
    <>
      <path d="m5 12 4 4L19 6" />
    </>
  ),
  code: (
    <>
      <path d="m8 9-4 3 4 3" />
      <path d="m16 9 4 3-4 3" />
      <path d="m14 5-4 14" />
    </>
  ),
  flask: (
    <>
      <path d="M9 3h6" />
      <path d="M10 3v5.6L5.2 17a3 3 0 0 0 2.6 4.5h8.4a3 3 0 0 0 2.6-4.5L14 8.6V3" />
      <path d="M8 15h8" />
    </>
  ),
  lab: (
    <>
      <path d="M5 21h14" />
      <path d="M7 21V8l5-5 5 5v13" />
      <path d="M9.5 12h5" />
      <path d="M9.5 16h5" />
      <path d="M12 3v5" />
    </>
  ),
  network: (
    <>
      <circle cx="6" cy="7" r="3" />
      <circle cx="18" cy="7" r="3" />
      <circle cx="12" cy="18" r="3" />
      <path d="m8.5 8.5 2.2 6" />
      <path d="m15.5 8.5-2.2 6" />
      <path d="M9 7h6" />
    </>
  ),
  play: (
    <>
      <path d="M8 5v14l11-7z" />
    </>
  ),
  robotics: (
    <>
      <path d="M12 2v3" />
      <rect x="6" y="6" width="12" height="9" rx="3" />
      <path d="M8 15v3a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-3" />
      <path d="M9.5 10.5h.01" />
      <path d="M14.5 10.5h.01" />
      <path d="M4 10h2" />
      <path d="M18 10h2" />
    </>
  ),
  rocket: (
    <>
      <path d="M4.5 16.5c2.5.2 4.7-.6 6.4-2.3l5.9-5.9A6.6 6.6 0 0 0 18.6 3 6.6 6.6 0 0 0 13.3 4.8l-5.9 5.9c-1.7 1.7-2.5 3.9-2.3 6.4z" />
      <path d="M9 15 7.5 21l3.9-3.9" />
      <path d="M9 9 3 10.5l3.9 3.9" />
      <circle cx="14.5" cy="7.5" r="1.5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 19 6v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  spark: (
    <>
      <path d="M12 2 14.3 8.2 21 10.5 14.3 12.8 12 19 9.7 12.8 3 10.5 9.7 8.2z" />
      <path d="M19 17v4" />
      <path d="M21 19h-4" />
    </>
  ),
  trend: (
    <>
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <path d="m7 15 4-4 3 3 5-7" />
      <path d="M15 7h4v4" />
    </>
  ),
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <circle cx="9.5" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.9" />
      <path d="M16 3.3a4 4 0 0 1 0 7.4" />
    </>
  ),
  vr: (
    <>
      <path d="M3 12a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v4a3 3 0 0 1-3 3h-2.2a3 3 0 0 1-2.4-1.2l-.8-1.1a.8.8 0 0 0-1.2 0l-.8 1.1A3 3 0 0 1 8.2 19H6a3 3 0 0 1-3-3z" />
      <path d="M7 13h4" />
      <path d="M15 13h2" />
    </>
  ),
} satisfies Record<string, ReactNode>;

export type IconName = keyof typeof iconPaths;

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
};

export function Icon({ name, className, ...props }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      {...props}
    >
      {iconPaths[name]}
    </svg>
  );
}
