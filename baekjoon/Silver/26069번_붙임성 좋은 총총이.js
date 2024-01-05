// 붙임성 좋은 총총이
// 링크: https://www.acmicpc.net/problem/26069

// 문제풀이(1)
// ChongChong 이를 처음만난 사람부터 무지개 댄스를 추게 되며 무지개 댄스를 추는 사람을 만날 때 마다 번지게 된다.
// 이떄, 대소문자를 구분해야하며 동명이인은 없다고 한다.
// set을 사용해서 ChongChong 이를 만났고 무지개 댄스를 추는 사람들의 집합을 만들어 비교하면 될 것 같다.
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// const targetName = "ChongChong";

// const N = parseInt(input.shift());
// const arr = input.map((names) => names.split(" "));

// const set = new Set();
// set.add(targetName);

// for (let i = 0; i < N; i++) {
//   const [A, B] = arr[i];

//   if (A === targetName || B === targetName || set.has(A) || set.has(B)) {
//     set.add(A);
//     set.add(B);
//   }
// }

// console.log(set.size);

// 문제풀이(2) - 리팩토링
// 1. 가독성 향상을 위해 set 초기값 입력방식 변경 
// 2. for -> forEach 변경
// 3. 가독성 향상을 위해 반복문 내 필요없는 조건식 제거부
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const targetName = "ChongChong";

input.shift();
const arr = input.map((names) => names.split(" "));

const set = new Set([targetName]);

arr.forEach(([nameA, nameB]) => {
  if (set.has(nameA) || set.has(nameB)) {
    set.add(nameA);
    set.add(nameB);
  }
});

console.log(set.size);

// 입력
// 12
// bnb2011 chansol
// chansol chogahui05
// chogahui05 jthis
// jthis ChongChong
// jthis jyheo98
// jyheo98 lms0806
// lms0806 pichulia
// pichulia pjshwa
// pjshwa r4pidstart
// r4pidstart swoon
// swoon tony9402
// tony9402 bnb2011

// 출력
// 10
