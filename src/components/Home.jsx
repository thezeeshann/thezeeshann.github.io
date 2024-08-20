import { lazy } from "react";
const Skills = lazy(() => import("./Skills"));
const Footer = lazy(() => import("./Footer"));
const Projects = lazy(() => import("./Projects"));
const Qualification = lazy(() => import("./Qualification"));
import { Link } from "react-router-dom";
import { userMetaData } from "../lib/data";
import { useUserData } from "../lib/useData";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoTwitter } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";

const Home = () => {
  const { userData } = useUserData();

  return (
    <section
      className=" flex flex-col my-16 max-w-2xl mx-auto sm:w-[90%] "
      id="home"
    >
      <div className="mb-10 space-y-6 ">
        <div className="flex flex-row items-center justify-between ">
          <div className="flex flex-row items-center gap-x-2">
            <img
              src={userData.avatar_url}
              alt={userData.name}
              loading="lazy"
              className="rounded-full w-[42px] h-[42px]  animate-buttonheartbeat"
            />
            <div>
              <p className="font-semibold text-darkTextPrimary ">Zeeshan</p>
              <p className="text-sm text-darkTextSecondary">
                Full stack developer
              </p>
            </div>
          </div>

          <div className="flex gap-2 pt-1 ">
            <Link to="https://github.com/thezeeshann" target="_blank">
              <AiFillGithub
                color="#cdd6f4"
                size={24}
                className="hover:scale-90"
              />
            </Link>
            <Link to="https://www.linkedin.com/in/thezeeshannn" target="_blank">
              <FaLinkedinIn
                color="#cdd6f4"
                size={24}
                className="hover:scale-90"
              />
            </Link>
            <Link to="https://twitter.com/thezeeshann" target="_blank">
              <BiLogoTwitter
                color="#cdd6f4"
                size={24}
                className="hover:scale-90"
              />
            </Link>
          </div>
        </div>
        <p className="pt-2 mb-8 text-[15px] text-darkTextSecondary sm:text-sm">
          I'm a{" "}
          <span className="font-semibold text-darkTextPrimary">
            full stack developer
          </span>
          , {userMetaData.bio}
        </p>
      </div>
      <Skills />
      <Qualification />
      <Projects />
      <Footer />
    </section>
  );
};

export default Home;
