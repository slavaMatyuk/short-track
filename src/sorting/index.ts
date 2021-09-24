const sortListOfObject = (list: [], sortBy: string): [] => {
  return list.sort((a, b) => b[sortBy] - a[sortBy]);
};
