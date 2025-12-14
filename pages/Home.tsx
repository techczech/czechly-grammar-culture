
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const suggestions = [
    "Verb Prefixes", 
    "Pronouns", 
    "Food", 
    "History", 
    "Conjugation",
    "Prepositions"
  ];

  return (
    <div className="w-full px-4 md:px-8 pb-12">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-sm overflow-hidden">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 md:p-12 min-h-[400px]">
          
          {/* Grammar Column */}
          <div className="flex flex-col gap-4">
            <h2 
              className="text-4xl text-czech-blue font-hand mb-2 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => navigate('/grammar')}
            >
              Grammar
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Master Czech morphology with the Czech Navigator, interactive verb databases, declension tables, and detailed guides on case usage and parts of speech.
            </p>
            <button 
              className="text-left text-czech-blue font-medium mt-2 hover:underline"
              onClick={() => navigate('/grammar')}
            >
              Explore Grammar Resources &rarr;
            </button>
          </div>

          {/* Culture Column */}
          <div className="flex flex-col gap-4">
            <h2 
              className="text-4xl text-czech-blue font-hand mb-2 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => navigate('/culture')}
            >
              Culture
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Discover the context behind the language. Explore facts, history, politics, lifestyle habits, and compare famous Czech songs with their originals.
            </p>
            <button 
              className="text-left text-czech-blue font-medium mt-2 hover:underline"
              onClick={() => navigate('/culture')}
            >
              Open Culture Guide &rarr;
            </button>
          </div>

          {/* Functional Czech Column */}
          <div className="flex flex-col gap-4">
            <h2 
              className="text-4xl text-czech-blue font-hand mb-2 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => navigate('/functional-czech')}
            >
              Functional Czech
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Communicate effectively with a searchable database of essential phrases categorized by social function—from greetings to expressing opinions.
            </p>
            <button 
              className="text-left text-czech-blue font-medium mt-2 hover:underline"
              onClick={() => navigate('/functional-czech')}
            >
              Browse Phrasebook &rarr;
            </button>
          </div>
          
        </div>

        {/* Search Section */}
        <div className="bg-gray-50 border-t border-gray-100 p-8 md:p-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl text-gray-800 font-hand mb-6">Looking for something specific?</h3>
            
            <form onSubmit={handleSearch} className="relative w-full mb-6">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for grammar rules, vocabulary, or cultural topics..."
                className="w-full px-6 py-4 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:border-czech-blue focus:ring-2 focus:ring-blue-100 text-lg transition-all"
              />
              <button 
                type="submit"
                className="absolute right-2 top-2 bg-czech-blue text-white p-2.5 rounded-full hover:bg-blue-800 transition-colors shadow-sm"
              >
                <Search size={20} />
              </button>
            </form>

            <div className="flex flex-wrap justify-center items-center gap-3">
              <span className="text-sm text-gray-500 font-medium">Suggested:</span>
              {suggestions.map((tag) => (
                <button
                  key={tag}
                  onClick={() => navigate(`/search?q=${encodeURIComponent(tag)}`)}
                  className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:border-czech-blue hover:text-czech-blue transition-all shadow-sm"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Beige Footer Strip */}
        <div className="bg-czech-beige py-3 px-4 w-full flex justify-center items-center">
          <p className="text-czech-blue text-lg md:text-xl font-medium text-center">
            Dobrý den, učte se česky, aby vám bylo hezky!
          </p>
        </div>

      </div>
    </div>
  );
};

export default Home;
