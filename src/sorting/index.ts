export const sortListOfObject = (list: Array<{ [key: string]: number }>, sortBy: string): Array<{ [key: string]: number }> => {
  return list.sort((a, b) => b[sortBy] - a[sortBy]);
};
