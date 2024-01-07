import {
  GraphQLFieldMap,
  GraphQLType,
  isListType,
  isNonNullType,
  isObjectType,
} from 'graphql/type';
import styles from './SchemaTypes.module.scss';

type Props = {
  name: string;
  fieldsMap: GraphQLFieldMap<string, NonNullable<unknown>> | undefined;
};

const SchemaTypes = ({ fieldsMap, name }: Props) => {
  const getFieldTypeName = (fieldType: GraphQLType): string => {
    if (isObjectType(fieldType)) {
      return fieldType.name;
    } else if (isListType(fieldType)) {
      return `List<${getFieldTypeName(fieldType.ofType)}>`;
    } else if (isNonNullType(fieldType)) {
      return getFieldTypeName(fieldType.ofType);
    } else {
      return 'Unknown Type';
    }
  };
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
              <span className={styles.type}>
                {getFieldTypeName(field.type)}
              </span>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default SchemaTypes;
