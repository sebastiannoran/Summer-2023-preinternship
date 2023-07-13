const sum = require('./sum'); // this file path is relative to the root directory
 
test('sum(1, 2) adds to 3', () => {
  expect(sum(1, 2)).toBe(3);
});