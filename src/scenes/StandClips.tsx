import {
  AbsoluteFill,
  OffthreadVideo,
  Sequence,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { CLIPS, clipDurationInFrames } from "../clips";
import { COLORS } from "../constants";

const ClipPlayer: React.FC<{
  file: string;
  durationInFrames: number;
}> = ({ file, durationInFrames }) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(
    frame,
    [0, 12, durationInFrames - 12, durationInFrames],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <AbsoluteFill style={{ opacity }}>
      {/* Haal `muted` weg als het originele geluid van de clip hoorbaar moet zijn */}
      <OffthreadVideo
        src={staticFile(file)}
        muted
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </AbsoluteFill>
  );
};

export const StandClips: React.FC = () => {
  const { fps } = useVideoConfig();

  const starts: number[] = [];
  let acc = 0;
  for (const clip of CLIPS) {
    starts.push(acc);
    acc += clipDurationInFrames(clip, fps);
  }

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.background }}>
      {CLIPS.map((clip, i) => (
        <Sequence
          key={clip.file}
          from={starts[i]}
          durationInFrames={clipDurationInFrames(clip, fps)}
        >
          <ClipPlayer
            file={clip.file}
            durationInFrames={clipDurationInFrames(clip, fps)}
          />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
