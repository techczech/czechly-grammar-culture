export interface Exercise {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export enum Page {
  HOME = 'home',
  EXERCISES = 'exercises'
}