const alphabetized = (text: string): string => {
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

export default alphabetized;