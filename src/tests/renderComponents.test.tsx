import React from 'react';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { router } from '../routes/Routes';
import { initializeApp } from 'firebase/app';
import { expect, test } from 'vitest';
import { SignUpForm } from '../components/SignUpForm';
import { Provider } from 'react-redux';
import { persistor, store } from '../store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { LoginForm } from '../components/LoginForm';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGE_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};
initializeApp(firebaseConfig);

test('renders the RootLayout for the application', () => {
  render(
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  );

  const logo = screen.getByRole('logo');
  expect(logo).toBeTruthy();
});

test('render fields for the registration form', () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <SignUpForm />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );

  const emailInput = screen.getByRole('emailInput');
  const passwordInput = screen.getByRole('passwordInput');
  const confirmPasswordInput = screen.getByRole('confirmPasswordInput');
  const btnSubmit = screen.getByRole('btnSubmit');

  expect([
    emailInput,
    passwordInput,
    confirmPasswordInput,
    btnSubmit,
  ]).toBeTruthy();
});

test('render fields for the login form', () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <LoginForm />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );

  const emailInput = screen.getByRole('emailInput');
  const passwordInput = screen.getByRole('passwordInput');
  const btnSubmit = screen.getByRole('btnSubmit');

  expect([emailInput, passwordInput, btnSubmit]).toBeTruthy();
});
