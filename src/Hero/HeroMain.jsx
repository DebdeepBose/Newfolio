
import { HeroRight } from "./HeroRight";
import { ProfileCard } from "./ProfileCard";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const HeroMain = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });
  }, []);
  return (
    <div
      id="home"
      className="h-full w-screen bg-black flex flex-col md:flex-row 
                 items-center md:items-start justify-center pt-20 md:pr-32 select-none" data-aos="fade-left"
    >
      <div className="w-full md:w-1/2 relative flex items-center justify-center mb-8 md:mb-0">
          <ProfileCard />
      </div>

      <HeroRight />
    </div>
  );
};
