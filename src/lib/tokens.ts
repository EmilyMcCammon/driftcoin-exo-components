/**
 * Design property values are token paths from tokens/tokens.json,
 * for example "color.primary" or "space.xl". ExO stores the token path
 * and the component turns it into a CSS variable.
 */
export type ColorToken =
  | "color.background"
  | "color.surface"
  | "color.surfaceInverse"
  | "color.surfaceInverseRaised"
  | "color.text"
  | "color.textMuted"
  | "color.textInverse"
  | "color.textInverseMuted"
  | "color.primary"
  | "color.primaryHover"
  | "color.primaryText"
  | "color.accent"
  | "color.accentText"
  | "color.highlight"
  | "color.border"
  | "color.borderStrong"
  | "color.tintGreen"
  | "color.tintAmber"
  | "color.tintBlue";

export type SpaceToken = `space.${"none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"}`;
export type RadiusToken = `radius.${"none" | "sm" | "md" | "lg" | "xl" | "pill"}`;
export type FontSizeToken = `fontSize.${"sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl"}`;
export type FontWeightToken = `fontWeight.${"regular" | "medium" | "semibold" | "bold"}`;

export type TokenPath = ColorToken | SpaceToken | RadiusToken | FontSizeToken | FontWeightToken;

/** "color.primary" → "var(--dc-color-primary)" */
export function tokenVar(path: TokenPath | undefined, fallback: TokenPath): string {
  return `var(--dc-${(path ?? fallback).replace(/\./g, "-")})`;
}

export function cx(...names: Array<string | false | null | undefined>): string {
  return names.filter(Boolean).join(" ");
}
