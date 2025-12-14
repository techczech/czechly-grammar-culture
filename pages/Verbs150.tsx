
import React, { useState } from 'react';
import { Search, ArrowLeft } from 'lucide-react';
import { verbs150Data } from '../data/verbs150';
import { useNavigate } from 'react-router-dom';
import UniversalSection from '../components/UniversalSection';
import { useScrollToHash } from '../hooks/useScrollToHash';

const Verbs150: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  
  useScrollToHash();

  const filteredVerbs = verbs150Data.filter((item) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      item.infinitive.toLowerCase().includes(searchLower) ||
      item.english.toLowerCase().includes(searchLower)
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

          <h2 className="text-4xl text-czech-blue font-hand mb-6">150 Common Czech Verbs</h2>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-2 border-b border-gray-100">
            <h3 className="text-xl text-gray-600 font-medium flex items-center gap-2">
              Browse Verbs
            </h3>
            <div className="relative w-full md:w-64">
              <input 
                type="text" 
                placeholder="Search verbs or English meanings..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-czech-blue focus:ring-1 focus:ring-czech-blue transition-all"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
          </div>

          <div className="space-y-4">
            {filteredVerbs.length > 0 ? (
              filteredVerbs.map((item) => (
                <UniversalSection
                  key={item.infinitive}
                  id={`verb-${item.infinitive}`}
                  title={item.infinitive}
                  searchableTitle={`Verb: ${item.infinitive}`}
                  subTitle={`(${item.english})`}
                  path="/grammar/verbs150"
                  category="Verbs"
                  collapsible={true}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Conjugation Column */}
                    <div>
                      <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-4 border-b pb-1">Conjugation (Present)</h4>
                      <div className="grid grid-cols-2 gap-y-2 text-sm">
                        <div className="text-gray-500">1st Sg (Já):</div>
                        <div className="font-medium text-gray-800">{item.firstSingular}</div>
                        
                        <div className="text-gray-500">3rd Sg (On/Ona):</div>
                        <div className="font-medium text-gray-800">{item.thirdSingular}</div>
                        
                        <div className="text-gray-500">3rd Pl (Oni):</div>
                        <div className="font-medium text-gray-800">{item.thirdPlural}</div>
                      </div>
                      
                       <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider mt-6 mb-4 border-b pb-1">Forms</h4>
                       <div className="grid grid-cols-2 gap-y-2 text-sm">
                        <div className="text-gray-500">Past:</div>
                        <div className="font-medium text-gray-800">{item.past}</div>
                        
                        <div className="text-gray-500">Imperative:</div>
                        <div className="font-medium text-gray-800">{item.imperative}</div>

                        <div className="text-gray-500">Passive:</div>
                        <div className="font-medium text-gray-800">{item.passive}</div>
                       </div>
                    </div>

                    {/* Usage Column */}
                    <div>
                      <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-4 border-b pb-1">Usage & Grammar</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-500">Aspect:</span>
                          <span className="font-bold text-czech-blue bg-blue-50 px-2 rounded">{item.aspect}</span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span className="text-gray-500">Aspect Pair:</span>
                          <span className="font-medium">{item.aspectPair || "-"}</span>
                        </div>

                        <div className="flex flex-col mt-2">
                          <span className="text-gray-500 mb-1">Object Case:</span>
                          <span className="font-medium bg-gray-100 p-2 rounded block w-full">{item.objectCase || "None"}</span>
                        </div>

                        {item.commonPrefixes && item.commonPrefixes.length > 0 && item.commonPrefixes[0] !== "" && (
                          <div className="mt-4">
                            <span className="text-gray-500 block mb-2">Common Prefixed Forms:</span>
                            <div className="flex flex-wrap gap-2">
                              {item.commonPrefixes.map((p, idx) => (
                                <span key={idx} className="bg-yellow-50 text-yellow-800 border border-yellow-100 px-2 py-1 rounded text-xs">
                                  {p}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </UniversalSection>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500 bg-gray-50 rounded-lg">
                No verbs found matching "{searchTerm}"
              </div>
            )}
          </div>
          
           <p className="text-xs text-gray-400 mt-6 text-center">
            '-' endings indicate suffixes added to the stem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Verbs150;
