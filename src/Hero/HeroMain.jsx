import { HeroRight } from "./HeroRight";
import { ProfileCard } from "./ProfileCard";

export const HeroMain = () => {
  return (
    <div className="h-screen w-screen bg-black flex flex-col md:flex-row items-start justify-center pt-16">
      <div className="w-full md:w-1/2 relative flex items-center justify-center mb-8 md:mv-0">
        <ProfileCard />
      </div>

      <HeroRight></HeroRight>
    </div>
  );
};
