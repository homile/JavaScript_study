// 과제 안 내신 분..?
// 링크: https://www.acmicpc.net/problem/5597

// 문제풀이(1)
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs").readFileSync(filePath).toString().trim().split("\n").map(Number);

const arr = Array.from({ length: 30 }, (v, i) => i + 1);
const result = arr.filter((num) => !input.includes(num));

console.log(result.join("\n"));
