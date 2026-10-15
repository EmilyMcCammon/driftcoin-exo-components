import type { ReactNode } from "react";
import { Eyebrow } from "../Eyebrow/Eyebrow";
import { Heading } from "../Heading/Heading";
import { Text } from "../Text/Text";
import { TextLink } from "../TextLink/TextLink";

export interface SpotlightProps {
  /** Content */
  eyebrow?: string;
  /** Content */
  heading: string;
  /** Content */
  body: string;
  /** Content */
  linkLabel?: string;
  /** Content */
  linkUrl?: string;
  /** Slot: media shown beside the copy, usually a MediaPanel */
  media?: ReactNode;
  /** Design: which side the media sits on */
  mediaPosition?: "left" | "right";
}

export function Spotlight({ eyebrow, heading, body, linkLabel, linkUrl, media, mediaPosition = "right" }: SpotlightProps) {
  return (
    <div
      data-component="spotlight"
      style={{
        display: "flex",
        flexWrap: mediaPosition === "left" ? "wrap-reverse" : "wrap",
        flexDirection: mediaPosition === "left" ? "row-reverse" : "row",
        gap: "var(--dc-space-2xl)",
        alignItems: "center",
      }}
    >
      <div style={{ flex: "1 1 420px", minWidth: 0, display: "flex", flexDirection: "column", gap: 18 }}>
        {eyebrow && <Eyebrow text={eyebrow} />}
        <Heading text={heading} level={2} />
        <Text text={body} />
        {linkLabel && <TextLink label={linkLabel} url={linkUrl} />}
      </div>
      <div style={{ flex: "1 1 460px", minWidth: 0 }}>{media}</div>
    </div>
  );
}
