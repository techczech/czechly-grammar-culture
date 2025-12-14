
export interface ConjugationRow {
  model: string;
  present: string;
  past: string;
  infinitive: string;
  examples: string;
}

export const conjugationModelsData: ConjugationRow[] = [
  {
    model: "-e",
    present: "-u/-i, nese",
    past: "nesl",
    infinitive: "-Ct",
    examples: "vézt, lézt, vést, číst, krást, třást, kvést, mást"
  },
  {
    model: "-e",
    present: "-u/-i, peče",
    past: "pekl",
    infinitive: "-ct/-ci",
    examples: "moct, téct, vléct"
  },
  {
    model: "-e",
    present: "-u/-i, bere",
    past: "bral",
    infinitive: "-át",
    examples: "prát, žrát, hnát, koupat, kopat, chápat, plavat, kašlat, lámat, klamat"
  },
  {
    model: "-e",
    present: "-u/-i, maže",
    past: "mazal",
    infinitive: "-at",
    examples: "lhát, psát, poslat, vázat, kousat, skákat, páchat, řezat"
  },
  {
    model: "-e",
    present: "-u/-i, tře",
    past: "třel",
    infinitive: "-ít",
    examples: "umřít, zavřít, přít, dřít, vřít"
  },
  {
    model: "-ne",
    present: "-nu, tiskne",
    past: "tiskl/tisknul",
    infinitive: "-C+nout",
    examples: "risknout, písknout, zapnout, vypnout, obléknout, stárnout, škrábnout, nadchnout, zamknout, odemknout"
  },
  {
    model: "-ne",
    present: "-nu, mine",
    past: "minul",
    infinitive: "-V+nout",
    examples: "zapomenout, vzpomenout, linout, vinout, stát se"
  },
  {
    model: "-ne",
    present: "-nu/-mu, začne",
    past: "začal/začnul",
    infinitive: "-nout/-ít",
    examples: "zatnout, vyjmout, přijmout, pojmout, vzít"
  },
  {
    model: "-je",
    present: "-ju, kryje",
    past: "kryl",
    infinitive: "-ýt/-ít/-out/-ět/-át",
    examples: "pít, zabít, žít, mýt, obout, zout, hřát, hrát, dít se, smát se"
  },
  {
    model: "-je",
    present: "-ju, kupuje",
    past: "kupoval",
    infinitive: "-ovat",
    examples: "pracovat, studovat, telefonovat, kontrolovat, opakovat, bojovat, cestovat, sportovat, stopovat"
  },
  {
    model: "-í",
    present: "-ím, prosí",
    past: "prosil",
    infinitive: "-it/-ít",
    examples: "učit, končit, mluvit, půjčit, pustit, čistit, ublížit,"
  },
  {
    model: "-í",
    present: "-ím, trpí, …, -í",
    past: "trpěl",
    infinitive: "-ět/et (-ít)",
    examples: "umět, večeřet, letět, sedět, vidět, rozumět, vědět, ležet, myslet"
  },
  {
    model: "-í",
    present: "-ím, sází, ..., -ejí",
    past: "sázel",
    infinitive: "-et (-ít)",
    examples: "muset, bydlet, smět, znít"
  },
  {
    model: "-á",
    present: "-ám, dělá",
    past: "dělal",
    infinitive: "-at/-át",
    examples: "znát, koukat, dát, začínat, obědvat, snídat, ptát se, znát, nechat"
  }
];
