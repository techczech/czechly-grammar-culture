
import React, { useState, useEffect } from 'react';
import { Search, ArrowLeft, Table, List } from 'lucide-react';
import { caseFormsData, CaseFormModel } from '../data/caseForms';
import { useNavigate } from 'react-router-dom';
import UniversalSection from '../components/UniversalSection';
import { useScrollToHash } from '../hooks/useScrollToHash';

const CaseForms: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  
  useScrollToHash();
  
  // Tabs: Noun is default
  const [activeTab, setActiveTab] = useState<string>('noun');
  const [activeSubFilter, setActiveSubFilter] = useState<string>('all');
  const [frequencyFilter, setFrequencyFilter] = useState<string>('all');
  
  const [viewMode, setViewMode] = useState<'list' | 'table'>('list');
  const [displayNumber, setDisplayNumber] = useState<'singular' | 'plural' | 'both'>('both');

  // Reset subfilter when tab changes
  useEffect(() => {
    setActiveSubFilter('all');
  }, [activeTab]);

  const categories = [
    { id: 'noun', label: 'Nouns' },
    { id: 'adjective', label: 'Adjectives' },
    { id: 'pronoun', label: 'Pronouns' },
    { id: 'numeral', label: 'Numerals' }
  ];

  const frequencies = [
    { id: 'all', label: 'All' },
    { id: 'high', label: 'High Frequency' },
    { id: 'medium', label: 'Medium Frequency' },
    { id: 'low', label: 'Low Frequency' }
  ];

  const getSubFilters = () => {
    switch (activeTab) {
      case 'noun':
        return [
          { id: 'all', label: 'All Genders' },
          { id: 'masculine animate', label: 'Masc. Animate' },
          { id: 'masculine inanimate', label: 'Masc. Inanimate' },
          { id: 'feminine', label: 'Feminine' },
          { id: 'neuter', label: 'Neuter' },
        ];
      case 'adjective':
        return [
          { id: 'all', label: 'All Types' },
          { id: 'hard', label: 'Hard' },
          { id: 'soft', label: 'Soft' },
          { id: 'possessive', label: 'Possessive' },
          { id: 'masculine animate', label: 'Masc. Animate' },
          { id: 'masculine inanimate', label: 'Masc. Inanimate' },
          { id: 'feminine', label: 'Feminine' },
          { id: 'neuter', label: 'Neuter' },
        ];
      case 'pronoun':
        return [
          { id: 'all', label: 'All Types' },
          { id: 'personal', label: 'Personal' },
          { id: 'possessive', label: 'Possessive' },
          { id: 'demonstrative', label: 'Demonstrative' },
          { id: 'question', label: 'Questions' },
          { id: 'indeterminate', label: 'Indeterminate' },
        ];
      default:
        return [];
    }
  };

  // Helpers for Type Detection
  const getAdjectiveType = (model: string) => {
    if (model.startsWith('Petr') || model.startsWith('Jan')) return 'possessive';
    if (model.includes('moderní') || model.includes('první') || model.includes('jarní') || model.endsWith('í')) return 'soft';
    return 'hard';
  };

  const getPronounType = (model: string, notes?: string) => {
    const personal = ['já', 'ty', 'on', 'ona', 'ono', 'my', 'vy', 'oni'];
    const possessiveBase = ['můj', 'tvůj', 'jeho', 'její', 'náš', 'váš', 'jejich', 'svůj', 'moje'];
    const demonstrative = ['ten', 'ta', 'to'];
    const indeterminate = ['všechno', 'nic', 'všechen'];
    const questions = ['kdo', 'co', 'který', 'čí', 'jaký'];

    if (personal.includes(model)) return 'personal';
    if (possessiveBase.some(p => model.startsWith(p))) return 'possessive';
    if (demonstrative.includes(model)) return 'demonstrative';
    if (questions.some(q => model.startsWith(q))) return 'question';
    if (indeterminate.includes(model)) return 'indeterminate';
    
    // Fallback to notes
    const n = notes?.toLowerCase() || '';
    if (n.includes('personal')) return 'personal';
    if (n.includes('possessive')) return 'possessive';
    if (n.includes('demonstrative')) return 'demonstrative';
    if (n.includes('question') || n.includes('relative')) return 'question';
    if (n.includes('indeterminate')) return 'indeterminate';

    return 'other';
  };

  const getNumeralType = (model: string, notes?: string) => {
    const n = notes?.toLowerCase() || '';
    if (n.includes('ordinal')) return 'ordinal';
    if (n.includes('question')) return 'question';
    if (n.includes('collective')) return 'collective';
    return 'cardinal';
  };

  const personalOrder = ['já', 'ty', 'on', 'ona', 'ono', 'my', 'vy', 'oni'];

  // Helper to weight frequency for sorting
  const getFrequencyWeight = (f: string) => {
    const lower = f ? f.toLowerCase() : '';
    if (lower.includes('very high')) return 5;
    if (lower.includes('high')) return 4;
    if (lower.includes('medium')) return 3;
    if (lower.includes('very low')) return 1;
    if (lower.includes('low')) return 2;
    return 0;
  };

  // 1. Filter by Category & Search & Frequency & SubFilter
  const filteredData = caseFormsData.filter((item) => {
    const matchesSearch = 
      item.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.examples && item.examples.toLowerCase().includes(searchTerm.toLowerCase()));
    
    // Strict match for part of speech
    const matchesCategory = item.partOfSpeech === activeTab;

    // Filter by frequency
    let matchesFreq = true;
    if (frequencyFilter === 'high') matchesFreq = item.frequency.toLowerCase().includes('high'); // includes 'very high'
    else if (frequencyFilter === 'medium') matchesFreq = item.frequency.toLowerCase().includes('medium');
    else if (frequencyFilter === 'low') matchesFreq = item.frequency.toLowerCase().includes('low'); // includes 'very low'

    // Filter by Subcategory
    let matchesSub = true;
    if (activeSubFilter !== 'all') {
      if (activeTab === 'noun') {
         if (item.gender.toLowerCase() !== activeSubFilter) matchesSub = false;
      } else if (activeTab === 'adjective') {
         const type = getAdjectiveType(item.model);
         const gender = item.gender.toLowerCase();
         // If filter is one of the types
         if (['hard', 'soft', 'possessive'].includes(activeSubFilter)) {
           if (type !== activeSubFilter) matchesSub = false;
         } else {
           // If filter is a gender
           if (gender !== activeSubFilter) matchesSub = false;
         }
      } else if (activeTab === 'pronoun') {
         const pType = getPronounType(item.model, item.notes);
         if (pType !== activeSubFilter) matchesSub = false;
      }
    }

    return matchesSearch && matchesCategory && matchesFreq && matchesSub;
  });

  // 2. Sort Logic
  const sortedData = [...filteredData].sort((a, b) => {
    // Special sort for Personal Pronouns
    if (activeTab === 'pronoun') {
      const typeA = getPronounType(a.model, a.notes);
      const typeB = getPronounType(b.model, b.notes);
      
      // If both are personal, sort by defined order
      if (typeA === 'personal' && typeB === 'personal') {
         const idxA = personalOrder.indexOf(a.model);
         const idxB = personalOrder.indexOf(b.model);
         if (idxA !== -1 && idxB !== -1) return idxA - idxB;
      }
    }

    const freqA = getFrequencyWeight(a.frequency);
    const freqB = getFrequencyWeight(b.frequency);
    if (freqA !== freqB) return freqB - freqA; // Frequency Descending
    return a.model.localeCompare(b.model, 'cs'); // Alphabetical Ascending
  });

  // 3. Grouping logic for List View
  interface SectionConfig {
    id: string;
    label: string;
    color: string;
  }

  const getSectionConfigs = (tab: string): SectionConfig[] => {
    switch (tab) {
      case 'noun': return [
        { id: 'masculine animate', label: 'Masculine Animate', color: 'text-blue-700' },
        { id: 'masculine inanimate', label: 'Masculine Inanimate', color: 'text-cyan-700' },
        { id: 'feminine', label: 'Feminine', color: 'text-red-600' },
        { id: 'neuter', label: 'Neuter', color: 'text-green-600' },
        { id: 'other', label: 'Other', color: 'text-gray-600' }
      ];
      case 'adjective': return [
        { id: 'hard', label: 'Hard Adjectives', color: 'text-blue-700' },
        { id: 'soft', label: 'Soft Adjectives', color: 'text-green-600' },
        { id: 'possessive', label: 'Possessive Adjectives', color: 'text-purple-700' }
      ];
      case 'pronoun': return [
        { id: 'personal', label: 'Personal Pronouns', color: 'text-blue-700' },
        { id: 'possessive', label: 'Possessive Pronouns', color: 'text-purple-700' },
        { id: 'demonstrative', label: 'Demonstrative Pronouns', color: 'text-orange-600' },
        { id: 'question', label: 'Interrogative & Relative', color: 'text-cyan-700' },
        { id: 'indeterminate', label: 'Indeterminate', color: 'text-gray-600' },
        { id: 'other', label: 'Other', color: 'text-gray-600' }
      ];
      case 'numeral': return [
        { id: 'cardinal', label: 'Cardinal Numbers', color: 'text-blue-700' },
        { id: 'ordinal', label: 'Ordinal Numbers', color: 'text-green-600' },
        { id: 'collective', label: 'Collective Numbers', color: 'text-purple-700' },
        { id: 'question', label: 'Questions', color: 'text-cyan-700' },
        { id: 'other', label: 'Other', color: 'text-gray-600' }
      ];
      default: return [];
    }
  };

  const sections = getSectionConfigs(activeTab);
  
  // Group data based on active tab logic
  const groupedData: Record<string, CaseFormModel[]> = {};
  sections.forEach(s => groupedData[s.id] = []);

  sortedData.forEach(item => {
    let key = 'other';
    if (activeTab === 'noun') {
      const g = item.gender ? item.gender.toLowerCase() : '';
      if (g.includes('masculine animate')) key = 'masculine animate';
      else if (g.includes('masculine inanimate')) key = 'masculine inanimate';
      else if (g.includes('feminine')) key = 'feminine';
      else if (g.includes('neuter')) key = 'neuter';
    } else if (activeTab === 'adjective') {
      key = getAdjectiveType(item.model);
    } else if (activeTab === 'pronoun') {
      key = getPronounType(item.model, item.notes);
    } else if (activeTab === 'numeral') {
      key = getNumeralType(item.model, item.notes);
    }

    if (!groupedData[key]) {
      if (groupedData['other']) groupedData['other'].push(item);
    } else {
      groupedData[key].push(item);
    }
  });

  // Prepare data for Table View (Flattened based on sections)
  const tableData: CaseFormModel[] = [];
  sections.forEach(s => {
    if (groupedData[s.id]) {
      tableData.push(...groupedData[s.id]);
    }
  });

  const cases = [
    { name: 'Nominative', key: 'nominative' as keyof CaseFormModel['singularForms'] },
    { name: 'Genitive', key: 'genitive' as keyof CaseFormModel['singularForms'] },
    { name: 'Dative', key: 'dative' as keyof CaseFormModel['singularForms'] },
    { name: 'Accusative', key: 'accusative' as keyof CaseFormModel['singularForms'] },
    { name: 'Vocative', key: 'vocative' as keyof CaseFormModel['singularForms'] },
    { name: 'Locative', key: 'locative' as keyof CaseFormModel['singularForms'] },
    { name: 'Instrumental', key: 'instrumental' as keyof CaseFormModel['singularForms'] },
  ];

  // Component to render a single model card using UniversalSection
  const ModelCard: React.FC<{ item: CaseFormModel }> = ({ item }) => {
    // Generate pill tags
    const tags = (
      <div className="flex flex-wrap gap-2 mt-1">
         <span className={`text-[10px] px-2 py-0.5 rounded-full border uppercase font-bold tracking-wide 
           ${item.frequency.includes('high') ? 'bg-green-100 text-green-800 border-green-200' : 'bg-gray-100 text-gray-600 border-gray-200'}`}>
            {item.frequency}
         </span>
         {activeTab !== 'noun' && item.gender && item.gender !== 'n/a' && item.gender !== 'all' && (
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-800 border border-blue-100 uppercase">
              {item.gender}
            </span>
         )}
      </div>
    );

    return (
      <UniversalSection
        id={`model-${item.model}`}
        title={item.model}
        searchableTitle={`Declension Model: ${item.model}`}
        path="/grammar/case-forms"
        category="Grammar"
        collapsible={true}
        subTitle={tags}
        className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:border-blue-300 transition-colors mb-0"
        headerClass="bg-white p-4 hover:bg-gray-50 transition-colors"
        contentClass="p-6 bg-white border-t border-gray-100"
      >
          {item.notes && (
            <div className="mb-4 text-sm text-gray-600 bg-yellow-50 p-3 rounded border border-yellow-100 italic">
              Note: {item.notes}
            </div>
          )}

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-600 border-b border-gray-200">
                  <th className="py-2 px-3 font-semibold w-1/4">Case</th>
                  {(displayNumber === 'singular' || displayNumber === 'both') && (
                    <th className="py-2 px-3 font-semibold text-czech-blue">Singular</th>
                  )}
                  {(displayNumber === 'plural' || displayNumber === 'both') && (
                    <th className="py-2 px-3 font-semibold text-green-700">Plural</th>
                  )}
                  <th className="py-2 px-3 font-semibold hidden md:table-cell text-gray-400 font-normal italic">Question</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {cases.map((c, idx) => (
                  <tr key={c.key}>
                    <td className="py-2 px-3 font-medium text-gray-500">{idx + 1}. {c.name}</td>
                    
                    {(displayNumber === 'singular' || displayNumber === 'both') && (
                      <td className="py-2 px-3 font-bold text-czech-blue text-lg border-r border-gray-100 border-dashed md:border-none">
                        {item.singularForms[c.key]}
                      </td>
                    )}
                    
                    {(displayNumber === 'plural' || displayNumber === 'both') && (
                      <td className="py-2 px-3 font-bold text-green-700 text-lg">
                        {item.pluralForms[c.key]}
                      </td>
                    )}

                    <td className="py-2 px-3 text-gray-400 hidden md:table-cell italic text-xs">
                        {idx === 0 && "kdo, co?"}
                        {idx === 1 && "koho, čeho?"}
                        {idx === 2 && "komu, čemu?"}
                        {idx === 3 && "koho, co?"}
                        {idx === 4 && "oslovujeme"}
                        {idx === 5 && "(o) kom, čem?"}
                        {idx === 6 && "kým, čím?"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {item.examples && (
              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-2">Common Examples</h4>
                <p className="text-sm text-gray-700 leading-relaxed bg-gray-50 p-3 rounded border border-gray-100">
                  {item.examples}
                </p>
              </div>
          )}
      </UniversalSection>
    );
  };

  // Helper to render masonry grid
  const renderMasonry = (items: CaseFormModel[]) => {
    // Split items into two columns for desktop view
    const col1 = items.filter((_, i) => i % 2 === 0);
    const col2 = items.filter((_, i) => i % 2 !== 0);

    return (
      <>
        {/* Mobile View: Single Column */}
        <div className="flex flex-col gap-4 lg:hidden">
          {items.map((item, idx) => (
            <ModelCard key={`mob-${item.model}-${idx}`} item={item} />
          ))}
        </div>

        {/* Desktop View: Two Columns (Masonry) */}
        <div className="hidden lg:grid grid-cols-2 gap-4 items-start">
          <div className="flex flex-col gap-4">
            {col1.map((item, idx) => (
               <ModelCard key={`col1-${item.model}-${idx}`} item={item} />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {col2.map((item, idx) => (
               <ModelCard key={`col2-${item.model}-${idx}`} item={item} />
            ))}
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="w-full px-4 md:px-8 pb-12">
      <div className="max-w-[95%] mx-auto bg-white shadow-lg rounded-sm overflow-hidden min-h-[500px]">
        
        <div className="p-6 md:p-12">
          <button 
            onClick={() => navigate('/grammar')}
            className="flex items-center gap-2 text-gray-500 hover:text-czech-blue mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Grammar
          </button>

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <h2 className="text-4xl text-czech-blue font-hand mb-2">Declension Tables</h2>
              <p className="text-gray-600 leading-relaxed max-w-2xl">
                Master Czech case forms. Select a category below to explore models ordered by frequency.
              </p>
            </div>
            
            <div className="flex flex-col gap-2 items-end">
               {/* Number Toggle */}
               <div className="flex bg-gray-100 p-1 rounded-lg">
                <button
                  onClick={() => setDisplayNumber('singular')}
                  className={`px-3 py-1.5 rounded text-xs font-bold transition-all ${
                    displayNumber === 'singular' 
                      ? 'bg-white text-czech-blue shadow-sm' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Singular
                </button>
                <button
                  onClick={() => setDisplayNumber('plural')}
                  className={`px-3 py-1.5 rounded text-xs font-bold transition-all ${
                    displayNumber === 'plural' 
                      ? 'bg-white text-czech-blue shadow-sm' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Plural
                </button>
                <button
                  onClick={() => setDisplayNumber('both')}
                  className={`px-3 py-1.5 rounded text-xs font-bold transition-all ${
                    displayNumber === 'both' 
                      ? 'bg-white text-czech-blue shadow-sm' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Both
                </button>
              </div>

              {/* View Toggle */}
              <div className="flex bg-gray-100 p-1 rounded-lg">
                <button
                  onClick={() => setViewMode('list')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    viewMode === 'list' 
                      ? 'bg-white text-czech-blue shadow-sm' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <List size={18} />
                  List View
                </button>
                <button
                  onClick={() => setViewMode('table')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    viewMode === 'table' 
                      ? 'bg-white text-czech-blue shadow-sm' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Table size={18} />
                  Table
                </button>
              </div>
            </div>
          </div>
          
          {/* Controls Container */}
          <div className="flex flex-col gap-6 mb-8 border-b border-gray-100 pb-6">
             
             {/* Part of Speech Tabs (Large Pills) */}
             <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-6 py-3 rounded-full font-bold text-sm md:text-base transition-all shadow-sm border ${
                    activeTab === cat.id 
                      ? 'bg-czech-blue text-white border-czech-blue ring-2 ring-blue-200 ring-offset-1 transform scale-105' 
                      : 'bg-white text-gray-600 border-gray-200 hover:border-czech-blue hover:text-czech-blue'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Sub-category Filters (Smaller Pills) */}
            {getSubFilters().length > 0 && (
              <div className="flex flex-wrap gap-2">
                {getSubFilters().map(filter => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveSubFilter(filter.id)}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide transition-all border ${
                      activeSubFilter === filter.id
                        ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                        : 'bg-blue-50 text-blue-700 border-blue-100 hover:bg-blue-100'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            )}

            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="relative w-full md:w-2/3">
                <input 
                  type="text" 
                  placeholder={`Search ${activeTab} models or examples...`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-czech-blue focus:ring-1 focus:ring-czech-blue transition-all"
                />
                <Search className="absolute left-3 top-3.5 text-gray-400" size={18} />
              </div>

               {/* Frequency Filter Pills */}
               <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mr-1 hidden md:inline">Frequency:</span>
                {frequencies.map((freq) => (
                  <button
                    key={freq.id}
                    onClick={() => setFrequencyFilter(freq.id)}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all border ${
                      frequencyFilter === freq.id
                        ? 'bg-gray-800 text-white border-gray-800'
                        : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    {freq.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {viewMode === 'list' ? (
            <div className="space-y-8 animate-in fade-in duration-300">
              
              {sections.map((section) => {
                 const items = groupedData[section.id];
                 if (!items || items.length === 0) return null;

                 return (
                  <div key={section.id} className="mb-10">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className={`text-2xl font-bold ${section.color} font-hand tracking-wide`}>
                        {section.label}
                      </h3>
                      <div className={`flex-grow h-px bg-gradient-to-r from-gray-200 to-transparent`}></div>
                    </div>
                    {renderMasonry(items)}
                  </div>
                 );
              })}

              {sortedData.length === 0 && (
                 <div className="text-center py-12 text-gray-500 bg-gray-50 rounded-lg">
                   No {activeTab}s found matching your criteria.
                 </div>
              )}
            </div>
          ) : (
            <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-inner bg-gray-50">
              {tableData.length > 0 ? (
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th scope="col" className="sticky left-0 z-10 bg-gray-100 px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider border-r border-gray-200 shadow-sm min-w-[120px]">
                        Case
                      </th>
                      {tableData.map((model, idx) => (
                        <th key={`${model.model}-${idx}`} scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[140px] border-r border-gray-200/50 last:border-0">
                          <div className="font-bold text-czech-blue text-sm mb-1">{model.model}</div>
                          <div className="flex flex-col gap-0.5">
                            {model.gender && <span className="text-[10px] text-gray-500">{model.gender}</span>}
                             <span className={`text-[9px] px-1.5 py-0.5 rounded w-fit ${model.frequency.includes('high') ? 'bg-green-100 text-green-800' : 'bg-gray-200 text-gray-600'}`}>
                              {model.frequency}
                            </span>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {cases.map((c, idx) => (
                      <tr key={c.key} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                        <th className="sticky left-0 z-10 px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200 shadow-sm bg-inherit">
                          {idx + 1}. {c.name}
                        </th>
                        {tableData.map((model, mIdx) => {
                          let content;
                          if (displayNumber === 'singular') {
                            content = <span className="text-czech-blue">{model.singularForms[c.key]}</span>;
                          } else if (displayNumber === 'plural') {
                            content = <span className="text-green-700">{model.pluralForms[c.key]}</span>;
                          } else {
                            // Both
                            content = (
                              <div className="flex flex-col">
                                <span className="text-czech-blue">{model.singularForms[c.key]}</span>
                                <span className="text-green-700 text-xs mt-1">{model.pluralForms[c.key]}</span>
                              </div>
                            );
                          }

                          return (
                            <td key={`${model.model}-${mIdx}`} className="px-6 py-4 text-sm font-semibold border-r border-gray-100 last:border-0 whitespace-nowrap">
                              {content}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="text-center py-12 text-gray-500">
                   <p>No models to display in table for this category.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CaseForms;
