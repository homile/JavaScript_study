// 수 정렬하기
// 링크: https://www.acmicpc.net/problem/2750

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
