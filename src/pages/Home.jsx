import Agencyallies from "../components/AgencyAllies";
import ContactSection from "../components/ContactSection";
import ContentSection from "../components/ContentSection";
import CreativitySection from "../components/CreativitySection";
import HeroSection from "../components/HeroSection";
import PassionProject from "../components/Passionproject";
import ProjectSection from "../components/ProjectSection";
import WalkerAgency from "../components/WalkerAgency";

export default function Home() {
  return (
    <>
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <ContentSection />
      </div>
      <CreativitySection />
      <div id="work">
        <ProjectSection />
      </div>
      <div id="world">
        <Agencyallies />
      </div>
      <PassionProject />
      <WalkerAgency />
      <div id="contact">
        <ContactSection />
      </div>
    </>
  );
}
