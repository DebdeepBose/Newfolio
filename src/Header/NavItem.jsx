export const NavItem = ({ icon: Icon, label, rightPos = "0px" }) => {
  return (
    <div className="relative flex flex-col items-center group">
      <div className="relative py-5 px-4 md:px-4">
        <span className="absolute left-0 right-0 top-0 h-1 bg-teal-400 scale-x-0 group-hover:scale-x-70 transition-transform duration-300 ease-out origin-center rounded-full"></span>
        <span className="absolute left-0 right-0 bottom-0 h-1 bg-teal-400 scale-x-0 group-hover:scale-x-70 transition-transform duration-300 ease-out origin-center rounded-full"></span>
        <div
          className="cursor-pointer p-3 md:p-3 rounded-full bg-[#212121] font-semibold text-teal-400 flex items-center gap-2 transition-all duration-300 ease-out
                     shadow-[inset_3px_3px_6px_#bebebe,inset_-3px_-3px_6px_#ffffff,0_4px_6px_rgba(0,0,0,0.15)]
                     border-4 border-transparent hover:border-teal-400
                     "
        >
          {Icon && <Icon className="text-xl font-normal lg:text-2xl" />}
        </div>
      </div>

      <div
        style={{ right: rightPos }}
        className="absolute -bottom-11 px-3 py-2 rounded-lg bg-[#212121] text-teal-500 text-sm font-bold shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff,0_2px_4px_rgba(0,0,0,0.1)]
                  opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100
                  transition-all duration-300 ease-out"
      >
        {label}
      </div>
    </div>
  );
};
