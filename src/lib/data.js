export const userMetaData = {
  bio: "focused on creating innovative and modern web & mobile apps. With a passion for continuous improvement, I thrive on bringing creative ideas to life through technology.",
};

export const experience = [
  {
    id: 1,
    role: "Full Stack Engineer",
    company: "Slarity",
    companyUrl: "",
    employmentType: "Full-time",
    duration: "May 2025 - Present",
    location: "Chennai",
    techstacks: [
      { id: 1, name: "React" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "Tailwind CSS" },
      { id: 4, name: "Hono" },
      { id: 5, name: "Supabase" },
      { id: 6, name: "Drizzle ORM" },
      { id: 7, name: "PostgreSQL" },
      { id: 8, name: "Typesense" },
      { id: 9, name: "LLMs" },
      { id: 10, name: "TimescaleDB" },
    ],
    points: [
      "Built and scaled high-performance search functionality using Typesense, indexing and querying 4+ million products, significantly improving search accuracy and response times.",
      "Led development of the Admin Portal frontend, building reusable UI components using React.js, TypeScript, and Tailwind CSS to manage large product catalogs efficiently.",
      "Designed and developed backend APIs using TypeScript and Hono to interact with LLMs, processing and storing AI-generated responses in PostgreSQL via Drizzle ORM.",
      "Contributed to React Native applications, building UI components and integrating APIs for cross-platform mobile experiences.",
      "Implemented time-series data storage using PostgreSQL with TimescaleDB and added structured backend logging with Pino, improving observability, analytics, and production debugging.",
    ],
  },
  {
    id: 2,
    role: "Full-stack Developer",
    company: "ClumpCoder",
    companyUrl: "",
    employmentType: "Full-time",
    duration: "Aug 2024 - May 2025",
    location: "Mumbai, Maharashtra, India",
    techstacks: [
      { id: 1, name: "React.js" },
      { id: 2, name: "Tailwind CSS" },
      { id: 3, name: "Redux" },
      { id: 4, name: "Node.js" },
      { id: 5, name: "Express.js" },
      { id: 6, name: "MySQL" },
      { id: 7, name: "Sequelize ORM" },
      { id: 8, name: "AWS EC2" },
      { id: 9, name: "Linux" },
    ],
    points: [
      "Designed user interfaces with React.js and Tailwind CSS, integrating APIs with Redux for efficient state management and seamless client-server interaction.",
      "Developed and maintained RESTful APIs using Node.js, Express.js, MySQL, and Sequelize ORM, ensuring efficient data management.",
      "Collaborated with front-end teams to integrate APIs, ensuring seamless communication between server and client-side applications.",
      "Deployed backend services on AWS EC2 instances and utilized Linux for efficient server management and monitoring.",
    ],
  },
];

export const projects = [
  {
    id: 1,
    name: "Habitly",
    description:
      "A clean, free, no-account habit tracker for macOS. Track daily habits with streaks, a weekly grid, and progress graphs — all data stays local on-device, no account or network calls required.",
    techstacks: [
      { id: 1, name: "Electron" },
      { id: 2, name: "Vite" },
      { id: 3, name: "TypeScript" },
      { id: 4, name: "React 19" },
      { id: 5, name: "electron-store" },
    ],
    github: "https://github.com/thezeeshann/habitly",
    live: "https://habitly-6mv4.vercel.app/",
  },
  {
    id: 2,
    name: "Workout CMS",
    description:
      "A content management system for tracking and organizing workouts, with authentication, a PostgreSQL database, and a modern component-driven UI.",
    techstacks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "Tailwind CSS" },
      { id: 4, name: "Drizzle ORM" },
      { id: 5, name: "PostgreSQL" },
      { id: 6, name: "Better Auth" },
      { id: 7, name: "React Query" },
      { id: 8, name: "shadcn/ui" },
    ],
    github: "https://github.com/thezeeshann/workout-cms",
  },
  {
    id: 3,
    name: "Testimonial",
    description: "Get testimonials from your customers with ease.",
    techstacks: [
      { id: 1, name: "Nextjs" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "Tailwind CSS" },
      { id: 4, name: "Shadcn UI" },
      { id: 5, name: "React Query" },
      { id: 6, name: "PostgreSQL" },
      { id: 7, name: "Next Auth" },
      { id: 8, name: "Prisma" },
      { id: 9, name: "Zod" },
      { id: 10, name: "Uploadthing" },
    ],
    github: "https://github.com/thezeeshann/testimonial",
  },
  {
    id: 4,
    name: "Ecommerce Application",
    description:
      "Developed a full-featured Ecommerce web application using the MERN stack.",
    techstacks: [
      { id: 1, name: "Tailwind CSS" },
      { id: 2, name: "Shadcn ui" },
      { id: 3, name: "Javascript" },
      { id: 4, name: "React.js" },
      { id: 5, name: "Redux" },
      { id: 6, name: "RTK Query" },
      { id: 7, name: "Node.js" },
      { id: 8, name: "Express.js" },
      { id: 9, name: "MongoDB" },
    ],
    github: "https://github.com/thezeeshann/ecommerce-mern",
  },
  {
    id: 5,
    name: "Game Hub",
    description:
      "This project is a clone of the popular gaming platform RAWG.io. RAWG.io is a platform that allows users to discover their favorite games.",
    techstacks: [
      { id: 1, name: "Tailwind CSS" },
      { id: 2, name: "Typescript" },
      { id: 3, name: "React.js" },
      { id: 4, name: "RAWG.io Api" },
    ],
    github: "https://github.com/thezeeshann/game-hub",
  },
];
