const { getThreeOfAKind, getFourOfAKind, getFull } = require('./index');

describe('Yams', () => {
  it.each([
    { fn: getThreeOfAKind, input: [2, 2, 2, 4, 5], output: 28 },
    { fn: getThreeOfAKind, input: [1, 2, 3, 4, 5], output: 0 },
    { fn: getFourOfAKind, input: [3, 3, 3, 3, 5], output: 35 },
    { fn: getFull, input: [2, 2, 2, 5, 5], output: 30 },
  ])('should return $output when given $input', ({ fn, input, output }) => {
    expect(fn(input)).toBe(output);
  });
});