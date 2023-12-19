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
    return await response.json();
  } catch (err) {
    console.warn(err);
  }
};
