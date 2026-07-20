import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { COLORS } from "../constants";

export const Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headingProgress = spring({
    frame,
    fps,
    config: { damping: 200 },
  });

  const buttonProgress = spring({
    frame: frame - 18,
    fps,
    config: { damping: 12 },
  });

  const brandOpacity = interpolate(frame, [40, 60], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          fontSize: 96,
          fontWeight: 800,
          color: COLORS.white,
          textAlign: "center",
          paddingLeft: 80,
          paddingRight: 80,
          opacity: headingProgress,
          transform: `translateY(${(1 - headingProgress) * 80}px)`,
        }}
      >
        Klaar voor jouw volgende beurs?
      </div>
      <div
        style={{
          marginTop: 90,
          backgroundColor: COLORS.accent,
          color: COLORS.background,
          fontSize: 64,
          fontWeight: 800,
          paddingTop: 34,
          paddingBottom: 34,
          paddingLeft: 80,
          paddingRight: 80,
          borderRadius: 70,
          transform: `scale(${buttonProgress})`,
        }}
      >
        www.eldee.com
      </div>
      <div
        style={{
          marginTop: 110,
          fontSize: 44,
          fontWeight: 500,
          letterSpacing: 14,
          color: COLORS.muted,
          opacity: brandOpacity,
        }}
      >
        ELDEE EXPO EXPERTS
      </div>
    </AbsoluteFill>
  );
};
