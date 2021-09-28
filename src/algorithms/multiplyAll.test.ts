import multiplyAll from "./multiplyAll";

describe('multiplyAll:', () => {
  const arr = [1, 2, 3];

  test('should return function that multiplies each of elements to 2', () => {
    expect(multiplyAll(arr)(2)).toEqual([2, 4, 6]);
  });

  test('should return function that multiplies each of elements to 3', () => {
    expect(multiplyAll(arr)(3)).toEqual([3, 6, 9]);
  });
});
