import { describe, test, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ErrorPage } from '../pages/ErrorPage';

describe('ErrorPage component', () => {
  it('renders children when there is no error', () => {
    const { getByText } = render(
      <MemoryRouter>
        <ErrorPage />
      </MemoryRouter>
    );

    expect(getByText('Oops! Page not found!')).toBeTruthy();
  });

  test('renders link to main page', () => {
    render(
      <MemoryRouter>
        <ErrorPage />
      </MemoryRouter>
    );

    const linkElement = screen.getByRole('link', { name: /main page/i });
    expect(linkElement).toBeTruthy();
  });
});
