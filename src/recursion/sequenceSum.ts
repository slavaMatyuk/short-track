const sequenceSum = (begin: number, end: number, step: number): number => {
  if (begin > end) return 0;
  else if (begin === end) return begin;
  return begin + sequenceSum(begin + step, end, step);
};

export default sequenceSum;