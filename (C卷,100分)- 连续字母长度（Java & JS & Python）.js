const main = (charArr, dict) => {
  const set = Array.from({ length: 27 }).fill(0);
  for (let i = 0; i < dict.length; i++) {
    if (dict[i] === "?") {
      set[26]++;
      continue;
    }
    set[dict[i].charCodeAt(0) - "a".charCodeAt(0)]++;
  }
  let ans = 0;
  for (let i = 0; i < charArr.length; i++) {
    const useSet = [...set];
    for (let j = 0; j < charArr[i].length; j++) {
      if (useSet[charArr[i][j].charCodeAt(0) - "a".charCodeAt(0)] === 0) {
        useSet[26]--;
        continue;
      }
      useSet[charArr[i][j].charCodeAt(0) - "a".charCodeAt(0)]--;
    }
    let _ans = 1;
    useSet.forEach((val) => {
      if (val < 0) _ans = 0;
    });
    ans += _ans;
  }
  return ans;
};

console.log(main(["cat", "bt", "hat", "tree"], "atach??"));
