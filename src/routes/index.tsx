import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/shared/Header";
import { InitiativeCard } from "@/components/shared/InitiativeCard";
import { Footer } from "@/components/shared/Footer";
import { initiatives, trust, values } from "@/data/initiatives";

const title = "Arockyaa Charitable Trust — ACT India & LIRA";
const description =
  "Arockyaa Charitable Trust operates ACT India and LIRA: community welfare, grassroots impact, and research for sustainable development in Tamil Nadu.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NGO",
          name: trust.name,
          description,
          subOrganization: initiatives.map((i) => ({
            "@type": "Organization",
            name: i.name,
            url: i.url,
          })),
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white px-4 pt-20 pb-16 sm:px-6 sm:pt-28 sm:pb-20 lg:px-8 lg:pt-32 lg:pb-24">
          <div className="container mx-auto max-w-5xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {trust.badge}
            </p>
            <h1 className="mt-6 font-serif text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Empowering Communities Through{" "}
              <span className="text-red-700">Love</span>,{" "}
              <span className="text-teal-700">Learning</span> &amp;{" "}
              <span className="text-amber-700">Research</span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {trust.intro}
            </p>
          </div>
        </section>

        {/* Initiative cards */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="container mx-auto max-w-5xl">
            <div className="grid gap-8 md:grid-cols-2">
              {initiatives.map((initiative) => (
                <InitiativeCard key={initiative.id} initiative={initiative} />
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="border-t border-border bg-slate-50/50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="container mx-auto max-w-5xl">
            <div className="grid gap-10 rounded-2xl border border-border bg-white p-8 text-center shadow-sm sm:grid-cols-3 sm:p-12">
              {values.map((value) => (
                <div key={value.title}>
                  <h3 className="font-serif text-xl font-bold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
