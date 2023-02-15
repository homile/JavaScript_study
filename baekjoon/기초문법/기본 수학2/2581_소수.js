// 소수
// 링크: https://www.acmicpc.net/problem/2581

/*
  문제설명
  자연수 M과 N이 주어질 때 M이상 N 이하의 자연수 중 소수인 것을 모두 합한값과 최솟값 구하기
*/

// 문제풀이(1)
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let [M, N] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((num) => Number(num));

const result = [];

// 소수 판별식
const isPrime = (num) => {
  if (num === 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
};

for (let i = M; i <= N; i++) {
  if (isPrime(i)) {
    result.push(i);
  }
}

let sum = 0;

if (result.length === 0) {
  console.log(-1);
} else {
  sum = result.reduce((prev, curr) => prev + curr, 0);
  console.log(`${sum}\n${result[0]}`);
}
