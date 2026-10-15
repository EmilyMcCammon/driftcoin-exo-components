import type { ReactNode } from "react";
import { tokenVar, type ColorToken } from "../../lib/tokens";

export interface CtaBandProps {
  /** Content */
  heading: string;
  /** Content */
  body?: string;
  /** Slot: one button */
  action?: ReactNode;
  /** Design */
  background?: ColorToken;
  /** Design */
  textColor?: ColorToken;
}

export function CtaBand({ heading, body, action, background = "color.primary", textColor = "color.primaryText" }: CtaBandProps) {
  return (
    <div
      data-component="cta-band"
      style={{
        background: tokenVar(background, "color.primary"),
        color: tokenVar(textColor, "color.primaryText"),
        borderRadius: 32,
        padding: "72px 32px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 20,
        textAlign: "center",
      }}
    >
      <h2 style={{ fontFamily: "var(--dc-fontFamily-display)", fontWeight: 700, fontSize: "clamp(32px, 5vw, 48px)", lineHeight: 1.05, letterSpacing: "-0.02em", margin: 0 }}>
        {heading}
      </h2>
      {body && <p style={{ margin: 0, fontSize: 18, maxWidth: 520, opacity: 0.9 }}>{body}</p>}
      {action}
    </div>
  );
}
