import { useParams } from 'react-router-dom';
import { useGetAnswer } from './hooks/use-get-answer';
import { QuizAnswerLayout } from './ui/quiz-answer-layout';
import type { AnswerPageParams } from '@/shared/constants/routes';
import { QuizAnswerHeader } from './ui/quiz-answer-header';
import { QuizAnswerCard, QuizAnswerCardsList } from './ui/quiz-anser-cards';

export const QuizAnswer = () => {
  const { answerId } = useParams<AnswerPageParams>();
  const { answer } = useGetAnswer({ answerId: answerId || '' });

  return (
    <QuizAnswerLayout
      header={
        answer && (
          <QuizAnswerHeader
            score={answer?.result.score}
            total={answer?.quiz.cards.length}
            username={answer?.result.username}
            title={answer?.quiz.name}
            description={answer?.quiz.description}
          />
        )
      }
      children={
        answer && (
          <QuizAnswerCardsList
            cards={answer?.quiz.cards.map((item, index) => (
              <QuizAnswerCard
                animationIndex={index}
                key={item.id}
                question={item.question}
                correctAnswer={item.correctAnswer}
                userResult={answer.result.answers[item.id]}
                options={item.options}
              />
            ))}
          />
        )
      }
    />
  );
};
