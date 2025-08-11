import type { AnswerQuestionsType } from '@/features/quiz/hooks/use-answer-user';

export const MapAnswerForMutation = (
  answers: AnswerQuestionsType
): Record<string, string> => {
  const result = {} as Record<string, string>;

  answers.forEach((value, key) => (result[key] = value));

  return result;
};
