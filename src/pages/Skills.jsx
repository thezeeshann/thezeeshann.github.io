import {BiCodeBlock} from "react-icons/bi"
import {AiOutlineCode} from "react-icons/ai"

const Skills = () => {


  return (
    <section className="pt-20 mb-10" id="skills">
      
      <div className="text-center flex flex-col gap-y-2 mb-10">
        <h1 className="text-darkTextPrimary text-5xl font-bold">Skills</h1>
        <p className=" font-semibold text-darkTextPrimary text-base">
          My Technical Skills
        </p>
      </div>

      <div className="flex flex-row justify-between gap-x-5 mb-5 cursor-pointer ">
        
        <div className=" flex flex-col">
         <div className="flex flex-row gap-x-2 cursor-pointer">
          <BiCodeBlock  className="text-darkTextPrimary hover:text-primary" size={"2rem"}  />
         <h3 className="text-darkTextPrimary font-semibold text-2xl">Languages</h3> 
         </div>
         
        </div>


        <div className=" flex flex-col gap-x-2 cursor-pointer">
          <div className="flex flex-row gap-x-2 cursor-pointer">
              <AiOutlineCode className="text-darkTextPrimary hover:text-primary" size={"2rem"} />
           <h3 className="text-darkTextPrimary font-semibold text-2xl">Libraries & Frameworks</h3>
          </div>

        </div>
      </div>


    </section>
  );
};

export default Skills;
