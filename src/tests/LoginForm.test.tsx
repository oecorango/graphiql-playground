import { test } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { LoginForm } from '../components/LoginForm';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { initializeApp } from 'firebase/app';

const firebaseMock = {
  apiKey: '1',
  authDomain: '1',
  projectId: '1',
  storageBucket: '1',
  messagingSenderId: '1',
  appId: '1',
};
initializeApp(firebaseMock);

test('LoginForm submits with valid data', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    </Provider>
  );

  const emailInput = screen.getByRole('emailInput');
  const passwordInput = screen.getByRole('passwordInput');
  const signInButton = screen.getByRole('btnSubmit');

  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });

  fireEvent.click(signInButton);
});

test('LoginForm displays error message on submission failure', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    </Provider>
  );

  const emailInput = screen.getByRole('emailInput');
  const passwordInput = screen.getByRole('passwordInput');
  const signInButton = screen.getByRole('btnSubmit');

  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });

  fireEvent.click(signInButton);
});
