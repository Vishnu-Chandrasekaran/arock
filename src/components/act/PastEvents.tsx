import { Calendar } from "lucide-react";

const JOURNEY = [
  {
    years: "2024–2025",
    title: "Advancing Rights & Health",
    items: [
      "World TB Day Rally & Medical Camps: Partnered with Dindigul Medical College and the District Collector to lead a massive awareness drive and early-detection screening camps.",
      "Climate Literacy for Rural Women: Launched a specialized program empowering women with the skills to lead community-level climate adaptation.",
      'Child Protection & "Books over Bricks": Conducted street plays and door-to-door campaigns to combat child labor and promote mandatory schooling.',
      "Maternal & Neonatal Excellence: Specialized training for mothers on Antenatal/Postnatal care and life-saving Kangaroo Mother Care (KMC).",
      "Social Inclusion Drives: Honored sanitary workers during Diwali with clothing and sweets, integrated with an Eco-Friendly tree plantation drive.",
    ],
  },
  {
    years: "2023–2024",
    title: "Strengthening Sustenance",
    items: [
      "Education Support for Marginalized Communities: Established scholarship programs and learning centers focused on girls and first-generation learners.",
      "Enhanced Shelter Management: Improved sanitation and nutrition for urban homeless residents in partnership with the Greater Chennai Corporation (GCC).",
      "Ayush & Preventive Health: Scaled up traditional medicine camps to provide free consultations for lifestyle disease management in urban clusters.",
      "Civic Rights Workshops: Utilized national holidays to educate youth on their constitutional rights and duties.",
    ],
  },
  {
    years: "2022–2023",
    title: "Post-Pandemic Recovery",
    items: [
      "Climate Change Resilience Campaign: Empowered rural communities with rainwater harvesting and sustainable land management pilot projects.",
      "Dignified Reintegration: Focused on counseling and family reunification for residents of our urban shelter homes.",
      'The "Back to School" Initiative: Distributed uniforms and essential school apparel to low-income families to prevent post-pandemic dropouts.',
      "Social Cohesion Events: Organized multi-faith cultural celebrations to foster communal harmony and regional bonding.",
    ],
  },
  {
    years: "2020–2021",
    title: "Crisis Response & Awareness",
    items: [
      "Environmental Media Campaign: Engaged school students through creative competitions and digital content to amplify youth voices on conservation.",
      "COVID-19 Relief & CIP: Executed a massive Community Intervention Program, distributing food, medical aid, and sanitizers to daily wage workers.",
    ],
  },
  {
    years: "2016–2019",
    title: "Founding Impact & Skills",
    items: [
      "Women's Empowerment & Youth Bootcamps (2019): Conducted intensive training in financial literacy, entrepreneurship, and vocational skills.",
      "Greening the Hills (2018): Initiated a large-scale tree plantation drive to combat soil erosion and promote rural climate resilience.",
      "Health Awareness & Recognition (2017-2018): Organized rural health camps and honored local leaders who championed community development.",
      "Cultural Arts Promotion: Launched events to preserve and showcase local talent and traditional arts.",
    ],
  },
];

export const PastEvents = () => {
  return (
    <section id="past-events" className="py-20 md:py-28 bg-gradient-soft">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
          <span className="text-accent font-semibold tracking-widest text-xs uppercase">
            Our Journey
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 mb-4 text-foreground">
            Past Events
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            A decade of action, learning, and community-driven impact across Tamil Nadu.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {JOURNEY.map((period, i) => (
            <div
              key={period.years}
              className={`relative flex flex-col md:flex-row gap-6 md:gap-12 mb-10 md:mb-14 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="md:w-1/2 flex md:justify-end">
                <div className="pl-16 md:pl-0 md:max-w-md">
                  <div className="flex items-center gap-3 mb-2 md:justify-end">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wide">
                      <Calendar className="h-3.5 w-3.5" />
                      {period.years}
                    </span>
                  </div>
                  <h3
                    className={`font-display font-bold text-xl md:text-2xl text-foreground mb-2 ${
                      i % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    {period.title}
                  </h3>
                </div>
              </div>

              <div className="absolute left-6 md:left-1/2 top-0 h-4 w-4 rounded-full bg-accent border-4 border-background md:-translate-x-1/2 -translate-y-1" />

              <div className="md:w-1/2">
                <div className="bg-card border border-border rounded-2xl p-5 md:p-6 shadow-card">
                  <ul className="space-y-3">
                    {period.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
