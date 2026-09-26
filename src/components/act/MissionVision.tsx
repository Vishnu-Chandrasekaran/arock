export const MissionVision = () => (
  <section
    id="mission"
    className="py-16 md:py-24 bg-secondary border-b border-border"
  >
    <div className="container">
      <div className="grid md:grid-cols-2 border border-border bg-background">
        {/* Mission card */}
        <div
          className="relative p-8 md:p-12 border-b md:border-b-0 md:border-r border-border border-t-8 border-t-primary"
        >
          <div className="relative z-10">
            <div className="eyebrow text-primary mb-4">Purpose 01</div>
            <h3
              className="text-2xl font-bold mb-4 text-foreground"
            >
              Our Mission
            </h3>
            <p
              className="font-sans text-base font-normal leading-[1.75] text-muted-foreground"
            >
              To empower marginalized communities across India by providing access to quality Education, Holistic Healthcare, and Sustainable Livelihoods. We strive to bridge the gap between urban opportunities and rural needs, fostering a society where every individual—regardless of their caste, creed and religion—possesses the skills, education, health, and resilience to thrive in a changing world.
            </p>
          </div>
        </div>

        {/* Vision card */}
        <div
          className="relative p-8 md:p-12 border-t-8 border-t-foreground"
        >
          <div className="relative z-10">
            <div className="eyebrow text-muted-foreground mb-4">Purpose 02</div>
            <h3
              className="text-2xl font-bold mb-4 text-foreground"
            >
              Our Vision
            </h3>
            <p
              className="font-sans text-base font-normal leading-[1.75] text-muted-foreground"
            >
              To be a catalyst for a self-reliant India where poverty is replaced by productivity, addiction by awareness, and environmental degradation by climate resilience. We envision a future where youth are digitally savvy, women are financially independent, and our natural ecosystems are restored for generations to come.
            </p>
          </div>
        </div>
      </div>

      {/* What we do on the ground */}
      <div
        className="mt-8 p-8 bg-background border-l-8 border-primary"
      >
        <h3
          className="text-2xl font-bold mb-3 text-foreground"
        >
          What we do on the ground
        </h3>
        <p
          className="font-sans text-base font-normal leading-[1.75] text-muted-foreground"
        >
          Our work is designed with communities, not for them. Each programme addresses a practical barrier to human flourishing—whether access to quality education, preventive healthcare, income generation, or civic empowerment—informed by years of ground engagement and refined through continuous feedback.
        </p>
      </div>
    </div>
  </section>
);
