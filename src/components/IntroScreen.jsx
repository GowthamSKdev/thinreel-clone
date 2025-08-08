import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

export default function IntroScreen() {
  useGSAP(() => {
    document.fonts.ready.then(() => {
      const IntroText = SplitText.create("#IntroText", {
        type: "lines,chars",
        mask: "chars",
      });

      gsap.fromTo(
        IntroText.chars,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          stagger: 0.02,
          ease: "expo.out",
        }
      );

      gsap.to(IntroText.chars, {
        y: -100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.02,
        ease: "expo.inOut",
        delay: 3,
      });

      gsap.to("#IntroScreen", {
        height: 0,
        duration: 2,
        ease: "power3.inOut",
        delay: 4.5,
      });
    });
  }, []);

  return (
    <section
      id="IntroScreen"
      className="h-screen fixed top-0 left-0 inset-0 z-[999] flex justify-center items-center bg-[#1d1f2a] overflow-hidden font-BebasNeue"
    >
      <h1 id="IntroText" className="text-9xl">
        Thinreel
      </h1>
    </section>
  );
}
