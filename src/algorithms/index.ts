const flattenAndSort = (arr: Array<number>): Array<number> => {
  return arr.flat().sort((a, b) => a - b);
};
