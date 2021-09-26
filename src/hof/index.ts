export const spread = (callback: (args: unknown) => unknown, arr: [args: unknown]) => {
  return callback.apply(null, arr);
};

export const zipWith = (fn: (arg0: number, arg1: number) => number[], a0: number[], a1: number[]) => {
  const len = Math.min(a0.length, a1.length);
  const result = [];
  for (let i = 0; i < len; i++) {
    result.push(fn(a0[i], a1[i]));
  }
  return result;
};
