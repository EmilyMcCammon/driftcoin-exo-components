import { tokenVar, type ColorToken } from "../../lib/tokens";
import { TextLink } from "../TextLink/TextLink";
import "./CaseStudyCard.css";

export interface CaseStudyCardProps {
  /** Content: from Case study → Customer → name (deep binding) */
  customerName: string;
  /** Content: industry and city, from the Customer entry */
  customerMeta?: string;
  /** Content: from Case study → Customer → Logo asset. Initials are shown when empty. */
  logoSrc?: string;
  /** Content */
  headline: string;
  /** Content */
  body?: string;
  /** Content */
  linkLabel?: string;
  /** Content */
  url?: string;
  /** Design: background of the initials tile */
  logoBackground?: ColorToken;
  /** Design: color of the initials */
  logoText?: ColorToken;
  /** Design: "card" for the 3 up grid, "wide" for a single featured story */
  layout?: "card" | "wide";
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
}

export function CaseStudyCard({
  customerName,
  customerMeta,
  logoSrc,
  headline,
  body,
  linkLabel = "Read the story",
  url = "#",
  logoBackground = "color.surfaceInverse",
  logoText = "color.accent",
  layout = "card",
}: CaseStudyCardProps) {
  return (
    <article className={`dc-case dc-case--${layout}`} data-component="case-study-card">
      <div className="dc-case__customer">
        <div
          className="dc-case__logo"
          aria-hidden="true"
          style={{ background: tokenVar(logoBackground, "color.surfaceInverse"), color: tokenVar(logoText, "color.accent") }}
        >
          {logoSrc ? <img src={logoSrc} alt="" /> : initials(customerName)}
        </div>
        <div>
          <div className="dc-case__name">{customerName}</div>
          {customerMeta && <div className="dc-case__meta">{customerMeta}</div>}
        </div>
      </div>
      <h3 className="dc-case__headline">{headline}</h3>
      {body && <p className="dc-case__body">{body}</p>}
      <div className="dc-case__link">
        <TextLink label={linkLabel} url={url} />
      </div>
    </article>
  );
}
