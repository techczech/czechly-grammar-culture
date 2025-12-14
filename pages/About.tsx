
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Globe } from 'lucide-react';

const About: React.FC = () => {
  const navigate = useNavigate();

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

          <h2 className="text-4xl text-czech-blue font-hand mb-6">About Let's Speak Czechly</h2>
          
          <div className="prose prose-lg text-gray-700 leading-relaxed">
            <p className="mb-6 text-xl font-medium">
              These resources were developed by <strong>Dominik Lukeš</strong> for teaching and learning Czech 
              over the period of 1992–2025.
            </p>
            
            <p className="mb-6">
              Dominik taught Czech language and culture in Prague for the MBA Enterprise Corps (1992), US Peace Corps (1992-1995), various private schools and later for Jerome of Prague College (2001-2002), School of Slavonic and East European Studies, University of London (1999-2001) and University of Glasgow (2002-2003). The resources on Czechly are based on his work there.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mt-8 p-6 bg-gray-50 rounded-xl border border-gray-100 mb-8">
              <Globe size={24} className="text-czech-blue mb-2 sm:mb-0" />
              <span className="text-gray-600">For more information and projects, visit the author's website: </span>
              <a 
                href="https://dominiklukes.net" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-czech-blue font-bold hover:underline text-lg"
              >
                dominiklukes.net
              </a>
            </div>

            <div className="text-sm text-gray-500 border-t border-gray-100 pt-6">
              <p className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a rel="license" href="http://creativecommons.org/licenses/by/4.0/" target="_blank" className="flex-shrink-0">
                  <img alt="Creative Commons License" style={{ borderWidth: 0 }} src="https://i.creativecommons.org/l/by/4.0/88x31.png" />
                </a>
                <span>
                  This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/" target="_blank" className="text-czech-blue hover:underline">Creative Commons Attribution 4.0 International License</a>.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
