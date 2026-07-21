// Huisstijl Eldee Expo Experts, afgeleid uit de Canva-brandkit.
// Officiële kleuren: bordeaux/wijnrood logo, gouden premium-accent op zwart, crème tekst.

import { loadFont as loadHeadline } from "@remotion/google-fonts/ArchivoBlack";
import { loadFont as loadBody } from "@remotion/google-fonts/Inter";
import { loadFont as loadAccent } from "@remotion/google-fonts/PlayfairDisplay";

export const BRAND = {
  black: "#0B0B0C",
  ink: "#141416",
  wine: "#A02B41",
  wineDeep: "#7C1F31",
  gold: "#E9C46A",
  goldSoft: "#F2DCA0",
  cream: "#F6F2EA",
  white: "#FFFFFF",
  muted: "#B7A9A0",
} as const;

export const VIDEO_FPS = 30;

export const { fontFamily: FONT_HEADLINE } = loadHeadline();
export const { fontFamily: FONT_BODY } = loadBody();
export const { fontFamily: FONT_ACCENT } = loadAccent();
