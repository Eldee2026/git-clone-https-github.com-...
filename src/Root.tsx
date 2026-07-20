import { Composition } from "remotion";
import { totalClipsDurationInFrames } from "./clips";
import {
  ModulaireStand,
  ModulaireStandMetVideo,
  TOTAL_DURATION,
} from "./Composition";
import { VIDEO_FPS } from "./constants";

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
    </>
  );
};
