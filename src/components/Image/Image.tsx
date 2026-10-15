import { tokenVar, type RadiusToken } from "../../lib/tokens";

export interface ImageProps {
  /** Content: bind this to a Contentful asset */
  src: string;
  /** Content */
  alt: string;
  /** Design */
  radius?: RadiusToken;
  /** Design: CSS aspect ratio such as "16 / 9". Leave empty to use the image's own ratio. */
  aspectRatio?: string;
  /** Design */
  fit?: "cover" | "contain";
}

export function Image({ src, alt, radius = "radius.none", aspectRatio, fit = "cover" }: ImageProps) {
  return (
    <img
      data-component="image"
      src={src}
      alt={alt}
      loading="lazy"
      style={{ width: "100%", borderRadius: tokenVar(radius, "radius.none"), aspectRatio, objectFit: fit }}
    />
  );
}
