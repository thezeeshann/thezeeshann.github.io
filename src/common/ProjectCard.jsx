const ProjectCard = ({ projectName, projectDescription, projectTechstack }) => {
  return (
    <section className="text-base">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-darkTextPrimary">
          {projectName}
        </h2>
      </div>
      <div>
        <p className="mb-2 text-darkTextSecondary font-semibold">
          {projectDescription}
        </p>
        <p className="mb-4 text-darkTextSecondary font-semibold">
          Tech Stack:{" "}
          <span className="font-bold text-textPrimary dark:text-darkTextPrimary">
            {projectTechstack}
          </span>
        </p>

        
      </div>
    </section>
  );
};

export default ProjectCard;
