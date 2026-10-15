import { tokenVar, type ColorToken } from "../../lib/tokens";
import "./Eyebrow.css";

export interface EyebrowProps {
  /** Content */
  text: string;
  /** Design */
  color?: ColorToken;
}

export function Eyebrow({ text, color = "color.primary" }: EyebrowProps) {
  return (
    <p className="dc-eyebrow" data-component="eyebrow" style={{ color: tokenVar(color, "color.primary") }}>
      {text}
    </p>
  );
}
