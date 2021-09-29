const zipWith = (fn: any, a0: number[], a1: number[]) => {
  const len = Math.min(a0.length, a1.length);
  return Array.from({ length: len }, (_, i) => fn(a0[i], a1[i]));
};

export default zipWith;