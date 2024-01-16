
const Skills = () => {


  return (
    <section className="mt-20" id="skills">
      
      <div className="text-center flex flex-col gap-y-2 mb-10">
        <h1 className="text-darkTextPrimary text-5xl sm:text-4xl font-bold">Skills</h1>
        <p className=" font-semibold text-darkTextPrimary text-base sm:text-sm">
          My Technical Skills 
        </p>
      </div>


      <div className='flex flex-col gap-2 text-darkTextSecondary '>
          <div className="">
            <span className='text-lg sm:text-base text-darkTextPrimary font-bold mr-4'>
              Programming Languages:
            </span>
            <span className='text-base sm:text-sm font-semibold'>
              JavaScript / TypeScript, Python
            </span>
          </div>
          <div>
            <span className='text-lg sm:text-base text-darkTextPrimary font-bold mr-4'>
            Libraries & Frameworks:
            </span>
            <span className='text-base md:text-base sm:text-sm font-semibold'>
            React.js, Next.js, Node.js, Express.js, Django, Tailwind CSS, Bootstrap
            </span>
          </div>
          <div>
            <span className='text-base sm:text-base text-textPrimary dark:text-darkTextPrimary md:text-lg xl:text-lg font-bold mr-4'>
              Databases:
            </span>
            <span className='text-base md:text-base sm:text-sm font-semibold'>
              MongoDb, MYSQL, PostgreSQL
            </span>
          </div>
          <div>
            <span className='text-lg sm:text-base text-textPrimary dark:text-darkTextPrimary md:text-lg font-bold mr-4'>
            Tools & Platforms:
            </span>
            <span className='text-base md:text-base font-semibold sm:text-sm'>
              Git, Github, Postman API, Linux, AWS, Netlify, Vercel
            </span>
          </div>
        </div>


    </section>
  );
};

export default Skills;
