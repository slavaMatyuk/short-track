const flattenAndSort = (arr: number[][]): Array<number> => {
  return arr.flat().sort((a, b) => a - b);
};

export default flattenAndSort;