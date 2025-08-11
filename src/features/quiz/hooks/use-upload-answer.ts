import { useMutation } from 'convex/react';
import type { AnswerQuestionsType } from './use-answer-user';
import { api } from 'convex/_generated/api';

import type { Id } from 'convex/_generated/dataModel';
import { MapAnswerForMutation } from '@/shared/utils/mappers';
import { useEffect, useRef, useState } from 'react';
import type { QuizType } from '../quiz.type';
import { href, useNavigate } from 'react-router-dom';
import { ROUTES, type AnswerPageParams } from '@/shared/constants/routes';
import type { Step } from './use-step-quiz';

type AnswerResponse = {
  quiz: QuizType;
  answers: Record<string, string>;
  score: number;
};

export const useUploadAnswer = ({
  quizId,
  onChangeStep,
}: {
  quizId: string;
  onChangeStep: (step: Step) => void;
}) => {
  const [loading, setLoading] = useState(false);
  const [resultId, setResultId] = useState<Id<'quizResults'> | null>(null);

  const uploadAnswersMutation = useMutation(api.quiz.checkAnswers);

  const navigate = useNavigate();
  const timerRef = useRef<number | null>(null);

  const onUploadAnswer = async (answers: AnswerQuestionsType, name: string) => {
    const answersForMutation = MapAnswerForMutation(answers);
    setLoading(true);
    try {
      const response = await uploadAnswersMutation({
        id: quizId as Id<'quizzes'>,
        answers: answersForMutation,
        name,
      });
      setResultId(response);

      timerRef.current = setTimeout(() => {
        setLoading(false);
        onChangeStep('result');
      }, 3000);
    } catch (error) {
      console.warn(error);
    }
  };

  const onNavigateResult = () => {
    navigate(
      href(ROUTES.QUIZE_ANSWER, {
        answerId: resultId,
        quizId,
      } as AnswerPageParams)
    );
  };

  useEffect(
    () => () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    },
    []
  );

  return { onUploadAnswer, loadingResult: loading, resultId, onNavigateResult };
};
