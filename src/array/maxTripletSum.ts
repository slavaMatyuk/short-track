const maxTripletSum = (arr: Array<number>): number => {
  const setArr = [...new Set(arr)];
  const resultArr = setArr.sort((a, b) => b - a).slice(0,3);
  return resultArr.reduce((a, b) => a + b);
};

export default maxTripletSum;