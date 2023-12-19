// 베스트셀러
// 링크: https://www.acmicpc.net/problem/1302

// 문제풀이(1)
// 많이 팔린 책의 이름을 찾는 문제이다.
// map객체를 사용해서 책들의 개수를 카운트 한다음 많이 나온 책을 출력하면 될 것 같다.
// 우선 팔린수가 같은 책이 여러개 일 경우 사전순으로 나타내야 하기 때문에 먼저 정렬을 실행한다.
// 많이 팔린 책의 수를 찾고 map을 순회하면서 가장 많이 팔린 책을 출력하면된다.
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const [N, ...arr] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// const map = new Map();

// let maxCount = 0;
// let answer = "";

// // 사전순으로 정렬
// arr.sort();

// arr.forEach((book) => {
//   if (map.has(book)) {
//     map.set(book, map.get(book) + 1);
//   } else {
//     map.set(book, 1);
//   }

//   let bookCount = map.get(book);
//   if (bookCount > maxCount) {
//     maxCount = bookCount;
//   }
// });

// for (const [key, value] of map.entries()) {
//   if (value === maxCount) {
//     answer = key;
//     break;
//   }
// }

// console.log(answer);

// 문제풀이(2) - 리팩토링
// 1. map 객체 대신 일반 객체를 사용하여 메소드 사용을 최소화 한다.
// 2. 반복문을 줄일 수 있도록 팔린 책의 수를 카운트 하면서 제일 많이 팔린 책을 동시에 찾는다.
// 메모리 - 9344kb -> 9348kb
// 실행시간 - 120ms -> 116ms
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, ...arr] = require("fs").readFileSync(filePath).toString().trim().split("\n");

let answer = "";

// 사전순으로 정렬
arr.sort();

const obj = {};

arr.forEach((book) => {
  obj[book] = (obj[book] || 0) + 1;

  if (!answer || obj[book] > obj[answer]) {
    answer = book;
  }
});

console.log(answer);

// 입력
// 5
// top
// top
// top
// top
// kimtop

// 출력
// top
