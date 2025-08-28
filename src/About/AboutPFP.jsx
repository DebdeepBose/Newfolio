export const AboutPFP = () => {
  return (
    <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px]">
      {/* Gradient layer (stays in place, but colors move) */}
      <div
        className="absolute inset-0 rounded-[29%] spin-gradient"
        style={{
          boxShadow: "0 0 10px #5eead4, 0 0 20px #2dd4bf, 0 0 60px #5eead4",
        }}
      ></div>

      {/* Static black container with image */}
      <div className="absolute top-1/2 left-1/2 w-[295px] h-[295px] md:w-[345px] md:h-[345px] bg-[#071026] rounded-[30%] overflow-hidden transform -translate-x-1/2 -translate-y-1/2">
        <img
          src="/AboutImg.jpeg"
          alt="Profile"
          className="w-full h-full object-contain"
        />
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
