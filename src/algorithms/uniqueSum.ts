const uniqueSum = (arr: Array<number> | []): number | 0 => {
  if (arr!.length === 0) {
    return 0;
  }
  return [...new Set(arr)].reduce((acc, cur) => acc + cur);
};

export default uniqueSum;