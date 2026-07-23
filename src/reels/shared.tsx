import {
  AbsoluteFill,
  Img,
  OffthreadVideo,
  Sequence,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { CLIPS, Clip, clipDurationInFrames } from "../clips";
import { BRAND, FONT_HEADLINE, FONT_BODY } from "../brand";

// Vier fade-punten: in-start, in-eind, uit-start, uit-eind.
// De punten worden zo nodig opgehoogd zodat ze strikt oplopend blijven
// (interpolate crasht anders op gelijke waarden).
export const fade = (
  frame: number,
  [i0, i1, o0, o1]: [number, number, number, number],
): number => {
  const p1 = Math.max(i0 + 1, i1);
  const p2 = Math.max(p1 + 1, o0);
  const p3 = Math.max(p2 + 1, o1);
  return interpolate(frame, [i0, p1, p2, p3], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
};

// Roteer de clip-volgorde zodat elke reel een andere beeldvolgorde krijgt.
const rotatedClips = (from: number): Clip[] => {
  const n = CLIPS.length;
  const offset = ((from % n) + n) % n;
  return [...CLIPS.slice(offset), ...CLIPS.slice(0, offset)];
};

const cycle = (
  clips: Clip[],
  fps: number,
  durationInFrames: number,
): { file: string; from: number; frames: number }[] => {
  const segments: { file: string; from: number; frames: number }[] = [];
  let acc = 0;
  let i = 0;
  while (acc < durationInFrames) {
    const clip = clips[i % clips.length];
    const frames = Math.min(
      clipDurationInFrames(clip, fps),
      durationInFrames - acc,
    );
    segments.push({ file: clip.file, from: acc, frames });
    acc += frames;
    i++;
  }
  return segments;
};

type Overlay = "none" | "bottom" | "top" | "left" | "full" | "wine";

const overlayBackground = (overlay: Overlay, strength: number): string => {
  const a = strength;
  switch (overlay) {
    case "bottom":
      return `linear-gradient(to top, rgba(11,11,12,${a}) 0%, rgba(11,11,12,${a * 0.5}) 35%, rgba(11,11,12,0) 65%)`;
    case "top":
      return `linear-gradient(to bottom, rgba(11,11,12,${a}) 0%, rgba(11,11,12,${a * 0.4}) 35%, rgba(11,11,12,0) 65%)`;
    case "left":
      return `linear-gradient(to right, rgba(11,11,12,${a}) 0%, rgba(11,11,12,${a * 0.4}) 45%, rgba(11,11,12,0) 75%)`;
    case "full":
      return `rgba(11,11,12,${a})`;
    case "wine":
      return `linear-gradient(to top, rgba(159,38,60,${a}) 0%, rgba(159,38,60,${a * 0.35}) 45%, rgba(0,0,0,0.15) 100%)`;
    case "none":
    default:
      return "transparent";
  }
};

// Doorlopende standbeelden op de achtergrond met een langzame zoom (Ken Burns)
// en een instelbare donkere/wijnrode laag zodat tekst leesbaar blijft.
export const Footage: React.FC<{
  overlay?: Overlay;
  strength?: number;
  letterbox?: number;
  zoom?: boolean;
  zoomOut?: boolean;
  order?: number;
}> = ({
  overlay = "bottom",
  strength = 0.62,
  letterbox = 0,
  zoom = true,
  zoomOut = false,
  order = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const segments = cycle(rotatedClips(order), fps, durationInFrames);

  const zoomProgress = interpolate(frame, [0, durationInFrames], [0, 1], {
    extrapolateRight: "clamp",
  });
  const scale = zoom
    ? zoomOut
      ? interpolate(zoomProgress, [0, 1], [1.12, 1.0])
      : interpolate(zoomProgress, [0, 1], [1.0, 1.12])
    : 1;

  return (
    <AbsoluteFill style={{ backgroundColor: BRAND.black }}>
      <AbsoluteFill style={{ transform: `scale(${scale})` }}>
        {segments.map((segment, idx) => (
          <Sequence
            key={idx}
            from={segment.from}
            durationInFrames={segment.frames}
          >
            <OffthreadVideo
              src={staticFile(segment.file)}
              muted
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                // Warme, premium grade: meer contrast/verzadiging, licht opgetild.
                filter: "contrast(1.09) saturate(1.14) brightness(1.05)",
              }}
            />
          </Sequence>
        ))}
      </AbsoluteFill>
      {overlay !== "none" && (
        <AbsoluteFill
          style={{ background: overlayBackground(overlay, strength) }}
        />
      )}
      {letterbox > 0 && (
        <>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: letterbox,
              backgroundColor: BRAND.black,
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: letterbox,
              backgroundColor: BRAND.black,
            }}
          />
        </>
      )}
    </AbsoluteFill>
  );
};

// ELDEE-woordmerk in huisstijl.
export const Wordmark: React.FC<{
  color?: string;
  accent?: string;
  size?: number;
  align?: "center" | "flex-start";
}> = ({
  color = BRAND.cream,
  accent = BRAND.gold,
  size = 120,
  align = "center",
}) => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: align }}>
    <div
      style={{
        fontFamily: FONT_HEADLINE,
        fontSize: size,
        letterSpacing: size * 0.04,
        color,
        lineHeight: 1,
      }}
    >
      ELDEE
    </div>
    <div
      style={{
        fontFamily: FONT_BODY,
        fontWeight: 600,
        fontSize: size * 0.2,
        letterSpacing: size * 0.14,
        color: accent,
        marginTop: size * 0.12,
        textTransform: "uppercase",
      }}
    >
      Expo Experts
    </div>
  </div>
);

// Rond logomerk (cirkel-outline + ELDEE) dat zich kan intekenen.
export const LogoCircle: React.FC<{
  progress: number;
  color?: string;
  size?: number;
}> = ({ progress, color = BRAND.wine, size = 360 }) => {
  const r = size / 2 - 8;
  const c = 2 * Math.PI * r;
  return (
    <div style={{ position: "relative", width: size, height: size }}>
      <svg
        width={size}
        height={size}
        style={{ position: "absolute", transform: "rotate(-90deg)" }}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={6}
          strokeDasharray={c}
          strokeDashoffset={c * (1 - progress)}
        />
      </svg>
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          opacity: interpolate(progress, [0.6, 1], [0, 1], {
            extrapolateLeft: "clamp",
          }),
        }}
      >
        <div
          style={{
            fontFamily: FONT_HEADLINE,
            fontSize: size * 0.24,
            letterSpacing: size * 0.01,
            color,
            lineHeight: 1,
          }}
        >
          ELDEE
        </div>
        <div
          style={{
            fontFamily: FONT_BODY,
            fontWeight: 600,
            fontSize: size * 0.062,
            letterSpacing: size * 0.03,
            color,
            marginTop: size * 0.03,
            textTransform: "lowercase",
          }}
        >
          expo experts
        </div>
      </AbsoluteFill>
    </div>
  );
};

// Kleine merkregel bovenin (subtiele branding tijdens de reel).
export const CornerBrand: React.FC<{ color?: string; opacity?: number }> = ({
  color = BRAND.cream,
  opacity = 1,
}) => (
  <div
    style={{
      position: "absolute",
      top: 70,
      left: 0,
      right: 0,
      textAlign: "center",
      fontFamily: FONT_BODY,
      fontWeight: 700,
      fontSize: 30,
      letterSpacing: 10,
      color,
      opacity,
      textTransform: "uppercase",
    }}
  >
    Eldee · Expo Experts
  </div>
);

// Officiële logopositie: het complete ronde badge-logo (public/logo-white.png,
// tijdens de render uit assets/logo-white.ai geconverteerd), linksonder in
// beeld. Vierkant, ~14,8% van de canvasbreedte, linkermarge ~5%. Recht
// geplaatst conform het nieuwste ontwerp (−8° staat als open vraag in CLAUDE.md).
export const CornerLogo: React.FC = () => {
  const { width } = useVideoConfig();
  const size = Math.round(width * 0.148);
  const left = Math.round(width * 0.05);
  return (
    <Img
      src={staticFile("logo-white.png")}
      style={{
        position: "absolute",
        left,
        bottom: left,
        width: size,
        height: size,
        objectFit: "contain",
        opacity: 0.95,
      }}
    />
  );
};
