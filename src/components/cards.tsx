import type { Projects } from "../util/types";

export function Cards({ content }: { content: Projects[] }) {
  return (
    <section className="w-full space-y-2">
      {content.map((c, index) => (
        <Content key={index} content={c} />
      ))}
    </section>
  );
}

function Content({ content }: { content: Projects }) {
  const card = (
    <article className="space-y-2 backdrop-brightness-90 border-2 border-secondary/10 hover:border-accent/30 p-5 rounded-lg transition-all duration-250 group">
      <header className="flex-1 md:flex items-center justify-between">
        <h3 className="text-lg font-semibold text-accent">{content.title}</h3>
        {content.date && (
          <time className="text-sm text-secondary/80">{content.date}</time>
        )}
      </header>
      <p className="text-secondary text-lg">{content.description}</p>
    </article>
  );

  return content.url ? (
    <a
      href={content.url}
      title="Github Repository"
      className="block"
      target="_blank"
      rel="noopener noreferrer">
      {card}
    </a>
  ) : (
    card
  );
}
