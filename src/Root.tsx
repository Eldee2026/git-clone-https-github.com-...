import { Composition } from "remotion";
import { ModulaireStand, TOTAL_DURATION } from "./Composition";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="ModulaireStand"
      component={ModulaireStand}
      durationInFrames={TOTAL_DURATION}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};
