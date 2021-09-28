import maxTripletSum from "./maxTripletSum";

describe('maxTripletSum:', () => {

  test('should return sum of three max numbers where duplicates are ignored', () => {
    const arr = [3, 2, 6, 8, 2, 3];
    expect(maxTripletSum(arr)).toBe(17);
  });

  test('should return sum of three max numbers where duplicates are ignored', () => {
    const arr = [9, 9, 2, 5, 4, 4, 1];
    expect(maxTripletSum(arr)).toBe(18);
  });
});
