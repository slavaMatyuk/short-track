import add from './add';

describe('add:', () => {

  test('should return function that increment 1 to a number', () => {
    expect(add(1)(5)).toEqual(6);
  });

  test('should return function that increment 3 to a number', () => {
    expect(add(3)(10)).toEqual(13);
  });
});
