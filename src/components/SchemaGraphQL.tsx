import React from 'react';
import { GraphQLSchema } from 'graphql/type';

type Props = {
  schema: GraphQLSchema | undefined;
};

export const SchemaGraphQL = ({ schema }: Props) => {
  console.log(schema);
  return (
    <>
      <p>QUERIES</p>
      {/*{schema._queryType._fields((el, index) => (*/}
      {/*  <p key={index}>{`${el.name}(...): ${el.type.name}`}</p>*/}
      {/*))}*/}
    </>
  );
};
