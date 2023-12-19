import { useState } from 'react';
import { fetchSchema } from '../api/getSchema';
import { SchemaGraphQL } from '../components/SchemaGraphQL';
import { PrettifyData } from '../components/svg/PrettifyData';
import { CopyData } from '../components/svg/CopyData';
import { GetData } from '../components/svg/GetData';
import { RICK_URL } from '../constants/api';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { setSchema } from '../store/schemaSlice';
import styles from './MainPage.module.scss';
import { CodeEditor } from '../components/CodeEditor';
import { fetchData } from '../api/fetchData';
import { setResponse } from '../store/dataSlice';

export const MainPage = () => {
  const [visibleSchema, setVisibleSchema] = useState(false);
  const dispatch = useAppDispatch();
  const { request, response } = useAppSelector((state) => state.data);

  const clickHandler = async () => {
    const schema = await fetchSchema(RICK_URL);
    dispatch(setSchema(schema));

    visibleSchema ? setVisibleSchema(false) : setVisibleSchema(true);
  };

  const getResponse = async () => {
    const response = await fetchData(RICK_URL, request);
    const str = JSON.stringify(response, null, '  ');
    dispatch(setResponse(str));
  };

  const prettifyCode = () => {
    // const unCorrectedCode = request
    //   .trim()
    //   .replace(/\s+/gi, ' ')
    //   .split(/(\s+|\(|\)|\{|\}|:)/gi);
    //
    // const spaces = 0;
    // const correctedCode = unCorrectedCode.map((el) => {
    //   if (el && el !== ' ') {
    //     return el.length > 1 ? `${el} ` : el;
    //   }
    // });
    //
    // console.log(correctedCode);
    // // dispatch(setRequest(uncorrectedCode.join('')));
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.currentUrl}>
          <PrettifyData prettifyCode={prettifyCode} />
          <CopyData />
          <GetData getResponse={getResponse} />
          <input className={styles.inputUrl} placeholder={RICK_URL} />
        </div>

        <CodeEditor response={response} />
        <button onClick={clickHandler}>показать схему</button>
        <div>{visibleSchema ? <SchemaGraphQL /> : <></>}</div>
      </div>
    </>
  );
};
