
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SectionActions from './SectionActions';

interface UniversalSectionProps {
  id: string;
  title: React.ReactNode;
  searchableTitle: string; // Used for bookmarks and aria-labels
  path: string;
  category: string;
  children: React.ReactNode;
  
  // Options
  collapsible?: boolean;
  initiallyExpanded?: boolean;
  className?: string;
  headerClass?: string;
  contentClass?: string;
  
  // Slots
  icon?: React.ReactNode;
  subTitle?: React.ReactNode;
}

const UniversalSection: React.FC<UniversalSectionProps> = ({
  id,
  title,
  searchableTitle,
  path,
  category,
  children,
  collapsible = false,
  initiallyExpanded = false,
  className = "bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow mb-4",
  headerClass = "bg-gray-50 p-4 md:p-5",
  contentClass = "p-6 border-t border-gray-100",
  icon,
  subTitle
}) => {
  const [isExpanded, setIsExpanded] = useState(initiallyExpanded);

  const toggle = () => {
    if (collapsible) setIsExpanded(!isExpanded);
  };

  return (
    <div id={id} className={`scroll-mt-24 ${className} group`}>
      {/* Header Container */}
      <div className={`flex items-start justify-between gap-4 ${headerClass} ${collapsible ? 'cursor-pointer hover:bg-gray-100 transition-colors' : ''}`} onClick={collapsible ? toggle : undefined}>
         
         {/* Title Area */}
         <div className="flex items-start gap-4 flex-grow">
            {icon && <div className="flex-shrink-0 pt-1">{icon}</div>}
            <div className="flex flex-col gap-1 w-full">
                <div className="text-xl font-bold text-gray-800 font-hand tracking-wide leading-tight">
                    {title}
                </div>
                {subTitle && <div className="text-gray-500 text-sm leading-relaxed">{subTitle}</div>}
            </div>
         </div>

         {/* Actions Area */}
         <div className="flex items-center gap-2 flex-shrink-0 ml-2 pt-1" onClick={e => e.stopPropagation()}>
            <SectionActions 
                id={id} 
                title={searchableTitle} 
                path={path} 
                category={category} 
            />
            {collapsible && (
                <button 
                    onClick={toggle}
                    className="p-1 hover:bg-gray-200 rounded-full transition-colors ml-1 text-gray-400 hover:text-gray-600"
                    aria-label={isExpanded ? "Collapse" : "Expand"}
                >
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
            )}
         </div>
      </div>

      {/* Content */}
      {(!collapsible || isExpanded) && (
        <div className={`animate-in slide-in-from-top-2 duration-200 ${contentClass}`}>
            {children}
        </div>
      )}
    </div>
  );
};

export default UniversalSection;
