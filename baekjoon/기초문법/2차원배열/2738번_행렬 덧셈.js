// 행렬 덧셈
// 링크: https://www.acmicpc.net/problem/2738

// 문제풀이(1)
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim().split(" ").map(Number));

const [N, M] = input.shift();

const arr = new Array(M).fill(0);

const result = [];

for (let i = 0; i < N; i++) {
  result.push([...arr]);
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    result[i][j] = input[i][j] + input[i + N][j];
  }
}

result.forEach((num) => console.log(num.join(" ")));
