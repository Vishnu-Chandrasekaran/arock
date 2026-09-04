import { createFileRoute } from "@tanstack/react-router";
import { TrustBar } from "@/components/shared/TrustBar";
import { SiteHeader } from "@/components/act/SiteHeader";
import { Hero } from "@/components/act/Hero";
import { About } from "@/components/act/About";
import { MissionVision } from "@/components/act/MissionVision";
import { Programmes } from "@/components/act/Programmes";
import { ChallengeAdvantage } from "@/components/act/ChallengeAdvantage";
import { Methodology } from "@/components/act/Methodology";
import { ImpactStats } from "@/components/act/ImpactStats";
import { Stories } from "@/components/act/Stories";
import { PastEvents } from "@/components/act/PastEvents";
import { Transparency } from "@/components/act/Transparency";
import { Team } from "@/components/act/Team";
import { Donate } from "@/components/act/Donate";
import { GetInvolved } from "@/components/act/GetInvolved";
import { WhySupport } from "@/components/act/WhySupport";
import { Governance } from "@/components/act/Governance";
import { Contact } from "@/components/act/Contact";
import { SiteFooter } from "@/components/act/SiteFooter";

const title =
  "ACT India — Arockyaa Charitable Trust | Education, Health & Livelihoods";
const description =
  "ACT India (Arockyaa Charitable Trust) — an Indian charity since 2008, expanding education, healthcare and livelihoods for underserved communities. Donate, volunteer, partner.";

export const Route = createFileRoute("/act-india")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/act-india" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/act-india" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NGO",
          name: "Arockyaa Charitable Trust",
          alternateName: "ACT India",
          foundingDate: "2008",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Dindigul",
            addressRegion: "Tamil Nadu",
            addressCountry: "IN",
          },
          sameAs: [],
        }),
      },
    ],
  }),
  component: ActIndiaPage,
});

function ActIndiaPage() {
  return (
    <div className="theme-act">
      <TrustBar current="act-india" />
      <main>
        <SiteHeader />
        <Hero />
        <About />
        <MissionVision />
        <Team />
        <Programmes />
        <ChallengeAdvantage />
        <Methodology />
        <ImpactStats />
        <Stories />
        <PastEvents />
        <Governance />
        <Transparency />
        <WhySupport />
        <GetInvolved />
        <Donate />
        <Contact />
        <SiteFooter />
      </main>
    </div>
  );
}
