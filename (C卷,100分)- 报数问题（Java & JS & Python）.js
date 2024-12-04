const solution = (n) => {
  const list = Array.from({ length: n }, (_, i) => i + 1);
  let i = 0;
  let ptr = 1;
  while (list.length > 1) {
    if (ptr === 3) {
      ptr = 1;
      list.splice(i, 1);
    } else {
      ptr++;
      i = (i + 1) % list.length;
    }
  }
  return list[0];
};
console.log(solution(4)); // Output: 6
