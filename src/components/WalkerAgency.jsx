import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

export default function WalkerAgency() {
    useGSAP(() => {
        const BannerText = SplitText.create(".WalkerAgency-text", {
            type: "lines,chars",
            mask: "chars",
        });
        const ZennenText = SplitText.create(".ZennenThomas-text", {
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
                trigger: ".WalkerAgency-section",
                start: "top 50%",
                end: "bottom top",
            },
        });
        gsap.from(ZennenText.chars, {
            y: 600,
            stagger: 0.02,
            // delay: 6,
            duration: 1.5,
            ease: "expo.out",
            scrollTrigger: {
                trigger: ".ZennenThomas-section",
                start: "top 50%",
                end: "bottom top",
            },
        });
    }, []);
    return (
        <>
            <section className="WalkerAgency-section py-40 pt-80">
                <h2 className="WalkerAgency-text text-5xl sm:text-7xl md:text-8xl xl:text-9xl font-BebasNeue text-center">“we've amassed some <br /> incredible pieces of creative <br /> that everyone's proud of”</h2>
                <p className="text-2xl text-center mt-10 flex flex-col font-BebasNeue tracking-wide">
                    <span>Zennen Thomas</span>
                    <span className="text-sm text-neutral-500">Walker Agency</span>
                </p>
            </section>
            <section className="ZennenThomas-section container mx-auto px-4 py-20 flex flex-col items-end lg:flex-row gap-10 ">
                <div className="lg:w-3/4 h-[100vh] w-full overflow-hidden relative">
                    <img data-speed="auto" className="absolute inset-0
                    h-[150%] object-center object-cover" loading="lazy" src="https://cdn.prod.website-files.com/68108200d9cc816e387d7156/68158bc15fcc8db5a1eaf381_DSCF1025.jpg" alt="" />
                </div>
                <div className=" font-BebasNeue text-xl lg:w-1/2">
                    <h2 className="ZennenThomas-text font-BebasNeue text-6xl lg:text-8xl tracking-tighter">The right people, <br /> right there with you.</h2>
                    <p className="mt-6">Of course we’re obsessed with brand storytelling and visual narratives. These are table stakes for any creative production company.</p>
                    <p className="mt-6">But in the chaos of a client project, you need friendly people you can bounce ideas off. Problem solvers who go further to find a great angle on your ideas. And a team that takes the weight off because you trust they’ll get it done, and done with style.</p>
                </div>
            </section>
        </>
    )
}