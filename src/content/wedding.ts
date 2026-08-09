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
  items?: Array<string | { label: string; subItems?: string[] }>;
  subSections?: Array<{
    name: string;
    items: Array<string | { label: string; subItems?: string[] }>;
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
          {
            label: "Gin",
            subItems: ["Bombay", "Tanqueray", "Malfy", "Kapriol"],
          },
          {
            label: "Whisky",
            subItems: ["Jameson", "Jack Daniels", "Chivas", "Ballantines"],
          },
          {
            label: "Rom",
            subItems: ["Bumbu", "Bacardi Spiced", "Bacardi Carta Negra"],
          },
          {
            label: "Vodka",
            subItems: ["Absolut"],
          },
          {
            label: "Aperitive",
            subItems: ["Jaggermeister", "Aperol", "Disaronno"],
          },
          { label: "Proseco", subItems: ["Mionetto", "Moët"] },
        ],
      },
    ],
  },
  {
    name: "Băuturi non-alcoolice",
    items: [
      "Apă plată / minerală",
      {
        label: "Suc",
        subItems: ["Cola", "Fanta", "Sprite", "Schweppes", "Fuzetea", "Cappy"],
      },
      { label: "Energizant", subItems: ["Hell"] },
      "Zeamă de castraveți",
    ],
  },
];

export const usefulInfo: { title: string; body: string }[] = [
  {
    title: "Cazare",
    body: "Cabana dispune de 10 camere + 2 mini cabanute, care vor fi ocupate de cuplurile cu copii. Repartizarea pe camere se va face la sosire.",
  },
  {
    title: "Ce să iei cu tine",
    body: "Haine comode pentru natură, ceva mai gros pentru serile răcoroase și încălțăminte potrivită pentru drumuri de pădure. Vă invităm să aduceți board games, cărți de joc, table / șah, mingi, rachete de badminton sau orice altceva considerați potrivit.",
  },
  {
    title: "Transport",
    body: "Transportul de la Primăria Florești până la Casa Lorelin se va face individual și durează aproximativ 1 oră. Dacă aveți nevoie de ajutor cu mașina, vă rugăm să ne contactați în avans.",
  },
  {
    title: "Parcare",
    body: "Cabana dispune de parcare privată îngrădită.",
  },
  {
    title: "Alergii alimentare",
    body: "Vă rugăm să ne contactați în avans dacă aveți alergii alimentare. Vom avea mâncare și prăjituri gluten free pe care vă rugăm să le lăsați disponibile persoanelor intolerante.",
  },
];

export const restaurantRecommendations = [
  {
    name: "Roata",
    description:
      "Restaurant simplu și accesibil. Recomandăm în special preparatele făcute pe grătar, pizza și papanicii.",
    href: "https://www.google.com/maps/place/Roata+F%C4%83get/@46.7417262,23.4978041,14z/data=!3m1!5s0x47490e162ac2ce05:0x9f9ef5806a0a5760!4m13!1m2!2m1!1sroata!3m9!1s0x47490e162cbf9ab5:0x8f0f8fcb29b2e886!5m2!4m1!1i2!8m2!3d46.7419283!4d23.5349974!15sCgVyb2F0YVoHIgVyb2F0YZIBE3JvbWFuaWFuX3Jlc3RhdXJhbnSaAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMjFLYUU1dGR6Qk5hMnhWVFZkV1RrOVdjRk5OV0ZZMVRqSmFNMVpZWXhBQuABAPoBBQilAhA5!16s%2Fg%2F1tl1gnwl?entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Rochelle Restaurant & Pub",
    description:
      "Mâncare foarte bună, cu o atmosferă frumoasă pe malul apei. Prețurile sunt mai mari, dar merită pentru o seară relaxantă.",
    href: "https://www.google.com/maps/place/Rochelle+Restaurant+%26+Pub/@46.7762282,23.5877345,17z/data=!3m1!4b1!4m6!3m5!1s0x47490e9f219dc23f:0xfc4112baae548734!8m2!3d46.7762246!4d23.5903094!16s%2Fg%2F1tct7hrl?entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Bulgakov",
    description:
      "Mâncare cu specific unguresc, potrivită pentru o masă consistentă fără complicații. Prețurile sunt rezonabile pentru Cluj.",
    href: "https://www.google.com/maps/place/Caf%C3%A9+Bulgakov/@46.7672004,23.5854931,17z/data=!3m2!4b1!5s0x47490e829e9c8ed9:0xe70b9b47de1a5bdf!4m6!3m5!1s0x47490e82996047c5:0x161998a3283eb00c!8m2!3d46.7671968!4d23.588068!16s%2Fg%2F1tg6jb53?entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Garlic",
    description:
      "Mâncare foarte bună, cu băuturi interesante care merită încercate. Prețurile sunt mai piperate.",
    href: "https://www.google.com/maps/place/GARLIC+-+bites%26tales/@46.767245,23.585864,17z/data=!3m2!4b1!5s0x47490e829e31d91b:0x3e93a12fd2faac83!4m6!3m5!1s0x47490f589c713fbf:0x4429f2adc515cf42!8m2!3d46.7672414!4d23.5884389!16s%2Fg%2F11j1vdxfts?entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Atelierul de Pizza",
    description:
      "Restaurantul preferat din Florești, cu prețuri accesibile și mâncare foarte bună. Dacă vii cu mașina, o poți lăsa în parcarea Jysk sau Kik.",
    href: "https://www.google.com/maps/place/Atelierul+de+Pizza/@46.7385428,23.4885564,17z/data=!4m10!1m2!2m1!1satelierul+de+pizza!3m6!1s0x4749102a27c72f43:0xf0f62927aac61f5c!8m2!3d46.7366227!4d23.4911708!15sChJhdGVsaWVydWwgZGUgcGl6emFaFCISYXRlbGllcnVsIGRlIHBpenphkgEKcmVzdGF1cmFudOABAA!16s%2Fg%2F11rs02s6v?entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Urbano Shopping & Living",
    description:
      "Mini centru comercial lângă autostradă, cu multiple fast-food-uri drive-through.",
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
