import sequenceSum from "./sequenceSum";

describe('sequenceSum:', () => {

  test('should return just 2', () => {
    expect(sequenceSum(2, 2, 2)).toBe(2);
  });

  test('should return sum of sequence 2+4+6', () => {
    expect(sequenceSum(2, 6, 2)).toBe(12);
  });

  test('should return sum of sequence 1+2+3+4+5', () => {
    expect(sequenceSum(1, 5, 1)).toBe(15);
  });

  test('should return sum of sequence 1+4', () => {
    expect(sequenceSum(1, 5, 3)).toBe(5);
  });
});
