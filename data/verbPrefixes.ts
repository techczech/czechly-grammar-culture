export interface VerbPrefixData {
  prefix: string;
  frequency: number;
  meanings: string[];
  examples: string[];
  commonVerbs: string[];
  relatedPreposition?: string;
  notes?: string;
}

export const verbPrefixData: VerbPrefixData[] = [
  {
    prefix: "pře",
    frequency: 1525,
    meanings: [
      "direction from one side to another (across)",
      "exceed a limit",
      "do st. again and better",
      "interruption",
      "perfective, completed action"
    ],
    examples: [
      "Přejít ulici.",
      "Převařil řýži.",
      "Předělej tu zprávu.",
      "Přerušit hovor.",
      "Přečetl knihu."
    ],
    commonVerbs: [
      "přesvědčit", "překvapit", "převzít", "přestat", "překonat", 
      "přemýšlet", "přežít", "přejít", "přesunout", "přečíst"
    ]
  },
  {
    prefix: "od(e)",
    frequency: 2141,
    meanings: [
      "separate part from whole, get rid of",
      "direction away from st.",
      "action initiated by another action"
    ],
    examples: [
      "Odepsal nový počítač.",
      "Odešel před hodinou.",
      "Odepsal mi na dopis."
    ],
    relatedPreposition: "od (from)",
    commonVerbs: [
      "odejít", "odehrát", "odmítnout", "odpovídat", "odpovědět", 
      "odmítat", "odvézt", "odnést", "odjet", "odhalit"
    ]
  },
  {
    prefix: "ob(e)",
    frequency: 1218,
    meanings: ["direction around"],
    examples: ["Objeli jsme náměstí."],
    commonVerbs: [
      "objevit", "obsahovat", "obsadit", "objevovat", "obrátit", 
      "obvinit", "obdržet", "obávat", "obejít", "obnovit"
    ]
  },
  {
    prefix: "o(b)",
    frequency: 2372,
    meanings: [
      "change of status",
      "lower quality",
      "change of mental status",
      "remove, peel off",
      "renewal",
      "change of life status",
      "make a copy"
    ],
    examples: [
      "Onemocněl.", "Ochodili koberec.", "Opít se.", "Osekali větve.", 
      "Obnovit.", "Otěhotnět.", "Ofotit, opsat."
    ],
    relatedPreposition: "o (about)",
    commonVerbs: [
      "otevřít", "očekávat", "oznámit", "označit", "ovlivnit", 
      "ocenit", "opakovat", "omezit", "oslavit", "opustit"
    ]
  },
  {
    prefix: "po",
    frequency: 6059,
    meanings: [
      "small portion of activity",
      "cover a surface",
      "gradual completion of action"
    ],
    examples: [
      "Poodešel stranou.",
      "Popsal jsem dvě stránky.",
      "Posbíral papíry."
    ],
    relatedPreposition: "po (after, over a surface)",
    commonVerbs: [
      "pomoci", "potřebovat", "pokračovat", "potvrdit", "počítat", 
      "považovat", "postavit", "pomáhat", "používat", "poslat"
    ]
  },
  {
    prefix: "do",
    frequency: 3878,
    meanings: [
      "reach a goal",
      "conclude an activity",
      "add",
      "approach a goal",
      "reach a destination / goal"
    ],
    examples: [
      "Došel domů.",
      "Dočetl knihu.",
      "Dolil vodu do sklenice.",
      "Došel až ke dvěřím.",
      "Dovolala se na informace."
    ],
    relatedPreposition: "do (in, into)",
    commonVerbs: [
      "dostat", "dojít", "domluvit", "dojet", "dokázat", 
      "dopadnout", "dostávat", "donést", "dovézt", "dovést",
      "dodat", "doplnit", "dosáhnout", "dozvědět"
    ]
  },
  {
    prefix: "sou",
    frequency: 233,
    meanings: ["joint effort or perspective"],
    examples: ["Souhlasila s návrhem."],
    commonVerbs: [
      "souhlasit", "souviset", "soustředit", "soutěžit", "soustřeďovat", 
      "soupeřit", "sousedit", "souložit", "souznít", "soucítit"
    ]
  },
  {
    prefix: "pro",
    frequency: 2724,
    meanings: [
      "direction through",
      "action with negative impact",
      "casual action",
      "thorough activity",
      "satisfaction with movement"
    ],
    examples: [
      "Projeli jsme městem.",
      "prohrát, propít",
      "Pojďme se projít.",
      "Projel celou Asii.",
      "Hezky jsme se projeli."
    ],
    notes: "Excludes prosit",
    commonVerbs: [
      "prohlásit", "prohrát", "projít", "probíhat", "prodat", 
      "proběhnout", "prodávat", "prosadit", "provést", "prozradit"
    ]
  },
  {
    prefix: "před(e)",
    frequency: 848,
    meanings: [
      "direction in front of st.",
      "submission",
      "action preceding certain event"
    ],
    examples: [
      "Předjelo mě modré auto.",
      "Předložit smlouvu k podpisu.",
      "Předplatil jsem si časopis."
    ],
    relatedPreposition: "před (before, in front of)",
    commonVerbs: [
      "představit", "představovat", "předpokládat", "předvést", "předložit", 
      "předvádět", "předcházet", "předejít", "předkládat", "přednášet"
    ]
  },
  {
    prefix: "v(e)",
    frequency: 640,
    meanings: ["direction in"],
    examples: ["Vstupte!"],
    relatedPreposition: "v (in)",
    commonVerbs: [
      "vstoupit", "vnímat", "vstřelit", "vložit", "vejít", 
      "vstupovat", "vloupat", "vsadit", "vrhnout", "vniknout"
    ]
  },
  {
    prefix: "pood(e)",
    frequency: 4,
    meanings: ["small portion of activity"],
    examples: ["Poodešel stranou."],
    commonVerbs: [
      "poodhalit", "poodhalovat", "poodkrýt", "poodstoupit", "poodejít", 
      "poodjet", "poodkrývat", "poodskočit", "poodhrnout", "poodběhnout"
    ]
  },
  {
    prefix: "u",
    frequency: 4743,
    meanings: [
      "direction away from st.",
      "subtract",
      "accomplishment",
      "negative accomplishment",
      "gain by activity"
    ],
    examples: [
      "Ujel nám autobus.",
      "Ubrat na vázes.",
      "Ušli jsme 10 km.",
      "Upil se k smrti.",
      "Ušetřit peníze."
    ],
    notes: "Numbers without umět and učit",
    relatedPreposition: "u (by, near)",
    commonVerbs: [
      "uvést", "udělat", "ukázat", "uskutečnit", "uzavřít", 
      "upozornit", "uvádět", "určit", "udržet", "ukazovat"
    ]
  },
  {
    prefix: "vy",
    frequency: 6224,
    meanings: [
      "direction inside out",
      "direction from down up",
      "disappearance, removal"
    ],
    examples: [
      "Vyjel z města.",
      "Vyjít na kopec.",
      "Voda se vyvařila."
    ],
    commonVerbs: [
      "vyhrát", "vypadat", "využít", "vysvětlit", "vydat", 
      "vyjít", "vytvořit", "vybrat", "vysvětlovat", "využívat"
    ]
  },
  {
    prefix: "pod(e)",
    frequency: 542,
    meanings: [
      "direction down, lower than st.",
      "underestimation"
    ],
    examples: [
      "Podepsat smlouvu.",
      "Podhodnotit dům."
    ],
    relatedPreposition: "pod (under)",
    commonVerbs: [
      "podpořit", "podepsat", "podporovat", "podlehnout", "podnikat", 
      "podrobit", "podléhat", "podstoupit", "podcenit", "podepisovat"
    ]
  },
  {
    prefix: "popo",
    frequency: 14,
    meanings: ["gradual movement"],
    examples: ["Auto popojelo o 5 cm."],
    commonVerbs: [
      "popovídat", "popojet", "popojít", "popojíždět", "popohnat", 
      "popotahovat", "popohánět", "popostrčit", "popotáhnout", "popouzet"
    ]
  },
  {
    prefix: "nad(e)",
    frequency: 30,
    meanings: [
      "direction upward, over st.",
      "take shorter route"
    ],
    examples: [
      "Nadhodnotit dům.",
      "Nadejdu si lesem."
    ],
    notes: "IPM guess from total due to homonymy",
    relatedPreposition: "nad (above, over)",
    commonVerbs: [
      "nadzvednout", "nadhodit", "nadřadit", "nadhodnotit", "nadzdvihnout", 
      "nadbíhat", "nadnášet", "nadepsat", "nadskočit", "nadzvedávat",
      "nadávat", "nadýchat", "nadělit", "nadělat", "nadechnout", "nadřít"
    ]
  },
  {
    prefix: "roz(e)",
    frequency: 1415,
    meanings: [
      "movement in different directions",
      "division into parts",
      "beginning of a state",
      "unconcluded action"
    ],
    examples: [
      "Rozejít se.",
      "Rozdělit se.",
      "Rozbolela mě hlava.",
      "Rozečetl knihu."
    ],
    commonVerbs: [
      "rozhodnout", "rozhodovat", "rozšířit", "rozdělit", "rozumět", 
      "rozjet", "rozvíjet", "rozloučit", "rozšiřovat", "rozbít"
    ]
  },
  {
    prefix: "z(e)",
    frequency: 4064,
    meanings: [
      "change in status",
      "thorough completion"
    ],
    examples: [
      "Počasí se zhoršilo.",
      "Zorganizovat, zodpovědět, zopakovat."
    ],
    relatedPreposition: "z (from, out of)",
    commonVerbs: [
      "změnit", "zjistit", "zvýšit", "zvládnout", "zemřít", 
      "zúčastnit", "způsobit", "ztratit", "zvítězit", "zvolit"
    ]
  },
  {
    prefix: "za",
    frequency: 4951,
    meanings: [
      "direction behind st.",
      "beginning and short duration of activity",
      "direction inside st.",
      "conduct an activity with joy",
      "cover surface with st.",
      "conceal or destroy st."
    ],
    examples: [
      "Zašel jsem za roh.",
      "Zastavil se a zavázal si botu.",
      "Auto zajelo do garáže.",
      "Půjdu si zakouřit.",
      "Zakryla si oči.",
      "Zamlčel důležitou informaci."
    ],
    notes: "Starting, founding something (založit, zahájit); Doing something throughly (zabít, zamotat); Doing something a little/pleasure (zahrát si).",
    relatedPreposition: "za (behind)",
    commonVerbs: [
      "začít", "začínat", "zaplatit", "zajistit", "zahájit", 
      "zastavit", "zahrát", "zabývat", "založit", "zajímat"
    ]
  },
  {
    prefix: "s(e)",
    frequency: 1980,
    meanings: [
      "direction toward the middle (together)",
      "direction from top down"
    ],
    examples: [
      "Sejdeme se zítra.",
      "Sešel dolů."
    ],
    notes: "Number of verbs approximate because many more verbs begin with s.",
    relatedPreposition: "s (with)",
    commonVerbs: [
      "skončit", "sdělit", "snížit", "sejít", "schválit", 
      "splnit", "setkat", "spojit", "strávit", "seznámit",
      "stát", "snažit", "sledovat", "smět", "slyšet", "sloužit"
    ]
  },
  {
    prefix: "při",
    frequency: 3397,
    meanings: [
      "direction toward st.",
      "add st.",
      "touch, stick to st."
    ],
    examples: [
      "Přijel domů.",
      "Přidal mi knedlíky.",
      "Přitulili se k sobě."
    ],
    relatedPreposition: "při (by)",
    commonVerbs: [
      "přijít", "připravit", "přijet", "přinést", "připravovat", 
      "přidat", "přijmout", "přiznat", "připomínat", "připomenout"
    ]
  },
  {
    prefix: "na",
    frequency: 3224,
    meanings: [
      "direction onto a surface",
      "direction inside/up",
      "start and not conclude activity",
      "overdo st."
    ],
    examples: [
      "Nalepit známku.",
      "Nastoupit do tramvaje.",
      "Nakousnout jablko.",
      "Navařit guláš."
    ],
    relatedPreposition: "na (on, onto)",
    commonVerbs: [
      "napsat", "najít", "naučit", "napadnout", "nadávat", 
      "nalít", "narodit", "nabízet", "najíst", "nahrávat",
      "nabídnout", "nastoupit", "navštívit", "nacházet", "nahradit"
    ]
  },
  {
    prefix: "vz(e)",
    frequency: 622,
    meanings: [
      "direction upward",
      "arise",
      "increase",
      "improve status",
      "opposition"
    ],
    examples: [
      "Letadlo vzlétlo.",
      "Vzbudit se.",
      "Zisk vzrostl.",
      "Vzpamatovat se.",
      "Vzdorovat."
    ],
    commonVerbs: [
      "vzniknout", "vzpomínat", "vznikat", "vzrůst", "vzdát", 
      "vzpomenout", "vzbudit", "vzkázat", "vztahovat", "vzejít"
    ]
  },
  {
    prefix: "spolu",
    frequency: 75,
    meanings: ["together, co-"],
    examples: ["Spoluorganizovali konferenci."],
    notes: "This prefix does not make imperfective verbs perfective. It just adds the meaning of together.",
    commonVerbs: [
      "spolupracovat", "spolufinancovat", "spolupodílet", "spoluvytvářet", 
      "spolupořádat", "spoluzakládat", "spolurozhodovat", "spoluvlastnit", 
      "spoluzaložit", "spoluorganizovat"
    ]
  }
];
