
import { useState, useEffect } from 'react';

export interface Bookmark {
  id: string;
  title: string;
  path: string;
  hash: string;
  category: string;
  timestamp: number;
}

export interface StudySequence {
  id: string;
  name: string;
  itemIds: string[];
  createdAt: number;
}

// Custom event to sync bookmarks across components
const BOOKMARKS_UPDATED = 'czechly_bookmarks_updated';

export const useBookmarks = () => {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [sequences, setSequences] = useState<StudySequence[]>([]);

  const loadData = () => {
    try {
      const storedBookmarks = localStorage.getItem('czechly_bookmarks');
      if (storedBookmarks) {
        setBookmarks(JSON.parse(storedBookmarks));
      }
      const storedSequences = localStorage.getItem('czechly_sequences');
      if (storedSequences) {
        setSequences(JSON.parse(storedSequences));
      }
    } catch (e) {
      console.error("Failed to load bookmarks/sequences", e);
    }
  };

  useEffect(() => {
    loadData();

    const handleStorageChange = () => loadData();
    window.addEventListener(BOOKMARKS_UPDATED, handleStorageChange);
    
    return () => {
      window.removeEventListener(BOOKMARKS_UPDATED, handleStorageChange);
    };
  }, []);

  const dispatchUpdate = () => {
    window.dispatchEvent(new Event(BOOKMARKS_UPDATED));
  };

  const toggleBookmark = (item: Omit<Bookmark, 'timestamp'>) => {
    const exists = bookmarks.some(b => b.id === item.id);
    let newBookmarks;
    if (exists) {
      newBookmarks = bookmarks.filter(b => b.id !== item.id);
      // Also remove from sequences
      const newSequences = sequences.map(s => ({
        ...s,
        itemIds: s.itemIds.filter(id => id !== item.id)
      })).filter(s => s.itemIds.length > 0); // Remove empty sequences? Maybe keep them. Keeping for now.
      localStorage.setItem('czechly_sequences', JSON.stringify(newSequences));
      setSequences(newSequences);
    } else {
      newBookmarks = [...bookmarks, { ...item, timestamp: Date.now() }];
    }
    setBookmarks(newBookmarks);
    localStorage.setItem('czechly_bookmarks', JSON.stringify(newBookmarks));
    dispatchUpdate();
  };

  const createSequence = (name: string, itemIds: string[]) => {
    const newSequence: StudySequence = {
      id: Date.now().toString(),
      name,
      itemIds,
      createdAt: Date.now()
    };
    const newSequences = [...sequences, newSequence];
    setSequences(newSequences);
    localStorage.setItem('czechly_sequences', JSON.stringify(newSequences));
    dispatchUpdate();
  };

  const deleteSequence = (id: string) => {
    const newSequences = sequences.filter(s => s.id !== id);
    setSequences(newSequences);
    localStorage.setItem('czechly_sequences', JSON.stringify(newSequences));
    dispatchUpdate();
  };

  const isBookmarked = (id: string) => bookmarks.some(b => b.id === id);

  return { 
    bookmarks, 
    sequences, 
    toggleBookmark, 
    isBookmarked,
    createSequence,
    deleteSequence
  };
};
