/**
 * Bios in three lengths so press and promoters can grab whichever fits.
 *
 * `oneLiner` and `short` are the copy currently used by AB Touring and
 * Beatport; `long` is the Spotify artist bio. Keeping them verbatim means the
 * site matches what her team already sends out.
 */
export const bio = {
  oneLiner: "Philadelphia's dubstep demon — heavy bass, high drag, total destruction.",

  /**
   * Short enough to carry the display face. The long bio below is body copy
   * and must never be set in Anton, which is a headline typeface.
   */
  pull: "Every drop is a curse. Every transition a transformation.",

  short:
    "Hailing from the netherworld, HEXXA's signature blend of heavy bass music has been demolishing crowds from massive festivals like Lost Lands and North Coast to the Philly underground at The Ave. Her sets are loaded with heavy dubstep bangers, a splash of experimental tracks, and the occasional riddim tune. When HEXXA takes the stage, expect jaw-dropping doubles, crazy edits, and complete dubstep destruction.",

  long: "From the shadows of the Netherworld to the frontlines of the bass scene, HEXXA is a force of pure sonic sorcery. Blending bone-crushing dubstep with haunting melodies and dark cinematic flair, this demon queen has carved her own dimension in bass music. Whether unleashing chaos at North Coast or igniting the Philly underground at The Ave, HEXXA commands every stage like a possessed high priestess of sound. Her sets are spellbinding rituals — stacked with jaw-dropping doubles, twisted edits, and just enough riddim and experimental chaos to keep crowds gasping. Every drop is a curse, every transition a transformation. You don't just listen to HEXXA. You summon her.",

  /** Extra paragraphs for /about only. Not part of the press-kit bios. */
  story: [
    "Behind the makeup, the drops and the chaos is a lifelong musician. Before the decks and the festival stages there was a kid learning viola and trumpet, building a foundation without knowing where it would lead. That sense of performance followed into college, where drag entered the picture and became central to everything HEXXA is today.",
    "The name arrived in a dream, shaped by late nights watching American Horror Story: Coven and an obsession with the Hex Girls. It just made sense to become HEXXA.",
    "Everything shifted on first hearing Excision's “Lockdown.” The energy, and the way a single song could move an entire crowd, made it obvious there was no need to choose between performer and producer. The two fused instead — and the Dubstep Drag Queen stepped forward.",
    "What followed wasn't instant success but steady, intentional growth: friends teaching the fundamentals, hours on an XDJ-RX3 tightening transitions and perfecting doubles, then production guided by mentorship that continues today. Not everyone understood it at first. That resistance only sharpened the identity rather than softening it.",
    "Now the studio is deliberately simple — a MacBook Pro and Ableton. The output is anything but. Releases have landed on Kannibalen, Bassrush and Subsidia, and the live show has run from Lost Lands and Bass Canyon to Forbidden Kingdom and Escapade.",
  ],

  /** Verbatim quotes. Attribution matters for the press page. */
  quotes: [
    {
      text: "BE YOURSELF UNAPOLOGETICALLY! Your uniqueness is what will set you apart in the long run and what people will remember you for.",
      source: "HEXXA",
      context: "Moon Lvnding, Beyond The Booth",
    },
    {
      text: "It's aggressive, sassy, and unapologetic, which is exactly how I approach my music and my sets. If you want to understand my energy as an artist, that track says it all.",
      source: "HEXXA on “FEMME FATALE”",
      context: "Moon Lvnding, Beyond The Booth",
    },
    {
      text: "Being a pioneering drag artist in the EDM scene has presented itself as a challenge, but fuels her drive to take over the scene to pave the way for emerging queer artists.",
      source: "AB Touring",
      context: "Artist roster",
    },
    {
      text: "I want to keep pushing my sound, headline more festivals, and eventually have my own tour — and continue creating more space and visibility for queer artists in the bass scene.",
      source: "HEXXA",
      context: "Moon Lvnding, Beyond The Booth",
    },
  ],

  /** Credibility markers surfaced on /about and /press. */
  facts: [
    { label: "Based in", value: "Philadelphia, PA" },
    { label: "Genre", value: "Dubstep / Bass / Riddim" },
    { label: "Labels", value: "Kannibalen, Bassrush, Subsidia" },
    { label: "Studio", value: "Ableton Live" },
  ],

  /** Stages played, used as a scrolling marquee of proof. */
  stages: [
    "Lost Lands",
    "Bass Canyon",
    "Forbidden Kingdom",
    "North Coast",
    "Escapade",
    "Dancefestopia",
    "Farmlands",
    "Meow Wolf Denver",
    "The Ave — Philadelphia",
  ],

  /** Artists she has shared stages with, per her booking one-sheet. */
  sharedStages: ["Virtual Riot", "HVDES", "Level Up", "Vastive", "Wreckno"],
} as const;
