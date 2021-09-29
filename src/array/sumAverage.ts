const sumAverage = (arr: Array<number[]>): number => {
  return Math.floor(arr.map(elem => elem.reduce((a, b) => (a + b)) / elem.length).reduce((a, b) => (a + b)));
};

export default sumAverage;