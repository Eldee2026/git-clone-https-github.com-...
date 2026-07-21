import {
  AbsoluteFill,
  Sequence,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { BRAND, FONT_HEADLINE, FONT_BODY, FONT_ACCENT } from "../../brand";
import { Footage, Wordmark, fade } from "../shared";
import { Beat, Reel, STYLE_TIMING, beatStarts } from "../reelData";

const { intro: INTRO, outro: OUTRO } = STYLE_TIMING[4];

// Tekst-first hook op zwart, in huisstijl (goud script op zwart).
const Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const script = fade(frame, [6, 24, INTRO - 14, INTRO]);
  const line = spring({ frame: frame - 20, fps, config: { damping: 200 } });
  return (
    <AbsoluteFill
      style={{
        backgroundColor: BRAND.black,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          fontFamily: FONT_ACCENT,
          fontStyle: "italic",
          fontSize: 108,
          color: BRAND.gold,
          opacity: script,
          textAlign: "center",
          padding: "0 90px",
        }}
      >
        Even tussen ons…
      </div>
      <div
        style={{
          width: 300 * line,
          height: 3,
          backgroundColor: BRAND.wine,
          marginTop: 40,
        }}
      />
    </AbsoluteFill>
  );
};

const BeatText: React.FC<{ beat: Beat }> = ({ beat }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const punch = spring({ frame, fps, config: { damping: 18, stiffness: 120 } });
  const opacity = fade(frame, [0, 10, beat.frames - 12, beat.frames]);
  const size = beat.big ? 100 : 74;
  return (
    <AbsoluteFill
      style={{
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 320,
        opacity,
      }}
    >
      <div
        style={{
          fontFamily: FONT_HEADLINE,
          fontSize: size,
          lineHeight: 1.12,
          color: beat.big ? BRAND.gold : BRAND.cream,
          textAlign: "center",
          padding: "0 80px",
          transform: `scale(${interpolate(punch, [0, 1], [0.9, 1])})`,
        }}
      >
        {beat.text}
      </div>
    </AbsoluteFill>
  );
};

const Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const gold = interpolate(frame, [0, 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const black = interpolate(frame, [22, 40], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const mark = spring({ frame: frame - 42, fps, config: { damping: 200 } });
  const cta = interpolate(frame, [70, 86], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ backgroundColor: `rgba(233,196,106,${gold})` }} />
      <AbsoluteFill style={{ backgroundColor: `rgba(11,11,12,${black})` }} />
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          opacity: mark,
          transform: `scale(${interpolate(mark, [0, 1], [0.85, 1])})`,
        }}
      >
        <Wordmark size={150} color={BRAND.gold} accent={BRAND.cream} />
        <div
          style={{
            marginTop: 60,
            fontFamily: FONT_BODY,
            fontWeight: 700,
            fontSize: 46,
            letterSpacing: 4,
            color: BRAND.cream,
            opacity: cta,
          }}
        >
          www.eldee.com
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const Reel5: React.FC<{ reel: Reel; total: number }> = ({
  reel,
  total,
}) => {
  const starts = beatStarts(reel, INTRO);
  const outroStart = total - OUTRO;
  return (
    <AbsoluteFill style={{ backgroundColor: BRAND.black }}>
      <Sequence from={INTRO} durationInFrames={total - INTRO}>
        <Footage overlay="bottom" strength={0.72} zoom order={4} />
      </Sequence>
      <Sequence durationInFrames={INTRO}>
        <Intro />
      </Sequence>
      {reel.beats.map((beat, i) => (
        <Sequence key={i} from={starts[i]} durationInFrames={beat.frames}>
          <BeatText beat={beat} />
        </Sequence>
      ))}
      <Sequence from={outroStart} durationInFrames={OUTRO}>
        <Outro />
      </Sequence>
    </AbsoluteFill>
  );
};
