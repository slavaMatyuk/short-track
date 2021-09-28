import toMachineName from "./toMachineName";

describe('toMachineName:', () => {

  test('should made string lower cased with separator', () => {
    expect(toMachineName('Hello, my name is Andrew', '-')).toBe('hello-my-name-is-andrew');
  });

  test('should ignore spaces', () => {
    expect(toMachineName('Lorem        ipsum sit                                 DOLOR', '-')).toBe('lorem-ipsum-sit-dolor');
  });

  test('should ignore integer if it at the beginning of the line', () => {
    expect(toMachineName('3 basics and 1 advance', '-')).toBe('basics-and-1-advance');
  });
});
