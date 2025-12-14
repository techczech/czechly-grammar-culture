
import React, { useState } from 'react';
import { Search, ArrowLeft, GitBranch, Info } from 'lucide-react';
import { conjugationModelsData, ConjugationRow } from '../data/conjugationModels';
import { useNavigate } from 'react-router-dom';
import UniversalSection from '../components/UniversalSection';
import { useScrollToHash } from '../hooks/useScrollToHash';

const ConjugationModels: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  
  useScrollToHash();

  // Group data by model
  const groups: Record<string, ConjugationRow[]> = {};
  
  // Filter and group
  conjugationModelsData.forEach(item => {
    const matchesSearch = 
      item.examples.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.infinitive.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.present.toLowerCase().includes(searchTerm.toLowerCase());
      
    if (matchesSearch) {
      if (!groups[item.model]) {
        groups[item.model] = [];
      }
      groups[item.model].push(item);
    }
  });

  const modelOrder = ["-e", "-ne", "-je", "-í", "-á"];

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

          <h2 className="text-4xl text-czech-blue font-hand mb-6">Verb Conjugation Models</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            A classification of Czech verbs based on their present tense endings, helping to predict conjugation patterns.
          </p>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-4 border-b border-gray-100">
            <h3 className="text-xl text-gray-600 font-medium flex items-center gap-2">
              <GitBranch className="text-czech-blue" size={20} />
              Model Patterns
            </h3>
            <div className="relative w-full md:w-64">
              <input 
                type="text" 
                placeholder="Search verbs or endings..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-czech-blue focus:ring-1 focus:ring-czech-blue transition-all"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
          </div>

          <div className="space-y-10">
             {Object.keys(groups).length > 0 ? (
               modelOrder.filter(model => groups[model]).map(model => (
                 <UniversalSection
                    key={model}
                    id={`model-${model}`}
                    title={
                        <span className="bg-czech-blue text-white px-3 py-1 rounded text-lg font-bold shadow-sm font-mono inline-block">
                            {model}
                        </span>
                    }
                    searchableTitle={`Model ${model}`}
                    subTitle="Class (Present tense stem)"
                    path="/grammar/conjugation-models"
                    category="Grammar"
                    collapsible={false}
                 >
                   <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
                     <table className="w-full text-sm text-left">
                       <thead className="bg-gray-50 text-gray-500 uppercase font-bold text-xs">
                         <tr>
                            <th className="px-4 py-3 border-b border-gray-200 w-1/4">Present (3rd Sg)</th>
                            <th className="px-4 py-3 border-b border-gray-200 w-1/6">Past</th>
                            <th className="px-4 py-3 border-b border-gray-200 w-1/4">Infinitive</th>
                            <th className="px-4 py-3 border-b border-gray-200">Examples</th>
                         </tr>
                       </thead>
                       <tbody className="divide-y divide-gray-100">
                         {groups[model].map((row, idx) => (
                           <tr key={idx} className="hover:bg-blue-50/50 transition-colors">
                             <td className="px-4 py-3 font-medium text-czech-blue">{row.present}</td>
                             <td className="px-4 py-3 text-gray-700">{row.past}</td>
                             <td className="px-4 py-3 font-mono text-xs md:text-sm bg-gray-50/50 text-gray-800 font-bold">{row.infinitive}</td>
                             <td className="px-4 py-3 text-gray-600 italic leading-relaxed">{row.examples}</td>
                           </tr>
                         ))}
                       </tbody>
                     </table>
                   </div>
                 </UniversalSection>
               ))
             ) : (
                <div className="text-center py-12 text-gray-500 bg-gray-50 rounded-lg">
                  No models found matching "{searchTerm}"
                </div>
             )}
          </div>

          <div className="mt-8 bg-blue-50 p-4 rounded-lg flex gap-3 text-sm text-blue-900">
            <Info className="flex-shrink-0" size={20} />
            <div>
              <span className="font-bold block mb-1">Note:</span>
              <p>C = Consonant, V = Vowel. This table groups verbs by their 3rd person singular present tense ending (Model), which helps determine the conjugation pattern.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConjugationModels;
