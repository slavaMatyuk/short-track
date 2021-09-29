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

export const stringify = (list: List): string | number => {
  if (list instanceof Node === false) {
    return list.data;
  }
  if (!list.next) {
    return `${list.data} -> ${list.next}`;
  }
  return `${list.data} -> ${stringify(list.next)}`;
};
