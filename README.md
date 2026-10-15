# Driftcoin Business: ExO test components

React components and design tokens for **Driftcoin Business**, a fictional stablecoin business account site. The repo exists so Contentful teams can run end to end tests of Experience Orchestration (ExO): import the components and tokens with Design System Import (DSI), then rebuild two marketing pages in ExO.

Driftcoin is not a real company. All names, numbers and customers are made up.

## What's in here

| Path | What it is |
| --- | --- |
| `src/components/` | 30 coded React components, one folder each |
| `tokens/tokens.json` | Design tokens in W3C DTCG format (the format DSI expects) |
| `src/styles/tokens.css` | CSS variables generated from the tokens (`npm run build:tokens`) |
| `src/registry.ts` | ExO component ID → React component map for the SDK |
| `src/demo/` | Reference builds of both target pages, assembled by hand |
| `public/assets/` | Product illustrations and logos to upload to Contentful as assets |

## Run it

```bash
npm install
npm run dev
```

Open `http://localhost:5173/#/business` and `http://localhost:5173/#/business/payments`. These are the pages testers rebuild in ExO.

## Import into ExO with DSI

1. Point the DSI CLI at this repo:

   ```bash
   npx @contentful/experience-design-system-cli analyze --dir src/components --tokens tokens
   ```

2. Review the generated component definitions, then import them into your ExO enabled space.
3. Upload everything in `public/assets/` to the space as assets. The page uses them for asset binding.

The repo deliberately ships **no** component definitions file. Generating it is part of the DSI test.

## How props are organized

Each prop's doc comment says which kind of property it is:

- **Content**: text, links, images and lists. Bind these to Contentful fields or assets.
- **Design**: values that change appearance. Color, spacing, radius and font size props take **token paths** such as `color.primary` or `space.xl`. The component turns the path into `var(--dc-color-primary)`.
- **Slot**: a `ReactNode` prop or `children`. In ExO these become named slots.

## Component inventory

### Primitives

| Component | Content | Design | Slots |
| --- | --- | --- | --- |
| Button | label, url | backgroundColor, color, borderColor | none |
| TextLink | label, url | color | none |
| Heading | text | level, size, color | none |
| Text | text | size, color | none |
| Eyebrow | text | color | none |
| Icon | name | color, size | none |
| Image | src, alt | radius, aspectRatio, fit | none |

### Layout

| Component | Content | Design | Slots |
| --- | --- | --- | --- |
| Section | id | background, paddingTop, paddingBottom, bordered | children |
| SectionHeader | eyebrow, heading, body | align, headingColor | action |
| Grid | none | minColumnWidth, gap | children (put a looper here) |
| SplitLayout | none | none | aside, main |
| MediaPanel | imageSrc, imageAlt | background, radius, padding | children |

### Page blocks

| Component | Content | Design | Slots |
| --- | --- | --- | --- |
| AnnouncementBanner | label, message, linkLabel, linkUrl | background, textColor | none |
| SiteHeader | brandName, navItems | none | actions |
| SubNav | items, label | none | none |
| Breadcrumb | items | none | none |
| Hero | eyebrow, heading, body, footnote | layout, background, headingColor, bodyColor, eyebrowColor, paddingY | above, actions, media |
| FeatureItem | icon, title, body | variant | none |
| ProductCard | title, body, url, imageSrc, imageAlt | mediaBackground | none |
| Spotlight | eyebrow, heading, body, linkLabel, linkUrl | mediaPosition | media |
| LogoStrip | label, logos (collection) | none | none |
| Stat | value, label | none | none |
| CaseStudyCard | customerName, customerMeta, logoSrc, headline, body, linkLabel, url | logoBackground, logoText, layout | none |
| AudienceCard | title, body, linkLabel, linkUrl, imageSrc (all but title optional) | imageBackground | none |
| DemoTabs | tabs, defaultIndex | none | children |
| VideoEmbed | title, duration, posterSrc, videoUrl | none | none |
| FaqItem | question, answer | defaultOpen | none |
| CtaBand | heading, body | background, textColor | action |
| Footnotes | items | none | none |
| SiteFooter | brandName, tagline, columns, legal, localeLabel | none | none |

## How the pages map to the test plan

| On the page | Built from | What it exercises |
| --- | --- | --- |
| Announcement banner, header, CTA band, footer | AnnouncementBanner, SiteHeader, CtaBand, SiteFooter | Fragments shared by both pages, fragment publishing |
| Hero (dark split on /business, light centered on /payments) | Hero + Button + Image | Coded component design properties, slots, asset binding, per experience overrides |
| "Built for business" grid | Grid + FeatureItem | Looper (dynamic collections) over a multi reference field |
| "Payments made simple" cards | Grid + ProductCard | Composed component with child components, nested pre-binding |
| Earn and Trade spotlights | Spotlight + MediaPanel | Same slotted component with different content, mediaPosition left or right |
| Customer stories | CaseStudyCard | Deep binding: Case study → Customer → Logo asset |
| Audience cards | AudienceCard | Optional content (Developers card has no body or link) |
| "See how it works" | DemoTabs + VideoEmbed | **VideoEmbed is not in `src/registry.ts`** to test the unmapped component fallback |
| FAQ | SplitLayout + FaqItem | Looper over FAQ references |

## Design tokens

`tokens/tokens.json` has two layers:

- `palette.*`: raw colors (ink, slate, green, amber, blue)
- Semantic groups that components use: `color.*`, `space.*`, `radius.*`, `fontFamily.*`, `fontSize.*`, `fontWeight.*`

Edit the JSON, then run `npm run build:tokens` to regenerate the CSS variables.

## License

MIT
