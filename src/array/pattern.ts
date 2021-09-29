const pattern = (amount: number): Array<string> => {
  return Array.from({ length: amount }, (_, i) =>
    Array.from({ length: amount }, (_, j) => 
    (i + j) % amount + 1).join('')
  );
};

export default pattern;