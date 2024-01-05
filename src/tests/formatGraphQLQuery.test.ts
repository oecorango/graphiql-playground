import { formatGraphQLQuery } from '../utils/formatGraphQLQuery';
import { expect, describe, it } from 'vitest';
describe('formatGraphQLQuery function', () => {
  it('should format a simple GraphQL query', () => {
    const unformattedQuery = `
      {
        users {
          id
          name
        }
      }
    `;
    const expectedFormattedQuery = `
      {
        users {
          id
          name
        }
      }
    `.replace(/\s/g, '');

    expect(formatGraphQLQuery(unformattedQuery).replace(/\s/g, '')).toEqual(
      expectedFormattedQuery
    );
  });

  it('should handle nested GraphQL query', () => {
    const unformattedQuery = `
      {
        users {
          id
          name
          posts {
            id
            title
          }
        }
      }
    `;
    const expectedFormattedQuery = `
      {
        users {
          id
          name
          posts {
            id
            title
          }
        }
      }
    `.replace(/\s/g, '');

    expect(formatGraphQLQuery(unformattedQuery).replace(/\s/g, '')).toEqual(
      expectedFormattedQuery
    );
  });
});
