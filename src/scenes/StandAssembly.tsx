import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { COLORS } from "../constants";

type Block = {
  x: number;
  y: number;
  w: number;
  h: number;
  color: string;
  delay: number;
  label?: string;
};

const STAND_WIDTH = 900;
const STAND_HEIGHT = 780;

// The blocks build up from the floor: floor, wall (bottom to top),
// header banner, and finally the counter in front.
const BLOCKS: Block[] = [
  // Floor
  { x: 0, y: 730, w: 900, h: 50, color: COLORS.panelLight, delay: 0 },
  // Wall, bottom row
  { x: 0, y: 520, w: 290, h: 190, color: COLORS.panel, delay: 6 },
  { x: 305, y: 520, w: 290, h: 190, color: COLORS.panelLight, delay: 9 },
  { x: 610, y: 520, w: 290, h: 190, color: COLORS.panel, delay: 12 },
  // Wall, middle row
  { x: 0, y: 315, w: 290, h: 190, color: COLORS.panelLight, delay: 15 },
  { x: 305, y: 315, w: 290, h: 190, color: COLORS.panel, delay: 18 },
  { x: 610, y: 315, w: 290, h: 190, color: COLORS.panelLight, delay: 21 },
  // Wall, top row
  { x: 0, y: 110, w: 290, h: 190, color: COLORS.panel, delay: 24 },
  { x: 305, y: 110, w: 290, h: 190, color: COLORS.panelLight, delay: 27 },
  { x: 610, y: 110, w: 290, h: 190, color: COLORS.panel, delay: 30 },
  // Header banner
  { x: 0, y: 0, w: 900, h: 90, color: COLORS.accent, delay: 38, label: "ELDEE" },
  // Counter in front
  { x: 330, y: 545, w: 240, h: 185, color: COLORS.accent2, delay: 46 },
];

export const StandAssembly: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const subtitleOpacity = interpolate(frame, [70, 95], [0, 1], {
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
          fontSize: 84,
          fontWeight: 800,
          color: COLORS.white,
          textAlign: "center",
          opacity: titleOpacity,
          marginBottom: 70,
        }}
      >
        Modulaire standbouw
      </div>
      <div
        style={{
          position: "relative",
          width: STAND_WIDTH,
          height: STAND_HEIGHT,
        }}
      >
        {BLOCKS.map((block, i) => {
          const progress = spring({
            frame: frame - block.delay,
            fps,
            config: { damping: 200 },
          });
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: block.x,
                top: block.y,
                width: block.w,
                height: block.h,
                borderRadius: 14,
                backgroundColor: block.color,
                opacity: progress,
                transform: `translateY(${(1 - progress) * 80}px)`,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 52,
                fontWeight: 800,
                letterSpacing: 12,
                color: COLORS.background,
              }}
            >
              {block.label ?? ""}
            </div>
          );
        })}
      </div>
      <div
        style={{
          fontSize: 52,
          fontWeight: 500,
          color: COLORS.muted,
          textAlign: "center",
          opacity: subtitleOpacity,
          marginTop: 70,
          paddingLeft: 90,
          paddingRight: 90,
        }}
      >
        Eindeloos te combineren, keer op keer opnieuw
      </div>
    </AbsoluteFill>
  );
};
