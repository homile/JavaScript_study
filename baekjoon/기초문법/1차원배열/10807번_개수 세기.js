// 개수 세기
// 링크: https://www.acmicpc.net/problem/10807

// 문제풀이(1)
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let N = Number(input.shift());

const InputNumbers = input.shift().split(" ").map(Number);

let v = Number(input[0]);

let result = InputNumbers.filter((num) => num === v);

console.log(result.length);
