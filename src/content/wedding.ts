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
  mapsUrl:
    "https://www.google.com/maps/place/Prim%C4%83ria+Flore%C8%99ti/@46.7428089,23.4814105,16z/data=!4m6!3m5!1s0x47490fd9a3e7df25:0x1e9a4dc81bce0fe7!8m2!3d46.7434486!4d23.4856806!16s%2Fg%2F11ckvlvvtm?entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D",
  wazeUrl: "https://waze.com/ul?ll=46.7434486,23.4856806&navigate=yes",
};

export const weekend = {
  title: "Weekend la Casa Lorelin",
  period: "21 – 23 august",
  location: "Casa Lorelin",
  info: "Ziua 2 include foc de tabără și ciubăr; avem mult loc de parcat mașinile și, chiar dacă suntem multe mașini, încă ne încăpem toți. Dacă nu vii cu mașina, nu e nicio problemă — sigur găsești cu cine să mergi de la primărie la cabană și înapoi.",
  mapsUrl:
    "https://www.google.com/maps/place/Cabana+Lorelin/@46.688121,23.0442143,13.25z/data=!4m6!3m5!1s0x4748e7313fd0a993:0xc6feeeac4f13a81b!8m2!3d46.7031045!4d23.0209067!16s%2Fg%2F11dxjvrt_b?entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D",
  wazeUrl: "https://waze.com/ul?ll=46.7031045,23.0209067&navigate=yes",
  touristUrl:
    "https://www.turistinfo.ro/calatele/cazare-calatele/casa_lorelin-c98300.html",
  accommodation:
    "Sunt 12 camere în total, organizate în 10 spații de cazare; două căsuțe au câte 2 camere. La sosire, doamna de la cazare va nota pe uși cine stă unde.",
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
      { time: "14:00", title: "Lunch — platouri și prăjituri" },
      { time: "19:00", title: "Cină — sarmale" },
    ],
  },
  {
    label: "Ziua 2",
    date: "22 august",
    items: [
      { time: "09:30", title: "Mic dejun" },
      { time: "12:30", title: "Prânz — ciorbă de burtă și ciorbă de văcuță" },
      { time: "18:30", title: "Grătar în aer liber" },
    ],
    extra: "Nu există cină servită în ziua 2",
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
  {
    name: "Mic dejun",
    note: "09:30",
    items: ["Mic dejun servit de Casa Lorelin", "Opțiuni calde și reci"],
  },
  {
    name: "Lunch",
    note: "14:00",
    items: ["Platouri cu mâncare", "Prăjituri separate gluten-free"],
  },
  {
    name: "Prânz",
    note: "12:30",
    items: ["Ciorbă de burtă", "Ciorbă de văcuță", "Servit de cabană"],
  },
  {
    name: "Cină",
    note: "19:00",
    items: [
      "Sarmale fără gluten (fără vegeta)",
      "Porții separate pentru intoleranți la gluten",
    ],
  },
];

/** Meniu băuturi — completează listele. */
export const drinksMenu: { name: string; items: string[] }[] = [
  { name: "Vinuri", items: ["Vin roșu", "Vin alb"] },
  { name: "Bere", items: ["Bere blondă", "Bere brună"] },
  {
    name: "Spirtoase",
    items: ["Țuică", "Gin", "Jagger", "Whisky", "Aperol", "Vodka", "Rom"],
  },
  {
    name: "Băuturi non-alcoolice",
    items: ["Apă plată", "Apă minerală", "Suc", "Fructe și gheață"],
  },
];

export const usefulInfo: { title: string; body: string }[] = [
  {
    title: "Cazare",
    body: "Cazarea este la Casa Lorelin, în perioada 21 – 23 august. Sunt 10 camere în total; două căsuțe mai spațioase sunt rezervate pentru cele două familii care vin cu câte 2 copii. Repartizarea pe camere se face la sosire.",
  },
  {
    title: "Ce să iei cu tine",
    body: "Haine comode pentru natură, ceva mai gros pentru serile răcoroase și încălțăminte potrivită pentru drumuri de pădure.",
  },
  {
    title: "Înainte de cununie",
    body: "Înainte de ziua evenimentului suntem foarte ocupați cu pregătiri, programări și cumpărături. Joi nu putem primi vizite, iar înainte de cununie mergem la cabană să lăsăm alimente, băuturi și alte chestii.",
  },
  {
    title: "Vizite și poze",
    body: "Dacă vreți să ne vedeți sau să vedeți apartamentul, din păcate nu va fi posibil înainte de cununie. Putem să ne vedem eventual duminică, după eveniment. Poze facem doar la primărie, nu vom avea fotograf la cabană. Voi trimite mai târziu un link sigur pentru încărcat și vizualizat fotografii.",
  },
  {
    title: "Transport",
    body: "Transportul de la Primăria Florești până la Casa Lorelin durează aproximativ 1h. Drumul este asfaltat și se întâmplă lent după intrarea în pădure, dar este bun pentru mașini. Cabană este aproape de autostradă, iar duminică ajungi ușor la intrarea pe autostradă și plecarea spre casă este la fel de simplă.",
  },
  {
    title: "Parcare și deplasare",
    body: "Avem mult loc de parcat la cabană și putem găzdui toate mașinile fără problemă. Dacă nu ești cu mașina, nu e un impediment: există întotdeauna cineva care poate merge cu tine de la primărie la cabană și înapoi.",
  },
  {
    title: "Restaurante în Cluj",
    body: "Pentru cei care ajung cu o zi mai devreme, câteva recomandări bune: Roata (mâncare simplă, prețuri bune, grătare și pizza), Rochelle (restaurant mai elegant cu terasă pe apă), Bulgakov (mâncare ungurească la prețuri accesibile), Garlic (mâncare bună și băuturi interesante) și Atelierul de Pizza în Florești. Dacă pleci spre autostradă, Urbano e util pentru drive-through înainte de drum lung.",
  },
  {
    title: "Mese",
    body: "Micul dejun și prânzul din ziua 2 sunt servite de cabană, la fel ca cina din ziua 1. La sosire, la prânz, vom avea platouri cu mâncare și prăjituri, iar seara avem sarmale. În ziua 2 facem grătar și nu avem cină servită.",
  },
  {
    title: "Alergii alimentare",
    body: "Avem 3 persoane intolerante la gluten. Prăjiturile și platourile gluten-free sunt separate și celelalte persoane sunt rugate să nu le consume. Sarmalele și ciorbele sunt pregătite fără gluten, inclusiv fără vegeta.",
  },
];

export const navLinks = [
  { href: "#cununie", label: "Cununia civilă" },
  { href: "#weekend", label: "Casa Lorelin" },
  { href: "#program", label: "Program" },
  { href: "#meniu", label: "Meniu" },
  { href: "#bauturi", label: "Băuturi" },
  { href: "#info", label: "Informații" },
];
