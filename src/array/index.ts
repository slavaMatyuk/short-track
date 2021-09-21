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
  
};

const arithmeticSequenceSum = (a, r, n) => {

};
