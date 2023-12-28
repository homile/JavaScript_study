// 암기왕
// 링크: https://www.acmicpc.net/problem/2776

// 문제풀이(1)
// 기억하고 있는 수첩2에 있는 수들이 주어진 수첩2에 있는 수들중에 있다면 1, 없다면 0을 출력하는 문제이다.
// 수첩 1의 수들을 오름차순으로 정렬한다.
// 2진탐색으로 수첩2에 있는 수들을 하나씩 탐색하여 있다면 1, 없다면 0을 출력한다.
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// const T = Number(input.shift());

// const answer = [];

// const binarySearch = (arr, targetNum) => {
//   let low = 0;
//   let high = arr.length - 1;
//   let result = 0;

//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);

//     // 중간에 있는 값이 타겟 넘버보다 작을 경우
//     if (arr[mid] < targetNum) {
//       low = mid + 1;
//     } else if (arr[mid] > targetNum) {
//       high = mid - 1;
//     } else {
//       result = 1;
//       break;
//     }
//   }

//   return result;
// };

// for (let i = 0; i < T; i++) {
//   input.shift();
//   const note1 = input
//     .shift()
//     .split(" ")
//     .map(Number)
//     .sort((a, b) => a - b);
//   input.shift();
//   const note2 = input.shift().split(" ").map(Number);

//   note2.forEach((num) => {
//     answer.push(binarySearch(note1, num));
//   });
// }

// console.log(answer.join("\n"));

// 문제풀이(2)
// 이진탐색을 이용하지 않고, Set을 사용한 풀이
// 이진 탐색을 사용했을 때보다 코드의 가독성은 올라갔지만 실행시간, 메모리 측면에서 좋지 않은 성적을 보여줬다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const T = Number(input.shift());

const answer = [];

for (let i = 0; i < T; i++) {
  input.shift();
  const note1 = input
    .shift()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const note1Set = new Set(note1);

  input.shift();
  const note2 = input.shift().split(" ").map(Number);

  note2.forEach((num) => {
    answer.push(note1Set.has(num) ? 1 : 0);
  });
}

console.log(answer.join("\n"));

// 입력
// 1
// 5
// 4 1 5 2 3
// 5
// 1 3 7 9 5

// 출력
// 1
// 1
// 0
// 0
// 1
