
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Edit3, MapPin, BarChart3, Clock, ArrowRight } from 'lucide-react';
import { 
  mannerFormation, 
  formationRules, 
  quantityAdverbs, 
  comparisonAdverbs, 
  placeAdverbs, 
  timeAdverbs 
} from '../data/adverbs';
import UniversalSection from '../components/UniversalSection';
import { useScrollToHash } from '../hooks/useScrollToHash';

const Adverbs: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'formation' | 'types' | 'comparison'>('formation');
  useScrollToHash();

  return (
    <div className="w-full px-4 md:px-8 pb-12">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-sm overflow-hidden min-h-[500px]">
        <div className="p-8 md:p-12">
          
          <button 
            onClick={() => navigate('/grammar')}
            className="flex items-center gap-2 text-gray-500 hover:text-czech-blue mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Grammar
          </button>

          <h2 className="text-4xl text-czech-blue font-hand mb-6">Adverbs</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Words describing manner, place, time, or quantity. Most Czech adverbs are derived from adjectives.
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap gap-4 mb-8 border-b border-gray-100 pb-1">
            <button 
              onClick={() => setActiveTab('formation')}
              className={`flex items-center gap-2 px-6 py-3 rounded-t-lg font-bold transition-all border-b-2 ${
                activeTab === 'formation' ? 'border-czech-blue text-czech-blue bg-blue-50' : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Edit3 size={18} /> Formation (Manner)
            </button>
            <button 
              onClick={() => setActiveTab('types')}
              className={`flex items-center gap-2 px-6 py-3 rounded-t-lg font-bold transition-all border-b-2 ${
                activeTab === 'types' ? 'border-czech-blue text-czech-blue bg-blue-50' : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <MapPin size={18} /> Place, Time & Quantity
            </button>
            <button 
              onClick={() => setActiveTab('comparison')}
              className={`flex items-center gap-2 px-6 py-3 rounded-t-lg font-bold transition-all border-b-2 ${
                activeTab === 'comparison' ? 'border-czech-blue text-czech-blue bg-blue-50' : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <BarChart3 size={18} /> Comparison
            </button>
          </div>

          <div className="animate-in fade-in duration-300">
            {activeTab === 'formation' && <FormationSection />}
            {activeTab === 'types' && <TypesSection />}
            {activeTab === 'comparison' && <ComparisonSection />}
          </div>

        </div>
      </div>
    </div>
  );
};

const FormationSection: React.FC = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    
    <UniversalSection
        id="adv-derivation"
        title="Derivation from Adjectives"
        searchableTitle="Adverb Derivation"
        path="/grammar/adverbs"
        category="Grammar"
        collapsible={false}
    >
      <div className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-500 uppercase font-bold text-xs">
            <tr>
              <th className="px-4 py-3 border-b">Jaký? (Adjective)</th>
              <th className="px-4 py-3 border-b">Change</th>
              <th className="px-4 py-3 border-b">Jak? (Adverb)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {mannerFormation.map((item, idx) => (
              <tr key={idx} className="hover:bg-white transition-colors">
                <td className="px-4 py-3 text-gray-700 font-medium">{item.adjective}</td>
                <td className="px-4 py-3 text-xs text-gray-500 font-mono">{item.suffixChange || "-"}</td>
                <td className="px-4 py-3 text-czech-blue font-bold">{item.adverb}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </UniversalSection>

    <UniversalSection
        id="adv-rules"
        title="Formation Rules"
        searchableTitle="Adverb Formation Rules"
        path="/grammar/adverbs"
        category="Grammar"
        collapsible={false}
    >
      <div className="space-y-4">
        {formationRules.map((rule, idx) => (
          <div key={idx} className="p-4 bg-blue-50 border border-blue-100 rounded-lg">
            <h4 className="font-bold text-czech-blue mb-1">{rule.title}</h4>
            <p className="text-gray-700 text-sm leading-relaxed">{rule.text}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-100 rounded-lg text-sm text-gray-700">
        <p className="font-bold text-yellow-800 mb-2">Did you know?</p>
        Most adverbs of manner answer the question <strong>Jak? (How?)</strong>.
      </div>
    </UniversalSection>
  </div>
);

const TypesSection: React.FC = () => (
  <div className="space-y-12">
    
    {/* Place */}
    <UniversalSection
        id="adv-place"
        title="Place (Kde? & Kam?)"
        searchableTitle="Place Adverbs"
        path="/grammar/adverbs"
        category="Grammar"
        collapsible={false}
        icon={<MapPin size={24} className="text-czech-blue" />}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {placeAdverbs.map((item, idx) => (
          <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">{item.english}</div>
            <div className="flex justify-between items-center">
              <div>
                <span className="text-xs text-gray-500 block mb-0.5">Location</span>
                <span className="text-lg font-bold text-czech-blue">{item.location}</span>
              </div>
              <ArrowRight className="text-gray-300" size={16} />
              <div className="text-right">
                <span className="text-xs text-gray-500 block mb-0.5">Direction</span>
                <span className="text-lg font-bold text-green-600">{item.direction}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </UniversalSection>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Time */}
      <UniversalSection
        id="adv-time"
        title="Time (Kdy?)"
        searchableTitle="Time Adverbs"
        path="/grammar/adverbs"
        category="Grammar"
        collapsible={false}
        icon={<Clock size={24} className="text-czech-red" />}
      >
        <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
          <div className="flex flex-wrap gap-2">
            {timeAdverbs.map((item, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded px-3 py-2 flex flex-col items-center flex-grow shadow-sm">
                 <span className="font-bold text-gray-800">{item.czech}</span>
                 <span className="text-xs text-gray-500 italic">{item.english}</span>
              </div>
            ))}
          </div>
        </div>
      </UniversalSection>

      {/* Quantity */}
      <UniversalSection
        id="adv-quantity"
        title="Quantity (Kolik?)"
        searchableTitle="Quantity Adverbs"
        path="/grammar/adverbs"
        category="Grammar"
        collapsible={false}
        icon={<BarChart3 size={24} className="text-purple-600" />}
      >
        <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
          <ul className="space-y-3">
            {quantityAdverbs.map((item, idx) => (
              <li key={idx} className="flex justify-between items-center border-b border-gray-200 last:border-0 pb-2 last:pb-0">
                <span className="font-bold text-purple-700 text-lg">{item.czech}</span>
                <span className="text-gray-600">{item.english}</span>
              </li>
            ))}
          </ul>
        </div>
      </UniversalSection>
    </div>
  </div>
);

const ComparisonSection: React.FC = () => (
  <div className="space-y-10">
    <UniversalSection
        id="adv-comparison-forms"
        title="Comparative & Superlative Forms"
        searchableTitle="Adverb Comparison Forms"
        path="/grammar/adverbs"
        category="Grammar"
        collapsible={false}
    >
      <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 text-gray-500 uppercase font-bold text-xs">
            <tr>
              <th className="px-6 py-4 border-b">Base</th>
              <th className="px-6 py-4 border-b text-blue-700">Comparative (More...)</th>
              <th className="px-6 py-4 border-b text-green-700">Superlative (Most...)</th>
              <th className="px-6 py-4 border-b">English</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {comparisonAdverbs.map((item, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-800">{item.base}</td>
                <td className="px-6 py-4 font-bold text-blue-700">{item.comparative}</td>
                <td className="px-6 py-4 font-bold text-green-700">{item.superlative}</td>
                <td className="px-6 py-4 text-gray-500 italic">{item.english}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </UniversalSection>

    <UniversalSection
        id="adv-comparison-usage"
        title="Making Comparisons"
        searchableTitle="Adverb Comparison Usage"
        path="/grammar/adverbs"
        category="Grammar"
        collapsible={false}
        className="bg-gray-50 border border-gray-200 rounded-xl p-8"
        headerClass="p-0 pb-4 bg-transparent border-none"
        contentClass="p-0"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
           <h4 className="font-bold text-czech-blue mb-2">Structure</h4>
           <ul className="space-y-3 text-gray-700">
             <li className="flex items-center gap-2">
               <span className="font-bold bg-blue-100 text-blue-800 px-2 rounded">více</span>
               <span>... než (more ... than)</span>
             </li>
             <li className="flex items-center gap-2">
               <span className="font-bold bg-green-100 text-green-800 px-2 rounded">nejvíce</span>
               <span>... z (the most ... of)</span>
             </li>
           </ul>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
           <h4 className="font-bold text-czech-blue mb-2">Adjective vs Adverb Usage</h4>
           <div className="space-y-4">
             <div>
               <div className="text-xs uppercase font-bold text-gray-400 mb-1">Adjective + Noun</div>
               <p className="text-gray-800">Tomáš je <span className="font-bold text-blue-600">lepší</span> student než já.</p>
               <p className="text-xs text-gray-500 italic">Tomáš is a better student than I.</p>
             </div>
             <div className="border-t border-gray-100 pt-3">
               <div className="text-xs uppercase font-bold text-gray-400 mb-1">Adverb + Verb</div>
               <p className="text-gray-800">Učí se <span className="font-bold text-blue-600">lépe</span> než já.</p>
               <p className="text-xs text-gray-500 italic">He learns better than I do.</p>
             </div>
           </div>
        </div>

      </div>
    </UniversalSection>
  </div>
);

export default Adverbs;
