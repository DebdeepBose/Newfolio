export const ProfileCard = () => {
  return (
    <>
      <div
        className="w-[300px] h-[300px] md:w-[350px] md:h-[350px] rounded-[44%] relative"
        style={{
          background:
            "radial-gradient(circle at center, #ffffff, #99f6e4, #2dd4bf, #ffffff, #0d9488, #2dd4bf)",
          animation: "rotateGradient 6s linear infinite",
          boxShadow: "0 0 10px #5eead4, 0 0 20px #2dd4bf, 0 0 60px #5eead4",
        }}
      >
    
        <div
          className="w-[295px] h-[295px] md:w-[345px] md:h-[345px] bg-[#071026] rounded-[50%] absolute top-1/2 left-1/2 overflow-hidden"
          style={{
            transform: "translate(-50%, -50%)",
            animation: "counterRotate 6s linear infinite", 
          }}
        >
          <img
            src="/AboutImg.jpeg"
            alt="Profile"
            className="w-full h-full object-contain opacity-90"
          />
        </div>
      </div>

      <style>
        {`
          @keyframes rotateGradient {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          @keyframes counterRotate {
            0%   { transform: translate(-50%, -50%) rotate(0deg); }
            100% { transform: translate(-50%, -50%) rotate(-360deg); }
          }
        `}
      </style>
    </>
  );
};
