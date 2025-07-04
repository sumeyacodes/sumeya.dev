import type { Projects } from "../util/types";

export function Cards({ projects }: { projects: Projects[] }) {
  return (
    <section className="w-full space-y-5">
      {projects.map((project, index) => (
        <a
          key={index}
          href={project.url}
          className="block space-y-3 backdrop-brightness-90 border-2 border-secondary/10 hover:border-accent/30 p-6 rounded-lg transition-all duration-150 group">
          <h3 className="text-xl text-accent transition-colors duration-200">
            {project.title}
          </h3>
          <p>{project.description}</p>
        </a>
      ))}
    </section>
  );
}
