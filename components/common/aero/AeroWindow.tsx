import Orb from "@/components/common/aero/Orb";
import { cn } from "@/lib/utils";

interface AeroWindowProps {
  title: string;
  /** Id of the element labelled by the title bar, for screen readers */
  titleId?: string;
  className?: string;
  bodyClassName?: string;
  children: React.ReactNode;
}

const CAPTION_BUTTONS = [
  { name: "min", glyph: "—", width: "w-7.5", colors: "from-[#d9f2ff] from-50% to-[#7fb8da] to-50%" },
  { name: "max", glyph: "□", width: "w-7.5", colors: "from-[#d9f2ff] from-50% to-[#7fb8da] to-50%" },
  { name: "close", glyph: "✕", width: "w-11.5", colors: "from-[#f7a08f] from-50% to-[#c0301c] to-50%" },
] as const;

/**
 * Vista-style window: glass title bar with caption buttons, frosted body.
 * The caption buttons are decoration, so they are hidden from assistive tech.
 */
export default function AeroWindow({ title, titleId, className, bodyClassName, children }: AeroWindowProps) {
  return (
    <div className={cn("aero-glass overflow-hidden rounded-[14px]", className)}>
      <div className="flex items-center gap-2.5 bg-[linear-gradient(180deg,rgb(255_255_255/0.55),rgb(191_230_250/0.35))] py-2 pr-2 pl-3.5 md:py-2.5 md:pl-4.5">
        <Orb className="size-4.5 md:size-5.5" />
        <p id={titleId} className="flex-1 text-sm font-medium text-aero-deep md:text-base">
          {title}
        </p>
        <span aria-hidden className="flex gap-0.5">
          {CAPTION_BUTTONS.map((b) => (
            <span
              key={b.name}
              className={cn(
                "flex h-5 items-center justify-center rounded-sm border border-white/80 bg-linear-to-b text-[11px] font-semibold text-white [text-shadow:0_1px_1px_rgb(6_33_63/0.6)]",
                b.width,
                b.colors,
              )}
            >
              {b.glyph}
            </span>
          ))}
        </span>
      </div>
      <div className={cn("bg-white/55", bodyClassName)}>{children}</div>
    </div>
  );
}
