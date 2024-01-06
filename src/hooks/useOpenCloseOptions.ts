import { useState } from 'react';
import { OptionsRequest } from '../types/interface';

export const useOpenCloseOptionsCodeMirror = () => {
  const [isVisibleOptionsRequest, setVisibleOptionsRequest] =
    useState<OptionsRequest>('var');

  const openCloseOptions = (name: OptionsRequest) => {
    if (isVisibleOptionsRequest !== 'var') {
      setVisibleOptionsRequest('var');
    } else {
      setVisibleOptionsRequest(name);
    }
  };

  return { isVisibleOptionsRequest, openCloseOptions };
};
