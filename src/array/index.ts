const sumAverage = (arr: Array<number[]>): number => {
  const sum = arr.map(elem => elem.reduce((a, b) => (a + b)) / elem.length);
  return Math.floor(sum.reduce((a, b) => (a + b)));
};

const maxTripletSum = (arr: Array<number>): number => {
  const setArr = [...new Set(arr)];
  const resultArr = setArr.sort((a, b) => b - a).slice(0,3);
  return resultArr.reduce((a, b) => a + b);
};

const biggest = (nums: Array<number>): string => {
  const splitted = nums.join('').split('').map(str => +str);
  return splitted.sort((a, b) => b - a).join('');
};

const pattern = (amount: number): Array<string> => {
  let str = '';
  for (let i = 1; i <= amount; i++) {
    str += i;
  }
  const res = [str];
  for (let i = 0; i < str.length - 1; i++) {
    const shifted = str.slice(-(str.length - 1)) + str.slice(0, 1);
    res.push(shifted);
    str = shifted;
  }
  return res;
};

const arithmeticSequenceSum = (a: number, r: number, n: number): number => {
  if (!r || n < 2) {
    return a;
  } else {
    return a + r * (n - 1) + arithmeticSequenceSum(a, r, n - 1);
  }
};
