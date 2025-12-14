
import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Eye, EyeOff } from 'lucide-react';
import { Bookmark } from '../hooks/useBookmarks';
import ContentRenderer from './ContentRenderer';

interface StudyPlayerProps {
  items: Bookmark[];
  mode: 'slideshow' | 'flashcard';
  onClose: () => void;
}

const StudyPlayer: React.FC<StudyPlayerProps> = ({ items, mode, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(mode === 'slideshow');

  useEffect(() => {
    if (mode === 'flashcard') {
      setIsRevealed(false);
    } else {
      setIsRevealed(true);
    }
  }, [currentIndex, mode]);

  const currentItem = items[currentIndex];

  const handleNext = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
        if (mode === 'flashcard' && !isRevealed) {
            setIsRevealed(true);
        } else {
            handleNext();
        }
    } else if (e.key === 'ArrowLeft') {
      handlePrev();
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, isRevealed, mode]);

  if (!currentItem) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gray-900/95 flex flex-col items-center justify-center p-4 animate-in fade-in duration-200">
      
      {/* Top Bar */}
      <div className="w-full max-w-5xl flex justify-between items-center text-white mb-4">
        <div className="text-sm font-medium opacity-70">
          {mode === 'slideshow' ? 'Slideshow Mode' : 'Flashcard Mode'}
        </div>
        <div className="flex items-center gap-4">
           <span className="font-mono text-sm">{currentIndex + 1} / {items.length}</span>
           <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
             <X size={24} />
           </button>
        </div>
      </div>

      {/* Main Card */}
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[85vh]">
        
        {/* Card Content - Scroll Container */}
        <div className="flex-grow flex flex-col items-center p-6 md:p-10 text-center overflow-y-auto w-full scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent" onClick={() => mode === 'flashcard' && !isRevealed && setIsRevealed(true)}>
            
            <div className="w-full shrink-0">
               <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">
                 {currentItem.category}
               </span>
               <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-hand leading-tight mb-4">
                 {currentItem.title}
               </h2>
            </div>

            {/* Reveal Area */}
            <div className={`transition-all duration-500 w-full flex flex-col items-center flex-grow ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none h-0 overflow-hidden'}`}>
               {isRevealed && (
                 <div className="w-full border-t border-gray-100 pt-6">
                    <ContentRenderer item={currentItem} />
                 </div>
               )}
            </div>

            {/* Tap to Reveal Prompt */}
            {!isRevealed && mode === 'flashcard' && (
                <div className="flex-grow flex flex-col justify-center items-center text-gray-400 animate-pulse cursor-pointer gap-2 py-12">
                    <Eye size={32} />
                    <span className="text-lg uppercase font-bold tracking-widest">Tap to Reveal</span>
                </div>
            )}

        </div>

        {/* Controls */}
        <div className="bg-gray-50 border-t border-gray-100 p-4 flex justify-between items-center shrink-0">
            <button 
                onClick={handlePrev} 
                disabled={currentIndex === 0}
                className="flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed text-gray-700 font-medium transition-colors"
            >
                <ChevronLeft size={24} /> <span className="hidden md:inline">Previous</span>
            </button>

            {mode === 'flashcard' && (
                <button 
                    onClick={() => setIsRevealed(!isRevealed)}
                    className="flex items-center gap-2 px-8 py-3 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 font-bold transition-colors shadow-sm"
                >
                    {isRevealed ? <><EyeOff size={20} /> Hide</> : <><Eye size={20} /> Reveal</>}
                </button>
            )}

            <button 
                onClick={handleNext} 
                disabled={currentIndex === items.length - 1}
                className="flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed text-gray-700 font-medium transition-colors"
            >
                <span className="hidden md:inline">Next</span> <ChevronRight size={24} />
            </button>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 h-1.5 bg-czech-blue transition-all duration-300" style={{ width: `${((currentIndex + 1) / items.length) * 100}%` }}></div>
      </div>

      <div className="mt-4 text-white/50 text-sm hidden md:block">
         Use Arrow Keys to navigate. Space to flip.
      </div>

    </div>
  );
};

export default StudyPlayer;
