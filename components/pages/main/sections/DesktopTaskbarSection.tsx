import GelButton from "@/components/common/aero/GelButton";
import Orb from "@/components/common/aero/Orb";
import { NAV_LINKS, sectionId } from "@/constants/aero";

/** Dark-glass bar fixed to the top, like the Vista taskbar. */
export default function DesktopTaskbarSection() {
  return (
    <header className="aero-glass-dark fixed inset-x-0 top-0 z-50 flex h-17 items-center gap-3.5 rounded-none px-10">
      <a href="#top" className="aero-focus flex items-center gap-3.5 rounded-full">
        <Orb className="size-11" />
        <span className="text-[19px] font-medium text-white">Frutiger Aero</span>
      </a>
      <nav aria-label="Sections" className="ml-auto hidden lg:block">
        <ul className="flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <a
                href={`#${sectionId("desktop", link.key)}`}
                className="aero-focus rounded-sm text-base text-aero-glass transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <GelButton size="sm" href={`#${sectionId("desktop", "what-it-is")}`} className="ml-auto lg:ml-7">
        Take the tour
      </GelButton>
    </header>
  );
}
