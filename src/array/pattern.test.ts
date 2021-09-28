import pattern from "./pattern";

describe('pattern:', () => {

  test('should return array which consisted of n elements each of which is shifted', () => {
    expect(pattern(3)).toEqual(['123', '231', '312']);
  });

  test('should return array which consisted of n elements each of which is shifted', () => {
    expect(pattern(5)).toEqual(['12345', '23451', '34512', '45123', '51234']);
  });
});
