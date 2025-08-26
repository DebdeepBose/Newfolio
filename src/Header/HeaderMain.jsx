import { NavMain } from "./NavMain";
import AudioToggle from "./AudioToggle";
import { NameMain } from "./NameMain";

export const HeaderMain = () => {
  return (
    <div className="w-full p-4 md:py-8 md:pr-16 flex flex-col md:flex-row items-center justify-between">
      
      {/* Left: Name + Mobile AudioToggle */}
      <div className="flex items-center justify-center gap-2">
        <NameMain />
        <div className="block md:hidden scale-75  mb-4">
          <AudioToggle />
        </div>
      </div>

      {/* Center: Nav */}
      <NavMain />

      {/* Right: Desktop AudioToggle */}
      <div className="hidden md:block">
        <AudioToggle />
      </div>
    </div>
  );
};
