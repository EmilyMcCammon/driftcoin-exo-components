import type { ComponentType } from "react";
import * as C from "./components";

/**
 * Maps ExO component type IDs to React components, for the
 * "map ExO component IDs to frontend components" and SDK registration stories.
 * After DSI import, check the IDs in your space and adjust the keys if they differ.
 *
 * VideoEmbed is intentionally NOT registered, so testers can check the
 * fallback and diagnostics for unmapped components.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const componentRegistry: Record<string, ComponentType<any>> = {
  announcementBanner: C.AnnouncementBanner,
  audienceCard: C.AudienceCard,
  breadcrumb: C.Breadcrumb,
  button: C.Button,
  caseStudyCard: C.CaseStudyCard,
  ctaBand: C.CtaBand,
  demoTabs: C.DemoTabs,
  eyebrow: C.Eyebrow,
  faqItem: C.FaqItem,
  featureItem: C.FeatureItem,
  footnotes: C.Footnotes,
  grid: C.Grid,
  heading: C.Heading,
  hero: C.Hero,
  icon: C.Icon,
  image: C.Image,
  logoStrip: C.LogoStrip,
  mediaPanel: C.MediaPanel,
  productCard: C.ProductCard,
  section: C.Section,
  sectionHeader: C.SectionHeader,
  siteFooter: C.SiteFooter,
  siteHeader: C.SiteHeader,
  splitLayout: C.SplitLayout,
  spotlight: C.Spotlight,
  stat: C.Stat,
  subNav: C.SubNav,
  text: C.Text,
  textLink: C.TextLink,
  // videoEmbed: C.VideoEmbed,  ← left out on purpose
};
