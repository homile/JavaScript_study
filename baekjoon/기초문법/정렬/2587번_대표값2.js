// 대표값2
// 링크: https://www.acmicpc.net/problem/2587

// 문제풀이(1)
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((num) => Number(num));

let sum = input.reduce((prev, curr) => prev + curr, 0);
let avg = sum / input.length;

input.sort((a, b) => a - b);

console.log(avg);
console.log(input[Math.floor(input.length / 2)]);
