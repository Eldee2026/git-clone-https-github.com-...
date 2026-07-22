import {
  AbsoluteFill,
  Sequence,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { BRAND, FONT_HEADLINE, FONT_BODY, FONT_ACCENT } from "../../brand";
import { Footage, LogoCircle, CornerLogo, fade } from "../shared";
import { Beat, Reel, STYLE_TIMING, beatStarts } from "../reelData";

const { intro: INTRO, outro: OUTRO } = STYLE_TIMING[2];
const BAR = 150;

const Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const kicker = fade(frame, [6, 18, INTRO - 12, INTRO]);
  const title = fade(frame, [22, 38, INTRO - 12, INTRO]);
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
          fontFamily: FONT_BODY,
          fontWeight: 700,
          fontSize: 32,
          letterSpacing: 16,
          color: BRAND.gold,
          textTransform: "uppercase",
          opacity: kicker,
        }}
      >
        Project · Modulaire stand
      </div>
      <div
        style={{
          fontFamily: FONT_ACCENT,
          fontStyle: "italic",
          fontSize: 92,
          color: BRAND.cream,
          marginTop: 24,
          textAlign: "center",
          padding: "0 90px",
          opacity: title,
        }}
      >
        Van idee naar beursstand
      </div>
    </AbsoluteFill>
  );
};

const BeatText: React.FC<{ beat: Beat }> = ({ beat }) => {
  const frame = useCurrentFrame();
  const opacity = fade(frame, [0, 16, beat.frames - 16, beat.frames]);
  const size = beat.big ? 88 : 64;
  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        opacity,
      }}
    >
      <div
        style={{
          fontFamily: beat.big ? FONT_ACCENT : FONT_HEADLINE,
          fontStyle: beat.big ? "italic" : "normal",
          fontSize: size,
          lineHeight: 1.2,
          color: beat.big ? BRAND.gold : BRAND.cream,
          textAlign: "center",
          padding: "0 110px",
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
  const black = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const draw = spring({
    frame: frame - 24,
    fps,
    config: { damping: 200 },
    durationInFrames: 60,
  });
  const cta = interpolate(frame, [70, 88], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ backgroundColor: `rgba(11,11,12,${black})` }} />
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <LogoCircle progress={draw} color={BRAND.gold} size={380} />
        <div
          style={{
            marginTop: 60,
            fontFamily: FONT_BODY,
            fontWeight: 700,
            fontSize: 48,
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

export const Reel3: React.FC<{ reel: Reel; total: number }> = ({
  reel,
  total,
}) => {
  const starts = beatStarts(reel, INTRO);
  const outroStart = total - OUTRO;
  return (
    <AbsoluteFill style={{ backgroundColor: BRAND.black }}>
      <Sequence from={INTRO} durationInFrames={outroStart - INTRO}>
        <Footage overlay="full" strength={0.35} letterbox={BAR} zoom order={1} />
      </Sequence>
      <Sequence durationInFrames={INTRO}>
        <Intro />
      </Sequence>
      {reel.beats.map((beat, i) => (
        <Sequence key={i} from={starts[i]} durationInFrames={beat.frames}>
          <BeatText beat={beat} />
        </Sequence>
      ))}
      <Sequence from={INTRO} durationInFrames={outroStart - INTRO}>
        <CornerLogo />
      </Sequence>
      <Sequence from={outroStart} durationInFrames={OUTRO}>
        <Outro />
      </Sequence>
    </AbsoluteFill>
  );
};
