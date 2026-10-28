import SectionTitle from "@/components/common/aero/SectionTitle";
import { SoapBubble, Sparkle } from "@/components/common/aero/Decorations";
import { sectionId } from "@/constants/aero";
import type { Device } from "@/types/aero";

/** Same button, two eras: shows "went flat" instead of just saying it. */
export default function OutroSection({ device }: { device: Device }) {
  const titleId = `${sectionId(device, "where-it-went")}-title`;

  return (
    <section
      id={sectionId(device, "where-it-went")}
      aria-labelledby={titleId}
      className="relative overflow-hidden bg-linear-to-b from-[#c9f0ff] to-[#f4fbff] px-5 py-18 md:px-10 lg:px-20 xl:px-40 md:py-30"
    >
      <SoapBubble className="top-24 right-[14%] size-16 md:size-28" />
      <SoapBubble className="top-60 right-[6%] hidden size-15 md:block" />
      <Sparkle className="top-[14%] right-[11%] size-7" />

      <div className="relative mx-auto max-w-280">
        <SectionTitle id={titleId}>Then the future went flat</SectionTitle>

        <div className="mt-7 grid grid-cols-2 gap-3.5 md:mt-12 md:gap-6 lg:flex lg:gap-12">
          <figure className="aero-glass flex flex-col items-start gap-3 rounded-[20px] p-4.5 lg:w-100 md:gap-4.5 md:rounded-3xl md:p-10">
            <p className="text-[34px] leading-none font-light text-aero-sky md:text-6xl">2009</p>
            <span aria-hidden className="aero-gel px-5 py-2.5 text-sm font-medium md:px-7.5 md:py-3.5 md:text-base">
              Button
            </span>
            <figcaption className="text-sm leading-normal md:text-[17px]">Gloss, gradients and a glow.</figcaption>
          </figure>
          <figure className="aero-glass flex flex-col items-start gap-3 rounded-[20px] p-4.5 lg:w-100 md:gap-4.5 md:rounded-3xl md:p-10">
            <p className="text-[34px] leading-none font-light text-aero-sky md:text-6xl">2013</p>
            <span
              aria-hidden
              className="rounded-sm bg-[#1a93da] px-5 py-2.5 text-sm font-medium text-white md:px-7.5 md:py-3.5 md:text-base"
            >
              Button
            </span>
            <figcaption className="text-sm leading-normal md:text-[17px]">One color, no light source.</figcaption>
          </figure>
        </div>

        <div className="aero-glass mt-7 flex flex-col gap-3.5 rounded-3xl p-6 md:mt-14 md:ml-auto md:w-140 md:gap-5 md:p-12">
          <p className="text-[17px] leading-normal md:text-xl md:leading-[1.6]">
            By 2013 gloss looked dated. Screens got sharper, interfaces went flat, and some of the optimism
            faded with the shine.
          </p>
          <p className="text-[17px] leading-normal md:text-xl md:leading-[1.6]">
            Years later the internet gave the style a name, and it keeps coming back as nostalgia for a
            future that never quite arrived.
          </p>
        </div>
      </div>
    </section>
  );
}
