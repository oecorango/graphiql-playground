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
    return await response.json();
  } catch (err) {
    console.warn(err);
  }
};
