const stringLength = require('./stringLength');

test('returns character count of provided string', () => {
  expect(stringLength('abcd')).toBe(4);
})