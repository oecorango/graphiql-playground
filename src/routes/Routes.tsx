import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from 'react-router-dom';
import { RootLayout } from '../layouts/RootLayout';
import { AuthPage } from '../pages/AuthPage';
import { ErrorPage } from '../pages/ErrorPage';
import { MainPage } from '../pages/MainPage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}>
        <Route index element={<MainPage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Route>
    </Route>
  )
);
