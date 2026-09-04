import { createFileRoute } from "@tanstack/react-router";
import { TrustBar } from "@/components/shared/TrustBar";
import Navbar from "@/components/lira/Navbar";
import HeroSection from "@/components/lira/HeroSection";
import AboutSection from "@/components/lira/AboutSection";
import LindenSymbol from "@/components/lira/LindenSymbol";
import EcosSection from "@/components/lira/EcosSection";
import ResearchDomains from "@/components/lira/ResearchDomains";
import TeamSection from "@/components/lira/TeamSection";
import GovernanceSection from "@/components/lira/GovernanceSection";
import SupportSection from "@/components/lira/SupportSection";
import Footer from "@/components/lira/Footer";

const title =
  "LIRA — Linden Institute of Research and Academy | Arockyaa Charitable Trust";
const description =
  "The Linden Institute of Research and Academy (LIRA) is the strategic think-tank of ACT India, translating grassroots action into evidence-based research for inclusive, sustainable development.";

export const Route = createFileRoute("/lira")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/lira" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/lira" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ResearchOrganization",
          name: "Linden Institute of Research and Academy",
          alternateName: "LIRA",
          description,
          foundingDate: "2008",
          slogan: "Live • Love • Let Live",
          address: { "@type": "PostalAddress", addressCountry: "IN" },
          knowsAbout: [
            "Inclusive education",
            "Disability research",
            "Health equity",
            "Organic and regenerative agriculture",
            "Sustainability policy",
          ],
        }),
      },
    ],
  }),
  component: LiraPage,
});

function LiraPage() {
  return (
    <div className="theme-lira">
      <TrustBar current="lira" />
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <LindenSymbol />
        <EcosSection />
        <ResearchDomains />
        <TeamSection />
        <GovernanceSection />
        <SupportSection />
      </main>
      <Footer />
    </div>
  );
}
