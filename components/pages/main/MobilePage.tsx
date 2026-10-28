import FooterSection from "@/components/pages/main/sections/FooterSection";
import FutureSection from "@/components/pages/main/sections/FutureSection";
import HeroSection from "@/components/pages/main/sections/HeroSection";
import IngredientsSection from "@/components/pages/main/sections/IngredientsSection";
import IntroSection from "@/components/pages/main/sections/IntroSection";
import MobileTaskbarSection from "@/components/pages/main/sections/MobileTaskbarSection";
import OutroSection from "@/components/pages/main/sections/OutroSection";
import TimelineSection from "@/components/pages/main/sections/TimelineSection";

export default function MobilePage() {
  return (
    <div id="m-top" className="flex flex-1 flex-col bg-[#e9fbf4] font-aero text-aero-deep">
      <MobileTaskbarSection />
      <main>
        <HeroSection device="mobile" />
        <IntroSection device="mobile" />
        <IngredientsSection device="mobile" />
        <TimelineSection device="mobile" />
        <FutureSection device="mobile" />
        <OutroSection device="mobile" />
      </main>
      <FooterSection />
    </div>
  );
}
