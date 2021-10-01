import './customUpperCase';

describe('customUpperCase:', () => {

  test('should work as usual method String.prototype.toUpperCase()', () => {
    const str = 'abc';
    expect(str.customUpperCase()).toBe('ABC');
  });

  test('should work as usual method String.prototype.toUpperCase()', () => {
    const str = 'Hello, world!';
    expect(str.customUpperCase()).toBe('HELLO, WORLD!');
  });
});
