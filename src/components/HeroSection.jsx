
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import Navbar from "./Navbar";

const HeroSection = () => {
  useGSAP(() => {
    const BannerText = SplitText.create("#banner-text", {
      type: "lines,chars",
      mask: "chars",
    });
    gsap.from(BannerText.chars, {
      y: 200,
      stagger: 0.02,
      delay: 6,
      duration: 1,
      ease: "expo.out",
    });
  }, []);
  return (
    <section
      className="flex flex-col items-center justify-between relative overflow-hidden h-screen w-full"
    // style={{ height: "calc(100vh - 4rem )" }}
    >
      <div className="z-10 w-full">
        <Navbar />
      </div>
      <iframe
        className="absolute inset-0 w-full h-full object-cover object-center"
        src="https://app.vidzflow.com/v/8JliJ9Z3AP?autoplay=1&mute=1&loop=1"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      ></iframe>


      <h1
        id="banner-text"
        className="font-BebasNeue text-7xl text-center sm:text-8xl md:text-9xl xl:text-[13rem] tracking-tight pb-10 xl:leading-[11rem]"
      >
        Creative content <br /> without the chaos
      </h1>
    </section>
  );
};

export default HeroSection;
