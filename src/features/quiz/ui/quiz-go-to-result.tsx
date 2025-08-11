import { Button } from '@/shared/ui/button';

export const QuizGoToResult = ({ onClick }: { onClick?: () => void }) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-medium">
        Мы проверили ответы, вы можете перейти к результатам
      </h2>
      <Button onClick={onClick}>Перейти к результатам</Button>
    </div>
  );
};
