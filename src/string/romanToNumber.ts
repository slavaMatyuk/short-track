interface Roman {
  [key: string]: number
};

const romanToNumber = (number: string): number => {
  const roman: Roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  if (!/^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/.test(number)) return NaN;
  return Array.from(number, elem => roman[elem])
    .reduceRight((acc,cur) => acc + (cur * 4 < acc ? -cur : cur));
};

export default romanToNumber;