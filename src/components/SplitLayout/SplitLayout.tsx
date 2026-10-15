import type { ReactNode } from "react";

export interface SplitLayoutProps {
  /** Slot: narrow left column */
  aside?: ReactNode;
  /** Slot: wide right column */
  main?: ReactNode;
}

export function SplitLayout({ aside, main }: SplitLayoutProps) {
  return (
    <div data-component="split-layout" style={{ display: "flex", flexWrap: "wrap", gap: "var(--dc-space-2xl)" }}>
      <div style={{ flex: "1 1 300px", minWidth: 0 }}>{aside}</div>
      <div style={{ flex: "2 1 560px", minWidth: 0 }}>{main}</div>
    </div>
  );
}
