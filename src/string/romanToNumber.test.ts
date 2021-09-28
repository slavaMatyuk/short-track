import romanToNumber from "./romanToNumber";

describe('romanToNumber:', () => {

  test('should return number 1', () => {
    expect(romanToNumber('I')).toBe(1);
  });

  test('should return number 100', () => {
    expect(romanToNumber('C')).toBe(100);
  });

  test('should return number 101', () => {
    expect(romanToNumber('CI')).toBe(101);
  });

  test('should return number 21', () => {
    expect(romanToNumber('XXI')).toBe(21);
  });
});
