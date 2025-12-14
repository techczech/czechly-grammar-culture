
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  ArrowLeft, BookOpen, Info, Feather, Utensils, CheckSquare, ChevronRight, Grid,
  AlignLeft, List, Users, Clock, CircleHelp, Sliders, FileText, Heart, Music, Download
} from 'lucide-react';
import { cultureData, CultureCategory, Section } from '../data/cultureData';
import UniversalSection from '../components/UniversalSection';
import { useScrollToHash } from '../hooks/useScrollToHash';
import { EpubGenerator } from '../utils/EpubGenerator';
import ContentRenderer from '../components/ContentRenderer';
import { renderToStaticMarkup } from 'react-dom/server';

const Culture: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const [isExporting, setIsExporting] = useState(false);
  
  // Standard scroll behavior
  useScrollToHash();

  // Effect to handle deep linking to sections
  useEffect(() => {
    if (location.hash) {
      const hashId = decodeURIComponent(location.hash.replace('#', ''));
      
      // Check if we need to switch category based on the hash
      const foundCategory = cultureData.find(cat => {
        // Direct category link
        if (cat.id === hashId) return true;

        // Section link
        return cat.sections.some((sec, idx) => {
           const safeId = `sec-${idx}-${sec.title.replace(/\s+/g, '-').toLowerCase().substring(0, 20)}`;
           return safeId === hashId;
        });
      });

      if (foundCategory) {
        setActiveCategoryId(foundCategory.id);
      }
    }
  }, [location.hash]);

  // Re-trigger scroll when category changes to ensure we land on the section
  useEffect(() => {
    if (activeCategoryId && location.hash) {
       setTimeout(() => {
         const id = decodeURIComponent(location.hash.replace('#', ''));
         const element = document.getElementById(id);
         if (element) {
           element.scrollIntoView({ behavior: 'smooth', block: 'start' });
           // Visual cue
           element.classList.add('transition-all', 'duration-1000', 'bg-yellow-50/50');
           setTimeout(() => element.classList.remove('bg-yellow-50/50'), 2000);
         }
       }, 200); // Slight delay to allow render
    }
  }, [activeCategoryId, location.hash]);

  const activeCategory = cultureData.find(c => c.id === activeCategoryId);

  const getIcon = (iconName: string, size: number = 20) => {
    switch(iconName) {
      case 'Info': return <Info size={size} />;
      case 'Feather': return <Feather size={size} />;
      case 'Utensils': return <Utensils size={size} />;
      case 'CheckSquare': return <CheckSquare size={size} />;
      case 'Heart': return <Heart size={size} />;
      case 'Music': return <Music size={size} />;
      default: return <BookOpen size={size} />;
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleExportAll = async () => {
    if (isExporting) return;
    setIsExporting(true);
    
    try {
        const epub = new EpubGenerator("Czechly Culture Guide", "Czechly");
        
        // Loop through all categories
        for (const cat of cultureData) {
            // Category Title Page
            epub.addChapter(cat.title, `<h1 style="font-size:3em; color:#164e87; text-align:center; margin-top:30%;">${cat.title}</h1><p style="text-align:center; font-style:italic;">${cat.description}</p>`);
            
            // Loop through sections
            for (const [idx, sec] of cat.sections.entries()) {
                // Construct a fake item for ContentRenderer
                const mockItem = {
                    id: `cult-sec-${sec.title}-${cat.id}`, // Format recognized by ContentRenderer
                    title: sec.title,
                    path: '/culture',
                    hash: '',
                    category: 'Culture',
                    timestamp: 0
                };
                
                // ContentRenderer handles the layout logic for us
                const contentHtml = renderToStaticMarkup(<ContentRenderer item={mockItem} />);
                epub.addChapter(sec.title, contentHtml);
            }
        }

        await epub.download();
    } catch (e) {
        console.error("Export failed", e);
        alert("Failed to create EPUB.");
    } finally {
        setIsExporting(false);
    }
  };

  // Dashboard View (No Category Selected)
  if (!activeCategory) {
    return (
      <div className="w-full min-h-screen bg-gray-50 p-6 md:p-12">
        <div className="max-w-6xl mx-auto animate-in fade-in duration-500">
          <div className="flex justify-between items-start mb-8">
            <button 
                onClick={() => navigate('/')}
                className="flex items-center gap-2 text-gray-500 hover:text-czech-blue transition-colors text-sm font-medium"
            >
                <ArrowLeft size={16} />
                Back Home
            </button>
            <button 
                onClick={handleExportAll}
                disabled={isExporting}
                className="flex items-center gap-2 bg-czech-blue text-white px-4 py-2 rounded-lg font-bold shadow-md hover:bg-blue-800 transition-all hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {isExporting ? <span className="animate-spin">●</span> : <Download size={18} />}
                Export All as EPUB
            </button>
          </div>
          
          <div className="mb-12 text-center">
            <h1 className="text-5xl md:text-6xl text-czech-blue font-hand mb-4">Czech Culture & History</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore the rich tapestry of Czech life, from historical legends to daily habits and modern politics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {cultureData.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategoryId(category.id)}
                className="group relative overflow-hidden bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 text-left"
              >
                <div className={`h-2 w-full ${category.color.split(' ')[0].replace('bg-', 'bg-')}`}></div> {/* Top Color Bar */}
                <div className="p-8">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${category.color}`}>
                    {getIcon(category.icon, 32)}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-czech-blue transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed mb-6">
                    {category.description}
                  </p>
                  <div className="flex items-center text-sm font-semibold text-czech-blue opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                    Explore Sections <ChevronRight size={16} className="ml-1" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Reader View (Category Selected)
  return (
    <div className="w-full flex flex-col md:flex-row min-h-screen bg-gray-50">
      
      {/* Sidebar Navigation */}
      <div className="w-full md:w-72 bg-white border-r border-gray-200 flex-shrink-0 z-10 h-screen sticky top-0 overflow-y-auto hidden md:block">
        <div className="p-6 border-b border-gray-100">
           <button 
            onClick={() => setActiveCategoryId(null)}
            className="flex items-center gap-2 text-gray-500 hover:text-czech-blue transition-colors text-sm font-medium mb-6"
          >
            <Grid size={16} />
            Back to Dashboard
          </button>
          <div className={`inline-flex p-3 rounded-lg mb-4 ${activeCategory.color}`}>
             {getIcon(activeCategory.icon, 24)}
          </div>
          <h2 className="text-2xl text-gray-900 font-bold leading-tight">{activeCategory.title}</h2>
        </div>
        <nav className="p-4 space-y-1">
          {activeCategory.sections.map((section, idx) => {
            const safeId = `sec-${idx}-${section.title.replace(/\s+/g, '-').toLowerCase().substring(0, 20)}`;
            return (
              <button
                key={idx}
                onClick={() => scrollToSection(safeId)}
                className="block w-full text-left p-3 rounded-lg text-sm text-gray-600 hover:bg-gray-50 hover:text-czech-blue transition-colors focus:outline-none focus:bg-gray-50 truncate"
              >
                {section.title}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden bg-white p-4 border-b border-gray-200 sticky top-0 z-20 flex items-center justify-between shadow-sm">
         <div className="flex items-center gap-3">
            <button onClick={() => setActiveCategoryId(null)} className="p-2 -ml-2 text-gray-500">
              <ArrowLeft size={20} />
            </button>
            <span className="font-bold text-gray-800 truncate">{activeCategory.title}</span>
         </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow p-4 md:p-12 overflow-y-auto">
        <div className="max-w-4xl mx-auto animate-in fade-in duration-500 pb-24">
          
          <div className="mb-12 pb-4 border-b border-gray-200">
            <h1 className="text-5xl md:text-6xl text-czech-blue font-hand mb-4">{activeCategory.title}</h1>
            <p className="text-xl text-gray-500 leading-relaxed">
              {activeCategory.description}
            </p>
          </div>

          <div className="space-y-16">
            {activeCategory.sections.map((section, idx) => {
              const safeId = `sec-${idx}-${section.title.replace(/\s+/g, '-').toLowerCase().substring(0, 20)}`;
              return (
                <div key={idx}>
                  <SectionRenderer section={section} categoryId={activeCategory.id} safeId={safeId} />
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
};

const SectionRenderer: React.FC<{section: Section, categoryId: string, safeId: string}> = ({ section, categoryId, safeId }) => {
  const getSectionIcon = (type: string) => {
    const className = `opacity-80`;
    switch (type) {
      case 'text': return <AlignLeft className={className} size={28} />;
      case 'key-value': return <List className={className} size={28} />;
      case 'biography': return <Users className={className} size={28} />;
      case 'timeline': return <Clock className={className} size={28} />;
      case 'menu': return <Utensils className={className} size={28} />;
      case 'quiz': return <CircleHelp className={className} size={28} />;
      case 'scale': return <Sliders className={className} size={28} />;
      case 'checklist': return <CheckSquare className={className} size={28} />;
      case 'song-comparison': return <Music className={className} size={28} />;
      default: return <FileText className={className} size={28} />;
    }
  };

  const getColors = (id: string) => {
    switch(id) {
        case 'facts': return { border: 'border-blue-600', text: 'text-blue-800', iconBg: 'bg-blue-50 text-blue-600' };
        case 'values': return { border: 'border-purple-600', text: 'text-purple-800', iconBg: 'bg-purple-50 text-purple-600' };
        case 'lifestyle': return { border: 'border-green-600', text: 'text-green-800', iconBg: 'bg-green-50 text-green-600' };
        case 'prides': return { border: 'border-red-600', text: 'text-red-800', iconBg: 'bg-red-50 text-red-600' };
        case 'snippets': return { border: 'border-pink-600', text: 'text-pink-800', iconBg: 'bg-pink-50 text-pink-600' };
        case 'quizzes': return { border: 'border-yellow-500', text: 'text-yellow-800', iconBg: 'bg-yellow-50 text-yellow-600' };
        default: return { border: 'border-czech-blue', text: 'text-czech-blue', iconBg: 'bg-gray-100 text-czech-blue' };
    }
  };

  const colors = getColors(categoryId);

  return (
    <UniversalSection
        id={safeId}
        title={<span className={`text-3xl md:text-4xl font-hand font-bold ${colors.text} tracking-wide leading-none`}>{section.title}</span>}
        searchableTitle={section.title}
        path="/culture"
        category="Culture"
        className={`bg-white rounded-xl shadow-lg border-l-8 ${colors.border} overflow-hidden`}
        headerClass="bg-gray-50 px-8 py-6 border-b border-gray-100"
        contentClass="p-8"
        icon={<div className={`p-3 rounded-lg shadow-sm border border-white flex-shrink-0 ${colors.iconBg}`}>{getSectionIcon(section.type)}</div>}
        subTitle={section.intro && <p className="text-base text-gray-600 mt-1 italic leading-relaxed">{section.intro}</p>}
    >
      {renderContent(section)}
    </UniversalSection>
  );
};

const renderContent = (section: Section) => {
  switch (section.type) {
    case 'text':
      return (
        <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
          {section.content.map((paragraph: string, idx: number) => (
            <p key={idx} dangerouslySetInnerHTML={{__html: paragraph}} />
          ))}
        </div>
      );
    
    case 'key-value':
      return (
        <div className="grid grid-cols-1 gap-0 bg-white border border-gray-200 rounded-lg overflow-hidden">
          {section.content.map((item: any, idx: number) => (
            <div key={idx} className={`flex flex-col md:flex-row p-4 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b border-gray-100 last:border-0`}>
              <div className="w-full md:w-1/3 font-semibold text-czech-blue mb-1 md:mb-0">{item.key}</div>
              <div className="w-full md:w-2/3 text-gray-700">{item.value}</div>
            </div>
          ))}
        </div>
      );

    case 'biography':
      return (
        <div className="grid grid-cols-1 gap-6">
          {section.content.map((item: any, idx: number) => (
            <div key={idx} className="flex gap-4">
               <div className="flex-shrink-0 w-8 h-8 rounded-full bg-czech-blue text-white flex items-center justify-center font-bold text-sm shadow-sm">
                 {idx + 1}
               </div>
               <div>
                 <h4 className="font-bold text-lg text-gray-800 mb-1">{item.name}</h4>
                 <div className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{__html: item.desc}} />
               </div>
            </div>
          ))}
        </div>
      );

    case 'timeline':
       return (
        <div className="relative border-l-2 border-czech-blue ml-4 space-y-8 py-2 my-4">
          {section.content.map((item: any, idx: number) => (
            <div key={idx} className="relative pl-8">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-czech-blue"></div>
              <div className="font-bold text-czech-blue text-lg mb-1">{item.time}</div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 shadow-sm">
                <div className="mb-2">
                  <span className="text-xs font-bold uppercase text-gray-400 tracking-wider">Czech Lands</span>
                  <p className="text-gray-800 font-medium">{item.czech}</p>
                </div>
                {item.world && (
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <span className="text-xs font-bold uppercase text-gray-400 tracking-wider">Rest of World</span>
                    <p className="text-gray-600 text-sm italic">{item.world}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      );

    case 'menu':
      return (
        <div className="grid grid-cols-1 gap-6">
          {section.content.map((cat: any, idx: number) => (
            <div key={idx} className="border border-gray-200 rounded-lg p-5 bg-white shadow-sm">
              <h4 className="text-center font-hand text-2xl text-czech-blue mb-4 pb-2 border-b border-gray-100">{cat.category}</h4>
              <div className="space-y-4">
                {cat.items.map((item: any, i: number) => (
                  <div key={i} className="flex justify-between items-baseline">
                    <div className="flex flex-col">
                      <span className="font-bold text-gray-800">{item.name}</span>
                      <span className="text-sm text-gray-500 italic">{item.desc}</span>
                    </div>
                    <div className="font-mono text-czech-red font-medium pl-4">{item.price}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      );

    case 'quiz':
      return <QuizComponent questions={section.content} />;

    case 'scale':
      return (
        <div className="space-y-8 my-4">
          {section.content.map((item: any, idx: number) => (
            <div key={idx} className="bg-gray-50 p-4 rounded-lg border border-gray-100">
              <div className="flex justify-between text-sm font-bold text-gray-800 mb-4">
                <span className="text-gray-400 w-1/3 text-xs uppercase tracking-wider">{item.left.split('.')[0].substring(0, 15)}...</span>
                <span className="text-czech-blue w-1/3 text-center">{item.label}</span>
                <span className="text-gray-400 w-1/3 text-right text-xs uppercase tracking-wider">{item.right.split('.')[0].substring(0, 15)}...</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full relative mb-4">
                 <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-czech-blue rounded-full border-2 border-white shadow cursor-pointer hover:scale-125 transition-transform"></div>
              </div>
              <div className="flex justify-between text-sm text-gray-600 gap-8">
                <div className="flex-1 text-left">{item.left}</div>
                <div className="flex-1 text-right">{item.right}</div>
              </div>
            </div>
          ))}
        </div>
      );
      
      case 'checklist':
        return (
          <div className="space-y-3">
             {section.content.map((item: string, idx: number) => (
               <label key={idx} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors border border-gray-100">
                 <input type="checkbox" className="mt-1 w-5 h-5 text-czech-blue rounded border-gray-300 focus:ring-czech-blue" />
                 <span className="text-gray-800 leading-relaxed">{item}</span>
               </label>
             ))}
          </div>
        );

      case 'song-comparison':
        const getYoutubeId = (url: string) => {
          if (!url) return null;
          const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
          const match = url.match(regExp);
          return (match && match[2].length === 11) ? match[2] : null;
        };

        const renderVideo = (title: string, url: string, lyrics?: string) => {
          const videoId = getYoutubeId(url);
          return (
            <div className="flex flex-col">
              <h4 className="font-bold text-czech-blue mb-2 text-lg">{title}</h4>
              <div className="w-full aspect-video bg-black rounded-lg overflow-hidden shadow-md mb-4">
                {videoId ? (
                  <iframe 
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={title}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white bg-gray-800">
                    Video unavailable
                  </div>
                )}
              </div>
              {lyrics && (
                <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-700 whitespace-pre-wrap font-serif border border-gray-100 max-h-[400px] overflow-y-auto leading-relaxed shadow-inner">
                  {lyrics}
                </div>
              )}
            </div>
          );
        };

        return (
          <div className="space-y-8">
            <p className="text-gray-700 italic text-lg leading-relaxed bg-pink-50/50 p-4 rounded-lg border border-pink-100">
              {section.content.description}
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {renderVideo(`Czech: ${section.content.czech.title}`, section.content.czech.url, section.content.czech.lyrics)}
              {renderVideo(`Original: ${section.content.original.title}`, section.content.original.url, section.content.original.lyrics)}
            </div>
          </div>
        );

    default:
      return <div>Unsupported content type</div>;
  }
};

const QuizComponent: React.FC<{questions: any[]}> = ({ questions }) => {
  const [revealed, setRevealed] = useState<boolean>(false);
  
  return (
    <div>
      <div className="space-y-6">
        {questions.map((q: any, idx: number) => {
          const isMulti = Array.isArray(q.a);
          return (
            <div key={idx} className="p-5 border border-gray-200 rounded-xl bg-gray-50/50">
              <h5 className="font-bold text-gray-800 mb-4 flex items-start gap-3 text-lg">
                <span className="text-czech-blue">{idx + 1}.</span>
                <div>
                  {q.q}
                  {isMulti && <span className="block text-sm text-gray-500 font-normal mt-1">(Select {q.a.length})</span>}
                </div>
              </h5>
              <div className="grid grid-cols-1 gap-2 pl-6">
                {q.options.map((opt: string, i: number) => {
                  let isCorrect = false;
                  if (Array.isArray(q.a)) {
                    isCorrect = q.a.includes(opt);
                  } else {
                    isCorrect = opt === q.a;
                  }
                  
                  let btnClass = "bg-white border-gray-200 text-gray-600 hover:border-blue-300";
                  
                  if (revealed) {
                    if (isCorrect) btnClass = "border-green-500 bg-green-50 text-green-800 font-medium ring-1 ring-green-500";
                  }

                  return (
                    <div key={i} className={`px-4 py-3 border rounded-lg text-sm transition-all shadow-sm ${btnClass}`}>
                      {opt}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-8 flex justify-center sticky bottom-6 z-10">
        <button 
          onClick={() => setRevealed(!revealed)}
          className="bg-czech-blue text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-blue-800 hover:scale-105 transition-all flex items-center gap-2"
        >
          {revealed ? <><CheckSquare size={20} /> Hide Answers</> : <><CheckSquare size={20} /> Check Answers</>}
        </button>
      </div>
    </div>
  );
};

export default Culture;
