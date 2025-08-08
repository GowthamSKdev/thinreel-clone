import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

const ContentSection = () => {
  useGSAP(() => {
    const BannerText = SplitText.create(".animate-text", {
      type: "lines,chars",
      mask: "chars",
    });
    gsap.from(BannerText.chars, {
      y: 200,
      stagger: 0.02,
      // delay: 6,
      duration: 1,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".content-section",
        start: "top 50%",
        end: "bottom top",

      },
    });
  }, []);
  return (
    <section className="bg-background content-section container mx-auto px-4 flex flex-col justify-between items-center mt-40 lg:mt-56">
      <h2 className="animate-text uppercase font-BebasNeue text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight text-center xl:leading-[7rem]">
        You don't need more <br /> Pressures + problems
      </h2>
      <p className="font-BebasNeue text-pretty max-w-[380px] text-center  text-neutral-500 sm:hidden">You’re constantly pushed to deliver more, faster and better. But production can leave you with headaches, from unclear costs and missed deadlines to creative clashes.</p>
      <div className="h-80 flex gap-8 justify-center items-center">
        <img src="https://cdn.prod.website-files.com/68108200d9cc816e387d7156/681326067590af4387485810_DSCF8977.jpg" alt="founder1" className="h-[250px] sm:h-[300px] xl:h-[350px] -rotate-12" />
        <img src="https://cdn.prod.website-files.com/68108200d9cc816e387d7156/6813260cdbb49642914d7fa1_DSCF3365.jpg" alt="founder2" className="h-[250px] sm:h-[300px] xl:h-[350px] rotate-12" />
      </div>
      <p className="animate-text uppercase font-BebasNeue text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight text-center xl:leading-[7rem] ">
        Just Agile production <br />{" "}
        <span className="text-accent">that's ready to roll</span>
      </p>
      <p className="font-BebasNeue text-pretty max-w-[380px] text-center  text-neutral-500 sm:hidden">We work alongside agencies that need incredible content without the dramas. With crew, kit and post in-house, we help you get to great outcomes faster by working leaner.</p>
      <video
        autoPlay
        playsInline
        muted
        loop
        className="h-1/4 visible w-full"
      >
        <source
          src="https://player.vimeo.com/progressive_redirect/playback/1087855770/rendition/2160p/file.mp4?loc=external&signature=2b49f89bc9e84dd5c8404674e752aa71d15dd6f29af6fa067f200b8d84e558fb"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

    </section>
  );
};

export default ContentSection;
