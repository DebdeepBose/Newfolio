import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { HeaderMain } from "./Header/HeaderMain";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export function Layout({ children }) {
  const smootherRef = useRef(null);

  useLayoutEffect(() => {
    smootherRef.current = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2,
      effects: true,
    });

    return () => {
      if (smootherRef.current) smootherRef.current.kill();
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content" className="bg-black text-white">
        <HeaderMain />
        {children}
      </div>
    </div>
  );
}
