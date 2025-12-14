
import React, { useState } from 'react';
import { Search, MessageSquare, ArrowLeft, Filter } from 'lucide-react';
import { functionalCzechData } from '../data/functionalCzech';
import { useNavigate } from 'react-router-dom';
import SectionActions from '../components/SectionActions';
import { useScrollToHash } from '../hooks/useScrollToHash';

const FunctionalCzech: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  useScrollToHash();

  // Extract unique categories
  const categories = ['All', ...Array.from(new Set(functionalCzechData.map(item => item.functionCategory))).sort()];

  const filteredData = functionalCzechData.filter((item) => {
    const matchesSearch = 
      item.czech.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.english.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.functionCategory.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || item.functionCategory === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full px-4 md:px-8 pb-12">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-sm overflow-hidden min-h-[500px]">
        
        <div className="p-8 md:p-12">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-500 hover:text-czech-blue mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Back Home
          </button>

          <h2 className="text-4xl text-czech-blue font-hand mb-6">Functional Czech</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Essential phrases for everyday situations, categorized by their function in conversation.
          </p>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-4 border-b border-gray-100">
            {/* Search */}
            <div className="relative w-full md:w-1/2">
              <input 
                type="text" 
                placeholder="Search phrases, English meanings..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-czech-blue focus:ring-1 focus:ring-czech-blue transition-all"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>

            {/* Category Filter */}
            <div className="relative w-full md:w-1/3">
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-czech-blue focus:ring-1 focus:ring-czech-blue appearance-none bg-white cursor-pointer"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <Filter className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
          </div>

          <div className="space-y-4">
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => {
                const safeId = `func-${item.czech.replace(/\s+/g, '-').replace(/[?.,!]/g, '').toLowerCase()}`;
                return (
                  <div key={index} id={safeId} className="scroll-mt-24 border border-gray-200 rounded-lg p-5 bg-white hover:border-blue-300 transition-colors flex flex-col md:flex-row justify-between md:items-center gap-4 group">
                    <div className="flex-grow">
                      <h3 className="text-lg md:text-xl font-bold text-czech-blue font-hand tracking-wide mb-1">
                        {item.czech}
                      </h3>
                      <p className="text-gray-600 italic">
                        {item.english}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-4 flex-shrink-0">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600 uppercase tracking-wider border border-gray-200">
                        <MessageSquare size={12} />
                        {item.functionCategory}
                      </span>
                      <SectionActions 
                        id={safeId}
                        title={item.czech}
                        path="/functional-czech"
                        category="Functional"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-12 text-gray-500 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                <p>No phrases found matching your search.</p>
                <button 
                  onClick={() => {setSearchTerm(''); setSelectedCategory('All');}}
                  className="mt-2 text-czech-blue hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
          
           <p className="text-xs text-gray-400 mt-8 text-center">
            Database contains {functionalCzechData.length} functional phrases.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FunctionalCzech;
