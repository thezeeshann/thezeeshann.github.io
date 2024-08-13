const Skills = () => {
  return (
    <section className="mt-8 mb-10 " id="skills">
      <div className="flex flex-col mb-10 gap-y-2">
        <h1 className="text-xl font-semibold text-darkTextPrimary sm:text-4xl ">
          Skills 🧠
        </h1>
      </div>

      <div className="flex flex-col gap-y-4">
        <div className="flex flex-row gap-x-2">
          <p className="text-[15px] font-semibold text-darkTextPrimary">
            Frontend:
          </p>
          <p className="text-darkTextSecondary text-[14px]">
            HTML, CSS, Tailwind css, Javascript, Typescript, React.js, Next,js,
            ShadCN UI, Redux, RTK Query, Tanstack Query, React Hook Form
          </p>
        </div>

        <div className="flex flex-row gap-x-2">
          <p className="text-[15px] font-semibold text-darkTextPrimary">
            Backend:
          </p>
          <p className="text-darkTextSecondary text-[14px]">
            Node.js, Express.js, Django, MongodDB, PostgreSQL, Prisma ORM,
            NextAuth.js
          </p>
        </div>

        <div className="flex flex-row gap-x-2">
          <p className="text-[15px] font-semibold text-darkTextPrimary">
            Others:
          </p>
          <p className="text-darkTextSecondary text-[14px]">
            C++, Python, React Native, Expo
          </p>
        </div>

        <div className="flex flex-row gap-x-2">
          <p className="text-[15px] font-semibold text-darkTextPrimary">
            Tools & Platforms:
          </p>
          <p className="text-darkTextSecondary text-[14px]">
            Git, Github, Postman Api, VsCode, Linux, Aws, Docker
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
