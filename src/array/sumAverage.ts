const sumAverage = (arr: Array<number[]>): number => {
  const sum = arr.map(elem => elem.reduce((a, b) => (a + b)) / elem.length);
  return Math.floor(sum.reduce((a, b) => (a + b)));
};

export default sumAverage;