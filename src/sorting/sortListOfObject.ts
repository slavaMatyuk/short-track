const sortListOfObject = (list: Array<{ [key: string]: number }>, sortBy: string): Array<{ [key: string]: number }> => {
  if (!sortBy) {
    return list;
  }
  return list.sort((a, b) => b[sortBy] - a[sortBy]);
};

export default sortListOfObject;