import { memo } from 'react';
import { motion } from 'framer-motion';

export const QuizHeader = memo(
  ({
    title,
    description,
    progress,
  }: {
    title?: string;
    description?: React.ReactNode;
    progress?: React.ReactNode;
  }) => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <motion.h1
            className="text-2xl font-bold text-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {description}
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {progress}
        </motion.div>
      </div>
    );
  }
);
