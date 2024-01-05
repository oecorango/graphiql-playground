import configureStore from 'redux-mock-store';
import responseReducer, { setResponse } from '../store/responseSlice';
import { beforeEach } from 'vitest';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';

const mockStore = configureStore([]);

describe('responseSlice', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let store: any;

  beforeEach(() => {
    store = mockStore({
      response: '',
    });
  });

  it('should set the response', () => {
    const response = 'Test response';

    const expectedAction = {
      type: 'fetchData/setResponse',
      payload: response,
    };

    store.dispatch(setResponse(response));

    const actions = store.getActions();
    expect(actions).toEqual([expectedAction]);
    const actualState = responseReducer(store.getState(), expectedAction);
    const expectedState = { response };

    expect(actualState).toEqual(expectedState);
  });
});
