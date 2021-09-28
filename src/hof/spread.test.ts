import spread from './spread';

describe('spread:', () => {

  test('should return callback connected with array of arguments', () => {
    const arr = [1, 11];
    const sum = (a: number, b: number) => a + b;
    expect(spread(sum, arr)).toBe(12);
  });
});
