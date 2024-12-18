const main = (nums) => {
  let count = 0;
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      if (count !== 0) ans++;
      count = 0;
    } else {
      if (count === 3) {
        ans++;
        count = 0;
      } else {
        count++;
      }
    }
  }
  if (count !== 0) ans++;
  return ans;
};

console.log(main([1, 1, 0, 0, 1, 1, 1, 0, 1]));
