import { REELS, reelTotalFrames } from "./reelData";
import { Reel1 } from "./styles/Reel1";
import { Reel2 } from "./styles/Reel2";
import { Reel3 } from "./styles/Reel3";
import { Reel4 } from "./styles/Reel4";
import { Reel5 } from "./styles/Reel5";

const STYLES = [Reel1, Reel2, Reel3, Reel4, Reel5];

export const Reel: React.FC<{ index: number }> = ({ index }) => {
  const reel = REELS[index];
  const total = reelTotalFrames(index, reel);
  const Style = STYLES[index];
  return <Style reel={reel} total={total} />;
};
