import { KnowMoreButton } from "./KnowMoreButton";
export const HeroRight = () => {
  return (
    <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start p-6 md:px-16 text-white space-y-6">
      <h1 className="text-3xl md:text-5xl font-medium mt-2 text-teal-100">
        Hi, I am Debdeep
      </h1>
      <p className="text-lg md:text-xl text-gray-300 text-center md:text-start">
        I am highly passionate about Software Development and love building
        interactive user interfaces. I try to upskill myself and keep myself
        updated with the latest tools and trends to become a better developer
        every day.
      </p>

      <KnowMoreButton></KnowMoreButton>
    </div>
  );
};
