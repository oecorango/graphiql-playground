import React, { useState } from 'react';
import { fetchSchema } from '../api/getSchema';
import { SchemaGraphQL } from '../components/SchemaGraphQL';
import { PrettifyData } from '../components/svg/PrettifyData';
import { CopyData } from '../components/svg/CopyData';
import { GetData } from '../components/svg/GetData';
import { RICK_URL } from '../constants/api';
import { useAppDispatch, useAppSelector } from '../hooks/useRedux';
import { setSchema } from '../store/schemaSlice';
import styles from './MainPage.module.scss';
import { CodeEditor } from '../components/CodeEditor';
import { fetchData } from '../api/fetchData';
import { setQuery, setURL } from '../store/requestSlice';
import { formatGraphQLQuery } from '../utils/formatGraphQLQuery';
import { setResponse } from '../store/responseSlice';

export const MainPage = () => {
  const [visibleSchema, setVisibleSchema] = useState(false);
  const dispatch = useAppDispatch();
  const { query, url, headers, variables } = useAppSelector(
    (state) => state.requestData
  );
  const { response } = useAppSelector((state) => state.responseData);

  const clickHandler = async () => {
    const schema = await fetchSchema(RICK_URL);
    dispatch(setSchema(schema));

    visibleSchema ? setVisibleSchema(false) : setVisibleSchema(true);
  };

  const getResponse = async () => {
    const response = await fetchData(url, headers, query, variables);
    const str = JSON.stringify(response, null, '  ');
    dispatch(setResponse(str));
  };

  function formattedRequest() {
    const formattedQuery = formatGraphQLQuery(query);
    dispatch(setQuery(formattedQuery));
  }

  const changeURL = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setURL(event.target.value));
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.currentUrl}>
          <PrettifyData prettifyCode={formattedRequest} />
          <CopyData />
          <GetData getResponse={getResponse} />
          <input
            value={url ? url : ''}
            className={styles.inputUrl}
            placeholder={RICK_URL}
            onChange={changeURL}
          />
        </div>

        <CodeEditor response={response} clickHandler={clickHandler} />

        <div>{visibleSchema ? <SchemaGraphQL /> : <></>}</div>
      </div>
    </>
  );
};
