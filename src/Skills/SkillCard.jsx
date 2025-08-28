export const SkillCard = ({ icon: Icon, title }) => {
  return (
    <div className="group w-[120px] md:w-[180px] h-[120px] bg-black text-center rounded-2xl shadow-inner transition-all duration-500 hover:h-[180px] border-2 border-teal-400 hover:shadow-[0_0_25px_3px_rgba(45,212,191,0.7)]">

      <div className="w-[80px] h-[80px] flex items-center justify-center text-teal-400 text-6xl bg-black mx-auto mt-5 rounded-md transition-all duration-500 group-hover:text-teal-300">
        <Icon />
      </div>

      <div className="text-teal-300 bg-transparent px-4 py-2 text-center flex items-center justify-center mx-5 mt-3 rounded-lg transform -translate-y-20 scale-0 transition-all duration-500 group-hover:translate-y-0 group-hover:scale-100">
        <h3 className="md:text-2xl text-md font-semibold text-center">{title}</h3>
      </div>
    </div>
  );
};
