import React, { useCallback, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import {
  solarizedDark,
  solarizedDarkInit,
} from '@uiw/codemirror-theme-solarized/dark';
import styles from './CodeEditor.module.scss';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { json } from '@codemirror/lang-json';
import { Settings } from '@uiw/codemirror-themes/src';
import { OptionsRequest } from '../types/interface';
import { setQuery } from '../store/requestSlice';

type Props = {
  response: string;
  clickHandler: () => Promise<void>;
};
export const CodeEditor = ({ response, clickHandler }: Props) => {
  const dispatch = useAppDispatch();
  const { query, headers, variable } = useAppSelector(
    (state) => state.requestData
  );
  const [isVisibleOptionsRequest, setVisibleOptionsRequest] =
    useState<OptionsRequest>('none');

  const onChange = useCallback(
    (val: string) => {
      dispatch(setQuery(val));
    },
    [dispatch]
  );

  const openCloseOptionsCodeMirror = (name: OptionsRequest) => {
    if (
      isVisibleOptionsRequest !== 'none' &&
      isVisibleOptionsRequest === name
    ) {
      setVisibleOptionsRequest('none');
    } else {
      setVisibleOptionsRequest(name);
    }
  };

  const themeOptions: Settings = {
    background: '#004445',
    selectionMatch: '#004445',
    gutterBackground: '#004445',
    caret: '#fff',
    foreground: '#fff',
  };

  return (
    <div className={styles.editor}>
      <div className={styles.codeRequest}>
        <CodeMirror
          className={styles.requestMirror}
          value={query}
          theme={solarizedDark}
          extensions={[javascript({ jsx: true })]}
          onChange={onChange}
        />

        <div>
          <div>
            <CodeMirror
              theme={solarizedDarkInit({ settings: themeOptions })}
              extensions={[json()]}
              height={isVisibleOptionsRequest === 'var' ? '160px' : '0px'}
              // onChange={onChange}
            />
            <CodeMirror
              theme={solarizedDarkInit({ settings: themeOptions })}
              extensions={[json()]}
              height={isVisibleOptionsRequest === 'headers' ? '160px' : '0px'}
              // onChange={onChange}
            />
          </div>
          <div className={styles.buttonGroup}>
            <button
              className={
                isVisibleOptionsRequest === 'var'
                  ? `${styles.button} ${styles.buttonRequest} ${styles.buttonActive}`
                  : `${styles.button} ${styles.buttonRequest}`
              }
              onClick={() => openCloseOptionsCodeMirror('var')}
            >
              VARIABLES
            </button>
            <button
              className={
                isVisibleOptionsRequest === 'headers'
                  ? `${styles.button} ${styles.buttonRequest} ${styles.buttonActive}`
                  : `${styles.button} ${styles.buttonRequest}`
              }
              onClick={() => openCloseOptionsCodeMirror('headers')}
            >
              HEADERS
            </button>
          </div>
        </div>
      </div>

      <CodeMirror
        className={styles.codeResponse}
        value={response}
        theme={solarizedDark}
        extensions={[json()]}
        readOnly={true}
      />

      <button
        className={`${styles.button} ${styles.schemaButton}`}
        onClick={clickHandler}
      >
        SCHEMA
      </button>
    </div>
  );
};
