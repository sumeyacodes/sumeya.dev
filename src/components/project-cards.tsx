import type { Projects } from "../util/types";

export function Cards({ projects }: { projects: Projects[] }) {
  return (
    <section className="w-full space-y-5">
      {projects.map((project, index) => (
        <article
          key={index}
          className="backdrop-brightness-90 border-2 border-secondary/10 hover:border-accent/40 p-6 rounded-lg transition-all duration-200 group">
          <a href={project.url} className="space-y-3">
            <h3 className="text-xl text-accent transition-colors duration-200">
              {project.title}
            </h3>
            <p className="text-primary transition-colors duration-200">
              {project.description}
            </p>
          </a>
        </article>
      ))}
    </section>
  );
}
