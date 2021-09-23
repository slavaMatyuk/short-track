const flattenAndSort = (arr: Array<number>): Array<number> => {
  return arr.flat().sort((a, b) => a - b);
};

const add = (n: number) => {
  return function(num: number) {
    return n + num;
  }
};

const multiplyAll = (arr: Array<number>) => {
  return function(num: number) {
    return arr.map(el => el * num);
  }
};

const uniqueSum = (arr: Array<number>): number => {
  return [...new Set(arr)].reduce((acc, cur) => acc + cur);
};

const reduce = (arr: [number], callback: (arg0: number, arg1: number) => number, initialValue: number): number => {
  arr.forEach(el => {
    initialValue = initialValue !== undefined ? callback(initialValue, el) : el;
  });
  return initialValue;
};

const compose = (...fns: Array<any>) => (a: unknown) => fns.reverse().reduce((acc, fn) => fn(acc), a);
