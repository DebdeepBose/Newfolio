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
          scrolled ? "bg-black/40 backdrop-blur-xs shadow-lg" : "bg-transparent"
        }`}
      >
        <NavItem icon={FaHome} label="Home" targetId="home" rightPos="14px" />
        <NavItem icon={FaUser} label="About" targetId="about" rightPos="12px"/>
        <NavItem icon={FaTools} label="Skills" targetId="skills" rightPos="14px" />
        <NavItem icon={FaCode} label="Projects" targetId="projects" />
        <NavItem icon={FaEnvelope} label="Contact" targetId="contact" />
      </div>
    </div>
  );
};
