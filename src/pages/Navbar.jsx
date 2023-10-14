import {GiHamburgerMenu} from "react-icons/gi"

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between items-center mx-auto w-4/6 mt-5">
      <h1 className=" text-2xl text-darkTextPrimary font-bold hover:text-primary cursor-pointer">Zeeshan</h1>
      <div className="flex flex-row gap-x-8">
        <a className="text-darkTextSecondary font-semibold text-base hover:text-primary" href="#home">Home</a>
        <a className="text-darkTextSecondary font-semibold text-base hover:text-primary" href="#skills">Skills</a>
        <a className="text-darkTextSecondary font-semibold text-base hover:text-primary" href="">Qualifications</a>
        <a className="text-darkTextSecondary font-semibold text-base hover:text-primary" href="">Projects</a>
        <a className="text-darkTextSecondary font-semibold text-base hover:text-primary" href="">Contact Me</a>
        <GiHamburgerMenu className="hidden text-2xl text-darkTextSecondary cursor-pointer"/>
      </div>
    </nav>
  );
};

export default Navbar;
