import Hamburger from "hamburger-react";
import { useEffect, useState } from "react";
import { RiHome2Line } from "react-icons/ri";
import { GoTools } from "react-icons/go";
import { PiCertificateThin } from "react-icons/pi";
import { LiaPhoneSolid } from "react-icons/lia";
import { AiOutlineCodeSandbox } from "react-icons/ai";
// import {useRef} from "react"

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  // const ref = useRef(null)

  // useClickAway(ref, () => setOpen(false));

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = document.querySelectorAll("section");

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        const sectionLink = document.querySelector(`a[href*=${sectionId}]`);

        if (sectionLink) {
          if (sectionId === "home" && scrollY <= sectionTop) {
            sectionLink.classList.add("active");
          } else if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight
          ) {
            sectionLink.classList.add("active");
          } else {
            sectionLink.classList.remove("active");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40  header-backdrop">
      <nav className=" xl:w-[65%] lg:w-[80%] md:w-[95%] sm:w-[90%] flex flex-row justify-between items-center mx-auto my-3">
        <h1 className=" text-2xl sm:text-xl text-darkTextPrimary font-bold hover:text-primary cursor-pointer ">
          Zeeshan
        </h1>
        <div className="flex flex-row just">
          <div className="sm:hidden flex flex-row xl:gap-x-8 lg:gap-x-7 md:gap-x-6">
            <a
              className="text-darkTextSecondary font-semibold text-base hover:text-primary"
              href="#home"
            >
              Home
            </a>
            <a
              className="text-darkTextSecondary font-semibold text-base hover:text-primary"
              href="#skills"
            >
              Skills
            </a>
            <a
              className="text-darkTextSecondary font-semibold text-base hover:text-primary"
              href="#qualification"
            >
              Qualifications
            </a>
            <a
              className="text-darkTextSecondary font-semibold text-base hover:text-primary"
              href="#project"
            >
              Projects
            </a>
            <a
              className="text-darkTextSecondary font-semibold text-base hover:text-primary"
              href="#contact"
            >
              Contact Me
            </a>
          </div>
          <div className="sm:flex xl:hidden lg:hidden md:hidden text-darkTextPrimary">
            <Hamburger toggled={isOpen} toggle={setOpen} size={25}  duration={0.4} easing="ease-in"  />
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="w-[90%] mx-auto  sm:flex sm:flex-col xl:hidden lg:hidden md:hidden gap-y-5 pt-3 pb-5 ">
          <div className="flex flex-row justify-between  items-center">
            <a
              className="text-darkTextSecondary font-semibold text-lg hover:text-primary"
              href="#home"
            >
              Home
            </a>
            <div>
              {" "}
              <RiHome2Line className="text-darkTextSecondary text-[2rem]" />
            </div>
          </div>
          <div className=" flex flex-row justify-between  items-center">
            <a
              className="text-darkTextSecondary font-semibold text-lg hover:text-primary"
              href="#skills"
            >
              Skills
            </a>
            <div>
              <GoTools className="text-darkTextSecondary text-[2rem]" />
            </div>
          </div>
          <div className="flex flex-row justify-between  items-center">
            <a
              className="text-darkTextSecondary font-semibold text-lg hover:text-primary"
              href="#qualification"
            >
              Qualifications
            </a>
            <div>
              <PiCertificateThin className="text-darkTextSecondary text-[2rem]" />
            </div>
          </div>
          <div className="flex flex-row justify-between  items-center">
            <a
              className="text-darkTextSecondary font-semibold text-lg hover:text-primary"
              href="#project"
            >
              Projects
            </a>
            <div>
              <AiOutlineCodeSandbox className="text-darkTextSecondary text-[2rem]" />
            </div>
          </div>
          <div className="flex flex-row justify-between  items-center">
            <a
              className="text-darkTextSecondary font-semibold text-lg hover:text-primary"
              href="#contact"
            >
              Contact Me
            </a>
            <div>
              <LiaPhoneSolid className="text-darkTextSecondary text-[2rem]" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

