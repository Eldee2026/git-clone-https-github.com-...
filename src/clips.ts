// Jouw eigen videobeelden van de modulaire stand.
//
// 1. Zet je videobestanden in de map `public/` van dit project.
// 2. Vul hieronder per video de bestandsnaam en de gewenste duur in seconden in.
//    De clips worden in deze volgorde afgespeeld, schermvullend (1080x1920).
//
// Tip: is een clip korter dan de opgegeven duur, dan blijft het laatste
// beeld staan. Langer? Dan wordt de rest afgekapt.

export type Clip = {
  file: string;
  durationInSeconds: number;
};

export const CLIPS: Clip[] = [
  { file: "stand-1.mp4", durationInSeconds: 5 },
  { file: "stand-2.mp4", durationInSeconds: 5 },
  { file: "stand-3.mp4", durationInSeconds: 5 },
];

export const clipDurationInFrames = (clip: Clip, fps: number): number =>
  Math.round(clip.durationInSeconds * fps);

export const totalClipsDurationInFrames = (fps: number): number =>
  CLIPS.reduce((sum, clip) => sum + clipDurationInFrames(clip, fps), 0);
