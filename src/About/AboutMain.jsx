import { ProfileCard } from "../Hero/ProfileCard";
import { AboutLeft } from "./AboutLeft";
import { FaUser } from "react-icons/fa";

export const AboutMain = () => {
  return (
    <div id="about-section" className="mt-20 h-full w-screen bg-black flex flex-col items-center justify-center pt-24 md:pl-32">
      <h2 className="flex items-center justify-center text-4xl md:text-5xl font-semibold text-teal-300 mb-24 md:mr-28 text-center">
        <FaUser className="mr-2" /> About Me
      </h2>
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-center w-full">
        <AboutLeft />
        <div className="w-full md:w-1/2 relative flex items-center justify-center mb-8 md:mb-0">
          <ProfileCard />
        </div>
      </div>
    </div>
  );
};