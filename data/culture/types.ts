
export type ContentType = 'text' | 'key-value' | 'biography' | 'timeline' | 'menu' | 'quiz' | 'scale' | 'checklist' | 'qa' | 'song-comparison';

export interface Section {
  title: string;
  type: ContentType;
  content: any;
  intro?: string;
}

export interface CultureCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  sections: Section[];
}