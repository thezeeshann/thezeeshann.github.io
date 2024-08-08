import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoTwitter } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="px-20 py-16 mt-20 sm:py-12 sm:px-12 bg-darkBgSecondary">
      <div className="xl:w-[65%]  lg:w-[100%] md:w-[95%] sm:w-[100%]  flex flex-col justify-between mx-auto">
        <div className="flex flex-row justify-between sm:flex sm:flex-col sm:gap-y-5 sm:justify-center sm:items-center md:flex">
          <div className="flex flex-col text-darkTextPrimary gap-y-3 sm:flex sm:flex-col sm:text-center">
            <h1 className="text-4xl font-bold sm:text-5xl">Zeeshan</h1>
            <p className="text-base font-semibold sm:text-base">Full Stack Developer</p>
          </div>
          <div className="cursor-pointer text-darkTextSecondary">
            <ul className="flex flex-row text-base md:flex md:flex-col md:gap-y-5 gap-x-3 ">
              <a className="font-semibold" href="#home">Home</a>
              <a className="font-semibold" href="#project">Projects</a>
              <a className="font-semibold" href="#contact">Contact Me</a>
            </ul>
          </div>
          <div className="flex flex-row text-darkTextPrimary md:flex md:flex-col md:gap-y-5 gap-x-5 ">
            <a href="https://github.com/thezeeshann" rel="noreferrer"  target="_blank">
            <AiFillGithub
              className="cursor-pointer hover:text-primary text-[2rem] sm:text-[2.5rem]"
            />
            </a>
            
            <a href="https://www.linkedin.com/in/thezeeshannn" target="_blank" rel="noreferrer">
            <FaLinkedinIn
              className="cursor-pointer hover:text-primary text-[2rem] sm:text-[2.5rem]"
            />
            </a>
            <a href="https://twitter.com/thezeeshann" target="_blank" rel="noreferrer">
            <BiLogoTwitter
              className="cursor-pointer hover:text-primary text-[2rem] sm:text-[2.5rem]"
            />
            </a>
          </div>
        </div>
        <div className="">
          <p className="pt-20 text-base text-center text-darkTextPrimary sm:pt-10 sm:text-base">
            © 2024 Zeeshan. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
