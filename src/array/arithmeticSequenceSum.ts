const arithmeticSequenceSum = (a: number, r: number, n: number): number => {
  return Array.from({ length: n }, (el, i) => el = a + r * i).reduce((a, c) => a + c);
};

export default arithmeticSequenceSum;