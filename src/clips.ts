// Jouw eigen videobeelden van de modulaire stand (staan in public/).
//
// durationInSeconds = hoe lang de clip in beeld is (de rest wordt afgekapt).
// Werkelijke lengtes van de bestanden:
//   stand-1.mp4  7,6 s   stand-2.mp4  29,7 s   stand-3.mp4  13,7 s
//   stand-4.mp4  30,0 s  stand-5.mp4  21,9 s
// Je mag durationInSeconds verhogen tot maximaal de werkelijke lengte.

export type Clip = {
  file: string;
  durationInSeconds: number;
};

export const CLIPS: Clip[] = [
  { file: "stand-1.mp4", durationInSeconds: 6 },
  { file: "stand-2.mp4", durationInSeconds: 6 },
  { file: "stand-3.mp4", durationInSeconds: 6 },
  { file: "stand-4.mp4", durationInSeconds: 6 },
  { file: "stand-5.mp4", durationInSeconds: 6 },
];

export const clipDurationInFrames = (clip: Clip, fps: number): number =>
  Math.round(clip.durationInSeconds * fps);

export const totalClipsDurationInFrames = (fps: number): number =>
  CLIPS.reduce((sum, clip) => sum + clipDurationInFrames(clip, fps), 0);
