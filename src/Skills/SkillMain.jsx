import { SkillCard } from "./SkillCard";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaTools,
  FaPython,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import { FaC } from "react-icons/fa6";
import { SiTailwindcss, SiMysql, SiCplusplus } from "react-icons/si";
import { SiFirebase, SiJquery, SiGreensock, SiSass } from "react-icons/si";

export const SkillMain = () => {
  return (
    <div id="skills" className="bg-black min-h-screen w-screen flex flex-col items-center py-16 select-none md:mt-24">
      <h2 className="text-4xl md:text-5xl font-medium text-teal-300 mb-16 flex items-center gap-3">
        <FaTools className="text-teal-400" />
        My Skills
      </h2>
      <div className="flex flex-wrap justify-center gap-10 md:grid md:grid-cols-4 md:gap-12">
        <SkillCard icon={FaHtml5} title="HTML5" />
        <SkillCard icon={FaCss3Alt} title="CSS3" />
        <SkillCard icon={FaJs} title="JavaScript" />
        <SkillCard icon={FaReact} title="React" />
        <SkillCard icon={SiTailwindcss} title="Tailwind" />
        <SkillCard icon={SiMysql} title="MySQL" />
        <SkillCard icon={SiCplusplus} title="C++" />
        <SkillCard icon={FaJava} title="Java" />
        <SkillCard icon={FaPython} title="Python" />
        <SkillCard icon={FaC} title="C" />
        <SkillCard icon={FaGitAlt} title="Git" />
        <SkillCard icon={FaGithub} title="GitHub" />
        <SkillCard icon={SiFirebase} title="Firebase" />
        <SkillCard icon={SiJquery} title="jQuery" />
        <SkillCard icon={SiGreensock} title="GSAP" />
        <SkillCard icon={SiSass} title="SCSS" />
      </div>
    </div>
  );
};
