import { expect, test } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SignUpForm } from '../components/SignUpForm';
import { initializeApp } from 'firebase/app';
import { Provider } from 'react-redux';
import { store } from '../store/store';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGE_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};
initializeApp(firebaseConfig);

test('SignUpForm renders correctly', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <SignUpForm />
      </MemoryRouter>
    </Provider>
  );

  const emailInput = screen.getByRole('emailInput');
  const passwordInput = screen.getByRole('passwordInput');
  const confirmPasswordInput = screen.getByRole('confirmPasswordInput');
  const signUpButton = screen.getByRole('btnSubmit');
  const loginLink = screen.getByText('Already have an account? Log in');

  expect(emailInput).toBeTruthy();
  expect(passwordInput).toBeTruthy();
  expect(confirmPasswordInput).toBeTruthy();
  expect(signUpButton).toBeTruthy();
  expect(loginLink).toBeTruthy();
});

test('SignUpForm submits with valid data', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <SignUpForm />
      </MemoryRouter>
    </Provider>
  );

  const emailInput = screen.getByRole('emailInput');
  const passwordInput = screen.getByRole('passwordInput');
  const confirmPasswordInput = screen.getByRole('confirmPasswordInput');
  const signUpButton = screen.getByRole('btnSubmit');

  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });
  fireEvent.change(confirmPasswordInput, { target: { value: 'password123' } });

  fireEvent.click(signUpButton);
});
