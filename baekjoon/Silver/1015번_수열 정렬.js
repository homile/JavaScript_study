// 수열 정렬
// 링크: https://www.acmicpc.net/problem/1015

// 문제풀이(1)
// 주어진 수들을 비내림차순 즉 오름차순으로 만드는 수열을 만들면 되는 문제이다.
// A배열을 오름차순으로 정렬한 것과 정렬하지 않은 기본의 A배열을 가지고 비교하면된다.
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// const N = Number(input[0]);
// const A = input[1].split(" ").map(Number);
// const sortedA = input[1]
//   .split(" ")
//   .map(Number)
//   .sort((a, b) => a - b);

// const P = Array(N).fill(-1);

// A.forEach((num, idx) => {
//   P[idx] = sortedA.findIndex((sortedNum, sortedNumIdx) => {
//     if (sortedNum === num && !P.includes(sortedNumIdx)) return true;
//   });
// });

// console.log(P.join(' ')); 

// 문제풀이(2) - 리팩토링
// 1. 가속성 향상을 위한 변수명 변경
// 2. Array.prototype.map 과 Array.prototype.indexOf 를 사용하여 코드를 간결하게 작성
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const originalArray = input[1].split(" ").map(Number);
const sortedArray = [...originalArray].sort((a, b) => a - b);

const positionInSortedArray = originalArray.map((num) => {
  const position = sortedArray.indexOf(num);
  sortedArray[position] = null; // 이 위치의 값을 null로 변경하여 더 이상 선택되지 않게 한다.
  return position;
});

console.log(positionInSortedArray.join(' '));

// 입력
// 3
// 2 3 1

// 출력
// 1 2 0
