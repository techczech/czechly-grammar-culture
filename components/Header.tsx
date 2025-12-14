
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isGrammar = location.pathname.startsWith('/grammar');
  const isExercises = location.pathname.startsWith('/exercises');
  const isFunctional = location.pathname === '/functional-czech';
  const isCulture = location.pathname.startsWith('/culture');
  const isAbout = location.pathname === '/about';

  const getButtonClass = (isActive: boolean) => 
    `px-4 py-2 rounded transition-colors whitespace-nowrap ${
      isActive
        ? 'bg-czech-blue text-white shadow-md' 
        : 'bg-transparent text-gray-700 hover:text-czech-blue border border-transparent hover:border-gray-300'
    }`;

  return (
    <div className="w-full max-w-6xl mx-auto pt-8 pb-4 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
      <div className="mb-6 md:mb-0 text-center md:text-left">
        <h1 
          className="text-6xl md:text-7xl text-czech-blue font-hand cursor-pointer hover:opacity-90 transition-opacity"
          onClick={() => navigate('/')}
        >
          Let's Speak Czechly
        </h1>
        <p className="text-czech-red text-xl md:text-2xl font-hand tracking-wide mt-[-5px]">
          Resources for learning Czech
        </p>
      </div>

      <div className="flex gap-2 font-sans font-semibold tracking-wider text-sm uppercase flex-wrap justify-center">
        <button 
          onClick={() => navigate('/grammar')}
          className={getButtonClass(isGrammar)}
        >
          Grammar
        </button>
        <button 
          onClick={() => navigate('/exercises')}
          className={getButtonClass(isExercises)}
        >
          Exercises
        </button>
        <button 
          onClick={() => navigate('/culture')}
          className={getButtonClass(isCulture)}
        >
          Culture
        </button>
        <button 
           onClick={() => navigate('/functional-czech')}
           className={getButtonClass(isFunctional)}
        >
          Functional
        </button>
        <button 
           onClick={() => navigate('/about')}
           className={getButtonClass(isAbout)}
        >
          About
        </button>
      </div>
    </div>
  );
};

export default Header;
