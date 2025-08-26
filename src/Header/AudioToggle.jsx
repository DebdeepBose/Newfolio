import { useState, useRef } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import Lofi1 from "../assets/Lofi1.mp3"; 

const AudioToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(Lofi1));

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
      audioRef.current.loop = true;
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={toggleAudio}
      className="p-4 rounded-full bg-[#212121] text-teal-500 outline-none border-4 border-transparent hover:border-teal-400 
                 shadow-[inset_3px_3px_6px_#bebebe,inset_-3px_-3px_6px_#ffffff,0_4px_6px_rgba(0,0,0,0.15)]
                 transition-all duration-300 ease-out hover:scale-110"
    >
      {isPlaying ? <FaVolumeUp size={20} /> : <FaVolumeMute size={20} />}
    </button>
  );
};

export default AudioToggle;
