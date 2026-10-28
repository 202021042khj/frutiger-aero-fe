import { cn } from "@/lib/utils";

/** Blurred aurora ribbon, like the Vista default wallpaper. */
export function Aurora({ className, colors }: { className?: string; colors: string }) {
  return (
    <span
      aria-hidden
      className={cn("pointer-events-none absolute rounded-[50%] blur-[60px]", colors, className)}
    />
  );
}

/** Four-point glint. */
export function Sparkle({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={cn("pointer-events-none absolute drop-shadow-[0_0_8px_#fff]", className)}
    >
      <path d="M12 0c.6 6.5 5.5 11.4 12 12-6.5.6-11.4 5.5-12 12-.6-6.5-5.5-11.4-12-12C6.5 11.4 11.4 6.5 12 0Z" fill="#fff" />
    </svg>
  );
}

/** Small soap bubble. */
export function SoapBubble({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute rounded-full border border-white/80",
        "bg-[radial-gradient(circle,rgb(255_255_255/0.05)_0%,rgb(234_248_255/0.15)_75%,rgb(155_233_255/0.6)_95%,rgb(255_255_255/0.9)_100%)]",
        "after:absolute after:top-[10%] after:left-[18%] after:h-[22%] after:w-[45%] after:-rotate-20 after:rounded-full",
        "after:bg-[linear-gradient(180deg,rgb(255_255_255/0.9),rgb(255_255_255/0))]",
        className,
      )}
    />
  );
}
