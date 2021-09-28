const multiplyAll = (arr: Array<number>) => {
  return function(num: number) {
    return arr.map(el => el * num);
  }
};

export default multiplyAll;