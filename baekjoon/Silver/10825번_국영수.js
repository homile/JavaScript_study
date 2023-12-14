// 국영수
// 링크: https://www.acmicpc.net/problem/10825

// 문제풀이(1)
// 아래의 조건으로 정렬하는 문제이다.
// 1. 국어 점수가 감소하는 순서로
// 2. 국어 점수가 같으면 영어 점수가 증가하는 순서로
// 3. 국어 점수와 영어 점수가 같으면 수학 점수가 감소하는 순서로
// 4. 모든 점수가 같으면 이름이 사전 순으로 증가하는 순서로 (단, 아스키 코드에서 대문자는 소문자보다 작으므로 사전순으로 앞에 온다.)
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// input.shift();

// const scoreSort = input.map((value) => value.split(" ").map((value2) => Number(value2) || value2));

// scoreSort.sort((a, b) => {
//   if (a[1] < b[1]) return 1;
//   else if (a[1] > b[1]) return -1;
//   else {
//     if (a[2] > b[2]) return 1;
//     else if (a[2] < b[2]) return -1;
//     else {
//       if (a[3] < b[3]) return 1;
//       else if (a[3] > b[3]) return -1;
//       else {
//         if (a[0] > b[0]) return 1;
//         else if (a[0] < b[0]) return -1;
//         else return 0;
//       }
//     }
//   }
// });

// const names = scoreSort.map((value) => value[0]);

// console.log(names.join("\n"));

// 문제풀이(2) - 리팩토링
// 조건문 간소화
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

input.shift();

const scoreSort = input.map((value) => value.split(" ").map((value2) => Number(value2) || value2));

scoreSort.sort((a, b) => {
  return b[1] - a[1] || a[2] - b[2] || b[3] - a[3] || (a[0] > b[0] ? 1 : -1);
});

const names = scoreSort.map((value) => value[0]);

console.log(names.join("\n"));

// 입력
// 12
// Junkyu 50 60 100
// Sangkeun 80 60 50
// Sunyoung 80 70 100
// Soong 50 60 90
// Haebin 50 60 100
// Kangsoo 60 80 100
// Donghyuk 80 60 100
// Sei 70 70 70
// Wonseob 70 70 90
// Sanghyun 70 70 80
// nsj 80 80 80
// Taewhan 50 60 90

// 출력
// Donghyuk
// Sangkeun
// Sunyoung
// nsj
// Wonseob
// Sanghyun
// Sei
// Kangsoo
// Haebin
// Junkyu
// Soong
// Taewhan
