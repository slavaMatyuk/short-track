import biggest from './biggest';

describe('biggest:', () => {

  test('should return max stringified number consisted of array chars', () => {
    const arr = [1, 2, 3];
    expect(biggest(arr)).toEqual('321');
  });

  test('should return max stringified number consisted of array chars', () => {
    const arr = [3, 30, 34, 5, 9];
    expect(biggest(arr)).toEqual('9534330');
  });
});
