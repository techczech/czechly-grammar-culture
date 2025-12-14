
import React, { useState } from 'react';
import { Search, ArrowLeft } from 'lucide-react';
import { verbPrefixData } from '../data/verbPrefixes';
import { useNavigate } from 'react-router-dom';
import UniversalSection from '../components/UniversalSection';
import { useScrollToHash } from '../hooks/useScrollToHash';

const VerbPrefixes: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  
  useScrollToHash();

  const filteredPrefixes = verbPrefixData.filter((item) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      item.prefix.toLowerCase().includes(searchLower) ||
      item.meanings.some(m => m.toLowerCase().includes(searchLower)) ||
      (item.relatedPreposition && item.relatedPreposition.toLowerCase().includes(searchLower))
    );
  });

  return (
    <div className="w-full px-4 md:px-8 pb-12">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-sm overflow-hidden min-h-[500px]">
        
        <div className="p-8 md:p-12">
          <button 
            onClick={() => navigate('/grammar')}
            className="flex items-center gap-2 text-gray-500 hover:text-czech-blue mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Grammar
          </button>

          <h2 className="text-4xl text-czech-blue font-hand mb-6">Verb Prefix Database</h2>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-2 border-b border-gray-100">
            <h3 className="text-xl text-gray-600 font-medium flex items-center gap-2">
              Explore Czech Prefixes
            </h3>
            <div className="relative w-full md:w-64">
              <input 
                type="text" 
                placeholder="Search prefixes or meanings..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-czech-blue focus:ring-1 focus:ring-czech-blue transition-all"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
          </div>

          <div className="space-y-4">
            {filteredPrefixes.length > 0 ? (
              filteredPrefixes.map((item) => (
                <UniversalSection
                  key={item.prefix}
                  id={`prefix-${item.prefix}`}
                  title={<span className="text-czech-blue">{item.prefix}-</span>}
                  searchableTitle={`Prefix ${item.prefix}-`}
                  subTitle={`${item.meanings[0]} ${item.meanings.length > 1 ? `+ ${item.meanings.length - 1} more` : ''}`}
                  path="/grammar/prefixes"
                  category="Verbs"
                  collapsible={true}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div>
                      <div className="mb-6">
                        <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-2">Meanings</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-800">
                          {item.meanings.map((m, idx) => (
                            <li key={idx}>{m}</li>
                          ))}
                        </ul>
                      </div>

                      {item.relatedPreposition && (
                        <div className="mb-6">
                          <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-2">Related Preposition</h4>
                          <span className="inline-block bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                            {item.relatedPreposition}
                          </span>
                        </div>
                      )}

                      {item.notes && (
                        <div className="mb-6">
                          <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-2">Notes</h4>
                          <p className="text-sm text-gray-600 italic bg-yellow-50 p-3 rounded">{item.notes}</p>
                        </div>
                      )}
                    </div>

                    {/* Right Column */}
                    <div>
                      <div className="mb-6">
                        <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-2">Examples</h4>
                        <ul className="space-y-2">
                          {item.examples.map((ex, idx) => (
                            <li key={idx} className="text-gray-700 text-sm border-l-2 border-czech-red pl-3 py-1 bg-gray-50 rounded-r">
                              "{ex}"
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <div className="flex justify-between items-baseline mb-2">
                          <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider">Common Verbs</h4>
                          <span className="text-xs text-gray-400">Freq: {item.frequency} IPM</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {item.commonVerbs.map((verb, idx) => (
                            <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs hover:bg-gray-200 transition-colors">
                              {verb}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </UniversalSection>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500 bg-gray-50 rounded-lg">
                No prefixes found matching "{searchTerm}"
              </div>
            )}
          </div>
          
          <p className="text-xs text-gray-400 mt-6 text-center">
            Data derived from corpus queries showing frequency per million (IPM).
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerbPrefixes;
