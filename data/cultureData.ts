
import { factsData } from './culture/facts';
import { lifestyleData } from './culture/lifestyle';
import { valuesData } from './culture/values';
import { prideData } from './culture/pride';
import { snippetsData } from './culture/snippets';
import { CultureCategory, Section, ContentType } from './culture/types';

export type { CultureCategory, Section, ContentType };

// Quizzes have been moved to the Exercises section (data/staticExercises.ts)

export const cultureData: CultureCategory[] = [
  factsData,
  valuesData,
  lifestyleData,
  prideData,
  snippetsData
];
