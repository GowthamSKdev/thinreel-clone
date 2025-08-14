
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import Navbar from "./Navbar";
import promoVideo from "../assets/video/wisecrack promo.mp4"

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
      {/* <iframe
        className="absolute inset-0 w-full h-full object-cover object-center"
        src="https://app.vidzflow.com/v/8JliJ9Z3AP?autoplay=1&mute=1&loop=1"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      ></iframe> */}

      <video className="absolute inset-0 w-full h-full object-cover object-center" loop muted autoPlay>
        <source src={promoVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 h-[120%]  bg-gradient-to-t from-black/80 to-black/0 "></div>
      <div className=" flex justify-center items-center md:justify-end md:items-end w-full h-full">

        <h1
          id="banner-text"
          className="w-full z-10 font-BebasNeue text-5xl text-center sm:text-8xl md:text-9xl xl:text-[13rem] tracking-tight pb-10 xl:leading-[11rem]"
        >
          Creative content <br /> without the chaos
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
