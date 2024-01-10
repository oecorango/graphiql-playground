export const headersObjToString = (headers: HeadersInit) => {
  let result = '';
  const keesValues: [string, string | number][] = Object.entries(headers);

  keesValues.forEach((el, index, array) => {
    if (typeof el[1] === 'number') {
      if (index !== array.length - 1) result += `  "${el[0]}": ${el[1]},\n`;
      else result += `  "${el[0]}": ${el[1]}`;
    } else {
      if (index !== array.length - 1) result += `  "${el[0]}": "${el[1]}",\n`;
      else result += `  "${el[0]}": "${el[1]}"`;
    }
  });

  return result;
};
