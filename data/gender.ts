
export interface GenderSection {
  heading: string;
  text: string[];
  tables?: {
    headers: string[];
    rows: string[][];
  }[];
  postText?: string[];
}

export const genderData: GenderSection[] = [
  {
    heading: "What is gender?",
    text: [
      "All Czech nouns have what is called gender. The gender of the noun is most important when you need to decide on the form of numbers, pronouns, and adjectives describing it. The words describing or determing the noun must change their form to match the noun’s gender. It also happens with verbs in the past tense.",
      "To match the noun’s gender, the other words have to either add an appropriate ending or changing an existing one. For example, <em>ten bílý dům byl</em> vs <em>ta bílá kniha byla</em> - that‑masculine white‑masculine house was‑feminine vs. that‑feminine white‑feminine book was‑feminine.",
      "Czech has three genders (like German and unlike French or Spanish which only have two). They are <em>masculine</em>, <em>feminine</em>, and <em>neuter</em>. In some ways, you can think about gender as if, for Czechs every object was either a <em>man</em>, a <em>woman</em>, or a <em>child</em>.",
      "To make it easier to remember that gender mostly matters for the words that interact with the noun, in the charts in this collection, we use the gender forms for the word <em>this</em>: <strong>ten</strong>, <strong>ta</strong>, <strong>to</strong>."
    ]
  },
  {
    heading: "Summary of agreement rules!",
    text: [
      "The chart below summarizes the rules of agreement between nouns and adjectives in singular and plural of the <em>Kdo? Co?</em> case.",
      "<strong>!</strong> Masculine (TEN) nouns are further divided into <strong>animate</strong> and <strong>inanimate</strong>. This is reflected in plural agreement."
    ],
    tables: [
      {
        headers: ["Gender", "Sg Demo", "Sg Adj", "Noun", "Pl Demo", "Pl Adj", "Pl Noun"],
        rows: [
          ["<strong>Masculine</strong> (Animate)", "TEN", "dobr<strong>ý</strong>", "muž", "TI", "dobř<strong>í</strong>", "muži"],
          ["<strong>Masculine</strong> (Inanimate)", "TEN", "dobr<strong>ý</strong>", "rohlík / čaj", "TY", "dobr<strong>é</strong>", "rohlík<strong>y</strong> / čaj<strong>e</strong>"],
          ["<strong>Feminine</strong>", "TA", "dobr<strong>á</strong>", "káva / rýže", "TY", "dobr<strong>é</strong>", "káv<strong>y</strong> / rýž<strong>e</strong>"],
          ["<strong>Neuter</strong>", "TO", "dobr<strong>é</strong>", "pivo / pití", "TA", "dobr<strong>á</strong>", "piv<strong>a</strong> / pit<strong>í</strong>"]
        ]
      }
    ]
  },
  {
    heading: "How to tell the gender of a noun",
    text: [
      "In Czech, you can tell the gender from the ending about 80% of the time. The general rule is: <em>-C = masculine</em>, <em>-a = feminine</em>, and <em>-o = neuter</em>.",
      "Here are a few gender indicators to look out for which are almost exception proof:"
    ],
    tables: [
      {
        headers: ["Endings", "Gender", "Examples"],
        rows: [
          ["b, g, k, h, ch, d, r, p, n, m, l", "<strong>ten</strong>", "rohlík, oběd"],
          ["a", "<strong>ta</strong>", "Praha, voda, kola, houska"],
          ["o", "<strong>to</strong>", "město"],
          ["í", "<strong>to</strong>", "nádraží"]
        ]
      }
    ],
    postText: [
      "There are only a handful of <em>ten</em> nouns with <em>a</em> for an ending: <em>chleba</em> (bread), <em>táta</em> (dad), and all -ist words like <em>komunista, turista</em>.",
      "The rest are shared by two genders about 50/50:"
    ]
  },
  {
    heading: "Shared Endings",
    text: [
      "Czech <em>ten</em> nouns are divided into so called <em>hard</em> and <em>soft</em> (according to the consonant they end in). The <em>soft</em> consonants share their endings with feminine nouns while <em>hard</em> are limited to the masculine nouns."
    ],
    tables: [
      {
        headers: ["Endings", "Shared Gender", "Examples"],
        rows: [
          ["e", "<strong>ta / to</strong>", "restaurace, rýže / kuře, moře"],
          ["s, t, v, c, j, č, ž, š, ř", "<strong>ten / ta</strong>", "čaj, muž / kolej, noc, daň"]
        ]
      }
    ]
  }
];
