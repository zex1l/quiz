import { useState } from 'react';

export type AnswerQuestionsType = Map<string, string>;

export const useAnswerUser = () => {
  const [userName, setUserName] = useState('');
  const [answerQuestions, setAnswerQuestions] = useState<AnswerQuestionsType>(
    new Map()
  );

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const onAnswerQuestion = (questionId: string, answer: string) => {
    setAnswerQuestions((prev) => new Map(prev.set(questionId, answer)));
  };

  return { userName, onChangeUsername, onAnswerQuestion, answerQuestions };
};
