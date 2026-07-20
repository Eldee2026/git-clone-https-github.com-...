import { AbsoluteFill, Sequence } from "remotion";
import { COLORS, FONT_FAMILY } from "./constants";
import { Intro } from "./scenes/Intro";
import { StandAssembly } from "./scenes/StandAssembly";
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
