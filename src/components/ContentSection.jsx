import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

import Santhosh_img from "../assets/Images/Santhosh.jpg"
import Team_image from "../assets/Images/team_Img.JPG"

import Indoor_video from "../assets/video/indoor_video.mp4"
import Outdoor_video from "../assets/video/outdoor_video.mp4"


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
      <h2 className="animate-text uppercase font-BebasNeue text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight text-center xl:leading-[7rem] text-nowrap w-full">
        You don't need more <br /> Pressures + problems
      </h2>
      <p className="font-BebasNeue text-pretty max-w-[380px] text-center  text-neutral-500 sm:hidden">You’re constantly pushed to deliver more, faster and better. But production can leave you with headaches, from unclear costs and missed deadlines to creative clashes.</p>

      <div className="h-80 flex gap-4 justify-center items-center">
        <div className="h-[250px] sm:h-[300px] xl:h-[350px] w-[150px] lg:w-[250px] -rotate-12 overflow-hidden rounded-xl shadow-lg ">
          {/* <img src={Santhosh_img} alt="founder1" className="object-cover w-full h-full" /> */}

          <video autoPlay playsInline muted loop className="w-full h-full object-cover object-bottom">
            <source src={Indoor_video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="h-[250px] sm:h-[300px]  xl:h-[350px] rotate-12 w-[150px] lg:w-[250px] overflow-hidden rounded-xl shadow-lg ">
          <video autoPlay playsInline muted loop className="w-full h-full object-cover object-bottom">
            <source src={Outdoor_video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <p className="animate-text uppercase font-BebasNeue text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight text-center xl:leading-[7rem] w-full text-nowrap">
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
