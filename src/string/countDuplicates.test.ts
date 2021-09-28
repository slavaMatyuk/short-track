import countDuplicates from "./countDuplicates";

describe('countDuplicates:', () => {

  test('should return 0', () => {
    expect(countDuplicates('abcde')).toBe(0);
  });

  test('should return 2', () => {
    expect(countDuplicates('aabbcde')).toBe(2);
  });

  test('should return 2 despite of registr', () => {
    expect(countDuplicates('aabBcde')).toBe(2);
  });

  test('should return 1', () => {
    expect(countDuplicates('indivisibility')).toBe(1);
  });

  test('should return 2: also number is duplicate', () => {
    expect(countDuplicates('aA11')).toBe(2);
  });
});
