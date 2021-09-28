const sequenceSum = (begin: number, end: number, step: number): number => {
  let sum = 0;
  if (begin > end) {
    return sum;
  } else if (begin === end) {
    return begin;
  } else {
    sum += begin + sequenceSum(begin + step, end, step);
    begin = sum;
  }
  return sum;
};

export default sequenceSum;