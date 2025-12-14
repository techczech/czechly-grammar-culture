
import React, { useMemo } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, MessageSquare, Feather, Zap, Hash, Search, Layers, Calculator, Clock, MapPin, Edit3, User } from 'lucide-react';

// Data Imports
import { functionalCzechData } from '../data/functionalCzech';
import { verbs150Data } from '../data/verbs150';
import { irregularVerbsData } from '../data/irregularVerbs';
import { verbPrefixData } from '../data/verbPrefixes';
import { cultureData } from '../data/cultureData';
import { caseFormsData } from '../data/caseForms';
import { caseUsageData } from '../data/caseUsage';
import { genderData } from '../data/gender';
import { adjectivesData } from '../data/adjectives';
import * as pronounsData from '../data/pronouns';
import * as numeralsData from '../data/numerals';
import { conjugationModelsData } from '../data/conjugationModels';
import { conjunctionsData } from '../data/conjunctions';
import * as prepositionsData from '../data/prepositions';
import * as adverbsData from '../data/adverbs';
import { verbsGeneralData } from '../data/verbsGeneral';

// Page Metadata for High-Level Search
const grammarPages = [
    { title: "Verb Prefixes", path: "/grammar/prefixes", keywords: "prefix, verbs, meanings" },
    { title: "150 Common Verbs", path: "/grammar/verbs150", keywords: "verbs, conjugation, list" },
    { title: "Irregular Verbs", path: "/grammar/irregular-verbs", keywords: "irregular, exception, verbs" },
    { title: "Conjugation Models", path: "/grammar/conjugation-models", keywords: "models, conjugation, ending, patterns" },
    { title: "General Verb Rules", path: "/grammar/verbs-general", keywords: "tense, aspect, mood, imperative, future, past" },
    { title: "Case Forms (Declension)", path: "/grammar/case-forms", keywords: "cases, declension, forms, nouns, adjectives, endings" },
    { title: "Case Usage", path: "/grammar/case-usage", keywords: "usage, cases, prepositions, function, nominative, genitive, dative, accusative, vocative, locative, instrumental" },
    { title: "Gender", path: "/grammar/gender", keywords: "gender, masculine, feminine, neuter, ten, ta, to" },
    { title: "Adjectives", path: "/grammar/adjectives", keywords: "adjectives, hard, soft, comparison, better, best" },
    { title: "Pronouns", path: "/grammar/pronouns", keywords: "pronouns, personal, possessive, demonstrative, já, ty, on" },
    { title: "Numerals", path: "/grammar/numerals", keywords: "numbers, counting, numerals, decimals, fractions" },
    { title: "Conjunctions", path: "/grammar/conjunctions", keywords: "conjunctions, linking words, and, but, a, ale, že" },
    { title: "Prepositions", path: "/grammar/prepositions", keywords: "prepositions, time, space, location, v, na, do, z" },
    { title: "Adverbs", path: "/grammar/adverbs", keywords: "adverbs, manner, place, time" },
    { title: "Czech Navigator", path: "/grammar/navigator", keywords: "overview, structure, navigator" },
];

interface SearchResult {
  id: string;
  title: string;
  subtitle?: string;
  path: string;
  category: 'Grammar' | 'Functional' | 'Verbs' | 'Culture';
  icon?: React.ReactNode;
}

// Robust deep search helper
const contains = (data: any, term: string): boolean => {
  try {
    return JSON.stringify(data).toLowerCase().includes(term);
  } catch {
    return false;
  }
};

const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get('q')?.toLowerCase() || '';

  const results = useMemo(() => {
    if (!query || query.length < 2) return [];

    const matches: SearchResult[] = [];

    // --- 1. Page Metadata ---
    grammarPages.forEach(page => {
      if (page.title.toLowerCase().includes(query) || page.keywords.includes(query)) {
        matches.push({
          id: `page-${page.path}`,
          title: page.title,
          subtitle: "Grammar Section",
          path: page.path,
          category: 'Grammar',
          icon: <BookOpen size={20} className="text-czech-blue" />
        });
      }
    });

    // --- 2. Functional Czech ---
    functionalCzechData.forEach(item => {
      if (contains(item, query)) {
        matches.push({
          id: `func-${item.czech}`,
          title: item.czech,
          subtitle: `${item.english} (${item.functionCategory})`,
          path: '/functional-czech',
          category: 'Functional',
          icon: <MessageSquare size={20} className="text-green-600" />
        });
      }
    });

    // --- 3. Verbs (150) ---
    verbs150Data.forEach(verb => {
      if (contains(verb, query)) {
        matches.push({
          id: `verb-${verb.infinitive}`,
          title: verb.infinitive,
          subtitle: `Verb: ${verb.english} (Aspect: ${verb.aspect})`,
          path: '/grammar/verbs150',
          category: 'Verbs',
          icon: <Zap size={20} className="text-orange-500" />
        });
      }
    });

    // --- 4. Irregular Verbs ---
    irregularVerbsData.forEach(verb => {
      if (contains(verb, query)) {
        matches.push({
          id: `irr-${verb.infinitive}`,
          title: verb.infinitive,
          subtitle: `Irregular Verb: ${verb.english}`,
          path: '/grammar/irregular-verbs',
          category: 'Verbs',
          icon: <Zap size={20} className="text-orange-500" />
        });
      }
    });

    // --- 5. Verb Prefixes ---
    verbPrefixData.forEach(p => {
      if (contains(p, query)) {
        matches.push({
          id: `prefix-${p.prefix}`,
          title: `${p.prefix}-`,
          subtitle: `Prefix meaning: ${p.meanings[0]}`,
          path: '/grammar/prefixes',
          category: 'Grammar',
          icon: <Layers size={20} className="text-czech-blue" />
        });
      }
    });

    // --- 6. Culture ---
    cultureData.forEach(cat => {
      let foundInCat = false;
      // Search Sections
      cat.sections.forEach(sec => {
        if (contains(sec, query)) {
          matches.push({
            id: `cult-sec-${sec.title}-${cat.id}`,
            title: sec.title,
            subtitle: `Culture: ${cat.title}`,
            path: '/culture',
            category: 'Culture',
            icon: <Feather size={20} className="text-purple-600" />
          });
          foundInCat = true;
        }
      });
      // Fallback: Search category meta if no sections matched but category might
      if (!foundInCat && contains(cat, query)) {
         matches.push({
            id: `cult-cat-${cat.id}`,
            title: cat.title,
            subtitle: cat.description.substring(0, 50) + '...',
            path: '/culture',
            category: 'Culture',
            icon: <Feather size={20} className="text-purple-600" />
         });
      }
    });

    // --- 7. Case Forms ---
    caseFormsData.forEach(item => {
      if (contains(item, query)) {
        matches.push({
          id: `cf-${item.model}`,
          title: item.model,
          subtitle: `Declension Model (${item.gender}, ${item.partOfSpeech})`,
          path: '/grammar/case-forms',
          category: 'Grammar',
          icon: <Layers size={20} className="text-czech-blue" />
        });
      }
    });

    // --- 8. Case Usage ---
    caseUsageData.forEach(item => {
      if (contains(item, query)) {
        matches.push({
          id: `cu-${item.id}`,
          title: item.title,
          subtitle: item.subtitle,
          path: '/grammar/case-usage',
          category: 'Grammar',
          icon: <BookOpen size={20} className="text-czech-blue" />
        });
      }
    });

    // --- 9. Gender ---
    genderData.forEach((section, idx) => {
      if (contains(section, query)) {
        matches.push({
          id: `gen-${idx}`,
          title: section.heading,
          subtitle: "Gender Rules",
          path: '/grammar/gender',
          category: 'Grammar',
          icon: <BookOpen size={20} className="text-czech-blue" />
        });
      }
    });

    // --- 10. Adjectives ---
    adjectivesData.forEach(item => {
      if (contains(item, query)) {
        matches.push({
          id: `adj-${item.id}`,
          title: item.title,
          subtitle: "Adjectives",
          path: '/grammar/adjectives',
          category: 'Grammar',
          icon: <Edit3 size={20} className="text-czech-blue" />
        });
      }
    });

    // --- 11. Conjugation Models ---
    conjugationModelsData.forEach(item => {
      if (contains(item, query)) {
        matches.push({
          id: `conj-${item.model}-${item.present}`,
          title: `Model ending: ${item.model}`,
          subtitle: `Example: ${item.examples.split(',')[0]}`,
          path: '/grammar/conjugation-models',
          category: 'Grammar',
          icon: <Zap size={20} className="text-czech-blue" />
        });
      }
    });

    // --- 12. Conjunctions ---
    conjunctionsData.forEach(cat => {
      if (contains(cat, query)) {
        matches.push({
          id: `conj-cat-${cat.title}`,
          title: cat.title,
          subtitle: "Conjunctions",
          path: '/grammar/conjunctions',
          category: 'Grammar',
          icon: <Hash size={20} className="text-czech-blue" />
        });
      }
    });

    // --- 13. Verbs General ---
    verbsGeneralData.forEach(tab => {
      if (contains(tab, query)) {
        matches.push({
          id: `vg-${tab.id}`,
          title: tab.label,
          subtitle: "Verb Rules (Tense, Aspect, Mood)",
          path: '/grammar/verbs-general',
          category: 'Grammar',
          icon: <BookOpen size={20} className="text-czech-blue" />
        });
      }
    });

    // --- 14. Pronouns (Namespace) ---
    const pronounMap: Record<string, string> = {
        personalPronouns: "Personal Pronouns",
        possessivePronouns: "Possessive Pronouns",
        demonstrativePronouns: "Demonstrative Pronouns",
        vsechnoPronouns: "Pronoun 'Všechno'",
        indefinitePronouns: "Indefinite & Negative",
        reflexivePronouns: "Reflexive Pronouns"
    };
    Object.entries(pronounsData).forEach(([key, data]) => {
        if (contains(data, query)) {
            matches.push({
                id: `pron-${key}`,
                title: pronounMap[key] || "Pronouns",
                subtitle: "Grammar Section",
                path: '/grammar/pronouns',
                category: 'Grammar',
                icon: <User size={20} className="text-czech-blue" />
            });
        }
    });

    // --- 15. Numerals (Namespace) ---
    const numeralMap: Record<string, string> = {
        basicNumerals: "Basic Counting",
        bigNumerals: "Large Numbers",
        numeralTypes: "Types of Numerals",
        declensionOne: "Declension of 'One'",
        declensionSmall: "Declension of 2, 3, 4",
        standardMeasures: "Measures",
        generalMeasures: "General Quantity"
    };
    Object.entries(numeralsData).forEach(([key, data]) => {
        if (contains(data, query)) {
            matches.push({
                id: `num-${key}`,
                title: numeralMap[key] || "Numerals",
                subtitle: "Grammar Section",
                path: '/grammar/numerals',
                category: 'Grammar',
                icon: <Calculator size={20} className="text-czech-blue" />
            });
        }
    });

    // --- 16. Prepositions (Namespace) ---
    const prepMap: Record<string, string> = {
        timePrepositions: "Time Prepositions",
        spaceMappings: "Space Prepositions",
        usageExamples: "Location vs Direction",
        spatialPairs: "Spatial Prepositions",
        miscPrepositions: "Misc Prepositions",
        otherUses: "Other Uses of Prepositions"
    };
    Object.entries(prepositionsData).forEach(([key, data]) => {
        if (contains(data, query)) {
            matches.push({
                id: `prep-${key}`,
                title: prepMap[key] || "Prepositions",
                subtitle: "Grammar Section",
                path: '/grammar/prepositions',
                category: 'Grammar',
                icon: <MapPin size={20} className="text-czech-blue" />
            });
        }
    });

    // --- 17. Adverbs (Namespace) ---
    const adverbMap: Record<string, string> = {
        mannerFormation: "Adverb Formation",
        formationRules: "Formation Rules",
        quantityAdverbs: "Quantity Adverbs",
        comparisonAdverbs: "Comparison of Adverbs",
        placeAdverbs: "Place Adverbs",
        timeAdverbs: "Time Adverbs"
    };
    Object.entries(adverbsData).forEach(([key, data]) => {
        if (contains(data, query)) {
            matches.push({
                id: `adv-${key}`,
                title: adverbMap[key] || "Adverbs",
                subtitle: "Grammar Section",
                path: '/grammar/adverbs',
                category: 'Grammar',
                icon: <Edit3 size={20} className="text-czech-blue" />
            });
        }
    });

    return matches;
  }, [query]);

  // Grouping results
  const groupedResults = {
    Grammar: results.filter(r => r.category === 'Grammar'),
    Verbs: results.filter(r => r.category === 'Verbs'),
    Functional: results.filter(r => r.category === 'Functional'),
    Culture: results.filter(r => r.category === 'Culture'),
  };

  const hasResults = results.length > 0;

  return (
    <div className="w-full px-4 md:px-8 pb-12">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-sm overflow-hidden min-h-[500px]">
        <div className="p-8 md:p-12">
          
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-500 hover:text-czech-blue mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Back
          </button>

          <h2 className="text-3xl text-gray-800 font-bold mb-2">Search Results</h2>
          <p className="text-gray-600 mb-8">
            Showing results for <span className="font-bold text-czech-blue">"{query}"</span>
          </p>

          {!hasResults && query.length >= 2 && (
            <div className="text-center py-12 bg-gray-50 rounded-lg border border-dashed border-gray-300">
              <Search className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500 text-lg">No matches found.</p>
              <p className="text-gray-400 text-sm">Try using different keywords or checking your spelling.</p>
            </div>
          )}

          {query.length < 2 && (
             <div className="text-center py-12 bg-gray-50 rounded-lg border border-dashed border-gray-300">
              <p className="text-gray-500">Please type at least 2 characters to search.</p>
            </div>
          )}

          {hasResults && (
            <div className="space-y-10">
              
              {/* Grammar Results */}
              {groupedResults.Grammar.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2 border-b pb-2">
                    <BookOpen size={20} className="text-czech-blue" /> Grammar & Resources
                  </h3>
                  <div className="grid gap-3">
                    {groupedResults.Grammar.map(r => (
                      <Link to={r.path} key={r.id} className="flex items-start gap-4 p-4 border border-gray-100 rounded-lg hover:border-blue-300 hover:shadow-md transition-all bg-gray-50 group">
                        <div className="bg-white p-2 rounded-lg border border-gray-100 group-hover:border-blue-100 transition-colors">
                            {r.icon}
                        </div>
                        <div>
                            <h4 className="font-bold text-czech-blue text-lg mb-1">{r.title}</h4>
                            <p className="text-sm text-gray-600">{r.subtitle}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Verbs Results */}
              {groupedResults.Verbs.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2 border-b pb-2">
                    <Zap size={20} className="text-orange-500" /> Verbs
                  </h3>
                  <div className="grid gap-3">
                    {groupedResults.Verbs.map(r => (
                      <Link to={r.path} key={r.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:border-orange-300 hover:shadow-md transition-all bg-orange-50/30 group">
                        <div className="flex items-center gap-4">
                            <div className="bg-white p-2 rounded-lg border border-orange-100 group-hover:border-orange-200 transition-colors">
                                {r.icon}
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800 text-lg">{r.title}</h4>
                                <p className="text-sm text-gray-600">{r.subtitle}</p>
                            </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Functional Results */}
              {groupedResults.Functional.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2 border-b pb-2">
                    <MessageSquare size={20} className="text-green-600" /> Functional Phrases
                  </h3>
                  <div className="grid gap-3">
                    {groupedResults.Functional.map(r => (
                      <Link to={r.path} key={r.id} className="block p-4 border border-gray-100 rounded-lg hover:border-green-300 hover:shadow-md transition-all bg-green-50/30 group">
                        <div className="flex justify-between items-start">
                            <div>
                                <h4 className="font-bold text-gray-800 text-lg mb-1">{r.title}</h4>
                                <p className="text-sm text-gray-600 italic">{r.subtitle}</p>
                            </div>
                            <div className="text-green-600 opacity-50 group-hover:opacity-100 transition-opacity">
                                <MessageSquare size={18} />
                            </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Culture Results */}
              {groupedResults.Culture.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2 border-b pb-2">
                    <Feather size={20} className="text-purple-600" /> Culture
                  </h3>
                  <div className="grid gap-3">
                    {groupedResults.Culture.map(r => (
                      <Link to={r.path} key={r.id} className="flex items-start gap-4 p-4 border border-gray-100 rounded-lg hover:border-purple-300 hover:shadow-md transition-all bg-purple-50/30 group">
                        <div className="bg-white p-2 rounded-lg border border-purple-100 group-hover:border-purple-200 transition-colors">
                            {r.icon}
                        </div>
                        <div>
                            <h4 className="font-bold text-purple-900 text-lg mb-1">{r.title}</h4>
                            <p className="text-sm text-gray-600">{r.subtitle}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default SearchPage;
