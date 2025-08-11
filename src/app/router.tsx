import { createHashRouter } from 'react-router-dom';
import App from './app';
import { HomePage } from '@/pages/home.page';
import { ROUTES } from '@/shared/constants/routes';

export const router = createHashRouter([
  {
    path: ROUTES.HOME,
    element: (
      <div className="min-h-screen overflow-x-hidden">
        <App />
      </div>
    ),
    children: [
      {
        path: ROUTES.HOME,
        element: <HomePage />,
      },
      {
        path: ROUTES.QUIZES_LIST,
        lazy: () => import('@/pages/quiz-list.page'),
      },
      {
        path: ROUTES.QUIZE,
        lazy: () => import('@/pages/quiz.page'),
      },
      {
        path: ROUTES.QUIZE_ANSWER,
        lazy: () => import('@/pages/quiz-answer.page'),
      },
    ],
  },
]);
