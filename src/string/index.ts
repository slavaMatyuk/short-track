export const toMachineName = (name: string, separator: string): string => {
  const arr = name.replace(/\s{2,}/g, ' ').split(' ');
  const res = arr.join(separator).toLowerCase().replace(/[\s;:.,%]/g, '');
  return res.replace(/^[\d]*./, '');
};

export const alphabetized = (text: string): string => {
  return text.replace(/[^\w]|_/g, '').split('').sort((a, b) => {
    let res = 0;
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a > b)
      res = 1;
    if (a < b)
      res = -1;
    return res;
  }).join('');
};

export const romanToNumber = (number: string): number => {
  interface Roman {
    [key: string]: number
  };
  const roman: Roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let decimal = 0;
  for (let i = 0; i < number.length; i++) {
    const current = roman[number[i]];
    const next = roman[number[i + 1]];
    (current < next) ? (decimal -= current) : (decimal += current);
  }
  return decimal;
};

export const countDuplicates = (text: string): number => {
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
