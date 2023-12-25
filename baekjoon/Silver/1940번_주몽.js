// 주몽
// 링크: https://www.acmicpc.net/problem/1940

// 문제풀이(1)
// 주어진 수가 될 수 있도록 2가지의 수를 조합하여 주어진 수가 될 수 있도록 맞추는 문제이다.
// 오름차순으로 수를 정렬하여 제일 작은 값과 제일 큰 값을 합한 수가 맞는지 확인한다.
// 더한수가 주어진 수(M)보다 작다면 다음으로 작은수를 찾아서 더하고, 크다면 다음으로 큰 수를 찾아서 더한다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, M, ...arr] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const numbers = arr[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let answer = 0;

let left = 0;
let right = Number(N) - 1;

while (left < right) {
  const sum = numbers[left] + numbers[right];

  if (sum === Number(M)) answer++;
  sum <= Number(M) ? left++ : right--;
}

console.log(answer);

// 입력
// 6
// 9
// 2 7 4 1 5 3

// 출력
// 2
