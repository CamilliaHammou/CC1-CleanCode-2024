const { getThreeOfAKind, getFourOfAKind } = require('./index');

describe('Yams', () => {
  test('ThreeOfAKind', () => {
    const result = getThreeOfAKind([2, 2, 2, 4, 5]);
    expect(result).toBe(28);
  });
  test('No ThreeOfAKind', () => {
    const result = getThreeOfAKind([1, 2, 3, 4, 5]);
    expect(result).toBe(0);
  });
  test('Four-of-a-Kind', () => {
    const result = getFourOfAKind([3, 3, 3, 3, 5]);
    expect(result).toBe(35);
  });
  
});
