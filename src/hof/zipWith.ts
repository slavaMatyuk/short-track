const zipWith = (fn: any, a0: number[], a1: number[]) => {
  const len = Math.min(a0.length, a1.length);
  const result = [];
  for (let i = 0; i < len; i++) {
    result.push(fn(a0[i], a1[i]));
  }
  return result;
};

export default zipWith;