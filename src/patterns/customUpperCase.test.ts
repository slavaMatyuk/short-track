String.prototype.customUpperCase = function(this: string): string {
  return this.toUpperCase();
};

describe('customUpperCase:', () => {

  test('should work as usual method String.prototype.toUpperCase()', () => {
    const str: string = 'abc';
    expect(str.customUpperCase()).toBe('ABC');
  });

  test('should work as usual method String.prototype.toUpperCase()', () => {
    const str: string = 'Hello, world!';
    expect(str.customUpperCase()).toBe('HELLO, WORLD!');
  });
});
