import { Icon, type IconName } from "../Icon/Icon";

export interface FeatureItemProps {
  /** Content */
  icon: IconName;
  /** Content */
  title: string;
  /** Content */
  body: string;
  /** Design: "plain" for the 6 item grid, "card" adds a border and padding */
  variant?: "plain" | "card";
}

export function FeatureItem({ icon, title, body, variant = "plain" }: FeatureItemProps) {
  const card = variant === "card";
  return (
    <div
      data-component="feature-item"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
        padding: card ? 32 : 0,
        border: card ? "1px solid var(--dc-color-border)" : undefined,
        borderRadius: card ? "var(--dc-radius-lg)" : undefined,
      }}
    >
      <Icon name={icon} />
      <h3 style={{ fontFamily: "var(--dc-fontFamily-display)", fontSize: card ? 24 : 22, margin: 0 }}>{title}</h3>
      <p style={{ margin: 0, color: "var(--dc-color-textMuted)", lineHeight: 1.55 }}>{body}</p>
    </div>
  );
}
