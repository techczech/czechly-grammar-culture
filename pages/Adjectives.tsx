
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Layers, BarChart3, Edit3, UserCheck } from 'lucide-react';
import { adjectivesData } from '../data/adjectives';
import UniversalSection from '../components/UniversalSection';
import { useScrollToHash } from '../hooks/useScrollToHash';

const Adjectives: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>('hard');
  
  useScrollToHash();

  const activeData = adjectivesData.find(a => a.id === activeTab) || adjectivesData[0];

  const getIcon = (id: string) => {
    switch (id) {
      case 'hard': return <Layers size={18} />;
      case 'soft': return <Layers size={18} />;
      case 'palatalization': return <Edit3 size={18} />;
      case 'comparison': return <BarChart3 size={18} />;
      case 'formation': return <BookOpen size={18} />;
      case 'possessive': return <UserCheck size={18} />;
      default: return <BookOpen size={18} />;
    }
  };

  return (
    <div className="w-full px-4 md:px-8 pb-12">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-sm overflow-hidden min-h-[500px]">
        <div className="p-8 md:p-12">
          
          <button 
            onClick={() => navigate('/grammar')}
            className="flex items-center gap-2 text-gray-500 hover:text-czech-blue mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Grammar
          </button>

          <h2 className="text-4xl text-czech-blue font-hand mb-6">Adjectives</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Declension patterns, comparisons, and formation of Czech adjectives.
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-100 pb-2">
            {adjectivesData.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm transition-all ${
                  activeTab === item.id 
                    ? 'bg-czech-blue text-white shadow-md' 
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                {getIcon(item.id)}
                {item.title}
              </button>
            ))}
          </div>

          <div className="animate-in fade-in duration-300">
            <UniversalSection
                id={activeData.id}
                title={activeData.title}
                searchableTitle={activeData.title}
                path="/grammar/adjectives"
                category="Grammar"
                collapsible={false}
            >
                {activeData.text && activeData.text.map((para, idx) => (
                <p 
                    key={idx} 
                    className="text-gray-700 mb-4 leading-relaxed text-lg"
                    dangerouslySetInnerHTML={{__html: para}}
                />
                ))}

                {activeData.rules && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                    {activeData.rules.map((rule, idx) => (
                    <div key={idx} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <h4 className="font-bold text-czech-blue mb-1">{rule.label}</h4>
                        <p className="text-gray-600">{rule.text}</p>
                    </div>
                    ))}
                </div>
                )}

                {activeData.tables && activeData.tables.map((table, tIdx) => (
                <div key={tIdx} className="mb-10">
                    {table.title && (
                    <h4 className="text-xl font-bold text-gray-700 mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-czech-red rounded-full"></span>
                        {table.title}
                    </h4>
                    )}
                    
                    <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-gray-100 text-gray-700 font-bold uppercase text-xs">
                        <tr>
                            {table.headers.map((h, hIdx) => (
                            <th key={hIdx} className="px-4 py-3 border-b border-gray-200">{h}</th>
                            ))}
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                        {table.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-blue-50/30 transition-colors">
                            {row.map((cell, cIdx) => (
                                <td key={cIdx} className="px-4 py-3 border-r border-gray-50 last:border-0" dangerouslySetInnerHTML={{__html: cell}}></td>
                            ))}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    </div>
                </div>
                ))}
            </UniversalSection>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Adjectives;
