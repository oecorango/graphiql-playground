const schemaMainFields = `
  query {
    __schema {
      queryType {
        name
        fields {
          name
          type {
            name
          }
        }
      }
      mutationType {
        name
      }
      subscriptionType {
        name
      }
    }
  }
`;

export const fetchSchema = async (url: string) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query: schemaMainFields,
      }),
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.warn(err);
  }
};
