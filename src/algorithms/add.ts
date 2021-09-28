const add = (n: number) => {
  return function(num: number) {
    return n + num;
  }
};

export default add;