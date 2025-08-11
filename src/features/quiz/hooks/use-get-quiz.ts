import { useQuery } from 'convex/react';
import { api } from '../../../../convex/_generated/api';
import type { Id } from 'convex/_generated/dataModel';

export const useGetQuiz = ({ quizId }: { quizId: string }) => {
  const quiz = useQuery(api.quiz.getQuizById, {
    id: quizId as Id<'quizzes'>,
  });

  return { quiz };
};
