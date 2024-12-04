const main = (arr) => {
  arr.sort((a, b) => a - b);
  let min = Number.MAX_SAFE_INTEGER;
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    min = Math.min(min, Math.abs(sum));
    const leftNum = Math.abs(arr[left]);
    const rightNum = Math.abs(arr[right]);
    if (leftNum < rightNum) {
      left++;
    } else {
      right--;
    }
  }
};
