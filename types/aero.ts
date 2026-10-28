export interface Ingredient {
  title: string;
  description: string;
  /** Desktop placement inside the 1120px scatter area */
  desktop: { left: string; top: string; size: string };
}

export interface TimelineEntry {
  year: string;
  description: string;
}

export interface FrameSequence {
  /** Public folder holding 001.webp … NNN.webp */
  folder: string;
  count: number;
  poster: string;
  alt: string;
}

export interface NavLink {
  label: string;
  key: SectionKey;
}

export type Device = "desktop" | "mobile";

export type SectionKey = "what-it-is" | "ingredients" | "timeline" | "the-future" | "where-it-went";
