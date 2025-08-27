import { useState, useEffect } from "react";
import { NavItem } from "./NavItem";
import { FaHome, FaUser, FaCode, FaEnvelope, FaTools } from "react-icons/fa";

export const NavMain = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex items-center justify-center order-1 md:order-none md:mr-20">
      <div
        className={`Nav rounded-2xl flex md:gap-10 px-2 md:px-12 justify-center border-x-3 border-x-teal-400 transition-all duration-300 ${
          scrolled
            ? "bg-black/40 backdrop-blur-xs shadow-lg" 
            : "bg-[#212121]" 
        }`}
      >
        <NavItem icon={FaHome} label="Home" rightPos="" />
        <NavItem icon={FaUser} label="About" rightPos="" />
        <NavItem icon={FaTools} label="Skills" rightPos="" />
        <NavItem icon={FaCode} label="Projects" rightPos="" />
        <NavItem icon={FaEnvelope} label="Contact" rightPos="" />
      </div>
    </div>
  );
};
