import { tokenVar, type ColorToken } from "../../lib/tokens";

export interface AnnouncementBannerProps {
  /** Content: bold lead in, for example "New for Q4:" */
  label?: string;
  /** Content */
  message: string;
  /** Content */
  linkLabel?: string;
  /** Content */
  linkUrl?: string;
  /** Design */
  background?: ColorToken;
  /** Design */
  textColor?: ColorToken;
}

export function AnnouncementBanner({
  label,
  message,
  linkLabel,
  linkUrl = "#",
  background = "color.highlight",
  textColor = "color.text",
}: AnnouncementBannerProps) {
  const color = tokenVar(textColor, "color.text");
  return (
    <div data-component="announcement-banner" style={{ background: tokenVar(background, "color.highlight"), color }}>
      <div
        className="dc-container"
        style={{ display: "flex", flexWrap: "wrap", gap: "8px 16px", justifyContent: "center", padding: "10px 32px", fontSize: 14, textAlign: "center" }}
      >
        {label && <strong>{label}</strong>}
        <span>{message}</span>
        {linkLabel && (
          <a href={linkUrl} style={{ color, fontWeight: 600 }}>
            {linkLabel}
          </a>
        )}
      </div>
    </div>
  );
}
