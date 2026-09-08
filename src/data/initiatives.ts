import actIndiaLogo from "@/assets/act/ACT_INDIA-2 (1).png";
import liraLogo from "@/assets/act/lira-logo.png";

export interface Initiative {
  id: string;
  name: string;
  tagline: string;
  description: string;
  logo: string;
  logoAlt: string;
  /** Internal route inside this unified application. */
  url: "/act-india" | "/lira";
  /** Visual theme hint for the home-page card. */
  theme: "act" | "lira";
}

export const trust = {
  name: "Arockyaa Charitable Trust",
  badge: "Registered Charitable Organization",
  intro:
    "Arockyaa Charitable Trust operates two complementary initiatives dedicated to sustainable development and community welfare in Tamil Nadu. Choose a path below to explore our work.",
};

export const values = [
  {
    title: "Compassion First",
    description: "Every program begins with care for the people it serves.",
  },
  {
    title: "Grassroots Impact",
    description: "Community-led initiatives that create lasting change.",
  },
  {
    title: "Knowledge Creation",
    description: "Research and learning that inform sustainable development.",
  },
];

export const initiatives: Initiative[] = [
  {
    id: "act-india",
    name: "ACT India",
    tagline: "Live · Love · Let Live",
    description:
      "Social welfare programs, community development, grassroots initiatives, and impact-driven projects across Tamil Nadu.",
    logo: actIndiaLogo,
    logoAlt:
      "ACT India logo — shield emblem with the motto Live · Love · Let Live",
    url: "/act-india",
    theme: "act",
  },
  {
    id: "lira",
    name: "LIRA",
    tagline: "Linden Institute of Research and Academy",
    description:
      "Research excellence, academic programs, knowledge creation, and institutional learning for sustainable development.",
    logo: liraLogo,
    logoAlt:
      "LIRA logo — circular tree emblem for Linden Institute of Research and Academy",
    url: "/lira",
    theme: "lira",
  },
];
