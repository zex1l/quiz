import { cn } from '@/shared/lib/utils';
import { motion } from 'framer-motion';

export const QuizAnswerCardsList = ({ cards }: { cards?: React.ReactNode }) => {
  return <div className="grid grid-cols-1 gap-5">{cards}</div>;
};

export const QuizAnswerCard = ({
  options,
  question,
  correctAnswer,
  userResult,
  animationIndex,
}: {
  options: string[];
  question: string;
  correctAnswer: string;
  userResult: string;
  animationIndex: number;
}) => {
  return (
    <motion.div
      className=" min-h-[300px] h-full w-full bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl shadow-md p-6 border border-primary overflow-hidden"
      initial={{ opacity: 0, x: 100 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { delay: animationIndex * 0.1 },
      }}
      exit={{
        opacity: 0,
        x: 100,
        transition: { delay: animationIndex * 0.1 },
      }}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-muted-foreground text-sm">Вопрос</h3>
          <p className="font-medium text-card-foreground text-lg">{question}</p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2"></div>
          <h3 className="text-muted-foreground text-sm">Варианты ответов</h3>
        </div>
        <div className="flex flex-col gap-2">
          {options.map((option) => {
            const isCorrect = userResult === correctAnswer;

            return (
              <div
                key={option}
                className={cn(
                  'bg-popover  rounded-lg p-4 flex-1 min-w-[200px]',
                  isCorrect && option === correctAnswer && 'bg-green-400',
                  !isCorrect &&
                    userResult === option &&
                    'bg-red-400/40 text-red-900',
                  option === correctAnswer && 'bg-green-400/30 text-green-900'
                )}
              >
                <p>{option}</p>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};
