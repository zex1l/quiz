import { api } from 'convex/_generated/api';
import type { Id } from 'convex/_generated/dataModel';
import { useQuery } from 'convex/react';

export const useGetAnswer = ({ answerId }: { answerId: string }) => {
  const answer = useQuery(api.quiz.getQuizResults, {
    id: answerId as Id<'quizResults'>,
  });

  return { answer };
};
