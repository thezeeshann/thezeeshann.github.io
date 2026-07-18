import { Link } from "react-router-dom";
import Skills from "./Skills";
import Footer from "./Footer";
import Projects from "./Projects";
import Experience from "./Experience";
import ThemeToggle from "./ThemeToggle";
import { userMetaData } from "../lib/data";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoTwitter } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";

const Home = () => {
  return (
    <section
      className=" flex flex-col my-16 max-w-2xl mx-auto sm:w-[90%] "
      id="home"
    >
      <div className="mb-10 space-y-6 ">
        <div className="flex flex-row items-center justify-between">
          <div>
            <p className="font-semibold text-textPrimary dark:text-darkTextPrimary ">
              Zeeshan
            </p>
          </div>

          <div className="flex items-center gap-3 pt-1 ">
            <div className="flex gap-2 text-textSecondary dark:text-darkTextSecondary">
              <Link to="https://github.com/thezeeshann" target="_blank">
                <AiFillGithub size={24} className="hover:scale-90" />
              </Link>
              <Link
                to="https://www.linkedin.com/in/thezeeshannn"
                target="_blank"
              >
                <FaLinkedinIn size={24} className="hover:scale-90" />
              </Link>
              <Link to="https://twitter.com/thezeeshann" target="_blank">
                <BiLogoTwitter size={24} className="hover:scale-90" />
              </Link>
            </div>
            <ThemeToggle />
          </div>
        </div>
        <p className="pt-2 mb-8 text-[15px] text-textSecondary dark:text-darkTextSecondary sm:text-sm">
          I'm a{" "}
          <span className="font-semibold text-textPrimary dark:text-darkTextPrimary">
            Full stack engineer
          </span>
          , {userMetaData.bio}
        </p>
      </div>
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </section>
  );
};

export default Home;
