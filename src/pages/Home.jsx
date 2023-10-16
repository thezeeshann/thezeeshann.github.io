import Projects from "./Projects";
import Skills from "./Skills";
import Qualification from "./Qualification";
import img from "../assets/logo.png";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterSquare,
} from "react-icons/ai";

const Home = () => {
  return (
    <section className="flex flex-col mt-20 max-w-2xl mx-auto " id="home">
      {/* home */}
      <div className="flex justify-center items-center mb-10">
        <div className="w-48 h-48 rounded-full shadow-xl border-4 border-primary overflow-hidden">
          <img className="rounded-full" src={img} alt="Zeeshan" />
        </div>
      </div>
      {/* intro */}
      <div className="space-y-3 mb-10">
        <h1 className="text-5xl text-darkTextPrimary font-bold text-center">
          Hi, I'm Zeeshan
        </h1>
        <p className="text-darkTextSecondary font-semibold pt-2 text-base mb-10">
          I'm a{" "}
          <span className="text-darkTextPrimary font-bold">
            full stack web developer
          </span>
          , I love working with web technologies and building web apps. I'm
          passionate about learning new skills that help me become a better
          developer.
        </p>
        <p className="text-darkTextSecondary font-semibold pt-2 text-base mb-8">
          I have worked with HTML, CSS and JavaScript and have experience with
          various JavaScript frameworks like React.js, Next.js Node.js and
          Electron.js. I have experience in building REST APIs with Express. I
          use these tools to build user-friendly web apps that function well.
        </p>
      </div>
      {/* connect */}
      <div className="">
        <p className="text-darkTextPrimary text-xl font-bold">
          {" "}
          Connect with me:{" "}
        </p>
        <div className="flex gap-4 pt-4">
          <a
            href="https://github.com/thezeeshann"
            target="_blank"
            rel="noreferrer"
          >
            <div className="border-[#9ca0b0]  rounded-lg w-14 h-12 border-4 cursor-pointer flex justify-center items-center hover:border-primary">
              <AiFillGithub
                className="text-darkTextPrimary hover:text-primary"
                size={"2rem"}
              />
            </div>
          </a>
          <a
            href="https://github.com/thezeeshann"
            target="_blank"
            rel="noreferrer"
          >
            <div className="border-[#9ca0b0] dark-border-[#6c7086] rounded-lg w-14 h-12 border-4 cursor-pointer flex justify-center items-center hover:border-primary">
              <AiFillLinkedin className="text-darkTextPrimary" size={"2rem"} />
            </div>
          </a>
          <a
            href="https://github.com/thezeeshann"
            target="_blank"
            rel="noreferrer"
          >
            <div className="border-[#9ca0b0] dark-border-[#6c7086] rounded-lg w-14 h-12 border-4 cursor-pointer flex justify-center items-center hover:border-primary">
              <AiFillTwitterSquare
                className="text-darkTextPrimary"
                size={"2rem"}
              />
            </div>
          </a>
        </div>
      </div>

      {/* skills */}
      <Skills/>
      <Qualification/>
      <Projects/>
    </section>
  );
};

export default Home;
