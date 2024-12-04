import Profile from "../../components/Profile";
import Skills from "../../components/Skills/Skills";
import Portfolio from "../../components/Portfolio/Portfolio";
import Achievements from "../../components/Achievements";
import Contact from "../../components/Contact";
import LanguageToggle from "../components/LanguageToggle";
import HeroSection from "@/components/HeroSection";
import WorkExperience from "../../components/WorkExperience";
import OtherExperience from "@/components/OtherExperience";
import { getDictionary } from "./dictionaries";

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);

  return (
    <main className="relative min-h-screen">
      <LanguageToggle lang={lang} />
      <HeroSection content={dict.hero} />
      <div className="relative z-10 container mx-auto bg-background/80 px-8 py-8 rounded-xl overflow-x-hidden mb-6">
        <Profile content={dict.profile} />
        <WorkExperience content={dict.workExperience} />
        <OtherExperience content={dict.otherExperience} />
        <Skills content={dict.skills} />
        <Portfolio content={dict.portfolio} />
        <Achievements content={dict.achievements} />
      </div>
      <Contact content={dict.contact} />
    </main>
  );
}
