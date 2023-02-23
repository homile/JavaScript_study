// 약수 구하기
// 링크: https://www.acmicpc.net/problem/2501

// 문제풀이(1)
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs").readFileSync(filePath).toString().trim().split(" ");

let N = input.shift();

const result = [];

for (let i = 0; i <= N; i++) {
  if (N % i === 0) {
    result.push(i);
  }
}

result.length >= input[0] ? console.log(result[input[0] - 1]) : console.log(0);
