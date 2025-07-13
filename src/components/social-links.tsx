import { socials } from "../util/content";

export function SocialLinks() {
  return (
    <span className="flex items-center text-2xl space-1">
      {socials.map((social) => (
        <a
          key={social.url}
          title={social.title}
          href={social.url}
          className="text-accent p-2 rounded-lg bg-transparent hover:backdrop-brightness-90 transition-all duration-250 block">
          {social.icon}
        </a>
      ))}
    </span>
  );
}
