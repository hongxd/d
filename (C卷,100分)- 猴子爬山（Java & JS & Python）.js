function main(N) {
  const dp = Array.from({ length: N + 1 }).fill(1);
  for (let i = 3; i <= N; i++) {
    dp[i] = dp[i - 1] + dp[i - 3];
  }
  return dp[N];
}
console.log(main(3));
