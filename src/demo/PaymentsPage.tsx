import { Breadcrumb, Button, CaseStudyCard, FeatureItem, Grid, Hero, MediaPanel, Section, SectionHeader, Spotlight } from "../components";
import { asset, Banner, BusinessNav, ClosingCta, Footer, Header } from "./shared";

export function PaymentsPage() {
  return (
    <>
      <Banner />
      <Header />
      <BusinessNav active="Payments" />

      <Hero
        layout="centered"
        background="color.tintGreen"
        headingColor="color.text"
        bodyColor="color.textMuted"
        paddingY="space.2xl"
        above={<Breadcrumb items={[{ label: "Business", url: "#/business" }, { label: "Payments" }]} />}
        heading="Get paid and pay out, anywhere, in seconds"
        body="Payouts, invoices, payment links and checkout, all settled in USDC with no wire fees and no waiting for banking hours."
        actions={
          <>
            <Button label="Get started" />
            <Button label="Read the docs" backgroundColor="color.tintGreen" color="color.text" borderColor="color.text" />
          </>
        }
      />

      <Section>
        <SectionHeader eyebrow="Four ways to move money" heading="Every payment flow your business needs" />
        <Grid minColumnWidth={420} gap="space.lg">
          <FeatureItem variant="card" icon="arrow" title="Payouts" body="Upload a CSV or call the API to pay contractors, sellers and suppliers in one batch." />
          <FeatureItem variant="card" icon="invoice" title="Invoicing" body="Send branded invoices that clients can pay from any wallet." />
          <FeatureItem variant="card" icon="link" title="Payment links" body="Create a link in seconds and share it anywhere you talk to customers." />
          <FeatureItem variant="card" icon="cart" title="Checkout" body="Add a Pay with Driftcoin button to your store with a few lines of code." />
        </Grid>
      </Section>

      <Section background="color.surface">
        <Spotlight
          eyebrow="Global reach"
          heading="Pay 40+ countries without a single wire"
          body="Recipients receive USDC in seconds and can cash out locally. You see every status in one dashboard."
          linkLabel="See supported countries"
          mediaPosition="right"
          media={<MediaPanel imageSrc={asset("spotlight-global")} imageAlt="Payout statuses by recipient" background="color.surfaceInverse" />}
        />
      </Section>

      <Section paddingBottom="space.lg">
        <CaseStudyCard
          layout="wide"
          customerName="Fernhill Textiles"
          customerMeta="Manufacturing · Lisbon"
          logoSrc={asset("logo-fernhill")}
          headline="Paying 300 suppliers across 12 countries in one batch"
        />
      </Section>

      <ClosingCta />
      <Footer />
    </>
  );
}
