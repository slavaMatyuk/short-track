import sumAverage from "./sumAverage";

describe('sumAverage:', () => {

  test('should return number that is sum of averages of arrays rounded to floor', () => {
    const arr = [[5, 2, 3], [1, 1, 7], [10, 2], [8, 2, 1, 5]];
    expect(sumAverage(arr)).toBe(16);
  });

  test('should return number that is sum of averages of arrays', () => {
    const arr = [[2, 2], [3, 3], [5, 5]];
    expect(sumAverage(arr)).toBe(10);
  });
});
