// De 5 reels op basis van het script "modulaire stand".
// Teksten (beats) staan hier; elke reel heeft een eigen visuele stijl
// (zie styles/Reel1..5). Timing in frames bij 30 fps.

export type Beat = {
  text: string;
  frames: number;
  big?: boolean;
};

export type Reel = {
  id: string;
  name: string;
  beats: Beat[];
};

export const REELS: Reel[] = [
  {
    id: "Reel-Optie-1",
    name: "Optie 1 - Professioneel en krachtig",
    beats: [
      {
        text: "Een modulaire stand is ontworpen om flexibel te zijn.",
        frames: 120,
        big: true,
      },
      { text: "Het systeem bestaat uit herbruikbare onderdelen", frames: 95 },
      {
        text: "aan te passen aan elke beurslocatie en afmeting.",
        frames: 130,
      },
      { text: "Niet alleen duurzaam,", frames: 80 },
      {
        text: "maar een slimme investering voor wie regelmatig exposeert.",
        frames: 130,
      },
      {
        text: "Dezelfde basis. Iedere keer een unieke uitstraling.",
        frames: 145,
      },
    ],
  },
  {
    id: "Reel-Optie-2",
    name: "Optie 2 - Gericht op de voordelen",
    beats: [
      {
        text: "Wat een modulaire stand bijzonder maakt: flexibiliteit.",
        frames: 135,
        big: true,
      },
      {
        text: "Eén modulair systeem, telkens opnieuw te configureren.",
        frames: 200,
      },
      {
        text: "Grotere beurs? We breiden de stand uit.",
        frames: 190,
      },
      {
        text: "Kleinere locatie? We passen hem eenvoudig aan.",
        frames: 165,
      },
      { text: "De uitstraling blijft professioneel.", frames: 95 },
      {
        text: "Materialen hergebruikt. Kosten bespaard.",
        frames: 125,
      },
    ],
  },
  {
    id: "Reel-Optie-3",
    name: "Optie 3 - Storytelling",
    beats: [
      { text: "Vandaag bouwen we een modulaire stand.", frames: 90, big: true },
      {
        text: "Geen traditionele stand, maar volledig herbruikbare modules.",
        frames: 170,
      },
      {
        text: "Steeds aan te passen aan de klant en de beurslocatie.",
        frames: 220,
      },
      { text: "Minder verspilling.", frames: 80 },
      { text: "Meer flexibiliteit.", frames: 70 },
      {
        text: "Een stand die jarenlang opnieuw wordt ingezet.",
        frames: 120,
      },
    ],
  },
  {
    id: "Reel-Optie-4",
    name: "Optie 4 - LinkedIn en Instagram",
    beats: [
      {
        text: "Modulaire standbouw draait om slim ontwerpen.",
        frames: 100,
        big: true,
      },
      {
        text: "Eén systeem, verschillende standopstellingen.",
        frames: 125,
      },
      { text: "Zonder telkens opnieuw te beginnen.", frames: 90 },
      { text: "Bespaart tijd.", frames: 80 },
      { text: "Vermindert afval.", frames: 75 },
      {
        text: "De flexibiliteit om op iedere beurs te overtuigen.",
        frames: 210,
      },
    ],
  },
  {
    id: "Reel-Optie-5",
    name: "Optie 5 - Met een sterke opening",
    beats: [
      {
        text: "Wist je dat één stand jarenlang meegaat?",
        frames: 160,
        big: true,
      },
      {
        text: "Dankzij een modulair systeem bouwen we dezelfde stand steeds opnieuw op.",
        frames: 230,
      },
      {
        text: "Duurzaamheid, flexibiliteit en een premium uitstraling.",
        frames: 170,
      },
      { text: "Zonder in te leveren op kwaliteit of design.", frames: 145 },
    ],
  },
];

// Per reel een eigen intro-/outro-lengte (in frames) → andere pacing/opbouw.
export const STYLE_TIMING = [
  { intro: 60, outro: 120 },
  { intro: 48, outro: 132 },
  { intro: 78, outro: 138 },
  { intro: 42, outro: 114 },
  { intro: 96, outro: 126 },
] as const;

// Min. 30 s (900 frames), max. 50 s (1500 frames).
const MIN_TOTAL = 900;
const MAX_TOTAL = 1500;

export const reelBeatsFrames = (reel: Reel): number =>
  reel.beats.reduce((sum, beat) => sum + beat.frames, 0);

export const reelTotalFrames = (index: number, reel: Reel): number => {
  const timing = STYLE_TIMING[index];
  const raw = timing.intro + reelBeatsFrames(reel) + timing.outro;
  return Math.min(MAX_TOTAL, Math.max(MIN_TOTAL, raw));
};

export const beatStarts = (reel: Reel, introFrames: number): number[] => {
  const starts: number[] = [];
  let acc = introFrames;
  for (const beat of reel.beats) {
    starts.push(acc);
    acc += beat.frames;
  }
  return starts;
};
