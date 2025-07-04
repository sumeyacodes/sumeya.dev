import { socials } from "../util/content";

export function SocialLinks() {
  return (
    <span className="inline-flex space-x-5 text-2xl">
      {socials.map((social) => (
        <a
          key={social.url}
          href={social.url}
          className="text-accent hover:text-accent/65 transition-colors duration-200">
          {social.icon}
        </a>
      ))}
    </span>
  );
}
