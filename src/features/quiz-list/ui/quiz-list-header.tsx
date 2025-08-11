import { motion } from 'framer-motion';

export const QuizListHeader = ({
  total,
  description,
  title,
}: {
  title?: string;
  description?: string;
  total: number;
}) => {
  return (
    <motion.div
      className="w-full py-8 px-4 sm:px-6 lg:px-8 bg-purple-100  
                 dark:from-purple-900/95 dark:to-purple-800/95 border-b border-purple-200 
                 dark:border-purple-700/50 backdrop-blur-sm"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      role="banner"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-3">
          <motion.h1
            className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent 
                       bg-gradient-to-r from-purple-700 to-purple-900 
                       dark:from-purple-200 dark:to-purple-100"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            {title}
          </motion.h1>

          <motion.p
            className="text-purple-600 dark:text-purple-300/90 max-w-2xl mx-auto 
                       text-sm sm:text-base"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {description}
          </motion.p>

          <motion.div
            className="pt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <div
              className="inline-flex items-center px-3 py-1 rounded-full 
                           bg-purple-100 dark:bg-purple-900/50 border 
                           border-purple-200 dark:border-purple-800"
            >
              <span className="h-2 w-2 rounded-full bg-purple-500 mr-2" />
              <span className="text-xs sm:text-sm text-purple-700 dark:text-purple-200">
                Доступно {total} викторин
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
