
export interface VerbContentSection {
  title: string;
  content: (
    | { type: 'text'; value: string[] }
    | { type: 'table'; headers: string[]; rows: string[][]; title?: string }
    | { type: 'list'; items: string[]; title?: string }
    | { type: 'kv'; items: { k: string; v: string }[]; title?: string }
  )[];
}

export interface VerbTab {
  id: string;
  label: string;
  icon: string;
  sections: VerbContentSection[];
}

export const verbsGeneralData: VerbTab[] = [
  {
    id: "basics",
    label: "Basics",
    icon: "BookOpen",
    sections: [
      {
        title: "The Verb BÝT (To Be)",
        content: [
          {
            type: 'table',
            title: "Present Tense",
            headers: ["Positive", "Meaning", "Negative", "Meaning"],
            rows: [
              ["jsem", "I am", "<strong>ne</strong>jsem", "I am not"],
              ["jsi", "You are", "<strong>ne</strong>jsi", "You are not"],
              ["je", "He/she/it is", "není", "He/she/it is not"],
              ["jsme", "We are", "<strong>ne</strong>jsme", "We are not"],
              ["jste", "You all are", "<strong>ne</strong>jste", "You all are not"],
              ["jsou", "They are", "<strong>ne</strong>jsou", "They are not"]
            ]
          },
          {
            type: 'text',
            value: [
              "<strong>Pronunciation Note:</strong> 'Jsem' is correctly pronounced as 'sem' in standard speech (though some will argue otherwise). The same applies to 'jmenuju se'. However, in negation, the 'j' returns: 'nejsem', 'nejmenuju se'."
            ]
          }
        ]
      },
      {
        title: "Person & Endings",
        content: [
          {
            type: 'text',
            value: [
              "Personal pronouns always have a corresponding ending on the verb they are paired with. Mostly, the ending is the only way of expressing the person. A personal pronoun (já, ty...) is only used when stressing the subject."
            ]
          },
          {
            type: 'table',
            headers: ["Person", "Pronoun", "Ending", "Person", "Pronoun", "Ending"],
            rows: [
              ["I", "já", "-u, -i, -m", "We", "my", "-me"],
              ["You", "ty", "-š", "You (pl)", "vy", "-te"],
              ["He/She", "on/a/o", "-e, -í, -á", "They", "oni", "-ou, -í"]
            ]
          }
        ]
      },
      {
        title: "Conjugation Models Overview",
        content: [
          {
            type: 'text',
            value: ["There are five main categories, but for learners, we can summarize the patterns into four main classes based on the ending."]
          },
          {
            type: 'table',
            headers: ["1st Sg (Já)", "3rd Pl (Oni)", "Infinitive", "Examples"],
            rows: [
              ["-uju", "-ujou", "<strong>-ovat</strong>", "kupovat, pracovat, studovat"],
              ["-ám", "-ají", "<strong>-at / -át</strong>", "dělat, snídat, ptát se"],
              ["-ím", "-í / -ejí", "<strong>-et / -it</strong>", "bydlet, mluvit, myslet"],
              ["-u", "-ou", "<strong>irregular</strong>", "jít (jdu), psát (píšu), pít (piju)"]
            ]
          },
          {
            type: 'text',
            value: ["<strong>Note:</strong> Until recently, -u/-ou endings for 1st person singular and 3rd person plural were considered colloquial. Nowadays, they are acceptable in almost all contexts."]
          }
        ]
      },
      {
        title: "The Infinitive",
        content: [
          {
            type: 'text',
            value: [
              "The infinitive is the dictionary form of the verb. It always ends in <strong>-t</strong> (archaically -ti).",
              "It is used after modal verbs (muset, chtít, moct), verbs of intent (potřebovat), and phase verbs (začít)."
            ]
          },
          {
            type: 'table',
            headers: ["Czech", "English", "Czech", "English"],
            rows: [
              ["musím se uči<strong>t</strong>", "I have to study", "chci mí<strong>t</strong>", "I want to have"],
              ["musím jí<strong>t</strong>", "I have to go", "chci spá<strong>t</strong>", "I want to sleep"],
              ["musíš psá<strong>t</strong>", "You have to write", "obědva<strong>t</strong>", "to lunch"]
            ]
          }
        ]
      }
    ]
  },
  {
    id: "tense",
    label: "Tense & Aspect",
    icon: "Clock",
    sections: [
      {
        title: "The System of Tense and Aspect",
        content: [
          {
            type: 'text',
            value: [
              "Czech technically has three tenses (Past, Present, Future) but combines them with <strong>Aspect</strong> (Vid) to express complexity.",
              "<strong>Perfective (Pf):</strong> Completed events, usually happening once.",
              "<strong>Imperfective (Ipf):</strong> Events in progress, not yet completed, or general facts.",
              "<strong>Repetitive:</strong> Habitual actions (usually same form as imperfective, except for motion verbs)."
            ]
          },
          {
            type: 'table',
            headers: ["Tense", "Perfective", "Imperfective"],
            rows: [
              ["Past", "<strong>-l form</strong><br>Completed action (once).", "<strong>-l form</strong><br>Action in progress or repeated."],
              ["Present", "<em>Cannot express present.</em><br>(Perfective forms used in future meaning)", "<strong>Conjugated form</strong><br>Action happening now or habit."],
              ["Future", "<strong>Conjugated form</strong><br>Future completed action.", "<strong>budu + infinitive</strong><br>Future continuous/habitual."]
            ]
          }
        ]
      },
      {
        title: "Forming the Past Tense",
        content: [
          {
            type: 'text',
            value: [
              "Use the <strong>-l</strong> form (stripping -t from infinitive) + auxiliary verb <em>být</em> (jsem, jsi...).",
              "The auxiliary is dropped in the 3rd person (on/ona/ono/oni)."
            ]
          },
          {
            type: 'table',
            headers: ["Person", "Verb (M)", "Verb (F)", "Verb (N)", "Auxiliary"],
            rows: [
              ["já", "děla<strong>l</strong>", "děla<strong>la</strong>", "děla<strong>lo</strong>", "jsem"],
              ["ty", "děla<strong>l</strong>", "děla<strong>la</strong>", "děla<strong>lo</strong>", "jsi"],
              ["on/ona/ono", "děla<strong>l</strong>", "děla<strong>la</strong>", "děla<strong>lo</strong>", "-"],
              ["my", "děla<strong>li</strong>", "děla<strong>ly</strong>", "děla<strong>ly</strong>", "jsme"],
              ["vy", "děla<strong>li</strong>", "děla<strong>ly</strong>", "děla<strong>ly</strong>", "jste"],
              ["oni", "děla<strong>li</strong>", "děla<strong>ly</strong>", "děla<strong>ly</strong>", "-"]
            ]
          },
          {
            type: 'text',
            value: [
              "<strong>Word Order:</strong> The auxiliary (jsem, jsi...) is always in the <em>second position</em> in the sentence.",
              "<em>Já <strong>jsem</strong> to koupil včera.</em>",
              "<em>Koupil <strong>jsem</strong> si to včera.</em>"
            ]
          }
        ]
      },
      {
        title: "Forming the Future",
        content: [
          {
            type: 'text',
            value: [
              "<strong>Imperfective Future:</strong> <em>budu, budeš...</em> + Infinitive. (e.g., <em>budu dělat</em> - I will be doing).",
              "<strong>Perfective Future:</strong> Just conjugate the perfective verb. (e.g., <em>udělám</em> - I will do/complete).",
              "<strong>Verbs of Motion:</strong> Irregular prefix <em>po-</em> (e.g., <em>jít > půjdu</em>, <em>jet > pojedu</em>)."
            ]
          }
        ]
      },
      {
        title: "How to Tell Aspect",
        content: [
          {
            type: 'text',
            value: ["There are three ways aspects are differentiated. Perfectives often have prefixes."]
          },
          {
            type: 'table',
            headers: ["Type", "Imperfective", "Perfective", "English"],
            rows: [
              ["Prefix", "dělat", "<strong>u</strong>dělat", "to do"],
              ["", "psát", "<strong>na</strong>psat", "to write"],
              ["Suffix", "kup<strong>ovat</strong>", "koup<strong>it</strong>", "to buy"],
              ["", "dá<strong>vat</strong>", "d<strong>át</strong>", "to give"],
              ["Different Word", "brát", "vzít", "to take"]
            ]
          }
        ]
      }
    ]
  },
  {
    id: "moods",
    label: "Moods",
    icon: "MessageCircle",
    sections: [
      {
        title: "The Imperative (Commands)",
        content: [
          {
            type: 'text',
            value: [
              "To command, we use a special form derived from the 3rd person plural (oni).",
              "<strong>ty</strong>: basic imperative form.",
              "<strong>vy</strong> (plural/polite): add <strong>-te</strong>.",
              "<strong>my</strong> (let's): add <strong>-me</strong>."
            ]
          },
          {
            type: 'table',
            headers: ["Infinitive", "Oni form", "Imperative (Ty)", "Imperative (Vy)"],
            rows: [
              ["pracovat", "pracuj<strong>ou</strong>", "pracuj", "pracujte"],
              ["dělat", "děl<strong>ají</strong>", "dělej", "dělejte"],
              ["mluvit", "mluv<strong>í</strong>", "mluv", "mluvte"],
              ["pít", "pij<strong>ou</strong>", "pij", "pijte"],
              ["jít", "jd<strong>ou</strong>", "jdi", "jděte"],
              ["číst", "čt<strong>ou</strong>", "čti", "čtěte"]
            ]
          },
          {
            type: 'list',
            title: "Irregular Imperatives",
            items: [
              "být -> buď, buďte",
              "jíst -> jez, jezte",
              "stát -> stůj, stůjte",
              "mít -> měj, mějte",
              "pomoct -> pomoz, pomozte"
            ]
          }
        ]
      },
      {
        title: "The Conditional (Would)",
        content: [
          {
            type: 'text',
            value: [
              "Formed using the past tense form (byl, dělal) + the particle <strong>by</strong>.",
              "Expresses: requests, wishes, hypothetical conditions."
            ]
          },
          {
            type: 'table',
            headers: ["Person", "Form", "Person", "Form"],
            rows: [
              ["I", "byl(a) <strong>bych</strong>", "We", "byli <strong>bychom</strong>"],
              ["You", "byl(a) <strong>bys</strong>", "You (pl)", "byli <strong>byste</strong>"],
              ["He/She", "byl(a) <strong>by</strong>", "They", "byli <strong>by</strong>"]
            ]
          },
          {
            type: 'kv',
            title: "Conditional Phrases",
            items: [
              { k: "Request", v: "Mohl byste přijít zítra? (Could you come tomorrow?)" },
              { k: "Wish", v: "Ráda bych šla na koncert. (I would like to go to a concert.)" },
              { k: "Condition", v: "Kdybych měl čas, šel bych. (If I had time, I would go.)" }
            ]
          }
        ]
      },
      {
        title: "Modal Verbs",
        content: [
          {
            type: 'table',
            headers: ["English", "Czech", "Negative (Warning)"],
            rows: [
              ["must / have to", "muset", "nesmět (must not)"],
              ["can / be able", "moct", "nemoct (cannot)"],
              ["may / allowed", "smět", "nesmět (must not)"],
              ["need", "potřebovat", "nepotřebovat (don't need)"],
              ["should", "mít (mám...)", "nemít (should not)"]
            ]
          },
          {
            type: 'text',
            value: ["<strong>Note:</strong> Negating <em>muset</em> (nemuset) means 'don't have to'. Negating <em>smět</em> (nesmět) means 'must not'."]
          }
        ]
      }
    ]
  },
  {
    id: "advanced",
    label: "Adv. & Motion",
    icon: "Zap",
    sections: [
      {
        title: "Reflexive Verbs (Se / Si)",
        content: [
          {
            type: 'text',
            value: [
              "Reflexive pronouns refer back to the subject. <strong>Se</strong> takes the Accusative slot (direct object), <strong>Si</strong> takes the Dative slot (indirect object/benefit)."
            ]
          },
          {
            type: 'kv',
            title: "Types of 'Se'",
            items: [
              { k: "True Reflexive", v: "mýt se (wash oneself), uhodit se (hit oneself)" },
              { k: "Fixed Phrase", v: "bát se (fear), smát se (laugh), jmenovat se (be named)" },
              { k: "Reciprocal", v: "potkat se (meet each other), milovat se (love each other)" },
              { k: "Passive", v: "To se neříká (That isn't said / One doesn't say that)" }
            ]
          },
          {
            type: 'kv',
            title: "Types of 'Si'",
            items: [
              { k: "Benefit (For self)", v: "koupit si (buy for self), dát si (have/order food)" },
              { k: "Reciprocal", v: "psát si (write to each other)" },
              { k: "Casual", v: "On si jde... (He's just walking along...)" }
            ]
          }
        ]
      },
      {
        title: "Verbs of Motion",
        content: [
          {
            type: 'text',
            value: [
              "Verbs of motion distinguish between movement on foot vs. by vehicle, and have a special system for Future and Repetition."
            ]
          },
          {
            type: 'table',
            headers: ["Imperfective", "Future", "Repetitive", "Translation"],
            rows: [
              ["jít", "půjdu", "chodit", "go (foot)"],
              ["jet", "pojedu", "jezdit", "go (vehicle)"],
              ["běžet", "poběžím", "běhat", "run"],
              ["letět", "poletím", "létat", "fly"],
              ["nést", "ponesu", "nosit", "carry (foot)"],
              ["vézt", "povezu", "vozit", "carry (vehicle)"]
            ]
          },
          {
            type: 'text',
            value: [
              "<strong>Prefixes:</strong> Motion verbs can take up to 20 prefixes to create new meanings (e.g., <em>přijít</em> - arrive, <em>odejít</em> - leave, <em>vyjít</em> - go up/out).",
              "When a prefix is added to the <em>imperfective</em> base (jít), it becomes <em>perfective</em> (přijít). To make it imperfective again, we use the repetitive base (přicházet)."
            ]
          }
        ]
      },
      {
        title: "The Passive Voice",
        content: [
          {
            type: 'text',
            value: [
              "Formed by <strong>být</strong> + Passive Participle (derived from past tense).",
              "Past: <em>-l</em> -> <em>-n</em> (or <em>-t</em> for -nul verbs).",
              "Example: <em>byl napsán</em> (was written), <em>je otevřeno</em> (is opened)."
            ]
          }
        ]
      }
    ]
  }
];
