// De 5 reel-video's, gebaseerd op het script "modulaire stand".
// Elke reel toont de tekst beat-voor-beat, met intro en outro.
// Pas hier de teksten, timing (frames, 30 per seconde) en kleuren aan.

export type Beat = {
  text: string;
  frames: number;
  // Iets groter weergeven (voor openingszinnen/hooks)
  big?: boolean;
};

export type Reel = {
  id: string;
  name: string;
  accent: string;
  beats: Beat[];
};

export const REEL_INTRO_FRAMES = 75;
export const REEL_MIN_OUTRO_FRAMES = 105;
// Minimaal 30 seconden per reel (30 fps)
export const REEL_MIN_TOTAL_FRAMES = 900;

export const REELS: Reel[] = [
  {
    id: "Reel-Optie-1",
    name: "Optie 1 - Professioneel en krachtig",
    accent: "#F5A623",
    beats: [
      {
        text: "Een modulaire stand is ontworpen om flexibel te zijn.",
        frames: 120,
        big: true,
      },
      { text: "Het systeem bestaat uit herbruikbare onderdelen", frames: 95 },
      {
        text: "die eenvoudig kunnen worden aangepast aan verschillende beurslocaties en afmetingen.",
        frames: 130,
      },
      { text: "Dat maakt het niet alleen duurzaam,", frames: 80 },
      {
        text: "maar ook een slimme investering voor bedrijven die regelmatig exposeren.",
        frames: 130,
      },
      {
        text: "Met dezelfde basis creëren we iedere keer weer een unieke uitstraling.",
        frames: 145,
      },
    ],
  },
  {
    id: "Reel-Optie-2",
    name: "Optie 2 - Gericht op de voordelen",
    accent: "#4FC3F7",
    beats: [
      {
        text: "Wat een modulaire stand bijzonder maakt, is de flexibiliteit.",
        frames: 135,
        big: true,
      },
      {
        text: "De stand is opgebouwd uit een modulair systeem dat we telkens opnieuw kunnen configureren.",
        frames: 200,
      },
      {
        text: "Gaat een klant naar een grotere beurs? Dan breiden we de stand uit.",
        frames: 190,
      },
      {
        text: "Is de volgende locatie kleiner? Dan passen we hem eenvoudig aan.",
        frames: 165,
      },
      { text: "Zo blijft de uitstraling professioneel,", frames: 95 },
      {
        text: "terwijl materialen hergebruikt worden en kosten worden bespaard.",
        frames: 125,
      },
    ],
  },
  {
    id: "Reel-Optie-3",
    name: "Optie 3 - Storytelling",
    accent: "#34D399",
    beats: [
      { text: "Vandaag bouwen we een modulaire stand.", frames: 90, big: true },
      {
        text: "In tegenstelling tot een traditionele stand is deze volledig opgebouwd uit herbruikbare modules.",
        frames: 170,
      },
      {
        text: "Daardoor kunnen we de stand steeds aanpassen aan de wensen van de klant en aan verschillende beurslocaties.",
        frames: 220,
      },
      { text: "Dat betekent minder verspilling,", frames: 80 },
      { text: "meer flexibiliteit,", frames: 70 },
      {
        text: "en een stand die jarenlang opnieuw ingezet kan worden.",
        frames: 120,
      },
    ],
  },
  {
    id: "Reel-Optie-4",
    name: "Optie 4 - LinkedIn en Instagram",
    accent: "#A78BFA",
    beats: [
      {
        text: "Modulaire standbouw draait om slim ontwerpen.",
        frames: 100,
        big: true,
      },
      {
        text: "Met één modulair systeem creëren we verschillende standopstellingen,",
        frames: 125,
      },
      { text: "zonder telkens opnieuw te beginnen.", frames: 90 },
      { text: "Dat bespaart tijd,", frames: 80 },
      { text: "vermindert afval,", frames: 75 },
      {
        text: "en geeft bedrijven de flexibiliteit om op iedere beurs de juiste uitstraling neer te zetten.",
        frames: 210,
      },
    ],
  },
  {
    id: "Reel-Optie-5",
    name: "Optie 5 - Met een sterke opening",
    accent: "#FB7185",
    beats: [
      {
        text: "Wist je dat één stand jarenlang meegaat?",
        frames: 160,
        big: true,
      },
      {
        text: "Dankzij een modulair systeem kunnen we dezelfde stand steeds opnieuw opbouwen, uitbreiden of aanpassen.",
        frames: 230,
      },
      {
        text: "Zo combineren we duurzaamheid, flexibiliteit en een professionele uitstraling,",
        frames: 170,
      },
      { text: "zonder in te leveren op kwaliteit of design.", frames: 145 },
    ],
  },
];

export const reelBeatsFrames = (reel: Reel): number =>
  reel.beats.reduce((sum, beat) => sum + beat.frames, 0);

export const reelTotalFrames = (reel: Reel): number =>
  Math.max(
    REEL_MIN_TOTAL_FRAMES,
    REEL_INTRO_FRAMES + reelBeatsFrames(reel) + REEL_MIN_OUTRO_FRAMES,
  );
