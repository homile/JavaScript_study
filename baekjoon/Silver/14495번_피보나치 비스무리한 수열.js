// 피보나치 비스무리한 수열
// 링크: https://www.acmicpc.net/problem/14495

// 문제풀이(1)
// 15624번 피보나치 수 7과 같은 DP 문제이다. 조건은 조금 다르다.
// f(n) = f(n-1) + f(n-3) 해당 조건에 맞게 로직을 구현하면 된다.
// f(1) = f(2) = f(3) = 1
// 또한, Int 범위를 벗어나는 경우가 있기 때문에 Bigint를 사용해야한다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const N = Number(require("fs").readFileSync(filePath).toString().trim());

const dp = [BigInt(1), BigInt(1), BigInt(1)];

for (let i = 3; i < N; i++) {
  dp.push(dp[i - 1] + dp[i - 3]);
}

console.log(dp.at(-1).toString());

// input
// 10

// output
// 19
