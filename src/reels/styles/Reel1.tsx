import {
  AbsoluteFill,
  Sequence,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { BRAND, FONT_HEADLINE, FONT_BODY } from "../../brand";
import { Footage, Wordmark, fade } from "../shared";
import { Beat, Reel, STYLE_TIMING, beatStarts } from "../reelData";

const { intro: INTRO, outro: OUTRO } = STYLE_TIMING[0];

const Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const line = spring({ frame: frame - 8, fps, config: { damping: 200 } });
  const opacity = fade(frame, [4, 20, INTRO - 12, INTRO]);
  return (
    <AbsoluteFill
      style={{
        backgroundColor: BRAND.black,
        justifyContent: "center",
        alignItems: "center",
        opacity,
      }}
    >
      <Wordmark size={130} color={BRAND.cream} accent={BRAND.gold} />
      <div
        style={{
          width: 420 * line,
          height: 4,
          backgroundColor: BRAND.gold,
          marginTop: 40,
        }}
      />
    </AbsoluteFill>
  );
};

const BeatText: React.FC<{ beat: Beat }> = ({ beat }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const enter = spring({ frame, fps, config: { damping: 200 } });
  const opacity = fade(frame, [0, 12, beat.frames - 12, beat.frames]);
  const underline = spring({ frame: frame - 6, fps, config: { damping: 200 } });
  const size = beat.big ? 96 : 74;
  return (
    <AbsoluteFill
      style={{
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 360,
        opacity,
      }}
    >
      <div
        style={{
          fontFamily: FONT_HEADLINE,
          fontSize: size,
          lineHeight: 1.15,
          color: beat.big ? BRAND.gold : BRAND.cream,
          textAlign: "center",
          padding: "0 90px",
          transform: `translateY(${(1 - enter) * 40}px)`,
        }}
      >
        {beat.text}
      </div>
      {beat.big && (
        <div
          style={{
            width: 200 * underline,
            height: 5,
            backgroundColor: BRAND.wine,
            marginTop: 34,
          }}
        />
      )}
    </AbsoluteFill>
  );
};

const Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const wine = interpolate(frame, [0, 22], [0, 0.9], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const head = spring({ frame: frame - 10, fps, config: { damping: 200 } });
  const pill = spring({ frame: frame - 26, fps, config: { damping: 12 } });
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ backgroundColor: `rgba(124,31,49,${wine})` }} />
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            fontFamily: FONT_HEADLINE,
            fontSize: 88,
            color: BRAND.cream,
            textAlign: "center",
            padding: "0 90px",
            opacity: head,
            transform: `translateY(${(1 - head) * 40}px)`,
          }}
        >
          Klaar voor jouw volgende beurs?
        </div>
        <div
          style={{
            marginTop: 70,
            transform: `scale(${pill})`,
            backgroundColor: BRAND.gold,
            color: BRAND.black,
            fontFamily: FONT_BODY,
            fontWeight: 800,
            fontSize: 54,
            padding: "26px 68px",
            borderRadius: 60,
          }}
        >
          www.eldee.com
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const Reel1: React.FC<{ reel: Reel; total: number }> = ({
  reel,
  total,
}) => {
  const starts = beatStarts(reel, INTRO);
  const outroStart = total - OUTRO;
  return (
    <AbsoluteFill style={{ backgroundColor: BRAND.black }}>
      <Sequence from={INTRO} durationInFrames={total - INTRO}>
        <Footage overlay="bottom" strength={0.7} zoom order={0} />
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
