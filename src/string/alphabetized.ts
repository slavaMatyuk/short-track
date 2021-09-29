const alphabetized = (text: string): string => {
  return text
    .replace(/[^\w]|_/g, '')
    .split('')
    .sort((a, b) => (a.toLowerCase() < b.toLowerCase()) ? -1 : 1)
    .join('');
};

export default alphabetized;