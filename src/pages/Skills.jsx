import { useState } from "react";
import { FaCode, FaCodeBranch } from "react-icons/fa";
import { GoTools } from "react-icons/go";

const Skills = () => {
  const [open, setOpen] = useState({
    language: true,
    library: false,
    tools: false,
  });

  const { language, library, tools } = open;

  const handleToggle = (type) => {
    if (type === "language") {
      setOpen({ language: true, library: false, tools: false });
    } else if (type === "library") {
      setOpen({ language: false, library: true, tools: false });
    } else {
      setOpen({ language: false, library: false, tools: true });
    }
  };

  return (
    <section className="mt-20 " id="skills">
      <div className="flex flex-col mb-10 text-center gap-y-2">
        <h1 className="text-5xl font-bold text-darkTextPrimary sm:text-4xl">
          Skills
        </h1>
        <p className="text-base font-semibold text-darkTextPrimary sm:text-sm">
          My Technical Skills
        </p>
      </div>

      <div className="flex flex-row justify-center mb-10 gap-x-10">
        <div
          className="flex flex-row items-center cursor-pointer gap-x-3"
          onClick={() => handleToggle("language")}
        >
          <FaCode
            size={"2rem"}
            className={`${
              language === true ? "text-primary" : "text-darkTextSecondary"
            }`}
          />
          <span
            className={`${
              language === true ? "text-primary" : "text-darkTextSecondary"
            } font-semibold text-base`}
          >
            Languages
          </span>
        </div>
        <hr className="bg-darkTextSecondary w-[1.5px] h-[50px] border-0 border-primary" />
        <div
          className="flex flex-row items-center cursor-pointer gap-x-3"
          onClick={() => handleToggle("library")}
        >
          <FaCodeBranch
            size={"2rem"}
            className={`${
              library === true ? "text-primary" : "text-darkTextPrimary"
            }`}
          />
          <span
            className={`${
              library === true ? "text-primary" : "text-darkTextSecondary"
            } font-semibold text-base`}
          >
            Libraries & Frameworks
          </span>
        </div>
        <hr className="bg-darkTextSecondary w-[1.5px] h-[50px] border-0 border-primary" />
        <div
          className="flex flex-row items-center cursor-pointer gap-x-3"
          onClick={() => handleToggle("tools")}
        >
          <GoTools
            size={"2rem"}
            className={`${
              tools === true ? "text-primary" : "text-darkTextPrimary"
            }`}
          />
          <span
            className={`${
              tools === true ? "text-primary" : "text-darkTextSecondary"
            } font-semibold text-base`}
          >
            Tools & Platforms
          </span>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center gap-2 gap-x-6 text-darkTextSecondary">
        {language === true && (
          <>
            <div className="items-center justify-center rounded-md max-w-max ">
              <img
                src="https://skillicons.dev/icons?i=html"
                alt="logo"
                className="w-[45px] h-[45px] cursor-pointer mx-auto"
              />
              <p className="mt-1 text-sm text-center text-darkTextPrimary">
                HTML
              </p>
            </div>
            <div className="items-center justify-center rounded-md max-w-max ">
              <img
                src="https://skillicons.dev/icons?i=css"
                alt="logo"
                className="w-[45px] h-[45px] cursor-pointer mx-auto"
              />
              <p className="mt-1 text-sm text-center text-darkTextPrimary">
                Css
              </p>
            </div>
            <div className="items-center justify-center rounded-md max-w-max ">
              <img
                src="https://skillicons.dev/icons?i=js"
                alt="logo"
                className="w-[45px] h-[45px] cursor-pointer mx-auto"
              />
              <p className="mt-1 text-sm text-darkTextPrimary">Javascript</p>
            </div>
            <div className="items-center justify-center rounded-md max-w-max ">
              <img
                src="https://skillicons.dev/icons?i=ts"
                alt="logo"
                className="w-[45px] h-[45px] cursor-pointer mx-auto"
              />
              <p className="mt-1 text-sm text-darkTextPrimary">Typescript</p>
            </div>
            <div className="items-center justify-center rounded-md max-w-max ">
              <img
                src="https://skillicons.dev/icons?i=cpp"
                alt="logo"
                className="w-[45px] h-[45px] cursor-pointer mx-auto"
              />
              <p className="mt-1 text-sm text-center text-darkTextPrimary">
                C++
              </p>
            </div>
            <div className="items-center justify-center rounded-md max-w-max ">
              <img
                src="https://skillicons.dev/icons?i=python"
                alt="logo"
                className="w-[45px] h-[45px] cursor-pointer mx-auto"
              />
              <p className="mt-1 text-sm text-center text-darkTextPrimary">
                Python
              </p>
            </div>
          </>
        )}

        {library === true && (
          <>
            <div className="items-center justify-center rounded-md max-w-max ">
              <img
                src="https://skillicons.dev/icons?i=tailwind"
                alt="logo"
                className="w-[45px] h-[45px] cursor-pointer mx-auto"
              />
              <p className="mt-1 text-sm text-center text-darkTextPrimary">
                Tailwind
              </p>
            </div>
            <div className="items-center justify-center rounded-md max-w-max ">
              <img
                src="https://skillicons.dev/icons?i=react"
                alt="logo"
                className="w-[45px] h-[45px] cursor-pointer mx-auto"
              />
              <p className="mt-1 text-sm text-center text-darkTextPrimary">
                React
              </p>
            </div>
            <div className="items-center justify-center rounded-md max-w-max ">
              <img
                src="https://skillicons.dev/icons?i=redux"
                alt="logo"
                className="w-[45px] h-[45px] cursor-pointer mx-auto"
              />
              <p className="mt-1 text-sm text-center text-darkTextPrimary">
                Redux
              </p>
            </div>
            <div className="items-center justify-center rounded-md max-w-max ">
              <img
                src="https://skillicons.dev/icons?i=next"
                alt="logo"
                className="w-[45px] h-[45px] cursor-pointer mx-auto"
              />
              <p className="mt-1 text-sm text-center text-darkTextPrimary">
                Next
              </p>
            </div>
            <div className="items-center justify-center rounded-md max-w-max ">
              <img
                src="https://skillicons.dev/icons?i=nodejs"
                alt="logo"
                className="w-[45px] h-[45px] cursor-pointer mx-auto"
              />
              <p className="mt-1 text-sm text-center text-darkTextPrimary">
                Node
              </p>
            </div>
            <div className="items-center justify-center rounded-md max-w-max ">
              <img
                src="https://skillicons.dev/icons?i=express"
                alt="logo"
                className="w-[45px] h-[45px] cursor-pointer mx-auto"
              />
              <p className="mt-1 text-sm text-center text-darkTextPrimary">
                Express
              </p>
            </div>
            <div className="items-center justify-center rounded-md max-w-max ">
              <img
                src="https://skillicons.dev/icons?i=django"
                alt="logo"
                className="w-[45px] h-[45px] cursor-pointer mx-auto"
              />
              <p className="mt-1 text-sm text-center text-darkTextPrimary">
                Django
              </p>
            </div>
            <div className="items-center justify-center rounded-md max-w-max ">
              <img
                src="https://skillicons.dev/icons?i=mongodb"
                alt="logo"
                className="w-[45px] h-[45px] cursor-pointer mx-auto"
              />
              <p className="mt-1 text-sm text-center text-darkTextPrimary">
                MongoDB
              </p>
            </div>
            <div className="items-center justify-center rounded-md max-w-max ">
              <img
                src="https://skillicons.dev/icons?i=postgres"
                alt="logo"
                className="w-[45px] h-[45px] cursor-pointer mx-auto"
              />
              <p className="mt-1 text-sm text-center text-darkTextPrimary">
                Postgres
              </p>
            </div>
          </>
        )}

        {tools === true && (
          <>
            <div className="items-center justify-center rounded-md max-w-max ">
              <img
                src="https://skillicons.dev/icons?i=git"
                alt="logo"
                className="w-[45px] h-[45px] cursor-pointer mx-auto"
              />
              <p className="mt-1 text-sm text-center text-darkTextPrimary">
                Git
              </p>
            </div>
            <div className="items-center justify-center rounded-md max-w-max ">
              <img
                src="https://skillicons.dev/icons?i=github"
                alt="logo"
                className="w-[45px] h-[45px] cursor-pointer mx-auto"
              />
              <p className="mt-1 text-sm text-center text-darkTextPrimary">
                Github
              </p>
            </div>
            <div className="items-center justify-center rounded-md max-w-max ">
              <img
                src="https://skillicons.dev/icons?i=linux"
                alt="logo"
                className="w-[45px] h-[45px] cursor-pointer mx-auto"
              />
              <p className="mt-1 text-sm text-center text-darkTextPrimary">
                Linux
              </p>
            </div>
            <div className="items-center justify-center rounded-md max-w-max ">
              <img
                src="https://skillicons.dev/icons?i=aws"
                alt="logo"
                className="w-[45px] h-[45px] cursor-pointer mx-auto"
              />
              <p className="mt-1 text-sm text-center text-darkTextPrimary">
                AWS
              </p>
            </div>
            <div className="items-center justify-center rounded-md max-w-max ">
              <img
                src="https://skillicons.dev/icons?i=docker"
                alt="logo"
                className="w-[45px] h-[45px] cursor-pointer mx-auto"
              />
              <p className="mt-1 text-sm text-center text-darkTextPrimary">
                Docker
              </p>
            </div>
            <div className="items-center justify-center rounded-md max-w-max ">
              <img
                src="https://skillicons.dev/icons?i=postman"
                alt="logo"
                className="w-[45px] h-[45px] cursor-pointer mx-auto"
              />
              <p className="mt-1 text-sm text-center text-darkTextPrimary">
                Postman
              </p>
            </div>
            <div className="items-center justify-center rounded-md max-w-max ">
              <img
                src="https://skillicons.dev/icons?i=vercel"
                alt="logo"
                className="w-[45px] h-[45px] cursor-pointer mx-auto"
              />
              <p className="mt-1 text-sm text-center text-darkTextPrimary">
                Vercel
              </p>
            </div>
            <div className="items-center justify-center rounded-md max-w-max ">
              <img
                src="https://skillicons.dev/icons?i=netlify"
                alt="logo"
                className="w-[45px] h-[45px] cursor-pointer mx-auto"
              />
              <p className="mt-1 text-sm text-center text-darkTextPrimary">
                Netlify
              </p>
            </div>
            <div className="items-center justify-center rounded-md max-w-max ">
              <img
                src="https://skillicons.dev/icons?i=vscode"
                alt="logo"
                className="w-[45px] h-[45px] cursor-pointer mx-auto"
              />
              <p className="mt-1 text-sm text-center text-darkTextPrimary">
                VsCode
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Skills;
