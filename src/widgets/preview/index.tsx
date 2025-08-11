import { ROUTES } from '@/shared/constants/routes';
import { Button } from '@/shared/ui/button';
import { CodeUi } from '@/shared/ui/code';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const items = [
  {
    icon: '💧',
    title: 'Проверь глубину знаний',
    text: 'Наши квизы погружают в самые сложные темы разработки',
  },
  {
    icon: '🌊',
    title: 'Покори волны технологий',
    text: 'От основ до передовых практик - всё в одном потоке',
  },
  {
    icon: '⚓',
    title: 'Брось якорь экспертизы',
    text: 'Закрепляй знания и делись достижениями',
  },
];

export const Preview = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-50 to-purple-100 overflow-hidden">
      <div className="max-w-4xl mx-auto rounded-2xl shadow-xl overflow-hidden border border-purple-200 md:mt-16">
        <div className="h-3 bg-purple-500 w-full"></div>
        <div className="p-6 md:p-10">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', damping: 10 }}
            >
              <div className="inline-flex items-center justify-center bg-purple-300 rounded-full p-4 mb-6">
                <div className=" text-purple-800">
                  <Code size={36} />
                </div>
              </div>
            </motion.div>
            <div className="flex flex-col gap-4 mb-6">
              <motion.h1
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <span className="text-3xl md:text-4xl font-bold ">
                  Добро пожаловать в{' '}
                  <span className="text-purple-800">Quiz</span>
                </span>
              </motion.h1>
              <motion.p
                className="text-lg text-gray-600 max-w-xl mx-auto"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Где каждый разработчик проходит испытание глубинами знаний
              </motion.p>
            </div>
            <motion.div
              className="grid grid-cols-1  lg:grid-cols-3 gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-purple-300 rounded-lg shadow-lg p-6"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <motion.div
                    whileHover={{
                      y: -5,
                    }}
                  >
                    <h3 className="text-xl font-bold text-purple-950 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.text}</p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
            <div className="flex flex-col items-center gap-5">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <Button size={'lg'} className="mt-8">
                  <Link to={ROUTES.QUIZES_LIST}>Начать</Link>
                </Button>
              </motion.div>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <CodeUi>{'// Quiz, погружение в код'}</CodeUi>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
