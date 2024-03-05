// 양갈래 짝 맞추기
// Link: https://www.acmicpc.net/problem/31474

// solution(1)
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const N = Number(require("fs").readFileSync(filePath).toString().trim());

let result = 1;

for (let i = N; i > 0; i -= 2) {
  result *= (i * (i - 1)) / 2;
  result /= i / 2;
}

console.log(result);

// input
// 4

// output
// 3
