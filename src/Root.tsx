import { Composition } from "remotion";
import { totalClipsDurationInFrames } from "./clips";
import {
  ModulaireStand,
  ModulaireStandMetVideo,
  TOTAL_DURATION,
} from "./Composition";
import { VIDEO_FPS } from "./constants";
import { Reel } from "./reels/Reel";
import { REELS, reelTotalFrames } from "./reels/reelData";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="ModulaireStand"
        component={ModulaireStand}
        durationInFrames={TOTAL_DURATION}
        fps={VIDEO_FPS}
        width={1080}
        height={1920}
      />
      <Composition
        id="ModulaireStandMetVideo"
        component={ModulaireStandMetVideo}
        durationInFrames={
          TOTAL_DURATION + totalClipsDurationInFrames(VIDEO_FPS)
        }
        fps={VIDEO_FPS}
        width={1080}
        height={1920}
      />
      {REELS.map((reel, index) => (
        <Composition
          key={reel.id}
          id={reel.id}
          component={Reel}
          durationInFrames={reelTotalFrames(reel)}
          fps={VIDEO_FPS}
          width={1080}
          height={1920}
          defaultProps={{ index }}
        />
      ))}
    </>
  );
};
