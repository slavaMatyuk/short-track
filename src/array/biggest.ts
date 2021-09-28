const biggest = (nums: Array<number>): string => {
  nums.sort((a, b) => {
    const str1 = a.toString();
    const str2 = b.toString();
    const first = str1 + str2;
    const second = str2 + str1;
    if (first > second) {
      return -1;
    } else if (first < second) {
      return 1;
    } else {
      return 0;
    }
  });
  return nums.join('');
};

export default biggest;