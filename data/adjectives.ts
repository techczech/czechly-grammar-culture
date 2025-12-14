
export interface AdjectiveTable {
  title: string;
  subtitle?: string;
  headers: string[];
  rows: string[][];
}

export interface AdjectivesSection {
  id: string;
  title: string;
  text?: string[];
  tables?: AdjectiveTable[];
  rules?: { label: string; text: string }[];
}

export const adjectivesData: AdjectivesSection[] = [
  {
    id: "hard",
    title: "Hard Adjectives",
    text: [
      "Adjectives where the last consonant is: <strong>-h-, -ch-, -k-, -r-, -d-, -t-, -n-</strong>.",
      "The standard ending is <strong>-ý</strong> in masculine singular."
    ],
    tables: [
      {
        title: "Singular",
        headers: ["Case", "Ten (živý)", "Ten (neživý)", "Ta", "To"],
        rows: [
          ["Nom", "dobr<strong>ý</strong>", "dobr<strong>ý</strong>", "dobr<strong>á</strong>", "dobr<strong>é</strong>"],
          ["Acc", "dobr<strong>ého</strong>", "dobr<strong>ý</strong>", "dobr<strong>ou</strong>", "dobr<strong>é</strong>"],
          ["Gen", "dobr<strong>ého</strong>", "dobr<strong>ého</strong>", "dobr<strong>é</strong>", "dobr<strong>ého</strong>"],
          ["Dat", "dobr<strong>ému</strong>", "dobr<strong>ému</strong>", "dobr<strong>é</strong>", "dobr<strong>ému</strong>"],
          ["Loc", "dobr<strong>ém</strong>", "dobr<strong>ém</strong>", "dobr<strong>é</strong>", "dobr<strong>ém</strong>"],
          ["Instr", "dobr<strong>ým</strong>", "dobr<strong>ým</strong>", "dobr<strong>ou</strong>", "dobr<strong>ým</strong>"]
        ]
      },
      {
        title: "Plural",
        headers: ["Case", "Ti (živí)", "Ty (neživý)", "Ty (Ta)", "Ta (To)"],
        rows: [
          ["Nom", "dobř<strong>í</strong>*", "dobr<strong>é</strong>", "dobr<strong>é</strong>", "dobr<strong>á</strong>"],
          ["Acc", "dobr<strong>é</strong>", "dobr<strong>é</strong>", "dobr<strong>é</strong>", "dobr<strong>á</strong>"],
          ["Gen", "dobr<strong>ých</strong>", "dobr<strong>ých</strong>", "dobr<strong>ých</strong>", "dobr<strong>ých</strong>"],
          ["Dat", "dobr<strong>ým</strong>", "dobr<strong>ým</strong>", "dobr<strong>ým</strong>", "dobr<strong>ým</strong>"],
          ["Loc", "dobr<strong>ých</strong>", "dobr<strong>ých</strong>", "dobr<strong>ých</strong>", "dobr<strong>ých</strong>"],
          ["Instr", "dobr<strong>ými</strong>", "dobr<strong>ými</strong>", "dobr<strong>ými</strong>", "dobr<strong>ými</strong>"]
        ]
      }
    ]
  },
  {
    id: "soft",
    title: "Soft Adjectives",
    text: [
      "Adjectives where the last consonant is: <strong>-ž-, -č-, -š-, -ř-, -c-, -j-,-ď-, -ť-, -ň-</strong>.",
      "The ending is <strong>-í</strong> for all genders in the Nominative singular."
    ],
    tables: [
      {
        title: "Singular",
        headers: ["Case", "Ten (živý)", "Ten (neživý)", "Ta", "To"],
        rows: [
          ["Nom", "prvn<strong>í</strong>", "prvn<strong>í</strong>", "prvn<strong>í</strong>", "prvn<strong>í</strong>"],
          ["Acc", "prvn<strong>ího</strong>", "prvn<strong>í</strong>", "prvn<strong>í</strong>", "prvn<strong>í</strong>"],
          ["Gen", "prvn<strong>ího</strong>", "prvn<strong>ího</strong>", "prvn<strong>í</strong>", "prvn<strong>ího</strong>"],
          ["Dat", "prvn<strong>ímu</strong>", "prvn<strong>ímu</strong>", "prvn<strong>í</strong>", "prvn<strong>ímu</strong>"],
          ["Loc", "prvn<strong>ím</strong>", "prvn<strong>ím</strong>", "prvn<strong>í</strong>", "prvn<strong>ím</strong>"],
          ["Instr", "prvn<strong>ím</strong>", "prvn<strong>ím</strong>", "prvn<strong>í</strong>", "prvn<strong>ím</strong>"]
        ]
      },
      {
        title: "Plural",
        headers: ["Case", "Ten (živý)", "Ten (neživý)", "Ta", "To"],
        rows: [
          ["Nom", "prvn<strong>í</strong>", "prvn<strong>í</strong>", "prvn<strong>í</strong>", "prvn<strong>í</strong>"],
          ["Acc", "prvn<strong>í</strong>", "prvn<strong>í</strong>", "prvn<strong>í</strong>", "prvn<strong>í</strong>"],
          ["Gen", "prvn<strong>ích</strong>", "prvn<strong>ích</strong>", "prvn<strong>ích</strong>", "prvn<strong>ích</strong>"],
          ["Dat", "prvn<strong>ím</strong>", "prvn<strong>ím</strong>", "prvn<strong>ím</strong>", "prvn<strong>ím</strong>"],
          ["Loc", "prvn<strong>ích</strong>", "prvn<strong>ích</strong>", "prvn<strong>ích</strong>", "prvn<strong>ích</strong>"],
          ["Instr", "prvn<strong>íma</strong>", "prvn<strong>íma</strong>", "prvn<strong>íma</strong>", "prvn<strong>íma</strong>"]
        ]
      }
    ]
  },
  {
    id: "palatalization",
    title: "Palatalization (Softening)",
    text: [
      "Czech adjectives in <em>Kdo? Co? TEN animate plural</em> soften the last consonant. The rules for softening the consonant are similar to nouns in the same case."
    ],
    tables: [
      {
        title: "Consonant Changes",
        headers: ["Change", "Example", "Meaning"],
        rows: [
          ["k > c", "sladký > sladcí", "(sweet)"],
          ["ch > š", "hluchý > hluší", "(deaf)"],
          ["r > ř", "starý > staří", "(old)"],
          ["h > z", "drahý > drazí", "(expensive)"],
          ["d > ď", "mladý > mladí", "(young)"],
          ["n > ň", "unavený > unavení", "(tired)"],
          ["t > ť", "zlatý > zlatí", "(golden)"]
        ]
      }
    ]
  },
  {
    id: "comparison",
    title: "Comparisons (More - Most)",
    text: [
      "Comparison allows you to express degrees of a quality (good, better, best)."
    ],
    tables: [
      {
        title: "Summary",
        headers: ["Good", "Better", "The Best", "English"],
        rows: [
          ["dobr<strong>ý</strong>", "lep<strong>ší</strong>", "<strong>nej</strong>lep<strong>ší</strong>", "good"],
          ["mal<strong>ý</strong>", "men<strong>ší</strong>", "<strong>nej</strong>men<strong>ší</strong>", "little/small"],
          ["levn<strong>ý</strong>", "levn<strong>ější</strong>", "<strong>nej</strong>levn<strong>ější</strong>", "cheap"]
        ]
      },
      {
        title: "Usage",
        headers: ["Form", "Usage", "Example"],
        rows: [
          ["dobr<strong>ý</strong>", "jako ...", "good like ..."],
          ["lep<strong>ší</strong>", "než ...", "better than ..."],
          ["nejlepší", "z koho, čeho ...", "the best of ..."]
        ]
      },
      {
        title: "Forming the endings",
        headers: ["Ending", "Base", "Comparative", "Superlative", "Meaning"],
        rows: [
          ["-ejší", "levný", "levnější", "nejlevnější", "cheap"],
          ["-ější", "nový", "novější", "nejnovější", "new"],
          ["", "zajímavý", "zajímavější", "nejzajímavější", "interesting"],
          ["-ší", "mladý", "mladší", "nejmladší", "young"],
          ["", "starý", "starší", "nejstarší", "old"],
          ["", "drahý", "dražší", "nejdražší (h>ž)", "expensive"],
          ["-čí", "hezký", "hezčí", "nejhezčí", "pretty"],
          ["k>č", "měkký", "měkčí", "nejměkčí", "soft"]
        ]
      }
    ]
  },
  {
    id: "formation",
    title: "How to Form Adjectives",
    text: [
      "Adjectives describe properties. The question word is <em>jaký?</em>. They can be genuine or derived."
    ],
    rules: [
      { label: "Original Adjectives", text: "malý (small), velký (large), celý (whole), žlutý (yellow), bílý (white)..." },
      { label: "Derived from Nouns (Substance)", text: "-ový (oliva > olivový), -í (včela > včelí)" },
      { label: "Derived from Nouns (Location/Job)", text: "-ský (Praha > pražský), -cký (vesnice > vesnický)" },
      { label: "Derived from Nouns (General)", text: "-ní (les > lesní), -ný (kámen > kamenný)" },
      { label: "Derived from Verbs", text: "-cí (prát > prací prášek - washing powder)" },
      { label: "Compound", text: "modrooký (blue-eyed), černobílý (black and white)" }
    ]
  },
  {
    id: "possessive",
    title: "Possessive Adjectives",
    text: [
      "Possessive adjectives are formed from proper nouns or animate nouns (Petr, Jana, otec, matka). They correspond to English <em>'s</em> (John's).",
      "They use endings <strong>-ův</strong> (masculine owner) or <strong>-in</strong> (feminine owner). They agree in case, gender, and number with the thing possessed."
    ],
    tables: [
      {
        title: "Possessive Declension",
        headers: ["Case", "Petr (M Owner)", "Jana (F Owner)", "Possessed Object", "Gender"],
        rows: [
          ["<strong>Nom</strong>", "Petr<strong>ův</strong>", "Janin", "kamarád", "TEN"],
          ["", "Petr<strong>ova</strong>", "Janina", "kamarádka", "TA"],
          ["", "Petr<strong>ovo</strong>", "Jan<strong>ino</strong>", "auto", "TO"],
          ["", "Petr<strong>ovi</strong>", "Janini", "kamarádi", "TI"],
          ["", "Petr<strong>ovy</strong>", "Janiny", "kamarádky", "TY"],
          ["<strong>Acc</strong>", "Petr<strong>ova</strong>", "Janina", "kamaráda", "TEN"],
          ["", "Petr<strong>ovu</strong>", "Jan<strong>inu</strong>", "kamarádku", "TA"],
          ["", "Petr<strong>ovo</strong>", "Jan<strong>ino</strong>", "auto", "TO"],
          ["", "Petr<strong>ovy</strong>", "Jan<strong>iny</strong>", "kamarády", "TY"],
          ["<strong>Gen</strong>", "Petr<strong>ova</strong>", "Jan<strong>ina</strong>", "kamaráda", "TEN"],
          ["", "Petr<strong>ovy</strong>", "Jan<strong>iny</strong>", "kamarádky", "TA"],
          ["", "Petr<strong>ova</strong>", "Janina", "auta", "TO"],
          ["", "Petro<strong>vých</strong>", "Janiných", "kamarádů", "TY"],
          ["<strong>Dat</strong>", "Petr<strong>ovu</strong>", "Janinu", "kamarádovi", "TEN"],
          ["", "Petr<strong>ově</strong>", "Janině", "kamarádce", "TA"],
          ["", "Petr<strong>ovu</strong>", "Jan<strong>inu</strong>", "autu", "TO"],
          ["", "Petrovým", "Janiným", "kamarádům", "TY"],
          ["<strong>Loc</strong>", "Petr<strong>ovu</strong>", "Jan<strong>inu</strong>", "kamarádovi", "TEN"],
          ["", "Petr<strong>ově</strong>", "Jan<strong>ině</strong>", "kamarádce", "TA"],
          ["", "Petr<strong>ovu</strong>", "Jan<strong>ině</strong>", "autu", "TO"],
          ["", "Petrových", "Janiných", "kamarádech", "TY"],
          ["<strong>Instr</strong>", "Petr<strong>ovým</strong>", "Janiným", "kamarádem", "TEN"],
          ["", "Petr<strong>ovou</strong>", "Janinou", "kamarádkou", "TA"],
          ["", "Petr<strong>ovým</strong>", "Janiným", "autem", "TO"],
          ["", "Petrovými", "Janinými", "kamarády", "TY"]
        ]
      }
    ]
  }
];
