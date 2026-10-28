"use client";

import { useId, useState } from "react";
import Orb from "@/components/common/aero/Orb";
import { NAV_LINKS, sectionId } from "@/constants/aero";
import { cn } from "@/lib/utils";

/** Mobile bar: orb, wordmark and a menu that drops down as dark glass. */
export default function MobileTaskbarSection() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="aero-glass-dark flex h-14 items-center gap-2.5 rounded-none px-4">
        <a href="#m-top" className="aero-focus flex items-center gap-2.5 rounded-full">
          <Orb className="size-9" />
          <span className="text-[17px] font-medium text-white">Frutiger Aero</span>
        </a>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((v) => !v)}
          className="aero-focus ml-auto flex size-11 items-center justify-center rounded-lg"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg aria-hidden width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path
              d={open ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"}
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
      <nav
        id={menuId}
        aria-label="Sections"
        className={cn("aero-glass-dark mx-3 mt-2 rounded-2xl p-2", !open && "hidden")}
      >
        <ul className="flex flex-col">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <a
                href={`#${sectionId("mobile", link.key)}`}
                onClick={() => setOpen(false)}
                className="aero-focus flex min-h-11 items-center rounded-xl px-4 text-[17px] text-aero-glass active:bg-white/10"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
