// 제로
// 링크: https://www.acmicpc.net/problem/10773

// 문제풀이(1)
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs").readFileSync(filePath).toString().trim().split("\n").map(Number);

let K = input.shift();

const stack = [];

for (let i = 0; i < K; i++) {
  let value = input[i];

  if (value === 0) {
    stack.pop();
  } else {
    stack.push(value);
  }
}

let result = 0;

for (let i = 0; i < stack.length; i++) {
  result += stack[i];
}

console.log(result);
