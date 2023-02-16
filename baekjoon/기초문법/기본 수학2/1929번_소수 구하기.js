// 소수 구하기
// 링크: https://www.acmicpc.net/problem/1929

// 문제풀이(1)
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let [M, N] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((num) => Number(num));

const isPrime = (num) => {
  if (num === 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
};

for (let i = M; i <= N; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}
