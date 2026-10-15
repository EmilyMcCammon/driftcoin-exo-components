import type { ReactNode } from "react";
import { tokenVar, type SpaceToken } from "../../lib/tokens";

export interface GridProps {
  /** Slot: grid items. In ExO, put a looper here to repeat a component over a reference list. */
  children?: ReactNode;
  /** Design: minimum width of each column in px. Columns wrap below this. */
  minColumnWidth?: number;
  /** Design */
  gap?: SpaceToken;
}

export function Grid({ children, minColumnWidth = 300, gap = "space.xl" }: GridProps) {
  return (
    <div
      data-component="grid"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fit, minmax(min(${minColumnWidth}px, 100%), 1fr))`,
        gap: tokenVar(gap, "space.xl"),
      }}
    >
      {children}
    </div>
  );
}
