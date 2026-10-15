import type { ReactNode } from "react";
import { tokenVar, type ColorToken, type SpaceToken } from "../../lib/tokens";

export interface SectionProps {
  /** Slot: section content */
  children?: ReactNode;
  /** Design */
  background?: ColorToken;
  /** Design: top padding */
  paddingTop?: SpaceToken;
  /** Design: bottom padding */
  paddingBottom?: SpaceToken;
  /** Design: draw a hairline above and below */
  bordered?: boolean;
  /** Content: anchor id */
  id?: string;
}

export function Section({
  children,
  background = "color.background",
  paddingTop = "space.3xl",
  paddingBottom = "space.3xl",
  bordered = false,
  id,
}: SectionProps) {
  const border = bordered ? "1px solid var(--dc-color-border)" : undefined;
  return (
    <section
      id={id}
      data-component="section"
      style={{
        background: tokenVar(background, "color.background"),
        paddingTop: tokenVar(paddingTop, "space.3xl"),
        paddingBottom: tokenVar(paddingBottom, "space.3xl"),
        borderTop: border,
        borderBottom: border,
      }}
    >
      <div className="dc-container" style={{ display: "flex", flexDirection: "column", gap: "var(--dc-space-2xl)" }}>
        {children}
      </div>
    </section>
  );
}
