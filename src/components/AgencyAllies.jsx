import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { Link } from "react-router-dom";


import BewellhospitalLogo from "../assets/Images/Brand_logos/bewellhospital.png"
import OysterLogo from "../assets/Images/Brand_logos/oyster-logo.png"
import PerrysLogo from "../assets/Images/Brand_logos/perrys-new-logo.png"
import SathyaAgenciesLogo from "../assets/Images/Brand_logos/sathya-agencies-pvt-ltd-logo-png_seeklogo-340822-(1).png"
import SignaTechLogo from "../assets/Images/Brand_logos/signa-techlogo.png"
import SixDotsLogo from "../assets/Images/Brand_logos/sixdots.png"
import TdiLogo from "../assets/Images/Brand_logos/tdi-logo.png"
import TPELogo from "../assets/Images/Brand_logos/TPE.png"


const AgenciesWorldwide = [
    { id: 1, img: BewellhospitalLogo },
    { id: 2, img: OysterLogo },
    { id: 3, img: PerrysLogo },
    { id: 4, img: SathyaAgenciesLogo },
    { id: 5, img: SignaTechLogo },
    { id: 6, img: SixDotsLogo },
    { id: 7, img: TdiLogo },
    { id: 8, img: TPELogo },
]



// const HelpingBrands = [
//     { id: 1, img: '/Helping Brands/brand1.svg' },
//     { id: 2, img: '/Helping Brands/brand2.svg' },
//     { id: 3, img: '/Helping Brands/brand3.svg' },
//     { id: 4, img: '/Helping Brands/brand4.svg' },
//     { id: 5, img: '/Helping Brands/brand5.svg' },
//     { id: 6, img: '/Helping Brands/brand6.svg' },
// ]

export default function Agencyallies() {

    useGSAP(() => {
        const BannerText = SplitText.create(".Agency-text", {
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
                trigger: ".Agency-section",
                start: "top 50%",
                end: "bottom top",

            },
        });
    }, []);

    return (
        <section className="Agency-section pt-60">
            <>
                <div className=" container mx-auto flex justify-center items-center flex-col text-center px-4">
                    <p className="tracking-wide mb-10">On brief and on budget, from pitch to post.</p>
                    <h2 className="Agency-text font-BebasNeue text-7xl sm:text-9xl md:text-[10rem] tracking-tight"> <span className=" text-6xl sm:text-8xl md:text-[10rem]">
                        We're all in as</span>  <br />
                        agency allies</h2>
                    <p className=" font-BebasNeue text-pretty max-w-2xl w-full mt-8 tracking-wider">We’ve spent years inside and alongside agencies. So we know how much this matters. We know what clients expect. And we know the risks of working with the wrong production partners.</p>
                    <p className="font-BebasNeue mt-4 text-pretty max-w-2xl w-full tracking-wider">That’s why we’re all in as agency allies. We’re there whether you need to bounce some ideas off us, or bring us in to tell a brand’s story. Because you can find a million production teams who just point and shoot from a distance. We’d rather be in the trenches with you.</p>
                </div>
                <div className="container mx-auto w-full flex flex-col md:flex-row my-14 items-center gap-4 ">
                    <div className="w-full  border border-dashed border-slate-400 p-4 rounded-md">
                        <p className="text-center">Alongside amazing agencies</p>
                        <div className="overflow-hidden whitespace-nowrap w-full  py-4">
                            <div className="flex animate-marquee gap-10">
                                {[...AgenciesWorldwide, ...AgenciesWorldwide, ...AgenciesWorldwide, ...AgenciesWorldwide, ...AgenciesWorldwide].map((brand, index) => (
                                    <img
                                        loading="lazy"
                                        key={index}
                                        src={brand.img}
                                        alt={`brand-${index}`}
                                        className="size-14 md:size-18 xl:size-36 object-contain object-center"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* <div className="w-full lg:w-1/2 border border-dashed border-slate-400 p-4 rounded-md">
                        <p className="text-center">Helping brands perform brilliantly</p>
                        <div className="overflow-hidden whitespace-nowrap w-full  py-4">
                            <div className="flex animate-marquee gap-8">
                                {[...HelpingBrands, ...HelpingBrands, ...HelpingBrands].map((brand, index) => (
                                    <img
                                        loading="lazy"
                                        key={index}
                                        src={brand.img}
                                        alt={`brand-${index}`}
                                        className="h-10 md:h-14 xl:h-18 w-auto object-contain"
                                    />
                                ))}
                            </div>
                        </div>

                    </div> */}

                </div>
            </>
            <div className="container mx-auto px-4  bg-[#5B0017] font-BebasNeue flex flex-col lg:flex-row justify-between items-center">
                <p className="text-accent text-7xl italic py-6 pb-20 lg:pb-6">Ready to roll?</p>

                <div className="flex flex-col lg:flex-row w-full lg:w-1/2 justify-between items-center text-2xl md:text-2xl xl:text-4xl">
                    <p className="w-full border-t bordor-l-0 lg:border-l lg:border-t-0 border-dashed border-accent text-center h-full py-6 px-4">I need help on <span className="text-accent">a pitch</span></p>
                    <p className="w-full border-t bordor-l-0 lg:border-l lg:border-t-0 border-dashed border-accent text-center h-full py-6">I have a <span className="text-accent">possible project</span></p>
                </div>
            </div>
        </section >
    )
}