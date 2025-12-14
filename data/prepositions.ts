
export interface TimePreposition {
  prep: string;
  case: string;
  example: string;
  english: string;
  englishEx: string;
}

export interface SpaceMapping {
  type: string;
  locational: { prep: string; case: string };
  directional: { prep: string; case: string };
  origin: { prep: string; case: string };
  icon: 'box' | 'surface' | 'person';
}

export interface LocationExample {
  noun: string;
  dir: string;
  loc: string;
}

export interface SpatialRow {
  static: { prep: string; case: string; meaning: string; icon?: string };
  dynamic: { prep: string; case: string; meaning: string; icon?: string };
}

export interface MiscPreposition {
  prep: string;
  case: string;
  meaning: string;
}

export const timePrepositions: TimePreposition[] = [
  { prep: "v/ve", case: "Koho? Co? (Acc)", example: "v 5 hodin, v úterý", english: "at, on", englishEx: "5 o'clock, Tuesday" },
  { prep: "v/ve", case: "Kom? Čem? (Loc)", example: "v lednu, v zimě, v roce 1948", english: "in", englishEx: "January, winter, 1948" },
  { prep: "během", case: "Koho? Čeho? (Gen)", example: "během léta, během hodiny", english: "during, in", englishEx: "during summer, in an hour" },
  { prep: "kolem", case: "Koho? Čeho? (Gen)", example: "kolem páté", english: "around", englishEx: "five o' clock" },
  { prep: "přes", case: "Koho? Co? (Acc)", example: "přes den, přes víkend", english: "during", englishEx: "during the day, during the weekend" },
  { prep: "za", case: "Koho? Co? (Acc)", example: "za jeden den", english: "in, after", englishEx: "in/after one day" },
  { prep: "po", case: "Kom? Čem? (Loc)", example: "po obědě, po prázdninách", english: "after", englishEx: "after lunch, after vacation" },
  { prep: "od … do", case: "Koho? Čeho? (Gen)", example: "od pondělí do pátku", english: "from … till …", englishEx: "from Monday till Friday" },
  { prep: "před", case: "Kým? Čím? (Instr)", example: "před rokem, před hodinou", english: "before, ago", englishEx: "a year, month ago" },
  { prep: "k", case: "Komu? Čemu? (Dat)", example: "k večeru, k ránu", english: "toward", englishEx: "toward the evening" },
  { prep: "na", case: "Koho? Co? (Acc)", example: "na týden, na prázdniny", english: "for", englishEx: "for a week, for a holiday" },
  { prep: "o", case: "Kom? Čem? (Loc)", example: "o víkendu, o prázdninách", english: "on, during", englishEx: "on the weekend, during vacation" },
  { prep: "ob", case: "Koho? Co? (Acc)", example: "ob týden, ob den", english: "every other", englishEx: "every other day, week" },
];

export const spaceMappings: SpaceMapping[] = [
  {
    type: "Enclosed / Cities / Countries",
    locational: { prep: "v(e)", case: "Loc" },
    directional: { prep: "do", case: "Gen" },
    origin: { prep: "z(e)", case: "Gen" },
    icon: 'box'
  },
  {
    type: "People / Near Object",
    locational: { prep: "u / vedle", case: "Gen" },
    directional: { prep: "k(e)", case: "Dat" },
    origin: { prep: "od(e)", case: "Gen" },
    icon: 'person'
  }
];

// Note: Usage of NA (Surfaces) typically pairs with Z/ZE for origin, similar to V/DO.
// The triad V->DO->Z is usually contrasted with NA->NA->Z(or S).

export const usageExamples = {
  closed: {
    title: "Closed Space / Cities / Countries",
    triad: "V (Loc) ↔ DO (Gen)",
    items: [
      { noun: "škola", dir: "do školy", loc: "ve škole" },
      { noun: "hospoda", dir: "do hospody", loc: "v hospodě" },
      { noun: "kavárna", dir: "do kavárny", loc: "v kavárně" },
      { noun: "Německo", dir: "do Německa", loc: "v Německu" },
      { noun: "Praha", dir: "do Prahy", loc: "v Praze" },
      { noun: "Brno", dir: "do Brna", loc: "v Brně" }
    ]
  },
  open: {
    title: "Open Space / Events / Islands",
    triad: "NA (Loc) ↔ NA (Acc)",
    items: [
      { noun: "kolej", dir: "na kolej", loc: "na koleji" },
      { noun: "náměstí", dir: "na náměstí", loc: "na náměstí" },
      { noun: "diskotéka", dir: "na diskotéku", loc: "na diskotéce" },
      { noun: "koncert", dir: "na koncert", loc: "na koncertě" },
      { noun: "hrad", dir: "na hrad", loc: "na hradě" },
      { noun: "Morava", dir: "na Moravu", loc: "na Moravě" },
      { noun: "Slovensko", dir: "na Slovensko", loc: "na Slovensku" },
      { noun: "ostrov", dir: "na ostrov", loc: "na ostrově" },
      { noun: "Havaj", dir: "na Havaj", loc: "na Havaji" }
    ]
  }
};

export const spatialPairs: SpatialRow[] = [
  {
    static: { prep: "na", case: "Loc", meaning: "on" },
    dynamic: { prep: "na", case: "Acc", meaning: "onto" }
  },
  {
    static: { prep: "před", case: "Instr", meaning: "before" },
    dynamic: { prep: "před", case: "Acc", meaning: "before" }
  },
  {
    static: { prep: "za", case: "Instr", meaning: "behind" },
    dynamic: { prep: "za", case: "Acc", meaning: "behind" }
  },
  {
    static: { prep: "nad", case: "Instr", meaning: "above" },
    dynamic: { prep: "nad", case: "Acc", meaning: "over" }
  },
  {
    static: { prep: "pod", case: "Instr", meaning: "under" },
    dynamic: { prep: "pod", case: "Acc", meaning: "under" }
  },
  {
    static: { prep: "blízko", case: "Gen", meaning: "near" },
    dynamic: { prep: "k", case: "Dat", meaning: "to/toward" }
  },
  {
    static: { prep: "vedle", case: "Gen", meaning: "next to" },
    dynamic: { prep: "do", case: "Gen", meaning: "into" }
  },
  {
    static: { prep: "u", case: "Gen", meaning: "near/by" },
    dynamic: { prep: "od", case: "Gen", meaning: "from (edge)" }
  },
  {
    static: { prep: "v", case: "Loc", meaning: "in" },
    dynamic: { prep: "z", case: "Gen", meaning: "from (inside)" }
  },
  {
    static: { prep: "naproti", case: "Dat", meaning: "opposite" },
    dynamic: { prep: "naproti", case: "Dat", meaning: "opposite" }
  }
];

export const miscPrepositions: MiscPreposition[] = [
  { prep: "o", case: "Kom? Čem? (Loc)", meaning: "about" },
  { prep: "s", case: "Kým? Čím? (Instr)", meaning: "with" },
  { prep: "bez", case: "Koho? Čeho? (Gen)", meaning: "without" },
  { prep: "mimo", case: "Koho? Co? (Acc)", meaning: "except" },
  { prep: "kromě", case: "Koho? Čeho? (Gen)", meaning: "except" },
  { prep: "včetně", case: "Koho? Čeho? (Gen)", meaning: "including" },
];

export const otherUses: MiscPreposition[] = [
  { prep: "o", case: "Koho? Co? (Acc)", meaning: "sth. (as in bet sth., be afraid for sth)" },
  { prep: "v", case: "Koho? Co? (Acc)", meaning: "in (as in believe in)" },
  { prep: "za", case: "Koho? Čeho? (Gen)", meaning: "during the time of" },
  { prep: "z", case: "Koho? Čeho? (Gen)", meaning: "down from" },
];
