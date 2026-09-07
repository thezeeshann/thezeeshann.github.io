import { FiGithub, FiGlobe } from "react-icons/fi";
import { projects } from "../lib/data";

const Projects = () => {
  return (
    <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
      {projects.map((project) => (
        <div
          key={project.id}
          className="flex flex-col rounded-md hairline p-3 transition-colors hover:bg-subtle"
        >
          <div className="flex items-start justify-between gap-2">
            <p className="text-sm font-semibold tracking-tight">
              {project.name}
            </p>
            <div className="flex shrink-0 items-center gap-2 text-muted">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.name} — GitHub repository`}
                className="transition-colors hover:text-fg"
              >
                <FiGithub size={14} />
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.name} — live site`}
                  className="transition-colors hover:text-fg"
                >
                  <FiGlobe size={14} />
                </a>
              )}
            </div>
          </div>

          <p className="mt-1.5 text-xs leading-relaxed text-muted">
            {project.description}
          </p>

          <p className="mt-auto pt-2.5 text-[11px] text-muted">
            {project.techstacks.join(" · ")}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
