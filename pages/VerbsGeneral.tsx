
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Clock, MessageCircle, Zap, Info, ChevronRight } from 'lucide-react';
import { verbsGeneralData, VerbContentSection } from '../data/verbsGeneral';
import UniversalSection from '../components/UniversalSection';
import { useScrollToHash } from '../hooks/useScrollToHash';

const VerbsGeneral: React.FC = () => {
  const navigate = useNavigate();
  const [activeTabId, setActiveTabId] = useState<string>('basics');
  
  useScrollToHash();

  const activeTab = verbsGeneralData.find(t => t.id === activeTabId) || verbsGeneralData[0];

  const getIcon = (iconName: string, size: number) => {
    switch (iconName) {
      case 'BookOpen': return <BookOpen size={size} />;
      case 'Clock': return <Clock size={size} />;
      case 'MessageCircle': return <MessageCircle size={size} />;
      case 'Zap': return <Zap size={size} />;
      default: return <Info size={size} />;
    }
  };

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

          <h2 className="text-4xl text-czech-blue font-hand mb-6">Understanding Verbs</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            A comprehensive guide to Czech verb mechanics: conjugation, aspect, tense, and moods.
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap gap-4 mb-8 border-b border-gray-100 pb-1">
            {verbsGeneralData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-t-lg font-bold transition-all border-b-2 ${
                  activeTabId === tab.id 
                    ? 'border-czech-blue text-czech-blue bg-blue-50' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {getIcon(tab.icon, 18)}
                {tab.label}
              </button>
            ))}
          </div>

          <div className="animate-in fade-in duration-300 space-y-12">
            {activeTab.sections.map((section, idx) => (
              <SectionRenderer key={idx} section={section} />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

const SectionRenderer: React.FC<{ section: VerbContentSection }> = ({ section }) => {
  const safeId = section.title.replace(/\s+/g, '-').toLowerCase();
  
  return (
    <UniversalSection
        id={safeId}
        title={section.title}
        searchableTitle={section.title}
        path="/grammar/verbs-general"
        category="Grammar"
        collapsible={false}
    >
      <div className="space-y-6">
        {section.content.map((block, idx) => {
          switch (block.type) {
            case 'text':
              return (
                <div key={idx} className="space-y-4">
                  {block.value.map((p, i) => (
                    <p key={i} className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: p }} />
                  ))}
                </div>
              );
            case 'table':
              return (
                <div key={idx} className="my-6">
                  {block.title && <h4 className="text-sm font-bold text-czech-blue uppercase tracking-wider mb-2">{block.title}</h4>}
                  <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-gray-100 text-gray-700 font-bold">
                        <tr>
                          {block.headers.map((h, i) => (
                            <th key={i} className="px-4 py-3 border-b border-gray-200">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {block.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-blue-50/30 transition-colors">
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="px-4 py-3 border-r border-gray-50 last:border-0" dangerouslySetInnerHTML={{ __html: cell }} />
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            case 'list':
              return (
                <div key={idx} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  {block.title && <h4 className="font-bold text-gray-800 mb-4">{block.title}</h4>}
                  <ul className="space-y-2">
                    {block.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <ChevronRight size={16} className="text-czech-blue mt-1 flex-shrink-0" />
                        <span dangerouslySetInnerHTML={{ __html: item }} />
                      </li>
                    ))}
                  </ul>
                </div>
              );
            case 'kv':
              return (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {block.title && <h4 className="col-span-full font-bold text-gray-800 mt-2">{block.title}</h4>}
                  {block.items.map((item, i) => (
                    <div key={i} className="border border-gray-200 rounded-lg p-4 bg-white hover:border-blue-300 transition-colors">
                      <span className="font-bold text-czech-blue block mb-1">{item.k}</span>
                      <span className="text-gray-600 text-sm">{item.v}</span>
                    </div>
                  ))}
                </div>
              );
            default:
              return null;
          }
        })}
      </div>
    </UniversalSection>
  );
};

export default VerbsGeneral;
