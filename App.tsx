
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import Home from './pages/Home';
import Exercises from './pages/Exercises'; // Dashboard
import AITutor from './pages/AITutor'; // AI Page
import ExerciseDetail from './pages/ExerciseDetail'; // Static Detail
import Grammar from './pages/Grammar';
import CzechNavigator from './pages/CzechNavigator';
import VerbPrefixes from './pages/VerbPrefixes';
import Verbs150 from './pages/Verbs150';
import IrregularVerbs from './pages/IrregularVerbs';
import ConjugationModels from './pages/ConjugationModels';
import VerbsGeneral from './pages/VerbsGeneral';
import CaseForms from './pages/CaseForms';
import CaseUsage from './pages/CaseUsage';
import Numerals from './pages/Numerals';
import Conjunctions from './pages/Conjunctions';
import Prepositions from './pages/Prepositions';
import Adverbs from './pages/Adverbs';
import Gender from './pages/Gender';
import Adjectives from './pages/Adjectives';
import Pronouns from './pages/Pronouns';
import FunctionalCzech from './pages/FunctionalCzech';
import Culture from './pages/Culture';
import About from './pages/About';
import SearchPage from './pages/SearchPage';
import Bookmarks from './pages/Bookmarks';
import TopBar from './components/TopBar';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-czech-bg text-gray-800 font-sans">
        <TopBar />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            
            {/* Grammar Routes */}
            <Route path="/grammar" element={<Grammar />} />
            <Route path="/grammar/navigator" element={<CzechNavigator />} />
            <Route path="/grammar/prefixes" element={<VerbPrefixes />} />
            <Route path="/grammar/verbs150" element={<Verbs150 />} />
            <Route path="/grammar/irregular-verbs" element={<IrregularVerbs />} />
            <Route path="/grammar/conjugation-models" element={<ConjugationModels />} />
            <Route path="/grammar/verbs-general" element={<VerbsGeneral />} />
            <Route path="/grammar/case-forms" element={<CaseForms />} />
            <Route path="/grammar/case-usage" element={<CaseUsage />} />
            <Route path="/grammar/gender" element={<Gender />} />
            <Route path="/grammar/adjectives" element={<Adjectives />} />
            <Route path="/grammar/pronouns" element={<Pronouns />} />
            <Route path="/grammar/numerals" element={<Numerals />} />
            <Route path="/grammar/conjunctions" element={<Conjunctions />} />
            <Route path="/grammar/prepositions" element={<Prepositions />} />
            <Route path="/grammar/adverbs" element={<Adverbs />} />
            
            {/* Exercise Routes */}
            <Route path="/exercises" element={<Exercises />} />
            <Route path="/exercises/ai" element={<AITutor />} />
            <Route path="/exercises/:id" element={<ExerciseDetail />} />
            
            <Route path="/functional-czech" element={<FunctionalCzech />} />
            <Route path="/culture" element={<Culture />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        
        <footer className="py-6 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Czechly.com. <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">Licensed under CC BY 4.0</a>. | <Link to="/about" className="hover:text-czech-blue transition-colors">About</Link>
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;
