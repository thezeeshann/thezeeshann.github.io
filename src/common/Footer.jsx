import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoTwitter } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="mt-20 px-20 py-16 sm:py-12 sm:px-12 bg-darkBgSecondary">
      <div className="xl:w-[65%]  lg:w-[100%] md:w-[95%] sm:w-[100%]  flex flex-col justify-between mx-auto">
        <div className="sm:flex sm:flex-col  sm:gap-y-5 sm:justify-center sm:items-center md:flex  flex flex-row justify-between">
          <div className="text-darkTextPrimary flex flex-col gap-y-3 sm:flex sm:flex-col sm:text-center">
            <h1 className="font-bold text-4xl sm:text-5xl">Zeeshan</h1>
            <p className="text-base font-semibold sm:text-base">Full Stack Developer</p>
          </div>
          <div className="text-darkTextSecondary cursor-pointer">
            <ul className="md:flex md:flex-col md:gap-y-5 flex flex-row gap-x-3 text-base ">
              <a className="font-semibold" href="#home">Home</a>
              <a className="font-semibold" href="#project">Projects</a>
              <a className="font-semibold" href="#contact">Contact Me</a>
            </ul>
          </div>
          <div className="text-darkTextPrimary md:flex md:flex-col md:gap-y-5 flex flex-row gap-x-5 ">
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
          <p className="text-center text-darkTextPrimary pt-20 sm:pt-10 text-base sm:text-base">
            © 2023 Zeeshan. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
