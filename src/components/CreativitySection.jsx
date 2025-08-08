import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import React from "react";

const CreativitySection = () => {
  useGSAP(() => {
    const BannerText = SplitText.create(".creative-main-text", {
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
        trigger: ".creative-section",
        start: "top 50%",
        end: "bottom top",

      },
    });
  }, []);

  const Strategies = [
    { id: '(01)', name: "Pitch In™", desc: 'When you’re pitching, we can help you with scoping, pricing and creative feasibility so you know what’s possible before clients approve it.' },
    { id: '(02)', name: "Pre", desc: 'Detailed planning, creative input and seamless coordination to make every shoot run smoothly and deliver exactly what your client expects.' },
    { id: '(03)', name: "Production", desc: "Agile, scalable shoots that flex around your clients' demands. Fast, efficient and creative, whether it’s a big campaign or a quick-turnaround." },
    { id: '(04)', name: "Post", desc: 'Editing, motion graphics, animation and sound design all handled in-house to deliver polished final assets that impress.' },
  ]

  return (
    <section className="creative-section container mx-auto px-4">
      <h2 className="creative-main-text text-center text-7xl uppercase font-BebasNeue sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[22rem] lg:text-left  xl:leading-[19rem]">
        Kit. crew. <br /> Creativity.{" "}
        {/* <span className="text-5xl">It's all handled.</span> */}
      </h2>
      <div className="space-y-6 mt-30">
        {Strategies.map((strategy, index) => (

          <div key={index} className="flex flex-col lg:flex-row font-BebasNeue border border-dashed text-2xl border-slate-400 h-full">
            <p
              className="flex justify-start items-center w-full border-b
          lg:border-b-0 border-dashed border-slate-400 h-full"
            >
              <span
                className="p-10 border-r
           border-dashed border-slate-400 h-full"
              >
                {strategy.id}
              </span>
              <span
                className="p-6 text-5xl lg:text-7xl lg:border-r
              border-r-0 border-dashed border-slate-400 h-full w-full italic"
              >
                {strategy.name}
              </span>
            </p>
            <p className="p-6 font-sans h-full w-full font-normal tracking-tight text-lg">
              {strategy.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CreativitySection;
