import { PiStudentBold } from "react-icons/pi";
import { MdOutlineWork } from "react-icons/md";
import {AiOutlineCalendar} from "react-icons/ai"
import { useState } from "react";

const Qualification = () => {

  const [open,setOpen] = useState({
    education:true,
    work:false
  })

  const {education,work} = open;

  const handleToggle = (type)=>{

    if (type === "education") {
      setOpen({ education: true, work: false });
    } else {
      setOpen({ education: false, work: true });
    }

  }

  return (
    <section className="mt-20">
      <div className="text-center flex flex-col gap-y-2 mb-10">
        <h1 className="text-darkTextPrimary text-5xl font-bold">
          Qualifications
        </h1>
        <p className="font-semibold text-darkTextSecondary text-base">
          My Educational Qualification & Work Experience
        </p>
      </div>
      <div className="mb-10 flex flex-row justify-center gap-x-10">
        <div className="flex flex-row items-center gap-x-3 cursor-pointer" onClick={()=>handleToggle("education")}>
          <span>
            <PiStudentBold
              size={"2rem"}
              className={`${education === true ? "text-primary" : "text-darkTextPrimary"}`} 
            />
          </span>{" "}
          <span className={`${education === true ? "text-primary" : "text-darkTextSecondary"} font-semibold text-base`}>Education</span>
        </div>
        <hr className="bg-darkTextSecondary w-[1.5px] h-[50px] border-0 border-primary" />
        <div className="flex flex-row items-center gap-x-3 cursor-pointer" onClick={()=>handleToggle("work")}>
          <MdOutlineWork
            size={"2rem"}
            className={`${work === true ? "text-primary" : "text-darkTextPrimary"}`}
          />{" "}
          <span className={`${work === true ? "text-primary" : "text-darkTextSecondary"} font-semibold text-base`}>Work</span>
        </div>
      </div>

      {
        education === true && (
      <div className="">
        <div className="flex flex-row gap-y-1 justify-between items-center">
        <div className="flex flex-col">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
        <span className="font-semibold text-darkTextPrimary text-base">[education] - Bachelor's in Computer Application</span>
          <a href="https://www.tmv.edu.in/" target="_blank" rel="noreferrer"  className="font-semibold text-darkTextSecondary text-sm">Tilak Maharashtra Vidyapeeth</a>
        </div>
        <div className="flex flex-row justify-center items-center gap-x-1 text-darkTextSecondary">
          <div className="font-semibold"><AiOutlineCalendar size={"1.25rem"} /> </div>
          <span className="font-semibold text-lg">2021-2023</span>
        </div>
        </div>
      </div>
        )
      }

      {
        work === true && (
          <div className="">
          <div className="flex flex-row gap-y-1 justify-between items-center">
          <div className="flex flex-col">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
          <span className="font-semibold text-darkTextPrimary text-base">[work] - Bachelor's in Computer Application</span>
            <a href="https://www.tmv.edu.in/" target="_blank" rel="noreferrer"  className="font-semibold text-darkTextSecondary text-sm">Tilak Maharashtra Vidyapeeth</a>
          </div>
          <div className="flex flex-row justify-center items-center gap-x-1 text-darkTextSecondary">
            <div className="font-semibold"><AiOutlineCalendar size={"1.25rem"} /> </div>
            <span className="font-semibold text-lg">2021-2023</span>
          </div>
          </div>
        </div>
        )
      }

  
    </section>
  );
};

export default Qualification;
