import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../modules/auth';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
]);

export default router;
