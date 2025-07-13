import type { JSX } from "react";

export interface Projects {
  title: string;
  description: string;
  url?: string | null;
  date?: string;
}

export interface Socials {
  title: string;
  icon: JSX.Element;
  url: string;
}
