export const HeroMain = () => {
  return (
    <div className="h-screen w-screen bg-black flex flex-col md:flex-row items-center justify-center">
      
      {/* Top: Video (on mobile) */}
      <div className="w-full md:w-1/2 relative flex items-center justify-center">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-64 md:h-full object-cover rounded-none md:rounded-2xl shadow-lg"
        >
          <source src="/your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Bottom (mobile) / Right (desktop): Intro text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-6 md:px-16 text-white space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold">Hi, I am Debdeep Bose</h1>
        <p className="text-lg md:text-xl text-gray-300">
          I build beautiful web experiences and interactive digital products.
        </p>

        <button className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white text-base md:text-lg font-medium rounded-xl shadow-md transition">
          Know more about my work
        </button>
      </div>
    </div>
  );
};
