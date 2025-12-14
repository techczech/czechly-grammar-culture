
import React from 'react';
import { FileText, Video, ArrowLeft, Compass } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import UniversalSection from '../components/UniversalSection';
import { useScrollToHash } from '../hooks/useScrollToHash';

const CzechNavigator: React.FC = () => {
  const navigate = useNavigate();
  useScrollToHash();

  return (
    <div className="w-full px-4 md:px-8 pb-12">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-sm overflow-hidden min-h-[500px]">
        <div className="p-8 md:p-12">
          <button 
            onClick={() => navigate('/grammar')}
            className="flex items-center gap-2 text-gray-500 hover:text-czech-blue mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Grammar
          </button>

          <h2 className="text-4xl text-czech-blue font-hand mb-6">Czech Language Navigator</h2>
          
          <UniversalSection
            id="navigator-main"
            title="Overview"
            searchableTitle="Czech Language Navigator"
            path="/grammar/navigator"
            category="Grammar"
            icon={<Compass size={24} className="text-czech-blue" />}
            collapsible={false}
          >
            <p className="text-gray-700 leading-relaxed mb-8">
              The Czech Language Navigator is an open grammar for learners of Czech as a foreign language. 
              It provides a structural overview of the language with a focus on practical usage, bridging the gap between theoretical grammar and real-world application.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* PDF Card */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 flex flex-col hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <FileText className="text-czech-red" size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-800">Navigator PDF</h4>
                </div>
                <p className="text-sm text-gray-600 mb-6 flex-grow">
                  Czech Grammar and Usage from Learners' Perspective. A complete guide available for download.
                </p>
                <a 
                  href="https://1drv.ms/b/s!An9kQ7E0DfHzi91Bw3ZwDMxp5N-c6A"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="block w-full text-center bg-czech-blue text-white py-2 rounded hover:bg-opacity-90 transition-opacity font-medium"
                >
                  Open Resource
                </a>
              </div>

              {/* Video Card */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 flex flex-col hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                    <Video className="text-czech-blue" size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-800">Video Introduction</h4>
                </div>
                <div className="w-full aspect-video bg-black rounded overflow-hidden relative shadow-inner">
                  <iframe 
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/xifHWAVPl8c" 
                    title="Czech Language Navigator"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </UniversalSection>
        </div>
      </div>
    </div>
  );
};

export default CzechNavigator;
