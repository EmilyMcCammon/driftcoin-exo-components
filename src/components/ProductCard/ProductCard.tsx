import { tokenVar, type ColorToken } from "../../lib/tokens";
import "./ProductCard.css";

export interface ProductCardProps {
  /** Content */
  title: string;
  /** Content */
  body: string;
  /** Content */
  url?: string;
  /** Content: product screenshot, bind to a Contentful asset */
  imageSrc: string;
  /** Content */
  imageAlt: string;
  /** Design: color behind the screenshot */
  mediaBackground?: ColorToken;
}

export function ProductCard({ title, body, url = "#", imageSrc, imageAlt, mediaBackground = "color.tintGreen" }: ProductCardProps) {
  return (
    <a className="dc-product-card" href={url} data-component="product-card">
      <div className="dc-product-card__media" style={{ background: tokenVar(mediaBackground, "color.tintGreen") }}>
        <img src={imageSrc} alt={imageAlt} loading="lazy" />
      </div>
      <div className="dc-product-card__body">
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </a>
  );
}
