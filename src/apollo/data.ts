import { COUNTRIES_URL } from '../constants/api';

const query = `
  query {
    __schema {
      types {
        name
        kind
        description
        fields {
          name
        }
      }
    }
  }
`;

export const fetchSchema = async () => {
  try {
    const response = await fetch(COUNTRIES_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query,
      }),
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.warn(err);
  }
};
