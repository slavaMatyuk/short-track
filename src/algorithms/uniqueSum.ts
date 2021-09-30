const uniqueSum = (arr: Array<number> | []): number | 0 => {
  return arr!.length > 0 ? [...new Set(arr)].reduce((acc, cur) => acc + cur) : 0;
};

export default uniqueSum;