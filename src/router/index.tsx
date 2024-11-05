import { createBrowserRouter } from 'react-router-dom';
import { Dashboard, AuthLayout } from '@/app/index';
import {
  Stat,
  OrdersNew,
  OrderCompleted,
  OrderCanceled,
  Leads,
  SignIn,
} from '@/pages';

export const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
    children: [
      {
        path: '/',
        element: <Stat />,
      },
      {
        path: '/orders-new',
        element: <OrdersNew />,
      },
      {
        path: '/order-completed',
        element: <OrderCompleted />,
      },
      {
        path: '/order-canceled',
        element: <OrderCanceled />,
      },
      {
        path: '/leads',
        element: <Leads />,
      },
    ],
  },
  {
    path: '/login',
    element: <AuthLayout />,
    children: [
      {
        path: '/login',
        element: <SignIn />,
      },
    ],
  },

  {
    path: '*',
    element: <h1>Error page</h1>,
  },
]);
