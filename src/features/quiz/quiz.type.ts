import type { Id } from 'convex/_generated/dataModel';

export type QuizCard = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
};

export type QuizType = {
  _id?: Id<'quizzes'>;
  _creationTime?: number;
  name: string;
  description: string;
  tags: string[];
  difficulty: 'Легкая' | 'Средняя' | 'Сложная' | string;
  cards: QuizCard[];
};
