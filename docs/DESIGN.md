# Frutiger Aero — design plan

Landing page: "Frutiger Aero — the future we were promised". One long page that explains the style and lets two generated videos play back as you scroll.

## Audience and job

People who remember Vista, Wii and early iPods, plus people meeting the term on social media. The page's job is to explain what Frutiger Aero is, show it, and say why it disappeared.

## Color

| Token | Hex | Role |
|---|---|---|
| sky | `#1FA3E8` | primary blue, links, sky gradients |
| aqua | `#2ED3C6` | water, highlights on glass |
| leaf | `#5FCB3A` | nature, grass, positive accents |
| glass | `#EAF8FF` | panel fill (used at 40–70% opacity with blur) |
| deep | `#0B3A66` | body text and dark ink (navy, never black) |
| sun | `#FFF6C9` | lens flare and warm glints |

Backgrounds are always sky or imagery, never flat white or grey.

## Type

- One family: **Fira Sans**, a humanist sans close in spirit to Frutiger and Segoe UI.
- Display: 300 weight, very large, set as glossy "gel" letters (gradient fill, top highlight, soft inner glow). The headline is the main design element.
- Body: 400, 18–20px, line length under 70 characters, sentence case.
- No all-caps labels and no eyebrow labels.

## Layout

```
[1 Hero — pinned, hero video scrubs]   gel title, subtitle, scroll cue
[2 What it is]                          left-aligned text on one glass panel, image peeks through
[3 Ingredients]                         floating bubbles of different sizes, one idea each
[4 Timeline 2004–2013]                  horizontal glass rail, years as markers (a real sequence)
[5 The future — pinned, city video]     three captions crossfade while the camera moves in
[6 Where it went]                       flat design arrives (2013), then the revival; closing line
```

Text is left-aligned except the hero title, which is centered over the sky.

## Principles

- The boldness lives in two places: the gel headline and the scroll-driven videos. Everything else stays quiet.
- Glass panels are the only container, and they vary in size by importance (no identical card grid).
- Motion is driven by scroll only. No auto fade-in on every section.
- `prefers-reduced-motion`: videos are replaced with their first-frame stills.
- Navy text on glass must keep at least 4.5:1 contrast.

## Assets

- Originals: `assets-source/` (git-ignored).
- Hero clip from `hero-2.png`, city clip from `city-2.png`, both Kling 3.0, 5 s, no sound.
