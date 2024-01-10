import React from 'react';
import { render } from '@testing-library/react';
import ErrorBoundary from '../components/ErrorBoundary';
import { describe, it, expect } from 'vitest';

describe('ErrorBoundary Component', () => {
  it('renders children when there is no error', () => {
    const { getByText } = render(
      <ErrorBoundary>
        <div>Hello, World!</div>
      </ErrorBoundary>
    );

    expect(getByText('Hello, World!')).toBeTruthy();
  });
});
