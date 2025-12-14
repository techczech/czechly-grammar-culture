
import { CultureCategory } from './types';

export const prideData: CultureCategory = {
  id: "prides",
  title: "Prides",
  description: "Famous figures, historical legends, inventions, and the pillars of Czech identity.",
  icon: "Feather",
  color: "bg-red-50 text-red-700",
  sections: [
    {
      title: "Social Introduction to Czech History and Culture",
      type: "text",
      content: [
        "There’s more to language than grammar. You also have to have something to talk about. What people of different cultures talk about varies quite a bit. Communication with foreigners is around yet another set of topics. A foreigner is much more likely to be engaged in conversation on national identity, successes and failures of the nation etc. A foreigner wanting to enter successful relationship with the local will have to be able to not only display at least rudimentary knowledge of the facts in question but also to compare the local situation with that of his or her home country.",
        "The purpose of this introduction is not to give a comprehensive overview of Czech history but rather provide good conversation topics for chatting with Czechs. Like any peoples, Czechs are proud of their history and culture and displaying such knowledge will win you many friends."
      ]
    },
    {
      title: "3 Words the Czech Lands Gave the World",
      type: "key-value",
      content: [
        { key: "robot", value: "First coined by a Czech novelist, Karel Čapek in his play R.U.R. Derived from Czech word robota meaning forced labor." },
        { key: "pistol", value: "From Czech word píšťala flute, a name of a deadly canon-like weapon used by the Hussite fighters in the 15th century." },
        { key: "dollar", value: "Adopted from German (Tahler) name of coins produced from the silver mines of Jáchymov." }
      ]
    },
    {
      title: "Top 10 Figures of Czech History",
      type: "biography",
      content: [
        { name: "Svatý Václav (St. Wenceslas – 900s)", desc: "Patron of the Czech lands. Peace-loving king opposing war with the Germans, killed by his brother Boleslav. according to legend he and his soldiers lie under the mountain Blaník and will rise to help the Czech nation in the gravest hour of need." },
        { name: "Karel IV. (Charles IV.) (1316 – 1378)", desc: "Holy Roman emperor (1355–78) and founder of Charles University (1348). Under his rule, Czech lands were the political and cultural center of Europe." },
        { name: "Jan Hus (1372 - 1415)", desc: "Reform preacher and linguist, author of modern Czech spelling. Burned at stake for heresy. Inspired the Hussite movement." },
        { name: "Jan Žižka (d. 1424)", desc: "Successful military leader of the Hussite forces. Under him, Czech rebels defeated crusaders sent by the Roman emperor. Famous for directing battles even being blind." },
        { name: "Jan Ámos Komenský (Comenius) (1592–1670)", desc: "Famous educator and bishop of the Czech Brethren, sometimes nicknamed the ‘Teacher of the nations’. Wrote the first modern compendium of pedagogy. Was exiled during 30-Year War and worked on the educational systems of Sweden and Holland." },
        { name: "Antonín Dvořák (1841-1904)", desc: "World-famous composer. Spent several years in the United States, where he wrote his most famous symphony ‘From the New World’." },
        { name: "T. G. Masaryk (1850-1937)", desc: "Politician and philosopher. First president (1918-35) of the pre-war Czechoslovakia, founded at the end of World War I after the collapse of the Austro-Hungarian Empire." },
        { name: "Jaroslav Hašek (1883-1923)", desc: "Popular Czech writer and humorist, author of the ‘Good Soldier Švejk’, a book translated into over 20 languages." },
        { name: "Karel Čapek (1890-1938)", desc: "Leading novelist and playwright of the ‘First Republic’. Coined the word ‘robot’ in his play ‘R.U.R.’" },
        { name: "Václav Havel (b. 1936)", desc: "First president of Czechoslovakia after the fall of communism. Human rights fighter and playwright." },
        { name: "Jára Cimrman (1865-1898 – 1915-1927)", desc: "A fictious figure from the turn of the century, attributed with most famous inventions. Cimrman was created in the late 60s by a group of Czech actors who produce plays in his name. Gained enormous popularity on the scale of Monty Python in Great Britain." }
      ]
    },
    {
      title: "3 Famous Composers",
      type: "biography",
      content: [
        { name: "Bedřich Smetana (1828 – 1884)", desc: "Popular composer of last century. Like Beethoven composed some of his best works while completely deaf. His works include: Bartered Bride, Dalibor, The Kiss, My Country." },
        { name: "Antonín Dvořák (1841-1904)", desc: "Other works: Slavonic Dances, Sabat Mater, Rusalka." },
        { name: "Leoš Janáček (1854 – 1928)", desc: "Most famous Czech composer of this century. His operas include: Káťa Kabanová, Věc Makropulos, Liška Bystrouška." }
      ]
    },
    {
      title: "5 Important Writers",
      type: "biography",
      content: [
        { name: "Jaroslav Hašek (1883-1923)", desc: "Writer and journalist. Wrote satirical short stories. During WWI took part in the Russian Revolution. Creator of “Good Soldier Švejk” a popular satire from WWI translated into many over 20 languages including English." },
        { name: "Karel Čapek (1890-1938)", desc: "Writer, journalist and playwright. His 1928 sci-fi drama R.U.R. first used the word robot. His other works include War of the Newts, White Illness, The Macropulos Thing, Krakatit." },
        { name: "Bohumil Hrabal (1914-97)", desc: "Major works: I Served the King of England, Larks on a String, Closely Watched Trains, Too Loud a Solitude." },
        { name: "Josef Škvorecký (*1924)", desc: "Emigrated after 1968. Currently lives in Canada. Started and runs publishing firm 68’Publishers. Major works: The Cowards, Sins for Father Knox, Swell Season, Tank Platoon." },
        { name: "Milan Kundera (*1929)", desc: "Emigrated after 1968. Currently lives in France. Wrote his last novel in French. Major works: The Joke, Unbearable Lightness of Being, Laughable Loves, Immortality." }
      ]
    },
    {
      title: "Famous People Born in the Czech Republic",
      type: "biography",
      content: [
        { name: "Madeleine Albright", desc: "American Secretary of State born in Moravia" },
        { name: "Sigmund Freud", desc: "Austrian psychologist born in Prostějov" },
        { name: "Tom Stoppard", desc: "English dramatist born in Zlín" }
      ]
    },
    {
      title: "Czech Mythology",
      type: "text",
      content: [
        "Historical myths are often better known than facts. Here are three commonly-known myths which may serve as possible topics for conversation with Czech people.",
        "<strong>Praotec Čech (Forefather Czech)</strong>: Czech tribes led by the father Čech stopped their journey at the Říp mountain (about 50 km north of Prague). There he beheld the “land of milk and honey” and decided to settle. His brother Lech had separated from his tribe earlier and became the founder of the Polish nation.",
        "<strong>Přemysl and Libuše</strong>: Countess Libuše, Čech’s grand daughter, ruled the Czech people after the death of her father Krok. She was gifted with prophetic powers and foresaw the founding of Prague. She resided at Vyšehrad and in one of her prophetic moments declared: “I see a large city whose fame touches the stars.” She then sent builders into the woods where they found a man making a threshold (práh) which also gave a name to the new city.",
        "Once, when presiding over the court, she made a decision between two brothers. The one in whose disfavor she had decided, proclaimed: “Sorry are the men who let themselves be ruled by a woman!” Libuše became angry and promised the men a firm rule by a man. She sent a delegation to her secret lover Přemysl to call him to become the king of the Czechs. Přemysl was a farmer and the delegation led by Libuše’s horse found him plowing his fields. That’s why he is known as Přemysl Oráč (plower). Thus the Přemyslid dynasty ruling the Czech lands for over 300 years was founded.",
        "<strong>Šárka (Maiden War)</strong>: Some women, discontent with the rule of men, went away and founded a castle called Děvín, from where they fought men with great success. One of the maidens, Šárka, lured Ctirad and his men, who had slain many women, into a trap by pretending to have run away from the women’s castle. After Ctirad, having fallen in love at first sight, had celebrated this encounter and fallen asleep, women stole upon him and his men, who were overpowered and killed. Ctirad himself was executed at the wheel. Men, angered by Ctirad’s death stormed Děvín, the castle of the women fighters, and killed all women who resisted including Šárka."
      ]
    },
    {
      title: "Current Czech Celebrities",
      type: "key-value",
      content: [
        { key: "Fiction", value: "Anything by the following current authors: Ivan Klíma, Ludvík Vaculík, Milan Kundera, Josef Škvorecký, Bohumil Hrabal, Lukáš Tomin. Or by one of these pre-war writers: Karel Čapek, Jaroslav Hašek, Alois Jirásek" },
        { key: "Poetry", value: "Don’t miss the Nobel Prize winner Jaroslav Seifert. Some other notable poets are Vítězslav Nezval, Vladimír Holan, František Halas, Jan Holub and many others." },
        { key: "Non-Fiction", value: "Jan Patočka is the most prominent Czech philosopher of this century." },
        { key: "Classical Music-Opera", value: "Bedřich Smetana, Antonín Dvořák, Josef Suk, Leoš Janáček and Bohuslav Martinů. Another popular work is Christmas Mass by Jakub Ryba." },
        { key: "Folk", value: "Jaromír Nohavica, Karel Plíhal, Wabi Daněk, Jan Nedvěd, Jiří Dědeček" },
        { key: "Jazz", value: "Jiří Stivín, Emil Viklický, Jan Kratochvíl, Jana Koubková, Martin Svoboda. It is little known fact that Ian Hammer is Czech." },
        { key: "Rock/Pop", value: "Old: Olympic, Katapult, Karel Gott, Pražský Výběr, Hudba Praha, Laura a její tygři. New: Lucie, Wanastowy věci, Daniel Hůlka, Lucie Bílá, Bára Basiková, BUTY" },
        { key: "Movies", value: "Oscar films: Kolja, Closely Watched Trains. Older films available with English subtitles: Larks on a String, Vesničko má středisková, Limonádový Joe. Post-communist films: Obecná škola, Akumulátor I., Je třeba zabít Sekala, etc." },
        { key: "Musicals", value: "The original Czech works of the 90s are Dracula and Rusalka (musical inspired by Dvořák’s famous opera)." },
        { key: "Drama", value: "Divadlo Na Zábradlí, SEMAFOR, Divadlo Járy Cimrmana, Národní Divadlo, Stavovské Divadlo, Divadlo Labyrint. Playwrights: Václav Havel, Filip Topol, Karel Čapek" },
         { key: "Sports", value: "Ice-Hockey: Jaromír Jágr, Dominik Hašek; Football (soccer): Antonín Panenka, Jaroslav Chovanec; Athletics: Emil Zátopek, Jarmila Kratochvílová; Tennis: Ivan Lendl, Jana Novotná, Martina Navrátilová, Petr Korda" }
      ]
    },
    {
      title: "Czech Republic in Print",
      type: "biography",
      content: [
         { name: "Czechs and Balances: Nation’s Survival Kit by John Kuras", desc: "Witty and well-informed if somewhat insensitive account of Czech character from a historical perspective. Written by a British journalist living and writing in the Czech Republic."},
         { name: "Everything You Always Wanted to Know About Czech by Karen Kunes", desc: "Collection of short essays about the Czech language published in the Prague Post. Cannot be used as a textbook but has much interesting information."},
         { name: "Bridging the Gap by Grace Hammot and Anna Nováková", desc: "One of the first, if not the first, books on Czech culture and life from an expatriate perspective. It is out of print but well worth reading if you can find it."},
         { name: "For the Love of Prague by Gene Deitch", desc: "Written by an American cartoon film director who’s lived in the Czech Republic for forty years. Describes his personal relationships and impressions."},
         { name: "An Outline of Czech History by Petr Čornej", desc: "Brief, objective and fairly comprehensive booklet written by a leading Czech historian. Available also in other languages."},
         { name: "Coasts of Bohemia: A Czech History by Derek Sayer", desc: "Most recent original account of Czech history in English. Shows Czech history in the context of historical events. Title a variation on famous Shakespeare’s sentence mistakenly attributing a coast to Bohemia."},
         { name: "Czechoslovak Cookbook by Joža Břízová et al.", desc: "Title says it all. For those who like Czech food and wish to inflict it upon themselves."},
         { name: "Old Czech Legends by Alois Jirásek", desc: "Translation of a 19th century book of old Czech legends. Patently historically inaccurate but well known (if not actually read) by most Czechs."},
         { name: "Culture Shock: Czech Republic by Tim Nollen", desc: "Part of well-known series. Provides much useful and accurate information. Sometimes the account is a little too one sided."}
      ]
    }
  ]
};
