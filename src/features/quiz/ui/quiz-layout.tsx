import { AnimatePresence, motion } from 'framer-motion';

export const QuizLayout = ({
  header,
  quizCards,
  preview,
  backgoundLoading,
  goToResult,
}: {
  header?: React.ReactNode;
  quizCards?: React.ReactNode;
  preview?: React.ReactNode;
  backgoundLoading?: React.ReactNode;
  goToResult?: React.ReactNode;
}) => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center px-5">
      {quizCards && (
        <div className="max-w-4xl mx-auto min-h-[600px] flex flex-col gap-10">
          {header}
          {quizCards}
        </div>
      )}
      {preview}
      <AnimatePresence>
        {backgoundLoading && (
          <motion.div
            className="absolute inset-0 w-full h-full bg-purple-400 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {backgoundLoading}
          </motion.div>
        )}
      </AnimatePresence>

      {goToResult}
    </div>
  );
};
