const pattern = (amount: number): Array<string> => {
  let str = '';
  for (let i = 1; i <= amount; i++) {
    str += i;
  }
  const res = [str];
  for (let i = 0; i < str.length - 1; i++) {
    const shifted = str.slice(-(str.length - 1)) + str.slice(0, 1);
    res.push(shifted);
    str = shifted;
  }
  return res;
};

export default pattern;