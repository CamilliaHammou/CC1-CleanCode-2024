const { getBrelan } = require('./index');

describe('Yams', () => {
  test('Brelan', () => {
    const result = getBrelan([2, 2, 2, 4, 5]);
    expect(result).toBe(28);
  });
});
