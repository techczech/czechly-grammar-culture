import { CultureCategory } from './types';

export const quizzesData: CultureCategory = {
  id: "quizzes",
  title: "Quizzes & Worksheets",
  description: "Test your knowledge about Czech history, culture, and values.",
  icon: "CheckSquare",
  color: "bg-yellow-50 text-yellow-700",
  sections: [
    {
      title: "Czech Culture and History Quiz Review",
      type: "quiz",
      content: [
         { q: "Which of these is not a distinct region of the Czech Republic?", options: ["Čechy / Bohemia", "Lužice / Lusatia", "Morava / Moravia", "Slezko / Silesia"], a: "Lužice / Lusatia" },
         { q: "What is the name of the oldest university in Central Europe?", options: ["Pražská Univerzita", "Karlova Univerzita", "Univerzita Komenského"], a: "Karlova Univerzita" },
         { q: "Which of these words did not originate in the Czech lands?", options: ["robot", "kindergarten", "pistol", "dollar"], a: "kindergarten" },
         { q: "Which one of these important people of Czech history was a fiction writer?", options: ["Čapek", "Dvořák", "Komenský", "Masaryk"], a: "Čapek" },
         { q: "What year was Czechoslovakia founded?", options: ["1948", "1968", "1938", "1918"], a: "1918" },
         { q: "What year was the “Velvet” Revolution?", options: ["1991", "1989", "1988", "1993"], a: "1989" },
         { q: "The first president of the Czech Republic was famous for …", options: ["writing satire", "writing absurd drama", "writing drama for TV"], a: "writing absurd drama" },
         { q: "Which of these men is the current Czech president?", options: ["Václav Klaus", "Miloš Zeman", "Andrej Babiš", "Petr Pavel", "Petr Fiala"], a: "Petr Pavel" },
         { q: "Which two of these famous people were born in the Czech lands?", options: ["Albert Einstein", "Madeleine Albright", "Sigmund Freud", "Andy Warhol"], a: ["Madeleine Albright", "Sigmund Freud"] },
         { q: "Which two of these famous Czech sports personalities are NOT tennis players?", options: ["Martina Navrátilová", "Ivan Lendl", "Věra Čáslavská", "Emil Zátopek", "Petra Kvitová"], a: ["Věra Čáslavská", "Emil Zátopek"] },
         { q: "Which of these personalities of Czech culture and science did NOT receive the Nobel Prize?", options: ["Jaroslav Seifert", "Otto Wichterle", "Jaroslav Heyrovský", "Bedřich Hrozný"], a: ["Otto Wichterle", "Bedřich Hrozný"] }
      ]
    },
    {
      title: "Czech Culture and History Quiz",
      type: "quiz",
      content: [
         { q: "Which of these countries do not share borders with the Czech Republic?", options: ["Poland", "Hungary", "Austria", "Ukraine"], a: "Hungary" },
         { q: "What is the name of the oldest university in Central Europe?", options: ["Prague University", "Charles University", "University of Jerome of Prague"], a: "Charles University" },
         { q: "Which of these words did not originate in the Czech lands?", options: ["robot", "kindergarten", "pistol", "dollar"], a: "kindergarten" },
         { q: "Which one of these important people of Czech culture was a writer?", options: ["Čapek", "Dvořák", "Komenský"], a: "Čapek" },
         { q: "What year was Czechoslovakia founded?", options: ["1948", "1968", "1938", "1918"], a: "1918" },
         { q: "What year was the “Velvet” revolution?", options: ["1991", "1989", "1988", "1990"], a: "1989" },
         { q: "The first president of the Czech Republic was famous for …", options: ["writing satires", "writing absurd drama", "writing drama for TV"], a: "writing absurd drama" },
         { q: "Which two of these famous people were born in the Czech lands?", options: ["Albert Einstein", "Madeleine Albright", "Sigmund Freud", "Andy Warhol"], a: "Sigmund Freud" },
         { q: "Which one of the following tennis players is not of Czech origin?", options: ["Martina Navratilová", "Ivan Lendl", "Monica Seles", "Martina Hingis"], a: "Monica Seles" }
      ]
    },
    {
      title: "Adjustment Beliefs Quiz",
      intro: "Answer whether you believe the following statements are True or False based on cultural adaptation theory.",
      type: "checklist",
      content: [
        "Most people begin really adjusting to the new culture after the first six weeks in the country.",
        "Most people understand that people in other countries behave differently from them.",
        "All you have to do to be successful in your new country is to learn the language.",
        "The essence of adjusting to a new culture is getting used to all the new and different things one finds there.",
        "Cultural adjustment means getting used to and understanding the behavior of the local people.",
        "The average person working abroad who does not adjust to the culture is unsuccessful in what they try to do there and/or leaves."
      ]
    },
    {
      title: "Values Continuum",
      intro: "Mark a value for yourself. 1 = Left side, 10 = Right side.",
      type: "scale",
      content: [
        { label: "Change vs Tradition", left: "Change is always for the better.", right: "Things used to be better before all this change." },
        { label: "Control vs Fate", left: "If there’s a problem we need to take steps to fix it.", right: "There’s nothing you can do. You know how things are." },
        { label: "Time Control vs Interaction", left: "Time is money. Get to the point.", right: "What’s the hurry? Work will still be there." },
        { label: "Equality vs Hierarchy", left: "All people have an equal chance. Sky is the limit.", right: "It’s who your father is and who you know." },
        { label: "Materialism vs Spiritualism", left: "You work hard to buy things you deserve.", right: "Material things are not important." },
        { label: "Self Help vs Birthright", left: "You have to depend on yourself.", right: "If you marry into a good family, life will be easier." },
        { label: "Competition vs Cooperation", left: "Try hard to be better than others.", right: "Victory means nothing if you don't help your friend." },
        { label: "Work vs Being", left: "Work hard, play hard. Idleness is sin.", right: "Take time out to enjoy and think." },
        { label: "Informality vs Formality", left: "Call me Jim.", right: "But I couldn’t do that Dr. Jones." },
        { label: "Directness vs Indirectness", left: "Tell things how they are.", right: "I cannot tell her what I think. She would be insulted." }
      ]
    },
    {
      title: "Interpreting Sayings",
      intro: "Think about what the following Czech sayings tell you about Czech culture.",
      type: "key-value",
      content: [
        { key: "Je lepší dvakrát vyhořet, než se jednou stěhovat.", value: "It is better to have your house burn down twice rather than move once." },
        { key: "Bez práce nejsou koláče.", value: "Without work, there is no cake." },
        { key: "Práce neuteče, nemá nohy.", value: "Work won’t do away. It ain’t got no legs." },
        { key: "Chytrému napověz, hloupého kopni.", value: "Hint to the smart, kick the stupid one." },
        { key: "Nikdo učený z nebe nespadl.", value: "No learned person falls from the sky." },
        { key: "Mluviti stříbro, mlčeti zlato.", value: "To speak is silver, to be silent is gold." },
        { key: "Kdo nekrade okrádá rodinu.", value: "He, who doesn’t steal, steals from his family." },
        { key: "Čistota půl zdraví.", value: "Cleanliness is half your health." }
      ]
    }
  ]
};
