import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
export default function Footer() {
  useGSAP(() => {
    const BannerText = SplitText.create(".footer-text", {
      type: "lines,chars",
      mask: "chars",
    });
    gsap.from(BannerText.chars, {
      y: 600,
      stagger: 0.02,
      // delay: 6,
      duration: 1.5,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".footer-section",
        start: "top 50%",
        end: "bottom top",

      },
    });
  }, []);
  return (
    <footer className="footer-section h-full">
      <Navbar />

      <h2 className="footer-text pt-30 uppercase font-BebasNeue text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight text-center xl:leading-[7rem]">
        SO, where are you at?
      </h2>
      <div className=" mt-6 text-center font-BebasNeue text-xl md:text-4xl italic flex flex-col md:flex-row items-center justify-center md:gap-10 w-full">
        <Link to={"/"}>
          {" "}
          I need help on <span className="text-accent">A PITCH</span>{" "}
        </Link>
        {"     "}
        <Link to={"/"}>
          {" "}
          I need help a <span className="text-accent">
            POSSIBLE PROJECT
          </span>{" "}
        </Link>
      </div>

      <div className="w-full flex gap-4 container mx-auto px-4 flex-col md:flex-row pt-40">
        <div className="flex flex-col md:flex-row gap-4 md:w-1/2">
          <div className="flex flex-col p-6 gap-4 border-2 border-slate-400 border-dashed font-BebasNeue tracking-wide w-full">
            <p>South West</p>
            <p className="text-slate-500">
              4th floor, Granville Chambers, <br /> 21 Richmond Hill,
              Bournermouth, <br /> BH2 6BJ
            </p>
            <p className="text-slate-500">01202 971759</p>
          </div>
          <div className="flex flex-col p-6 gap-4 border-2 border-slate-400 border-dashed font-BebasNeue tracking-wide w-full">
            <p>South West</p>
            <p className="text-slate-500">
              4th floor, Granville Chambers, <br /> 21 Richmond Hill,
              Bournermouth, <br /> BH2 6BJ
            </p>
            <p className="text-slate-500">01202 971759</p>
          </div>
        </div>
        <div className="flex-1 flex flex-col p-6 gap-4 border-2 border-slate-400 border-dashed font-BebasNeue tracking-wide">
          <p>Our Newsletter</p>
          <p className="text-slate-500">
            Join our mailing list to get send regular Updates.
          </p>
          <input
            type="text"
            className="bg-slate-800 text-slate-400 p-4 rounded-md font-BebasNeue tracking-wider"
            placeholder="Your email address..."
          />
        </div>
      </div>
      <div className="container mx-auto py-6 px-4 font-BebasNeue text-xl sm:flex justify-between items-center">
        <p>@ Thin Reel Media Ltd 2025</p>
        <p>
          <span className="text-accent">EMail us: </span>{" "}
          <Link to={"/"}>Hello@thinreel.com</Link>
        </p>
      </div>
    </footer>
  );
}
