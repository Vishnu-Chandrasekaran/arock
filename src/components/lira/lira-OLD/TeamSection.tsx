import { motion } from "framer-motion";
import { Users, Globe, Microscope, FileText, MapPin, Database, Megaphone } from "lucide-react";
import drMosesPhoto from "@/assets/lira/dr-moses-cornel.jpg";
import drPavanPhoto from "@/assets/lira/dr-pavan-antony.png";
import drStephenPhoto from "@/assets/lira/dr-stephen.png";
import arulValanPhoto from "@/assets/lira/arul-valan.png";
import symonRajaPhoto from "@/assets/lira/symon-raja.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const photos: Record<string, string> = {
  "Dr. G. Moses Cornel": drMosesPhoto,
  "Dr Pavan Antony": drPavanPhoto,
  "Dr Stephen": drStephenPhoto,
  "Dr Stephen Mark Shore": drStephenPhoto,
  "Arul Valan": arulValanPhoto,
  "Symon Raja": symonRajaPhoto,
  "Symon Raja A": symonRajaPhoto,
};

const teamGroups = [
  {
    icon: Users,
    role: "Centre Director / Head of Research",
    members: ["Dr. G. Moses Cornel"],
    responsibilities: [
      "Provides visionary leadership, institutional governance, and overall strategic direction.",
      "Oversees major research initiatives, policy alignment, and long-term institutional development.",
      "Cultivates high-level international and national academic partnerships and networks.",
      "Secures institutional funding, large-scale grants, and donor relations.",
    ],
  },
  {
    icon: Globe,
    role: "International Research Associates",
    members: ["Dr Pavan Antony", "Dr Stephen", "Dr Phinosh"],
    responsibilities: [],
    memberBios: [
      {
        name: "Dr Pavan Antony",
        affiliation: "Adelphi University, New York",
        points: [
          "Professor of Special Education at the Ruth S. Ammon College of Education and Health Sciences, Adelphi University, New York.",
          "Leads national and international research on disability, inclusion, and disparities in higher education.",
          "Focuses on transition pathways from high school to college and post-secondary education for individuals with disabilities.",
          "Authored several books, co-authored book chapters, and published numerous articles in peer-reviewed journals.",
          "Frequent speaker at national and international conferences advocating for the inclusion of individuals with disabilities in all aspects of society.",
          "Recent research centres on creating pathways and opportunities for individuals with disabilities in higher education and beyond.",
          "At LIRA: Provides strategic academic mentorship and oversees the disability studies research pillar within the ECOS-R framework.",
          "At LIRA: Strengthens institutional research capacity through international collaborations, peer-review networks, and evidence-based policy advocacy.",
        ],
      },
      {
        name: "Dr Stephen Mark Shore",
        affiliation: "Adelphi University, USA",
        points: [
          "Professor at Adelphi University, USA, and an internationally renowned advocate for neurodivergent individuals.",
          "Keynote speaker at conferences focused on empowerment beyond borders, supporting people with disabilities and neurodivergent conditions.",
          "Champions the inclusion of voices of individuals with the very conditions being studied, presenting alongside recognised experts in the field.",
          "At LIRA: Advises on inclusive research design, neurodiversity frameworks, and participatory methodologies that centre lived experience.",
          "At LIRA: Strengthens global partnerships and contributes to capacity-building workshops on disability and inclusion.",
        ],
      },
      {
        name: "Dr Phinosh",
        affiliation: "Engineering, IT & Marketing",
        points: [
          "Passionate business leader and researcher with expertise across Engineering, IT, and Marketing.",
          "Committed to advancing research, fostering innovation, and building impactful collaborations that bridge academia and industry.",
          "Dedicated to nurturing a culture of excellence, knowledge creation, and transformative solutions for societal and technological advancement.",
          "At LIRA: Drives industry-academia linkages, technology integration, and applied research partnerships.",
          "At LIRA: Supports innovation strategy and the translation of research into scalable, real-world solutions.",
        ],
      },
    ],
  },
  {
    icon: Microscope,
    role: "Senior Researchers / Principal Investigators (PIs)",
    members: ["Dr Samuel Doraisamy"],
    responsibilities: [
      "Subject matter experts who lead specific thematic pillars (e.g., climate resilience, visual communication, digital governance).",
      "Conceptualize, design, and lead empirical research projects and mixed-methods studies.",
      "Author high-impact journal articles, policy briefs, and books.",
      "Mentor junior researchers and graduate fellows.",
    ],
  },
  {
    icon: FileText,
    role: "Research Associates / Post-Doctoral Fellows",
    members: ["Dr Bulomin Regi"],
    responsibilities: [
      "The analytical backbone responsible for the day-to-day execution of studies.",
      "Conduct rigorous qualitative and quantitative data collection (surveys, focus groups, ethnographic fieldwork).",
      "Perform advanced statistical or textual data analysis.",
      "Draft initial working papers, research reports, and conference presentations.",
    ],
  },
  {
    icon: MapPin,
    role: "Field Coordinators / Data Collectors",
    members: ["Dr Helan", "Prof. Sahaya Jessy Kala", "Mr. John Bosco"],
    responsibilities: [
      "Bridge the gap between the research centre and community or institutional field sites.",
      "Manage logistics for on-site interviews, community outreach, and regional workshops.",
      "Ensure ethical compliance, participant consent, and data integrity during fieldwork.",
      "Build localized rapport with target populations and stakeholders.",
    ],
  },
  {
    icon: Database,
    role: "Data Scientist / Technology Integration Specialist",
    members: ["Arul Valan", "Mervin Andrews P"],
    responsibilities: [],
    memberBios: [
      {
        name: "Arul Valan",
        affiliation: "Consultant – IT Operations",
        points: [
          "Principal Software Engineer | Solution Architect | AI & Digital Transformation.",
          "Technology professional with 21+ years of experience in software architecture, cloud-native platforms, distributed systems, and digital transformation.",
          "Expertise in Java, Microservices, AWS, Kubernetes, Kafka, DevOps, GIS, and AI/GenAI.",
          "Focused on building AI-powered, scalable, and intelligent solutions that transform business requirements into practical technology outcomes.",
          "Expertise: AI & GenAI • Solution Architecture • Cloud • Microservices • GIS • Drone Technology • DevOps • Digital Transformation • Enterprise Solutions.",
          "At LIRA: Leads the technology integration pillar — overseeing digital survey platforms, institutional databases, and secure data governance.",
          "At LIRA: Applies AI/GenAI and data science models to large-scale social datasets, advancing evidence-based, inclusive research.",
        ],
      },
      {
        name: "Mervin Andrews P",
        affiliation: "Data Science & Technology Integration",
        points: [
          "Supports the computational and technological dimensions of LIRA's research programmes.",
          "Assists in managing digital survey tools, Learning Management Systems (LMS), and institutional databases.",
          "Contributes to applied data science, secure data storage protocols, and digital governance workflows.",
        ],
      },
    ],
  },
  {
    icon: Megaphone,
    role: "Administrative & Communications Officer",
    members: ["Symon Raja"],
    responsibilities: [],
    memberBios: [
      {
        name: "Symon Raja A",
        affiliation: "Administrative & Communications Officer",
        points: [
          "Role: Handles institutional operations, outreach, and documentation.",
          "Manages day-to-day administrative coordination, scheduling, and financial budgeting.",
          "Handles digital communications, newsletters, and public dissemination of research findings.",
          "Coordinates high-profile academic events, international conferences, and capacity-building workshops.",
        ],
      },
    ],
  },
];

const TeamSection = () => (
  <section id="team" className="py-24 bg-background">
    <div className="shell">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-3">Our People</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Leadership & Research Team
        </h2>
        <p className="font-body text-muted-foreground max-w-2xl mx-auto">
          A diverse collective of scholars, practitioners, and technologists driving evidence-based
          research for an inclusive, sustainable future.
        </p>
      </motion.div>

      <div className="grid gap-8">
        {/* Centre Director — featured layout: photo left, content right */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          custom={0}
          className="bg-card border border-border rounded-lg p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row md:items-start gap-8">
            <div className="flex flex-col items-center gap-3 md:w-1/3 shrink-0">
              {photos["Dr. G. Moses Cornel"] ? (
                <img
                  src={photos["Dr. G. Moses Cornel"]}
                  alt="Portrait of Dr. G. Moses Cornel, Centre Director / Head of Research"
                  loading="lazy"
                  className="w-40 h-40 md:w-full md:h-auto aspect-square rounded-lg object-cover object-top border border-accent/30 shadow-sm"
                />
              ) : null}
              <span className="text-foreground px-4 py-1.5 text-sm font-body font-semibold uppercase tracking-[0.12em] border-b-2 border-accent">
                Dr. G. Moses Cornel
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground">
                  Centre Director / Head of Research
                </h3>
              </div>
              <ul className="space-y-2">
                {teamGroups[0]!.responsibilities.map((resp, idx) => (
                  <li
                    key={idx}
                    className="font-body text-sm text-muted-foreground leading-relaxed pl-4 border-l-2 border-accent/20"
                  >
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* International Research Associates — section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="bg-card border border-border rounded-lg p-6 md:p-8"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
              <Globe className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground">
              International Research Associates
            </h3>
          </div>
          <p className="font-body text-sm text-muted-foreground max-w-2xl">
            Distinguished global scholars who advance LIRA's research mission through international
            collaboration, mentorship, and evidence-based policy advocacy.
          </p>
        </motion.div>

        {/* International Research Associates — one row per associate */}
        {teamGroups[1]!.memberBios?.map((bio, i) => (
          <motion.div
            key={bio.name}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={i}
            className="bg-card border border-border rounded-lg p-6 md:p-8"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-8">
              <div className="flex flex-col items-center gap-3 md:w-1/3 shrink-0">
                {photos[bio.name] ? (
                  <img
                    src={photos[bio.name]}
                    alt={`Portrait of ${bio.name}, International Research Associate`}
                    loading="lazy"
                    className="w-40 h-52 md:w-full md:h-56 rounded-lg object-cover object-[50%_20%] border border-accent/30 shadow-sm"
                  />
                ) : (
                  <div className="w-40 h-52 md:w-full md:h-56 rounded-lg border border-border shadow-sm flex items-center justify-center">
                    <span className="font-display text-2xl font-semibold text-muted-foreground">
                      {bio.name
                        .split(" ")
                        .map((w) => w[0])
                        .join("")
                        .slice(0, 2)}
                    </span>
                  </div>
                )}
                <div className="text-center">
                  <span className="block text-foreground px-4 py-1.5 text-sm font-body font-semibold uppercase tracking-[0.12em] border-b-2 border-accent">
                    {bio.name}
                  </span>
                  <span className="block mt-1.5 text-xs font-body text-muted-foreground italic">
                    {bio.affiliation}
                  </span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-4">
                  <h4 className="font-display text-lg font-semibold text-foreground">
                    {bio.name}
                  </h4>
                  <span className="hidden md:inline text-xs font-body text-muted-foreground">
                    {bio.affiliation}
                  </span>
                </div>
                <ul className="space-y-2">
                  {bio.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="font-body text-sm text-muted-foreground leading-relaxed pl-4 border-l-2 border-accent/20"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Senior Researchers / Principal Investigators — featured layout like Dr. G. Moses Cornel */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          custom={2}
          className="bg-card border border-border rounded-lg p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row md:items-start gap-8">
            <div className="flex flex-col items-center gap-3 md:w-1/3 shrink-0">
              {photos["Dr Samuel Doraisamy"] ? (
                <img
                  src={photos["Dr Samuel Doraisamy"]}
                  alt="Portrait of Dr Samuel Doraisamy, Senior Researcher / Principal Investigator"
                  loading="lazy"
                  className="w-40 h-52 md:w-full md:h-56 rounded-lg object-cover object-[50%_20%] border border-accent/30 shadow-sm"
                />
              ) : (
                <div className="w-40 h-52 md:w-full md:h-56 rounded-lg border border-border shadow-sm flex items-center justify-center">
                  <span className="font-display text-2xl font-semibold text-muted-foreground">SD</span>
                </div>
              )}
              <span className="text-foreground px-4 py-1.5 text-sm font-body font-semibold uppercase tracking-[0.12em] border-b-2 border-accent">
                Dr Samuel Doraisamy
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Microscope className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground">
                  Senior Researchers / Principal Investigators (PIs)
                </h3>
              </div>
              <ul className="space-y-2">
                {teamGroups[2]!.responsibilities.map((resp, idx) => (
                  <li
                    key={idx}
                    className="font-body text-sm text-muted-foreground leading-relaxed pl-4 border-l-2 border-accent/20"
                  >
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Research Associates / Post-Doctoral Fellows — featured layout like Dr. G. Moses Cornel */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          custom={3}
          className="bg-card border border-border rounded-lg p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row md:items-start gap-8">
            <div className="flex flex-col items-center gap-3 md:w-1/3 shrink-0">
              {photos["Dr Bulomin Regi"] ? (
                <img
                  src={photos["Dr Bulomin Regi"]}
                  alt="Portrait of Dr Bulomin Regi, Research Associate / Post-Doctoral Fellow"
                  loading="lazy"
                  className="w-40 h-52 md:w-full md:h-56 rounded-lg object-cover object-[50%_20%] border border-accent/30 shadow-sm"
                />
              ) : (
                <div className="w-40 h-52 md:w-full md:h-56 rounded-lg border border-border shadow-sm flex items-center justify-center">
                  <span className="font-display text-2xl font-semibold text-muted-foreground">BR</span>
                </div>
              )}
              <span className="text-foreground px-4 py-1.5 text-sm font-body font-semibold uppercase tracking-[0.12em] border-b-2 border-accent">
                Dr Bulomin Regi
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground">
                  Research Associates / Post-Doctoral Fellows
                </h3>
              </div>
              <ul className="space-y-2">
                {teamGroups[3]!.responsibilities.map((resp, idx) => (
                  <li
                    key={idx}
                    className="font-body text-sm text-muted-foreground leading-relaxed pl-4 border-l-2 border-accent/20"
                  >
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Field Coordinators / Data Collectors — section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="bg-card border border-border rounded-lg p-6 md:p-8"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground">
              Field Coordinators / Data Collectors
            </h3>
          </div>
          <ul className="space-y-2">
            {teamGroups[4]!.responsibilities.map((resp, idx) => (
              <li
                key={idx}
                className="font-body text-sm text-muted-foreground leading-relaxed pl-4 border-l-2 border-accent/20"
              >
                {resp}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Field Coordinators / Data Collectors — one row per member */}
        {teamGroups[4]!.members.map((member, i) => (
          <motion.div
            key={member}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={i}
            className="bg-card border border-border rounded-lg p-6 md:p-8"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-8">
              <div className="flex flex-col items-center gap-3 md:w-1/3 shrink-0">
                {photos[member] ? (
                  <img
                    src={photos[member]}
                    alt={`Portrait of ${member}, Field Coordinator / Data Collector`}
                    loading="lazy"
                    className="w-40 h-52 md:w-full md:h-56 rounded-lg object-cover object-[50%_20%] border border-accent/30 shadow-sm"
                  />
                ) : (
                  <div className="w-40 h-52 md:w-full md:h-56 rounded-lg border border-border shadow-sm flex items-center justify-center">
                    <span className="font-display text-2xl font-semibold text-muted-foreground">
                      {member
                        .split(" ")
                        .map((w) => w[0])
                        .join("")
                        .slice(0, 2)}
                    </span>
                  </div>
                )}
                <span className="text-foreground px-4 py-1.5 text-sm font-body font-semibold uppercase tracking-[0.12em] border-b-2 border-accent">
                  {member}
                </span>
              </div>
              <div className="flex-1 min-w-0 self-center">
                <h4 className="font-display text-lg font-semibold text-foreground mb-1">
                  {member}
                </h4>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Field Coordinator & Data Collector — bridges the research centre with community
                  and institutional field sites.
                </p>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Data Scientist / Technology Integration Specialist — section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="bg-card border border-border rounded-lg p-6 md:p-8"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
              <Database className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground">
              Data Scientist / Technology Integration Specialist
            </h3>
          </div>
          <p className="font-body text-sm text-muted-foreground max-w-2xl">
            The technology backbone of LIRA's research programmes — overseeing digital platforms,
            data governance, and AI/GenAI applied to large-scale social datasets.
          </p>
        </motion.div>

        {/* Data Scientist / Technology Integration Specialist — one row per associate */}
        {teamGroups[5]!.memberBios?.map((bio, i) => (
          <motion.div
            key={bio.name}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={i}
            className="bg-card border border-border rounded-lg p-6 md:p-8"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-8">
              <div className="flex flex-col items-center gap-3 md:w-1/3 shrink-0">
                {photos[bio.name] ? (
                  <img
                    src={photos[bio.name]}
                    alt={`Portrait of ${bio.name}, Data Scientist / Technology Integration Specialist`}
                    loading="lazy"
                    className="w-40 h-52 md:w-full md:h-56 rounded-lg object-cover object-[50%_20%] border border-accent/30 shadow-sm"
                  />
                ) : (
                  <div className="w-40 h-52 md:w-full md:h-56 rounded-lg border border-border shadow-sm flex items-center justify-center">
                    <span className="font-display text-2xl font-semibold text-muted-foreground">
                      {bio.name
                        .split(" ")
                        .map((w) => w[0])
                        .join("")
                        .slice(0, 2)}
                    </span>
                  </div>
                )}
                <div className="text-center">
                  <span className="block text-foreground px-4 py-1.5 text-sm font-body font-semibold uppercase tracking-[0.12em] border-b-2 border-accent">
                    {bio.name}
                  </span>
                  <span className="block mt-1.5 text-xs font-body text-muted-foreground italic">
                    {bio.affiliation}
                  </span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-4">
                  <h4 className="font-display text-lg font-semibold text-foreground">
                    {bio.name}
                  </h4>
                  <span className="hidden md:inline text-xs font-body text-muted-foreground">
                    {bio.affiliation}
                  </span>
                </div>
                <ul className="space-y-2">
                  {bio.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="font-body text-sm text-muted-foreground leading-relaxed pl-4 border-l-2 border-accent/20"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Administrative & Communications Officer — featured layout like Dr. G. Moses Cornel */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          custom={6}
          className="bg-card border border-border rounded-lg p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row md:items-start gap-8">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-5 md:w-2/5 shrink-0 self-start">
              {teamGroups[6]!.memberBios?.map((bio) => (
                <div key={bio.name} className="flex flex-col items-center gap-3">
                  {photos[bio.name] ? (
                    <img
                      src={photos[bio.name]}
                      alt={`Portrait of ${bio.name}, Administrative & Communications Officer`}
                      loading="lazy"
                      className="w-40 h-52 md:w-full md:h-56 rounded-lg object-cover object-[50%_20%] border border-accent/30 shadow-sm"
                    />
                  ) : (
                    <div className="w-40 h-52 md:w-full md:h-56 rounded-lg border border-border shadow-sm flex items-center justify-center">
                      <span className="font-display text-2xl font-semibold text-muted-foreground">
                        {bio.name
                          .split(" ")
                          .map((w) => w[0])
                          .join("")
                          .slice(0, 2)}
                      </span>
                    </div>
                  )}
                  <div className="text-center">
                    <span className="block text-foreground px-4 py-1.5 text-sm font-body font-semibold uppercase tracking-[0.12em] border-b-2 border-accent">
                      {bio.name}
                    </span>
                    <span className="block mt-1.5 text-xs font-body text-muted-foreground italic">
                      {bio.affiliation}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Megaphone className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground">
                  Administrative & Communications Officer
                </h3>
              </div>
              <div className="space-y-6">
                {teamGroups[6]!.memberBios?.map((bio) => (
                  <div key={bio.name} className="border-l-2 border-accent/30 pl-4">
                    <h4 className="font-display text-base font-semibold text-foreground mb-2">
                      {bio.name}
                    </h4>
                    <ul className="space-y-1.5">
                      {bio.points.map((point, idx) => (
                        <li
                          key={idx}
                          className="font-body text-sm text-muted-foreground leading-relaxed pl-3 border-l border-accent/15"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {teamGroups.slice(7).map((group, i) => (
          <motion.div
            key={group.role}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={i + 1}
            className="bg-card border border-border rounded-lg p-6 md:p-8"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <group.icon className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground">
                    {group.role}
                  </h3>
                  <div className="flex flex-wrap gap-5">
                    {group.members.map((member) => (
                      <div key={member} className="flex flex-col items-center gap-2 w-32">
                        {photos[member] ? (
                          <img
                            src={photos[member]}
                            alt={`Portrait of ${member}, ${group.role}`}
                            loading="lazy"
                            className="w-32 h-40 rounded-md object-cover object-[50%_20%] border border-accent/30 shadow-sm"
                          />
                        ) : null}
                        <span className="text-center text-foreground px-3 py-1 text-xs font-body font-semibold uppercase tracking-[0.12em] border-b-2 border-accent">
                          {member}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <ul className="space-y-2">
                  {group.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="font-body text-sm text-muted-foreground leading-relaxed pl-4 border-l-2 border-accent/20"
                    >
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
