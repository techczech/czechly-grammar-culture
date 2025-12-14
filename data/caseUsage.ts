

export interface CaseUsageSection {
  id: string;
  title: string;
  subtitle: string;
  function: string[];
  formTable?: {
    headers: string[];
    rows: { label: string; values: string[] }[];
  };
  formNotes?: string[];
  exceptions?: {
    title: string;
    items?: { label: string; value: string; note?: string }[];
    text?: string;
  }[];
  commonVerbs?: string[];
  commonPrepositions?: { prep: string; meaning: string }[];
  typicalCategories?: string[];
  specialContent?: {
    type: "intro";
    intro?: string; // used in vocative
    sections?: {
      heading?: string;
      title?: string; // used in vocative
      text?: string[]; // strings or strings with html
      comparisonTables?: { rows: { en: string; func: string; cs: string }[] }[];
      summaryTable?: { q: string; func: string; num: string; name: string }[];
      postText?: string[];
      tables?: {
        headers?: string[];
        rows: string[][];
      }[];
      rules?: any[];
      examples?: string[];
    }[];
  };
}

export const caseUsageData: CaseUsageSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    subtitle: "What is case?",
    function: [],
    specialContent: {
      type: "intro",
      sections: [
        {
          heading: "What is case?",
          text: [
            "The word <em>case</em> refers to a set of endings that are used to indicate how words relate to one another. For instance, who does what to whom. In Czech, it is expressed through different endings. Nouns, pronouns, numerals and adjectives all use different case ending to express things like being an object (receiver) or a subject (initiator), or belonging to something. All prepositions also require that a noun has a case ending.",
            "In the English sentence, <em>Petr has a son</em> the relationship between Petr and his son is set by the fact that the word <em>Petr</em> precedes the verb and the word <em>son</em> follows it. In Czech, this doesn't mean much, because Czech word order is more flexible. The relatioship between Petr and his some is captured by the case endings: <em>Petr má syna</em>. Thanks to the endings, you can also say <em>Syna má Petr</em> and the meaning is the same.",
            "All verbs require the words that follow them to change form (that is add an ending). Most of the time, it is the object, but often there are other roles such as recipient or part of something.",
            "In traditional grammar, cases have names such as <em>accusative</em> or <em>dative</em> that hint at the function. The names of the cases are not important, however. What really matters, is how the case is used in the language. What’s more, Czechs will mostly not be familiar with these names, they know the cases by their number."
          ]
        },
        {
          heading: "What are the functions of Czech cases?",
          text: [
            "Czech has six cases that describe the role of the word in a sentence. In English, they are expressed either through word order or prepositions. Below are examples comparing English functions with Czech equivalents:"
          ],
          comparisonTables: [
            {
              rows: [
                { en: "A <em>friend</em> wrote. He is a <em>friend</em>.", func: "subject", cs: "Kamarád napsal. Je kamarád." },
                { en: "A friend wrote a <em>letter</em>.", func: "object", cs: "Kamarád napsal <em>dopis</em>." },
                { en: "A friend <em>of our family</em> wrote a letter.", func: "<em>of</em> sth/sb", cs: "Kamarád <em>naší rodiny</em> napsal dopis." },
                { en: "A friend of our family wrote a letter <em>to Jana</em>.", func: "<em>to</em> sth/sb", cs: "Kamarád naší rodiny napsal dopis <em>Janě</em>." },
                { en: "A friend of our family wrote a letter to Jana <em>in a car</em>.", func: "in/about/... sth/sb", cs: "Kamarád naší rodiny napsal dopis Janě <em>v autě</em>." },
                { en: "He wrote a letter <em>with a fountain pen</em>.", func: "with/by/through sth/sb", cs: "Napsal dopis <em>plnícím perem</em>." }
              ]
            },
            {
              rows: [
                { en: "A <em>friend</em> is here. He is a <em>friend</em>.", func: "subject", cs: "Kamarád je tady. Je kamarád." },
                { en: "I see a <em>friend</em>.", func: "object", cs: "Vidím kamaráda." },
                { en: "This is a story of a <em>friend</em>.", func: "<em>of</em> sth/sb", cs: "To je příběh <em>kamaráda</em>." },
                { en: "I gave a book to a <em>friend</em>.", func: "<em>to</em> sth/sb", cs: "Dal jsem knihu <em>kamarádovi</em>." },
                { en: "This is a story about a <em>friend</em>.", func: "in/about/... sth/sb", cs: "To je příběh o <em>kamarádovi</em>." },
                { en: "I will come with a <em>friend</em>.", func: "with/by/through sth/sb", cs: "Přijdu s <em>kamarádem</em>." }
              ]
            },
            {
              rows: [
                { en: "A <em>book</em> is here. It is a <em>book</em>.", func: "subject", cs: "<em>Kniha</em> je tady. Je to <em>kniha</em>." },
                { en: "I have a <em>book</em>.", func: "object", cs: "Mám <em>knihu</em>." },
                { en: "A page of the <em>book</em>.", func: "<em>of</em> sth/sb", cs: "Strana <em>knihy</em>." },
                { en: "He admitted to the <em>book</em>.", func: "<em>to</em> sth/sb", cs: "Přiznal se k té <em>knize</em>." },
                { en: "He wrote it in the <em>book</em>.", func: "in/about/... sth/sb", cs: "Napsal to v té <em>knize</em>." },
                { en: "He hit him with the <em>book</em>.", func: "with/by/through sth/sb", cs: "Uhodil ho tou <em>knihou</em>." }
              ]
            }
          ],
          postText: [
            "The underlined words or endings have equivalent functions in both languages. All the cases, except the subject, can be used with prepositions. The 6th case (Locative) is <em>only</em> used after a preposition.",
            "You can ask for all the <em>italicized</em> words using question words <em>WHO?</em> and <em>WHAT?</em>. In Czech, it is the same only there is a different form of <em>Who? What?</em> for each case. Therefore the cases are named by their Czech <em>Who? What?</em> questions, which is how Czech children learn them in school."
          ]
        },
        {
          heading: "Models",
          text: [
            "Different types of nouns and other words change their forms differently. Each group is named after a model word and it is also called a model (vzor in Czech). There are fifteen models of Czech nouns, including the more prominent sub-models. They are all listed in the chart below. Each model is given a common word to represent it. Different textbooks use different example words. Here we chose ones we hope are most useful for learners:",
            "<strong>TEN:</strong> kamarád (friend), muž (man), čaj (tea), rohlík (bread roll), poradce (advisor), policista (policeman)<br><strong>TA:</strong> voda (water), rýže (rice), daň (tax), noc (night)<br><strong>TO:</strong> pivo (beer), kuře (chicken), nádraží (station), moře (sea)",
            "All models can have further submodels for some exceptions but we ignore these here. For example, rohlík has a common submodel les (forest) but we treat them as the same model. They only differ slightly in some cases.",
            "Model and case are often used to mean the same thing. In fact, model describes which particular ending a word will take in a certain case. Once you know the gender, you can most often tell the model from the form in the Kdo? Co? case. But there are many words, where this is not possible (for example, feminine (TA) nouns ending in a consonant)."
          ]
        }
      ]
    }
  },
  {
    id: "summary",
    title: "Summary of Cases",
    subtitle: "Overview",
    function: [],
    specialContent: {
      type: "intro",
      sections: [
        {
          heading: "Summary of Czech cases",
          summaryTable: [
            { q: "Kdo? Co?", func: "subject", num: "1st – první pád", name: "Nominative" },
            { q: "Koho? Co?", func: "object", num: "4th – čtvrtý pád", name: "Accusative" },
            { q: "Koho? Čeho?", func: "<em>of</em> sth/sb", num: "2nd – druhý pád", name: "Genitive" },
            { q: "Komu? Čemu?", func: "<em>to</em> sth/sb", num: "3rd – třetí pád", name: "Dative" },
            { q: "(v/o) Kom? Čem?", func: "in/about/... sth/sb", num: "6th – šestý pád", name: "Locative" },
            { q: "Kým? Čím?", func: "with/by/through sth/sb", num: "7th – sedmý pád", name: "Instrumental" }
          ],
          text: [
            "<strong>Note:</strong> In most textbooks and grammar books you find 7 cases. But the fifth case (Vocative) is only used for addressing people, and does not express any relationship between things in the world. That’s why it is best to learn it separately.",
            "The traditional ordering of cases is 1, 2, 3, 4, 5, 6, 7. But this is not based on neither logical progression nor frequency. The order used in this book is a compromise between logical progression and frequency with the three most frequent cases being first and the least frequent case last."
          ]
        }
      ]
    }
  },
  {
    id: "nominative",
    title: "1. Nominative (Kdo? Co?)",
    subtitle: "The Subject Case",
    function: [
      "Words in this case most often function as the subject of a sentence.",
      "This form is found in the dictionary.",
      "This is the form used when naming or pointing at things (your name is…, this is…).",
      "It is the form used in comparisons using 'than' (než)."
    ],
    formTable: {
      headers: ["Ma (Anim)", "Mi (Inanim)", "F (Fem)", "N (Neu)"],
      rows: [
        { label: "Singular", values: ["kamarád, muž", "rohlík, čaj", "voda, rýže, daň, noc", "pivo, kuře, nádraží, moře"] },
        { label: "Plural endings", values: ["-i", "-y / -e", "-y / -e / -ě / -i", "-a / -ata"] }
      ]
    },
    formNotes: [
      "This is the basic form of all words found in the dictionary.",
      "It is never found after a preposition."
    ],
    exceptions: [
      {
        title: "Exceptions in Plural (Ten animate)",
        text: "Kamarád nouns ending in -an may end in -i as well as -é (Angličani/Angličané). Nouns ending in -tel end in -é (učitelé). One-syllable nouns often end in -ové (Finové, Rusové).",
        items: [
          { label: "k > c", value: "právník > právníci" },
          { label: "ch > š", value: "Čech > Češi" },
          { label: "r > ř", value: "doktor > doktoři" },
          { label: "h > z", value: "pstruh > pstruzi" }
        ]
      }
    ]
  },
  {
    id: "genitive",
    title: "2. Genitive (Koho? Čeho?)",
    subtitle: "The 'Of' Case / Quantity",
    function: [
      "The core meaning is belonging (equivalent to English 'of').",
      "Used with many prepositions: z, bez, do, od, blízko, vedle, během, kromě...",
      "Partitive genitive used after units of measure (kilo, litr, kousek) and quantity words (hodně, málo).",
      "Used for counting with numbers 5 and above."
    ],
    formTable: {
      headers: ["Ma (Anim)", "Mi (Inanim)", "F (Fem)", "N (Neu)"],
      rows: [
        { label: "Sg Ending", values: ["-a / -e", "-u / -a / -e", "-y / -e / -i", "-a / -ete"] },
        { label: "Pl Ending", values: ["-ů", "-ů", "Ø / -í", "Ø / -at / -í"] }
      ]
    },
    formNotes: [
      "Because of its use in counting (5+), this is the most frequent case.",
      "In Plural, 'voda' and 'pivo' types drop the vowel ending (Ø). An -e- is inserted if needed for pronunciation (tužka > tužek)."
    ],
    exceptions: [
      {
        title: "Singular Irregularities (Rohlík nouns)",
        text: "Some inanimate masculine nouns take -a instead of -u in Genitive singular. Typical for months (ledna, února, března...) and place names ending in -ýn/-ín/-ov (Londýna, Berlína)."
      }
    ],
    commonVerbs: [
      "zeptat se / ptát se (koho)",
      "bát se (čeho)"
    ],
    commonPrepositions: [
      { prep: "do", meaning: "to, into" },
      { prep: "z", meaning: "from inside" },
      { prep: "od", meaning: "from" },
      { prep: "u", meaning: "by, at, near" },
      { prep: "bez", meaning: "without" },
      { prep: "během", meaning: "during" }
    ],
    typicalCategories: [
      "Foods when counting (5 rohlíků)",
      "Foods when measuring (kilo sýra)",
      "Place names (movement from/to)"
    ]
  },
  {
    id: "dative",
    title: "3. Dative (Komu? Čemu?)",
    subtitle: "Indirect Object / To, Toward",
    function: [
      "Indirect object (John gave the book *to Mary*).",
      "Used with prepositions 'k' (to, toward) and 'naproti' (opposite).",
      "Endings in singular are often identical to Locative."
    ],
    formTable: {
      headers: ["Ma (Anim)", "Mi (Inanim)", "F (Fem)", "N (Neu)"],
      rows: [
        { label: "Sg Ending", values: ["-ovi / -u", "-u / -i", "-ě / -i", "-u / -eti / -i"] },
        { label: "Pl Ending", values: ["-ům", "-ům", "-ám / -ím", "-ům / -atům / -ím"] }
      ]
    },
    exceptions: [
      {
        title: "Softening in Feminine (Ta nouns)",
        text: "Before the ending -e/-ě, consonants often change.",
        items: [
          { label: "k > c", value: "banka > k bance" },
          { label: "h > z", value: "Praha > k Praze" },
          { label: "ch > š", value: "sprcha > proti sprše" },
          { label: "r > ř", value: "opera > k opeře" }
        ]
      },
      {
        title: "Multiple Male Names",
        text: "When addressing multiple male names/titles, only the last one takes '-ovi', previous ones take '-u'. (panu doktoru Pavlu Havlovi)"
      }
    ],
    commonVerbs: [
      "dát něco (někomu)",
      "volat / telefonovat (někomu)",
      "věřit (někomu)",
      "pomáhat (někomu)",
      "rozumět (někomu/čemu)"
    ],
    commonPrepositions: [
      { prep: "k", meaning: "toward, to (a person)" },
      { prep: "proti / naproti", meaning: "against / opposite" },
      { prep: "kvůli", meaning: "because of" }
    ]
  },
  {
    id: "accusative",
    title: "4. Accusative (Koho? Co?)",
    subtitle: "Direct Object / Direction",
    function: [
      "The most important case for objects of sentences.",
      "Describes the relationship of influence.",
      "Used with prepositions (na, pro, za, před) to indicate directionality or purpose."
    ],
    formTable: {
      headers: ["Ma (Anim)", "Mi (Inanim)", "F (Fem)", "N (Neu)"],
      rows: [
        { label: "Sg Ending", values: ["-a / -e", "Same as Nom", "-u / -i", "Same as Nom"] },
        { label: "Pl Ending", values: ["-y / -e", "Same as Nom", "-y / -ě / -i", "Same as Nom"] }
      ]
    },
    formNotes: [
      "For Masculine Inanimate and Neuter, the Accusative form is identical to the Nominative.",
      "Reflexive verbs with 'se' (bát se) generally do not take an Accusative object (except 'učit se')."
    ],
    commonVerbs: [
      "mít (co)",
      "chtít (co)",
      "znát (koho/co)",
      "vidět (koho/co)",
      "vzít (co)",
      "hledat (koho/co)",
      "koupit (co)"
    ],
    commonPrepositions: [
      { prep: "na", meaning: "onto, to (direction)" },
      { prep: "pro", meaning: "for" },
      { prep: "před/za/pod/nad", meaning: "direction (movement)" },
      { prep: "o", meaning: "for (bet), about (effort)" }
    ]
  },
  {
    id: "vocative",
    title: "5. Vocative (Oslovujeme)",
    subtitle: "Addressing People",
    function: [
      "Used exclusively for addressing people.",
      "Crucial for polite conversation in Czech.",
      "Even in English conversation, Czechs often expect names to be declined."
    ],
    specialContent: {
      type: "intro",
      intro: "Usually the 5th case. Rule: 'Pátým pádem oslovujeme'. Academic titles are always used in vocative without the name in formal settings (pane doktore, not pane Nováku).",
      sections: [
        {
          title: "Men's Names",
          rules: [
            { type: "Ends in hard cons. (d, t, n, r...)", change: "Add -e", example: "Petr > Petře, David > Davide" },
            { type: "Ends in soft cons. (š, č, ž, c, j...)", change: "Add -i", example: "Tomáš > Tomáši, Lukáš > Lukáši" },
            { type: "Ends in k, h, g, ch", change: "Add -u", example: "Marek > Marku, Patrik > Patriku" },
            { type: "Ends in -a", change: "Change to -o", example: "Honza > Honzo, Jirka > Jirko" },
            { type: "Ends in -el", change: "e drops (usually)", example: "Karel > Karle, Pavel > Pavle" }
          ]
        },
        {
          title: "Women's Names",
          rules: [
            { type: "Ends in -a", change: "Change to -o", example: "Jana > Jano, Eva > Evo" },
            { type: "Ends in -e", change: "No change", example: "Lucie > Lucie" },
            { type: "Ends in consonant", change: "No change", example: "Karin > Karin" }
          ]
        },
        {
          title: "Titles & Formal Address",
          text: ["Use 'pane' or 'paní' + Title in Vocative. Do not use the surname with the title."],
          examples: [
            "Mr. Novak -> pane Nováku",
            "Mrs. Mala -> paní Malá",
            "Mr. Doctor -> pane doktore",
            "Mrs. Doctor -> paní doktorko",
            "Mr. Professor -> pane profesore",
            "Mrs. Engineer -> paní inženýrko"
          ]
        }
      ]
    }
  },
  {
    id: "locative",
    title: "6. Locative ((o) Kom? Čem?)",
    subtitle: "About / Static Location",
    function: [
      "Only used with prepositions.",
      "Indicates static location (v, na, u).",
      "Indicates subject of discussion (o - about)."
    ],
    formTable: {
      headers: ["Ma (Anim)", "Mi (Inanim)", "F (Fem)", "N (Neu)"],
      rows: [
        { label: "Sg Ending", values: ["-ovi / -u", "-u / -ě", "-ě / -i", "-u / -ě / -eti / -i"] },
        { label: "Pl Ending", values: ["-ech", "-ech / -ích", "-ách / -ích", "-ech / -atech / -ích"] }
      ]
    },
    formNotes: [
      "Singular endings are often identical to Dative.",
      "Ending -e/-ě causes consonant softening (Praha > v Praze, škola > ve škole)."
    ],
    commonVerbs: [
      "mluvit o (kom/čem)",
      "myslet na (koho/co) - *Accusative! (Exception)*",
      "být v/na (kde)"
    ],
    commonPrepositions: [
      { prep: "v", meaning: "in (static)" },
      { prep: "na", meaning: "on, at (static)" },
      { prep: "o", meaning: "about" },
      { prep: "po", meaning: "after, along" },
      { prep: "při", meaning: "during, by" }
    ],
    typicalCategories: [
      "Place names (being IN them)",
      "Processes and time periods",
      "Personal names (talking ABOUT them)"
    ]
  },
  {
    id: "instrumental",
    title: "7. Instrumental (Kým? Čím?)",
    subtitle: "Means / With",
    function: [
      "Expresses 'with', 'by', 'through' (means/instrument).",
      "Used with preposition 's' (with).",
      "Expresses acquired property or profession after 'být' or 'stát se'."
    ],
    formTable: {
      headers: ["Ma (Anim)", "Mi (Inanim)", "F (Fem)", "N (Neu)"],
      rows: [
        { label: "Sg Ending", values: ["-em", "-em", "-ou", "-em"] },
        { label: "Pl Ending", values: ["-y", "-y", "-ami", "-y / -aty"] }
      ]
    },
    commonVerbs: [
      "být (kým/čím) - profession",
      "stát se (kým/čím)",
      "jet (čím) - transport",
      "zabývat se (čím) - deal with",
      "jíst (čím) - eat with"
    ],
    commonPrepositions: [
      { prep: "s(e)", meaning: "with" },
      { prep: "před", meaning: "in front of (static)" },
      { prep: "za", meaning: "behind (static)" },
      { prep: "nad", meaning: "above (static)" },
      { prep: "pod", meaning: "under (static)" },
      { prep: "mezi", meaning: "between" }
    ],
    typicalCategories: [
      "Means of transportation (jet autem)",
      "Food ingredients (sýr se šunkou)",
      "Company (s Petrem)"
    ]
  }
];
