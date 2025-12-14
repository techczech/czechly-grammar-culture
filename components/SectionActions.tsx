
import React, { useState } from 'react';
import { Link, Bookmark, Check } from 'lucide-react';
import { useBookmarks } from '../hooks/useBookmarks';

interface SectionActionsProps {
  id: string;
  title: string;
  path: string; // Path relative to root, e.g. /grammar/verbs
  category: string;
  className?: string;
}

const SectionActions: React.FC<SectionActionsProps> = ({ id, title, path, category, className = "" }) => {
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const [copied, setCopied] = useState(false);
  
  // Safe ID for URL
  const safeId = encodeURIComponent(id);
  const hash = `#${safeId}`;

  const handleCopyLink = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Construct URL for HashRouter: origin + /#/ + path + hash
    // Example: https://site.com/#/grammar/verbs#verb-mit
    const baseUrl = window.location.href.split('#')[0];
    const fullUrl = `${baseUrl}#${path}${hash}`;
    
    navigator.clipboard.writeText(fullUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleBookmark({ id: safeId, title, path, hash, category });
  };

  const bookmarked = isBookmarked(safeId);

  return (
    <div className={`flex items-center gap-1 ${className}`} onClick={e => e.stopPropagation()}>
      <button 
        onClick={handleCopyLink}
        className="p-1.5 text-gray-400 hover:text-czech-blue transition-colors rounded-full hover:bg-blue-50"
        title="Copy Link to Section"
        aria-label="Copy link"
      >
        {copied ? <Check size={16} className="text-green-600" /> : <Link size={16} />}
      </button>
      <button 
        onClick={handleBookmark}
        className={`p-1.5 transition-colors rounded-full hover:bg-yellow-50 ${bookmarked ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'}`}
        title={bookmarked ? "Remove Bookmark" : "Bookmark Section"}
        aria-label="Bookmark"
      >
        <Bookmark size={16} fill={bookmarked ? "currentColor" : "none"} />
      </button>
    </div>
  );
};

export default SectionActions;
