const reduce = (arr: number[], callback: (arg0: number, arg1: number) => number, initialValue: number): number => {
  arr.forEach(el => {
    initialValue = initialValue !== undefined ? callback(initialValue, el) : el;
  });
  return initialValue;
};

export default reduce;