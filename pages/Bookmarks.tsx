
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Bookmark, Trash2, ExternalLink, Play, Layers, Plus, FolderPlus, FileText, Printer, Download, Book } from 'lucide-react';
import { useBookmarks, StudySequence } from '../hooks/useBookmarks';
import StudyPlayer from '../components/StudyPlayer';
import ContentRenderer from '../components/ContentRenderer';
import { EpubGenerator } from '../utils/EpubGenerator';
import { renderToStaticMarkup } from 'react-dom/server';

const Bookmarks: React.FC = () => {
  const navigate = useNavigate();
  const { bookmarks, sequences, toggleBookmark, createSequence, deleteSequence } = useBookmarks();
  
  const [activeTab, setActiveTab] = useState<'items' | 'sequences'>('items');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [showNewSequenceInput, setShowNewSequenceInput] = useState(false);
  const [newSequenceName, setNewSequenceName] = useState('');
  
  // Player State
  const [playerConfig, setPlayerConfig] = useState<{ active: boolean, mode: 'slideshow'|'flashcard', items: typeof bookmarks } | null>(null);

  // Printing State
  const [printingSequence, setPrintingSequence] = useState<StudySequence | null>(null);
  
  // Loading State for Export
  const [isExporting, setIsExporting] = useState<string | null>(null);

  // Group bookmarks by category for display
  const groupedBookmarks = bookmarks.reduce((acc, b) => {
    if (!acc[b.category]) acc[b.category] = [];
    acc[b.category].push(b);
    return acc;
  }, {} as Record<string, typeof bookmarks>);

  const handleNavigate = (path: string, hash: string) => {
    navigate(`${path}${hash}`);
  };

  const toggleSelection = (id: string) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(i => i !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const handleCreateSequence = (e: React.FormEvent) => {
    e.preventDefault();
    if (newSequenceName.trim() && selectedItems.length > 0) {
      createSequence(newSequenceName.trim(), selectedItems);
      setNewSequenceName('');
      setShowNewSequenceInput(false);
      setSelectedItems([]);
      setActiveTab('sequences');
    }
  };

  const startPlayer = (sequence: StudySequence, mode: 'slideshow'|'flashcard') => {
    const sequenceItems = sequence.itemIds
        .map(id => bookmarks.find(b => b.id === id))
        .filter((b): b is typeof bookmarks[0] => !!b); // Filter out any deleted bookmarks
    
    if (sequenceItems.length > 0) {
        setPlayerConfig({ active: true, mode, items: sequenceItems });
    }
  };

  const handlePrint = (sequence: StudySequence) => {
    setPrintingSequence(sequence);
  };

  const handleEpubExport = async (sequence: StudySequence) => {
    setIsExporting(sequence.id);
    
    try {
        const epub = new EpubGenerator(sequence.name, "Czechly User");
        
        // Filter valid items
        const sequenceItems = sequence.itemIds
            .map(id => bookmarks.find(b => b.id === id))
            .filter((b): b is typeof bookmarks[0] => !!b);

        for (const item of sequenceItems) {
            // Render the content component to static HTML string
            const contentHtml = renderToStaticMarkup(<ContentRenderer item={item} />);
            // Add a small header to each chapter content
            const chapterHtml = `
                <div class="meta">
                    <p class="tag" style="background:#eee; padding:2px 5px; display:inline-block; font-size:0.8em; border-radius:3px;">${item.category.toUpperCase()}</p>
                </div>
                ${contentHtml}
            `;
            epub.addChapter(item.title, chapterHtml);
        }

        await epub.download();
    } catch (e) {
        console.error("Failed to generate EPUB", e);
        alert("Could not generate EPUB. Please try again.");
    } finally {
        setIsExporting(null);
    }
  };

  // Trigger print when sequence is selected
  useEffect(() => {
    if (printingSequence) {
        // Allow time for DOM to render the print view
        setTimeout(() => {
            window.print();
        }, 500);
    }
  }, [printingSequence]);

  // Reset print state after print dialog is closed
  useEffect(() => {
    const afterPrint = () => {
        setPrintingSequence(null);
    };
    window.addEventListener('afterprint', afterPrint);
    return () => window.removeEventListener('afterprint', afterPrint);
  }, []);

  return (
    <div className="w-full px-4 md:px-8 pb-12">
      
      {/* Hidden Print Area */}
      {printingSequence && (
        <div className="print-area hidden">
            <style>{`
                @media print {
                    body > *:not(.print-area) { display: none !important; }
                    .print-area { display: block !important; position: absolute; top: 0; left: 0; width: 100%; background: white; z-index: 9999; }
                    .print-page { break-after: page; padding: 2cm; min-height: 100vh; }
                    .print-cover { display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; height: 100vh; }
                    .print-item { break-inside: avoid; margin-bottom: 3rem; border-bottom: 1px solid #eee; padding-bottom: 2rem; }
                }
            `}</style>
            
            {/* Cover Page */}
            <div className="print-page print-cover">
                <h1 className="text-6xl font-hand text-czech-blue mb-4">{printingSequence.name}</h1>
                <p className="text-xl text-gray-500">A Czechly Study Ebook</p>
                <p className="text-sm text-gray-400 mt-8">{new Date().toLocaleDateString()}</p>
            </div>

            {/* Content Pages */}
            <div className="print-page">
                {printingSequence.itemIds
                    .map(id => bookmarks.find(b => b.id === id))
                    .filter((b): b is typeof bookmarks[0] => !!b)
                    .map((item, idx) => (
                        <div key={item.id} className="print-item">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-xs font-bold uppercase bg-gray-100 px-2 py-1 rounded text-gray-600">{item.category}</span>
                                <h2 className="text-2xl font-bold text-gray-800">{item.title}</h2>
                            </div>
                            <ContentRenderer item={item} />
                        </div>
                    ))}
            </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-sm overflow-hidden min-h-[500px]">
        <div className="p-8 md:p-12 relative">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-500 hover:text-czech-blue mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Back Home
          </button>

          <div className="flex items-center justify-between gap-3 mb-8 border-b border-gray-100 pb-4">
            <div className="flex items-center gap-3">
               <Bookmark className="text-yellow-500 fill-yellow-500" size={32} />
               <h2 className="text-4xl text-gray-800 font-hand">My Bookmarks</h2>
            </div>
            {/* Tabs */}
            <div className="flex bg-gray-100 p-1 rounded-lg">
                <button
                  onClick={() => setActiveTab('items')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${
                    activeTab === 'items' ? 'bg-white text-czech-blue shadow-sm' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Bookmark size={16} /> All Items
                </button>
                <button
                  onClick={() => setActiveTab('sequences')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${
                    activeTab === 'sequences' ? 'bg-white text-czech-blue shadow-sm' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Layers size={16} /> Slideshows
                </button>
            </div>
          </div>

          {/* New Sequence Creator (Floating or Inline) */}
          {selectedItems.length > 0 && activeTab === 'items' && (
            <div className="sticky top-0 z-20 mb-6 animate-in slide-in-from-top-2">
                <div className="bg-czech-blue text-white p-4 rounded-lg shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="font-bold">
                        {selectedItems.length} item{selectedItems.length !== 1 && 's'} selected
                    </div>
                    
                    {!showNewSequenceInput ? (
                        <div className="flex gap-2">
                            <button 
                                onClick={() => setSelectedItems([])}
                                className="px-4 py-2 rounded bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium"
                            >
                                Clear
                            </button>
                            <button 
                                onClick={() => setShowNewSequenceInput(true)}
                                className="px-4 py-2 rounded bg-white text-czech-blue hover:bg-gray-100 transition-colors text-sm font-bold flex items-center gap-2"
                            >
                                <FolderPlus size={18} /> Create Slideshow
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleCreateSequence} className="flex gap-2 w-full md:w-auto">
                            <input 
                                type="text" 
                                placeholder="Slideshow Name (e.g. Hard Verbs)" 
                                value={newSequenceName}
                                onChange={e => setNewSequenceName(e.target.value)}
                                className="px-3 py-2 rounded text-gray-800 text-sm flex-grow min-w-[200px] focus:outline-none"
                                autoFocus
                            />
                            <button 
                                type="submit"
                                className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600 transition-colors text-sm font-bold"
                            >
                                Save
                            </button>
                            <button 
                                type="button"
                                onClick={() => setShowNewSequenceInput(false)}
                                className="p-2 rounded hover:bg-white/10"
                            >
                                <Trash2 size={18} />
                            </button>
                        </form>
                    )}
                </div>
            </div>
          )}

          {activeTab === 'items' && (
            <>
              {bookmarks.length === 0 ? (
                <div className="text-center py-16 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                  <Bookmark className="mx-auto h-12 w-12 text-gray-300 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900">No bookmarks yet</h3>
                  <p className="text-gray-500 mt-1">Save sections from grammar and culture pages to access them quickly here.</p>
                  <button 
                    onClick={() => navigate('/grammar')}
                    className="mt-6 px-4 py-2 bg-czech-blue text-white rounded-lg hover:bg-blue-800 transition-colors"
                  >
                    Browse Grammar
                  </button>
                </div>
              ) : (
                <div className="space-y-8 animate-in fade-in">
                  {Object.keys(groupedBookmarks).map(category => (
                    <div key={category}>
                      <h3 className="text-lg font-bold text-gray-400 uppercase tracking-wider mb-3 px-1">{category}</h3>
                      <div className="grid gap-3">
                        {groupedBookmarks[category].map(item => (
                          <div 
                            key={item.id}
                            className={`group flex items-center gap-4 p-4 border rounded-xl transition-all cursor-pointer ${selectedItems.includes(item.id) ? 'border-czech-blue bg-blue-50' : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-sm'}`}
                            onClick={() => toggleSelection(item.id)}
                          >
                            <div className={`w-5 h-5 rounded border flex items-center justify-center flex-shrink-0 transition-colors ${selectedItems.includes(item.id) ? 'bg-czech-blue border-czech-blue' : 'border-gray-300 bg-white'}`}>
                                {selectedItems.includes(item.id) && <div className="w-2 h-2 bg-white rounded-full"></div>}
                            </div>

                            <div className="flex-grow flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="bg-blue-50 p-2 rounded-lg text-czech-blue">
                                        <ExternalLink size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800 text-lg">
                                        {item.title}
                                        </h4>
                                        <p className="text-sm text-gray-500 font-mono">{item.path}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleNavigate(item.path, item.hash);
                                        }}
                                        className="p-2 text-gray-400 hover:text-czech-blue hover:bg-gray-100 rounded-full transition-colors"
                                        title="Go to page"
                                    >
                                        <ExternalLink size={18} />
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleBookmark(item);
                                        }}
                                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                                        title="Remove bookmark"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {activeTab === 'sequences' && (
             <div className="animate-in fade-in">
                {sequences.length === 0 ? (
                    <div className="text-center py-16 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                        <Layers className="mx-auto h-12 w-12 text-gray-300 mb-4" />
                        <h3 className="text-lg font-medium text-gray-900">No slideshows created</h3>
                        <p className="text-gray-500 mt-1 max-w-sm mx-auto">Select items from the "All Items" tab to create a study set.</p>
                        <button 
                            onClick={() => setActiveTab('items')}
                            className="mt-6 px-4 py-2 bg-czech-blue text-white rounded-lg hover:bg-blue-800 transition-colors"
                        >
                            Select Items
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {sequences.map(seq => {
                            // Calculate valid items (in case bookmarks were deleted)
                            const validItemCount = seq.itemIds.filter(id => bookmarks.some(b => b.id === id)).length;
                            const isProcessing = isExporting === seq.id;
                            
                            return (
                                <div key={seq.id} className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group flex flex-col">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-czech-blue"></div>
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-800 mb-1">{seq.name}</h3>
                                            <p className="text-sm text-gray-500">{validItemCount} items</p>
                                        </div>
                                        <button 
                                            onClick={() => deleteSequence(seq.id)}
                                            className="text-gray-300 hover:text-red-500 transition-colors"
                                            title="Delete Slideshow"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>

                                    <div className="flex gap-2 mt-auto flex-wrap">
                                        <button 
                                            onClick={() => startPlayer(seq, 'slideshow')}
                                            className="flex-1 flex items-center justify-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded-lg font-medium text-sm transition-colors"
                                        >
                                            <Play size={14} /> Slideshow
                                        </button>
                                        <button 
                                            onClick={() => startPlayer(seq, 'flashcard')}
                                            className="flex-1 flex items-center justify-center gap-1.5 bg-czech-blue hover:bg-blue-800 text-white py-2 rounded-lg font-medium text-sm transition-colors"
                                        >
                                            <Layers size={14} /> Cards
                                        </button>
                                        <div className="flex gap-2 w-full mt-2">
                                            <button 
                                                onClick={() => handlePrint(seq)}
                                                className="flex-1 flex items-center justify-center gap-1 bg-gray-50 hover:bg-green-100 hover:text-green-800 text-gray-600 py-2 rounded-lg font-medium transition-colors text-xs border border-gray-200"
                                                title="Print PDF"
                                            >
                                                <Printer size={16} /> PDF
                                            </button>
                                            <button 
                                                onClick={() => handleEpubExport(seq)}
                                                disabled={isProcessing}
                                                className={`flex-1 flex items-center justify-center gap-1 bg-gray-50 hover:bg-orange-100 hover:text-orange-800 text-gray-600 py-2 rounded-lg font-medium transition-colors text-xs border border-gray-200 ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
                                                title="Export EPUB"
                                            >
                                                {isProcessing ? <span className="animate-spin mr-1">●</span> : <Book size={16} />} EPUB
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
             </div>
          )}

        </div>
      </div>

      {playerConfig && playerConfig.active && (
        <StudyPlayer 
            items={playerConfig.items} 
            mode={playerConfig.mode} 
            onClose={() => setPlayerConfig(null)} 
        />
      )}

    </div>
  );
};

export default Bookmarks;
