import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoTwitter } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="mt-20 px-20 py-16  bg-darkBgSecondary">
      <div className="xl:w-[65%]  lg:w-[80%] md:w-[95%] sm:w-[90%]  flex flex-col justify-between mx-auto">
        <div className="flex flex-row justify-between">
          <div className="text-darkTextPrimary flex flex-col gap-y-3">
            <h1 className="font-bold text-4xl">Zeeshan</h1>
            <p className="text-base font-semibold">Full Stack Developer</p>
          </div>
          <div className="text-darkTextSecondary cursor-pointer">
            <ul className="flex flex-row gap-x-3 text-base">
              <li className="font-semibold hover:text-primary">Home</li>
              <li className="font-semibold hover:text-primary">Projects</li>
              <li className="font-semibold hover:text-primary">Contact Me</li>
            </ul>
          </div>
          <div className="text-darkTextPrimary flex flex-row gap-x-5 ">
            <AiFillGithub
              size={"2rem"}
              className="cursor-pointer hover:text-primary"
            />
            <FaLinkedinIn
              size={"2rem"}
              className="cursor-pointer hover:text-primary"
            />
            <BiLogoTwitter
              size={"2rem"}
              className="cursor-pointer hover:text-primary"
            />
          </div>
        </div>
        <div className="">
          <p className="text-center text-darkTextPrimary pt-20 text-base ">
            © 2023 Zeeshan. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
