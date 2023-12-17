import React, { useCallback, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { solarizedDark } from '@uiw/codemirror-theme-solarized/dark';
import styles from './CodeEditor.module.scss';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { setRequest } from '../store/dataSlice';

type Props = {
  response: string;
};
export const CodeEditor = ({ response }: Props) => {
  const dispatch = useAppDispatch();
  const { request } = useAppSelector((state) => state.data);

  const onChange = useCallback(
    (val: string) => {
      dispatch(setRequest(val));
    },
    [dispatch]
  );

  return (
    <div className={styles.editor}>
      <CodeMirror
        className={styles.codeMirror}
        value={request}
        theme={solarizedDark}
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
      />

      <CodeMirror
        className={styles.codeMirrorGreen}
        value={response}
        theme={solarizedDark}
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
      />
    </div>
  );
};
