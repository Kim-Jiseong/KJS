import Profile from "../components/Profile";
import Skills from "../components/Skills/Skills";
import Portfolio from "../components/Portfolio/Portfolio";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";
import LanguageToggle from "./components/LanguageToggle";
import HeroSection from "@/components/HeroSection";
import WorkExperience from "../components/WorkExperience";
import OtherExperience from "@/components/OtherExperience";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <HeroSection />
      <div className="relative z-10 container mx-auto bg-background/80 px-8 py-8 rounded-xl">
        <LanguageToggle />
        <Profile />
        <WorkExperience />
        <OtherExperience />
        <Skills />
        <Portfolio />
        <Achievements />
      </div>
      <Contact />
    </main>
  );
}
