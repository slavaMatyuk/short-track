export const flattenAndSort = (arr: Array<number>): Array<number> => {
  return arr.flat().sort((a, b) => a - b);
};

export const add = (n: number) => {
  return function(num: number) {
    return n + num;
  }
};

export const multiplyAll = (arr: Array<number>) => {
  return function(num: number) {
    return arr.map(el => el * num);
  }
};

export const uniqueSum = (arr: Array<number>): number => {
  return [...new Set(arr)].reduce((acc, cur) => acc + cur);
};

export const reduce = (arr: [number], callback: (arg0: number, arg1: number) => number, initialValue: number): number => {
  arr.forEach(el => {
    initialValue = initialValue !== undefined ? callback(initialValue, el) : el;
  });
  return initialValue;
};

export const compose = (...fns: Array<any>) => (a: unknown) => fns.reverse().reduce((acc, fn) => fn(acc), a);
