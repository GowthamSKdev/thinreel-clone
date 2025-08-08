import Agencyallies from "../components/AgencyAllies";
import ContentSection from "../components/ContentSection";
import CreativitySection from "../components/CreativitySection";
import HeroSection from "../components/HeroSection";
import PassionProject from "../components/Passionproject";
import ProjectSection from "../components/ProjectSection";
import WalkerAgency from "../components/WalkerAgency";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ContentSection />
      <CreativitySection />
      <ProjectSection />
      <Agencyallies />
      <PassionProject />
      <WalkerAgency />
    </>
  );
}
