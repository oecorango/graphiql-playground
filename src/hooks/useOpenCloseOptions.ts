import { useState } from 'react';
import { OptionsRequest } from '../types/interface';

export const useOpenCloseOptionsCodeMirror = () => {
  const [isVisibleOptionsRequest, setVisibleOptionsRequest] =
    useState<OptionsRequest>('none');

  const openCloseOptions = (name: OptionsRequest) => {
    if (
      isVisibleOptionsRequest !== 'none' &&
      isVisibleOptionsRequest === name
    ) {
      setVisibleOptionsRequest('none');
    } else {
      setVisibleOptionsRequest(name);
    }
  };

  return { isVisibleOptionsRequest, openCloseOptions };
};
