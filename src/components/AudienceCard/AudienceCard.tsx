import { tokenVar, type ColorToken } from "../../lib/tokens";
import { TextLink } from "../TextLink/TextLink";

export interface AudienceCardProps {
  /** Content */
  title: string;
  /** Content: optional */
  body?: string;
  /** Content: optional. No link is shown when empty. */
  linkLabel?: string;
  /** Content */
  linkUrl?: string;
  /** Content: optional illustration, bind to a Contentful asset */
  imageSrc?: string;
  /** Design: color block shown when there is no image */
  imageBackground?: ColorToken;
}

export function AudienceCard({ title, body, linkLabel, linkUrl, imageSrc, imageBackground = "color.tintGreen" }: AudienceCardProps) {
  return (
    <div
      data-component="audience-card"
      style={{ background: "var(--dc-color-background)", borderRadius: "var(--dc-radius-lg)", padding: 24, display: "flex", flexDirection: "column", gap: 12, minHeight: 240 }}
    >
      {imageSrc ? (
        <img src={imageSrc} alt="" style={{ height: 88, width: "100%", objectFit: "cover", borderRadius: 14 }} />
      ) : (
        <div aria-hidden="true" style={{ height: 88, borderRadius: 14, background: tokenVar(imageBackground, "color.tintGreen") }} />
      )}
      <h3 style={{ fontFamily: "var(--dc-fontFamily-display)", fontSize: 20, margin: 0 }}>{title}</h3>
      {body && <p style={{ margin: 0, color: "var(--dc-color-textMuted)", fontSize: 15 }}>{body}</p>}
      {linkLabel && (
        <div style={{ marginTop: "auto" }}>
          <TextLink label={linkLabel} url={linkUrl} />
        </div>
      )}
    </div>
  );
}
