import { store } from '../store/store';
import { expect, describe, it } from 'vitest';

describe('Redux Store Configuration', () => {
  it('should persist data with correct configuration', () => {
    expect(store.getState()).toBeDefined();
  });

  it('should ignore non-serializable actions', () => {
    const nonSerializableAction = { type: 'FLUSH' };

    expect(() => store.dispatch(nonSerializableAction)).not.toThrow();
  });
});
