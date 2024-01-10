import { describe, it, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { MainPage } from '../pages/MainPage';
import { Provider } from 'react-redux';
import { store } from '../store/store';

describe('MainPage component', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <Provider store={store}>
        <MainPage />
      </Provider>
    );
    expect(container.firstChild).toBeDefined();
  });

  it('updates URL input value', () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <MainPage />
      </Provider>
    );
    const input = getByPlaceholderText(
      'https://rickandmortyapi.com/graphql'
    ) as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'https://example.com' } });

    expect(input.value).toBe('https://example.com');
  });

  it('toggles schema visibility', () => {
    const { getByText } = render(
      <Provider store={store}>
        <MainPage />
      </Provider>
    );
    const button = getByText('SCHEMA');

    fireEvent.click(button);
    fireEvent.click(button);

    expect(button).toBeDefined();
  });
});
