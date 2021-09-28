const countDuplicates = (text: string): number => {
  interface Obj {
    [key: string]: number
  };
  const arr = text.toLowerCase().split('').sort();
  let count = 0;
  let obj: Obj = {};
  arr.forEach(el => obj[el] = (obj[el] || 0) + 1);
  for (let key in obj) {
    if (obj[key] > 1) {
      count++;
    }
  }
  return count;
};

export default countDuplicates;