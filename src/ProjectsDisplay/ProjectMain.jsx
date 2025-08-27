import ProjectCard from "./ProjectCard";

export const ProjectMain = () => {
  return (
    <div className="bg-black min-h-screen w-full flex flex-col items-center py-16 px-4">
      <h2 className="text-4xl md:text-5xl font-medium text-teal-300 mb-16">
        My Projects
      </h2>

      <div className="flex flex-col gap-12 w-full items-center">
        <ProjectCard
          title="ShadeSeek"
          description="A simple responsive frontend website that helps to search, sort, filter properties based on cost and date."
        />
        <ProjectCard
          title="E-commerce Store"
          description="A full-stack e-commerce store with authentication, cart, and payment integration."
        />
        <ProjectCard
          title="Blog Platform"
          description="A blog platform where users can post, comment, and like articles."
        />
      </div>
    </div>
  );
};
