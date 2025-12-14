
export interface CaseFormModel {
  model: string;
  partOfSpeech: string;
  gender: string;
  number: string;
  frequency: string;
  examples: string;
  notes?: string;
  singularForms: {
    nominative: string;
    genitive: string;
    dative: string;
    accusative: string;
    vocative: string;
    locative: string;
    instrumental: string;
  };
  pluralForms: {
    nominative: string;
    genitive: string;
    dative: string;
    accusative: string;
    vocative: string;
    locative: string;
    instrumental: string;
  };
}

const emptyForms = { nominative: "-", genitive: "-", dative: "-", accusative: "-", vocative: "-", locative: "-", instrumental: "-" };

export const caseFormsData: CaseFormModel[] = [
  {
    model: "káva",
    partOfSpeech: "noun",
    gender: "feminine",
    number: "singular",
    frequency: "very high",
    examples: "aktivita, babička, banka, cena, cesta, dcera, ekonomika, hlava, hodina, hra, kniha, koruna, láska, máma, maminka, minuta, noha, politika, pravda, republika, strana, škola, technika, třída, válka, věta, vláda, voda, zima, žena, Afrika, Amerika, Barbora, Čína, Eva, Jana, Morava, Moskva, Praha, Vltava",
    notes: "Most frequent feminine noun model and second most frequent model overall.",
    singularForms: { nominative: "-a", genitive: "-y", dative: "-ě", accusative: "-u", vocative: "-o", locative: "-ě", instrumental: "-ou" },
    pluralForms: { nominative: "-y", genitive: "-Ø", dative: "-ám", accusative: "-y", vocative: "-y", locative: "-ách", instrumental: "-ami" }
  },
  {
    model: "kdo",
    partOfSpeech: "pronoun",
    gender: "n/a",
    number: "singular",
    frequency: "medium",
    examples: "",
    singularForms: { nominative: "kdo", genitive: "koho", dative: "komu", accusative: "koho", vocative: "kdo", locative: "kom", instrumental: "kým" },
    pluralForms: emptyForms
  },
  {
    model: "dobrý",
    partOfSpeech: "adjective",
    gender: "masculine animate",
    number: "singular",
    frequency: "very high",
    examples: "bílý, blízký, bývalý, celý, černý, červený, český, čistý, dlouhý, dobrý, důležitý, evropský, jasný, jednoduchý, jiný, jistý, krátký, malý, minulý, mladý, možný, německý, nízký, nový, nutný, otevřený, plný, podobný, pravý, pražský, různý, rychlý, silný, široký, skutečný, špatný, starý, šťastný, stejný, těžký, velký, vysoký, zajímavý, zelený",
    notes: "This model covers over 60% of all adjectives.",
    singularForms: { nominative: "-ý", genitive: "-ého", dative: "-ému", accusative: "-ého", vocative: "-ý", locative: "-ém", instrumental: "-ým" },
    pluralForms: { nominative: "-í", genitive: "-ých", dative: "-ým", accusative: "-é", vocative: "-í", locative: "-ých", instrumental: "-ými" }
  },
  {
    model: "já",
    partOfSpeech: "pronoun",
    gender: "n/a",
    number: "singular",
    frequency: "medium",
    examples: "",
    singularForms: { nominative: "já", genitive: "mě", dative: "mně", accusative: "mě", vocative: "n/a", locative: "mně", instrumental: "mnou" },
    pluralForms: emptyForms
  },
  {
    model: "ty (strong)",
    partOfSpeech: "pronoun",
    gender: "",
    number: "singular",
    frequency: "medium",
    examples: "",
    singularForms: { nominative: "ty", genitive: "tebe", dative: "tobě", accusative: "tebe", vocative: "ty", locative: "tobě", instrumental: "tebou" },
    pluralForms: emptyForms
  },
  {
    model: "ty",
    partOfSpeech: "pronoun",
    gender: "",
    number: "singular",
    frequency: "medium",
    examples: "",
    singularForms: { nominative: "ty", genitive: "tebe", dative: "ti", accusative: "tě", vocative: "ty", locative: "tobě", instrumental: "tebou" },
    pluralForms: emptyForms
  },
  {
    model: "kamarád",
    partOfSpeech: "noun",
    gender: "masculine animate",
    number: "singular",
    frequency: "very high",
    examples: "asistent, bratr, dědeček, doktor, ekonom, expert, klient, manažer, manžel, pacient, pan, partner, profesor, pták, soused, student, syn, tatínek, zpěvák, Adam, David, Michal, Miroslav, Václav",
    notes: "Most masculine animate nouns belong to this model.",
    singularForms: { nominative: "-Ø", genitive: "-a", dative: "-u / -ovi", accusative: "-a", vocative: "-e", locative: "-u / -ovi", instrumental: "-em" },
    pluralForms: { nominative: "-i", genitive: "-ů", dative: "-ům", accusative: "-y", vocative: "-i", locative: "-ech", instrumental: "-y" }
  },
  {
    model: "jedna",
    partOfSpeech: "numeral",
    gender: "feminine",
    number: "singular",
    frequency: "high",
    examples: "",
    singularForms: { nominative: "-a", genitive: "-u", dative: "-é", accusative: "-u", vocative: "-a", locative: "-é", instrumental: "-ou" },
    pluralForms: emptyForms
  },
  {
    model: "jeden",
    partOfSpeech: "numeral",
    gender: "masculine",
    number: "singular",
    frequency: "high",
    examples: "",
    singularForms: { nominative: "-en", genitive: "-noho", dative: "-nomu", accusative: "-noho", vocative: "-en", locative: "-nom", instrumental: "-ním" },
    pluralForms: { nominative: "-ni", genitive: "-něch", dative: "-něm", accusative: "-ny", vocative: "-ni", locative: "-něch", instrumental: "-němi" }
  },
  {
    model: "jedno",
    partOfSpeech: "numeral",
    gender: "neuter",
    number: "singular",
    frequency: "high",
    examples: "",
    singularForms: { nominative: "-o", genitive: "-oho", dative: "-omu", accusative: "-oho", vocative: "-o", locative: "-om", instrumental: "-ím" },
    pluralForms: emptyForms
  },
  {
    model: "rýže",
    partOfSpeech: "noun",
    gender: "feminine",
    number: "singular",
    frequency: "high",
    examples: "akce, aplikace, demokracie, energie, fotografie, galerie, informace, kalorie, komedie, konference, kuchyně, neděle, nemocnice, organizace, policie, práce, restaurace, revoluce, situace, stanice, televize, ulice, večeře, země, židle",
    singularForms: { nominative: "-e", genitive: "-e", dative: "-i", accusative: "-i", vocative: "-e", locative: "-i", instrumental: "-í" },
    pluralForms: { nominative: "-e", genitive: "-í", dative: "-ím", accusative: "-e", vocative: "-e", locative: "-ích", instrumental: "-emi" }
  },
  {
    model: "telefon",
    partOfSpeech: "noun",
    gender: "masculine inanimate",
    number: "singular",
    frequency: "very high",
    examples: "byt, červen, den, dokument, dolar, dopis, dům, film, jazyk, koncert, květen, leden, listopad, pátek, plán, rok, stát, stůl, text, týden, úkol, začátek, zákon, život, Děčín, Krumlov, Londýn, Most, New York",
    notes: "Most inanimate masculines belong to this model. Most frequent model overall.",
    singularForms: { nominative: "-Ø", genitive: "-u", dative: "-u", accusative: "-Ø", vocative: "-u", locative: "-u", instrumental: "-em" },
    pluralForms: { nominative: "-y", genitive: "-ů", dative: "-ům", accusative: "-y", vocative: "-y", locative: "-ech", instrumental: "-y" }
  },
  {
    model: "poradce",
    partOfSpeech: "noun",
    gender: "masculine animate",
    number: "singular",
    frequency: "low",
    examples: "důchodce, soudce, strášce, zástupce",
    singularForms: { nominative: "-e", genitive: "-e", dative: "-i", accusative: "-e", vocative: "-ě", locative: "-i", instrumental: "-em" },
    pluralForms: { nominative: "-i", genitive: "-ů", dative: "-ům", accusative: "-e", vocative: "-i", locative: "-ích", instrumental: "-i" }
  },
  {
    model: "muž",
    partOfSpeech: "noun",
    gender: "masculine animate",
    number: "singular",
    frequency: "high",
    examples: "bratranec, cizinec, herec, lékař, malíř, podnikatel, přítel, rodič, ředitel, strýc, vědec, zaměstnanec, Aleš, Němec, Ondřej, Tomáš, Vietnamec",
    singularForms: { nominative: "-Ø", genitive: "-e", dative: "-i / -ovi", accusative: "-e", vocative: "-i", locative: "-i / -ovi", instrumental: "-em" },
    pluralForms: { nominative: "-i", genitive: "-ů", dative: "-ům", accusative: "-e", vocative: "-i", locative: "-ích", instrumental: "-i" }
  },
  {
    model: "policista",
    partOfSpeech: "noun",
    gender: "masculine animate",
    number: "singular",
    frequency: "medium",
    examples: "cyklista, děda, fotbalista, starosta, táta, turista, žurnalista",
    singularForms: { nominative: "-a", genitive: "-y", dative: "-ovi", accusative: "-u", vocative: "-o", locative: "-ovi", instrumental: "-ou" },
    pluralForms: { nominative: "-é", genitive: "-ů", dative: "-ům", accusative: "-y", vocative: "-é", locative: "-ech", instrumental: "-y" }
  },
  {
    model: "čaj",
    partOfSpeech: "noun",
    gender: "masculine inanimate",
    number: "singular",
    frequency: "high",
    examples: "červenec, déšť, formulář, konec, kraj, měsíc, nápoj, nůž, olej, počítač, pokoj, prosinec, seminář, tisíc, Hradec, Izrael, Liberec",
    singularForms: { nominative: "-Ø", genitive: "-e", dative: "-i", accusative: "-Ø", vocative: "-i", locative: "-i", instrumental: "-em" },
    pluralForms: { nominative: "-e", genitive: "-ů", dative: "-ům", accusative: "-e", vocative: "-e", locative: "-ích", instrumental: "-i" }
  },
  {
    model: "kuře",
    partOfSpeech: "noun",
    gender: "neuter",
    number: "singular",
    frequency: "low",
    examples: "dítě, kotě, prase,  poupě, tele, čuně, dvojče, nemluvně",
    singularForms: { nominative: "-e", genitive: "-ete", dative: "-eti", accusative: "-e", vocative: "-e", locative: "-eti", instrumental: "-etem" },
    pluralForms: { nominative: "-ata", genitive: "-at", dative: "-atům", accusative: "-ata", vocative: "-ata", locative: "-atech", instrumental: "-aty" }
  },
  {
    model: "les",
    partOfSpeech: "noun",
    gender: "masculine inanimate",
    number: "singular",
    frequency: "low",
    examples: "domov, kostel, oběd, ostrov, večer, svět, tábor, zákon, život, leden, únor, březen, duben, květen, červen, srpen, říjen, čtvrtek, sýr",
    notes: "Submodel of telefon differing in Genitive Singular (-a).",
    singularForms: { nominative: "-Ø", genitive: "-a", dative: "-u", accusative: "-Ø", vocative: "-e", locative: "-u", instrumental: "-em" },
    pluralForms: { nominative: "-y", genitive: "-ů", dative: "-ům", accusative: "-y", vocative: "-y", locative: "-ích", instrumental: "-y" }
  },
  {
    model: "daň",
    partOfSpeech: "noun",
    gender: "feminine",
    number: "singular",
    frequency: "high",
    examples: "báseň, garáž, kancelář, kolej, kuchyň, pasáž, píseň, pláž, postel, skříň, tramvaj, tvář, věž, žízeň",
    singularForms: { nominative: "-Ø", genitive: "-e", dative: "-i", accusative: "-Ø", vocative: "-i", locative: "-i", instrumental: "-í" },
    pluralForms: { nominative: "-ě", genitive: "-í", dative: "-ím", accusative: "-ě", vocative: "-ě", locative: "-ích", instrumental: "-ěmi" }
  },
  {
    model: "nádraží",
    partOfSpeech: "noun",
    gender: "neuter",
    number: "singular",
    frequency: "high",
    examples: "náboženství, náměstí, nebezpečí, oddělení, počasí, pojištění, rozhodnutí, řešení, řízení, setkání, století, štěstí, úterý, utkání, úsilí, vedení, vězení, vítězství, vlastnictví, vyjádření, vystoupení, vyšetřování, využití, vzdělání, zahraničí, září, zařízení, zboží, zdraví, zkoumání, zranění, Ústí, Nizozemí, Podještědí, Polabí, Podolí",
    singularForms: { nominative: "-í", genitive: "-í", dative: "-í", accusative: "-í", vocative: "-í", locative: "-í", instrumental: "-ím" },
    pluralForms: { nominative: "-í", genitive: "-í", dative: "-ím", accusative: "-í", vocative: "-í", locative: "-ích", instrumental: "-ími" }
  },
  {
    model: "noc",
    partOfSpeech: "noun",
    gender: "feminine",
    number: "singular",
    frequency: "high",
    examples: "oblast, řeč, věc, vlast, budoucnost, domácnost, kost, nemovitost, nezaměstanost, možnost, nutnost, nenávist, pravděpodobnost",
    singularForms: { nominative: "-Ø", genitive: "-i", dative: "-i", accusative: "-Ø", vocative: "-i", locative: "-i", instrumental: "-í" },
    pluralForms: { nominative: "-i", genitive: "-í", dative: "-ím", accusative: "-i", vocative: "-i", locative: "-ích", instrumental: "-emi" }
  },
  {
    model: "pivo",
    partOfSpeech: "noun",
    gender: "neuter",
    number: "singular",
    frequency: "high",
    examples: "auto, clo, číslo, dílo, břicho, divadlo, euro, foto, heslo, horko, jablko, jezero, jídlo, jméno, kilo, kino, koleno, kolo, letadlo, léto, máslo, maso, město, místo, mléko, oko, okno, patro, pero, písmeno, pravidlo, právo, procento, rameno, ráno, riziko, sako, sklo, slovo, sloveso, sluchátko, sluníčko, stříbro, světlo, tělo, těsto, zavazadlo, zlato, železo, Brno, Česko, Dánsko, Irsko, Japonsko, Kladno, Mexiko, Maďarsko, Německo, Rakousko, Rusko, Řecko, Slovensko, Špaňelsko, Tesco",
    singularForms: { nominative: "-o", genitive: "-a", dative: "-u", accusative: "-o", vocative: "-o", locative: "-u", instrumental: "-em" },
    pluralForms: { nominative: "-a", genitive: "-Ø", dative: "-ům", accusative: "-a", vocative: "-a", locative: "-ech", instrumental: "-y" }
  },
  {
    model: "moře",
    partOfSpeech: "noun",
    gender: "neuter",
    number: "singular",
    frequency: "high",
    examples: "slunce, pole, srdce, hřiště, kafe, ovoce, parkoviště, schodiště, sídliště, vejce, výstaviště, Labe, Hradiště",
    singularForms: { nominative: "-e", genitive: "-e", dative: "-i", accusative: "-e", vocative: "-e", locative: "-i", instrumental: "-em" },
    pluralForms: { nominative: "-e", genitive: "-í", dative: "-ím", accusative: "-e", vocative: "-e", locative: "-ích", instrumental: "-i" }
  },
  {
    model: "muzeum",
    partOfSpeech: "noun",
    gender: "neuter",
    number: "singular",
    frequency: "very low",
    examples: "",
    singularForms: { nominative: "-um", genitive: "-a", dative: "-u", accusative: "-um", vocative: "-um", locative: "-u", instrumental: "-em" },
    pluralForms: { nominative: "-a", genitive: "-í", dative: "-ím", accusative: "-a", vocative: "-a", locative: "-ích", instrumental: "-y" }
  },
  {
    model: "idea",
    partOfSpeech: "noun",
    gender: "feminine",
    number: "singular",
    frequency: "very low",
    examples: "",
    singularForms: { nominative: "-a", genitive: "-je", dative: "-ji", accusative: "-a", vocative: "-o", locative: "-ji", instrumental: "-jí" },
    pluralForms: { nominative: "-je", genitive: "-jí", dative: "-jím", accusative: "-je", vocative: "-je", locative: "-jích", instrumental: "-jemi" }
  },
  {
    model: "vedoucí",
    partOfSpeech: "noun",
    gender: "masculine animate",
    number: "singular",
    frequency: "low",
    examples: "cestující, průvodčí, účetní, vedoucí, nezaměstnaný, známý",
    notes: "Noun model behaving like adjective.",
    singularForms: { nominative: "-í", genitive: "-ího", dative: "-ímu", accusative: "-í", vocative: "-í", locative: "-ímu", instrumental: "-ím" },
    pluralForms: { nominative: "-í", genitive: "-ích", dative: "-ím", accusative: "-í", vocative: "-í", locative: "-ích", instrumental: "-ími" }
  },
  {
    model: "virus",
    partOfSpeech: "noun",
    gender: "masculine inanimate",
    number: "singular",
    frequency: "very low",
    examples: "kapitalismus, komunismus, feminismus, optimismus, rasismus, socialismus, terorismus",
    singularForms: { nominative: "-us", genitive: "-u", dative: "-u", accusative: "-us", vocative: "-e", locative: "-u", instrumental: "-em" },
    pluralForms: { nominative: "-y", genitive: "-ů", dative: "-ům", accusative: "-y", vocative: "-y", locative: "-ech", instrumental: "-y" }
  },
  {
    model: "génius",
    partOfSpeech: "noun",
    gender: "masculine animate",
    number: "singular",
    frequency: "very low",
    examples: "dinosaurus, Spartakus, Erasmus, Kristus, Odyseus",
    singularForms: { nominative: "-us", genitive: "-a", dative: "-ovi", accusative: "-us", vocative: "-u", locative: "-ovi", instrumental: "-em" },
    pluralForms: { nominative: "-ové", genitive: "-ů", dative: "-ům", accusative: "-y", vocative: "-ové", locative: "-ech", instrumental: "-y" }
  },
  {
    model: "chleba",
    partOfSpeech: "noun",
    gender: "masculine inanimate",
    number: "singular",
    frequency: "high",
    examples: "",
    singularForms: { nominative: "-a", genitive: "-a", dative: "-u", accusative: "-a", vocative: "-e", locative: "-u", instrumental: "-em" },
    pluralForms: { nominative: "-y", genitive: "-ů", dative: "-ům", accusative: "-y", vocative: "-y", locative: "-ech", instrumental: "-y" }
  },
  {
    model: "paní",
    partOfSpeech: "noun",
    gender: "feminine",
    number: "singular",
    frequency: "very low",
    examples: "vedoucí, mluvčí, průvodčí",
    notes: "Non-declining.",
    singularForms: { nominative: "-Ø", genitive: "-Ø", dative: "-Ø", accusative: "-Ø", vocative: "-Ø", locative: "-Ø", instrumental: "-Ø" },
    pluralForms: { nominative: "-Ø", genitive: "-Ø", dative: "-Ø", accusative: "-Ø", vocative: "-Ø", locative: "-Ø", instrumental: "-Ø" }
  },
  {
    model: "party",
    partOfSpeech: "noun",
    gender: "feminine",
    number: "singular",
    frequency: "very low",
    examples: "Mary, Whiskey, sherry",
    notes: "Non-declining.",
    singularForms: { nominative: "-Ø", genitive: "-Ø", dative: "-Ø", accusative: "-Ø", vocative: "-Ø", locative: "-Ø", instrumental: "-Ø" },
    pluralForms: { nominative: "-Ø", genitive: "-Ø", dative: "-Ø", accusative: "-Ø", vocative: "-Ø", locative: "-Ø", instrumental: "-Ø" }
  },
  {
    model: "známá",
    partOfSpeech: "noun",
    gender: "feminine",
    number: "singular",
    frequency: "very low",
    examples: "Malá",
    notes: "Adjectival noun form.",
    singularForms: { nominative: "-á", genitive: "-é", dative: "-é", accusative: "-ou", vocative: "-á", locative: "-é", instrumental: "-ou" },
    pluralForms: { nominative: "-é", genitive: "-ých", dative: "-ým", accusative: "-é", vocative: "-é", locative: "-ých", instrumental: "-ými" }
  },
  {
    model: "Dagmar",
    partOfSpeech: "noun",
    gender: "feminine",
    number: "singular",
    frequency: "very low",
    examples: "madam, Karen, Karin, Ester, talkshow, show",
    notes: "Non-declining.",
    singularForms: { nominative: "-Ø", genitive: "-Ø", dative: "-Ø", accusative: "-Ø", vocative: "-Ø", locative: "-Ø", instrumental: "-Ø" },
    pluralForms: { nominative: "-Ø", genitive: "-Ø", dative: "-Ø", accusative: "-Ø", vocative: "-Ø", locative: "-Ø", instrumental: "-Ø" }
  },
  {
    model: "Henry",
    partOfSpeech: "noun",
    gender: "masculine animate",
    number: "singular",
    frequency: "very low",
    examples: "Jimmy, Jiří, Tony, grizzly, pony, yetti",
    singularForms: { nominative: "-Ø", genitive: "-ho", dative: "-mu", accusative: "-ho", vocative: "-Ø", locative: "-m", instrumental: "-m" },
    pluralForms: { nominative: "-ové", genitive: "-ů", dative: "-ům", accusative: "-e", vocative: "-ové", locative: "-ích", instrumental: "-mi" }
  },
  {
    model: "dobrá",
    partOfSpeech: "adjective",
    gender: "feminine",
    number: "singular",
    frequency: "very high",
    examples: "bílá, blízká, bývalá, celá, černá, červená, česká, čistá, dlouhá, dobrá, důležitá, evropská, jasná, jednoduchá, jiná, jistá, krátká, malá, minulá, mladá, možná, německá, nízká, nová, nutná, otevřená, plná, podobná, pravá, pražská, různá, rychlá, silná, široká, skutečná, špatná, stará, šťastná, stejná, těžká, velká, vysoká, zajímavá",
    singularForms: { nominative: "-á", genitive: "-é", dative: "-é", accusative: "-ou", vocative: "-á", locative: "-ou", instrumental: "-ou" },
    pluralForms: { nominative: "-é", genitive: "-ých", dative: "-ým", accusative: "-é", vocative: "-é", locative: "-ých", instrumental: "-ými" }
  },
  {
    model: "dobrý (inanim)",
    partOfSpeech: "adjective",
    gender: "masculine inanimate",
    number: "singular",
    frequency: "very high",
    examples: "bílý, blízký, bývalý, celý, černý, červený, český, čistý, dlouhý, dobrý, důležitý, evropský, jasný, jednoduchý, jiný, jistý, krátký, malý, minulý, mladý, možný, německý, nízký, nový, nutný, otevřený, plný, podobný, pravý, pražský, různý, rychlý, silný, široký, skutečný, špatný, starý, šťastný, stejný, těžký, velký, vysoký, zajímavý, zelený",
    singularForms: { nominative: "-ý", genitive: "-ého", dative: "-ému", accusative: "-ý", vocative: "-ý", locative: "-ém", instrumental: "-ým" },
    pluralForms: { nominative: "-é", genitive: "-ých", dative: "-ým", accusative: "-é", vocative: "-é", locative: "-ých", instrumental: "-ými" }
  },
  {
    model: "moderní (ma)",
    partOfSpeech: "adjective",
    gender: "masculine animate",
    number: "singular",
    frequency: "high",
    examples: "budoucí, cizí, další, dnešní, domácí, dopravní, finanční, generální, hlavní, informační, jižní, kulturní, kvalitní, letní, mezinárodní, místní, moderní, národní, následující, noční, normální, oficiální, osobní, ostatní, poslední, pracovní, příští, severní, sociální, speciální, sportovní, státní, střední, televizní, tradiční, vládní, vnitřní, východní, zadní, zahraniční, základní, západní, zdravotní, zvláštní",
    singularForms: { nominative: "-í", genitive: "-ího", dative: "-ímu", accusative: "-ího", vocative: "-í", locative: "-ím", instrumental: "-ím" },
    pluralForms: { nominative: "-í", genitive: "-ích", dative: "-ím", accusative: "-í", vocative: "-í", locative: "-ích", instrumental: "-ími" }
  },
  {
    model: "dobré",
    partOfSpeech: "adjective",
    gender: "neuter",
    number: "singular",
    frequency: "very high",
    examples: "bílé, blízké, bývalé, celé, černé, červené, české, čisté, dlouhé, dobré, důležité, evropské, jasné, jednoduché, jiné, jisté, krátké, malé, minulé, mladé, možné, německé, nízké, nové, nutné, otevřené, plné, podobné, pravé, pražské, různé, rychlé, silné, široké, skutečné, špatné, staré, šťastné, stejné, těžké, velké, vysoké, zajímavé, zelené",
    singularForms: { nominative: "-é", genitive: "-ého", dative: "-ému", accusative: "-é", vocative: "-é", locative: "-é", instrumental: "-ým" },
    pluralForms: { nominative: "-á", genitive: "-ých", dative: "-ým", accusative: "-á", vocative: "-á", locative: "-ých", instrumental: "-ými" }
  },
  {
    model: "moderní (n)",
    partOfSpeech: "adjective",
    gender: "neuter",
    number: "singular",
    frequency: "high",
    examples: "budoucí, cizí, další, dnešní...",
    singularForms: { nominative: "-í", genitive: "-ího", dative: "-ímu", accusative: "-í", vocative: "-í", locative: "-ím", instrumental: "-ím" },
    pluralForms: { nominative: "-í", genitive: "-ích", dative: "-ím", accusative: "-í", vocative: "-í", locative: "-ích", instrumental: "-ími" }
  },
  {
    model: "moderní (f)",
    partOfSpeech: "adjective",
    gender: "feminine",
    number: "singular",
    frequency: "high",
    examples: "budoucí, cizí, další, dnešní...",
    singularForms: { nominative: "-í", genitive: "-í", dative: "-í", accusative: "-í", vocative: "-í", locative: "-í", instrumental: "-í" },
    pluralForms: { nominative: "-í", genitive: "-ích", dative: "-ím", accusative: "-í", vocative: "-í", locative: "-ích", instrumental: "-ími" }
  },
  {
    model: "moderní (mi)",
    partOfSpeech: "adjective",
    gender: "masculine inanimate",
    number: "singular",
    frequency: "high",
    examples: "budoucí, cizí, další, dnešní...",
    singularForms: { nominative: "-í", genitive: "-ího", dative: "-ímu", accusative: "-í", vocative: "-í", locative: "-ím", instrumental: "-ím" },
    pluralForms: { nominative: "-í", genitive: "-ích", dative: "-ím", accusative: "-í", vocative: "-í", locative: "-ích", instrumental: "-ími" }
  },
  {
    model: "Petrův (ma)",
    partOfSpeech: "adjective",
    gender: "masculine animate",
    number: "singular",
    frequency: "medium",
    examples: "",
    notes: "Possessive adjective.",
    singularForms: { nominative: "-ův", genitive: "-ova", dative: "-ovu", accusative: "-ova", vocative: "-ův", locative: "-ovu", instrumental: "-ovým" },
    pluralForms: { nominative: "-ovi", genitive: "-ových", dative: "-ovým", accusative: "-ovy", vocative: "-ovi", locative: "-ových", instrumental: "-ovými" }
  },
  {
    model: "Petrův (mi)",
    partOfSpeech: "adjective",
    gender: "masculine inanimate",
    number: "singular",
    frequency: "medium",
    examples: "",
    notes: "Possessive adjective.",
    singularForms: { nominative: "-ův", genitive: "-ova", dative: "-ovu", accusative: "-ův", vocative: "-ův", locative: "-ově", instrumental: "-ovým" },
    pluralForms: { nominative: "-ovy", genitive: "-ových", dative: "-ovým", accusative: "-ovy", vocative: "-ovy", locative: "-ových", instrumental: "-ovými" }
  },
  {
    model: "Petrova",
    partOfSpeech: "adjective",
    gender: "feminine",
    number: "singular",
    frequency: "medium",
    examples: "",
    notes: "Possessive adjective.",
    singularForms: { nominative: "-ova", genitive: "-ovy", dative: "-ově", accusative: "-ovu", vocative: "-ova", locative: "-ově", instrumental: "-ovou" },
    pluralForms: { nominative: "-ovy", genitive: "-ových", dative: "-ým", accusative: "-ovy", vocative: "-ovy", locative: "-ových", instrumental: "-ovými" }
  },
  {
    model: "Petrovo",
    partOfSpeech: "adjective",
    gender: "neuter",
    number: "singular",
    frequency: "medium",
    examples: "",
    notes: "Possessive adjective.",
    singularForms: { nominative: "-ovo", genitive: "-ova", dative: "-ovu", accusative: "-ovo", vocative: "-ovo", locative: "-ově", instrumental: "-ovým" },
    pluralForms: { nominative: "-ova", genitive: "-ových", dative: "-ovým", accusative: "-ova", vocative: "-ova", locative: "-ových", instrumental: "-ovými" }
  },
  {
    model: "on",
    partOfSpeech: "pronoun",
    gender: "masculine",
    number: "singular",
    frequency: "high",
    examples: "",
    singularForms: { nominative: "on", genitive: "ho", dative: "mu", accusative: "ho", vocative: "n/a", locative: "něm", instrumental: "jím" },
    pluralForms: emptyForms
  },
  {
    model: "ona",
    partOfSpeech: "pronoun",
    gender: "feminine",
    number: "singular",
    frequency: "high",
    examples: "",
    singularForms: { nominative: "ona", genitive: "jí", dative: "jí", accusative: "ji", vocative: "n/a", locative: "ní", instrumental: "jí" },
    pluralForms: emptyForms
  },
  {
    model: "my",
    partOfSpeech: "pronoun",
    gender: "n/a",
    number: "plural",
    frequency: "high",
    examples: "",
    singularForms: emptyForms,
    pluralForms: { nominative: "my", genitive: "nás", dative: "nám", accusative: "nás", vocative: "n/a", locative: "nás", instrumental: "námi" }
  },
  {
    model: "ono",
    partOfSpeech: "pronoun",
    gender: "neuter",
    number: "singular",
    frequency: "high",
    examples: "",
    singularForms: { nominative: "ono", genitive: "ho", dative: "mu", accusative: "ho", vocative: "n/a", locative: "něm", instrumental: "jím" },
    pluralForms: emptyForms
  },
  {
    model: "vy",
    partOfSpeech: "pronoun",
    gender: "n/a",
    number: "plural",
    frequency: "high",
    examples: "",
    singularForms: emptyForms,
    pluralForms: { nominative: "vy", genitive: "vás", dative: "vám", accusative: "vás", vocative: "vy", locative: "vás", instrumental: "vámi" }
  },
  {
    model: "oni",
    partOfSpeech: "pronoun",
    gender: "masculine",
    number: "plural",
    frequency: "high",
    examples: "",
    singularForms: emptyForms,
    pluralForms: { nominative: "oni", genitive: "jich", dative: "jim", accusative: "je", vocative: "n/a", locative: "nich", instrumental: "jimi" }
  },
  {
    model: "můj (ma)",
    partOfSpeech: "pronoun",
    gender: "masculine animate",
    number: "singular",
    frequency: "high",
    examples: "",
    notes: "1st Singular Possessive",
    singularForms: { nominative: "můj", genitive: "mého", dative: "mému", accusative: "mého", vocative: "n/a", locative: "mém", instrumental: "mým" },
    pluralForms: { nominative: "moji/mí", genitive: "mých", dative: "mým", accusative: "moje", vocative: "moji", locative: "mých", instrumental: "mými" }
  },
  {
    model: "můj (f)",
    partOfSpeech: "pronoun",
    gender: "feminine",
    number: "singular",
    frequency: "high",
    examples: "",
    singularForms: { nominative: "moje", genitive: "mojí", dative: "mojí", accusative: "moji", vocative: "n/a", locative: "mé", instrumental: "mou" },
    pluralForms: emptyForms
  },
  {
    model: "můj (n)",
    partOfSpeech: "pronoun",
    gender: "neuter",
    number: "singular",
    frequency: "high",
    examples: "",
    singularForms: { nominative: "moje", genitive: "mého", dative: "mému", accusative: "mé", vocative: "n/a", locative: "mém", instrumental: "mým" },
    pluralForms: emptyForms
  },
  {
    model: "tvůj (ma)",
    partOfSpeech: "pronoun",
    gender: "masculine animate",
    number: "singular",
    frequency: "high",
    examples: "",
    notes: "2nd Singular Possessive",
    singularForms: { nominative: "tvůj", genitive: "tvého", dative: "tvému", accusative: "tvého", vocative: "n/a", locative: "tvém", instrumental: "tvým" },
    pluralForms: emptyForms
  },
  {
    model: "jeho",
    partOfSpeech: "pronoun",
    gender: "all",
    number: "singular",
    frequency: "high",
    examples: "",
    notes: "3rd Singular Possessive (indec.)",
    singularForms: { nominative: "jeho", genitive: "jeho", dative: "jeho", accusative: "jeho", vocative: "n/a", locative: "jeho", instrumental: "jeho" },
    pluralForms: emptyForms
  },
  {
    model: "jejich",
    partOfSpeech: "pronoun",
    gender: "all",
    number: "plural",
    frequency: "high",
    examples: "",
    notes: "3rd Plural Possessive (indec.)",
    singularForms: { nominative: "jejich", genitive: "jejich", dative: "jejich", accusative: "jejich", vocative: "n/a", locative: "jejich", instrumental: "jejich" },
    pluralForms: emptyForms
  },
  {
    model: "její",
    partOfSpeech: "pronoun",
    gender: "all",
    number: "singular",
    frequency: "high",
    examples: "",
    notes: "3rd Singular Possessive (indec.)",
    singularForms: { nominative: "její", genitive: "její", dative: "její", accusative: "její", vocative: "n/a", locative: "její", instrumental: "její" },
    pluralForms: emptyForms
  },
  {
    model: "náš (ma)",
    partOfSpeech: "pronoun",
    gender: "masculine animate",
    number: "singular",
    frequency: "high",
    examples: "",
    notes: "1st Plural Possessive",
    singularForms: { nominative: "náš", genitive: "našeho", dative: "našemu", accusative: "našeho", vocative: "n/a", locative: "našem", instrumental: "naším" },
    pluralForms: emptyForms
  },
  {
    model: "váš (ma)",
    partOfSpeech: "pronoun",
    gender: "masculine animate",
    number: "singular",
    frequency: "high",
    examples: "",
    notes: "2nd Plural Possessive",
    singularForms: { nominative: "váš", genitive: "vašeho", dative: "vašemu", accusative: "vašeho", vocative: "n/a", locative: "vašem", instrumental: "vaším" },
    pluralForms: emptyForms
  },
  {
    model: "Janin (ma)",
    partOfSpeech: "adjective",
    gender: "masculine animate",
    number: "singular",
    frequency: "medium",
    examples: "",
    notes: "Possessive adjective",
    singularForms: { nominative: "-in", genitive: "-ina", dative: "-inu", accusative: "-ina", vocative: "-in", locative: "-ině", instrumental: "-iným" },
    pluralForms: { nominative: "-ini", genitive: "-iných", dative: "-iným", accusative: "-iny", vocative: "-ini", locative: "-iných", instrumental: "-inými" }
  },
  {
    model: "ten",
    partOfSpeech: "pronoun",
    gender: "masculine animate",
    number: "singular",
    frequency: "high",
    examples: "",
    notes: "Demonstrative",
    singularForms: { nominative: "ten", genitive: "toho", dative: "tomu", accusative: "toho", vocative: "n/a", locative: "tom", instrumental: "tím" },
    pluralForms: { nominative: "ti", genitive: "těch", dative: "těm", accusative: "ty", vocative: "-", locative: "těch", instrumental: "těmi" }
  },
  {
    model: "ta",
    partOfSpeech: "pronoun",
    gender: "feminine",
    number: "singular",
    frequency: "high",
    examples: "",
    notes: "Demonstrative",
    singularForms: { nominative: "ta", genitive: "té", dative: "té", accusative: "tu", vocative: "n/a", locative: "té", instrumental: "tou" },
    pluralForms: { nominative: "ty", genitive: "těch", dative: "těm", accusative: "ty", vocative: "-", locative: "těch", instrumental: "těmi" }
  },
  {
    model: "to",
    partOfSpeech: "pronoun",
    gender: "neuter",
    number: "singular",
    frequency: "high",
    examples: "",
    notes: "Demonstrative",
    singularForms: { nominative: "to", genitive: "toho", dative: "tomu", accusative: "to", vocative: "n/a", locative: "tom", instrumental: "tím" },
    pluralForms: { nominative: "ta", genitive: "těch", dative: "těm", accusative: "ta", vocative: "-", locative: "těch", instrumental: "těmi" }
  },
  {
    model: "co",
    partOfSpeech: "pronoun",
    gender: "n/a",
    number: "singular",
    frequency: "medium",
    examples: "",
    notes: "Question",
    singularForms: { nominative: "co", genitive: "čeho", dative: "čemu", accusative: "co", vocative: "čí", locative: "čem", instrumental: "čím" },
    pluralForms: emptyForms
  },
  {
    model: "čí (ma)",
    partOfSpeech: "pronoun",
    gender: "masculine animate",
    number: "singular",
    frequency: "medium",
    examples: "",
    notes: "Question",
    singularForms: { nominative: "čí", genitive: "čího", dative: "čímu", accusative: "čího", vocative: "čí", locative: "čím", instrumental: "čím" },
    pluralForms: emptyForms
  },
  {
    model: "který (ma)",
    partOfSpeech: "pronoun",
    gender: "masculine animate",
    number: "singular",
    frequency: "very high",
    examples: "",
    notes: "Question/Relative",
    singularForms: { nominative: "-ý", genitive: "-ého", dative: "-ému", accusative: "-ého", vocative: "-ý", locative: "-ém", instrumental: "-ým" },
    pluralForms: { nominative: "-í", genitive: "-ých", dative: "-ým", accusative: "-é", vocative: "-í", locative: "-ých", instrumental: "-ými" }
  },
  {
    model: "všechno",
    partOfSpeech: "pronoun",
    gender: "neuter",
    number: "singular",
    frequency: "high",
    examples: "",
    notes: "Indeterminate",
    singularForms: { nominative: "všechno", genitive: "všeho", dative: "všemu", accusative: "všechno", vocative: "všechno", locative: "všem", instrumental: "vším" },
    pluralForms: emptyForms
  },
  {
    model: "nic",
    partOfSpeech: "pronoun",
    gender: "neuter",
    number: "singular",
    frequency: "high",
    examples: "",
    notes: "Indeterminate",
    singularForms: { nominative: "nic", genitive: "ničeho", dative: "ničemu", accusative: "nic", vocative: "nic", locative: "ničem", instrumental: "ničím" },
    pluralForms: emptyForms
  },
  {
    model: "všechen",
    partOfSpeech: "pronoun",
    gender: "masculine inanimate",
    number: "singular",
    frequency: "high",
    examples: "",
    notes: "Indeterminate",
    singularForms: { nominative: "všechen", genitive: "všeho", dative: "všemu", accusative: "všechen", vocative: "všechen", locative: "všem", instrumental: "vším" },
    pluralForms: emptyForms
  },
  {
    model: "dvě",
    partOfSpeech: "numeral",
    gender: "feminine",
    number: "singular",
    frequency: "high",
    examples: "",
    singularForms: emptyForms,
    pluralForms: { nominative: "-ě", genitive: "-ou", dative: "-ěma", accusative: "-ě", vocative: "-ě", locative: "-ou", instrumental: "-ěma" }
  },
  {
    model: "milión",
    partOfSpeech: "numeral",
    gender: "masculine",
    number: "singular",
    frequency: "high",
    examples: "",
    singularForms: { nominative: "-Ø", genitive: "-u", dative: "-u", accusative: "-Ø", vocative: "-Ø", locative: "-u", instrumental: "-em" },
    pluralForms: { nominative: "milióny", genitive: "miliónů", dative: "miliónům", accusative: "milióny", vocative: "milióny", locative: "miliónech", instrumental: "milióny" }
  },
  {
    model: "tisíc",
    partOfSpeech: "numeral",
    gender: "masculine",
    number: "singular",
    frequency: "high",
    examples: "",
    singularForms: { nominative: "-Ø", genitive: "-e", dative: "-i", accusative: "-Ø", vocative: "-Ø", locative: "-i", instrumental: "-em" },
    pluralForms: { nominative: "tisíce", genitive: "tisíců", dative: "tisícům", accusative: "tisíce", vocative: "tisíce", locative: "tisících", instrumental: "tisíci" }
  },
  {
    model: "sto",
    partOfSpeech: "numeral",
    gender: "neuter",
    number: "singular",
    frequency: "high",
    examples: "",
    singularForms: { nominative: "-o", genitive: "-a", dative: "-u", accusative: "-o", vocative: "-o", locative: "-u", instrumental: "-em" },
    pluralForms: { nominative: "sta", genitive: "set", dative: "stům", accusative: "sta", vocative: "sta", locative: "stech", instrumental: "sty" }
  },
  {
    model: "tři",
    partOfSpeech: "numeral",
    gender: "all",
    number: "singular",
    frequency: "high",
    examples: "",
    singularForms: emptyForms,
    pluralForms: { nominative: "-i", genitive: "-í", dative: "-ema", accusative: "-i", vocative: "-i", locative: "-ech", instrumental: "-ema" }
  },
  {
    model: "pět",
    partOfSpeech: "numeral",
    gender: "all",
    number: "singular",
    frequency: "high",
    examples: "",
    singularForms: emptyForms,
    pluralForms: { nominative: "-Ø", genitive: "-i", dative: "-i", accusative: "-Ø", vocative: "-Ø", locative: "-i", instrumental: "-i" }
  },
  {
    model: "dva",
    partOfSpeech: "numeral",
    gender: "masculine",
    number: "singular",
    frequency: "high",
    examples: "",
    singularForms: emptyForms,
    pluralForms: { nominative: "-a", genitive: "-ou", dative: "-ěma", accusative: "-a", vocative: "-a", locative: "-ou", instrumental: "-ěma" }
  },
  {
    model: "nula",
    partOfSpeech: "numeral",
    gender: "feminine",
    number: "singular",
    frequency: "medium",
    examples: "",
    singularForms: { nominative: "-a", genitive: "-y", dative: "-e", accusative: "-u", vocative: "-o", locative: "-e", instrumental: "-ou" },
    pluralForms: { nominative: "nuly", genitive: "nul", dative: "nulám", accusative: "nuly", vocative: "nuly", locative: "nulách", instrumental: "nulami" }
  },
  {
    model: "kolik",
    partOfSpeech: "numeral",
    gender: "all",
    number: "plural",
    frequency: "high",
    examples: "",
    notes: "Question",
    singularForms: emptyForms,
    pluralForms: { nominative: "-Ø", genitive: "-a", dative: "-a", accusative: "-Ø", vocative: "-Ø", locative: "-a", instrumental: "-a" }
  },
  {
    model: "jedny (f)",
    partOfSpeech: "numeral",
    gender: "feminine",
    number: "plural",
    frequency: "medium",
    examples: "",
    notes: "Collective",
    singularForms: emptyForms,
    pluralForms: { nominative: "-y", genitive: "-ěch", dative: "-ěm", accusative: "-y", vocative: "-y", locative: "-ěch", instrumental: "-emi" }
  },
  {
    model: "první (ma)",
    partOfSpeech: "numeral",
    gender: "masculine animate",
    number: "singular",
    frequency: "medium",
    examples: "třetí, dvacátý první",
    notes: "Ordinal. Behave like soft adjectives.",
    singularForms: { nominative: "-í", genitive: "-ího", dative: "-ímu", accusative: "-ího", vocative: "-í", locative: "-ím", instrumental: "-ím" },
    pluralForms: { nominative: "-í", genitive: "-ích", dative: "-ím", accusative: "-í", vocative: "-í", locative: "-ích", instrumental: "-ími" }
  },
  {
    model: "druhý (ma)",
    partOfSpeech: "numeral",
    gender: "masculine animate",
    number: "singular",
    frequency: "medium",
    examples: "",
    notes: "Ordinal. Behaves like hard adjective.",
    singularForms: { nominative: "-ý", genitive: "-ého", dative: "-ému", accusative: "-ého", vocative: "-ý", locative: "-ém", instrumental: "-ým" },
    pluralForms: { nominative: "-í", genitive: "-ých", dative: "-ým", accusative: "-é", vocative: "-í", locative: "-ých", instrumental: "-ými" }
  },
  {
    model: "ulice",
    partOfSpeech: "noun",
    gender: "feminine",
    number: "singular",
    frequency: "very low",
    examples: "stanice, lžíce, chvíle, míle",
    singularForms: { nominative: "-e", genitive: "-e", dative: "-i", accusative: "-i", vocative: "-e", locative: "-i", instrumental: "-í" },
    pluralForms: { nominative: "-e", genitive: "-ic", dative: "-ím", accusative: "-e", vocative: "-e", locative: "-ích", instrumental: "-emi" }
  },
  {
    model: "rohlík",
    partOfSpeech: "noun",
    gender: "masculine inanimate",
    number: "singular",
    frequency: "low",
    examples: "",
    notes: "Submodel of telefon",
    singularForms: { nominative: "-Ø", genitive: "-u", dative: "-u", accusative: "-Ø", vocative: "-u", locative: "-u", instrumental: "-em" },
    pluralForms: { nominative: "-y", genitive: "-ů", dative: "-ům", accusative: "-y", vocative: "-y", locative: "-ách", instrumental: "-y" }
  }
];
