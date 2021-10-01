const add = (n: number) => {
  return function(num: number): number {
    return n + num;
  }
};

export default add;