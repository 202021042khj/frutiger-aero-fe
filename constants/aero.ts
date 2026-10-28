import type { Device, FrameSequence, Ingredient, NavLink, SectionKey, TimelineEntry } from "@/types/aero";

/**
 * Desktop and Mobile trees both mount (only one is visible), so anchor ids
 * must differ per device or links would jump to the hidden copy.
 */
export const sectionId = (device: Device, key: SectionKey) => (device === "mobile" ? `m-${key}` : key);

export const NAV_LINKS: readonly NavLink[] = [
  { label: "What it is", key: "what-it-is" },
  { label: "Ingredients", key: "ingredients" },
  { label: "Timeline", key: "timeline" },
  { label: "The future", key: "the-future" },
];

export const HERO_FRAMES: FrameSequence = {
  folder: "/frames/hero",
  count: 121,
  poster: "/frames/hero-poster.webp",
  alt: "A camera drifts along a stream through green hills toward a bright sky full of soap bubbles.",
};

export const CITY_FRAMES: FrameSequence = {
  folder: "/frames/city",
  count: 121,
  poster: "/frames/city-poster.webp",
  alt: "A camera glides along a glass bridge into a white eco-city where fish swim inside floating bubbles.",
};

export const INGREDIENTS: readonly Ingredient[] = [
  {
    title: "Gloss",
    description: "Every surface has a highlight, as if lit from just above.",
    desktop: { left: "0px", top: "40px", size: "340px" },
  },
  {
    title: "Water",
    description: "Droplets, bubbles and splashes stand for clean and new.",
    desktop: { left: "440px", top: "10px", size: "290px" },
  },
  {
    title: "Sky",
    description: "Bright cyan sky and soft clouds as the default backdrop.",
    desktop: { left: "820px", top: "90px", size: "300px" },
  },
  {
    title: "Nature",
    description: "Grass, leaves and fish living right next to the technology.",
    desktop: { left: "140px", top: "410px", size: "320px" },
  },
  {
    title: "Glass",
    description: "Translucent panels you can see the world through.",
    desktop: { left: "560px", top: "390px", size: "270px" },
  },
  {
    title: "Light",
    description: "Lens flares, auroras and glints along every edge.",
    desktop: { left: "900px", top: "480px", size: "250px" },
  },
];

export const TIMELINE: readonly TimelineEntry[] = [
  { year: "2004", description: "Glossy icons and gel buttons take over web design." },
  {
    year: "2007",
    description: "Vista's Aero glass reaches home PCs, and the first iPhone arrives with shiny icons.",
  },
  {
    year: "2009",
    description: "Windows 7 refines the glass. Bubble and grass wallpapers are everywhere.",
  },
  { year: "2012", description: "Windows 8 swaps glass for flat, colored tiles." },
  { year: "2013", description: "iOS 7 goes flat, and gloss disappears almost overnight." },
];

export const FUTURE_CAPTIONS: readonly string[] = [
  "Cities grown, not built.",
  "Technology that cleaned the water.",
  "A sky that was always this blue.",
];
