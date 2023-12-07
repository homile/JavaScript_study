// 보물
// 링크: https://www.acmicpc.net/problem/1026

// 문제풀이(1)
// A[0]xB[0]+...+A[N-1]xB[N-1] 일 경우에 총합의 값이 작은 방법을 찾는 문제다.
// A는 재배열할 수 있고, B는 재배열할 수 없다.
// A의 작은값과 B의 큰값을 매치하는 방식으로 하면 가장 작은 총합이 나올 것이다.
// 1. A를 오름차순으로 정렬한다.
// 2. B의 가장 큰값을 찾고 계산한뒤 큰값의 인덱스를 제거한다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs").readFileSync(filePath).toString().trim().split("\n");
const N = Number(input.shift());
const A = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b); // 오름차순 정렬
const B = input[1].split(" ").map(Number);

let answer = 0;

for (let i = 0; i < N; i++) {
  // B배열의 가장 큰값
  let maxNumB = Math.max(...B);
  // B배열의 가장 큰값의 인덱스 번호
  let maxNumBIdx = B.indexOf(maxNumB);
  // B배열의 가장 큰값 제거
  B.splice(maxNumBIdx, 1);

  let multi = A[i] * maxNumB;
  answer += multi;
}

console.log(answer);

// 문제풀이(2)
// 문제풀이(1)와 같이 풀어봤을 때 사실 B.splice를 한다는 것은 재배열하는 것과 같은데 풀렸기 때문에
// sort 메소드를 사용해서 풀어봤는데 통과가 되었다.
// B의 배열을 재배열했는지 여부를 판단하는 기준이 없는 것 같다.
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// const input = require("fs").readFileSync(filePath).toString().trim().split("\n");
// const N = Number(input.shift());
// const A = input[0]
//   .split(" ")
//   .map(Number)
//   .sort((a, b) => a - b); // 오름차순 정렬
// const B = input[1]
//   .split(" ")
//   .map(Number)
//   .sort((a, b) => b - a);

// let answer = 0;

// A.forEach((numA, idx) => {
//   answer += numA * B[idx];
// });

// console.log(answer);

// 입력
// 5
// 1 1 1 6 0
// 2 7 8 3 1

// 출력
// 18
