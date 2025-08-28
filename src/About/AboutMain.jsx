import { AboutLeft } from "./AboutLeft";
import { FaUser } from "react-icons/fa";
import { AboutPFP } from "./AboutPFP";

export const AboutMain = () => {
  return (
    <div className="mt-20 h-full w-screen bg-black flex flex-col items-center justify-center pt-18 md:pt-8 md:pl-32">
      <div id="about"></div>
      <h2 className="text-4xl md:text-5xl font-semibold mb-24 mt-16 flex items-center gap-3 justify-center text-center md:mr-32">
        <FaUser className="text-teal-400" />
        <span className="bg-gradient-to-r from-teal-400 via-teal-200 to-teal-100 bg-clip-text text-transparent">
          About Me
        </span>
      </h2>

      <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-center w-full">
        <AboutLeft />
        <div className="w-full md:w-1/2 relative flex items-center justify-center mb-8 md:mb-0">
          <AboutPFP />
        </div>
      </div>
    </div>
  );
};
