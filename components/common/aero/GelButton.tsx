import { cn } from "@/lib/utils";

interface GelButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  size?: "md" | "sm";
}

/** Glossy Vista-style pill. Rendered as a link because every use on this page jumps to a section. */
export default function GelButton({ size = "md", className, children, ...props }: GelButtonProps) {
  return (
    <a
      className={cn(
        "aero-gel aero-focus inline-flex min-h-11 items-center justify-center font-medium",
        size === "md" ? "px-7.5 py-3.5 text-base" : "px-5 py-2.5 text-sm",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
