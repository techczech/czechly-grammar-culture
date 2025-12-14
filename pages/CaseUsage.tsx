
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, MessageCircle, HelpCircle, MapPin, Briefcase, User, Info, List, Shapes } from 'lucide-react';
import { caseUsageData } from '../data/caseUsage';
import SectionActions from '../components/SectionActions';
import UniversalSection from '../components/UniversalSection';
import { useScrollToHash } from '../hooks/useScrollToHash';

const CaseUsage: React.FC = () => {
  const navigate = useNavigate();
  const [activeCaseId, setActiveCaseId] = useState<string>('introduction');
  
  useScrollToHash();

  const activeData = caseUsageData.find(c => c.id === activeCaseId) || caseUsageData[0];

  const getIcon = (id: string) => {
    switch (id) {
      case 'introduction': return <BookOpen size={18} />;
      case 'gender': return <Shapes size={18} />;
      case 'summary': return <List size={18} />;
      case 'nominative': return <User size={18} />;
      case 'genitive': return <Info size={18} />;
      case 'dative': return <User size={18} />;
      case 'accusative': return <MapPin size={18} />;
      case 'vocative': return <MessageCircle size={18} />;
      case 'locative': return <MapPin size={18} />;
      case 'instrumental': return <Briefcase size={18} />;
      default: return <BookOpen size={18} />;
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

          <h2 className="text-4xl text-czech-blue font-hand mb-6">Understanding Czech Cases</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            A guide to the function and usage of the 7 Czech grammatical cases.
          </p>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-100 pb-2">
            {caseUsageData.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCaseId(c.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm transition-all ${
                  activeCaseId === c.id 
                    ? 'bg-czech-blue text-white shadow-md' 
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                {getIcon(c.id)}
                {c.id === 'introduction' ? 'Intro' : c.id === 'gender' ? 'Gender' : c.id.charAt(0).toUpperCase() + c.id.slice(1)}
              </button>
            ))}
          </div>

          <div className="animate-in fade-in duration-300">
            {/* Main Title Section */}
            <UniversalSection
                id={activeData.id}
                title={activeData.title}
                searchableTitle={activeData.title}
                subTitle={activeData.subtitle}
                path="/grammar/case-usage"
                category="Grammar"
                collapsible={false}
                className="bg-white rounded-xl shadow-none mb-8"
                headerClass="bg-white p-0 pb-6 border-b border-gray-100"
                contentClass="pt-6"
            >
            
            {/* Special Rendering for Introduction & Summary */}
            {activeData.specialContent?.type === 'intro' ? (
              <div className="space-y-12">
                {activeData.specialContent.sections.map((section: any, idx: number) => (
                  <div key={idx} id={`intro-sec-${idx}`} className="relative group">
                    <div className="flex justify-between items-center mb-4 border-b border-gray-200 pb-2">
                        <h4 className="text-xl font-bold text-czech-blue">{section.heading}</h4>
                    </div>
                    
                    {/* Text Blocks */}
                    {section.text && section.text.map((paragraph: string, pIdx: number) => (
                      <p 
                        key={pIdx} 
                        className="text-gray-700 mb-4 leading-relaxed text-lg"
                        dangerouslySetInnerHTML={{__html: paragraph}} 
                      />
                    ))}

                    {/* Generic Tables */}
                    {section.tables && section.tables.map((table: any, tIdx: number) => (
                      <div key={tIdx} className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm my-6">
                        <table className="w-full text-sm text-left">
                          {table.headers && (
                            <thead className="bg-gray-100 text-gray-700 font-bold">
                              <tr>
                                {table.headers.map((h: string, i: number) => (
                                  <th key={i} className="px-4 py-2 border-b border-gray-200">{h}</th>
                                ))}
                              </tr>
                            </thead>
                          )}
                          <tbody className="divide-y divide-gray-100">
                            {table.rows.map((row: string[], rIdx: number) => (
                              <tr key={rIdx} className="hover:bg-gray-50/50">
                                 {row.map((cell: string, cIdx: number) => (
                                   <td key={cIdx} className="px-4 py-2 border-r border-gray-50 last:border-0" dangerouslySetInnerHTML={{__html: cell}}></td>
                                 ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ))}

                    {/* Comparison Tables */}
                    {section.comparisonTables && (
                      <div className="grid grid-cols-1 gap-6 my-6">
                        {section.comparisonTables.map((table: any, tIdx: number) => (
                          <div key={tIdx} className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
                            <table className="w-full text-sm text-left">
                              <thead className="bg-gray-50 text-gray-500 uppercase font-bold text-xs">
                                <tr>
                                  <th className="px-4 py-2 border-b w-2/5">English</th>
                                  <th className="px-4 py-2 border-b w-1/5 text-center">Function</th>
                                  <th className="px-4 py-2 border-b w-2/5">Czech</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-gray-100">
                                {table.rows.map((row: any, rIdx: number) => (
                                  <tr key={rIdx} className="hover:bg-gray-50/50">
                                    <td className="px-4 py-2" dangerouslySetInnerHTML={{__html: row.en}}></td>
                                    <td className="px-4 py-2 font-bold text-center text-czech-blue bg-blue-50/30" dangerouslySetInnerHTML={{__html: row.func}}></td>
                                    <td className="px-4 py-2" dangerouslySetInnerHTML={{__html: row.cs}}></td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Post Table Text */}
                    {section.postText && section.postText.map((paragraph: string, pIdx: number) => (
                      <p 
                        key={`post-${pIdx}`} 
                        className="text-gray-700 mb-4 leading-relaxed text-lg"
                        dangerouslySetInnerHTML={{__html: paragraph}} 
                      />
                    ))}

                    {/* Summary Table */}
                    {section.summaryTable && (
                      <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-md my-6">
                        <table className="w-full text-left">
                          <thead className="bg-czech-blue text-white uppercase font-bold text-xs">
                            <tr>
                              <th className="px-4 py-3 border-r border-blue-400">Question</th>
                              <th className="px-4 py-3 border-r border-blue-400">Function</th>
                              <th className="px-4 py-3 border-r border-blue-400">Number</th>
                              <th className="px-4 py-3">Case Name</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200 bg-white">
                            {section.summaryTable.map((row: any, rIdx: number) => (
                              <tr key={rIdx} className="hover:bg-blue-50 transition-colors">
                                <td className="px-4 py-3 font-bold text-gray-700 border-r border-gray-100">{row.q}</td>
                                <td className="px-4 py-3 text-gray-600 border-r border-gray-100 italic" dangerouslySetInnerHTML={{__html: row.func}}></td>
                                <td className="px-4 py-3 text-gray-600 border-r border-gray-100 font-mono text-sm">{row.num}</td>
                                <td className="px-4 py-3 font-bold text-czech-blue">{row.name}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                  </div>
                ))}
              </div>
            ) : (
              // Standard Case Rendering
              <>
                {/* Function Section */}
                {activeData.function && activeData.function.length > 0 && (
                  <div className="mb-8">
                    <h4 className="text-sm font-bold uppercase text-gray-400 tracking-wider mb-3">Function</h4>
                    <ul className="space-y-2">
                      {activeData.function.map((f, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="mt-1.5 w-1.5 h-1.5 bg-czech-blue rounded-full flex-shrink-0"></span>
                          <span className="text-gray-700 leading-relaxed">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Form Table (If available) */}
                {activeData.formTable && (
                  <div className="mb-8 bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h4 className="text-sm font-bold uppercase text-gray-400 tracking-wider mb-4">Basic Forms (Endings)</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm text-left">
                        <thead className="text-gray-500 font-bold border-b border-gray-200">
                          <tr>
                            <th className="px-4 py-2"></th>
                            {activeData.formTable.headers.map((h, i) => (
                              <th key={i} className="px-4 py-2 text-czech-blue">{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {activeData.formTable.rows.map((row, i) => (
                            <tr key={i}>
                              <td className="px-4 py-3 font-bold text-gray-700">{row.label}</td>
                              {row.values.map((v, j) => (
                                <td key={j} className="px-4 py-3 font-medium">{v}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {activeData.formNotes && (
                      <div className="mt-4 space-y-1">
                        {activeData.formNotes.map((note, i) => (
                          <p key={i} className="text-xs text-gray-500 italic">* {note}</p>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  
                  {/* Left Column: Exceptions & Prepositions */}
                  <div className="space-y-8">
                    {activeData.exceptions && (
                      <div>
                        <h4 className="text-sm font-bold uppercase text-gray-400 tracking-wider mb-3">Exceptions & Notes</h4>
                        {activeData.exceptions.map((ex, idx) => (
                          <div key={idx} className="bg-orange-50 border border-orange-100 rounded-lg p-4 mb-4">
                            <h5 className="font-bold text-orange-800 mb-2 text-sm">{ex.title}</h5>
                            {ex.text && <p className="text-sm text-orange-900 mb-3">{ex.text}</p>}
                            {ex.items && (
                              <ul className="space-y-1">
                                {ex.items.map((item, i) => (
                                  <li key={i} className="text-sm flex justify-between border-b border-orange-200 last:border-0 pb-1 last:pb-0">
                                    <span className="font-medium text-orange-700">{item.label}</span>
                                    <span className="text-orange-900">{item.value}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {activeData.commonPrepositions && (
                      <div>
                        <h4 className="text-sm font-bold uppercase text-gray-400 tracking-wider mb-3">Common Prepositions</h4>
                        <div className="flex flex-wrap gap-2">
                          {activeData.commonPrepositions.map((prep, idx) => (
                            <div key={idx} className="bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-lg flex items-center gap-2">
                              <span className="font-bold text-blue-700">{prep.prep}</span>
                              <span className="text-xs text-blue-500 border-l border-blue-200 pl-2">{prep.meaning}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Verbs & Categories */}
                  <div className="space-y-8">
                    {activeData.commonVerbs && (
                      <div>
                        <h4 className="text-sm font-bold uppercase text-gray-400 tracking-wider mb-3">Common Verbs</h4>
                        <ul className="space-y-2">
                          {activeData.commonVerbs.map((verb, idx) => (
                            <li key={idx} className="bg-gray-50 px-3 py-2 rounded border border-gray-100 text-sm font-medium text-gray-700">
                              {verb}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {activeData.typicalCategories && (
                      <div>
                        <h4 className="text-sm font-bold uppercase text-gray-400 tracking-wider mb-3">Typical Contexts</h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                          {activeData.typicalCategories.map((cat, idx) => (
                            <li key={idx}>{cat}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Special Vocative Content */}
                {activeData.id === 'vocative' && activeData.specialContent && (
                  <div className="mt-12 border-t border-gray-100 pt-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Rules for Addressing People</h3>
                    <p className="text-gray-600 mb-6 bg-yellow-50 p-4 rounded border border-yellow-100">
                      <HelpCircle className="inline mr-2 text-yellow-600" size={16}/>
                      {activeData.specialContent.intro}
                    </p>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {activeData.specialContent.sections.map((sec: any, idx: number) => (
                        <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                          <div className="bg-gray-100 px-4 py-3 font-bold text-gray-700 border-b border-gray-200">
                            {sec.title}
                          </div>
                          <div className="p-4 bg-white">
                            {sec.rules ? (
                              <div className="space-y-3">
                                {sec.rules.map((rule: any, i: number) => (
                                  <div key={i} className="text-sm">
                                    <div className="font-medium text-gray-800">{rule.type}</div>
                                    <div className="flex justify-between items-center text-xs mt-1">
                                      <span className="text-czech-blue font-bold">{rule.change}</span>
                                      <span className="text-gray-500 italic">{rule.example}</span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <div className="text-sm space-y-2">
                                <p className="mb-2 text-gray-600">{sec.text}</p>
                                {sec.examples && (
                                  <ul className="space-y-1">
                                    {sec.examples.map((ex: string, i: number) => (
                                      <li key={i} className="bg-gray-50 px-2 py-1 rounded text-gray-800 font-medium border-l-2 border-czech-blue">
                                        {ex}
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
            
            </UniversalSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseUsage;
