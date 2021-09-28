import uniqueSum from "./uniqueSum";

describe('uniqueSum:', () => {

  test('should return sum of unique values ignoring duplicates', () => {
    const arr = [1, 2, 3];
    expect(uniqueSum(arr)).toBe(6);
  });

  test('should return sum of unique values ignoring duplicates', () => {
    const arr = [1, 3, 8, 1, 8];
    expect(uniqueSum(arr)).toBe(12);
  });

  test('should return sum of unique values ignoring duplicates', () => {
    const arr = [-1, -1, 5, 2, -7];
    expect(uniqueSum(arr)).toBe(-1);
  });

  test('should return 0 if array is empty "[]"', () => {
    const arr: [] = [];
    expect(uniqueSum(arr)).toBe(0);
  });
});
