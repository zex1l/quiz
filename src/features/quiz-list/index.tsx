import { useGetQuizList } from './hooks/use-get-quiz-list';
import { QuizListHeader } from './ui/quiz-list-header';
import { QuizListCard, QuizListItems } from './ui/quiz-list-items';
import { QuizListLayout } from './ui/quiz-list-layout';

export const QuizList = () => {
  const { quizList } = useGetQuizList();

  return (
    <QuizListLayout
      header={
        <QuizListHeader
          total={quizList?.length || 0}
          title="Тесты и викторины"
          description=" Выберите интересующую вас тему и проверьте свои знания в
            увлекательном формате"
        />
      }
      list={
        <QuizListItems
          children={quizList?.map((quiz) => (
            <QuizListCard
              id={quiz._id}
              difficulty={quiz.difficulty}
              name={quiz.name}
              tags={quiz.tags}
              totalQuestions={quiz.cards.length}
            />
          ))}
        />
      }
    />
  );
};
