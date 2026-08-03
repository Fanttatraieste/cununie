/**
 * EDITEAZĂ AICI TOT CONȚINUTUL SITE-ULUI.
 * Textele, orele, link-urile Google Maps și meniurile se schimbă doar în acest fișier.
 */

export const couple = {
  names: "Vlad & Iulia",
  motto: "Officially stuck together",
};

/** Data și ora cununiei civile (folosită de cronometru). Format: YYYY-MM-DDTHH:mm:ss */
export const ceremonyDateISO = "2026-08-21T11:30:00";

export const ceremony = {
  title: "Cununia civilă",
  date: "21 august",
  time: "11:30",
  location: "Primăria Florești",
  address: "Florești, județul Cluj",
  /** Adaugă aici link-ul Google Maps când îl ai. Lasă gol pentru buton dezactivat. */
  mapsUrl: "",
  mapNote: "Harta va fi adăugată în curând",
};

export const weekend = {
  title: "Weekend la Casa Lorelin",
  period: "21 – 23 august",
  location: "Casa Lorelin",
  /** Informații despre locație — completează mai târziu. */
  info: "Detaliile despre locație vor fi adăugate în curând.",
  mapsUrl: "",
  mapNote: "Harta va fi adăugată în curând",
  accommodation: "Repartizarea pe camere se va face la sosire.",
};

export type ScheduleItem = { time: string; title: string; note?: string };
export type ScheduleDay = {
  label: string;
  date: string;
  items: ScheduleItem[];
  extra?: string;
};

export const schedule: ScheduleDay[] = [
  {
    label: "Ziua 1",
    date: "21 august",
    items: [
      { time: "11:30", title: "Cununia civilă" },
      { time: "12:00", title: "Poze" },
      { time: "12:30 – 14:00", title: "Drum către Casa Lorelin" },
      { time: "14:00", title: "Lunch" },
      { time: "19:00", title: "Cină" },
    ],
  },
  {
    label: "Ziua 2",
    date: "22 august",
    items: [
      { time: "09:30", title: "Mic dejun" },
      { time: "12:30", title: "Prânz" },
      { time: "19:00", title: "Cină" },
    ],
    extra: "Foc de tabără",
  },
  {
    label: "Ziua 3",
    date: "23 august",
    items: [
      { time: "09:30", title: "Mic dejun" },
      { time: "11:00", title: "Check-out" },
    ],
  },
];

/** Meniu mâncare — adaugă preparatele în listele `items`. */
export const foodMenu: { name: string; note?: string; items: string[] }[] = [
  { name: "Mic dejun", note: "09:30", items: [] },
  { name: "Lunch", note: "14:00", items: [] },
  { name: "Prânz", note: "12:30", items: [] },
  { name: "Cină", note: "19:00", items: [] },
];

/** Meniu băuturi — completează listele. */
export const drinksMenu: { name: string; items: string[] }[] = [
  { name: "Vinuri", items: ["Se completează în curând", "Se completează în curând"] },
  { name: "Bere", items: ["Se completează în curând", "Se completează în curând"] },
  { name: "Spirtoase", items: ["Se completează în curând", "Se completează în curând"] },
  { name: "Cocktailuri", items: ["Se completează în curând", "Se completează în curând"] },
  {
    name: "Băuturi non-alcoolice",
    items: ["Se completează în curând", "Se completează în curând"],
  },
  { name: "Cafea / Ceai", items: ["Se completează în curând", "Se completează în curând"] },
];

export const usefulInfo: { title: string; body: string }[] = [
  {
    title: "Cazare",
    body: "Cazarea este la Casa Lorelin, în perioada 21 – 23 august. Repartizarea pe camere se va face la sosire.",
  },
  {
    title: "Ce să iei cu tine",
    body: "Haine comode pentru natură, ceva mai gros pentru serile răcoroase și încălțăminte potrivită pentru drumuri de pădure.",
  },
  {
    title: "Transport",
    body: "Drumul de la Primăria Florești către Casa Lorelin durează aproximativ o oră și jumătate. Detaliile se vor completa în curând.",
  },
  {
    title: "Alte informații",
    body: "Orice detaliu nou va fi adăugat aici înainte de eveniment.",
  },
];

export const navLinks = [
  { href: "#cununie", label: "Cununia civilă" },
  { href: "#weekend", label: "Casa Lorelin" },
  { href: "#program", label: "Program" },
  { href: "#meniu", label: "Meniu" },
  { href: "#bauturi", label: "Băuturi" },
  { href: "#rsvp", label: "RSVP" },
  { href: "#info", label: "Informații" },
];
