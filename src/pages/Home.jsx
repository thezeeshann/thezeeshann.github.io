import Typed from "typed.js";
import { useEffect, useRef } from "react";
import Projects from "./Projects";
import Skills from "./Skills";
import Qualification from "./Qualification";
import Contact from "./Contact";
import img from "../assets/logo.png";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoTwitter } from "react-icons/bi";

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Full Stack", "Frontend", "Backend"],
      startDelay: 300,
      typeSpeed: 130,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
      smartBackspace: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      className=" flex flex-col mt-20 max-w-2xl mx-auto sm:w-[90%]"
      id="home"
    >
      {/* home */}
      <div className="flex justify-center items-center mb-10 ">
        <div className="w-48 h-48 rounded-full shadow-xl border-4 border-primary overflow-hidden">
          <img className="rounded-full" src={img} alt="Zeeshan" />
        </div>
      </div>
      {/* intro */}
      <div className="space-y-3 mb-10">
        <div className="flex flex-col justify-center items-center gap-y-1">
          <h1 className="text-5xl sm:text-4xl text-darkTextPrimary font-bold">
            Hi, I'm Zeeshan
          </h1>
          <p className="text-darkTextSecondary font-semibold text-lg sm:text-base">
            i am a <span ref={el}></span> Developer
          </p>
        </div>
        <p className="text-darkTextSecondary font-semibold pt-2 text-base sm:text-sm mb-10">
          Hello there👋 I'm Zeeshan, a dedicated and enthusiastic web developer
          with a profound love for turning creative ideas into functional and
          user-friendly digital experiences. My journey in the ever-evolving
          realm of web development has equipped me with a versatile skill set
          and a deep understanding of cutting-edge technologies.
        </p>
        <p className="text-darkTextSecondary font-semibold pt-2 text-base sm:text-sm mb-8">
          I'm a{" "}
          <span className="text-darkTextPrimary font-bold">
            full stack web developer
          </span>
          , I love working with web technologies and building web apps. I'm
          passionate about learning new skills that help me become a better
          developer.
        </p>
      </div>
      {/* connect */}
      <div className="">
        <p className="text-darkTextPrimary text-xl sm:text-base font-bold">
          {" "}
          Connect with me:{" "}
        </p>
        <div className="flex gap-4 pt-4">
          <a
            href="https://github.com/thezeeshann"
            target="_blank"
            rel="noreferrer"
          >
            <div className="border-[#9ca0b0]  rounded-lg w-14 h-12 sm:h-11 sm:w-12  border-4 cursor-pointer flex justify-center items-center hover:border-primary">
              <AiFillGithub className="text-darkTextPrimary text-[2rem] sm:text-[1.5rem]" />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/thezeeshannn"
            target="_blank"
            rel="noreferrer"
          >
            <div className="border-[#9ca0b0] dark-border-[#6c7086] rounded-lg w-14 h-12 sm:h-11 sm:w-12  border-4 cursor-pointer flex justify-center items-center hover:border-primary">
              <FaLinkedinIn className="text-darkTextPrimary text-[2rem] sm:text-[1.5rem]" />
            </div>
          </a>
          <a
            href="https://twitter.com/thezeeshann"
            target="_blank"
            rel="noreferrer"
          >
            <div className="border-[#9ca0b0] dark-border-[#6c7086] rounded-lg w-14 h-12 sm:h-11 sm:w-12  border-4 cursor-pointer flex justify-center items-center hover:border-primary">
              <BiLogoTwitter className="text-darkTextPrimary text-[2rem] sm:text-[1.5rem]" />
            </div>
          </a>
        </div>
      </div>
      <Skills />
      <Qualification />
      <Projects />
      <Contact />
    </section>
  );
};

export default Home;
