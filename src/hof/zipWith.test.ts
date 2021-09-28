import zipWith from "./zipWith";

describe('zipWith:', () => {

  test('should pow each element in array and return [1,10,100,1000]', () => {
    expect(zipWith(Math.pow, [10,10,10,10], [0,1,2,3])).toEqual([1,10,100,1000]);
  });
  
  test('should compare each element and return what is bigger', () => {
    expect(zipWith(Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1])).toEqual([4,7,7,4,7,7]);
  });
});
