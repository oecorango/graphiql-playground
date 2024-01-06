import React, { useState } from 'react';
import { fetchSchema } from '../api/getSchema';
import { SchemaGraphQL } from '../components/SchemaGraphQL';
import { PrettifyData } from '../components/svg/PrettifyData';
import { CopyData } from '../components/svg/CopyData';
import { GetData } from '../components/svg/GetData';
import { RICK_URL } from '../constants/api';
import { useAppDispatch, useAppSelector } from '../hooks/useRedux';
import styles from './MainPage.module.scss';
import { CodeEditor } from '../components/CodeEditor';
import { fetchData } from '../api/fetchData';
import { setQuery, setURL } from '../store/requestSlice';
import { formatGraphQLQuery } from '../utils/formatGraphQLQuery';
import { setResponse } from '../store/responseSlice';
import { GraphQLSchema } from 'graphql';

export const MainPage = () => {
  const [visibleSchema, setVisibleSchema] = useState(false);
  const dispatch = useAppDispatch();
  const { query, url, headers, variables } = useAppSelector(
    (state) => state.requestData
  );
  const { response } = useAppSelector((state) => state.responseData);
  const [schema, setSchema] = useState<GraphQLSchema>();

  const clickHandler = async () => {
    const schema = await fetchSchema(url);
    setSchema(schema);
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

        <CodeEditor response={response} />

        <button
          className={
            visibleSchema
              ? `${styles.button} ${styles.schemaButton} ${styles.schemaActive}`
              : `${styles.button} ${styles.schemaButton}`
          }
          onClick={clickHandler}
        >
          SCHEMA
        </button>

        {visibleSchema ? <SchemaGraphQL schema={schema} /> : <></>}
      </div>
    </>
  );
};
