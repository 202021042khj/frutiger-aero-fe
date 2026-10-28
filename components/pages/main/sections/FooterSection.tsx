import Orb from "@/components/common/aero/Orb";

export default function FooterSection() {
  return (
    <footer className="aero-glass-dark flex items-center gap-3 rounded-none px-5 py-7 md:gap-3.5 md:px-10 lg:px-20 xl:px-40 md:py-9">
      <Orb className="size-7 md:size-8" />
      <p className="text-[17px] text-aero-glass">A love letter to the glossy years.</p>
    </footer>
  );
}
