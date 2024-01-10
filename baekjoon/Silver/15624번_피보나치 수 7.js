// 피보나치 수 7
// 링크: https://www.acmicpc.net/problem/15624

// 문제풀이(1)
// 이전에 풀었던 1755번 숫자 놀이와 같은 DP 문제이다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const num = Number(require("fs").readFileSync(filePath).toString().trim());

const dp = [0, 1];

for (let i = 2; i <= num; i++) {
  dp.push((dp[i - 2] + dp[i - 1]) % 1000000007);
}

if (num === 0 || num === 1) {
  console.log(dp[num]);
} else {
  console.log(dp.at(-1));
}

// input
// 10

// output
// 55
