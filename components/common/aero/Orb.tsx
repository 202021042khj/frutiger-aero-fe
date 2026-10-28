import { cn } from "@/lib/utils";

/** Pearl orb, a nod to the Vista start button. Purely decorative. */
export default function Orb({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "relative inline-block shrink-0 rounded-full border-[1.5px] border-white/90",
        "bg-[radial-gradient(circle_at_35%_30%,#fff_0%,#9bf0e0_25%,#2ed3c6_60%,#0b3a66_100%)]",
        "shadow-[0_6px_18px_rgb(31_163_232/0.55),inset_0_2px_2px_rgb(255_255_255/0.85)]",
        "after:absolute after:inset-x-[16%] after:top-[7%] after:h-[36%] after:rounded-full",
        "after:bg-[linear-gradient(180deg,rgb(255_255_255/0.9),rgb(255_255_255/0))]",
        className,
      )}
    />
  );
}
