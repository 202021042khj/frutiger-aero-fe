import DesktopTaskbarSection from "@/components/pages/main/sections/DesktopTaskbarSection";
import FooterSection from "@/components/pages/main/sections/FooterSection";
import FutureSection from "@/components/pages/main/sections/FutureSection";
import HeroSection from "@/components/pages/main/sections/HeroSection";
import IngredientsSection from "@/components/pages/main/sections/IngredientsSection";
import IntroSection from "@/components/pages/main/sections/IntroSection";
import OutroSection from "@/components/pages/main/sections/OutroSection";
import TimelineSection from "@/components/pages/main/sections/TimelineSection";

export default function DesktopPage() {
  return (
    <div id="top" className="flex flex-1 flex-col bg-[#e9fbf4] font-aero text-aero-deep">
      <DesktopTaskbarSection />
      <main>
        <HeroSection device="desktop" />
        <IntroSection device="desktop" />
        <IngredientsSection device="desktop" />
        <TimelineSection device="desktop" />
        <FutureSection device="desktop" />
        <OutroSection device="desktop" />
      </main>
      <FooterSection />
    </div>
  );
}
