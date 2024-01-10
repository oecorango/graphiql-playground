// TODO add processing "(", ")"
// TODO add adding constants to the request
export function formatGraphQLQuery(query: string) {
  const unFormattedQuery: string = query.trim().replace(/\n/g, '');
  let level: number = 0;
  let formattedQuery: string = '';

  for (let i = 0; i < unFormattedQuery.length; i++) {
    const char = unFormattedQuery[i];
    const nextChar = unFormattedQuery[i + 1];

    if (char === '\n') {
      formattedQuery += '';
    } else if (char === '{') {
      level += 1;
      formattedQuery += '{\n' + '  '.repeat(level);
    } else if (char === '}') {
      level -= 1;
      formattedQuery =
        formattedQuery.trimEnd() + '\n' + '  '.repeat(level) + '}\n ';
    } else if (char === ' ' && nextChar === ' ') {
      formattedQuery += '';
    } else {
      formattedQuery += char;
    }
  }
  return formattedQuery;
}
