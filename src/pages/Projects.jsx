import Button from "../common/Button";
import ProjectCard from "../common/ProjectCard"

const Projects = () => {
  return (
    <section className="mt-20 mb-10" id="project">
      <div className="text-center flex flex-col gap-y-2 mb-10">
        <h1 className="text-darkTextPrimary text-5xl sm:text-4xl font-bold">Projects</h1>
        <p className=" font-semibold text-darkTextSecondary text-base sm:text-sm">
          Most Recent Work
        </p>
      </div>

    <div className="flex flex-col gap-y-10">
    <div className="flex flex-col">
        <div>
          <ProjectCard
            projectName="Blog App"
            projectDescription="Developed a full-stack application in the MERN stack, implementing specific tasks such as CRUD operations, user registration,
        and login functionality. To ensure efficient state management and improved app performance, I utilized Redux (Toolkit).
        user interface was styled using Tailwind CSS, providing a seamless and user-friendly experience.
        "
            projectTechstack="Tailwind CSS, React.js, Redux, Node. js, Express.js, MongDB"
          />
        </div>

        <div className="flex">
          <Button
            text="View Project"
            link="https://github.com/thezeeshann/Blog-app-mern"
          />
          <Button
            text="GitHub"
            link="https://github.com/thezeeshann/Blog-app-mern"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <div>
          <ProjectCard
            projectName="Movie App"
            projectDescription="Built a movie app using React. js and the Swiper library, allowing users to browse the latest movies and TV shows.
      • The application consumes data from the TMDB API and for state management, I utilized the Context Api."
      projectTechstack="Swiper.js, React.js, Context Api, TMDB API"
          />
        </div>
        <div className="flex">
          <Button
            text="View Project"
            link="https://flixx-app-eight.vercel.app/"
          />
          <Button
            text="GitHub"
            link="https://github.com/thezeeshann/flixx-app"
          />
        </div>
      </div>
    </div>


    </section>
  );
};

export default Projects;
