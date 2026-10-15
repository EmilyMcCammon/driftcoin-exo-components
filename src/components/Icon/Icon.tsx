import { tokenVar, type ColorToken } from "../../lib/tokens";

export type IconName = "check" | "globe" | "trend" | "coin" | "document" | "shield" | "arrow" | "invoice" | "link" | "cart";

export interface IconProps {
  /** Content */
  name: IconName;
  /** Design */
  color?: ColorToken;
  /** Design: pixel size */
  size?: number;
}

const paths: Record<IconName, string[]> = {
  check: ["M4 12l5 5L20 6"],
  globe: ["M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18", "M3 12h18", "M12 3c3 3 3 15 0 18", "M12 3c-3 3-3 15 0 18"],
  trend: ["M4 17l5-5 4 4 7-8", "M14 8h6v6"],
  coin: ["M12 3v18", "M7 8c0-2 2-3 5-3s5 1 5 3-2 3-5 4-5 2-5 4 2 3 5 3 5-1 5-3"],
  document: ["M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z", "M9 8h6", "M9 12h6", "M9 16h3"],
  shield: ["M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"],
  arrow: ["M5 12h14", "M13 6l6 6-6 6"],
  invoice: ["M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z", "M9 8h6", "M9 12h6", "M9 16h3"],
  link: ["M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1", "M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"],
  cart: ["M4 5h2l2 11h10l2-8H7", "M10 20h.01", "M17 20h.01"],
};

export function Icon({ name, color = "color.primary", size = 36 }: IconProps) {
  return (
    <svg
      data-component="icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={tokenVar(color, "color.primary")}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}
