import Contributions from "./Contributions";
import Experience from "./Experience";
import Footer from "./Footer";
import Profile from "./Profile";
import Projects from "./Projects";
import Section from "./Section";
import Skills from "./Skills";

const Home = () => {
  return (
    <main
      className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-4 pb-16 pt-16"
      id="home"
    >
      <Profile />
      <Contributions />

      <Section label="Experience" id="experience">
        <Experience />
      </Section>

      <Section label="Projects" id="projects">
        <Projects />
      </Section>

      <Section label="Skills" id="skills">
        <Skills />
      </Section>

      <Footer />
    </main>
  );
};

export default Home;
