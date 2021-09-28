interface List {
  data: number;
  next: List | null;
}

export class Node implements List {
  data: number;
  next: List | null;
  constructor(data: number, next?: List | null) {
    this.data = data;
    this.next = next || null;
  }
}

export const stringify = (list: List): string => {
  let res = list.data.toString();
  if (!list.next) {
    return list.data + ' -> ' + list.next;
  }
  return res += ' -> ' + stringify(list.next);
};
