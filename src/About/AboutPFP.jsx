export const AboutPFP = () => {
  return (
    <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px]">
      <div
        className="absolute inset-0 rounded-[29%] spin-gradient"
        style={{
          boxShadow: "0 0 10px #5eead4, 0 0 20px #2dd4bf, 0 0 60px #5eead4",
        }}
      ></div>

      <div className="absolute top-1/2 left-1/2 w-[295px] h-[295px] md:w-[345px] md:h-[345px] bg-black rounded-[30%] overflow-hidden transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-full h-full">
          <img
            src="/tealhand.png"
            alt="Profile"
            className="w-full h-full object-contain scale-75 brightness-105"
          />
          <div className="absolute inset-0 bg-teal-300 opacity-90 brightness-150 mix-blend-multiply"></div>
        </div>
      </div>

      <style>
        {`
          .spin-gradient {
            background: conic-gradient(
              from 0deg,
              #ffffff,
              #99f6e4,
              #2dd4bf,
              #ffffff,
              #0d9488,
              #2dd4bf,
              #ffffff
            );
            animation: gradient-rotate 6s linear infinite;
          }

          @keyframes gradient-rotate {
            0%   { background: conic-gradient(from 0deg,   #ffffff, #99f6e4, #2dd4bf, #ffffff, #0d9488, #2dd4bf, #ffffff); }
            100% { background: conic-gradient(from 360deg, #ffffff, #99f6e4, #2dd4bf, #ffffff, #0d9488, #2dd4bf, #ffffff); }
          }
        `}
      </style>
    </div>
  );
};
