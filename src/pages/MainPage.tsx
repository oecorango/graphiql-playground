import { useState } from 'react';
import { fetchSchema } from '../api/getSchema';
import { SchemaGraphQL } from '../components/SchemaGraphQL';
import { PrettifyData } from '../components/svg/PrettifyData';
import { CopyData } from '../components/svg/CopyData';
import { GetData } from '../components/svg/GetData';
import { RICK_URL } from '../constants/api';
import { useAppDispatch } from '../hooks/redux';
import { setSchema } from '../store/schemaSlice';
import styles from './MainPage.module.scss';
import { CodeEditor } from '../components/codeEditor';

export const MainPage = () => {
  const [visibleSchema, setVisibleSchema] = useState(false);
  const dispatch = useAppDispatch();

  const clickHandler = async () => {
    const schema = await fetchSchema(RICK_URL);
    dispatch(setSchema(schema));

    visibleSchema ? setVisibleSchema(false) : setVisibleSchema(true);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.currentUrl}>
          <PrettifyData />
          <CopyData />
          <GetData />
          <input className={styles.inputUrl} placeholder={RICK_URL} />
        </div>

        <CodeEditor />
        <button onClick={clickHandler}>показать схему</button>
        <div>{visibleSchema ? <SchemaGraphQL /> : <></>}</div>
      </div>
    </>
  );
};
