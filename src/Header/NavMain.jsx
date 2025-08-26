import { NavItem } from "./NavItem";
import { FaHome, FaUser, FaCode, FaEnvelope, FaTools } from "react-icons/fa";

export const NavMain = () => {
  return (
    <div className="flex items-center justify-center order-1 md:order-none md:mr-18">
    <div
      className="Nav rounded-2xl bg-[#212121] flex md:gap-10 px-2 md:px-12 justify-center border-x-3 border-x-teal-400 "
    >
      <NavItem icon={FaHome} label="Home" rightPos="" />
      <NavItem icon={FaUser} label="About" rightPos="" />
      <NavItem icon={FaTools} label="Skills" rightPos=""/>
      <NavItem icon={FaCode} label="Projects" rightPos="" />
      <NavItem icon={FaEnvelope} label="Contact" rightPos="" />
    </div>
    </div>
  );
};
