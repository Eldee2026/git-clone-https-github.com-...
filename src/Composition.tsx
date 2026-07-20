import { AbsoluteFill, Sequence, useVideoConfig } from "remotion";
import { totalClipsDurationInFrames } from "./clips";
import { COLORS, FONT_FAMILY } from "./constants";
import { Intro } from "./scenes/Intro";
import { StandAssembly } from "./scenes/StandAssembly";
import { StandClips } from "./scenes/StandClips";
import { Usps } from "./scenes/Usps";
import { Outro } from "./scenes/Outro";

export const INTRO_DURATION = 105;
export const ASSEMBLY_DURATION = 225;
export const USPS_DURATION = 240;
export const OUTRO_DURATION = 150;

export const TOTAL_DURATION =
  INTRO_DURATION + ASSEMBLY_DURATION + USPS_DURATION + OUTRO_DURATION;

export const ModulaireStand: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.background,
        fontFamily: FONT_FAMILY,
      }}
    >
      <Sequence durationInFrames={INTRO_DURATION}>
        <Intro />
      </Sequence>
      <Sequence from={INTRO_DURATION} durationInFrames={ASSEMBLY_DURATION}>
        <StandAssembly />
      </Sequence>
      <Sequence
        from={INTRO_DURATION + ASSEMBLY_DURATION}
        durationInFrames={USPS_DURATION}
      >
        <Usps />
      </Sequence>
      <Sequence
        from={INTRO_DURATION + ASSEMBLY_DURATION + USPS_DURATION}
        durationInFrames={OUTRO_DURATION}
      >
        <Outro />
      </Sequence>
    </AbsoluteFill>
  );
};

// Zelfde promo, maar met jouw eigen videobeelden (uit public/, zie
// src/clips.ts) tussen de opbouw-animatie en de USPs.
export const ModulaireStandMetVideo: React.FC = () => {
  const { fps } = useVideoConfig();
  const clipsDuration = totalClipsDurationInFrames(fps);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.background,
        fontFamily: FONT_FAMILY,
      }}
    >
      <Sequence durationInFrames={INTRO_DURATION}>
        <Intro />
      </Sequence>
      <Sequence from={INTRO_DURATION} durationInFrames={ASSEMBLY_DURATION}>
        <StandAssembly />
      </Sequence>
      <Sequence
        from={INTRO_DURATION + ASSEMBLY_DURATION}
        durationInFrames={clipsDuration}
      >
        <StandClips />
      </Sequence>
      <Sequence
        from={INTRO_DURATION + ASSEMBLY_DURATION + clipsDuration}
        durationInFrames={USPS_DURATION}
      >
        <Usps />
      </Sequence>
      <Sequence
        from={INTRO_DURATION + ASSEMBLY_DURATION + clipsDuration + USPS_DURATION}
        durationInFrames={OUTRO_DURATION}
      >
        <Outro />
      </Sequence>
    </AbsoluteFill>
  );
};
