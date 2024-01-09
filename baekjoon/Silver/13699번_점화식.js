// 점화식
// 링크: https://www.acmicpc.net/problem/13699

// 문제풀이(1)
// t(0)=1
// t(n)=t(0)*t(n-1)+t(1)*t(n-2)+...+t(n-1)*t(0)
// 위의 점화식대로 문제를 풀면 되는 DP 문제이다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const N = Number(require("fs").readFileSync(filePath).toString().trim());

const dp = Array.from({ length: N + 1 }, () => 0);
dp[0] = BigInt(1);
dp[1] = BigInt(1);

for (let i = 2; i <= N; i++) {
  let sum = BigInt(0);
  for (let j = 0; j < i; j++) {
    sum += BigInt(dp[j]) * BigInt(dp[i - j - 1]);
  }
  dp[i] = sum;
}
console.log(dp.at(-1).toString());

// input
// 3

// output
// 5
