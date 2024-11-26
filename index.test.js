const { getThreeOfAKind, getFourOfAKind, getFull, getBigSuite, getYams} = require('./index');

describe('Yams', () => {
  it.each([
    { fn: getThreeOfAKind, input: [2, 2, 2, 4, 5], output: 28 },
    { fn: getThreeOfAKind, input: [1, 2, 3, 4, 5], output: 0 },
    { fn: getFourOfAKind, input: [3, 3, 3, 3, 5], output: 35 },
    { fn: getFourOfAKind, input: [3, 2, 3, 3, 5], output: 0 },
    { fn: getFull, input: [2, 2, 2, 5, 5], output: 30 },
    { fn: getFull, input: [2, 2, 2, 5, 4], output: 0 },
    { fn: getBigSuite, input: [1, 2, 3, 4, 5], output: 40 },
    { fn: getBigSuite, input: [1, 2, 3, 5, 6], output: 0 },
    { fn: getYams, input: [6, 6, 6, 6, 6], output: 50 },
    { fn: getYams, input: [6, 6, 6, 6, 5], output: 0 },

    ])('should return $output when given $input', ({ fn, input, output }) => {
    expect(fn(input)).toBe(output);
    });
});