import { createBrowserRouter, useNavigate } from 'react-router-dom';
import { RootLayout } from '../layouts/RootLayout';
import { LoginPage } from '../pages/LoginPage';
import { ErrorPage } from '../pages/ErrorPage';
import { MainPage } from '../pages/MainPage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { WelcomePage } from '../pages/WelcomePage';
import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { PrivateRouteProps } from '../types/interface';
import ErrorBoundary from '../components/ErrorBoundary';

function RedirectRoute({ element }: PrivateRouteProps) {
  const navigate = useNavigate();
  const auth = getAuth();

  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        navigate('/');
      }
    });
  }, [auth, navigate, user]);

  return user ? <MainPage /> : element;
}

function PrivateRoute({ element }: PrivateRouteProps) {
  const navigate = useNavigate();
  const auth = getAuth();

  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      if (!currentUser) {
        navigate('/welcome');
      }
    });
  }, [auth, navigate, user]);

  return !user ? <WelcomePage /> : element;
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ErrorBoundary>
        <RootLayout />
      </ErrorBoundary>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <PrivateRoute element={<MainPage />} />,
      },
      {
        path: '/login',
        element: <RedirectRoute path="/login" element={<LoginPage />} />,
      },
      {
        path: '/registration',
        element: (
          <RedirectRoute path="/registration" element={<RegistrationPage />} />
        ),
      },
      { path: '/welcome', element: <WelcomePage /> },
    ],
  },
]);
