import { Button } from '@/shared/ui/button';
import { useGetQuiz } from './hooks/use-get-quiz';
import { useStepQuiz } from './hooks/use-step-quiz';
import { QuizLayout } from './ui/quiz-layout';
import { QuizPreview } from './ui/quiz-preview';
import { Input } from '@/shared/ui/input';
import { QuizHeader } from './ui/quiz-header';
import { QuizCardItem, QuizCardsList } from './ui/quiz-cards';
import { useAnswerUser } from './hooks/use-answer-user';
import { Progress } from '@/shared/ui/progress';
import { useUploadAnswer } from './hooks/use-upload-answer';
import type { QuizPageParams } from '@/shared/constants/routes';
import { useParams } from 'react-router-dom';
import { QuizGoToResult } from './ui/quiz-go-to-result';

import { Loader } from '@/shared/ui/loader';

export const Quiz = () => {
  const { quizId } = useParams<QuizPageParams>();

  const { quiz } = useGetQuiz({ quizId: quizId || '' });

  const { step, onChangeStep } = useStepQuiz();
  const { answerQuestions, onAnswerQuestion, onChangeUsername, userName } =
    useAnswerUser();

  const { loadingResult, onUploadAnswer, onNavigateResult } = useUploadAnswer({
    quizId: quizId || '',
    onChangeStep,
  });
  const completeQuiz = quiz?.cards.length === answerQuestions.size;

  if (!quiz)
    return (
      <div className="h-screen w-full ">
        <Loader />
      </div>
    );

  return (
    <QuizLayout
      header={
        step === 'quiz' && (
          <QuizHeader
            title={quiz.name}
            description={quiz.description}
            progress={
              <>
                <span className="text-gray-600">
                  Вы ответили на {answerQuestions.size} вопросов
                </span>
                <Progress
                  currentValue={answerQuestions.size}
                  maxValue={quiz.cards.length}
                />
              </>
            }
          />
        )
      }
      quizCards={
        step === 'quiz' &&
        (!completeQuiz ? (
          <QuizCardsList
            children={quiz.cards.map((card, index) => (
              <QuizCardItem
                questionId={card.id}
                markAsReady={answerQuestions.has(card.id) || false}
                key={index}
                animationIndex={index}
                question={card.question}
                options={card.options}
                onAnswerQuestion={onAnswerQuestion}
              />
            ))}
          />
        ) : (
          <div className="flex flex-col gap-2">
            <p className="text-gray-400">Вы ответили на все вопросы</p>
            <Button onClick={() => onUploadAnswer(answerQuestions, userName)}>
              Завершить
            </Button>
          </div>
        ))
      }
      preview={
        step === 'preview' && (
          <QuizPreview
            title={'Введите ваше имя'}
            children={
              <>
                <Input
                  placeholder="Ваше имя"
                  onChange={onChangeUsername}
                  value={userName}
                />
              </>
            }
            actions={
              <Button disabled={!userName} onClick={() => onChangeStep('quiz')}>
                Начать квиз
              </Button>
            }
          />
        )
      }
      backgoundLoading={loadingResult && <Loader />}
      goToResult={
        step === 'result' && <QuizGoToResult onClick={onNavigateResult} />
      }
    />
  );
};
