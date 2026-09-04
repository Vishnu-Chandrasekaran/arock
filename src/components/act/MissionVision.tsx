export const MissionVision = () => (
  <section
    id="mission"
    className="py-16 md:py-24"
    style={{
      background: "linear-gradient(135deg, #E8EDE5 0%, #DFE6DC 100%)",
    }}
  >
    <div className="max-w-[1000px] mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Mission card */}
        <div
          className="relative overflow-hidden p-8 rounded-[12px]"
          style={{
            backgroundColor: "#FAFBFA",
            border: "1.5px solid #A6192E",
          }}
        >
          {/* Cream corner overlays */}
          <div
            className="absolute -top-8 -right-8 w-24 h-24 rounded-full"
            style={{ backgroundColor: "rgba(245, 241, 232, 0.35)" }}
          />
          <div
            className="absolute -bottom-10 -left-10 w-28 h-28 rounded-full"
            style={{ backgroundColor: "rgba(245, 241, 232, 0.3)" }}
          />

          <div className="relative z-10">
            <div
              className="w-10 h-1 mb-4"
              style={{ backgroundColor: "#A6192E" }}
            />
            <h3
              className="font-display text-2xl font-bold mb-4"
              style={{ color: "#A6192E" }}
            >
              Our Mission
            </h3>
            <p
              className="font-sans text-base font-normal leading-[1.75]"
              style={{ color: "#2C2C2C" }}
            >
              To empower marginalized communities across India by providing access to quality Education, Holistic Healthcare, and Sustainable Livelihoods. We strive to bridge the gap between urban opportunities and rural needs, fostering a society where every individual—regardless of their caste, creed and religion—possesses the skills, education, health, and resilience to thrive in a changing world.
            </p>
          </div>
        </div>

        {/* Vision card */}
        <div
          className="relative overflow-hidden p-8 rounded-[12px]"
          style={{
            backgroundColor: "#FAFBFA",
            border: "1.5px solid #6B8A92",
          }}
        >
          {/* Cream corner overlays */}
          <div
            className="absolute -top-8 -right-8 w-24 h-24 rounded-full"
            style={{ backgroundColor: "rgba(245, 241, 232, 0.35)" }}
          />
          <div
            className="absolute -bottom-10 -left-10 w-28 h-28 rounded-full"
            style={{ backgroundColor: "rgba(245, 241, 232, 0.3)" }}
          />

          <div className="relative z-10">
            <div
              className="w-10 h-1 mb-4"
              style={{ backgroundColor: "#6B8A92" }}
            />
            <h3
              className="font-display text-2xl font-bold mb-4"
              style={{ color: "#6B8A92" }}
            >
              Our Vision
            </h3>
            <p
              className="font-sans text-base font-normal leading-[1.75]"
              style={{ color: "#2C2C2C" }}
            >
              To be a catalyst for a self-reliant India where poverty is replaced by productivity, addiction by awareness, and environmental degradation by climate resilience. We envision a future where youth are digitally savvy, women are financially independent, and our natural ecosystems are restored for generations to come.
            </p>
          </div>
        </div>
      </div>

      {/* What we do on the ground */}
      <div
        className="mt-6 p-8 rounded-[12px]"
        style={{
          backgroundColor: "#F5F1E8",
          borderLeft: "4px solid #A6192E",
        }}
      >
        <h3
          className="font-display text-2xl font-bold mb-3"
          style={{ color: "#2C2C2C" }}
        >
          What we do on the ground
        </h3>
        <p
          className="font-sans text-base font-normal leading-[1.75]"
          style={{ color: "#5F5E5A" }}
        >
          Our work is designed with communities, not for them. Each programme addresses a practical barrier to human flourishing—whether access to quality education, preventive healthcare, income generation, or civic empowerment—informed by years of ground engagement and refined through continuous feedback.
        </p>
      </div>
    </div>
  </section>
);
