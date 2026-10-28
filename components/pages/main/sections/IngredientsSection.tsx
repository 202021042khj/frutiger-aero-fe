import type { CSSProperties } from "react";
import SectionTitle from "@/components/common/aero/SectionTitle";
import { Aurora, SoapBubble, Sparkle } from "@/components/common/aero/Decorations";
import { INGREDIENTS, sectionId } from "@/constants/aero";
import type { Device } from "@/types/aero";
import { cn } from "@/lib/utils";

/**
 * Bubbles of different sizes instead of a card grid.
 * Mobile: one column, staggering left and right. Desktop: scattered, positions from constants.
 */
export default function IngredientsSection({ device }: { device: Device }) {
  const titleId = `${sectionId(device, "ingredients")}-title`;

  return (
    <section
      id={sectionId(device, "ingredients")}
      aria-labelledby={titleId}
      className="relative scroll-mt-14 overflow-hidden bg-linear-to-b from-[#d9f5ff] to-[#e9fbf4] px-5 py-18 md:scroll-mt-17 md:px-10 lg:px-20 xl:px-40 md:py-30"
    >
      <Aurora
        className="top-[40%] left-[15%] h-48 w-[70%] -rotate-6 opacity-60"
        colors="bg-[linear-gradient(90deg,transparent,#bffff2,transparent)]"
      />
      <SoapBubble className="top-28 right-[8%] size-16" />
      <SoapBubble className="bottom-16 left-[6%] hidden size-12 md:block" />
      <Sparkle className="top-[20%] left-[40%] size-6" />

      <div className="relative mx-auto max-w-280">
        <SectionTitle id={titleId}>What it&apos;s made of</SectionTitle>
        <ul className="mt-8 flex flex-col md:mt-12 xl:relative xl:block xl:h-[740px]">
          {INGREDIENTS.map((item, i) => (
            <li
              key={item.title}
              style={
                {
                  "--x": item.desktop.left,
                  "--y": item.desktop.top,
                  "--s": item.desktop.size,
                } as CSSProperties
              }
              className={cn(
                "relative flex size-57.5 flex-col items-center justify-center gap-2 rounded-full border-2 border-white px-10 text-center",
                "bg-[radial-gradient(circle,rgb(255_255_255/0.95)_0%,rgb(234_248_255/0.55)_62%,rgb(46_211_198/0.35)_90%,rgb(31_163_232/0.6)_100%)]",
                "shadow-[0_18px_40px_rgb(31_163_232/0.3)] backdrop-blur-sm",
                "after:pointer-events-none after:absolute after:top-[5%] after:left-[22%] after:h-[23%] after:w-[56%] after:rounded-[50%]",
                "after:bg-[linear-gradient(180deg,rgb(255_255_255/0.85),rgb(255_255_255/0))]",
                i % 2 === 0 ? "self-start" : "self-end",
                i > 0 && "-mt-10",
                "md:size-70 md:gap-2.5 md:px-12 xl:absolute xl:top-(--y) xl:left-(--x) xl:mt-0 xl:size-(--s)",
              )}
            >
              <h3 className="text-2xl font-medium md:text-[28px]">{item.title}</h3>
              <p className="text-[15px] leading-[1.45] md:text-[17px]">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
