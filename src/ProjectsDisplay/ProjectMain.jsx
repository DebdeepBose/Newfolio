import ProjectCard from "./ProjectCard";
import Ss from "../assets/Ss.png";
import leafSS from "../assets/leafSs.png"; 

export const ProjectMain = () => {
  return (
    <div className="bg-black min-h-screen w-full flex flex-col items-center px-24">
      <h2 className="text-4xl md:text-5xl font-medium text-teal-300 mb-16 mt-16">
        My Projects
      </h2>

      <div className="flex flex-col gap-4 w-full items-center">
        <ProjectCard
          title="ShadeSeek"
          description="A simple responsive frontend website that helps to search, sort, and filter properties based on cost and date. 
Includes a basic Firebase authentication system for login and signup, multi-service property view with detailed pages, 
and a lightweight blog section to post and explore community updates."
          passBg={Ss}
        />
        <ProjectCard
          title="Waste Management Website"
          description="A full-stack e-commerce store with authentication, cart, and payment integration."
          passBg={leafSS}
        />
        <ProjectCard
          title="Blog Platform"
          description="A blog platform where users can post, comment, and like articles."
        />
      </div>
    </div>
  );
};
