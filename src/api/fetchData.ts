import { RICK_URL } from '../constants/api';

export const fetchData = async (
  url: string,
  headers: HeadersInit,
  query: string,
  variables: Record<string, string>
) => {
  try {
    // const variablesObj = JSON.parse(variables);

    // for (const key in variablesObj) {
    //   console.log(variablesObj[key]);
    // }

    // console.log(query);

    const response = await fetch(url ? url : RICK_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query,
      }),
    });
    return await response.json();
  } catch (err) {
    console.warn(err);
  }
};
