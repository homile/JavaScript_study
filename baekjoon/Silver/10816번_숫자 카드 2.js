// 숫자 카드 2
// 링크: https://www.acmicpc.net/problem/10816

// 문제풀이(1) - 실패
// 1920번 수 찾기와 비슷한 문제이다.
// B배열에서 값들을 순회하며 해당 값이 A배열에 몇개 가지고 있는지 판별하면 되는 문제이다.
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// const input = require("fs").readFileSync(filePath).toString().trim().split("\n");
// const [N, A, M, B] = input.map((line) => line.split(" ").map(Number));

// const answer = [];

// B.forEach((value) => {
//   let count = A.filter((num) => num === value).length;
//   answer.push(count);
// });

// console.log(answer.join(" ").trim());

// 문제풀이(2)
// 문제풀이(1)의 실패는 예견된 일이었다.
// 10,000,000보다 크거나 같고, 10,000,000보다 작거나 같다. 라는 조건문이 있었기 때문에 시간복접도 문제였다.
// A배열을 1회 순회하며 객체에 count하는 방식으로 해보기로했다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs").readFileSync(filePath).toString().trim().split("\n");
const [N, A, M, B] = input.map((line) => line.split(" ").map(Number));

let answer = "";
const map = new Map();

for (num of A) {
  if (map.has(num)) {
    map.set(num, map.get(num) + 1);
  } else {
    map.set(num, 1);
  }
}

for (num of B) {
  if (map.get(num)) {
    answer += `${map.get(num)} `;
  } else {
    answer += "0 ";
  }
}

console.log(answer.trim());

// 입력
// 10
// 6 3 2 10 10 10 -10 -10 7 3
// 8
// 10 9 -5 2 3 4 5 -10

// 출력
// 3 0 0 1 2 0 0 2
