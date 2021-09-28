import arithmeticSequenceSum from "./arithmeticSequenceSum";

describe('arithmeticSequenceSum:', () => {

  test('should take 2, 3 and 5, then return the sum: 2 + (2+3) + (2+3+3) + (2+3+3+3) + (2+3+3+3+3) = 40', () => {
    expect(arithmeticSequenceSum(2, 3, 5)).toBe(40);
  });
});
