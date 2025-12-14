
import { CultureCategory } from './types';

export const factsData: CultureCategory = {
  id: "facts",
  title: "Facts & Politics",
  description: "Essential data on history, geography, and the current political landscape.",
  icon: "Info",
  color: "bg-blue-50 text-blue-700",
  sections: [
    {
      title: "Czech Republic Quick Facts",
      type: "key-value",
      content: [
        { key: "Name", value: "Czech Republic (Česká republika)" },
        { key: "Regions", value: "Bohemia (Čechy), Moravia" },
        { key: "Area", value: "78,864 sq km (30,450 sq miles)" },
        { key: "Bordering countries", value: "Austria, Germany, Poland, Slovakia" },
        { key: "Capital", value: "Praha (Prague) – 1,214,000 inhabitants" },
        { key: "Major Cities", value: "Brno – 388,000; Ostrava – 327,000; Plzeň – 173,000" }
      ]
    },
    {
      title: "Basic Czech Geography",
      type: "text",
      content: [
        "The Czech Republic is situated approximately in the geographical center of Europe and has an area of 78,866 sq. km. It is a landlocked country 326 km from the Baltic and 322 km from the Adriatic see. It shares borders with Germany (810 km), Poland (762 km), Austria (466 km) and Slovakia (265 km). The highest point of elevation is the peak of Mt. Sněžka (1,602 m above sea level) and the lowest point of elevation is near Holensko where the River Labe leaves Czech territory (117 m above sea level).",
        "Czech Republic is divided into Bohemia (Čechy) and Moravia (Morava). The language and culture are similar, although some parts of Moravia are known for their specific accent. The Moravian culture is generally more friendly and laid back than that of the people in Bohemia. Moravia is also predominantly wine drinking while most beer is produced and drunk in Bohemia.",
        "The capital of Bohemia is Prague (Praha) and the capital of Moravia is Brno, although it has no special administrative status.",
        "Administratively Czech Republic is divided into regions (kraj) which in turn consist of counties (okres), each with an administrative center. The structure and powers of local government as well as the geographic layout of regions and counties is a topic of much political debate."
      ]
    },
    {
      title: "Czech Politics: Quick Facts (2025 Context)",
      type: "key-value",
      content: [
        { key: "Government Type", value: "Parliamentary representative democracy" },
        { key: "Head of State (President)", value: "Petr Pavel (Independent)" },
        { key: "Head of Government (PM)", value: "Andrej Babiš (ANO) – Designated/Incoming" },
        { key: "Dominant Party", value: "ANO (Action of Dissatisfied Citizens)" },
        { key: "Main Opposition", value: "SPOLU Coalition, Pirates, STAN" }
      ]
    },
    {
      title: "Evolution of the Political Landscape",
      type: "biography",
      content: [
        { name: "1. The Era of Stability (1993–2010)", desc: "This period was defined by a classic binary struggle between the Right (ODS) and the Left (ČSSD). While smaller parties existed, these two titans dominated the landscape.<br><strong>Key Dynamic:</strong> The 'Opposition Agreement' (1998–2002), a power-sharing deal between ODS and ČSSD that brought stability but bred deep cynicism about corruption." },
        { name: "2. The Earthquake (2010–2013)", desc: "Voter fatigue with corruption scandals led to the collapse of the traditional right-wing government. New, smaller protest parties (like Public Affairs) entered parliament but quickly disintegrated, creating a power vacuum." },
        { name: "3. The Corporate Turn & Rise of Babiš (2013–2021)", desc: "Billionaire Andrej Babiš entered politics with his ANO movement, promising to 'run the state like a firm.' Originally a centrist protest movement, ANO gradually shifted to populism, absorbing the electorates of the traditional left (Social Democrats and Communists)." },
        { name: "4. The 'Anti-Babiš' Coalition Era (2021–2025)", desc: "Fractured democratic parties realized they could not win alone. They formed two large blocs—SPOLU (Conservatives) and Pirates+STAN (Liberals)—to narrowly defeat Babiš in 2021. This era focused on restoring ties with the EU/NATO and fiscal consolidation." },
        { name: "5. The Populist Consolidation (2025–Present)", desc: "In the 2025 elections, economic dissatisfaction brought ANO back to power with a decisive victory. The landscape is now characterized by a dominant populist conservative force (ANO) facing a fragmented liberal/conservative opposition, with new niche protest parties (Motorists) entering the fray." }
      ]
    },
    {
      title: "Political Parties: Current Power Players (2025)",
      type: "biography",
      content: [
        { name: "ANO (Action of Dissatisfied Citizens)", desc: "<strong>Identity:</strong> Catch-all populist / Conservative.<br><strong>Role:</strong> Started as an anti-corruption protest movement; evolved into the dominant force for pensioners, the working class, and rural voters.<br><strong>Status:</strong> The strongest party in the country, currently forming the new government." },
        { name: "SPOLU (Coalition of ODS, KDU-ČSL, TOP 09)", desc: "<strong>Identity:</strong> Centre-Right / Conservative / Pro-Western.<br><strong>Role:</strong> The traditional right-wing bloc. ODS is the fiscal conservative anchor; KDU-ČSL represents rural Christians; TOP 09 appeals to urban intellectuals.<br><strong>Status:</strong> The main opposition force." },
        { name: "STAN (Mayors and Independents)", desc: "<strong>Identity:</strong> Centrist / Liberal / Localism.<br><strong>Role:</strong> A movement rooted in successful municipal leadership. They are generally pro-EU and pragmatic, focusing on regional development.<br><strong>Status:</strong> A stable opposition party with strong regional support." },
        { name: "Pirates (Czech Pirate Party)", desc: "<strong>Identity:</strong> Progressive / Liberal / Digital.<br><strong>Role:</strong> Focus on transparency, digitization, and human rights. They appeal to younger, urban voters.<br><strong>Status:</strong> Survivors. After a near-wipeout in 2021 due to coalition tactical voting, they recovered in 2025 to become a distinct liberal opposition voice." },
        { name: "SPD (Freedom and Direct Democracy)", desc: "<strong>Identity:</strong> Far-Right / Nativist.<br><strong>Role:</strong> The primary anti-immigration and anti-EU voice.<br><strong>Status:</strong> A parliamentary fixture, now acting as a potential partner or pressure group for the ANO government." },
        { name: "Motorists (AUTO)", desc: "<strong>Identity:</strong> Single-issue / Right-wing Populist.<br><strong>Role:</strong> A new protest party specifically defending internal combustion engines against the EU Green Deal.<br><strong>Status:</strong> The newest entrant to parliament (2025)." }
      ]
    },
    {
      title: "The Fallen Giants (Historical)",
      type: "biography",
      content: [
        { name: "ČSSD / SOCDEM (Social Democrats)", desc: "<strong>Role:</strong> The dominant party of the Left for 25 years. They built the welfare state and produced three Prime Ministers.<br><strong>Fate:</strong> Completely cannibalized by ANO. They failed to adapt to modern politics and fell out of parliament in 2021 and again in 2025." },
        { name: "KSČM (Communist Party)", desc: "<strong>Role:</strong> Successor to the totalitarian regime. For decades, they maintained a disciplined 10–15% protest vote, isolated from power but present.<br><strong>Fate:</strong> Irrelevant. Their aging voter base died out or switched to the more viable populism of ANO and SPD. They lost parliamentary representation in 2021." },
        { name: "ODA / US-DEU (Civic Democratic Alliance / Freedom Union)", desc: "<strong>Role:</strong> The intellectual, right-wing conscience of the 1990s. They provided policy experts and coalition partners for ODS.<br><strong>Fate:</strong> Extinct. Destroyed by internal infighting and financial scandals in the late 90s and early 2000s." }
      ]
    },
    {
      title: "Presidents of the Czech Republic",
      type: "biography",
      content: [
        { name: "Václav Havel (1993–2003)", desc: "<strong>Independent/Civic Forum.</strong> The dissident playwright and first president of the new republic." },
        { name: "Václav Klaus (2003–2013)", desc: "<strong>ODS.</strong> The architect of economic transformation; known for Euroscepticism." },
        { name: "Miloš Zeman (2013–2023)", desc: "<strong>SPO/ČSSD.</strong> The first directly elected president; populist and polarizing." },
        { name: "Petr Pavel (2023–Present)", desc: "<strong>Independent.</strong> Retired Army General and former Chair of the NATO Military Committee." }
      ]
    },
    {
      title: "Prime Ministers (Since 1993)",
      type: "timeline",
      content: [
        { time: "1993–1997", czech: "Václav Klaus (ODS)" },
        { time: "1997–1998", czech: "Josef Tošovský (Ind.) - Caretaker" },
        { time: "1998–2002", czech: "Miloš Zeman (ČSSD)" },
        { time: "2002–2004", czech: "Vladimír Špidla (ČSSD)" },
        { time: "2004–2005", czech: "Stanislav Gross (ČSSD)" },
        { time: "2005–2006", czech: "Jiří Paroubek (ČSSD)" },
        { time: "2006–2009", czech: "Mirek Topolánek (ODS)" },
        { time: "2009–2010", czech: "Jan Fischer (Ind.) - Caretaker" },
        { time: "2010–2013", czech: "Petr Nečas (ODS)" },
        { time: "2013–2014", czech: "Jiří Rusnok (Ind.) - Caretaker" },
        { time: "2014–2017", czech: "Bohuslav Sobotka (ČSSD)" },
        { time: "2017–2021", czech: "Andrej Babiš (ANO)" },
        { time: "2021–2025", czech: "Petr Fiala (ODS/Spolu)" },
        { time: "2025–Present", czech: "Andrej Babiš (ANO) - Incoming" }
      ]
    },
    {
      title: "History: Century by Century",
      type: "timeline",
      content: [
        { time: "up to 1100s", czech: "Celts, Germanic Tribes, Slavic Tribes, The Great Moravia, Přemyslids, introduction of literacy (Cyril and Methodius), introduction of (western) Christianty", world: "Tribes moving around, spread of Christianity over Europe" },
        { time: "1200", czech: "Czech kingdom-Czech rulers obtain hereditary right to the title King, Přemysl Otokar II. Czech king controlling large parts of Central Europe", world: "Wars, famines, crusades" },
        { time: "1300", czech: "Charles IV., Charles University founded, Bible translated into Czech", world: "Renaissance starting, 100-year war, Chaucer" },
        { time: "1400", czech: "Burning of Jan Hus, 1st defenestration, Hussite wars, Jiří z Poděbrad’s peace mission", world: "Joan of Arc, America discovered, invention of printing press" },
        { time: "1500", czech: "Polish and Hapsburg rulers, arts and sciences flourish, new translation of Bible sets standard for Czech language", world: "America being explored, Luther" },
        { time: "1600", czech: "Comenius, 2nd defenestration, big execution, exile, begining of thirty-year war, exile of Czech nobles, germanization", world: "Shakespeare, revolutions, 30-year war" },
        { time: "1700", czech: "Under the Hapsburgs, baroque and rather dull times", world: "French revolution, rise of Napoleon, USA gains independence" },
        { time: "1800", czech: "Fighting for more independence, national revival, toying with the idea of panslavism, still under the Hapsburgs, National Theater built (twice)", world: "Fall of Napoleon, more wars and crystalization of modern nations" },
        { time: "1900", czech: "New republic together with Slovakia, split with Slovakia, WWII, communism, fall of communism, split from Slovakia", world: "WWI & II, Cold War, crises and conflicts" }
      ]
    },
    {
      title: "History: 20th Century",
      type: "timeline",
      content: [
        { time: "1918 – 1938", czech: "So-called First Republic, time of economic prosperity and democracy", world: "recovering from WWI" },
        { time: "1938", czech: "Losing Sudetenland, Slovakia separated", world: "gathering clouds, Austria Annexed by Germany" },
        { time: "1939", czech: "Protectorate starts: annexed by Germany results: closed University", world: "Preparing for showdown: non-aggression pact between Russia and Germany, Germany attacks Poland, Brittain and France declare war" },
        { time: "1945", czech: "Prague insurgence (Pražské povstání), end of war, repatriation of Germans from Sudeten Land", world: "Berlin falls, atomic bomb used in Hiroshima and Nagasaki" },
        { time: "1948", czech: "Communists take over government (having won elections in 1946)", world: "State of Israel proclaimed, Marshall Plan begins" },
        { time: "1950s", czech: "Hard core communism", world: "McCarthism in USA, Stalin’s death, Korean War" },
        { time: "1968", czech: "Following a liberal trend of the 60s so-called Prague spring ends in an invasion by allied forces", world: "Martin Luther King killed, Vietnam war peaks (10.000th plane shot down), R. Kennedy shot" },
        { time: "1970s", czech: "“Normalization”, Charter 77", world: "Man on Moon, oil shock, end of Vietnam war, war in Cambodia" },
        { time: "1989", czech: "“Velvet” Revolution", world: "Communism not doing well world wide: fall in Romania, E. Germany, Hungary, Bulgaria and Poland, George Bush becomes president" },
        { time: "1993", czech: "Split with Slovakia", world: "Bill Clinton becomes president" }
      ]
    },
    {
      title: "Czech Republic on the Internet (Historical Reference)",
      type: "key-value",
      content: [
         { key: "Country Domain", value: ".cz" },
         { key: "Search Engines", value: "seznam.cz, atlas.cz" },
         { key: "Useful Info", value: "czech.cz (Ministry), czechinvest.cz, cdrail.cz (Rail), mapy.cz (Maps), cuni.cz (Charles Uni)" }
      ]
    }
  ]
};
