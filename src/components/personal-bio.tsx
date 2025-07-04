import { type ReactNode } from "react";

const content = [
  "i'm a junior full-stack developer based in london.",
  "i love learning by building things, so i'm always tinkering with something new and working on different projects.",
  "i mostly like to make stuff that i find useful or interesting.",
];

const Formatting = ({ children }: { children: ReactNode }) => {
  return <p className="text-lg md:text-xl">{children}</p>;
};

export function Bio() {
  return (
    <section className="space-y-5 text-primary">
      {content.map((text, index) => (
        <Formatting key={index}>{text}</Formatting>
      ))}
    </section>
  );
}
