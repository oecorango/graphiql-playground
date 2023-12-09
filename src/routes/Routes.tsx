import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '../layouts/RootLayout';
import { LoginPage } from '../pages/LoginPage';
import { ErrorPage } from '../pages/ErrorPage';
import { MainPage } from '../pages/MainPage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { WelcomePage } from '../pages/WelcomePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <MainPage /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/registration', element: <RegistrationPage /> },
      { path: '/welcome', element: <WelcomePage /> },
      { errorElement: <ErrorPage /> },
    ],
  },
]);
