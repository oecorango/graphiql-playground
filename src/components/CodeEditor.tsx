import React, { useCallback } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import {
  solarizedDark,
  solarizedDarkInit,
} from '@uiw/codemirror-theme-solarized/dark';
import styles from './CodeEditor.module.scss';
import { useAppDispatch, useAppSelector } from '../hooks/useRedux';
import { json } from '@codemirror/lang-json';
import { setHeaders, setQuery, setVariables } from '../store/requestSlice';
import { headersObjToString } from '../utils/headersObjToString';
import { THEME_GREEN } from '../constants/codeMirrorTheme';
import { useOpenCloseOptionsCodeMirror } from '../hooks/useOpenCloseOptions';

type Props = {
  response: string;
  clickHandler: () => Promise<void>;
};

export const CodeEditor = ({ response, clickHandler }: Props) => {
  const dispatch = useAppDispatch();
  const { query, variables, headers } = useAppSelector(
    (state) => state.requestData
  );

  const { openCloseOptions, isVisibleOptionsRequest } =
    useOpenCloseOptionsCodeMirror();

  // TODO придумать как объединить все три нижестоящие функции в одну
  const onChangeQuery = useCallback(
    (val: string) => {
      dispatch(setQuery(val));
    },
    [dispatch]
  );

  const onChangeVariable = useCallback(
    (val: string) => {
      dispatch(setVariables(val));
    },
    [dispatch]
  );

  const onChangeHeaders = useCallback(
    (val: string) => {
      dispatch(setHeaders(val));
    },
    [dispatch]
  );

  return (
    <div className={styles.editor}>
      <div className={styles.codeRequest}>
        <CodeMirror
          className={styles.requestMirror}
          value={query}
          theme={solarizedDark}
          extensions={[javascript({ jsx: true })]}
          onChange={onChangeQuery}
        />

        <div>
          <div>
            <CodeMirror
              value={variables}
              theme={solarizedDarkInit({ settings: THEME_GREEN })}
              extensions={[json()]}
              height={isVisibleOptionsRequest === 'var' ? '160px' : '0px'}
              onChange={onChangeVariable}
            />
            <CodeMirror
              value={'{\n' + `${headersObjToString(headers)}` + '\n}'}
              theme={solarizedDarkInit({ settings: THEME_GREEN })}
              extensions={[json()]}
              height={isVisibleOptionsRequest === 'headers' ? '160px' : '0px'}
              onChange={onChangeHeaders}
            />
          </div>
          <div className={styles.buttonGroup}>
            <button
              className={
                isVisibleOptionsRequest === 'var'
                  ? `${styles.button} ${styles.buttonRequest} ${styles.buttonActive}`
                  : `${styles.button} ${styles.buttonRequest}`
              }
              onClick={() => openCloseOptions('var')}
            >
              VARIABLES
            </button>
            <button
              className={
                isVisibleOptionsRequest === 'headers'
                  ? `${styles.button} ${styles.buttonRequest} ${styles.buttonActive}`
                  : `${styles.button} ${styles.buttonRequest}`
              }
              onClick={() => openCloseOptions('headers')}
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
