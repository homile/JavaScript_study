// 수열 정렬
// 링크: https://www.acmicpc.net/problem/1015

// 문제풀이(1)
// 주어진 수들을 비내림차순 즉 오름차순으로 만드는 수열을 만들면 되는 문제이다.
// A배열을 오름차순으로 정렬한 것과 정렬하지 않은 기본의 A배열을 가지고 비교하면된다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const A = input[1].split(" ").map(Number);
const sortedA = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const P = Array(N).fill(-1);

A.forEach((num, idx) => {
  P[idx] = sortedA.findIndex((sortedNum, sortedNumIdx) => {
    if (sortedNum === num && !P.includes(sortedNumIdx)) return true;
  });
});

console.log(P.join(' ')); 

// 입력
// 3
// 2 3 1

// 출력
// 1 2 0
