const solution = (arr, h) => {
  const len = arr.length;
  if (len < h) return 0;
  arr.sort((a, b) => a - b);
};
