
import React, { useState, useEffect, useRef } from 'react';
import { X, Search, TrendingUp, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const popularSearches = [
  "Verb Prefixes",
  "Case Usage",
  "Adjectives",
  "Pronouns",
  "Functional Czech",
  "Prague"
];

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Handle Escape key and body scroll locking
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const performSearch = (text: string) => {
    if (text.trim()) {
      navigate(`/search?q=${encodeURIComponent(text.trim())}`);
      onClose();
      setQuery('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    performSearch(query);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-4 md:pt-24 bg-czech-blue/95 backdrop-blur-sm transition-opacity duration-200"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden mx-4 flex flex-col animate-in slide-in-from-top-4 fade-in duration-300"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="p-4 md:p-6 border-b border-gray-100 flex items-center gap-4">
          <Search className="text-czech-blue flex-shrink-0" size={28} />
          <form onSubmit={handleSubmit} className="flex-1">
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search grammar, vocabulary, culture..."
              className="w-full text-xl md:text-2xl text-gray-800 placeholder-gray-300 focus:outline-none font-medium bg-transparent"
            />
          </form>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-600"
            aria-label="Close search"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content Area */}
        <div className="px-6 py-6 bg-gray-50 max-h-[60vh] overflow-y-auto">
          {query.length === 0 ? (
            <div>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                <TrendingUp size={14} /> Popular Topics
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {popularSearches.map(term => (
                  <button
                    key={term}
                    onClick={() => performSearch(term)}
                    className="text-left px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 hover:border-czech-blue hover:text-czech-blue hover:shadow-sm transition-all flex justify-between items-center group"
                  >
                    <span>{term}</span>
                    <ChevronRight size={16} className="text-gray-300 group-hover:text-czech-blue" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <p className="mb-2">Press <kbd className="font-sans px-2 py-1 bg-white border border-gray-300 rounded-md text-xs mx-1 font-bold text-gray-700">Enter</kbd> to search for</p>
              <p className="text-xl font-bold text-czech-blue">"{query}"</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-white border-t border-gray-100 flex justify-between items-center text-[10px] text-gray-400 font-medium uppercase tracking-wider">
          <span className="hidden md:inline">Type to search</span>
          <span className="bg-gray-100 px-2 py-1 rounded border border-gray-200 text-gray-500">ESC to close</span>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
