// Officiële huisstijl Eldee Expo Experts (zie CLAUDE.md).
// Kleuren: burgundy, beige, warm rosé, zwart. Geen andere kleuren.
// Fonts: Playfair Display (titels) + Roboto (ondersteunend).

import { loadFont as loadPlayfair } from "@remotion/google-fonts/PlayfairDisplay";
import { loadFont as loadRoboto } from "@remotion/google-fonts/Roboto";

// De sleutelnamen blijven gelijk zodat alle scenes het palet automatisch
// overnemen; de waarden zijn de officiële merkkleuren.
export const BRAND = {
  black: "#000000",
  ink: "#101012",
  wine: "#9F263C", // burgundy — primaire merkkleur / accenten
  wineDeep: "#7A1D2E",
  gold: "#BAB0A4", // beige — accent- en emphasis-kleur (vervangt goud)
  goldSoft: "#C9BFB2",
  cream: "#F1ECE6", // warm gebroken wit voor leesbare titels
  white: "#FFFFFF",
  muted: "#AE7A70", // warm rosé — secundair accent
} as const;

export const VIDEO_FPS = 30;

export const { fontFamily: FONT_HEADLINE } = loadPlayfair("normal", {
  weights: ["400", "700", "900"],
  subsets: ["latin"],
});
export const { fontFamily: FONT_BODY } = loadRoboto("normal", {
  weights: ["400", "700"],
  subsets: ["latin"],
});
// Accenttekst gebruikt hetzelfde elegante Playfair Display.
export const FONT_ACCENT = FONT_HEADLINE;
