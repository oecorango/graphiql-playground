import React from 'react';
import { useAppSelector } from '../hooks/useRedux';

export const SchemaGraphQL = () => {
  const schemaState = useAppSelector((state) => state.schemaGraphQl);

  return (
    <>
      <p>QUERIES</p>
      {/*{schemaState.schema.queryType.fields.map((el, index) => (*/}
      {/*  <p key={index}>{`${el.name}(...): ${el.type.name}`}</p>*/}
      {/*))}*/}
    </>
  );
};
