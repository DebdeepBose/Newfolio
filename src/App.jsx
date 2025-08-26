import "./App.css";
import { Layout } from "./Layout";
import { HeroMain } from "./Hero/HeroMain";
import { AboutMain } from "./About/AboutMain";
import { SkillMain } from "./Skills/SkillMain";
import { ProjectMain } from "./ProjectsDisplay/ProjectMain";
import { ContactMain } from "./Contact/ContactMain";
import { FooterMain } from "./Footer/FooterMain";

function App() {
  return (
    <Layout>
      <HeroMain />
      <AboutMain />
      <SkillMain />
      <ProjectMain />
      <ContactMain />
      <FooterMain />
    </Layout>
  );
}

export default App;
