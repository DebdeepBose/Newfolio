import { ResumeButton } from "./ResumeButton";

export const AboutLeft = () => {
  return (
    <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start pb-6 md:px-16 px-8 text-white space-y-6">
      <h1 className="text-3xl md:text-5xl font-medium mt-2">
        Hey There! I am Debdeep
      </h1>
      <p className="text-lg md:text-xl text-gray-300 text-center md:text-start">
        I'm an aspiring software developer from India. I enjoy solving problems
        and exploring new concepts. I really enjoy coding, though I do face my
        fair share of difficulties. I try to overcome them by experimenting with
        new approaches. I'm always open to learning new tools and refining my
        skills step by step. My goal is to grow as a developer while building
        meaningful features.
      </p>
      <ResumeButton></ResumeButton>
    </div>
  );
};
