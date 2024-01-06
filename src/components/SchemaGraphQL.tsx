import React from 'react';
import { GraphQLSchema } from 'graphql/type';
import styles from './SchemaGraphQL.module.scss';
import SchemaTypes from './SchemaTypes';

type Props = {
  schema: GraphQLSchema | undefined;
};

export const SchemaGraphQL = ({ schema }: Props) => {
  const queryTypeFields = schema?.getQueryType()?.getFields();
  const mutationTypeFields = schema?.getMutationType()?.getFields();
  const subscriptionTypeFields = schema?.getSubscriptionType()?.getFields();
  const typeMap = schema?.getTypeMap();

  return (
    <div className={styles.container}>
      <SchemaTypes fieldsMap={queryTypeFields} name={'QUERYES'} />
      <SchemaTypes fieldsMap={mutationTypeFields} name={'MUTATIONS'} />
      <SchemaTypes fieldsMap={subscriptionTypeFields} name={'SUBSCRIPTIONS'} />

      <p className={styles.header}>ALL TYPES</p>
      {!typeMap ? (
        <></>
      ) : (
        Object.values(typeMap).map((type, index) => (
          <div key={index}>
            <span className={styles.title}>{type.name + '\n'}</span>
            <span className={styles.description}>
              {type.description ? type.description : 'No description'}
            </span>
          </div>
        ))
      )}
    </div>
  );
};
