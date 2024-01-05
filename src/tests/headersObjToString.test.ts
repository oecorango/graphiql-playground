import { headersObjToString } from '../utils/headersObjToString';
import { expect, test } from 'vitest';

test('headersObjToString should return an empty string for an empty headers object', () => {
  const headers = {};
  expect(headersObjToString(headers)).toBe('');
});

test('headersObjToString should return a formatted string for headers object with string and number values', () => {
  const headers = {
    'Content-Type': 'application/json',
    'Content-Length': '100',
    'X-Requested-With': 'XMLHttpRequest',
  };
  const expectedOutput = `  "Content-Type": "application/json",
  "Content-Length": "100",
  "X-Requested-With": "XMLHttpRequest"`;

  expect(headersObjToString(headers)).toBe(expectedOutput);
});

test('headersObjToString should handle single header object', () => {
  const headers = { 'Content-Type': 'application/json' };
  const expectedOutput = `  "Content-Type": "application/json"`;

  expect(headersObjToString(headers)).toBe(expectedOutput);
});

test('headersObjToString should handle numbers as strings in the headers object', () => {
  const headers = { 'Content-Length': '100' };
  const expectedOutput = `  "Content-Length": "100"`;

  expect(headersObjToString(headers)).toBe(expectedOutput);
});

test('headersObjToString should handle mixed types of headers (string and number)', () => {
  const headers = {
    'Content-Type': 'application/json',
    'Content-Length': '100',
    'X-Requested-With': 'XMLHttpRequest',
    Authorization: 'Bearer token123',
  };
  const expectedOutput = `  "Content-Type": "application/json",
  "Content-Length": "100",
  "X-Requested-With": "XMLHttpRequest",
  "Authorization": "Bearer token123"`;

  expect(headersObjToString(headers)).toBe(expectedOutput);
});
