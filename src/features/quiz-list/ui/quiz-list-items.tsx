import { ROUTES, type QuizPageParams } from '@/shared/constants/routes';
import { Tag } from '@/shared/ui/tag';
import { getDifficultyColor } from '@/shared/utils/get-difficulty-color';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import { href, Link } from 'react-router-dom';

export const QuizListItems = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
};

export const QuizListCard = ({
  name,
  difficulty,
  tags,
  totalQuestions,
  id,
}: {
  name: string;
  tags: string[];
  difficulty: string;
  totalQuestions: number;
  id: string;
}) => {
  return (
    <motion.div
      className="group relative bg-white rounded-xl border border-purple-100 overflow-hidden shadow-sm transition-shadow "
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-indigo-500"></div>

      <div className="p-5">
        <div className="flex justify-between items-start mb-4">
          <Link to={href(ROUTES.QUIZE, { quizId: id } as QuizPageParams)}>
            <motion.h3
              className="text-lg font-bold text-purple-900 line-clamp-2 cursor-pointer hover:text-purple-900"
              transition={{ duration: 0.2 }}
            >
              {name}
            </motion.h3>
          </Link>

          <motion.div
            className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getDifficultyColor(difficulty)}`}
          >
            {difficulty}
          </motion.div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.slice(0, 3).map((tag, index) => (
            <Tag tag={tag} key={index} />
          ))}
          {tags.length > 3 && (
            <div className="bg-purple-50 px-2.5 py-1 rounded-full text-xs text-purple-700">
              +{tags.length - 3}
            </div>
          )}
        </div>

        <div className="flex items-center justify-between border-t border-purple-100 pt-4">
          <div className="flex items-center gap-2 text-purple-600">
            <HelpCircle className="w-4 h-4" />
            <span className="text-sm font-medium">
              {totalQuestions} вопросов
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
