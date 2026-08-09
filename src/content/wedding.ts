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
  info: "La cabană avem posibilitatea de a face foc de tabără și de a folosi ciubarul. Parcarea e suficient de spațioasă pentru cel puțin 10 mașini, iar detaliile despre transport sunt în secțiunea dedicată.",
  mapsUrl:
    "https://www.google.com/maps/place/Cabana+Lorelin/@46.688121,23.0442143,13.25z/data=!4m6!3m5!1s0x4748e7313fd0a993:0xc6feeeac4f13a81b!8m2!3d46.7031045!4d23.0209067!16s%2Fg%2F11dxjvrt_b?entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D",
  wazeUrl: "https://waze.com/ul?ll=46.7031045,23.0209067&navigate=yes",
  touristUrl:
    "https://www.turistinfo.ro/calatele/cazare-calatele/casa_lorelin-c98300.html",
  accommodation:
    "Sunt 12 camere în total, organizate în 10 spații de cazare; două căsuțe au câte 2 camere fiecare. La sosire, doamna de la cazare vă va spune unde stă fiecare.",
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
      { time: "12:00", title: "Ședință foto de grup" },
      { time: "12:30 – 14:00", title: "Drum către Casa Lorelin" },
      { time: "14:00 - 14:30", title: "Check-in" },
      { time: "14:30", title: "Pranz" },
      { time: "19:00", title: "Cină" },
      { time: "20:30", title: "Foc de tabără" },
    ],
  },
  {
    label: "Ziua 2",
    date: "22 august",
    items: [
      { time: "09:30 - 10:30", title: "Mic dejun" },
      { time: "12:30", title: "Prânz" },
      { time: "18:30", title: "Grătar în aer liber" },
    ],
  },
  {
    label: "Ziua 3",
    date: "23 august",
    items: [
      { time: "09:00 - 10:00", title: "Mic dejun" },
      { time: "10:30", title: "Check-out" },
    ],
  },
];

export type MenuSection = {
  name: string;
  servedByCasaLorelin?: boolean;
  notes?: string[];
  items?: Array<string | { label: string; details?: string }>;
  subSections?: Array<{
    name: string;
    items: Array<string | { label: string; details?: string }>;
  }>;
};

/** Meniu mâncare — adaugă preparatele în listele `items` și notele în `notes`. */
export const foodMenu: MenuSection[] = [
  {
    name: "Prânz - vineri",
    servedByCasaLorelin: true,
    notes: ["Include opțiuni gluten free"],
    items: ["Bufet suedez cu preparate reci"],
  },
  {
    name: "Cină - vineri",
    servedByCasaLorelin: true,
    notes: ["Include opțiuni gluten free"],
    items: ["Sarmale cu mămăliguță și smântână"],
  },
  {
    name: "Mic dejun - sâmbătă",
    servedByCasaLorelin: true,
    notes: ["Include opțiuni gluten free"],
    items: [
      "Ouă",
      "Brânzeturi",
      "Mezeluri",
      "Pâine",
      "Fructe",
      "Cafea și ceai",
      "etc",
    ],
  },
  {
    name: "Prânz - sâmbătă",
    servedByCasaLorelin: true,
    notes: ["Include opțiuni gluten free"],
    items: [
      "Ciorbă de burtă",
      "Ciorbă de văcuță",
      "Pâine",
      "Smântână",
      "Ardei iute",
    ],
  },
  {
    name: "Cină - sâmbătă",
    servedByCasaLorelin: false,
    notes: ["Include opțiuni gluten free"],
    items: ["Grătar (porc, pui, mici, cârnați)", "Salată"],
  },
  {
    name: "Mic dejun - duminică",
    servedByCasaLorelin: true,
    notes: ["Include opțiuni gluten free"],
    items: [
      "Ouă",
      "Brânzeturi",
      "Mezeluri",
      "Pâine",
      "Fructe",
      "Cafea și ceai",
      "etc",
    ],
  },
];

/** Meniu băuturi — completează listele. */
export const drinksMenu: MenuSection[] = [
  { name: "Vinuri", items: ["Vin roșu (demisec)", "Vin alb (demisec)"] },
  { name: "Bere", items: ["Bere blondă", "Bere brună", "Cidru"] },
  {
    name: "Spirtoase",
    subSections: [
      {
        name: "Produse proprii",
        items: ["Țuică", "Vișinată", "Afinată", "Zmeurată"],
      },
      {
        name: "Alcool",
        items: [
          "Gin — Bombay / Tanqueray / Malfy / Kapriol",
          "Whisky — Jameson / Jack Daniels / Chivas / Ballantines",
          "Rom — Bumbu / Bacardi Spiced / Bacardi Carta Negra",
          "Vodka — Absolut",
          "Aperitive — Jaggermeister / Aperol / Disaronno",
          "Proseco — Mionetto / Moët",
        ],
      },
    ],
  },
  {
    name: "Băuturi non-alcoolice",
    items: [
      "Apă plată / minerală",
      "Suc — Cola / Fanta / Sprite / Schweppes / Fuzetea / Cappy",
      "Energizant — Hell",
      "Zeamă de castraveți",
    ],
  },
];

export const usefulInfo: { title: string; body: string }[] = [
  {
    title: "Cazare",
    body: "Cazarea este la Casa Lorelin între 21 și 23 august. Sunt 10 camere în total, iar două căsuțe mai spațioase sunt rezervate pentru cele două familii care vin cu câte 2 copii. Repartizarea pe camere se face la sosire.",
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
    body: "Dacă vreți să ne vedeți sau să vedeți apartamentul, din păcate nu va fi posibil înainte de cununie. Probabil ne vedem duminică, după eveniment. O să facem poze doar la primărie, nu vom avea fotograf la cabană. Voi trimite mai târziu un link sigur unde puteți încărca și vedea fotografiile.",
  },
  {
    title: "Transport",
    body: "Drumul de la Primăria Florești până la Casa Lorelin durează aproximativ 1 oră. E asfaltat și devine puțin mai încet după intrarea în pădure, dar e bun pentru mașini. Cabană e aproape de autostradă, iar duminică e simplu să ajungi la ieșire și să pleci spre casă.",
  },
  {
    title: "Parcare și deplasare",
    body: "Avem loc de parcat suficient la cabană și încăpăm toate mașinile fără probleme. Dacă nu ești cu mașina, nu e o problemă — oricum se găsește cineva care te duce de la primărie la cabană și înapoi.",
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

export const restaurantRecommendations = [
  {
    name: "Roata",
    description:
      "Restaurantul e simplu și accesibil, cu grătare și pizza bune. Roata are și pensiune, deci e potrivit pentru cei care stau o noapte în Cluj.",
    href: "https://www.google.com/maps/place/Roata+F%C4%83get/@46.7417262,23.4978041,14z/data=!3m1!5s0x47490e162ac2ce05:0x9f9ef5806a0a5760!4m13!1m2!2m1!1sroata!3m9!1s0x47490e162cbf9ab5:0x8f0f8fcb29b2e886!5m2!4m1!1i2!8m2!3d46.7419283!4d23.5349974!15sCgVyb2F0YVoHIgVyb2F0YZIBE3JvbWFuaWFuX3Jlc3RhdXJhbnSaAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMjFLYUU1dGR6Qk5hMnhWVFZkV1RrOVdjRk5OV0ZZMVRqSmFNMVpZWXhBQuABAPoBBQilAhA5!16s%2Fg%2F1tl1gnwl?entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Rochelle Restaurant & Pub",
    description:
      "Mâncare foarte bună, atmosferă frumoasă pe malul apei. Prețurile sunt mai mari, dar merită pentru o seară relaxantă.",
    href: "https://www.google.com/maps/place/Rochelle+Restaurant+%26+Pub/@46.7762282,23.5877345,17z/data=!3m1!4b1!4m6!3m5!1s0x47490e9f219dc23f:0xfc4112baae548734!8m2!3d46.7762246!4d23.5903094!16s%2Fg%2F1tct7hrl?entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Bulgakov",
    description:
      "Mâncare ungurească ieftină și gustoasă, potrivită pentru o masă consistentă fără complicații.",
    href: "https://www.google.com/maps/place/Caf%C3%A9+Bulgakov/@46.7672004,23.5854931,17z/data=!3m2!4b1!5s0x47490e829e9c8ed9:0xe70b9b47de1a5bdf!4m6!3m5!1s0x47490e82996047c5:0x161998a3283eb00c!8m2!3d46.7671968!4d23.588068!16s%2Fg%2F1tg6jb53?entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Garlic",
    description:
      "Mancare foarte bună și prețuri rezonabile pentru Cluj, cu băuturi interesante care merită încercate.",
    href: "https://www.google.com/maps/place/GARLIC+-+bites%26tales/@46.767245,23.585864,17z/data=!3m2!4b1!5s0x47490e829e31d91b:0x3e93a12fd2faac83!4m6!3m5!1s0x47490f589c713fbf:0x4429f2adc515cf42!8m2!3d46.7672414!4d23.5884389!16s%2Fg%2F11j1vdxfts?entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Atelierul de Pizza",
    description:
      "Pizza preferată din Florești, ieftină și gustoasă. Dacă vii cu mașina, poți lăsa mașina pe strada cu Kik sau JYSK.",
    href: "https://www.google.com/maps/place/Atelierul+de+Pizza/@46.7385428,23.4885564,17z/data=!4m10!1m2!2m1!1satelierul+de+pizza!3m6!1s0x4749102a27c72f43:0xf0f62927aac61f5c!8m2!3d46.7366227!4d23.4911708!15sChJhdGVsaWVydWwgZGUgcGl6emFaFCISYXRlbGllcnVsIGRlIHBpenphkgEKcmVzdGF1cmFudOABAA!16s%2Fg%2F11rs02s6v?entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Urbano Shopping & Living",
    description:
      "Mini centru comercial lângă autostradă, util pentru drive-through înainte de drum lung (McDonald's, Popeyes, Burger King, Starbucks).",
    href: "https://www.google.com/maps/place/URBANO+Shopping+%26+Living/@46.7385428,23.4885564,17z/data=!4m6!3m5!1s0x4749110071fd2485:0x3b2d5d6155605d2a!8m2!3d46.7467918!4d23.4512407!16s%2Fg%2F11ypcfgds3?entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D",
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
