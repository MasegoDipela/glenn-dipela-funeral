import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProgrammeSection from "@/components/ProgrammeSection";
import ObituarySection from "@/components/ObituarySection";
import PracticalInfo from "@/components/PracticalInfo";
import FooterTribute from "@/components/FooterTribute";
import MobileActionBar from "@/components/MobileActionBar";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main" className="pb-20 md:pb-0">
        <Hero />
        <div aria-hidden="true" className="hairline mx-auto max-w-6xl" />
        <ProgrammeSection />
        <ObituarySection />
        <PracticalInfo />
        <FooterTribute />
      </main>
      <MobileActionBar />
    </>
  );
}
