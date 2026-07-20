import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { COLORS } from "../constants";

export const Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const nameProgress = spring({
    frame,
    fps,
    config: { damping: 200 },
  });

  const lineProgress = spring({
    frame: frame - 18,
    fps,
    config: { damping: 200 },
  });

  const taglineOpacity = interpolate(frame, [32, 52], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const fadeOut = interpolate(
    frame,
    [durationInFrames - 15, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        opacity: fadeOut,
      }}
    >
      <div
        style={{
          fontSize: 180,
          fontWeight: 800,
          color: COLORS.white,
          letterSpacing: 8,
          transform: `scale(${nameProgress})`,
        }}
      >
        ELDEE
      </div>
      <div
        style={{
          width: 620 * lineProgress,
          height: 10,
          borderRadius: 5,
          backgroundColor: COLORS.accent,
          marginTop: 30,
          marginBottom: 40,
        }}
      />
      <div
        style={{
          fontSize: 64,
          fontWeight: 500,
          color: COLORS.muted,
          letterSpacing: 22,
          opacity: taglineOpacity,
        }}
      >
        EXPO EXPERTS
      </div>
    </AbsoluteFill>
  );
};
