const toMachineName = (name: string, separator: string): string => {
  const arr = name.replace(/\s{2,}/g, ' ').split(' ');
  const res = arr.join(separator).toLowerCase().replace(/[\s;-=+:\.,%]/g, '');
  return res.replace(/\d+./, '');
};

export default toMachineName;