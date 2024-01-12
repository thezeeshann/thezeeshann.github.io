import {GiHamburgerMenu} from "react-icons/gi"
// import {AiOutlineClose} from "react-icons/ai"

const Navbar = () => {

  
  const handleToggle = ()=>{
  
  }

  return (
    <nav className="xl:w-[65%] lg:w-[80%] md:w-[95%] sm:w-[90%] flex flex-row justify-between items-center mx-auto mt-5">
      <h1 className=" text-2xl sm:text-xl text-darkTextPrimary font-bold hover:text-primary cursor-pointer ">Zeeshan</h1>
      <div>
      <div className="sm:hidden flex flex-row xl:gap-x-8 lg:gap-x-7 md:gap-x-6">
        <a className="text-darkTextSecondary font-semibold text-base hover:text-primary" href="#home">Home</a>
        <a className="text-darkTextSecondary font-semibold text-base hover:text-primary" href="#skills">Skills</a>
        <a className="text-darkTextSecondary font-semibold text-base hover:text-primary" href="#qualification">Qualifications</a>
        <a className="text-darkTextSecondary font-semibold text-base hover:text-primary" href="#project">Projects</a>
        <a className="text-darkTextSecondary font-semibold text-base hover:text-primary" href="#contact">Contact Me</a>
      </div>
      <div className="sm:flex">
        <GiHamburgerMenu className="sm:flex lg:hidden xl:hidden md:hidden text-2xl text-darkTextSecondary cursor-pointer" onClick={handleToggle}/>
        {/* <AiOutlineClose className="sm:flex lg:hidden xl:hidden md:hidden text-2xl text-darkTextSecondary cursor-pointer"/> */}
      </div>
      </div>
    </nav>
  );
};

export default Navbar;


//  border-2  xl:border-blue-500 lg:border-red-500 md:border-green-500  sm:border-yellow-500