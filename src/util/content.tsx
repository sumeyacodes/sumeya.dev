import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import type { Socials, Projects } from "./types";
import { FaXTwitter } from "react-icons/fa6";

export const content = [
  "i'm a junior software engineer based in london.",
  "most of my projects are built with typescript, javascript, react, and node.js, but i've recently started exploring rust for backend development.",
  "if anything here catches your interest, feel free to check out my github, x, linkedin, or drop me an email below.",
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
  {
    title: "hi-pomo",
    description:
      "a pomodoro timer discord bot that helps manage group study sessions with friends.",
    url: "https://github.com/sumeyacodes/hi-pomo-bot",
  },
];

export const socials: Socials[] = [
  {
    title: "GitHub",
    icon: <FiGithub />,
    url: "https://github.com/sumeyacodes",
  },
  {
    title: "X (aka twitter)",
    icon: <FaXTwitter />,
    url: "https://x.com/sumeyacodes",
  },
  {
    title: "LinkedIn",
    icon: <FiLinkedin />,
    url: "https://www.linkedin.com/in/sumeyaahmed/",
  },
  {
    title: "sumeya4hmed@gmail.com",
    icon: <FiMail />,
    url: "mailto:sumeya4hmed@gmail.com",
  },
];

export const other = [
  {
    title: "school of code",
    date: "Nov 2024 - March 2025",
    description:
      "completed a 16-week bootcamp for full-stack development, which introduced me to javascript, typescript, react, node.js, postgres, and other modern web technologies.",
    url: "https://schoolofcode.co.uk/course/",
  },
];
