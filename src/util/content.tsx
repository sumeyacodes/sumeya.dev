import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import type { Socials, Projects } from "./types";

export const content = [
  "i'm a junior full-stack developer based in london.",
  "i love to learn by building things that interest me, so i’m always tinkering with something new or working on projects to explore different technologies.",
  "mostly, i like making things i’d want to use myself or that are just fun to build.",
];

export const currentProjects: Projects[] = [
  {
    title: "v3xlabs/ethereum-forum",
    description:
      "an open source aggregator for all things ethereum and all core developers (ACD).",
    url: "https://github.com/v3xlabs/ethereum-forum",
  },
  {
    title: "pdf-waffleizer",
    description:
      "a full-stack web app that converts PDF content into audio using text-to-speech.",
    url: "https://github.com/sumeyacodes/pdf-waffleizer",
  },
];

export const oldProjects: Projects[] = [
  {
    title: "hi-pomo",
    description:
      "a pomodoro timer discord bot that helps manage group study sessions with friends.",
    url: "https://github.com/sumeyacodes/hi-pomo-bot",
  },
  // {
  //   title: "journal",
  //   description:
  //     "a mockup daily journaling app with a messaging-style interface.",
  //   url: "https://my-journal-mockup.vercel.app",
  // },
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
