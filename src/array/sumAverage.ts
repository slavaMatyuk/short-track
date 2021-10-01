const sumAverage = (arr: Array<number[]>): number => {
  return Math.floor(arr.reduce((acc, cur) => acc + (cur.reduce((a, b) => (a + b)) / cur.length), 0));
};

export default sumAverage;