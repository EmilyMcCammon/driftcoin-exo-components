import {
  AudienceCard, Button, CaseStudyCard, DemoTabs, FaqItem, FeatureItem, Footnotes, Grid, Hero, LogoStrip,
  MediaPanel, ProductCard, Section, SectionHeader, SplitLayout, Spotlight, Stat, TextLink, VideoEmbed, Heading,
  type FeatureItemProps,
} from "../components";
import { asset, Banner, BusinessNav, ClosingCta, Footer, Header } from "./shared";

const features: FeatureItemProps[] = [
  { icon: "check", title: "Easy onboarding", body: "Verify your business online. Most accounts are approved within a day." },
  { icon: "globe", title: "Global payments", body: "Send and receive USDC around the world, any day of the week." },
  { icon: "trend", title: "Trading", body: "Buy, sell and convert 150+ assets with clear, upfront pricing." },
  { icon: "coin", title: "Rewards on USDC", body: "Earn on idle balances with no lockups and no minimums." },
  { icon: "document", title: "Taxes and accounting", body: "Export statements and sync transactions to your accounting tools." },
  { icon: "shield", title: "Trusted and secure", body: "Role based access, approval rules and cold storage by default." },
];

const faqs = [
  { question: "What is Driftcoin Business?", answer: "A business account for holding, sending, receiving and trading digital assets, with USDC rewards built in. It works alongside your existing bank account." },
  { question: "Who is it for?", answer: "Any registered business, from a two person studio to a global enterprise." },
  { question: "How do I sign up?", answer: "Select Get started, verify your business details, and invite your team." },
  { question: "How do I move money between my bank and Driftcoin?", answer: "Link a bank account to deposit and withdraw in your local currency." },
  { question: "Which countries are supported?", answer: "Business accounts are available in 40+ countries. See the full list in the help center." },
];

export function BusinessPage() {
  return (
    <>
      <Banner />
      <Header />
      <BusinessNav active="Business" />

      <Hero
        eyebrow="Driftcoin Business"
        heading="One stablecoin account for your whole business"
        body="Pay suppliers in 40+ countries in seconds, trade 150+ digital assets, and earn rewards on the cash you are not using yet. All from one account."
        footnote="No setup fee. Approval in as little as one business day."
        actions={
          <>
            <Button label="Get started" backgroundColor="color.accent" color="color.accentText" />
            <Button label="Talk to sales" backgroundColor="color.surfaceInverse" color="color.textInverse" borderColor="color.textInverseMuted" />
          </>
        }
        media={<img src={asset("hero-balance")} alt="Driftcoin dashboard showing an operating balance and a recent payout" style={{ width: "100%" }} />}
      />

      <Section>
        <SectionHeader
          eyebrow="Built for business"
          heading="An operating account for how money moves now"
          body="Stablecoins settle in seconds, run on weekends, and cross borders without wire fees. Driftcoin Business puts all of that behind one login."
        />
        <Grid minColumnWidth={300} gap="space.xl">
          {features.map((f) => <FeatureItem key={f.title} {...f} />)}
        </Grid>
        <div><Button label="Get started" /></div>
      </Section>

      <Section background="color.surface">
        <SectionHeader
          eyebrow="Payments"
          heading="Payments made simple"
          body="Send payouts, collect invoices and take checkout payments in stablecoins, with funds that settle right away."
          action={<TextLink label="Explore payments" url="#/business/payments" />}
        />
        <Grid minColumnWidth={250} gap="space.lg">
          <ProductCard title="Payouts" body="Pay hundreds of people in one batch." imageSrc={asset("card-payouts")} imageAlt="Batch payout summary" mediaBackground="color.tintGreen" />
          <ProductCard title="Invoicing" body="Bill clients and get paid in USDC." imageSrc={asset("card-invoicing")} imageAlt="Paid invoice" mediaBackground="color.tintAmber" />
          <ProductCard title="Payment links" body="Share a link, get paid. No code needed." imageSrc={asset("card-links")} imageAlt="Shareable payment link" mediaBackground="color.tintBlue" />
          <ProductCard title="Checkout" body="Accept crypto on your online store." imageSrc={asset("card-checkout")} imageAlt="Checkout button" mediaBackground="color.surfaceInverse" />
        </Grid>
      </Section>

      <Section paddingBottom="space.2xl">
        <Spotlight
          eyebrow="Treasury"
          heading="Earn on idle funds"
          body="Hold USDC in your business account and earn rewards automatically. No lockups, no minimums, withdraw any time."
          linkLabel="Learn more about rewards"
          mediaPosition="right"
          media={<MediaPanel imageSrc={asset("spotlight-rewards")} imageAlt="Rewards growth chart" background="color.tintGreen" />}
        />
      </Section>
      <Section paddingTop="space.2xl">
        <Spotlight
          eyebrow="Trading"
          heading="Trade with confidence"
          body="Approval rules, address allowlists and protected transfers keep every trade under your team's control."
          linkLabel="Learn more about trading"
          mediaPosition="left"
          media={<MediaPanel imageSrc={asset("spotlight-trading")} imageAlt="Trading pairs with buy and sell buttons" background="color.surfaceInverse" />}
        />
      </Section>

      <Section bordered paddingTop="space.2xl" paddingBottom="space.2xl">
        <LogoStrip
          label="Trusted by fast moving businesses"
          logos={[{ name: "Northwind Labs" }, { name: "parcelwise" }, { name: "KITEBASE" }, { name: "Orbital Tea" }, { name: "Fernhill" }]}
        />
        <Grid minColumnWidth={220} gap="space.xl">
          <Stat value="$2B+" label="moved through business accounts" />
          <Stat value="8,000+" label="businesses on Driftcoin" />
          <Stat value="150+" label="supported assets" />
        </Grid>
      </Section>

      <Section>
        <SectionHeader eyebrow="Real results" heading="How businesses run on Driftcoin" />
        <Grid minColumnWidth={300} gap="space.lg">
          <CaseStudyCard customerName="Northwind Labs" customerMeta="AI research · Toronto" logoSrc={asset("logo-northwind")} headline="Agents that pay for their own compute, no invoices required" body="Northwind's agents settle API usage in USDC per request." />
          <CaseStudyCard customerName="Orbital Tea" customerMeta="Ecommerce · Melbourne" logoSrc={asset("logo-orbital")} headline="A stablecoin checkout that pays out the same day" body="International orders now settle without card fees or chargebacks." />
          <CaseStudyCard customerName="Fernhill Textiles" customerMeta="Manufacturing · Lisbon" logoSrc={asset("logo-fernhill")} headline="Paying 300 suppliers across 12 countries in one batch" body="Weekly supplier runs went from three days to four minutes." />
        </Grid>
      </Section>

      <Section background="color.surface">
        <SectionHeader
          heading="For every ambitious company, in any industry"
          body="From a two person studio to a global enterprise, the same account grows with you."
          action={<Button label="Get started" />}
        />
        <Grid minColumnWidth={210} gap="space.md">
          <AudienceCard title="Small businesses" body="Get paid faster and skip wire fees." linkLabel="Learn more" imageBackground="color.tintGreen" />
          <AudienceCard title="Global enterprises" body="Treasury and payouts at scale." linkLabel="Learn more" imageBackground="color.tintBlue" />
          <AudienceCard title="Private wealth" body="Custody and trading for family offices." linkLabel="Learn more" imageBackground="color.tintAmber" />
          <AudienceCard title="Crypto companies" body="Onramps, offramps and liquidity." linkLabel="Learn more" imageBackground="color.surfaceInverse" />
          <AudienceCard title="Developers and builders" imageBackground="color.accent" />
        </Grid>
      </Section>

      <Section>
        <SectionHeader heading="See how it works" body="Two minute walkthroughs of the most common business flows." />
        <DemoTabs tabs={["Invoices", "Payment links", "Checkout", "Payouts", "Onramp and offramp"]}>
          <VideoEmbed title="Create and send an invoice" duration="2:04" posterSrc={asset("video-poster")} />
        </DemoTabs>
        <TextLink label="Browse all demos" />
      </Section>

      <Section background="color.surface">
        <SplitLayout
          aside={<Heading text="Frequently asked questions" level={2} />}
          main={faqs.map((f, i) => <FaqItem key={f.question} {...f} defaultOpen={i === 0} />)}
        />
      </Section>

      <ClosingCta />
      <Footnotes
        items={[
          "Approval times depend on business type and documentation. Driftcoin is a fictional company used for product testing.",
          "Rewards rates vary and are not guaranteed. Rewards are not interest and balances are not deposits.",
          "Conversion and network fees may apply. See the fee schedule for details.",
        ]}
      />
      <Footer />
    </>
  );
}
