
import { GoFileDirectory } from "react-icons/go";
import { RiExternalLinkLine } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";

const Projects = () => {
  return (
    <section className="mt-20 mb-10 " id="project">
      <div className="flex flex-col mb-10 text-center gap-y-2">
        <h1 className="text-5xl font-bold text-darkTextPrimary sm:text-4xl">
          Projects
        </h1>
        <p className="text-base font-semibold text-darkTextSecondary sm:text-sm">
          Most Recent Work
        </p>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <div className="p-4 bg-darkBgSecondary">
          <div className="flex flex-row items-center justify-between">
            <GoFileDirectory color="#25d1b5" size={40} />
            <div className="flex flex-row items-center gap-x-2">
              <FiGithub color="#bac2de" size={22} className="cursor-pointer" />
              <RiExternalLinkLine
                color="#bac2de"
                size={26}
                className="cursor-pointer"
              />
            </div>
          </div>
          <div className="flex flex-col mt-4 gap-y-2">
            <p className="font-semibold text-darkTextPrimary">Ecommerce Application</p>
            <p className="text-sm text-darkTextSecondary">
            Developed a full-featured Ecommerce web application using the MERN stack.
            Used Tailwind CSS, and Shadcn/UI for styling for a seamless user experience.
            </p>
            <span className="text-sm underline text-darkTextSecondary">React js Node js</span>
          </div>
         
        </div>
        <div className="p-4 bg-darkBgSecondary">
          <div className="flex flex-row items-center justify-between">
            <GoFileDirectory color="#25d1b5" size={40} />
            <div className="flex flex-row items-center gap-x-2">
              <FiGithub color="#bac2de" size={22} className="cursor-pointer" />
              <RiExternalLinkLine
                color="#bac2de"
                size={26}
                className="cursor-pointer"
              />
            </div>
          </div>
          <div className="flex flex-col mt-4 gap-y-2">
            <p className="font-semibold text-darkTextPrimary">Ecommerce Application</p>
            <p className="text-sm text-darkTextSecondary">
            Developed a full-featured Ecommerce web application using the MERN stack.
            Used Tailwind CSS, and Shadcn/UI for styling for a seamless user experience.
            </p>
            <span className="text-sm underline text-darkTextSecondary">React js Node js</span>
          </div>
         
        </div>
      

       
      </div>
      {/* <div className="flex flex-col gap-y-10">
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
      </div> */}
    </section>
  );
};

export default Projects;
