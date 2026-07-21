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

const { intro: INTRO, outro: OUTRO } = STYLE_TIMING[1];

// Wijnrode kaart schuift omhoog en onthult de beelden.
const Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const slide = spring({ frame, fps, config: { damping: 200 } });
  const label = fade(frame, [10, 22, INTRO - 10, INTRO]);
  return (
    <AbsoluteFill>
      <AbsoluteFill
        style={{
          backgroundColor: BRAND.wine,
          transform: `translateY(${-slide * 1920}px)`,
        }}
      />
      <AbsoluteFill
        style={{
          justifyContent: "center",
          paddingLeft: 90,
          opacity: label,
        }}
      >
        <div
          style={{
            fontFamily: FONT_BODY,
            fontWeight: 700,
            fontSize: 34,
            letterSpacing: 10,
            color: BRAND.gold,
            textTransform: "uppercase",
          }}
        >
          Eldee · Expo Experts
        </div>
        <div
          style={{
            fontFamily: FONT_HEADLINE,
            fontSize: 96,
            color: BRAND.cream,
            marginTop: 16,
          }}
        >
          Modulair
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const BeatText: React.FC<{ beat: Beat; index: number; count: number }> = ({
  beat,
  index,
  count,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const enter = spring({ frame, fps, config: { damping: 200 } });
  const opacity = fade(frame, [0, 10, beat.frames - 10, beat.frames]);
  const size = beat.big ? 84 : 66;
  return (
    <AbsoluteFill style={{ justifyContent: "flex-end", opacity }}>
      <div
        style={{
          display: "flex",
          alignItems: "stretch",
          gap: 28,
          padding: "0 80px 340px 80px",
          transform: `translateX(${(1 - enter) * -60}px)`,
        }}
      >
        <div
          style={{
            width: 8,
            borderRadius: 4,
            backgroundColor: beat.big ? BRAND.gold : BRAND.wine,
          }}
        />
        <div
          style={{
            fontFamily: FONT_HEADLINE,
            fontSize: size,
            lineHeight: 1.16,
            color: beat.big ? BRAND.gold : BRAND.cream,
          }}
        >
          {beat.text}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 260,
          left: 108,
          display: "flex",
          gap: 14,
        }}
      >
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            style={{
              width: i === index ? 40 : 14,
              height: 8,
              borderRadius: 4,
              backgroundColor: i === index ? BRAND.gold : "rgba(246,242,234,0.4)",
            }}
          />
        ))}
      </div>
    </AbsoluteFill>
  );
};

const Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const band = spring({ frame, fps, config: { damping: 200 } });
  const arrow = interpolate(frame, [24, 48], [0, 40], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <AbsoluteFill style={{ justifyContent: "flex-end" }}>
      <div
        style={{
          height: 760 * band,
          backgroundColor: BRAND.wine,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: 90,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            fontFamily: FONT_HEADLINE,
            fontSize: 72,
            color: BRAND.cream,
            lineHeight: 1.1,
          }}
        >
          Meer flexibiliteit.
          <br />
          Minder kosten.
        </div>
        <div
          style={{
            marginTop: 44,
            display: "flex",
            alignItems: "center",
            gap: 20,
            fontFamily: FONT_BODY,
            fontWeight: 800,
            fontSize: 52,
            color: BRAND.gold,
          }}
        >
          <span>www.eldee.com</span>
          <span style={{ transform: `translateX(${arrow}px)` }}>→</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const Reel2: React.FC<{ reel: Reel; total: number }> = ({
  reel,
  total,
}) => {
  const starts = beatStarts(reel, INTRO);
  const outroStart = total - OUTRO;
  return (
    <AbsoluteFill style={{ backgroundColor: BRAND.black }}>
      <Sequence from={INTRO} durationInFrames={total - INTRO}>
        <Footage overlay="left" strength={0.75} zoom zoomOut order={2} />
      </Sequence>
      <Sequence durationInFrames={INTRO}>
        <Intro />
      </Sequence>
      {reel.beats.map((beat, i) => (
        <Sequence key={i} from={starts[i]} durationInFrames={beat.frames}>
          <BeatText beat={beat} index={i} count={reel.beats.length} />
        </Sequence>
      ))}
      <Sequence from={outroStart} durationInFrames={OUTRO}>
        <Outro />
      </Sequence>
    </AbsoluteFill>
  );
};
