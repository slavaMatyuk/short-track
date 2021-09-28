const arithmeticSequenceSum = (a: number, r: number, n: number): number => {
  if (!r || n < 2) {
    return a;
  } else {
    return a + r * (n - 1) + arithmeticSequenceSum(a, r, n - 1);
  }
};

export default arithmeticSequenceSum;