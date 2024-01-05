import userReducer, { removeUser, setUser } from '../store/userSlice';
import { expect, describe, it } from 'vitest';
describe('userSlice', () => {
  it('should remove user data', () => {
    const initialState = {
      name: 'John Doe',
      id: '123',
      email: 'john@example.com',
    };

    const action = removeUser();
    const newState = userReducer(initialState, action);

    expect(newState).toEqual({ name: null, id: null, email: null });
  });
  it('should set user data', () => {
    const initialState = {
      name: null,
      id: null,
      email: null,
    };

    const userData = {
      name: 'john@example.com',
      id: '123',
      email: 'john@example.com',
    };

    const action = setUser(userData);
    const newState = userReducer(initialState, action);

    expect(newState).toEqual(userData);
  });
});
