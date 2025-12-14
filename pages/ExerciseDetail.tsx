
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { staticExercises, ExerciseQuestion, ScaleItem } from '../data/staticExercises';
import { ArrowLeft, CheckSquare, ExternalLink, HelpCircle, AlertCircle } from 'lucide-react';

const ExerciseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [revealed, setRevealed] = useState(false);

  const exercise = staticExercises.find(e => e.id === id);

  if (!exercise) {
    return (
      <div className="p-12 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Exercise not found</h2>
        <button onClick={() => navigate('/exercises')} className="text-czech-blue underline mt-4">Return to Exercises</button>
      </div>
    );
  }

  const renderContent = () => {
    switch (exercise.type) {
      case 'quiz':
        return (
          <div className="space-y-6">
            {(exercise.content as ExerciseQuestion[]).map((q, idx) => {
              const isMulti = Array.isArray(q.a);
              return (
                <div key={idx} className="p-6 border border-gray-200 rounded-xl bg-white shadow-sm">
                  <h5 className="font-bold text-gray-800 mb-4 flex items-start gap-3 text-lg">
                    <span className="text-czech-blue bg-blue-50 w-8 h-8 rounded-full flex items-center justify-center text-sm shrink-0">{idx + 1}</span>
                    <div className="pt-1">
                      {q.q}
                      {isMulti && <span className="block text-sm text-gray-500 font-normal mt-1">(Select {q.a?.length})</span>}
                    </div>
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-0 md:pl-11">
                    {q.options?.map((opt, i) => {
                      let isCorrect = false;
                      if (Array.isArray(q.a)) {
                        isCorrect = q.a.includes(opt);
                      } else {
                        isCorrect = opt === q.a;
                      }
                      
                      let btnClass = "bg-gray-50 border-gray-200 text-gray-700 hover:border-blue-300";
                      
                      if (revealed) {
                        if (isCorrect) btnClass = "border-green-500 bg-green-50 text-green-800 font-bold ring-1 ring-green-500";
                        else btnClass = "opacity-50 border-gray-100 bg-gray-50";
                      }

                      return (
                        <div key={i} className={`px-4 py-3 border rounded-lg text-base transition-all ${btnClass}`}>
                          {opt}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        );

      case 'scale':
        return (
          <div className="space-y-8 my-4">
            {(exercise.content as ScaleItem[]).map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex justify-between text-sm font-bold text-gray-800 mb-6">
                  <span className="text-czech-blue w-full text-center text-lg">{item.label}</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full relative mb-6 mx-4">
                   <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 bg-czech-blue rounded-full border-4 border-white shadow cursor-pointer hover:scale-110 transition-transform"></div>
                </div>
                <div className="flex justify-between text-base text-gray-600 gap-8">
                  <div className="flex-1 text-left bg-gray-50 p-3 rounded-lg border border-gray-100">{item.left}</div>
                  <div className="flex-1 text-right bg-gray-50 p-3 rounded-lg border border-gray-100">{item.right}</div>
                </div>
              </div>
            ))}
            <div className="bg-yellow-50 p-4 rounded text-yellow-800 text-sm flex gap-2">
                <AlertCircle size={16} className="shrink-0 mt-0.5" />
                This exercise is for self-reflection. There are no right or wrong answers.
            </div>
          </div>
        );

      case 'checklist':
        return (
          <div className="space-y-3 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
             {(exercise.content as string[]).map((item, idx) => (
               <label key={idx} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors border border-gray-100">
                 <input type="checkbox" className="mt-1 w-6 h-6 text-czech-blue rounded border-gray-300 focus:ring-czech-blue" />
                 <span className="text-gray-800 text-lg leading-relaxed">{item}</span>
               </label>
             ))}
             <div className="bg-yellow-50 p-4 rounded text-yellow-800 text-sm mt-6 flex gap-2">
                <AlertCircle size={16} className="shrink-0 mt-0.5" />
                Review your answers based on the related study material.
            </div>
          </div>
        );

      default:
        return <div>Unknown exercise type.</div>;
    }
  };

  return (
    <div className="w-full px-4 md:px-8 pb-12">
      <div className="max-w-4xl mx-auto">
        <div className="py-8">
          <button 
            onClick={() => navigate('/exercises')}
            className="flex items-center gap-2 text-gray-500 hover:text-czech-blue mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Library
          </button>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden min-h-[600px] flex flex-col">
            
            {/* Header */}
            <div className="bg-gray-50 p-8 border-b border-gray-200">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider w-fit ${
                        exercise.category === 'Culture' ? 'bg-purple-100 text-purple-700' :
                        exercise.category === 'Grammar' ? 'bg-blue-100 text-blue-700' :
                        'bg-green-100 text-green-700'
                    }`}>
                        {exercise.category}
                    </span>
                    {exercise.relatedPath && (
                        <a 
                            href={`#${exercise.relatedPath}`}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 text-sm text-czech-blue font-bold hover:underline"
                        >
                            Open Study Material <ExternalLink size={14} />
                        </a>
                    )}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 font-hand">{exercise.title}</h1>
                <p className="text-gray-600 text-lg">{exercise.description}</p>
            </div>

            {/* Content */}
            <div className="p-8 flex-grow bg-gray-50/30">
                {renderContent()}
            </div>

            {/* Footer / Actions */}
            {exercise.type === 'quiz' && (
                <div className="p-6 bg-white border-t border-gray-200 sticky bottom-0 z-10 shadow-lg-up flex justify-center">
                    <button 
                        onClick={() => setRevealed(!revealed)}
                        className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-lg transition-all shadow-md hover:scale-105 ${
                            revealed 
                            ? 'bg-gray-100 text-gray-600 hover:bg-gray-200' 
                            : 'bg-czech-blue text-white hover:bg-blue-800'
                        }`}
                    >
                        {revealed ? <><CheckSquare size={20} /> Hide Answers</> : <><HelpCircle size={20} /> Check Answers</>}
                    </button>
                </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseDetail;
