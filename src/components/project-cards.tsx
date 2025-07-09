import type { Projects } from "../util/types";

export function Cards({ projects }: { projects: Projects[] }) {
  return (
    <section className="w-full space-y-4">
      {projects.map((project, index) => (
        <a
          key={index}
          href={project.url}
          className="block space-y-2 backdrop-brightness-90 border-2 border-secondary/10 hover:border-accent/30 px-5 py-6 rounded-lg transition-all duration-250 group">
          <h3 className="text-lg font-semibold text-accent">{project.title}</h3>
          <p className="text-secondary text-lg">{project.description}</p>
        </a>
      ))}
    </section>
  );
}
