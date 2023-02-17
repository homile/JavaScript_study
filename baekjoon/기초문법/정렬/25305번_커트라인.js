// 커트라인
// 링크: https://www.acmicpc.net/problem/25305

// 문제풀이(1)
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input[0].split(" ").map((el) => Number(el));

const X = input[1]
  .split(" ")
  .map((el) => Number(el))
  .sort((a, b) => b - a);

console.log(X[K - 1]);
