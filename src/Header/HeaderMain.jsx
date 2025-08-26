import { NavMain } from "./NavMain";
import AudioToggle from "./AudioToggle";
import { NameMain } from "./NameMain";

export const HeaderMain = () => {
  return (
    <div className="w-full p-4 md:py-8 md:pr-16 flex flex-col md:flex-row items-center justify-between">
      <NameMain />
      <NavMain />
      <AudioToggle />
    </div>
  );
};
