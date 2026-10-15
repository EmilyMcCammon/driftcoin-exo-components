import { tokenVar, type ColorToken } from "../../lib/tokens";
import "./Button.css";

export interface ButtonProps {
  /** Content: button text */
  label: string;
  /** Content: where the button goes */
  url?: string;
  /** Design: fill color */
  backgroundColor?: ColorToken;
  /** Design: text color */
  color?: ColorToken;
  /** Design: border color. Leave empty for no border. */
  borderColor?: ColorToken;
}

export function Button({
  label,
  url = "#",
  backgroundColor = "color.primary",
  color = "color.primaryText",
  borderColor,
}: ButtonProps) {
  return (
    <a
      className="dc-button"
      href={url}
      data-component="button"
      style={{
        backgroundColor: tokenVar(backgroundColor, "color.primary"),
        color: tokenVar(color, "color.primaryText"),
        border: borderColor ? `1.5px solid ${tokenVar(borderColor, "color.border")}` : "0",
      }}
    >
      {label}
    </a>
  );
}
