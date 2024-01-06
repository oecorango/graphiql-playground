import React, { useCallback, useEffect, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import {
  solarizedDark,
  solarizedDarkInit,
} from '@uiw/codemirror-theme-solarized/dark';
import styles from './CodeEditor.module.scss';
import { useAppDispatch, useAppSelector } from '../hooks/useRedux';
import { setHeaders, setQuery, setVariables } from '../store/requestSlice';
import { THEME_GREEN } from '../constants/codeMirrorTheme';
import { useOpenCloseOptionsCodeMirror } from '../hooks/useOpenCloseOptions';
import { lineNumbers } from '@codemirror/view';
import { history } from '@codemirror/commands';
import { autocompletion, closeBrackets } from '@codemirror/autocomplete';
import { bracketMatching, syntaxHighlighting } from '@codemirror/language';
import { oneDarkHighlightStyle } from '@codemirror/theme-one-dark';
import { graphql } from 'cm6-graphql';
import { GraphQLSchema } from 'graphql';
import { fetchSchema } from '../api/getSchema';

type Props = {
  response: string;
};

export const CodeEditor = ({ response }: Props) => {
  const dispatch = useAppDispatch();
  const { query, variables, headers, url } = useAppSelector(
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

  const [schema, setSchema] = useState<GraphQLSchema>();

  useEffect(() => {
    fetchSchema(url).then((data) => setSchema(data));
  }, [url]);

  return (
    <div className={styles.editor}>
      <div className={styles.codeRequest}>
        {schema ? (
          <CodeMirror
            className={styles.requestMirror}
            value={query}
            theme={solarizedDark}
            extensions={[
              bracketMatching(),
              closeBrackets(),
              history(),
              autocompletion(),
              lineNumbers(),
              syntaxHighlighting(oneDarkHighlightStyle),
              graphql(schema),
            ]}
            onChange={onChangeQuery}
          />
        ) : (
          <></>
        )}

        <div>
          <div>
            <CodeMirror
              value={JSON.stringify(variables, null, '  ')}
              theme={solarizedDarkInit({ settings: THEME_GREEN })}
              extensions={[
                bracketMatching(),
                closeBrackets(),
                history(),
                autocompletion(),
                lineNumbers(),
              ]}
              height={isVisibleOptionsRequest === 'var' ? '160px' : '0px'}
              onChange={onChangeVariable}
            />
            <CodeMirror
              value={JSON.stringify(headers, null, '  ')}
              theme={solarizedDarkInit({ settings: THEME_GREEN })}
              extensions={[
                bracketMatching(),
                closeBrackets(),
                history(),
                autocompletion(),
                lineNumbers(),
              ]}
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
        readOnly={true}
      />
    </div>
  );
};
