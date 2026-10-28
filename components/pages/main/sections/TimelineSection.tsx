import SectionTitle from "@/components/common/aero/SectionTitle";
import { Aurora, Sparkle } from "@/components/common/aero/Decorations";
import { TIMELINE, sectionId } from "@/constants/aero";
import type { Device } from "@/types/aero";

/** Dark "Aurora" section, after the Vista default wallpaper. */
export default function TimelineSection({ device }: { device: Device }) {
  const titleId = `${sectionId(device, "timeline")}-title`;

  return (
    <section
      id={sectionId(device, "timeline")}
      aria-labelledby={titleId}
      className="relative scroll-mt-14 overflow-hidden bg-linear-to-b from-aero-night to-aero-deep px-5 py-18 md:scroll-mt-17 md:px-10 lg:px-20 xl:px-40 md:py-30"
    >
      <Aurora
        className="top-24 -left-40 h-60 w-[90%] -rotate-12 opacity-70"
        colors="bg-[linear-gradient(90deg,transparent,#3dffa8,transparent)]"
      />
      <Aurora
        className="top-6 -right-20 h-52 w-[85%] rotate-10 opacity-60"
        colors="bg-[linear-gradient(90deg,transparent,#6fe7ff,transparent)]"
      />
      <Aurora
        className="bottom-10 left-[10%] h-44 w-[90%] -rotate-4 opacity-35"
        colors="bg-[linear-gradient(90deg,transparent,#9bff7a,transparent)]"
      />
      <Sparkle className="top-[16%] right-[14%] size-6" />

      <div className="relative mx-auto max-w-280">
        <SectionTitle id={titleId} className="text-white">
          Ten glossy years
        </SectionTitle>
        <ol className="aero-glass-dark mt-8 flex flex-col gap-7 rounded-3xl p-6 md:mt-12 lg:flex-row md:gap-6 md:p-10">
          {TIMELINE.map((entry) => (
            <li key={entry.year} className="flex flex-1 flex-col gap-3">
              <span
                aria-hidden
                className="size-5 rounded-full border-2 border-white bg-[radial-gradient(circle_at_40%_30%,#fff,#9bf0e0_50%,#1fa3e8)] shadow-[0_0_12px_rgb(46_211_198/0.8)]"
              />
              <time className="text-[44px] leading-none font-light text-[#9be9ff]">{entry.year}</time>
              <p className="text-[17px] leading-normal text-aero-glass">{entry.description}</p>
            </li>
          ))}
        </ol>
        {/* Reflection on the "floor" under the glass rail */}
        <div
          aria-hidden
          className="mt-2 hidden h-35 lg:block rounded-3xl bg-linear-to-b from-[#9be9ff]/18 to-transparent"
        />
      </div>
    </section>
  );
}
