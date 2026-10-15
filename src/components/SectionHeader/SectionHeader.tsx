import type { ReactNode } from "react";
import { type ColorToken } from "../../lib/tokens";
import { Eyebrow } from "../Eyebrow/Eyebrow";
import { Heading } from "../Heading/Heading";
import { Text } from "../Text/Text";
import "./SectionHeader.css";

export interface SectionHeaderProps {
  /** Content */
  eyebrow?: string;
  /** Content */
  heading: string;
  /** Content */
  body?: string;
  /** Slot: optional button or link shown to the right */
  action?: ReactNode;
  /** Design */
  align?: "start" | "center";
  /** Design */
  headingColor?: ColorToken;
}

export function SectionHeader({ eyebrow, heading, body, action, align = "start", headingColor = "color.text" }: SectionHeaderProps) {
  return (
    <div className={`dc-section-header dc-section-header--${align}`} data-component="section-header">
      <div className="dc-section-header__copy">
        {eyebrow && <Eyebrow text={eyebrow} />}
        <Heading text={heading} level={2} color={headingColor} />
        {body && <Text text={body} />}
      </div>
      {action && <div className="dc-section-header__action">{action}</div>}
    </div>
  );
}
