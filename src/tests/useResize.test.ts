import { renderHook } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { useWidthResize } from '../hooks/useResize';

describe('useWidthResize hook', () => {
  test('returns the initial width', () => {
    const { result } = renderHook(() => useWidthResize());

    expect(result.current).toBe(window.innerWidth);
  });

  test('updates width on window resize', () => {
    const { result } = renderHook(() => useWidthResize());

    const initialWidth = window.innerWidth;
    const newWidth = 1024;

    const resizeEvent = new Event('resize');

    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: newWidth,
    });
    window.dispatchEvent(resizeEvent);

    expect(result.current).toBe(newWidth);
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: initialWidth,
    });
  });
});
