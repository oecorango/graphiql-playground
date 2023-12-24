export const headersObjToString = (headers: HeadersInit) => {
  let result = '';

  const keesValues = Object.entries(headers);
  keesValues.forEach((el, index, array) => {
    if (index !== array.length - 1) result += `  "${el[0]}": "${el[1]}",\n`;
    else result += `  "${el[0]}": "${el[1]}"`;
  });

  return result;
};
