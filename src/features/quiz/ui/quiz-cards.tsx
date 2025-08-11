import { Button } from '@/shared/ui/button';
import { RadioGroup, RadioGroupItem } from '@/shared/ui/radio-group';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export const QuizCardsList = ({ children }: { children?: React.ReactNode }) => {
  return <div className="relative">{children}</div>;
};

export const QuizCardItem = ({
  options,
  question,
  animationIndex,
  markAsReady,
  onAnswerQuestion,
  questionId,
}: {
  options: string[];
  questionId: string;
  question: string;
  animationIndex: number;
  markAsReady: boolean;
  onAnswerQuestion?: (questionId: string, answer: string) => void;
}) => {
  const [answer, setAnswer] = useState<string>('');

  return (
    <AnimatePresence>
      {!markAsReady && (
        <motion.div
          className="absolute min-h-[300px] h-full w-[calc(100%_-_20px)] max-w-xl bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl shadow-md p-3 lg:p-6 border border-primary overflow-hidden"
          initial={{ opacity: 0, x: 100 + animationIndex * 10 }}
          animate={{
            opacity: 1,
            x: 0 + animationIndex * 10 - 10,
            transition: { delay: animationIndex * 0.1 },
          }}
          exit={{
            opacity: 0,
            x: 500 + animationIndex * 10,
            rotate: 10,
            transitionDelay: 0,
            transition: { duration: 0.4, ease: 'easeInOut' },
          }}
        >
          <motion.div
            className="flex flex-col gap-4 h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <h2 className="text-xl font-bold text-primary">{question}</h2>
            <RadioGroup
              onValueChange={(value) => setAnswer(value)}
              className="flex flex-col gap-2"
            >
              {options.map((option, index) => (
                <div key={index} className="flex items-center gap-2">
                  <RadioGroupItem value={option} />
                  <label className="font-medium">{option}</label>
                </div>
              ))}
            </RadioGroup>
            <div className="mt-auto">
              <Button
                onClick={() => onAnswerQuestion?.(questionId, answer)}
                className="w-full"
                disabled={!answer}
              >
                Ответить
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
