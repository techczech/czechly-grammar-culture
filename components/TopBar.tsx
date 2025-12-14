
import React, { useState } from 'react';
import { Home, Search, Bookmark } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SearchModal from './SearchModal';

const TopBar: React.FC = () => {
  const navigate = useNavigate();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <div className="w-full h-12 bg-czech-blue flex items-center justify-between px-4 md:px-12 text-white shadow-sm relative z-30">
        <div className="flex gap-4 items-center">
          <Home 
            size={20} 
            className="cursor-pointer hover:text-blue-200 transition-colors" 
            onClick={() => navigate('/')}
            title="Home"
          />
          <Bookmark
            size={20}
            className="cursor-pointer hover:text-blue-200 transition-colors"
            onClick={() => navigate('/bookmarks')}
            title="Bookmarks"
          />
        </div>
        
        <button 
          onClick={() => setIsSearchOpen(true)}
          className="p-2 hover:bg-blue-800 rounded-full transition-colors group"
          aria-label="Open Search"
        >
          <Search size={20} className="text-white group-hover:scale-110 transition-transform" />
        </button>
      </div>
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default TopBar;
