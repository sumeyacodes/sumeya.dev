import { type ReactNode } from "react";

const Formatting = ({ children }: { children: ReactNode }) => {
  return <p className="text-lg">{children}</p>;
};

export function PersonalBio({ content }: { content: string[] }) {
  return (
    <section className="space-y-4 text-secondary">
      {content.map((text, index) => (
        <Formatting key={index}>{text}</Formatting>
      ))}
    </section>
  );
}
