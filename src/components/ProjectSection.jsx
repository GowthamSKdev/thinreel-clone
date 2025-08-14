import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { Link } from "react-router-dom";

import LIBA_video from "../assets/video/Liba Outbound Training 2025.mp4"
import sriMahalakshmi_video from "../assets/video/0001_Sri_Mahalakshmi_Silks_Final.mp4"
import theRise from "../assets/video/RISE JOB FAIR.mp4"

const Projects = [
  { type: 'LIBA', title: 'outbound training', tags: ['lifeStyle', 'Training'], image: LIBA_video },
  { type: 'The Rise', title: 'Give Life', tags: ['Job Fare', 'Training'], image: theRise },
  { type: 'Sri Mahalakshmi silks', title: 'Textile', tags: ['Kanchipuram silks', 'lifeStyle',], image: sriMahalakshmi_video },
  // { type: 'Evolution', title: 'Herbalife', tags: ['social Campaign', 'lifeStyle', 'EMEA'], image: 'https://cdn.prod.website-files.com/68108200d9cc816e387d7156/68142564bd4ede3d27e71055_230904_Herbalife_DAY_2_HIIT_Drinking_3697.jpg' },
  // { type: 'Touch Grass', title: 'Ordnance Survey', tags: ['social first', 'Outdoor', 'Gen-Z'], image: 'https://cdn.prod.website-files.com/68108200d9cc816e387d7156/6836db55d5a867c877473873_img0015.jpg' },
  // { type: 'Transit custim creators', title: 'Ford', tags: ['Documentary', 'Automotive', 'Entrepreneurs'], image: 'https://cdn.prod.website-files.com/68108200d9cc816e387d7156/681426160347a3ec7b66f958_DSCF4608.jpg' },
]

const ProjectSection = () => {
  useGSAP(() => {
    const BannerText = SplitText.create(".project-main-text", {
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
        trigger: ".project-section",
        start: "top 50%",
        end: "bottom top",

      },
    });
  }, []);
  return (
    <section className="project-section pt-40">
      <h2 className="project-main-text uppercase font-BebasNeue text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight text-center xl:leading-[7rem]">
        Powerfull works <br /> that performs
      </h2>
      <p className="text-center font-BebasNeue text-xl md:2xl lg:3xl xl:text-4xl">
        our portfolio{" "}
      </p>

      {/* Project showcase */}
      <div className="mt-20">
        {Projects.map((project, index) => (
          <Link to={'/'} key={index}
            className="bg-white h-screen relative flex items-center overflow-hidden">

            {/* <img data-speed="auto" src={project.image} alt={project.title} className="absolute inset-0 w-full h-[160%] object-cover object-center -z-0" /> */}

            <video data-speed="auto" className="absolute inset-0 w-full h-[160%] object-cover object-center -z-0" loop muted autoPlay>
              <source src={project.image} type="video/mp4" />
            </video>

            <div className="container mx-auto font-BebasNeue z-10 w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center px-4 py-2 hover:bg-background hover:text-accent">
              <h2 className="text-7xl lg:text-5xl text-center">{project.type}</h2>
              <p className="text-xl italic">{project.title}</p>
              <p className="hidden lg:flex space-x-1">{project.tags.map((t, i) => (
                <span key={i} className="p-2 border border-dashed border-slate-300 bg-slate-800/20" >{t}</span>
              ))}</p>
            </div>

          </Link>
        ))}

      </div>
    </section>
  );
};

export default ProjectSection;
