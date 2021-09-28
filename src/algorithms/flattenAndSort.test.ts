import flattenAndSort from "./flattenAndSort";

describe('flattenAndSort:', () => {

  test('should take multidimensional array, and return this being flatted and sorted', () => {
    const arr = [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]];
    const res = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(flattenAndSort(arr)).toEqual(res);
  });
});
