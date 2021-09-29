function spread (this: any, callback: any, arr: unknown[]) {
  return callback.apply(this, arr);
};

export default spread;