import { tokenVar, type ColorToken } from "../../lib/tokens";
import "./TextLink.css";

export interface TextLinkProps {
  /** Content */
  label: string;
  /** Content */
  url?: string;
  /** Design */
  color?: ColorToken;
}

export function TextLink({ label, url = "#", color = "color.primary" }: TextLinkProps) {
  return (
    <a className="dc-textlink" href={url} data-component="text-link" style={{ color: tokenVar(color, "color.primary") }}>
      {label} <span aria-hidden="true">→</span>
    </a>
  );
}
