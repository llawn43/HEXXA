/**
 * Tour dates.
 *
 * Maintained by hand rather than pulled from a name-matched Bandsintown
 * widget, which would risk showing another artist's dates. To add a show,
 * append an entry below; past dates drop off the site automatically at build.
 *
 * `tickets: null` falls back to the Bandsintown artist page.
 */
export interface Show {
  /** ISO date, local to the venue. */
  date: string;
  /** Door or set time as displayed. Optional. */
  time?: string;
  city: string;
  region: string;
  country: string;
  venue: string;
  /** Festival or event name, when the show is not simply billed as HEXXA. */
  event?: string;
  /** Other billed artists, for shared lineups. */
  lineup?: string[];
  tickets: string | null;
  /** Multi-day festivals show a range instead of a single date. */
  runsThrough?: string;
  soldOut?: boolean;
}

export const shows: Show[] = [
  {
    date: "2026-09-07",
    time: "5:00 PM",
    city: "La Cygne",
    region: "KS",
    country: "US",
    venue: "Wildwood Outdoor Education Center",
    event: "Dancefestopia",
    runsThrough: "2026-09-13",
    tickets: null,
  },
  {
    date: "2026-09-25",
    time: "9:00 PM",
    city: "Pittsburgh",
    region: "PA",
    country: "US",
    venue: "SideQuest on 44th",
    tickets: null,
  },
  {
    date: "2026-09-26",
    time: "9:30 PM",
    city: "Columbia",
    region: "MD",
    country: "US",
    venue: "Reckless Shepherd Brewing",
    event: "BRONDO x HEXXA",
    lineup: ["BRONDO"],
    tickets: null,
  },
  {
    date: "2026-10-02",
    time: "9:00 PM",
    city: "Winfield",
    region: "TN",
    country: "US",
    venue: "Possum Trot",
    lineup: ["LUCI"],
    tickets: null,
  },
  {
    date: "2026-10-09",
    time: "5:00 PM",
    city: "Eagle",
    region: "WI",
    country: "US",
    venue: "Kettle Moraine Ranch",
    event: "Farmlands",
    runsThrough: "2026-10-12",
    tickets: null,
  },
  {
    date: "2026-10-24",
    time: "9:00 PM",
    city: "Los Angeles",
    region: "CA",
    country: "US",
    venue: "1720",
    lineup: ["Whales", "Wodd"],
    tickets: null,
  },
  {
    date: "2026-10-30",
    time: "8:00 PM",
    city: "Denver",
    region: "CO",
    country: "US",
    venue: "Meow Wolf Denver | Convergence Station",
    lineup: ["Austeria", "Osyris", "Solfire"],
    tickets: null,
  },
];

/**
 * Shows still to come, soonest first.
 *
 * Compares against the start of today so a show does not vanish from the site
 * partway through its own event day. Multi-day festivals stay listed until
 * their final day has passed.
 */
export function upcomingShows(now: Date = new Date()): Show[] {
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  return shows
    .filter((show) => new Date(`${show.runsThrough ?? show.date}T23:59:59`) >= startOfToday)
    .sort((a, b) => a.date.localeCompare(b.date));
}

/** "Sat Oct 24" / "Oct 9 – 12" for multi-day festivals. */
export function formatShowDate(show: Show): string {
  const start = new Date(`${show.date}T12:00:00`);

  if (show.runsThrough) {
    const end = new Date(`${show.runsThrough}T12:00:00`);
    const startMonth = start.toLocaleDateString("en-US", { month: "short" });
    const endMonth = end.toLocaleDateString("en-US", { month: "short" });

    return startMonth === endMonth
      ? `${startMonth} ${start.getDate()} – ${end.getDate()}`
      : `${startMonth} ${start.getDate()} – ${endMonth} ${end.getDate()}`;
  }

  return start.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

export function formatShowLocation(show: Show): string {
  return `${show.city}, ${show.region}`;
}
