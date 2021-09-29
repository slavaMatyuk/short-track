const flattenAndSort = (arr: number[][]): Array<number> => {
  return arr.reduce((a, c) => a.concat(c), []).sort((a, b) => a - b);
};

export default flattenAndSort;