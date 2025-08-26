export const NameMain = () => {
  return (
    <div
      className="relative group order-0 select-none md:order-none
             text-teal-400 font-bold text-xl md:text-2xl tracking-wide
             px-5 py-1 flex items-center justify-center
             transition-transform duration-300 hover:scale-105 mb-4"
    >
      <span
        className="absolute left-0 top-0 h-full w-[2px] 
               bg-gradient-to-b from-teal-400 to-teal-200
               origin-top scale-y-0 group-hover:scale-y-100
               transition-transform duration-500 ease-in-out
               rounded-full"
      ></span>

      <span
        className="absolute right-0 top-0 h-full w-[2px] 
               bg-gradient-to-t from-teal-400 to-teal-200
               origin-bottom scale-y-0 group-hover:scale-y-100
               transition-transform duration-500 ease-in-out
               rounded-full"
      ></span>

      <h1
        className="relative z-10 transition-all duration-300
               group-hover:text-teal-300 
               group-hover:drop-shadow-[0_0_6px_rgba(20,184,166,0.7)]
               group-hover:-translate-y-1"
      >
        Debdeep Bose
      </h1>
    </div>
  );
};
