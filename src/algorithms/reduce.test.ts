import reduce from './reduce';

describe('reduce:', () => {

  test('should take an array, a callback and initial value and return the value like reduce-method', () => {
    const arr = [1, 2, 3, 4];
    const initValue = 1;
    const fn = (a: number, b: number) => a * b;
    expect(reduce(arr, fn, initValue)).toEqual(24);
  });
});
