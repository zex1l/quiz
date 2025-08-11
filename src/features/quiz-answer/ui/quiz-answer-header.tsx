import { ROUTES } from '@/shared/constants/routes';
import { copyClipboard } from '@/shared/utils/copy-clipboard';
import { motion } from 'framer-motion';
import { Copy, MoveLeft } from 'lucide-react';
import { memo } from 'react';
import { Link } from 'react-router-dom';

export const QuizAnswerHeader = memo(
  ({
    description,
    score,
    title,
    total,
    username,
  }: {
    title?: string;
    description?: string;
    total: number;
    score: number;
    username: string;
  }) => {
    const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

    const url = window.location.href;

    return (
      <motion.div
        className="rounded-[0.65rem] bg-card text-card-foreground border border-border p-6 shadow-lg overflow-hidden relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        {/* Декоративные элементы */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-primary opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-4 left-4 w-12 h-12 bg-secondary opacity-20 rounded-full"></div>

        {/* Основное содержимое */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="font-medium  mb-4 text-primary">
              <Link className="flex items-center gap-2" to={ROUTES.QUIZES_LIST}>
                <MoveLeft /> Вернуться к списку
              </Link>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-card-foreground mb-2">
              {title}
            </h1>

            <p className="text-muted-foreground mb-6 max-w-3xl">
              {description}
            </p>

            <div className="mb-6">
              <h3 className="text-muted-foreground text-sm">Участник</h3>
              <p className="font-medium text-card-foreground">{username}</p>
            </div>

            {url && (
              <div className="mb-6">
                <div
                  className="flex items-center gap-2"
                  onClick={() => copyClipboard(url)}
                >
                  <Copy className="text-muted-foreground" size={20} />
                  <div className=" bg-purple-200 text-primary font-mono text-sm px-3 py-1.5 rounded-lg text-ellipsis text-nowrap max-w-[400px] overflow-hidden">
                    {url}
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          <div>
            {/* Блок с результатом */}
            <motion.div
              className="bg-popover border border-border rounded-lg p-4 flex-1 min-w-[200px]"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-muted-foreground text-sm mb-2">
                Ваш результат
              </h3>
              <div className="flex items-end gap-3">
                <span className="text-4xl font-bold text-primary">
                  {score}
                  <span className="text-xl text-muted-foreground">
                    /{total}
                  </span>
                </span>
                <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                  {percentage}%
                </span>
              </div>
              <div className="mt-4 h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${percentage}%` }}
                  transition={{ delay: 0.4, duration: 1, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    );
  }
);
