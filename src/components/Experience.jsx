import { experience } from "../lib/data";

const Experience = () => {
  return (
    <section className="mt-8 mb-10" id="experience">
      <div className="flex flex-col mb-6 gap-y-2">
        <h1 className="text-xl font-semibold text-textPrimary dark:text-darkTextPrimary">
          Experience
        </h1>
      </div>

      <div className="flex flex-col gap-y-5">
        {experience.map((job) => (
          <div
            key={job.id}
            className="p-4 border-[1px] border-bgSecondary dark:border-darkBgSecondary shadow-md"
          >
            <div className="flex flex-col gap-y-2">
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                <p className="font-semibold text-[15px] text-textPrimary dark:text-darkTextPrimary">
                  {job.role} · {job.company}
                </p>
                <p className="text-[12px] text-textSecondary dark:text-darkTextSecondary">
                  {job.duration}
                </p>
              </div>
              <p className="text-[12px] text-textSecondary dark:text-darkTextSecondary">
                {job.employmentType} · {job.location}
              </p>

              <ul className="pl-4 mt-1 space-y-1 list-disc">
                {job.points.map((point, index) => (
                  <li
                    key={index}
                    className="text-[12px] text-textSecondary dark:text-darkTextSecondary"
                  >
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-row flex-wrap items-center gap-x-2 gap-y-2 mt-1">
                {job.techstacks.map((stack) => (
                  <div
                    key={stack.id}
                    className="py-1 px-2 border-[1px] rounded-md border-bgSecondary dark:border-darkBgSecondary cursor-pointer hover:animate-pulse"
                  >
                    <p className="text-[12px] font-semibold text-textSecondary dark:text-darkTextSecondary">
                      {stack.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
