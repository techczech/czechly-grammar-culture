import { CultureCategory } from './types';

export const lifestyleData: CultureCategory = {
  id: "lifestyle",
  title: "Food & Lifestyle",
  description: "Insights into daily habits, social norms, gastronomy, and the typical Czech schedule.",
  icon: "Utensils",
  color: "bg-green-50 text-green-700",
  sections: [
    {
      title: "Top 10 Things You Should Know About Czech Culture",
      type: "biography",
      content: [
        {
          name: "Daily schedule",
          desc: "Traditionally, Czechs are early risers. Shops open at 7 am and offices at 8. Factory workers often clock in even earlier. This dates to a last century insomniac emperor Franz Josef II. who liked to start business at 6 in the morning and this trickled down to the entire population.<br><br>On the other end of the day, everything closes down early. Shops close between 5 and 7 pm and offices even earlier. There used to be so-called night shops which would stay open till ten at night and charge 10% extra for the service.<br><br>In Prague, due to tourist and expatriate influence, opening hours are more international, but the farther one goes from the center, the more traditional time gets.<br><br>Restaurants and most pubs close between 10 and 11. Some bars (mostly in Prague) close later and some stay open through the night.<br><br>Theater shows start between 7 and 8 and last movie show in Prague starts at 9:30 but typically at 8.<br><br>School starts at 8 but some classes may start at 7:15, even at the university level.<br><br>This affects the average Czech’s daily schedule. Get up at 6:00 – 7:00 start work between 7 and 8. Lunch between 12 and 1. Get home at 4 or 5 pm, have dinner at 6 or 7, and go to bed at 10 or 11.<br><br>If you want to socialize with Czechs you have to adapt to this schedule. Even the young and wild don’t go out later than 8 pm but often as early as 6. Parties run over midnight only exceptionally, typically people go home around 11."
        },
        {
          name: "Gestures",
          desc: "Czech gestures are slightly more reserved. There are only a few things to remember:<br><br><strong>Smiles:</strong> Czechs don’t smile at people they don’t know. People smiling in the streets are the exception to the norm. It is not a sign of unfriendliness, it is simply not expected. Conversely, if you smile at people without, they will be surprised.<br><br><strong>Counting on fingers:</strong> The Czech system is as follows: 1 – thumb, 2 – thumb and index finger, 3 – thumb, index finger, middle finger, 4 – thumb tucked in, four fingers outstretched, 5 – all fingers.<br><br>By the way, the Czech language doesn’t differentiate between toes and fingers, so a Czech has 20 fingers.<br><br><strong>Gestures:</strong> Pointing at your forehead or temple means ‘you are crazy’."
        },
        {
          name: "Relationships / Friendship",
          desc: "Clear boundaries between friends and aquaintances. Obligations of friends are more binding.<br><br>Formal and informal forms of address are very important. Formal language used even with people of same age by adults.<br><br>It is polite and expected to greet people you don't know when you walk into a small store, restaurant or waiting room, but not to engage in coversation with them.<br><br>It is normal to sit with strangers at one table in a restaurant for hours and not exchange a word but it would be impolite not to say 'Good Bye' when you leave.<br><br>Old people have certain prerogatives by virtue of their age, for example, yournger people are expected to relinquish theior seats on public transportation."
        },
        {
          name: "Men vs. women",
          desc: "Feminism hasn't gained wider popularity among Czech women, perhaps because it received negative publicity as a radical movement. Also the situation of Czech women differs, on the surface, from that of American feminists of the 60s in that women commonly work in a wide array of professions. Also, the Czech language, because of its structure, is not particularly sexist. Another important point is the reluctance of Czechs after the fall of communism to congregate in organizations.<br><br>However, the situation of women is far from ideal. They are still expected to fulfill their role as mothers and caretakers of their families and on those grounds it may be more difficult for them to enter into certain professions. There are only few women in politics, high medicine and top managerial positions. On the other hand, women have traditionally worked in education (all levels) and research."
        },
        {
          name: "Meeting new people",
          desc: "It is more difficult to make new friends in the Czech culture. One meets new people through work and clubs but deep friendships rarely result after a short time. The most common way of meeting new people is by introduction by a mutual friend. Even then a friendship (i.e. not aquaintance) only forms after a considerable period of time.<br><br>It is rare to meet people in public places (with the exception of bars). People will be surprised if you strike up a conversation with them but will go along."
        },
        {
          name: "Family",
          desc: "Family ties are closer, mostly because children often live quite close to their parents. Children are often forced to live with their parents even after they marry because it is virtually impossible for them to find an apartment. Another factor is the low mobility of Czechs. It is still rather exceptional for a Czech family to relocate because of a job oportunity."
        },
        {
          name: "Points of national pride",
          desc: "Beer , ice hockey, soccer, classical music, jazz, humor, women, Czech, ingenuity, history, science, film, architecture, Prague."
        }
      ]
    },
    {
      title: "Czech Food",
      type: "text",
      content: [
        "In his book Chrám i tvrz (A Cathedral And A Fortress), Pavel Eisner a famous Czech writer and translator writes about Czech food as one of the blandest and least healthy of all. In this it is rivaled probably only by the Ukrainian and Polish cuisines. Curiously, as Eisner himself noted, Czechs hold a misguided pride in their food. They are especially proud of a Czech specialty knedlík which is basically boiled bread dough typically served with a healthy (sic!) serving of fatty pork and sauerkraut. Typical Czech meal contains meat and knedlík or potatoes. Vegetables, if present at all, are boiled. Some claim this is done to ensure total absence of vitamins, and if possible, flavor. Salad’s in Czech cuisine contain a lot of mayonnaise, cheese, salami and sometimes no vegetables at all. Lettuce is a seasonal vegetable and is not used in salads outside of the summer.",
        "Czech typical selection of spices consists of salt, ground black or red pepper. Other popular spices are dill, caraway, marjory or thyme. Another popular condiment applied liberally with many items on the table is ketchup. It is common to see pizzerias offering ketchup.",
        "Some foreigners may be surprised that even sweet foods (for example) are served as the main course at a lunch or dinner.",
        "The bottom line is that Czech food takes some getting used to. But many who do begin to like it and discover possible intricacies, especially if they get to sample the output of a genuine grandmother.",
        "Vegetarians may find it difficult to eat well unless they cook for themselves. Many restaurants advertise ‘meatless’ meals which may, however, contain ham (šunka) or be made with lard (sádlo)."
      ]
    },
    {
      title: "Jídelní lístek (Menu)",
      type: "menu",
      content: [
        { category: "Polévky (Soups)", items: [
          { name: "Slepičí polévka", price: "25.00", desc: "Chicken Soup" },
          { name: "Hovězí vývar", price: "20.00", desc: "Beef broth" },
          { name: "Bramborová polévka", price: "15.00", desc: "Potato Soup" }
        ]},
        { category: "Hotová jídla (Main courses)", items: [
          { name: "Kuře, brambor, salát", price: "45.00", desc: "Chicken, potatoes, salad" },
          { name: "Vepřové maso, zelí, knedlík", price: "75.00", desc: "Pork, sour kraut, dumplings" },
          { name: "Rybí filé, hranolky, obloha", price: "38.00", desc: "Fish filet, french fries, garnish" },
          { name: "Hovězí guláš, rýže", price: "49.00", desc: "Beef goulash, rice" }
        ]},
         { category: "Bezmasá jídla (Meatless dishes)", items: [
          { name: "Smažený sýr, tatarská omáčka", price: "39.00", desc: "Fried cheese, tartar sauce" },
          { name: "Palačinka se šlehačkou", price: "25.00", desc: "Pancake with whipped creeam" },
          { name: "Špagety se sýrem", price: "32.00", desc: "Spagetti with cheese" }
        ]},
        { category: "Nápoje (Drinks)", items: [
          { name: "Káva", price: "18.00", desc: "Coffee" },
          { name: "Džus", price: "20.00", desc: "Juice" },
          { name: "Víno", price: "25.00", desc: "Wine" },
          { name: "Pivo", price: "17.80", desc: "Beer" },
          { name: "Minerálka", price: "15.00", desc: "Mineral water" }
        ]}
      ]
    },
    {
      title: "How Does Your Life Fit? (Daily Schedule)",
      type: "timeline",
      content: [
        { time: "5:00", czech: "Some blue-collar workers get up." },
        { time: "6:00", czech: "Some blue-collar workers start work. All blue-collar workers get up. Some white-collar workers get up." },
        { time: "7:00", czech: "Some white-collar workers start work. All white-collar workers get up. All children get up. Some university students start school. Some food stores open." },
        { time: "8:00", czech: "All workers working. School starts." },
        { time: "10:00", czech: "Many Czechs eat a light snack-meal called svačina. Some specialty stores open." },
        { time: "11:00", czech: "Many pubs and restaurants open." },
        { time: "12:00", czech: "Most Czech eat lunch." },
        { time: "15:00", czech: "Some workers finish work. Most school ends." },
        { time: "16:00", czech: "Many Czechs eat a light snack-meal called svačina. Some Czechs get home from work." },
        { time: "17:00", czech: "Most workers are home. Afternoon movie shows start. Many stores close." },
        { time: "18:00 – 19:00", czech: "Most Czechs eat their evening meal called večeře. The TV shows a children’s story and the evening news. This is also a good time to go out. Theaters start playing. All stores close." },
        { time: "20:00", czech: "Main show on TV. Night movie shows start." },
        { time: "22:00", czech: "Most pubs and restaurants close." },
        { time: "23:00", czech: "Most Czechs go to bed. All restaurants and pubs close." }
      ]
    }
  ]
};
