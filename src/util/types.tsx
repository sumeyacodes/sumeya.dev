import type { JSX } from "react";

export interface Projects {
  title: string;
  description: string;
  url: string;
}

export interface Socials {
  icon: JSX.Element;
  url: string;
}
