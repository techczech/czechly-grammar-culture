
export interface ConjunctionItem {
  term: string;
  english: string;
  czechExample: string;
  englishExample: string;
}

export interface ConjunctionCategory {
  title: string;
  items: ConjunctionItem[];
}

export const conjunctionsData: ConjunctionCategory[] = [
  {
    title: "Conjunctives",
    items: [
      {
        term: "a",
        english: "and",
        czechExample: "Učím se česky a francouzsky.\nSnídám housku a čaj.\nPůjdu domů a uvařím večeři.",
        englishExample: "I am studying Czech and French.\nI have roll and tea for breakfast.\nI'll go home and cook dinner."
      },
      {
        term: "i",
        english: "as well as, both… and",
        czechExample: "Mám hlad i žízeň.\nZajímá mě literatura i historie.\nNa zahradě máme ovoce i zeleninu.",
        englishExample: "I'm hungry as well as thirsty.\nI'm interested in literature and history.\nWe have fruits as well as vegetables..."
      },
      {
        term: "jako / jakoby",
        english: "as / as though",
        czechExample: "Bylo to, jakoby se mu to zdálo.\nCítil se jako doma.",
        englishExample: "It was as though in a dream.\nHe felt like he was at home."
      }
    ]
  },
  {
    title: "Disjunctives",
    items: [
      {
        term: "ale",
        english: "but",
        czechExample: "Chci jít do divadla, ale musím jet do Prahy.\nTen dům je hezký, ale drahý.",
        englishExample: "I want to go to the theater but I must go to Prague.\nThe house is nice but expensive."
      },
      {
        term: "buď - nebo",
        english: "either – or",
        czechExample: "Buď se budeš učit německy nebo anglicky.\nDal jsem to buď Pavle nebo Honzovi.",
        englishExample: "You will either learn German or English.\nI either gave it to Pavla or to Honza."
      },
      {
        term: "ani – ani",
        english: "neither – nor",
        czechExample: "Nebyl tam ani on ani ona.\nNemám čas ani dneska ani zítra.",
        englishExample: "Neither he nor she were there.\nI won't have time neither today nor tomorrow."
      },
      {
        term: "nebo",
        english: "or",
        czechExample: "Uvidíme se v sobotu nebo v neděli.\nChci modrý nebo červený svetr.",
        englishExample: "We'll see each other on Sat. or Sun.\nI want a blue sweater or red sweater."
      }
    ]
  },
  {
    title: "Causal",
    items: [
      {
        term: "proto",
        english: "that's why",
        czechExample: "Moc kouří, proto je často nervózní.\nJdu do kina a proto nemám čas.",
        englishExample: "He smokes a lot that's why he is often nervous.\nI'm going to the movies, that's why I don't have time."
      },
      {
        term: "protože",
        english: "because",
        czechExample: "Protože jsem přišel pozdě, ujel mi vlak.",
        englishExample: "Because I came late, I missed my train."
      }
    ]
  },
  {
    title: "Relative",
    items: [
      {
        term: "kdo",
        english: "who",
        czechExample: "Vím, kdo mluví německy.",
        englishExample: "I know who speaks German."
      },
      {
        term: "co",
        english: "what",
        czechExample: "Vím, co chceš.",
        englishExample: "I know what you want."
      },
      {
        term: "kdy",
        english: "when",
        czechExample: "Nevím, kdy přijde.",
        englishExample: "I don't know when he'll come."
      },
      {
        term: "kam",
        english: "where to",
        czechExample: "Nevíš, kam šel?",
        englishExample: "Do you know where he went to?"
      },
      {
        term: "kde",
        english: "where",
        czechExample: "Nevíš, kde je?",
        englishExample: "Do you now where she is?"
      },
      {
        term: "jak",
        english: "how",
        czechExample: "Řekl mi, jak to mám udělat.",
        englishExample: "He told me how to do it."
      },
      {
        term: "který",
        english: "what, which",
        czechExample: "Viděl jsem film, který natočil Forman.",
        englishExample: "I saw the film which Forman made."
      },
      {
        term: "než",
        english: "than",
        czechExample: "Máš se lépe než já.",
        englishExample: "You are better than me."
      }
    ]
  },
  {
    title: "Time",
    items: [
      {
        term: "když",
        english: "when",
        czechExample: "Když jsem byl v Praze, koupil jsem si knihu.",
        englishExample: "When I was in Prague I bought a book."
      },
      {
        term: "až",
        english: "when, as late as",
        czechExample: "Až budu v Praze, koupím si knihu.\nŘeknu ti to, až zítra.\nAž skončí film, půjdeme domů.",
        englishExample: "When I'm in Prague I'll buy a book.\nI will tell you tomorrow.\nWhen the film is over we will go home."
      },
      {
        term: "než",
        english: "before",
        czechExample: "Dříve než ti odpovím, musím se zeptat Petra.\nNež přijde Petr, uklidím si pokoj.",
        englishExample: "Before I answer I have to ask Petr.\nBefore Petr comes I will clean my room."
      },
      {
        term: "jakmile / hned jak",
        english: "as soon as",
        czechExample: "Hned jak přijdu, zavolám ti.\nJakmile se uzdraví, přijde na návštěvu.",
        englishExample: "As soon as I get back I'll call you.\nAs soon as he recovers he will come to visit."
      },
      {
        term: "zatímco",
        english: "while",
        czechExample: "Zatímco jsi spal, já jsem pracovala.\nZatímco ty se máš dobře, já se mám špatně.",
        englishExample: "While you were sleeping I was working.\nWhile you're okay, I'm bad."
      },
      {
        term: "kdykoli",
        english: "whenever, any time",
        czechExample: "Kdykoli přijde, přinese dárek.\nMůžete mi zavolat kdykoli.",
        englishExample: "Whenever he comes he brings a gift.\nYou can call me whenever."
      },
      {
        term: "dokud",
        english: "as long as",
        czechExample: "Dokud jsem naživu nedostaneš ani cent.",
        englishExample: "As long as I live you're not gonna get a cent."
      }
    ]
  },
  {
    title: "Conditional",
    items: [
      {
        term: "jestli / jestliže",
        english: "if",
        czechExample: "Jestli bude sníh, pojedeme lyžovat.\nJestliže to nebude hotové včas, nedostaneš peníze.\nZeptej se ho, jestli přijde.",
        englishExample: "If there is snow, we will go skiing.\nIf it's not done in time you will get no money.\nAsk him if he'll come."
      },
      {
        term: "když",
        english: "if, when",
        czechExample: "Když bude sníh, pojedeme lyžovat.\nKdyž budu mít čas, udělám to.",
        englishExample: "If there is snow, we will go skiing.\nIf I have time I will do it."
      },
      {
        term: "kdyby",
        english: "if",
        czechExample: "Kdybych měl čas, udělal bych to.\nKdyby byl sníh, jeli bychom lyžovat.",
        englishExample: "If I had time I would do it.\nIf there were snow we would go skiing."
      },
      {
        term: "-li",
        english: "if",
        czechExample: "Bude-li sníh, pojedeme lyžovat.\nBudu-li mít čas, udělám to.",
        englishExample: "If there is snow we will go skiing.\nIf I have time, I will do it."
      }
    ]
  },
  {
    title: "Concessional",
    items: [
      {
        term: "i když / přestože / ačkoli",
        english: "even though",
        czechExample: "I když se mi to nelíbí, udělám to.\nPřestože nemám moc peněz, koupím si to.",
        englishExample: "Even though I don't like it I will do it.\nEven though I don't have much money I will buy it."
      },
      {
        term: "přesto",
        english: "in spite of, anyway",
        czechExample: "Nemám moc peněz, přesto si to koupím.",
        englishExample: "I don't have much money but I will buy it anyway."
      }
    ]
  }
];
