const spread = (callback: any, arr: unknown[]) => {
  return callback.apply(null, arr);
};

export default spread;