
export interface NumeralRow {
  number: string;
  czech: string;
}

export const basicNumerals: NumeralRow[] = [
  { number: "1", czech: "jedna" }, { number: "11", czech: "jedenáct" }, { number: "21", czech: "dvacet jedna" },
  { number: "2", czech: "dva" }, { number: "12", czech: "dvanáct" }, { number: "22", czech: "dvacet dva" },
  { number: "3", czech: "tři" }, { number: "13", czech: "třináct" }, { number: "23", czech: "dvacet tři" },
  { number: "4", czech: "čtyři" }, { number: "14", czech: "čtrnáct" }, { number: "24", czech: "dvacet čtyři" },
  { number: "5", czech: "pět" }, { number: "15", czech: "patnáct" }, { number: "25", czech: "dvacet pět" },
  { number: "6", czech: "šest" }, { number: "16", czech: "šestnáct" }, { number: "26", czech: "dvacet šest" },
  { number: "7", czech: "sedm" }, { number: "17", czech: "sedmnáct" }, { number: "27", czech: "dvacet sedm" },
  { number: "8", czech: "osm" }, { number: "18", czech: "osmnáct" }, { number: "28", czech: "dvacet osm" },
  { number: "9", czech: "devět" }, { number: "19", czech: "devatenáct" }, { number: "29", czech: "dvacet devět" },
  { number: "10", czech: "deset" }, { number: "20", czech: "dvacet" }, { number: "30", czech: "třicet" },
];

export const bigNumerals: NumeralRow[] = [
  { number: "10", czech: "deset" }, { number: "100", czech: "sto" }, { number: "1 000", czech: "tisíc" },
  { number: "20", czech: "dvacet" }, { number: "200", czech: "dvě stě" }, { number: "2 000", czech: "dva tisíce" },
  { number: "30", czech: "třicet" }, { number: "300", czech: "tři sta" }, { number: "5 000", czech: "pět tisíc" },
  { number: "40", czech: "čtyřicet" }, { number: "400", czech: "čtyři sta" }, { number: "100 000", czech: "sto tisíc" },
  { number: "50", czech: "padesát" }, { number: "500", czech: "pět set" }, { number: "1 000 000", czech: "milión" },
  { number: "60", czech: "šedesát" }, { number: "600", czech: "šest set" }, { number: "2 000 000", czech: "dva milióny" },
  { number: "70", czech: "sedmdesát" }, { number: "700", czech: "sedm set" }, { number: "5 000 000", czech: "pět miliónů" },
  { number: "80", czech: "osmdesát" }, { number: "800", czech: "osm set" }, { number: "1 000 000 000", czech: "miliarda" },
  { number: "90", czech: "devadesát" }, { number: "900", czech: "devět set" }, { number: "2 000 000 000", czech: "dvě miliardy" },
  { number: "100", czech: "sto" }, { number: "1 000", czech: "tisíc" }, { number: "5 000 000 000", czech: "pět miliard" },
];

export interface NumeralTypeRow {
  val: string;
  cardinal: string;
  ordinal: string;
  name: string;
  multiplication: string;
  generic: string;
}

export const numeralTypes: NumeralTypeRow[] = [
  { val: "1", cardinal: "jedna", ordinal: "první", name: "jednička", multiplication: "jednou", generic: "jedny" },
  { val: "2", cardinal: "dva", ordinal: "druhý", name: "dvojka", multiplication: "dvakrát", generic: "dvoje" },
  { val: "3", cardinal: "tři", ordinal: "třetí", name: "trojka", multiplication: "třikrát", generic: "troje" },
  { val: "4", cardinal: "čtyři", ordinal: "čtvrtý", name: "čtyřka", multiplication: "čtyřikrát", generic: "čtvery" },
  { val: "5", cardinal: "pět", ordinal: "pátý", name: "pětka", multiplication: "pětkrát", generic: "patery" },
  { val: "6", cardinal: "šest", ordinal: "šestý", name: "šestka", multiplication: "šestkrát", generic: "šestery" },
  { val: "7", cardinal: "sedm", ordinal: "sedmý", name: "sedmička", multiplication: "sedmkrát", generic: "sedmery" },
  { val: "8", cardinal: "osm", ordinal: "osmý", name: "osmička", multiplication: "osmkrát", generic: "osmery" },
  { val: "9", cardinal: "devět", ordinal: "devátý", name: "devítka", multiplication: "devětkrát", generic: "devatery" },
  { val: "10", cardinal: "deset", ordinal: "desátý", name: "desítka", multiplication: "desetkrát", generic: "desatery" },
  { val: "11", cardinal: "jedenáct", ordinal: "jedenáctý", name: "jedenáctka", multiplication: "jedenáctkrát", generic: "jedenáctery" },
  { val: "12", cardinal: "dvanáct", ordinal: "dvanáctý", name: "dvanáctka", multiplication: "dvanáctkrát", generic: "dvanáctery" },
  { val: "...", cardinal: "...", ordinal: "...", name: "...", multiplication: "...", generic: "..." },
  { val: "20", cardinal: "dvacet", ordinal: "dvacátý", name: "dvacítka", multiplication: "dvacetkrát", generic: "dvacatery" },
  { val: "21", cardinal: "dvacet jedna", ordinal: "dvacátý první", name: "jednadvacítka", multiplication: "jednadvacetkrát", generic: "jednadvacatery" },
  { val: "50", cardinal: "padesát", ordinal: "padesátý", name: "padesátka", multiplication: "padesátkrát", generic: "padesatery" },
  { val: "100", cardinal: "sto", ordinal: "stý", name: "stovka", multiplication: "stokrát", generic: "stery" },
  { val: "1000", cardinal: "tisíc", ordinal: "tisící", name: "tisícovka", multiplication: "tisíckrát", generic: "tisícery" },
];

export interface DeclensionOne {
  caseName: string;
  question: string;
  masculine: string;
  feminine: string;
  neuter: string;
}

export const declensionOne: DeclensionOne[] = [
  { caseName: "Nom", question: "Kdo? Co?", masculine: "jeden", feminine: "jedna", neuter: "jedno" },
  { caseName: "Gen", question: "Koho? Čeho?", masculine: "jednoho", feminine: "jedné", neuter: "jednoho" },
  { caseName: "Dat", question: "Komu? Čemu?", masculine: "jednomu", feminine: "jedné", neuter: "jednomu" },
  { caseName: "Acc", question: "Koho? Co?", masculine: "jeden/jednoho", feminine: "jednu", neuter: "jedno" },
  { caseName: "Loc", question: "(o) Kom? Čem?", masculine: "jednom", feminine: "jedné", neuter: "jednom" },
  { caseName: "Instr", question: "Kým? Čím?", masculine: "jedním", feminine: "jednou", neuter: "jedním" },
];

export interface DeclensionSmall {
  caseName: string;
  two: string;
  three: string;
  four: string;
}

export const declensionSmall: DeclensionSmall[] = [
  { caseName: "Nom/Acc", two: "dva (M) / dvě (F/N)", three: "tři", four: "čtyři" },
  { caseName: "Gen/Loc", two: "dvou", three: "tří", four: "čtyř" },
  { caseName: "Dat", two: "dvěma", three: "třem", four: "čtyřem" },
  { caseName: "Instr", two: "dvěma", three: "třema (třemi)", four: "čtyřma (čtyřmi)" },
];

export interface Measure {
  unit: string;
  pattern: string;
  example: string;
  english: string;
}

export const standardMeasures: Measure[] = [
  { unit: "půl / půlka", pattern: "-", example: "půl litru mléka", english: "half" },
  { unit: "čtvrt / čtvrtka", pattern: "-", example: "čtvrtka másla", english: "quarter" },
  { unit: "kilo", pattern: "2-4 kila, 5- kilo", example: "5 kilo meruněk", english: "kilo" },
  { unit: "deko", pattern: "2-4 deka, 5- deka", example: "10 deka salámu", english: "100 grams (decagram)" },
  { unit: "litr", pattern: "2-4 litry, 5- litrů", example: "litr mléka", english: "liter" },
  { unit: "metr", pattern: "2-4 metry, 5- metrů", example: "-", english: "meter" },
  { unit: "kus", pattern: "2-4 kusy, 5- kusů", example: "kus pizzy", english: "piece" },
  { unit: "kousek", pattern: "2-4 kousky, 5- kousků", example: "kousek chleba", english: "a little piece" },
  { unit: "sklenice", pattern: "2-4 sklenice, 5- sklenic", example: "sklenice piva", english: "glass" },
  { unit: "láhev", pattern: "2-4 láhve, 5- láhví", example: "láhev piva", english: "bottle" },
];

export const generalMeasures = [
  { czech: "mnoho / moc / hodně", english: "much / many" },
  { czech: "dost", english: "enough" },
  { czech: "málo", english: "little, few" },
  { czech: "trochu", english: "little" },
  { czech: "několik", english: "several" },
  { czech: "více", english: "more" },
  { czech: "méně", english: "less" },
];
