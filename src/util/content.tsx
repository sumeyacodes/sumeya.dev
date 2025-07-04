import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import type { Socials, Projects } from "./types";

export const myProjects: Projects[] = [
  {
    title: "pdf waffleizer",
    description:
      "a full-stack web app that converts PDF content into audio using text-to-speech.",
    url: "https://github.com/sumeyacodes/pdf-waffleizer",
  },
];

export const openSourceProjects: Projects[] = [
  {
    title: "ethereum forum",
    description:
      "an open source calendar aggregator and forum for ethereum, built by v3xlabs.",
    url: "https://github.com/sumeyacodes/ethereum-forum",
  },
];

export const socials: Socials[] = [
  {
    icon: <FiGithub />,
    url: "https://github.com/sumeyacodes",
  },
  {
    icon: <FiLinkedin />,
    url: "https://www.linkedin.com/in/sumeyaahmed/",
  },
  {
    icon: <FiMail />,
    url: "mailto:sumeya4hmed@gmail.com",
  },
];
