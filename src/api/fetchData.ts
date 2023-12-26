import { RICK_URL } from '../constants/api';

export const fetchData = async (
  url: string,
  headers: HeadersInit,
  query: string,
  variables: Record<string, string | number | NonNullable<unknown>>
) => {
  try {
    const response = await fetch(url ? url : RICK_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query: query,
        variables: variables,
      }),
    });
    return await response.json();
  } catch (err) {
    console.warn(err);
  }
};
