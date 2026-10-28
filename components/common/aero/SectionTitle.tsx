import { cn } from "@/lib/utils";

export default function SectionTitle({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      id={id}
      className={cn(
        "text-4xl leading-[1.15] font-light tracking-[-0.01em] text-aero-deep md:text-[56px] md:leading-[1.1]",
        className,
      )}
    >
      {children}
    </h2>
  );
}
