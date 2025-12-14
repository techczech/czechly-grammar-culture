




import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Compass, Database, Layers, List, AlertCircle, GitBranch, Hash, Map, Edit3, Calculator, BookOpen, Shapes, User, Zap } from 'lucide-react';

const Grammar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full px-4 md:px-8 pb-12">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-sm overflow-hidden min-h-[500px]">
        
        <div className="p-8 md:p-12">
          <h2 className="text-4xl text-czech-blue font-hand mb-2">Grammar Resources</h2>
          <p className="text-gray-600 mb-8">
            Explore our comprehensive collection of grammar tools and guides designed to help you master Czech.
          </p>

          {/* General Resources */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
                <Compass className="text-gray-600" size={20} />
                General Resources
            </h3>
            <div className="grid grid-cols-1">
              <div 
                onClick={() => navigate('/grammar/navigator')}
                className="group border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all cursor-pointer bg-white hover:border-czech-blue/50 flex flex-col md:flex-row gap-4 items-start md:items-center"
              >
                <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-czech-blue transition-colors flex-shrink-0">
                  <Compass className="text-czech-blue group-hover:text-white transition-colors" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-czech-blue">Czech Language Navigator</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    A structural overview of Czech grammar from a learner's perspective. Includes PDF guide and video introduction.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 1: Nouns, Adjectives, Pronouns and Numerals */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
                <Layers className="text-yellow-600" size={20} />
                Nouns, Adjectives, Pronouns and Numerals
                <span className="text-xs md:text-sm font-normal text-gray-400 ml-auto hidden sm:inline">Words that have gender and are subject to case</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Understanding Gender */}
              <div 
                onClick={() => navigate('/grammar/gender')}
                className="group border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all cursor-pointer bg-white hover:border-blue-500/50"
              >
                <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <Shapes className="text-blue-600 group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600">Understanding Gender</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The foundation of Czech nouns: Ten, Ta, To. Agreement rules and how to determine gender.
                </p>
              </div>

              {/* Understanding Cases */}
              <div 
                onClick={() => navigate('/grammar/case-usage')}
                className="group border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all cursor-pointer bg-white hover:border-yellow-600/50"
              >
                <div className="bg-yellow-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-600 transition-colors">
                  <BookOpen className="text-yellow-600 group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-yellow-600">Understanding Cases</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A guide to the function and usage of the 7 cases (Nominative, Genitive, etc.) and addressing people (Vocative).
                </p>
              </div>

              {/* Adjectives */}
              <div 
                onClick={() => navigate('/grammar/adjectives')}
                className="group border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all cursor-pointer bg-white hover:border-teal-500/50"
              >
                <div className="bg-teal-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-600 transition-colors">
                  <Edit3 className="text-teal-600 group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-teal-600">Adjectives</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Hard and Soft adjectives, declension tables, comparisons, and formation rules.
                </p>
              </div>

              {/* Pronouns */}
              <div 
                onClick={() => navigate('/grammar/pronouns')}
                className="group border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all cursor-pointer bg-white hover:border-purple-500/50"
              >
                <div className="bg-purple-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors">
                  <User className="text-purple-600 group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-purple-600">Pronouns</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Personal, possessive, demonstrative, and reflexive pronouns. Usage of "svůj" and "se/si".
                </p>
              </div>

              {/* Declension Tables */}
              <div 
                onClick={() => navigate('/grammar/case-forms')}
                className="group border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all cursor-pointer bg-white hover:border-yellow-500/50 h-full"
              >
                <div className="bg-yellow-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-500 transition-colors">
                  <Layers className="text-yellow-600 group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-yellow-600">Declension Tables</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Complete declension patterns for nouns, adjectives, pronouns and numerals (Reference Tables).
                </p>
              </div>

              {/* Numerals */}
              <div 
                onClick={() => navigate('/grammar/numerals')}
                className="group border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all cursor-pointer bg-white hover:border-orange-500/50 h-full"
              >
                <div className="bg-orange-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors">
                  <Calculator className="text-orange-600 group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-orange-600">Numerals</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Counting, decimals, fractions, and the specific declension rules for Czech numbers (1-4 vs 5+).
                </p>
              </div>

            </div>
          </div>

          {/* Section 2: Verbs */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
                <GitBranch className="text-green-600" size={20} />
                Verbs
                <span className="text-xs md:text-sm font-normal text-gray-400 ml-auto hidden sm:inline">Words that have tense, person and conjugations</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Understanding Verbs (New) */}
              <div 
                onClick={() => navigate('/grammar/verbs-general')}
                className="group border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all cursor-pointer bg-white hover:border-green-600/50"
              >
                <div className="bg-green-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
                  <Zap className="text-green-600 group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-green-600">Understanding Verbs</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Comprehensive guide to conjugation, tense, aspect (perfective/imperfective), moods, and motion verbs.
                </p>
              </div>

              {/* 150 Verbs Card */}
              <div 
                onClick={() => navigate('/grammar/verbs150')}
                className="group border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all cursor-pointer bg-white hover:border-green-600/50"
              >
                <div className="bg-green-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
                  <List className="text-green-600 group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-green-600">150 Common Verbs</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A curated list of the most essential Czech verbs with conjugations, aspect pairs, and usage examples.
                </p>
              </div>

              {/* Conjugation Models Card */}
              <div 
                onClick={() => navigate('/grammar/conjugation-models')}
                className="group border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all cursor-pointer bg-white hover:border-cyan-600/50"
              >
                <div className="bg-cyan-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-600 transition-colors">
                  <GitBranch className="text-cyan-600 group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-cyan-600">Conjugation Models</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Verb classes and conjugation patterns based on present tense endings (-e, -ne, -je, -í, -á).
                </p>
              </div>

              {/* Irregular Verbs Card */}
              <div 
                onClick={() => navigate('/grammar/irregular-verbs')}
                className="group border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all cursor-pointer bg-white hover:border-orange-500/50"
              >
                <div className="bg-orange-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors">
                  <AlertCircle className="text-orange-600 group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-orange-600">Selected Irregular Verbs</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A list of high-frequency verbs that deviate from standard conjugation patterns.
                </p>
              </div>

              {/* Verb Prefix Database Card */}
              <div 
                onClick={() => navigate('/grammar/prefixes')}
                className="group border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all cursor-pointer bg-white hover:border-red-500/50"
              >
                <div className="bg-red-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-czech-red transition-colors">
                  <Database className="text-czech-red group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-czech-red">Verb Prefix Database</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  An interactive database of Czech verb prefixes with meanings, frequencies, and examples.
                </p>
              </div>

            </div>
          </div>

          {/* Section 3: Adverbs, Prepositions, Conjunctions */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
                <Hash className="text-purple-600" size={20} />
                Adverbs, Prepositions, Conjunctions
                <span className="text-xs md:text-sm font-normal text-gray-400 ml-auto hidden sm:inline">Words that don't change their form</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Conjunctions Card */}
              <div 
                onClick={() => navigate('/grammar/conjunctions')}
                className="group border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all cursor-pointer bg-white hover:border-purple-500/50"
              >
                <div className="bg-purple-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors">
                  <Hash className="text-purple-600 group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-purple-600">Conjunctions</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  List of most common conjunctions categorized by function (Conjunctive, Disjunctive, Causal, etc.).
                </p>
              </div>

              {/* Prepositions Card */}
               <div 
                onClick={() => navigate('/grammar/prepositions')}
                className="group border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all cursor-pointer bg-white hover:border-blue-500/50"
              >
                <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <Map className="text-blue-600 group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600">Prepositions</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Prepositions of time, space (directional vs locational), and usage with specific cases.
                </p>
              </div>

              {/* Adverbs Card */}
               <div 
                onClick={() => navigate('/grammar/adverbs')}
                className="group border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all cursor-pointer bg-white hover:border-teal-500/50"
              >
                <div className="bg-teal-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-600 transition-colors">
                  <Edit3 className="text-teal-600 group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-teal-600">Adverbs</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Formation rules, grade of quantity, comparison, and common adverbs of place and time.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Grammar;