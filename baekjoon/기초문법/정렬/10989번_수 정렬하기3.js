// 수 정렬하기 3
// 링크: https://www.acmicpc.net/problem/10989

// node.js로 풀 수 없는 문제

// 문제풀이(1)
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((num) => Number(num));

input.shift();
input.sort((a, b) => a - b);

console.log(input.join("\n"));
