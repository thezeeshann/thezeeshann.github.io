import { FiGithub } from "react-icons/fi";
import { projects } from "../lib/data";
import { Link } from "react-router-dom";
import { TfiWorld } from "react-icons/tfi";

const Projects = () => {
  return (
    <section className="mt-8 mb-10 " id="project">
      <div className="flex flex-col mb-6 gap-y-2">
        <h1 className="text-xl font-semibold text-darkTextPrimary ">
          Projects
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-1">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-4 border-[1px] border-darkBgSecondary shadow-md"
          >
            <div className="flex flex-col gap-y-2">
              <div className="flex flex-row items-center justify-between ">
                <p className="font-semibold text-[15px] text-darkTextPrimary">
                  {project.name}
                </p>
                <div className="flex flex-row items-center gap-x-2">
                  <Link to={project.github} target="_blank">
                    <FiGithub
                      color="#bac2de"
                      size={20}
                      className="cursor-pointer hover:scale-90"
                    />
                  </Link>
                  {project.live && (
                    <Link to={project.live} target="_blank">
                      <TfiWorld
                        color="#bac2de"
                        size={20}
                        className="cursor-pointer hover:scale-90"
                      />
                    </Link>
                  )}
                </div>
              </div>
              <p className="text-[12px] text-darkTextSecondary">
                {project.description}
              </p>
              <div className="flex flex-row flex-wrap items-center gap-x-2 gap-y-2">
                {project?.techstacks?.map((stack) => (
                  <div
                    key={stack.id}
                    className="py-1 px-2 border-[1px] rounded-md border-darkBgSecondary cursor-pointer hover:animate-pulse"
                  >
                    <p className="text-[12px] font-semibold text-darkTextSecondary">
                      {stack.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
