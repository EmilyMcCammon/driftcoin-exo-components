// Content shared by both pages. In ExO these become fragments.
import { AnnouncementBanner, Button, CtaBand, Section, SiteFooter, SiteHeader, SubNav } from "../components";

export const asset = (name: string) => `/assets/${name}.png`;

export function Banner() {
  return (
    <AnnouncementBanner
      label="New for Q4:"
      message="Zero fees on USDC payouts to 40+ countries through December 31."
      linkLabel="See the details"
    />
  );
}

export function Header() {
  return (
    <SiteHeader
      navItems={[
        { label: "Individuals", url: "#" },
        { label: "Businesses", url: "#/business", active: true },
        { label: "Institutions", url: "#" },
        { label: "Developers", url: "#" },
        { label: "Company", url: "#" },
      ]}
      actions={
        <>
          <Button label="Sign in" backgroundColor="color.background" color="color.text" borderColor="color.text" />
          <Button label="Get started" />
        </>
      }
    />
  );
}

export function BusinessNav({ active }: { active: "Business" | "Payments" }) {
  const items = [
    { label: "Business", url: "#/business" },
    { label: "Payments", url: "#/business/payments" },
    { label: "Treasury", url: "#" },
    { label: "Trading", url: "#" },
    { label: "APIs and integrations", url: "#" },
    { label: "Customer stories", url: "#" },
  ].map((i) => ({ ...i, active: i.label === active }));
  return <SubNav label="Business sections" items={items} />;
}

export function ClosingCta() {
  return (
    <Section paddingTop="space.2xl" paddingBottom="space.2xl">
      <CtaBand
        heading="Get started today. No setup fee."
        body="Open a business account in minutes and send your first payout this week."
        action={<Button label="Get started" backgroundColor="color.background" color="color.text" />}
      />
    </Section>
  );
}

export function Footer() {
  return (
    <SiteFooter
      tagline="Money that moves at internet speed."
      legal="© 2026 Driftcoin, Inc. (fictional)"
      columns={[
        { title: "Company", links: [{ label: "About", url: "#" }, { label: "Careers", url: "#" }, { label: "Press", url: "#" }] },
        {
          title: "Businesses",
          links: [
            { label: "Business account", url: "#/business" },
            { label: "Payments", url: "#/business/payments" },
            { label: "Treasury", url: "#" },
            { label: "Trading", url: "#" },
          ],
        },
        { title: "Developers", links: [{ label: "Docs", url: "#" }, { label: "API status", url: "#" }, { label: "SDKs", url: "#" }] },
        { title: "Support", links: [{ label: "Help center", url: "#" }, { label: "Contact us", url: "#" }, { label: "Fee schedule", url: "#" }] },
      ]}
    />
  );
}
