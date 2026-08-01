const skillGroups = [
  {
    id: 1,
    category: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "ShadCN UI",
      "Redux",
      "RTK Query",
      "Tanstack Query",
      "React Hook Form",
    ],
  },
  {
    id: 2,
    category: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "MongoDB",
      "Prisma ORM",
      "NextAuth.js",
      "LLM Integrations",
    ],
  },
  {
    id: 3,
    category: "Tools & Platforms & Monitoring",
    skills: [
      "Git",
      "GitHub",
      "Linux",
      "AWS",
      "Docker",
      "Vercel Analytics",
      "Better Stack",
      "Sentry",
    ],
  },
  {
    id: 4,
    category: "Mobile Development",
    skills: ["React Native", "Expo"],
  },
];

const Skills = () => {
  return (
    <section className="mt-8 mb-10 " id="skills">
      <div className="flex flex-col mb-6 gap-y-2">
        <h1 className="text-xl font-semibold text-textPrimary dark:text-darkTextPrimary ">
          Stack
        </h1>
      </div>

      <div className="flex flex-col gap-y-5">
        {skillGroups.map((group) => (
          <div key={group.id} className="flex flex-col gap-y-2">
            <p className="text-[15px] font-semibold text-textPrimary dark:text-darkTextPrimary">
              {group.category}
            </p>
            <div className="flex flex-row flex-wrap items-center gap-x-2 gap-y-2">
              {group.skills.map((skill) => (
                <div
                  key={skill}
                  className="py-1 px-2 border-[1px] rounded-md border-bgSecondary dark:border-darkBgSecondary cursor-pointer hover:animate-pulse"
                >
                  <p className="text-[12px] font-semibold text-textSecondary dark:text-darkTextSecondary">
                    {skill}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
