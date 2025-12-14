
import { CultureCategory } from './types';

export const snippetsData: CultureCategory = {
  id: "snippets",
  title: "Snippets of Czech Culture",
  description: "Explore famous Czech songs that are actually covers of international hits. Compare the lyrics and themes side-by-side.",
  icon: "Music",
  color: "bg-pink-50 text-pink-700",
  sections: [
    {
      title: "Introduction",
      type: "text",
      content: [
        "This is a selection of very popular or well-known Czech songs that are based on foreign, mostly English, originals. They range from almost straightforward translation, small adaptations, interesting changes in perspective to complete reinvention. For most of these, most Czechs may not even be aware that they are indeed covers or may have no awareness of the original or the differences between the Czech version and the original.",
        "In many cases, the Czech lyrics are more extensive and poetic.",
        "For a more extensive list, you can visit the <a href='https://en.wikipedia.org/wiki/List_of_Czech_cover_versions_of_songs' target='_blank' class='text-czech-blue underline'>Wikipedia list of Czech cover versions</a>."
      ]
    },
    {
      title: "Paní má se má / Rocky Mountain High",
      type: "song-comparison",
      content: {
        description: "Completely different lyrics. Not even on the same topic. One is about a relationship (My wife is doing well / smells of mint) and the other is about nature.",
        czech: {
          title: "Paní má se má",
          url: "https://www.youtube.com/watch?v=DdPGtKh5gu0",
          lyrics: `Každé ráno probouzí mně sluncem hořícím 
a listy jí se rosou zachvějí.
Vítá mně tu šafrán, spolu s jemnou skořicí 
a jas tvých očí s barvou šalvějí.

Každé ráno otvírám svůj krámek pod věží,
a vůněmi vám kornout naplním,
ke mně každý spěchá od nás hned tak neběží,
dnes každý zná můj krámek s kořením.

Říkají, že paní má se má,
že její muž jsem právě já,
dávno ví, proč ráda mě a s pýchou objímá,
paní má se má, voní mátou.

Každý večer zavírám svůj krámek petlicí a otvírám svou náruč dokořán.
Teplo tvé mně vábí moje lásko vonící,
i den k nám vklouzne vůní uhoupán.

Každý večer uvařím ti jasmínový čaj,
a ustelem si květem lipovým.
Pohár vína půlnoční teď naplň po okraj,
co nestačíš mi říct, sám dopovím.

Říkají, že paní má se má,
že její muž jsem právě já,
dávno ví, proč ráda mě a s pýchou objímá,
paní má se má, voní mátou.`
        },
        original: {
          title: "Rocky Mountain High",
          url: "https://www.youtube.com/watch?v=eOB4VdlkzO4",
          lyrics: `He was born in the summer of his 27th year 
Coming home to a place he'd never been before 
He left yesterday behind him, you might say he was born again
You might say he found a key for every door

When he first came to the mountains his life was far away 
On the road and hanging by a song
But the string's already broken and he doesn't really care
It keeps changing fast and it don't last for long

But the Colorado rocky mountain high
I've seen it rainin' fire in the sky
The shadow from the starlight is softer than a lullabye
Rocky mountain high (Colorado)

He climbed cathedral mountains, he saw silver clouds below 
He saw everything as far as you can see
And they say that he got crazy once and he tried to touch the sun 
And he lost a friend but kept his memory...`
        }
      }
    },
    {
      title: "Lásko voníš deštěm / She's Gone",
      type: "song-comparison",
      content: {
        description: "Both love songs about memories but completely different otherwise. Czech is more wistful rather than desperate. Title translates to 'Love, you smell of rain'.",
        czech: {
          title: "Lásko voníš deštěm",
          url: "https://www.youtube.com/watch?v=1LaAMX_u4iI"
        },
        original: {
          title: "She's Gone",
          url: "https://www.youtube.com/watch?v=F7lRBM2U3nc"
        }
      }
    },
    {
      title: "Prodavač / Auctioneer",
      type: "song-comparison",
      content: {
        description: "The same subject and fast-paced delivery style, but translated into a Czech context - an auctioneer becomes a shopkeeper in a grocery store.",
        czech: {
          title: "Prodavač",
          url: "https://www.youtube.com/watch?v=cJOkJ6EPHAY"
        },
        original: {
          title: "The Auctioneer",
          url: "https://www.youtube.com/watch?v=FItdgMQCYVI"
        }
      }
    },
    {
      title: "Cesty toulavý / On the Road Again",
      type: "song-comparison",
      content: {
        description: "Not a translation but a very similar theme and almost the same sentiment about the wandering life.",
        czech: {
          title: "Cesty toulavý",
          url: "https://www.youtube.com/watch?v=X9AW829W0rg"
        },
        original: {
          title: "On the Road Again",
          url: "https://www.youtube.com/watch?v=Gdlyi5mckg0"
        }
      }
    },
    {
      title: "Oranžovej Expres / Orange Blossom Special",
      type: "song-comparison",
      content: {
        description: "Completely different. Very basic English lyrics, very intricate, poetic Czech lyrics. Both about train journeys but English is about a specific train, Czech about travelling in general.",
        czech: {
          title: "Oranžovej Expres",
          url: "https://www.youtube.com/watch?v=_asHIu1kNqM"
        },
        original: {
          title: "Orange Blossom Special",
          url: "https://www.youtube.com/watch?v=Xhs5j7HN8wM"
        }
      }
    },
    {
      title: "Jackson",
      type: "song-comparison",
      content: {
        description: "Completely different lyrics and themes between the two songs but they keep the same title - one refers to Jackson as a city, the Czech one as a person's name.",
        czech: {
          title: "Jackson",
          url: "https://www.youtube.com/watch?v=cgA28mzP7WI"
        },
        original: {
          title: "Jackson",
          url: "https://www.youtube.com/watch?v=U3NJC18Oi04"
        }
      }
    },
    {
      title: "Šlapej dál / I Got Stripes",
      type: "song-comparison",
      content: {
        description: "Vaguely same themes (prison/trouble) but no other lyrics overlap. However, the first lines rhyme nicely between Czech and English.",
        czech: {
          title: "Šlapej dál",
          url: "https://www.youtube.com/watch?v=Azh4YTPttLw",
          lyrics: `Hej, nandej na sebe modrý džíny,
vlak houká, v kopci je pomalej,
tak vstávej z tý udusaný hlíny,
hej, tuláku, už je ráno, a tak oči otvírej.

®: Šlapej dál a táhni ke všem čertům,
tohleto je město proklatý,
a šerif náš, ten nerozumí žertům,
a tak tohle ráno mohlo by bejt pro tebe dost zlý.

Hej, plandej už dál, jak vede cesta,
a koukej si chytit nějakej vlak,
šerif náš je z pepřenýho těsta
a jak zmerčí tuláka, tak začne řádit jako drak...`
        },
        original: {
          title: "I Got Stripes",
          url: "https://www.youtube.com/watch?v=cFbh-HKd8is",
          lyrics: `On a Monday,
I was arrested (uh huh)
On a Tuesday,
They locked me in the jail (oh boy)
On a Wednesday,
My trial was attested
On a Thursday,
They said guilty and 
The Judge's gavel fell

I got stripes,
Stripes around my shoulders
I got chains,
Chains around my feet...`
        }
      }
    },
    {
      title: "Statečný strojvůdce / Casey Jones",
      type: "song-comparison",
      content: {
        description: "This is a pretty much direct translation - retelling of the same story.",
        czech: {
          title: "Statečný strojvůdce",
          url: "https://www.youtube.com/watch?v=POAaFC3eQXU"
        },
        original: {
          title: "Casey Jones",
          url: "https://www.youtube.com/watch?v=jd63krxX-_k"
        }
      }
    },
    {
      title: "Půl párku / One Meatball",
      type: "song-comparison",
      content: {
        description: "Almost a translation with some small adjustments - half a sausage (půl párku) vs one meatball, etc.",
        czech: {
          title: "Půl párku",
          url: "https://www.youtube.com/watch?v=oKAIXF9sCkc"
        },
        original: {
          title: "One Meatball",
          url: "https://www.youtube.com/watch?v=FqHHnTc9KD4"
        }
      }
    },
    {
      title: "Veď mě dál cesto má / Take Me Home Country Roads",
      type: "song-comparison",
      content: {
        description: "Seemingly the same theme but one is about leaving home and the journey as life, while the original is about longing for home.",
        czech: {
          title: "Veď mě dál cesto má",
          url: "https://www.youtube.com/watch?v=GNFqHnuu26k"
        },
        original: {
          title: "Take Me Home Country Roads",
          url: "https://www.youtube.com/watch?v=qap9Qm-Q894"
        }
      }
    },
    {
      title: "Dajána / Diana",
      type: "song-comparison",
      content: {
        description: "Very similar but a difference in perspective. The Czech version is about a woman in love told in the third person, whereas the English original is about a love for a woman by a man in the first person.",
        czech: {
          title: "Dajána",
          url: "https://www.youtube.com/watch?v=oYu8eblJ4oA"
        },
        original: {
          title: "Diana",
          url: "https://www.youtube.com/watch?v=ar-zZ21iW9w"
        }
      }
    },
    {
      title: "Jednou budem dál / We Shall Overcome",
      type: "song-comparison",
      content: {
        description: "Same idea but different lyrics. The Czech version became an anthem of the Velvet Revolution but is less directly revolutionary in its wording.",
        czech: {
          title: "Jednou budem dál",
          url: "https://www.youtube.com/watch?v=-2tkoWeQ93c"
        },
        original: {
          title: "We Shall Overcome",
          url: "https://www.youtube.com/watch?v=M_Ld8JGv56E"
        }
      }
    },
    {
      title: "Ital nezná ten zázrak / L'Italiano",
      type: "song-comparison",
      content: {
        description: "A parody inspired by the craze for Italian pop songs in the 70s and 80s in Czechoslovakia.",
        czech: {
          title: "Ital nezná ten zázrak",
          url: "https://www.youtube.com/watch?v=-MzsiR4yWio"
        },
        original: {
          title: "L'Italiano",
          url: "https://www.youtube.com/watch?v=syc78JzHGTs"
        }
      }
    },
    {
      title: "Podivný spáč / Loď John B / Sloop John B",
      type: "song-comparison",
      content: {
        description: "Two different covers of the same song. One is a translation of the title ('Loď John B') but with a different direction (let me sail vs let me go home), the other ('Podivný spáč') has completely different lyrics on a different theme.",
        czech: {
          title: "Podivný spáč / Loď John B",
          url: "https://www.youtube.com/watch?v=zVigWfF9KAs"
        },
        original: {
          title: "Sloop John B",
          url: "https://www.youtube.com/watch?v=09dQmeB_NgU"
        }
      }
    }
  ]
};