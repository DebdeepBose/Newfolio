// HeaderMain.jsx
import { NavMain } from "./NavMain";
import AudioToggle from "./AudioToggle";
import { NameMain } from "./NameMain";

export const HeaderMain = () => {
  return (
    <div className="w-full bg-transparent fixed top-0 z-50 p-4 md:py-6 md:pr-12 md:pl-8 flex flex-col md:flex-row items-center justify-between">
      <div className="flex items-center justify-center gap-2">
        <NameMain />
        <div className="block md:hidden scale-75 mb-4">
          <AudioToggle />
        </div>
      </div>
      <NavMain />
      <div className="hidden md:block">
        <AudioToggle />
      </div>
    </div>
  );
};