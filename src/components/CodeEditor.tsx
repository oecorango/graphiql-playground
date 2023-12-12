import React, { useCallback, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { solarizedDark } from '@uiw/codemirror-theme-solarized/dark';
import styles from './CodeEditor.module.scss';

export const CodeEditor = () => {
  const [value, setValue] = useState("console.log('hello world!');");
  const onChange = useCallback((val: string) => {
    console.log('val:', val);
    setValue(val);
  }, []);

  return (
    <div className={styles.editor}>
      <CodeMirror
        className={styles.codeMirror}
        value={value}
        theme={solarizedDark}
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
      />

      <CodeMirror
        className={styles.codeMirrorGreen}
        value={value}
        theme={solarizedDark}
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
      />
    </div>
  );
};
