import {
  AbsoluteFill,
  Sequence,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { COLORS } from "../constants";

const USPS = [
  {
    icon: "♻️",
    title: "100% herbruikbaar",
    text: "Jouw stand gaat jaren mee",
  },
  {
    icon: "📐",
    title: "Elk formaat",
    text: "Van 6 m² tot 100 m², hetzelfde systeem",
  },
  {
    icon: "⚡",
    title: "Razendsnel opgebouwd",
    text: "Minder uren op de beursvloer",
  },
  {
    icon: "🌱",
    title: "Duurzame keuze",
    text: "Minder afval, meer impact",
  },
];

const CARD_DURATION = 60;

const UspCard: React.FC<{
  icon: string;
  title: string;
  text: string;
}> = ({ icon, title, text }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enter = spring({
    frame,
    fps,
    config: { damping: 200 },
  });

  const exit = interpolate(
    frame,
    [CARD_DURATION - 12, CARD_DURATION],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        opacity: enter * exit,
        transform: `translateY(${(1 - enter) * 120}px)`,
      }}
    >
      <div style={{ fontSize: 200, marginBottom: 60 }}>{icon}</div>
      <div
        style={{
          fontSize: 92,
          fontWeight: 800,
          color: COLORS.accent,
          textAlign: "center",
          paddingLeft: 60,
          paddingRight: 60,
          marginBottom: 40,
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: 56,
          fontWeight: 500,
          color: COLORS.white,
          textAlign: "center",
          paddingLeft: 90,
          paddingRight: 90,
        }}
      >
        {text}
      </div>
    </AbsoluteFill>
  );
};

export const Usps: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>
      <div
        style={{
          position: "absolute",
          top: 220,
          width: "100%",
          textAlign: "center",
          fontSize: 60,
          fontWeight: 700,
          letterSpacing: 6,
          color: COLORS.muted,
          opacity: titleOpacity,
          textTransform: "uppercase",
        }}
      >
        Waarom modulair?
      </div>
      {USPS.map((usp, i) => (
        <Sequence
          key={usp.title}
          from={i * CARD_DURATION}
          durationInFrames={CARD_DURATION}
        >
          <UspCard icon={usp.icon} title={usp.title} text={usp.text} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
