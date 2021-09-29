const reduce = (arr: number[], callback: (...args: number[]) => number, initialValue: number): number => {
  let value = initialValue;
  arr.map(el => value = callback(value, el));
  return value;
};

export default reduce;