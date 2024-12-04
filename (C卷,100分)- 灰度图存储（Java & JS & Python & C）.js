const main = (row, column, matrix, target) => {
  const targetNum = column * target[0] + target[1] + 1;
  let curr = 0;
  for (let i = 0; i < matrix.length; i += 2) {
    const value = matrix[i];
    const num = matrix[i + 1];
    if (num + curr >= targetNum) return value;
    curr += num;
  }
  return 0;
};

console.log(
  main(
    10,
    10,
    [
      255, 34, 0, 1, 255, 8, 0, 3, 255, 6, 0, 5, 255, 4, 0, 7, 255, 2, 0, 9,
      255, 21,
    ],
    [3, 5]
  )
);
