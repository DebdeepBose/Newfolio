import { FollowMe } from "./FollowMe";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export const FooterMain = () => {
  gsap.registerPlugin(ScrollToPlugin);
  const scrollToSection = (id) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: `#${id}`, offsetY: 80 }, // offsetY if you have sticky header
      ease: "power2.inOut",
    });
  };
  return (
    <footer className="w-full bg-slate-900 text-teal-300 py-10 px-6 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4">Follow Me</h3>

          <FollowMe
            linkedin="https://www.linkedin.com/in/debdeep-bose-0a8a47303"
            github="https://github.com/DebdeepBose"
            leetcode="https://leetcode.com/u/DebdeepB03/"
            gfg="https://www.geeksforgeeks.org/user/debdeepbose03/"
          />
        </div>

        <div className="flex flex-col items-center -mt-16 md:mt-0">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-teal-200">
            <li>
              <button
                onClick={() => scrollToSection("home")}
                className="hover:text-teal-400 transition-colors"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-teal-400 transition-colors"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("skills")}
                className="hover:text-teal-400 transition-colors"
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("projects")}
                className="hover:text-teal-400 transition-colors"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-teal-400 transition-colors"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-end">
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p className="text-teal-200 text-sm">dbworkofficial@gmail.com</p>
          <p className="text-teal-200 text-sm">+91 7439299792</p>
        </div>
      </div>

      <div className="border-t border-teal-800 mt-10 pt-6 text-center text-sm text-teal-500">
        Made with ❤️ by{" "}
        <span className="text-teal-300 font-semibold">Your Name</span>
      </div>
    </footer>
  );
};
