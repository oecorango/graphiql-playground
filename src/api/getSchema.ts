import { RICK_URL } from '../constants/api';
import { buildClientSchema, getIntrospectionQuery } from 'graphql';

export const fetchSchema = async (url: string) => {
  try {
    const response = await fetch(url ? url : RICK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query: getIntrospectionQuery(),
      }),
    });

    const data = await response.json();
    return buildClientSchema(data.data);
  } catch (err) {
    console.warn(err);
  }
};
