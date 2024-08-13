import { GoFileDirectory } from "react-icons/go";
import { RiExternalLinkLine } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import { projects } from "../lib/data";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section className="mt-8 mb-10 " id="project">
      <div className="flex flex-col mb-10 gap-y-2">
        <h1 className="text-xl font-semibold text-darkTextPrimary sm:text-4xl">
          Projects 🖼️
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-5 sm:grid-cols-1">
        {projects.map((project) => (
          <div key={project.id} className="p-4 bg-darkBgSecondary">
            <div className="flex flex-row items-center justify-between">
              <GoFileDirectory color="#25d1b5" size={40} />
              <div className="flex flex-row items-center gap-x-2">
                <Link to={project.github} target="_blank">
                  <FiGithub
                    color="#bac2de"
                    size={22}
                    className="cursor-pointer"
                  />
                </Link>
                {project.live && (
                  <Link to={project.live} target="_blank">
                    <RiExternalLinkLine
                      color="#bac2de"
                      size={26}
                      className="cursor-pointer"
                    />
                  </Link>
                )}
              </div>
            </div>
            <div className="flex flex-col mt-4 gap-y-2">
              <p className="font-semibold text-[15px] text-darkTextPrimary">
                {project.name}
              </p>
              <p className="text-sm text-darkTextSecondary">
                {project.description}
              </p>
              <span className="text-sm underline text-darkTextSecondary">
                {project.techstack}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
