import {
  AbsoluteFill,
  OffthreadVideo,
  Sequence,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { CLIPS, clipDurationInFrames } from "../clips";
import { COLORS, FONT_FAMILY } from "../constants";
import {
  Beat,
  REELS,
  REEL_INTRO_FRAMES,
  reelBeatsFrames,
  Reel as ReelType,
} from "./reelData";

// Jouw eigen standbeelden als doorlopende achtergrond, met een donkere
// laag eroverheen zodat de tekst leesbaar blijft.
const BackgroundClips: React.FC = () => {
  const { fps, durationInFrames } = useVideoConfig();

  const segments: { file: string; from: number; frames: number }[] = [];
  let acc = 0;
  let i = 0;
  while (acc < durationInFrames) {
    const clip = CLIPS[i % CLIPS.length];
    const frames = Math.min(
      clipDurationInFrames(clip, fps),
      durationInFrames - acc,
    );
    segments.push({ file: clip.file, from: acc, frames });
    acc += frames;
    i++;
  }

  return (
    <AbsoluteFill>
      {segments.map((segment, idx) => (
        <Sequence
          key={idx}
          from={segment.from}
          durationInFrames={segment.frames}
        >
          <OffthreadVideo
            src={staticFile(segment.file)}
            muted
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Sequence>
      ))}
      <AbsoluteFill style={{ backgroundColor: "rgba(13, 27, 42, 0.78)" }} />
    </AbsoluteFill>
  );
};

const ReelIntro: React.FC<{ accent: string }> = ({ accent }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const scale = spring({ frame, fps, config: { damping: 200 } });
  const lineProgress = spring({
    frame: frame - 12,
    fps,
    config: { damping: 200 },
  });
  const fadeOut = interpolate(
    frame,
    [durationInFrames - 12, durationInFrames],
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
          fontSize: 140,
          fontWeight: 800,
          color: COLORS.white,
          letterSpacing: 8,
          transform: `scale(${scale})`,
        }}
      >
        ELDEE
      </div>
      <div
        style={{
          width: 480 * lineProgress,
          height: 8,
          borderRadius: 4,
          backgroundColor: accent,
          marginTop: 24,
          marginBottom: 30,
        }}
      />
      <div
        style={{
          fontSize: 46,
          fontWeight: 500,
          color: COLORS.muted,
          letterSpacing: 14,
        }}
      >
        MODULAIRE STANDBOUW
      </div>
    </AbsoluteFill>
  );
};

const ReelBeat: React.FC<{ beat: Beat; accent: string }> = ({
  beat,
  accent,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enter = spring({ frame, fps, config: { damping: 200 } });
  const exit = interpolate(frame, [beat.frames - 10, beat.frames], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const baseSize = interpolate(beat.text.length, [20, 120], [84, 58], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const fontSize = beat.big ? baseSize * 1.15 : baseSize;

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        opacity: enter * exit,
        transform: `translateY(${(1 - enter) * 60}px)`,
      }}
    >
      <div
        style={{
          fontSize,
          fontWeight: 800,
          lineHeight: 1.3,
          color: beat.big ? accent : COLORS.white,
          textAlign: "center",
          paddingLeft: 80,
          paddingRight: 80,
        }}
      >
        {beat.text}
      </div>
    </AbsoluteFill>
  );
};

const ReelOutro: React.FC<{ accent: string }> = ({ accent }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headingProgress = spring({ frame, fps, config: { damping: 200 } });
  const buttonProgress = spring({
    frame: frame - 15,
    fps,
    config: { damping: 12 },
  });
  const brandOpacity = interpolate(frame, [35, 55], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      <div
        style={{
          fontSize: 84,
          fontWeight: 800,
          color: COLORS.white,
          textAlign: "center",
          paddingLeft: 80,
          paddingRight: 80,
          opacity: headingProgress,
          transform: `translateY(${(1 - headingProgress) * 60}px)`,
        }}
      >
        Klaar voor jouw volgende beurs?
      </div>
      <div
        style={{
          marginTop: 70,
          backgroundColor: accent,
          color: COLORS.background,
          fontSize: 56,
          fontWeight: 800,
          paddingTop: 28,
          paddingBottom: 28,
          paddingLeft: 70,
          paddingRight: 70,
          borderRadius: 60,
          transform: `scale(${buttonProgress})`,
        }}
      >
        www.eldee.com
      </div>
      <div
        style={{
          marginTop: 90,
          fontSize: 38,
          fontWeight: 500,
          letterSpacing: 12,
          color: COLORS.muted,
          opacity: brandOpacity,
        }}
      >
        ELDEE EXPO EXPERTS
      </div>
    </AbsoluteFill>
  );
};

export const Reel: React.FC<{ index: number }> = ({ index }) => {
  const reel: ReelType = REELS[index];
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const beatsTotal = reelBeatsFrames(reel);
  const outroStart = REEL_INTRO_FRAMES + beatsTotal;

  const chipOpacity = interpolate(
    frame,
    [REEL_INTRO_FRAMES, REEL_INTRO_FRAMES + 15],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  const beatStarts: number[] = [];
  let acc = REEL_INTRO_FRAMES;
  for (const beat of reel.beats) {
    beatStarts.push(acc);
    acc += beat.frames;
  }

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.background,
        fontFamily: FONT_FAMILY,
      }}
    >
      <BackgroundClips />

      {/* Voortgangsbalk */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: 10,
          width: `${(frame / durationInFrames) * 100}%`,
          backgroundColor: reel.accent,
        }}
      />

      {/* Merknaam bovenin, na de intro */}
      <div
        style={{
          position: "absolute",
          top: 90,
          width: "100%",
          textAlign: "center",
          fontSize: 34,
          fontWeight: 600,
          letterSpacing: 10,
          color: COLORS.muted,
          opacity: chipOpacity,
        }}
      >
        ELDEE EXPO EXPERTS
      </div>

      <Sequence durationInFrames={REEL_INTRO_FRAMES}>
        <ReelIntro accent={reel.accent} />
      </Sequence>

      {reel.beats.map((beat, i) => (
        <Sequence key={i} from={beatStarts[i]} durationInFrames={beat.frames}>
          <ReelBeat beat={beat} accent={reel.accent} />
        </Sequence>
      ))}

      <Sequence from={outroStart}>
        <ReelOutro accent={reel.accent} />
      </Sequence>
    </AbsoluteFill>
  );
};
