const sortListOfObject = (list: Array<{ [key: string]: number }>, sortBy: string): Array<{ [key: string]: number }> => {
  
  return list.every(obj => obj.hasOwnProperty(sortBy)) ? list.sort((a, b) => b[sortBy] - a[sortBy]) : list;
};

export default sortListOfObject;