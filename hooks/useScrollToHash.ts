
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Decode content to handle special chars if any, remove '#'
      const id = decodeURIComponent(location.hash.replace('#', ''));
      
      // Wait a tick for rendering
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Highlight effect
          element.classList.add('transition-all', 'duration-1000', 'bg-yellow-50/50');
          setTimeout(() => {
            element.classList.remove('bg-yellow-50/50');
          }, 2000);
        }
      }, 100);
    }
  }, [location]);
};
