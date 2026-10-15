import { tokenVar, type ColorToken, type FontSizeToken } from "../../lib/tokens";
import "./Text.css";

export interface TextProps {
  /** Content */
  text: string;
  /** Design */
  size?: FontSizeToken;
  /** Design */
  color?: ColorToken;
}

export function Text({ text, size = "fontSize.lg", color = "color.textMuted" }: TextProps) {
  return (
    <p className="dc-text" data-component="text" style={{ fontSize: tokenVar(size, "fontSize.lg"), color: tokenVar(color, "color.textMuted") }}>
      {text}
    </p>
  );
}
