// Memorial data, single source of truth for the site.
// Update names, dates and times here and the rest of the site will follow.

export const person = {
  fullName: "Geremane Joshua Glenn Dipela",
  shortName: "Glenn Dipela",
  alsoKnownAs: "Bra Glenn",
  sunrise: "27 July 1971",
  sunset: "21 April 2026",
  yearsRange: "1971 – 2026",
};

export const burial = {
  date: "01 May 2026",
  cemetery: "Silicon Cemetery",
  homeVenue: "198F Luthuli Park",
  churchVenue: "Regina Pacis Hall, Seshego",
};

export const announcement =
  "It is with deep sorrow and heavy hearts that we announce the passing of our beloved brother, father, and husband, Joshua Glenn Dipela.";

export const heroSubtitle =
  "A life remembered with love, laughter, humility, and peace.";

export const programmePdfPath =
  "/programmes/joshua-glenn-dipela-order-of-service.pdf";

export type ProgrammeItem = {
  time?: string;
  title: string;
  detail?: string;
  children?: string[];
};

export type ProgrammePart = {
  id: string;
  number: string;
  heading: string;
  venue: string;
  items: ProgrammeItem[];
};

export const programme: ProgrammePart[] = [
  {
    id: "at-home",
    number: "I",
    heading: "At Home",
    venue: "198F Luthuli Park",
    items: [
      { time: "05:30 – 06:30", title: "Viewing" },
      { time: "06:00 – 06:45", title: "Short Prayer" },
    ],
  },
  {
    id: "church-service",
    number: "II",
    heading: "Church Service",
    venue: "Regina Pacis Hall, Seshego",
    items: [
      { time: "07:15 – 07:20", title: "Remarks", detail: "Programme Director" },
      { time: "07:20 – 07:25", title: "Prayer" },
      {
        time: "07:25 – 07:45",
        title: "Family Representatives",
        children: ["Dipela Family", "Duba Family"],
      },
      {
        time: "07:45 – 08:00",
        title: "Words of Condolences",
        children: ["Neighbour", "Friend", "Seshego Taxi Association"],
      },
      {
        time: "08:00 – 08:20",
        title: "Tributes",
        children: ["Siblings", "Children", "Message by Wife"],
      },
      { time: "08:20 – 08:30", title: "Obituary" },
      { time: "08:30 – 09:30", title: "Sermon" },
    ],
  },
  {
    id: "burial",
    number: "III",
    heading: "Burial",
    venue: "Silicon Cemetery",
    items: [
      { time: "10:00 – 10:20", title: "Burial Rites" },
      { time: "10:20 – 10:40", title: "Laying of Wreaths" },
      { time: "10:40 – 10:50", title: "Vote of Thanks" },
      { time: "10:50 – 11:00", title: "Closing Prayer" },
    ],
  },
];

// Obituary, lightly polished for grammar and flow while preserving voice.
export const obituary: string[] = [
  "Geremane Joshua Glenn Dipela, affectionately known as Bra Glenn, was born on 27 July 1971. He was the second-born son of the late Christopher and Martha Dipela.",
  "He completed his schooling at Pax College, the Catholic Boys School. From a young age, his faith was evident. He served as an altar boy, laying a strong spiritual foundation that remained with him throughout his life.",
  "Professionally, he worked for a brief period in sales and marketing within the publishing sector, where he was employed by Shutter and Shooter, Heinaman, and Nutrient Publishers. He then managed one of the family business ventures in Ga-Hlahla, a role he cherished until its eventual sale. He later became a member of the Seshego Polokwane Taxi Association, where he was a full and active member, and where it gave him a platform to thrive in business.",
  "He leaves behind his beloved wife, Mamoloto Meriam Dipela. Together they were blessed with two daughters, Tiny and Kopanang, a son, Thabang, and two grandchildren, Kgothatso and Ayanda, together with his siblings, Junior and Refiloe.",
  "His passing leaves a profound void in the hearts of his family, friends, and all who had the privilege of knowing him.",
  "Though his journey on earth has come to an end, his legacy of love, laughter, and peace will live on in the hearts he touched.",
  "Rest in eternal peace, Mokone. You’ll forever be remembered and missed.",
];

export const pullQuotes = [
  "From a young age, his faith was evident.",
  "His legacy of love, laughter, and peace will live on in the hearts he touched.",
];

export const closing = {
  line1: "Rest in eternal peace, Mokone.",
  line2: "You’ll forever be remembered and missed.",
};
