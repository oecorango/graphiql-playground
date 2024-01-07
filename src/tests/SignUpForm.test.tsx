import { expect, test } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SignUpForm } from '../components/SignUpForm';
import { initializeApp } from 'firebase/app';
import { Provider } from 'react-redux';
import { store } from '../store/store';

const firebaseMock = {
  apiKey: '1',
  authDomain: '1',
  projectId: '1',
  storageBucket: '1',
  messagingSenderId: '1',
  appId: '1',
};
initializeApp(firebaseMock);

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
