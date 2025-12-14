
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Map, MoreHorizontal, Box, User, ArrowRight, ArrowDown } from 'lucide-react';
import { 
  timePrepositions, 
  spaceMappings, 
  usageExamples, 
  spatialPairs, 
  miscPrepositions, 
  otherUses 
} from '../data/prepositions';
import UniversalSection from '../components/UniversalSection';
import { useScrollToHash } from '../hooks/useScrollToHash';

const Prepositions: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'time' | 'space' | 'misc'>('time');
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

          <h2 className="text-4xl text-czech-blue font-hand mb-6">Prepositions</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Essential prepositions for Time, Space, and other uses, categorized by case and meaning.
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap gap-4 mb-8 border-b border-gray-100 pb-1">
            <button 
              onClick={() => setActiveTab('time')}
              className={`flex items-center gap-2 px-6 py-3 rounded-t-lg font-bold transition-all border-b-2 ${
                activeTab === 'time' ? 'border-czech-blue text-czech-blue bg-blue-50' : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Clock size={18} /> Time
            </button>
            <button 
              onClick={() => setActiveTab('space')}
              className={`flex items-center gap-2 px-6 py-3 rounded-t-lg font-bold transition-all border-b-2 ${
                activeTab === 'space' ? 'border-czech-blue text-czech-blue bg-blue-50' : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Map size={18} /> Space
            </button>
            <button 
              onClick={() => setActiveTab('misc')}
              className={`flex items-center gap-2 px-6 py-3 rounded-t-lg font-bold transition-all border-b-2 ${
                activeTab === 'misc' ? 'border-czech-blue text-czech-blue bg-blue-50' : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <MoreHorizontal size={18} /> Miscellaneous
            </button>
          </div>

          <div className="animate-in fade-in duration-300">
            {activeTab === 'time' && <TimeSection />}
            {activeTab === 'space' && <SpaceSection />}
            {activeTab === 'misc' && <MiscSection />}
          </div>

        </div>
      </div>
    </div>
  );
};

const TimeSection: React.FC = () => (
  <UniversalSection
    id="prep-time"
    title="Time Prepositions"
    searchableTitle="Time Prepositions"
    path="/grammar/prepositions"
    category="Grammar"
    collapsible={false}
    icon={<Clock size={24} className="text-czech-red" />}
  >
    <div className="overflow-x-auto border border-gray-200 rounded-lg">
      <table className="w-full text-left text-sm">
        <thead className="bg-gray-50 text-gray-500 uppercase font-bold text-xs">
          <tr>
            <th className="px-4 py-3 border-b">Preposition</th>
            <th className="px-4 py-3 border-b">Case</th>
            <th className="px-4 py-3 border-b">Example</th>
            <th className="px-4 py-3 border-b">English</th>
            <th className="px-4 py-3 border-b">Translation</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {timePrepositions.map((item, idx) => (
            <tr key={idx} className="hover:bg-gray-50/50">
              <td className="px-4 py-3 font-bold text-czech-blue">{item.prep}</td>
              <td className="px-4 py-3 text-gray-500 text-xs">{item.case}</td>
              <td className="px-4 py-3 font-medium">{item.example}</td>
              <td className="px-4 py-3 text-gray-700">{item.english}</td>
              <td className="px-4 py-3 text-gray-500 italic">{item.englishEx}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </UniversalSection>
);

const SpaceSection: React.FC = () => (
  <div className="space-y-12">
    
    {/* Triad Mapping */}
    <UniversalSection
        id="prep-space-cases"
        title="Summary of Cases (Locational vs Directional)"
        searchableTitle="Locational vs Directional Cases"
        path="/grammar/prepositions"
        category="Grammar"
        collapsible={false}
        icon={<Map size={24} className="text-czech-blue" />}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {spaceMappings.map((map, idx) => (
          <div key={idx} className="border border-gray-200 rounded-xl p-6 bg-gray-50 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10">
               {map.icon === 'box' ? <Box size={100} /> : <User size={100} />}
             </div>
             <h4 className="text-sm font-bold uppercase text-gray-400 mb-4">{map.type}</h4>
             
             <div className="flex flex-col gap-4 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500 uppercase">Kde? (Location)</span>
                    <span className="text-xl font-bold text-czech-blue">{map.locational.prep}</span>
                    <span className="text-xs font-mono bg-blue-100 text-blue-800 px-1 rounded w-fit">{map.locational.case}</span>
                  </div>
                  <ArrowRight className="text-gray-300" />
                  <div className="flex flex-col items-center">
                    <span className="text-xs text-gray-500 uppercase">Kam? (Direction)</span>
                    <span className="text-xl font-bold text-green-600">{map.directional.prep}</span>
                    <span className="text-xs font-mono bg-green-100 text-green-800 px-1 rounded w-fit">{map.directional.case}</span>
                  </div>
                  <ArrowRight className="text-gray-300" />
                  <div className="flex flex-col items-end">
                    <span className="text-xs text-gray-500 uppercase">Odkud? (Origin)</span>
                    <span className="text-xl font-bold text-red-600">{map.origin.prep}</span>
                    <span className="text-xs font-mono bg-red-100 text-red-800 px-1 rounded w-fit">{map.origin.case}</span>
                  </div>
                </div>
             </div>
          </div>
        ))}
      </div>
    </UniversalSection>

    {/* V/DO vs NA Examples */}
    <UniversalSection
        id="prep-usage-v-na"
        title="Usage of V/DO and NA"
        searchableTitle="Usage of V/DO vs NA"
        path="/grammar/prepositions"
        category="Grammar"
        collapsible={false}
    >
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Closed */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-100 px-4 py-3 border-b border-gray-200">
              <h4 className="font-bold text-gray-700">{usageExamples.closed.title}</h4>
              <p className="text-xs text-gray-500 mt-1">{usageExamples.closed.triad}</p>
            </div>
            <div className="p-4 bg-white grid grid-cols-1 gap-2">
               {usageExamples.closed.items.map((item, i) => (
                 <div key={i} className="flex justify-between items-center text-sm border-b border-gray-50 pb-2 last:border-0 last:pb-0">
                    <div className="font-bold text-gray-400 w-1/3">{item.noun}</div>
                    <div className="flex items-center gap-2 w-2/3 justify-end">
                      <span className="text-green-600 font-medium">{item.dir}</span>
                      <ArrowRight size={12} className="text-gray-300" />
                      <span className="text-blue-600 font-medium">{item.loc}</span>
                    </div>
                 </div>
               ))}
            </div>
          </div>

          {/* Open */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-100 px-4 py-3 border-b border-gray-200">
              <h4 className="font-bold text-gray-700">{usageExamples.open.title}</h4>
              <p className="text-xs text-gray-500 mt-1">{usageExamples.open.triad}</p>
            </div>
            <div className="p-4 bg-white grid grid-cols-1 gap-2">
               {usageExamples.open.items.map((item, i) => (
                 <div key={i} className="flex justify-between items-center text-sm border-b border-gray-50 pb-2 last:border-0 last:pb-0">
                    <div className="font-bold text-gray-400 w-1/3">{item.noun}</div>
                    <div className="flex items-center gap-2 w-2/3 justify-end">
                      <span className="text-green-600 font-medium">{item.dir}</span>
                      <ArrowRight size={12} className="text-gray-300" />
                      <span className="text-blue-600 font-medium">{item.loc}</span>
                    </div>
                 </div>
               ))}
            </div>
          </div>

       </div>
    </UniversalSection>

    {/* Static vs Dynamic Table */}
    <UniversalSection
        id="prep-static-dynamic"
        title="Location (Kde?) vs Direction (Kam?)"
        searchableTitle="Static vs Dynamic Prepositions"
        path="/grammar/prepositions"
        category="Grammar"
        collapsible={false}
    >
      <div className="overflow-x-auto border border-gray-200 rounded-lg">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 text-gray-500 uppercase font-bold text-xs">
            <tr>
              <th className="px-4 py-3 border-b w-1/2 border-r">Kde? (Stationary)</th>
              <th className="px-4 py-3 border-b w-1/2">Kam? (Directional)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {spatialPairs.map((pair, idx) => (
              <tr key={idx} className="hover:bg-gray-50/50">
                <td className="px-4 py-3 border-r border-gray-100">
                   <div className="flex justify-between items-center">
                      <div>
                        <span className="font-bold text-lg text-czech-blue block">{pair.static.prep}</span>
                        <span className="text-xs text-gray-400 font-mono">{pair.static.case}</span>
                      </div>
                      <span className="text-gray-600 font-medium italic">{pair.static.meaning}</span>
                   </div>
                </td>
                <td className="px-4 py-3">
                   <div className="flex justify-between items-center">
                      <div>
                        <span className="font-bold text-lg text-green-600 block">{pair.dynamic.prep}</span>
                        <span className="text-xs text-gray-400 font-mono">{pair.dynamic.case}</span>
                      </div>
                      <span className="text-gray-600 font-medium italic">{pair.dynamic.meaning}</span>
                   </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </UniversalSection>

  </div>
);

const MiscSection: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
     
     <UniversalSection
        id="prep-misc"
        title="Miscellaneous"
        searchableTitle="Miscellaneous Prepositions"
        path="/grammar/prepositions"
        category="Grammar"
        collapsible={false}
     >
        <div className="overflow-hidden border border-gray-200 rounded-lg">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-500 uppercase font-bold text-xs">
              <tr>
                <th className="px-4 py-3 border-b">Preposition</th>
                <th className="px-4 py-3 border-b">Case</th>
                <th className="px-4 py-3 border-b">Meaning</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {miscPrepositions.map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-bold text-czech-blue">{item.prep}</td>
                  <td className="px-4 py-3 text-xs font-mono text-gray-500">{item.case}</td>
                  <td className="px-4 py-3">{item.meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
     </UniversalSection>

     <UniversalSection
        id="prep-other-uses"
        title="Other Uses (o, v, za, z)"
        searchableTitle="Other Preposition Uses"
        path="/grammar/prepositions"
        category="Grammar"
        collapsible={false}
     >
        <div className="overflow-hidden border border-gray-200 rounded-lg">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-500 uppercase font-bold text-xs">
              <tr>
                <th className="px-4 py-3 border-b">Preposition</th>
                <th className="px-4 py-3 border-b">Case</th>
                <th className="px-4 py-3 border-b">Context/Meaning</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {otherUses.map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-bold text-czech-blue">{item.prep}</td>
                  <td className="px-4 py-3 text-xs font-mono text-gray-500">{item.case}</td>
                  <td className="px-4 py-3 italic text-gray-600">{item.meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
     </UniversalSection>

  </div>
);

export default Prepositions;
