import {
  AbsoluteFill,
  Sequence,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { BRAND, FONT_HEADLINE, FONT_BODY } from "../../brand";
import { Footage, fade } from "../shared";
import { Beat, Reel, STYLE_TIMING, beatStarts } from "../reelData";

const { intro: INTRO, outro: OUTRO } = STYLE_TIMING[3];

const KICKERS = ["ONTWERP", "SYSTEEM", "SNEL", "TIJD", "AFVAL", "RESULTAAT"];

// Korte wijnrode flits, dan een groot gouden woord.
const Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const flash = interpolate(frame, [0, 6, 16], [1, 1, 0], {
    extrapolateRight: "clamp",
  });
  const word = fade(frame, [10, 20, INTRO - 8, INTRO]);
  return (
    <AbsoluteFill style={{ backgroundColor: BRAND.black }}>
      <AbsoluteFill style={{ backgroundColor: BRAND.wine, opacity: flash }} />
      <AbsoluteFill
        style={{ justifyContent: "flex-start", padding: "220px 80px" }}
      >
        <div
          style={{
            fontFamily: FONT_HEADLINE,
            fontSize: 150,
            lineHeight: 0.95,
            color: BRAND.gold,
            opacity: word,
          }}
        >
          SLIM
          <br />
          GEBOUWD.
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const BeatText: React.FC<{ beat: Beat; index: number }> = ({ beat, index }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const enter = spring({ frame, fps, config: { damping: 26, stiffness: 140 } });
  const opacity = fade(frame, [0, 6, beat.frames - 8, beat.frames]);
  const size = beat.big ? 92 : 72;
  return (
    <AbsoluteFill
      style={{ justifyContent: "flex-start", padding: "200px 80px 0 80px", opacity }}
    >
      <div
        style={{
          display: "inline-block",
          alignSelf: "flex-start",
          backgroundColor: BRAND.wine,
          color: BRAND.cream,
          fontFamily: FONT_BODY,
          fontWeight: 800,
          fontSize: 30,
          letterSpacing: 6,
          padding: "10px 22px",
          marginBottom: 28,
          transform: `translateY(${(1 - enter) * -30}px)`,
        }}
      >
        {String(index + 1).padStart(2, "0")} · {KICKERS[index] ?? "ELDEE"}
      </div>
      <div
        style={{
          fontFamily: FONT_HEADLINE,
          fontSize: size,
          lineHeight: 1.1,
          color: BRAND.cream,
          transform: `translateY(${(1 - enter) * 30}px)`,
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
  const enter = spring({ frame, fps, config: { damping: 200 } });
  const line = spring({ frame: frame - 18, fps, config: { damping: 200 } });
  return (
    <AbsoluteFill
      style={{
        backgroundColor: BRAND.black,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        opacity: enter,
      }}
    >
      <div
        style={{
          fontFamily: FONT_HEADLINE,
          fontSize: 96,
          color: BRAND.cream,
          textAlign: "center",
        }}
      >
        Meer weten?
      </div>
      <div style={{ marginTop: 30, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div
          style={{
            fontFamily: FONT_BODY,
            fontWeight: 800,
            fontSize: 60,
            color: BRAND.gold,
          }}
        >
          www.eldee.com
        </div>
        <div
          style={{
            width: 380 * line,
            height: 5,
            backgroundColor: BRAND.wine,
            marginTop: 18,
          }}
        />
      </div>
    </AbsoluteFill>
  );
};

export const Reel4: React.FC<{ reel: Reel; total: number }> = ({
  reel,
  total,
}) => {
  const starts = beatStarts(reel, INTRO);
  const outroStart = total - OUTRO;
  return (
    <AbsoluteFill style={{ backgroundColor: BRAND.black }}>
      <Sequence from={INTRO} durationInFrames={total - INTRO}>
        <Footage overlay="top" strength={0.78} zoom order={3} />
      </Sequence>
      <Sequence durationInFrames={INTRO}>
        <Intro />
      </Sequence>
      {reel.beats.map((beat, i) => (
        <Sequence key={i} from={starts[i]} durationInFrames={beat.frames}>
          <BeatText beat={beat} index={i} />
        </Sequence>
      ))}
      <Sequence from={outroStart} durationInFrames={OUTRO}>
        <Outro />
      </Sequence>
    </AbsoluteFill>
  );
};
