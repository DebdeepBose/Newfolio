import ProjectCard from "./ProjectCard";
import Ss from "../assets/Ss.png";
import leafSS from "../assets/leafSs.png";
import { FaCode, FaGithub } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import todo from "../assets/todo.png";

export const ProjectMain = () => {
  return (
    <div id="projects" className="bg-black min-h-screen w-full flex flex-col items-center px-24">
      <h2 className="text-4xl md:text-5xl font-medium mb-16 mt-16 flex items-center gap-3">
        <FaCode className="text-teal-400" />
        <span className="bg-gradient-to-r from-teal-400 via-teal-200 to-teal-100 bg-clip-text text-transparent">
          My Projects
        </span>
      </h2>

      <div className="flex flex-col gap-4 w-full items-center">
        <ProjectCard
          title="ShadeSeek"
          description="A simple responsive frontend website that helps to search, sort, and filter properties based on cost and date. 
Includes a basic Firebase authentication system for login and signup, multi-service property view with detailed pages, 
and a lightweight blog section to post and explore community updates."
          passBg={Ss}
          viewLink={"https://shade-seek.vercel.app/"}
          codeLink={"https://github.com/DebdeepBose/ShadeSeek"}
          codeIcon={<FaGithub color="#fff" />}
          viewIcon={<SiVercel color="#fff" />}
          place={"on Vercel"}
        />
        <ProjectCard
          title="Waste Management System"
          description="A waste management frontend website featuring multiple modules, including a waste tracker, separator, and recycle helper. It also offers a blog section for users to share their experiences, with integrations such as the Geolocation API, Swiper.js, and Tilt.js to deliver a smooth and engaging UI"
          passBg={leafSS}
          codeLink={"https://github.com/DebdeepBose/WasteManagementSystem"}
          viewLink={"https://debdeepbose.github.io/WasteManagementSystem/"}
          codeIcon={<FaGithub color="#fff" />}
          viewIcon={<FaGithub color="#fff" />}
          place={"on GitHub Page"}
        />
        <ProjectCard
          title="To-Do List"
          description="A lightweight and responsive To-Do List application featuring add, strikethrough, and delete functionalities. Built using vanilla HTML, CSS, and JavaScript to demonstrate core DOM manipulation and interactive UI design."
          passBg={todo}
          viewLink={"https://debdeepbose.github.io/To-DO/"}
          codeLink={"https://github.com/DebdeepBose/To-DO"}
          codeIcon={<FaGithub color="#fff" />}
          viewIcon={<FaGithub color="#fff" />}
          place={"on GitHub Page"}
        />
      </div>
    </div>
  );
};
