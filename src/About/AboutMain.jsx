import { ProfileCard } from "../Hero/ProfileCard";
import { AboutLeft } from "./AboutLeft";
import { FaUser } from "react-icons/fa";

export const AboutMain = () => {
  return (
    <div id="about-section" className="mt-24  md:pl-36 h-full w-screen bg-black flex flex-col items-center justify-center pt-16 md:pr-8">
      <h2 className="flex items-center justify-center text-4xl md:text-5xl font-semibold text-teal-300 mb-24 text-center md:mr-32">
        <FaUser className="mr-2" /> About Me
      </h2>
      <div className="flex flex-col-reverse md:flex-row items-start justify-center w-full">
        <AboutLeft />
        <div className="w-full md:w-1/2 relative flex items-center justify-center mb-8 md:mb-0">
          <ProfileCard />
        </div>
      </div>
    </div>
  );
};