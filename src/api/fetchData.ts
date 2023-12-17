export const fetchData = async (url: string, query: string) => {
  try {
    const response = await fetch(url, {
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
