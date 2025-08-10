import { createBrowserRouter } from 'react-router-dom';
import App from './app';
import { HomePage } from '@/pages/home.page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
]);
