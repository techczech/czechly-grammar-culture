
import React, { useState, useEffect } from 'react';
import { generateCzechExercise } from '../services/geminiService';
import { Exercise } from '../types';
import { Loader2, CheckCircle2, XCircle, RefreshCw, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AITutor: React.FC = () => {
  const navigate = useNavigate();
  const [exercise, setExercise] = useState<Exercise | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [result, setResult] = useState<'correct' | 'incorrect' | null>(null);
  const [topic, setTopic] = useState<string>('basic phrases');

  const fetchNewExercise = async (currentTopic: string) => {
    setLoading(true);
    setResult(null);
    setSelectedAnswer(null);
    setExercise(null);
    try {
      const data = await generateCzechExercise(currentTopic);
      setExercise(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNewExercise(topic);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run once on mount

  const handleAnswerSelect = (option: string) => {
    if (result !== null) return; // Prevent changing answer after result
    setSelectedAnswer(option);
    if (option === exercise?.correctAnswer) {
      setResult('correct');
    } else {
      setResult('incorrect');
    }
  };

  const topics = [
    'basic phrases', 'food & dining', 'travel', 'grammar - cases', 'numbers', 'family'
  ];

  return (
    <div className="w-full px-4 md:px-8 pb-12">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-sm overflow-hidden min-h-[500px]">
        
        <div className="p-8 md:p-12">
          <button 
            onClick={() => navigate('/exercises')}
            className="flex items-center gap-2 text-gray-500 hover:text-czech-blue mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Exercises
          </button>

          <h2 className="text-4xl text-czech-blue font-hand mb-6">AI Czech Tutor</h2>
          
          {/* Topic Selection */}
          <div className="mb-8 flex flex-wrap gap-2 items-center">
            <span className="text-gray-600 mr-2 font-medium">Practice Topic:</span>
            {topics.map((t) => (
              <button
                key={t}
                onClick={() => {
                  setTopic(t);
                  fetchNewExercise(t);
                }}
                disabled={loading}
                className={`px-3 py-1 text-sm rounded-full border transition-all ${
                  topic === t 
                    ? 'bg-czech-blue text-white border-czech-blue' 
                    : 'bg-white text-gray-600 border-gray-300 hover:border-czech-blue'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Exercise Area */}
          <div className="bg-gray-50 rounded-xl p-6 md:p-8 relative min-h-[300px] flex flex-col justify-center border border-gray-200 shadow-inner">
            {loading ? (
              <div className="flex flex-col items-center justify-center space-y-4 text-gray-500">
                <Loader2 className="animate-spin w-10 h-10 text-czech-blue" />
                <p>Asking Gemini for a new question...</p>
              </div>
            ) : exercise ? (
              <div className="animate-in fade-in duration-500">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">{exercise.question}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {exercise.options.map((option, idx) => {
                    let btnClass = "border-gray-200 hover:border-czech-blue hover:bg-blue-50";
                    if (selectedAnswer === option) {
                      if (result === 'correct') btnClass = "border-green-500 bg-green-50 text-green-800";
                      if (result === 'incorrect') btnClass = "border-red-500 bg-red-50 text-red-800";
                    } else if (result !== null && option === exercise.correctAnswer) {
                      btnClass = "border-green-500 bg-green-50 text-green-800 opacity-70";
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleAnswerSelect(option)}
                        disabled={result !== null}
                        className={`p-4 text-left border-2 rounded-lg text-lg transition-all font-medium ${btnClass}`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>

                {/* Result Feedback */}
                {result && (
                  <div className={`p-4 rounded-lg flex items-start gap-3 ${result === 'correct' ? 'bg-green-100 text-green-900' : 'bg-red-100 text-red-900'}`}>
                    {result === 'correct' ? <CheckCircle2 className="w-6 h-6 flex-shrink-0" /> : <XCircle className="w-6 h-6 flex-shrink-0" />}
                    <div>
                      <p className="font-bold text-lg mb-1">
                        {result === 'correct' ? 'Výborně! (Excellent!)' : 'Not quite right.'}
                      </p>
                      <p>{exercise.explanation}</p>
                    </div>
                  </div>
                )}

                {/* Next Button */}
                {result && (
                  <div className="mt-6 flex justify-end">
                    <button
                      onClick={() => fetchNewExercise(topic)}
                      className="flex items-center gap-2 bg-czech-blue text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors font-medium shadow-md"
                    >
                      <RefreshCw size={20} />
                      Next Question
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center text-red-500">Failed to load exercise. Please try again.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITutor;
