import type { Projects } from "../util/types";

export function Cards({ cardContent }: { cardContent: Projects[] }) {
  return (
    <section className="w-full space-y-4">
      {cardContent.map((content) => (
        <a
          key={content.title}
          title={
            content.title === "school of code"
              ? "School of Code Bootcamp Course"
              : "GitHub Repository"
          }
          href={content.url}
          rel="noreferrer"
          target="_blank"
          className="block">
          <article className="space-y-2 backdrop-brightness-90 border-2 border-secondary/10 hover:border-accent/30 px-5 py-6 rounded-lg transition-all duration-250 group">
            <header className="flex-1 md:flex items-center justify-between">
              <h3 className="text-lg font-semibold text-accent">
                {content.title}
              </h3>
              {content.date && (
                <span className="text-sm text-secondary/80">
                  {content.date}
                </span>
              )}
            </header>
            <p className="text-secondary text-lg">{content.description}</p>
          </article>
        </a>
      ))}
    </section>
  );
}
