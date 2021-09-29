const countDuplicates = (text: string): number => {
  const res = text
    .toLowerCase()
    .split('')
    .sort()
    .join('')
    .match(/(.)\1+/g);
  return res ? res.length : 0;
};

export default countDuplicates;