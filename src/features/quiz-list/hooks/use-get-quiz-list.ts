import { api } from 'convex/_generated/api';
import { useQuery } from 'convex/react';

export const useGetQuizList = () => {
  const quizList = useQuery(api.quiz.getQuizzesList);

  return { quizList };
};
