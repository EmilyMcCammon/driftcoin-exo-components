import { tokenVar, type ColorToken, type FontSizeToken } from "../../lib/tokens";
import "./Heading.css";

export interface HeadingProps {
  /** Content */
  text: string;
  /** Design: semantic level, 1 to 4 */
  level?: 1 | 2 | 3 | 4;
  /** Design */
  size?: FontSizeToken;
  /** Design */
  color?: ColorToken;
}

const defaultSize: Record<number, FontSizeToken> = { 1: "fontSize.4xl", 2: "fontSize.3xl", 3: "fontSize.xl", 4: "fontSize.lg" };

export function Heading({ text, level = 2, size, color = "color.text" }: HeadingProps) {
  const Tag = `h${level}` as "h1" | "h2" | "h3" | "h4";
  return (
    <Tag
      className="dc-heading"
      data-component="heading"
      style={{ fontSize: `min(${tokenVar(size, defaultSize[level])}, calc(8vw + 8px))`, color: tokenVar(color, "color.text") }}
    >
      {text}
    </Tag>
  );
}
