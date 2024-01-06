import React from 'react';
import { GraphQLFieldMap } from 'graphql/type';
import styles from './SchemaTypes.module.scss';

type Props = {
  name: string;
  fieldsMap: GraphQLFieldMap<string, NonNullable<unknown>> | undefined;
};
// Todo что то пока не придумал как типизировать типы ;(

const SchemaTypes = ({ fieldsMap, name }: Props) => {
  return (
    <div>
      {!fieldsMap ? (
        <></>
      ) : (
        <>
          <p className={styles.header}>{name}</p>
          {Object.values(fieldsMap).map((field, index) => (
            <div key={index}>
              <span className={styles.title}>{field.name}</span>
              <span className={styles.middle}>{'(...): '}</span>
              <span className={styles.type}>{field.type.name}</span>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default SchemaTypes;
