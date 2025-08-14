import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import WiseCrack_video from "../assets/video/WISECRACK.mp4"
const Passion = [
    { title: "Big brief or tight turnaround", desc: 'Production doesn’t need to be complicated. We’re built for agencies that need quality content without the delays, dramas or budget creep.', img: 'https://cdn.prod.website-files.com/681062e6060f2b85468c82cf/681822b6e8a9844055e702db_big-brief-1.svg' },
    { title: "A love for on location", desc: 'From city streets to remote landscapes, we thrive on location. Our in-house crew is built for dynamic shoots wherever the creative takes us.', img: 'https://cdn.prod.website-files.com/681062e6060f2b85468c82cf/6818239fea635a7312c97763_on-location-1.svg' },
    { title: "All handled in-house", desc: 'You bring the big ideas, we make them happen. With a full in-house crew and kit, we turn strategies and concepts into standout content clients love.', img: 'https://cdn.prod.website-files.com/681062e6060f2b85468c82cf/68182424e86f67f9a4af6106_in-house-1.svg' },
]
export default function PassionProject() {

    useGSAP(() => {
        const BannerText = SplitText.create(".passion-text", {
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
                trigger: ".passion-section",
                start: "top 50%",
                end: "bottom top",

            },
        });
    }, []);

    return (
        <section className="passion-section h-screen relative overflow-hidden">
            {/* <img data-speed="auto" className="absolute inset-0 -z-0
                    h-[150%] object-center object-cover" src="https://cdn.prod.website-files.com/68108200d9cc816e387d7156/6815587a392b43db29fc3bdc_DSCF6541-usp.jpg" alt="" /> */}
            <video data-speed="auto" className="absolute inset-0 -z-0
                    h-[150%] object-center object-cover" loop muted autoPlay>
                <source src={WiseCrack_video} type="video/mp4" />
            </video>
            <div className="absolute inset-0 h-[120%]  bg-gradient-to-t from-black/80 to-black/0"></div>

            <div className="container mx-auto p-4 h-full w-full flex flex-col items-center justify-end text-center font-BebasNeue z-10 relative">
                <h2 className="passion-text text-6xl md:text-8xl lg:text-9xl mb-10">Never just a job,<br /> always a passion project</h2>
                <div className="flex flex-col lg:flex-row gap-10">
                    {Passion.map((p, index) => (
                        <div className="flex gap-4 w-full lg:max-w-1/3" key={index}>
                            <img src={p.img} alt={p.title} height={100} width={100} className="object-center object-contain" />

                            <p className="text-left flex justify-start flex-col items-start">
                                <span className="text-xl lg:text-2xl xl:text-3xl">{p.title}</span> <br />
                                <span>{p.desc}</span>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}