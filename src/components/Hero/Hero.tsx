import type { ReactNode } from "react";
import { cx, tokenVar, type ColorToken, type SpaceToken } from "../../lib/tokens";
import "./Hero.css";

export interface HeroProps {
  /** Content */
  eyebrow?: string;
  /** Content */
  heading: string;
  /** Content */
  body?: string;
  /** Content: small print under the buttons */
  footnote?: string;
  /** Slot: breadcrumb or other content above the eyebrow */
  above?: ReactNode;
  /** Slot: one or two buttons */
  actions?: ReactNode;
  /** Slot: product image or illustration. Leave empty for a text only hero. */
  media?: ReactNode;
  /** Design: "split" puts media on the right, "centered" stacks everything */
  layout?: "split" | "centered";
  /** Design */
  background?: ColorToken;
  /** Design */
  headingColor?: ColorToken;
  /** Design */
  bodyColor?: ColorToken;
  /** Design */
  eyebrowColor?: ColorToken;
  /** Design */
  paddingY?: SpaceToken;
}

export function Hero({
  eyebrow,
  heading,
  body,
  footnote,
  above,
  actions,
  media,
  layout = "split",
  background = "color.surfaceInverse",
  headingColor = "color.textInverse",
  bodyColor = "color.textInverseMuted",
  eyebrowColor = "color.accent",
  paddingY = "space.3xl",
}: HeroProps) {
  const pad = tokenVar(paddingY, "space.3xl");
  return (
    <section
      data-component="hero"
      className={cx("dc-hero", `dc-hero--${layout}`)}
      style={{ background: tokenVar(background, "color.surfaceInverse") }}
    >
      <div className="dc-container dc-hero__inner" style={{ paddingTop: pad, paddingBottom: pad }}>
        <div className="dc-hero__copy">
          {above}
          {eyebrow && (
            <p className="dc-hero__eyebrow" style={{ color: tokenVar(eyebrowColor, "color.accent") }}>
              {eyebrow}
            </p>
          )}
          <h1 className="dc-hero__heading" style={{ color: tokenVar(headingColor, "color.textInverse") }}>
            {heading}
          </h1>
          {body && (
            <p className="dc-hero__body" style={{ color: tokenVar(bodyColor, "color.textInverseMuted") }}>
              {body}
            </p>
          )}
          {actions && <div className="dc-hero__actions">{actions}</div>}
          {footnote && (
            <p className="dc-hero__footnote" style={{ color: tokenVar(bodyColor, "color.textInverseMuted") }}>
              {footnote}
            </p>
          )}
        </div>
        {media && <div className="dc-hero__media">{media}</div>}
      </div>
    </section>
  );
}
