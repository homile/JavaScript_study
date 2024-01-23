// 수 고르기
// 링크: https://www.acmicpc.net/problem/20186

// 문제풀이(1)
// n개의 수 중 k개를 고를 때, 전체 점수의 최댓값을 구하는 문제이다.
// 최댓값을 구하는 문제이기때문에 내림차순으로 정렬한뒤 큰 수 k개를 찾으면 될 것이다.
// 마지막으로 가장 큰 K개의 숫자의 합에서 K개의 숫자를 이루는 연속된 자연수의 합을 뺀 값을 구하면된다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [n, k] = input.shift().split(" ").map(Number);
const arr = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

let answer = 0;

for (let i = 0; i < k; i++) {
  answer += arr[i];
}

// 가장 큰 K개의 숫자의 합에서 K개의 숫자를 이루는 연속된 자연수의 합을 뺀 값
console.log(answer - (k * (k - 1)) / 2);

// input
// 5 3
// 2 3 1 2 1

// output
// 4
