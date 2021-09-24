const sequenceSum = (begin: number, end: number, step: number): number => {
  let sum = 0;
  if (begin > end) {
    return sum;
  } else if (begin === end) {
    return begin;
  } else {
    sum += begin + sequenceSum(begin + step, end, step);
    begin = sum;
  }
  return sum;
};

interface List {
  data: number;
  next: List;
}

const stringify = (list: List): string => {
  let res = list.data.toString();
  if (!list.next) {
    return list.data + ' -> ' + list.next;
  }
  return res += ' -> ' + stringify(list.next);
};
