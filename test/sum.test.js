/* eslint-disable */
const { sum } = require('../dist/index');

test('adds 1 + 2 to be 3', () => {
  expect(sum(1, 2)).toBe(3);
});