export type EventItem = {
  id: number;
  day: string;
  date: string;
  month: string;
  time: string;
  type: string;
  title: string;
  description: string;
  image: string;
  seat: number;
  category: string;
  featured?: boolean;
};
export const events: EventItem[] = [
  {
    id: 1,
    day: "FRI",
    date: "02",
    month: "OCT",
    time: "8:00 PM",
    type: "KARAOKE",
    title: "KARAOKE NIGHT",
    category: "Karaoke",
    description: "Grab the mic, bring your people and make some noise.",
    image: "/images/event-karaoke.jpg",
    seat: 50,
    featured: true,
  },
  {
    id: 2,
    day: "SAT",
    date: "03",
    month: "OCT",
    time: "8:30 PM",
    type: "COMEDY",
    title: "STAND-UP EVENING",
    category: "Comedy",
    description: "A night of new jokes, familiar faces and good food.",
    image: "/images/event-comedy.jpg",
    seat: 50,
    featured: false,
  },
  {
    id: 3,
    day: "SUN",
    date: "04",
    month: "OCT",
    time: "7:00 PM",
    type: "LIVE MUSIC",
    title: "SUNDAY SOLO",
    category: "Live Music",
    description: "Slow Sunday evenings with live acoustic music.",
    image: "/images/event-music.jpg",
    seat: 100,
    featured: false,
  },
];