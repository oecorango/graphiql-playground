import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { router } from '../routes/Routes';
import { initializeApp } from 'firebase/app';
import { expect, test } from 'vitest';

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
      <RouterProvider router={router} />
    </React.StrictMode>
  );

  const logo = screen.getByRole('logo');
  expect(logo).toBeTruthy();
});
