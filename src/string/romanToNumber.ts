const romanToNumber = (number: string): number => {
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

export default romanToNumber;