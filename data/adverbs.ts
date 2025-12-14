
export interface AdverbFormation {
  adjective: string;
  suffixChange: string;
  adverb: string;
}

export const mannerFormation: AdverbFormation[] = [
  { adjective: "dobrý", suffixChange: "ý > e/ě", adverb: "dobře" },
  { adjective: "špatný", suffixChange: "-", adverb: "špatně" },
  { adjective: "krásný", suffixChange: "-", adverb: "krásně" },
  { adjective: "mladý", suffixChange: "-", adverb: "mladě" },
  { adjective: "starý", suffixChange: "r > ř (+e)", adverb: "staře" },
  { adjective: "drahý", suffixChange: "h > z (+e)", adverb: "draze" },
  { adjective: "dlouhý", suffixChange: "h > z (+e)", adverb: "dlouze" },
  { adjective: "hezký", suffixChange: "zký > zky", adverb: "hezky" },
  { adjective: "český", suffixChange: "ský > sky", adverb: "česky" },
  { adjective: "anglický", suffixChange: "cký > cky", adverb: "anglicky" },
  { adjective: "jasný", suffixChange: "ý > o", adverb: "jasno" },
  { adjective: "dlouhý", suffixChange: "ý > o", adverb: "dlouho" },
];

export const formationRules = [
  { title: "Standard Rule", text: "The -ý or -í ending of the adjective is dropped, and -e or -ě is added." },
  { title: "Softening", text: "Remember that -ě changes the consonant before it (d > ď, t > ť, n > ň, b > bě, v > vě, etc.)." },
  { title: "Consonant Changes", text: "k > c (krátký > krátce), ch > š (jednoduchý > jednoduše), r > ř (starý > staře), h > z (drahý > draze)" },
  { title: "Shortening", text: "The -cký, -ský, -zký endings are shortened to -cky, -sky, -zky (hezký > hezky, český > česky)." },
  { title: "-o Ending", text: "The -ý ending has an equivalent -o which is used for some words (daleký > daleko). Sometimes there is a difference in meaning between the -e and -o forms." }
];

export interface QuantityAdverb {
  czech: string;
  english: string;
}

export const quantityAdverbs: QuantityAdverb[] = [
  { czech: "hodně", english: "a lot / much" },
  { czech: "velmi", english: "very" },
  { czech: "moc", english: "too / very / a lot" },
  { czech: "málo", english: "little" },
  { czech: "dost", english: "enough" },
];

export interface ComparisonAdverb {
  english: string;
  base: string;
  comparative: string;
  superlative: string;
}

export const comparisonAdverbs: ComparisonAdverb[] = [
  { english: "much", base: "hodně / moc", comparative: "více", superlative: "nejvíce" },
  { english: "little", base: "málo", comparative: "méně", superlative: "nejméně" },
  { english: "well", base: "dobře", comparative: "lépe", superlative: "nejlépe" },
  { english: "badly", base: "špatně", comparative: "hůř", superlative: "nejhůř" },
  { english: "soon", base: "brzo / brzy", comparative: "dřív(e)", superlative: "nejdřív(e)" },
  { english: "fast", base: "rychle", comparative: "rychleji", superlative: "nejrychleji" },
  { english: "cheaply", base: "levně", comparative: "levněji", superlative: "nejlevněji" },
];

export interface PlaceAdverb {
    english: string;
    location: string;
    direction: string;
}

export const placeAdverbs: PlaceAdverb[] = [
    { english: "in the back / to the back", location: "vzadu", direction: "dozadu" },
    { english: "in the front / to the front", location: "vepředu", direction: "dopředu" },
    { english: "up / upward", location: "nahoře", direction: "nahoru" },
    { english: "down / downward", location: "dole", direction: "dolů" },
    { english: "in the middle / to the middle", location: "uprostřed", direction: "doprostřed" },
    { english: "on the left / to the left", location: "vlevo", direction: "doleva" },
    { english: "on the right / to the right", location: "vpravo", direction: "doprava" },
];

export const timeAdverbs = [
    { czech: "včera", english: "yesterday" },
    { czech: "předtím", english: "before" },
    { czech: "teď / nyní", english: "now" },
    { czech: "potom", english: "after / then" },
    { czech: "zítra", english: "tomorrow" },
    { czech: "stále", english: "always" },
    { czech: "občas", english: "sometimes" },
    { czech: "tehdy", english: "then (at that time)" },
    { czech: "dosud", english: "until now" },
];
