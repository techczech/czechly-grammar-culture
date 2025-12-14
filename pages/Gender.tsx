
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Shapes } from 'lucide-react';
import { genderData } from '../data/gender';
import UniversalSection from '../components/UniversalSection';
import { useScrollToHash } from '../hooks/useScrollToHash';

const Gender: React.FC = () => {
  const navigate = useNavigate();
  useScrollToHash();

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

          <h2 className="text-4xl text-czech-blue font-hand mb-6">Understanding Gender</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            The foundation of Czech grammar: Ten, Ta, To.
          </p>

          <div className="space-y-8 animate-in fade-in duration-500">
            {genderData.map((section, idx) => (
              <UniversalSection
                key={idx}
                id={`gender-sec-${idx}`}
                title={section.heading}
                searchableTitle={section.heading}
                path="/grammar/gender"
                category="Grammar"
                icon={<Shapes size={20} className="text-blue-500" />}
                collapsible={true}
                initiallyExpanded={true}
              >
                {section.text.map((para, pIdx) => (
                  <p 
                    key={pIdx} 
                    className="text-gray-700 mb-4 leading-relaxed text-lg"
                    dangerouslySetInnerHTML={{__html: para}}
                  />
                ))}

                {section.tables && section.tables.map((table, tIdx) => (
                  <div key={tIdx} className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm my-6">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-gray-50 text-gray-700 font-bold uppercase text-xs">
                        <tr>
                          {table.headers.map((h, hIdx) => (
                            <th key={hIdx} className="px-4 py-3 border-b border-gray-200" dangerouslySetInnerHTML={{__html: h}}></th>
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
                ))}

                {section.postText && section.postText.map((para, pIdx) => (
                  <p 
                    key={`post-${pIdx}`} 
                    className="text-gray-700 mt-4 leading-relaxed text-lg"
                    dangerouslySetInnerHTML={{__html: para}}
                  />
                ))}
              </UniversalSection>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Gender;
