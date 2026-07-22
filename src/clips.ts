// Geselecteerde standbeelden (uit public/) voor de reels.
// Bewuste keuze uit het volledige bronmateriaal: de gestabiliseerde en
// "zonder gaten"-versies plus de sterkste opbouw- en detailbeelden.
// durationInSeconds = hoe lang de clip in beeld is (rest wordt afgekapt).

export type Clip = {
  file: string;
  durationInSeconds: number;
};

export const CLIPS: Clip[] = [
  { file: "Stabilzer - Formaat 1080x1920 - 20260714_145529.mp4", durationInSeconds: 6 },
  { file: "Video - zonder gaten - 20260714_150330.mp4", durationInSeconds: 7 },
  { file: "20260714_131856.mp4", durationInSeconds: 6 },
  { file: "20260714_131446_8.mp4", durationInSeconds: 6 },
  { file: "20260714_131943.mp4", durationInSeconds: 6 },
  { file: "20260714_131446_3.mp4", durationInSeconds: 6 },
];

export const clipDurationInFrames = (clip: Clip, fps: number): number =>
  Math.round(clip.durationInSeconds * fps);

export const totalClipsDurationInFrames = (fps: number): number =>
  CLIPS.reduce((sum, clip) => sum + clipDurationInFrames(clip, fps), 0);
