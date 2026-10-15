import type { ReactNode } from "react";
import { tokenVar, type ColorToken, type RadiusToken, type SpaceToken } from "../../lib/tokens";

export interface MediaPanelProps {
  /** Content: illustration, bind to a Contentful asset. Ignored when the slot has content. */
  imageSrc?: string;
  /** Content */
  imageAlt?: string;
  /** Slot: anything to show inside the panel instead of an image */
  children?: ReactNode;
  /** Design */
  background?: ColorToken;
  /** Design */
  radius?: RadiusToken;
  /** Design */
  padding?: SpaceToken;
}

export function MediaPanel({ imageSrc, imageAlt = "", children, background = "color.tintGreen", radius = "radius.xl", padding = "space.xl" }: MediaPanelProps) {
  return (
    <div
      data-component="media-panel"
      style={{
        background: tokenVar(background, "color.tintGreen"),
        borderRadius: tokenVar(radius, "radius.xl"),
        padding: tokenVar(padding, "space.xl"),
      }}
    >
      {children ?? (imageSrc && <img src={imageSrc} alt={imageAlt} style={{ width: "100%", borderRadius: "var(--dc-radius-md)" }} />)}
    </div>
  );
}
