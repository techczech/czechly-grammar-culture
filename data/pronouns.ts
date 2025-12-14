
export interface PronounTable {
  headers: string[];
  rows: string[][];
}

export const personalPronouns = {
  noPrep: {
    headers: ["Case", "já", "ty", "on", "ona", "ono", "my", "vy", "oni"],
    rows: [
      ["Nom", "já", "ty", "on", "ona", "ono", "my", "vy", "oni"],
      ["Acc", "mě", "tě", "ho, jej", "ji", "ho, jej", "nás", "vás", "je"],
      ["Gen", "mě", "tě", "ho, jej", "jí", "ho, jej", "nás", "vás", "jich"],
      ["Dat", "mi", "ti", "mu", "jí", "mu", "nám", "vám", "jim"],
      ["Loc", "mně", "tobě", "něm", "ní", "něm", "nás", "vás", "nich"],
      ["Instr", "mnou", "tebou", "jím", "jí", "jím", "námi", "vámi", "jimi"]
    ]
  },
  withPrep: {
    headers: ["Case", "já", "ty", "on", "ona", "ono", "my", "vy", "oni"],
    rows: [
      ["Nom", "já", "ty", "on", "ona", "ono", "my", "vy", "oni"],
      ["Acc", "na mě", "na tebe", "na něho/něj", "na ni", "na něho/něj", "na nás", "na vás", "na ně"],
      ["Gen", "beze mě", "bez tebe", "bez něho/něj", "bez ní", "bez něho/něj", "bez nás", "bez vás", "bez nich"],
      ["Dat", "ke mně", "k tobě", "k němu", "k ní", "k němu", "k nám", "k vám", "k nim"],
      ["Loc", "o mně", "o tobě", "o něm", "o ní", "o něm", "o nás", "o vás", "o nich"],
      ["Instr", "se mnou", "s tebou", "s ním", "s ní", "s ním", "s námi", "s vámi", "s nimi"]
    ]
  },
  strong: {
    headers: ["Case", "já", "ty", "on", "Example"],
    rows: [
      ["Gen", "mně", "tebe", "jeho", "Jeho se zeptám. = I will ask HIM."],
      ["Dat", "tobě", "jemu", "Tobě to dám. = I will give it to YOU."],
      ["Acc", "tebe", "jeho", "Jeho vidím. = I can see HIM."]
    ]
  }
};

export const possessivePronouns = {
  main: {
    headers: ["Case", "já", "ty", "on", "ona", "ono", "my", "vy", "oni", "GENDER"],
    rows: [
      ["<strong>Nom</strong>", "můj", "tvůj", "jeho", "její", "jeho", "náš", "váš", "jejich", "TEN"],
      ["", "moje", "tvoje", "", "", "", "naše", "vaše", "", "TA"],
      ["", "", "", "", "", "", "", "", "", "TO"],
      ["", "moji", "tvoji", "", "", "", "naši", "vaši", "", "TI"],
      ["", "moje", "tvoje", "", "", "", "naše", "vaše", "", "TY, TA pl"],
      ["<strong>Acc</strong>", "mého", "tvého", "jeho", "jejího", "jeho", "našeho", "vašeho", "jejich", "TEN anim"],
      ["", "můj", "tvůj", "její", "", "náš", "váš", "", "TEN inanim"],
      ["", "moji", "tvoji", "naši", "vaši", "", "TA"],
      ["", "moje", "tvoje", "naše", "vaše", "", "TO"],
      ["", "", "", "", "", "", "TI, TY, TA pl"],
      ["<strong>Gen</strong>", "mého", "tvého", "jeho", "jejího", "jeho", "našeho", "vašeho", "jejich", "TEN"],
      ["", "mojí", "tvojí", "její", "", "naší", "vaší", "", "TA"],
      ["", "mého", "tvého", "jejího", "", "našeho", "vašeho", "", "TO"],
      ["", "mých", "tvých", "jejích", "", "našich", "vašich", "", "TI, TY, TA pl"],
      ["<strong>Dat</strong>", "mému", "tvému", "jeho", "jejímu", "jeho", "našemu", "vašemu", "jejich", "TEN"],
      ["", "mojí", "tvojí", "její", "", "naší", "vaší", "", "TA"],
      ["", "mému", "tvému", "jejímu", "", "našemu", "vašemu", "", "TO"],
      ["", "mým", "tvým", "jejím", "", "našim", "vašim", "", "TI, TY, TA pl"],
      ["<strong>Loc</strong>", "mém", "tvém", "jeho", "jejím", "jeho", "našem", "vašem", "jejich", "TEN"],
      ["", "mojí", "tvojí", "její", "", "naší", "vaší", "", "TA"],
      ["", "mém", "tvém", "jejím", "", "našem", "vašem", "", "TO"],
      ["", "mých", "tvých", "jejich", "", "našich", "vašich", "", "TI, TY, TA pl"],
      ["<strong>Instr</strong>", "mým", "tvým", "jeho", "jejím", "jeho", "naším", "vaším", "jejich", "TEN"],
      ["", "mou", "tvou", "její", "", "naší", "vaší", "", "TA"],
      ["", "mým", "tvým", "jejím", "", "naším", "vaším", "", "TO"],
      ["", "mými", "tvými", "jejími", "", "našimi", "vašimi", "", "TI, TY, TA pl"]
    ]
  },
  svuj: {
    headers: ["Case", "Form", "Example"],
    rows: [
      ["Acc", "<strong>svého</strong>", "kamaráda"],
      ["", "<strong>svůj</strong>", "rohlík"],
      ["", "<strong>svou, svoji</strong>", "vodu"],
      ["", "<strong>svoje</strong>", "pivo"],
      ["", "<strong>svoje</strong>", "kamarády, rohlíky, vody, piva"],
      ["Gen", "<strong>svého</strong>", "kamaráda, rohlíku"],
      ["", "<strong>své, svojí</strong>", "vody"],
      ["", "<strong>svého</strong>", "piva"],
      ["", "<strong>svých</strong>", "kamarádů, rohlíků, vod, piv"],
      ["Dat", "<strong>svému</strong>", "kamarádovi, rohlíku"],
      ["", "<strong>své, svojí</strong>", "vodě"],
      ["", "<strong>svému</strong>", "pivu"],
      ["", "<strong>svým</strong>", "kamarádům, rohlíkům, vodám, pivům"],
      ["Loc", "<strong>svém</strong>", "kamarádovi"],
      ["", "<strong>své, svojí</strong>", "vodě"],
      ["", "<strong>svém</strong>", "pivu"],
      ["", "<strong>svých</strong>", "kamarádech, rohlíkách, vodách, pivech"],
      ["Instr", "<strong>svým</strong>", "kamarádem"],
      ["", "<strong>svou, svojí</strong>", "vodou"],
      ["", "<strong>svým</strong>", "pivem"],
      ["", "<strong>svými</strong>", "kamarády, rohlíky, vodami, pivy"]
    ]
  }
};

export const demonstrativePronouns = {
  main: {
    headers: ["", "Nom", "", "Acc", "", "Gen", "", "Dat", "", "Loc", "", "Instr", ""],
    subHeaders: ["", "Sg", "Pl", "Sg", "Pl", "Sg", "Pl", "Sg", "Pl", "Sg", "Pl", "Sg", "Pl"],
    rows: [
      ["<strong>Ma Anim</strong>", "ten", "ti", "toho", "ty", "toho", "těch", "tomu", "těm", "tom", "těch", "tím", "těmi"],
      ["<strong>Ma Inanim</strong>", "ten", "ty", "ten", "ty", "toho", "ty", "tomu", "těm", "tom", "těch", "tím", "těmi"],
      ["<strong>Fem</strong>", "ta", "ty", "tu", "ty", "té", "těch", "té", "těm", "té", "těch", "tou", "těmi"],
      ["<strong>Neu</strong>", "to", "ta", "to", "ta", "toho", "těch", "tomu", "těm", "tom", "těch", "tím", "těmi"]
    ]
  },
  variants: {
    headers: ["", "TADY (written)", "TADY (spoken)", "TAM (written)", "TAM (spoken)"],
    rows: [
      ["<strong>TEN</strong>", "tento", "tenhle", "ten", "tamten"],
      ["", "", "tadyten", "", ""],
      ["", "", "tenhleten", "", "tamhleten"],
      ["", "", "tadyhleten", "", ""],
      ["", "", "tadytenhleten", "", ""],
      ["<strong>TA</strong>", "tato", "tahle", "ta", "tamta"],
      ["", "", "tadyta", "", ""],
      ["", "", "tahleta", "", "tamhleta"],
      ["", "", "tadytahleta", "", ""],
      ["<strong>TO</strong>", "toto", "tohle", "to", "tamto"],
      ["", "", "tadyto", "", ""],
      ["", "", "tohleto", "", "tamhleto"],
      ["", "", "tadytohleto", "", ""],
      ["Meaning", "this", "THIS HERE", "that", "THAT OVER THERE"]
    ]
  }
};

export const vsechnoPronouns = {
  singular: {
    headers: ["Case", "Masculine", "Feminine", "Neuter"],
    rows: [
      ["Nom", "ten všech<strong>en</strong>", "t<strong>a</strong> všechn<strong>a</strong>", "t<strong>o</strong> všechn<strong>o</strong>"],
      ["Acc", "toho/ten všech<strong>en</strong>", "t<strong>u</strong> všechn<strong>u</strong>", "t<strong>o</strong> všechn<strong>a</strong>"],
      ["Dat", "tomu všemu", "t<strong>é</strong> vší", "tomu všemu"],
      ["Gen", "toho všeho", "t<strong>é</strong> vší", "toho všeho"],
      ["Loc", "tom vše<strong>m</strong>", "t<strong>é</strong> vš<strong>í</strong>", "tom vše<strong>m</strong>"],
      ["Instr", "tím vš<strong>ím</strong>", "tou vš<strong>í</strong>", "tím vš<strong>ím</strong>"]
    ]
  },
  plural: {
    headers: ["Case", "Masculine", "Feminine", "Neuter"],
    rows: [
      ["Nom", "t<strong>i</strong>/t<strong>y</strong> všichn<strong>i</strong>/vše<strong>chny</strong>", "t<strong>y</strong> všechny", "t<strong>a</strong> všechna"],
      ["Acc", "t<strong>y</strong> všechny", "t<strong>y</strong> všechny", "t<strong>a</strong> všechna"],
      ["Dat", "těm vše<strong>m</strong>", "těm vše<strong>m</strong>", "těm vše<strong>m</strong>"],
      ["Gen", "těch vše<strong>ch</strong>", "těch vše<strong>ch</strong>", "těch vše<strong>ch</strong>"],
      ["Loc", "těch vše<strong>ch</strong>", "těch vše<strong>ch</strong>", "těch vše<strong>ch</strong>"],
      ["Instr", "těmi vše<strong>mi</strong>", "těmi vše<strong>mi</strong>", "těmi vše<strong>mi</strong>"]
    ]
  }
};

export const indefinitePronouns = {
  table: {
    headers: ["?", "Interrogative", "ně- (Indefinite)", "ni- (Negative)", "Example Meaning"],
    rows: [
      ["co", "what", "něco (something)", "nic (nothing)", "Vidím něco. / Nevím nic."],
      ["kdo", "who", "někdo (somebody)", "nikdo (nobody)", "Někdo jde. / Nikdo to neví."],
      ["kde", "where", "někde (somewhere)", "nikde (nowhere)", "Někde mám peníze. / Nikde nemám domov."],
      ["kdy", "when", "někdy (sometime)", "nikdy (never)", "Někdy si zpívám. / Nikdy nemám čas."],
      ["jaký", "what kind", "nějaký (some kind)", "žádný (none)", "Je tu nějaký muž. / Není tu žádný muž."],
      ["jak", "how", "nějak (somehow)", "nijak (in no way)", "Nějak to uděláme. / Nijak se to nelepší."],
      ["který", "which", "některý (some)", "žádný (none)", "Někteří lidé jsou bohatí."]
    ]
  },
  other: [
    { prefix: "lec-/leda(s)", meaning: "just any, many", examples: "ledakdo (just anybody), leckde (just anywhere)" },
    { prefix: "kde-", meaning: "pretty much any (colloquial)", examples: "kdekdo, kdeco" },
    { prefix: "málo-", meaning: "few", examples: "málokdo (few people), málokdy (not often)" },
    { suffix: "-koli", meaning: "-ever", examples: "kdokoli (whoever), kdekoli (wherever), jakýkoli (whichever)" },
    { suffix: "-si", meaning: "some- (archaic)", examples: "kdosi (someone), cosi (something), kdysi (long time ago)" },
    { suffix: "-pak", meaning: "quizzical enquiry", examples: "kdopak (who might it be), copak, kdypak" }
  ]
};

export const reflexivePronouns = {
  table: {
    headers: ["Case", "Unstressed", "Stressed"],
    rows: [
      ["Nom", "-", "-"],
      ["Acc", "se", "sebe"],
      ["Gen", "-", "sebe"],
      ["Dat", "si", "sobě"],
      ["Loc", "-", "o sobě"],
      ["Instr", "-", "sebou"]
    ]
  },
  seUses: [
    { use: "NO MEANING", desc: "Part of the verb", examples: "ptát se (ask), smát se (laugh), bát se (fear)" },
    { use: "PASSIVE", desc: "General subject", examples: "Kouří se tady? (Does one smoke here?), Jde se? (Shall we go?)" },
    { use: "RECIPROCITY", desc: "Relationship between objects", examples: "Známe se (We know each other), Sejdeme se (We will meet)" }
  ],
  siUses: [
    { use: "TO ONESELF", desc: "For oneself", examples: "Dám si (I will have), Koupím si (I will buy)" },
    { use: "RECIPROCITY", desc: "Relationship between objects", examples: "Píšeme si (We write to each other), Dáváme si dary (We give presents)" },
    { use: "CASUAL", desc: "Casual attitude", examples: "Vejde si do hospody (He walks into a bar, just like that)" }
  ]
};
