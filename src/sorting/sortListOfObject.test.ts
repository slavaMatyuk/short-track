import sortListOfObject from './sortListOfObject';

describe('sortListOfObject:', () => {

  const list = [
    { a: 1, b: 3 },
    { a: 3, b: 2 },
    { a: 2, b: 40 },
    { a: 4, b: 12 }
  ];

  test('should sort array by key "a" in descending order', () => {
    let sortBy = 'a';
    const result = [
      { a: 4, b: 12 },
      { a: 3, b: 2 },
      { a: 2, b: 40 },
      { a: 1, b: 3 }
    ];

    expect(sortListOfObject(list, sortBy)).toEqual(result);
  });

  test('should sort array by key "b" in descending order', () => {

    let sortBy = 'b';
    const result = [
      { a: 2, b: 40 },
      { a: 4, b: 12 },
      { a: 1, b: 3 },
      { a: 3, b: 2 }
    ];

    expect(sortListOfObject(list, sortBy)).toEqual(result);
  });
});

