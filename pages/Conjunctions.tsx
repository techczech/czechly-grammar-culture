
import React, { useState } from 'react';
import { Search, ArrowLeft, Hash } from 'lucide-react';
import { conjunctionsData } from '../data/conjunctions';
import { useNavigate } from 'react-router-dom';
import UniversalSection from '../components/UniversalSection';
import { useScrollToHash } from '../hooks/useScrollToHash';

const Conjunctions: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  
  useScrollToHash();

  // Filter data based on search
  const filteredData = conjunctionsData.map(category => {
    const filteredItems = category.items.filter(item => 
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.english.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return { ...category, items: filteredItems };
  }).filter(category => category.items.length > 0);

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

          <h2 className="text-4xl text-czech-blue font-hand mb-6">Common Conjunctions</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Connectors that link words, phrases, and clauses. Essential for building complex sentences.
          </p>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-4 border-b border-gray-100">
            <h3 className="text-xl text-gray-600 font-medium flex items-center gap-2">
              <Hash className="text-purple-600" size={20} />
              Categories
            </h3>
            <div className="relative w-full md:w-64">
              <input 
                type="text" 
                placeholder="Search conjunctions..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-czech-blue focus:ring-1 focus:ring-czech-blue transition-all"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
          </div>

          <div className="space-y-12">
             {filteredData.length > 0 ? (
               filteredData.map((category, idx) => (
                 <UniversalSection
                    key={idx}
                    id={`cat-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                    title={category.title}
                    searchableTitle={category.title}
                    path="/grammar/conjunctions"
                    category="Grammar"
                    collapsible={false}
                    className="mb-8"
                    icon={<Hash size={24} className="text-purple-600" />}
                 >
                   <div className="grid grid-cols-1 gap-6">
                     {category.items.map((item, i) => (
                       <div key={i} className="border border-gray-200 rounded-lg overflow-hidden bg-white hover:border-purple-300 transition-colors shadow-sm">
                         <div className="flex flex-col md:flex-row">
                           {/* Word & Meaning */}
                           <div className="w-full md:w-1/4 bg-gray-50 p-5 border-b md:border-b-0 md:border-r border-gray-100 flex flex-col justify-center">
                              <h4 className="text-2xl font-bold text-czech-blue font-hand mb-1">{item.term}</h4>
                              <p className="text-gray-600 font-medium">{item.english}</p>
                           </div>

                           {/* Examples */}
                           <div className="w-full md:w-3/4 p-5 flex flex-col justify-center gap-4">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <span className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-1 block">Czech Example</span>
                                  <div className="text-gray-800 whitespace-pre-line leading-relaxed italic">
                                    {item.czechExample}
                                  </div>
                                </div>
                                <div>
                                  <span className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-1 block">Translation</span>
                                  <div className="text-gray-500 whitespace-pre-line leading-relaxed">
                                    {item.englishExample}
                                  </div>
                                </div>
                              </div>
                           </div>
                         </div>
                       </div>
                     ))}
                   </div>
                 </UniversalSection>
               ))
             ) : (
                <div className="text-center py-12 text-gray-500 bg-gray-50 rounded-lg">
                  No conjunctions found matching "{searchTerm}"
                </div>
             )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Conjunctions;
