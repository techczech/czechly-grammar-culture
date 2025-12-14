
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, BookOpen, MessageSquare, Feather, ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import { staticExercises, ExerciseCategory } from '../data/staticExercises';

const Exercises: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<ExerciseCategory | 'All'>('All');

  const categories: (ExerciseCategory | 'All')[] = ['All', 'Grammar', 'Functional', 'Culture'];

  const filteredExercises = activeCategory === 'All' 
    ? staticExercises 
    : staticExercises.filter(e => e.category === activeCategory);

  return (
    <div className="w-full px-4 md:px-8 pb-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="py-8 md:py-12 text-center">
          <h1 className="text-5xl md:text-6xl text-czech-blue font-hand mb-4">Practice & Quizzes</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Test your knowledge with our AI tutor or choose from a library of structured worksheets and quizzes.
          </p>
        </div>

        {/* AI Tutor Hero Card */}
        <div className="bg-gradient-to-r from-czech-blue to-blue-800 rounded-2xl shadow-xl overflow-hidden mb-12 text-white relative">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <Sparkles size={200} />
          </div>
          <div className="p-8 md:p-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-blue-500/30 px-3 py-1 rounded-full text-blue-100 text-sm font-bold uppercase tracking-wider mb-4 border border-blue-400/30">
                <Sparkles size={14} /> AI Powered
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Interactive Czech Tutor</h2>
              <p className="text-blue-100 text-lg max-w-xl">
                Generate unlimited exercises tailored to your level. Practice vocabulary, translation, and grammar with instant feedback from Gemini.
              </p>
            </div>
            <button 
              onClick={() => navigate('/exercises/ai')}
              className="bg-white text-czech-blue px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-blue-50 hover:scale-105 transition-all flex items-center gap-2 whitespace-nowrap"
            >
              Start Practice <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Static Exercises Library */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden min-h-[500px]">
          
          {/* Filters */}
          <div className="border-b border-gray-100 p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h3 className="text-2xl font-bold text-gray-800 font-hand">Exercise Library</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                      activeCategory === cat 
                        ? 'bg-czech-blue text-white shadow-md' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExercises.map((ex) => (
              <div 
                key={ex.id}
                onClick={() => navigate(`/exercises/${ex.id}`)}
                className="group border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer bg-gray-50 hover:bg-white flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-lg ${
                    ex.category === 'Culture' ? 'bg-purple-100 text-purple-600' :
                    ex.category === 'Grammar' ? 'bg-blue-100 text-blue-600' :
                    'bg-green-100 text-green-600'
                  }`}>
                    {ex.category === 'Culture' && <Feather size={24} />}
                    {ex.category === 'Grammar' && <BookOpen size={24} />}
                    {ex.category === 'Functional' && <MessageSquare size={24} />}
                  </div>
                  <span className="text-xs font-bold uppercase text-gray-400 tracking-wider bg-white px-2 py-1 rounded border border-gray-100">
                    {ex.type}
                  </span>
                </div>
                
                <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-czech-blue transition-colors line-clamp-2">
                  {ex.title}
                </h4>
                <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-3">
                  {ex.description}
                </p>

                <div className="flex items-center text-czech-blue font-bold text-sm mt-auto group-hover:underline">
                  Open Worksheet <ArrowRight size={16} className="ml-1" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Exercises;
