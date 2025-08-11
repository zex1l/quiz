import { motion } from 'framer-motion';

export const QuizPreview = ({
  actions,
  children,
  title,
}: {
  title?: string;
  actions?: React.ReactNode;
  children?: React.ReactNode;
}) => {
  return (
    <motion.div
      className="flex flex-col gap-3 p-4 border border-purple-500 bg-purple-400/20 rounded-2xl shadow w-full md:max-w-[400px]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', damping: 10 }}
    >
      <motion.h1
        className="text-2xl font-bold text-primary"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        {title}
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
      >
        {children}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
      >
        {actions}
      </motion.div>
    </motion.div>
  );
};
