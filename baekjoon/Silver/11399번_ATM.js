// ATM
// 링크: https://www.acmicpc.net/problem/11399

// 문제풀이(1)
/*
  ATM 1대, N명의 사람 (1번 ~ N번)
  i번 사람이 돈을 인출하는데 걸리는 시간 Pi분

  P1 = 3, P2 = 1, P3 = 4, P4 = 3, P5 = 2
  [1, 2, 3, 4, 5] -> 3 + 4 + 8 + 11 + 13 = 39
  [2, 5, 1, 4, 3] -> 1 + 3 + 6 + 9 + 13 = 32

  둘째 줄에 입력받는 수를 정렬한다음 누적으로 합계를 계산하면 된다.
 */

// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// const input = require("fs").readFileSync(filePath).toString().trim().split("\n");
// const N = Number(input.shift());
// const numbers = input
//   .shift()
//   .split(" ")
//   .map(Number)
//   .sort((a, b) => a - b);

// let sum = 0;
// for (let i = 0; i < N; i++) {
//   let acc = numbers.slice(0, i + 1).reduce((a, b) => a + b, 0);
//   sum += acc;
// }
// console.log(sum);

// 문제풀이(2) 리팩토링
// 메모리 11840 kb -> 9632 kb
// 시간 204ms -> 132ms
// 사용하지 않아도 되는 메소드를 제거함.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs").readFileSync(filePath, "utf8").trim().split("\n");
const N = Number(input[0]);
const numbers = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let sum = 0;
let acc = 0;

for (let i = 0; i < N; i++) {
  acc += numbers[i];
  sum += acc;
}

console.log(sum);

// 입력
// 5
// 3 1 4 3 2

// 출력
// 32
