import AeroWindow from "@/components/common/aero/AeroWindow";
import Orb from "@/components/common/aero/Orb";
import SectionTitle from "@/components/common/aero/SectionTitle";
import { Aurora, SoapBubble, Sparkle } from "@/components/common/aero/Decorations";
import { sectionId } from "@/constants/aero";
import type { Device } from "@/types/aero";

export default function IntroSection({ device }: { device: Device }) {
  const titleId = `${sectionId(device, "what-it-is")}-title`;

  return (
    <section
      id={sectionId(device, "what-it-is")}
      aria-labelledby={titleId}
      className="relative scroll-mt-14 overflow-hidden bg-linear-to-b from-[#9fddfb] to-[#d9f5ff] px-5 py-18 md:scroll-mt-17 md:px-10 lg:px-20 xl:px-40 md:py-30"
    >
      <Aurora
        className="top-10 -left-24 h-44 w-[70%] -rotate-10 opacity-60"
        colors="bg-[linear-gradient(90deg,transparent,#b6ff9b,transparent)]"
      />
      <Aurora
        className="-right-20 bottom-6 h-40 w-[75%] rotate-8 opacity-60"
        colors="bg-[linear-gradient(90deg,transparent,#9be9ff,transparent)]"
      />
      <SoapBubble className="top-22 right-[12%] hidden size-22 md:block" />
      <SoapBubble className="right-[6%] bottom-12 size-14" />
      <Sparkle className="top-[34%] right-[13%] hidden size-7 md:block" />

      <div className="relative mx-auto flex max-w-280 items-center gap-14">
        <AeroWindow
          title="What is Frutiger Aero?"
          className="w-full md:max-w-215"
          bodyClassName="flex flex-col gap-4 px-6 pt-7 pb-8 md:gap-5.5 md:px-14 md:pt-12 md:pb-14"
        >
          <SectionTitle id={titleId}>A look the 2000s believed in</SectionTitle>
          <p className="text-[17px] leading-normal md:text-xl md:leading-[1.6]">
            Frutiger Aero is the name people now give to the glossy, sky-blue style that ran through
            consumer tech from about 2004 to 2013. Think Windows Vista wallpapers, bubbly music player
            skins, and ads full of water, grass and glass.
          </p>
          <p className="text-[17px] leading-normal md:text-xl md:leading-[1.6]">
            The name joins Adrian Frutiger&apos;s humanist typeface, used across signage and screens of the
            era, with Microsoft&apos;s Aero glass interface.
          </p>
        </AeroWindow>
        <Orb className="hidden size-60 lg:block xl:size-[300px]" />
      </div>
    </section>
  );
}
