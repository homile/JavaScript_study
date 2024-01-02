// Generations of Tribbles
// 링크: https://www.acmicpc.net/problem/9507

// 문제풀이(1)
// 변형된 피보나치수를 구하면되는 문제이다.
// koong(n − 1) + koong(n − 2) + koong(n − 3) + koong(n − 4)
// 기본적으로 주어지는 수는 1, 1, 2, 4이다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n").map(Number);

const N = input.shift();
const answer = [];

for (let i = 0; i < N; i++) {
  const dp = [1, 1, 2, 4];

  for (let j = 4; j < input[i] + 1; j++) {
    const num = BigInt(dp[j - 1]) + BigInt(dp[j - 2]) + BigInt(dp[j - 3]) + BigInt(dp[j - 4]);
    dp.push(num.toString());
  }
  answer.push(dp[input[i]]);
}

console.log(answer.join("\n"));

// 입력
// 8
// 0
// 1
// 2
// 3
// 4
// 5
// 30
// 67

// 출력
// 1
// 1
// 2
// 4
// 8
// 15
// 201061985
// 7057305768232953720
