// 문자열 집합
// 링크: https://www.acmicpc.net/problem/14425

// 문제풀이(1)
// 단순 탐색하는 문제이다.
// N, M의 범위가 넓지 않아 따로 탐색알고리즘을 사용하지 않고 풀었다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const arrN = input.slice(0, N);
const arrM = input.slice(N);
const set = new Set(arrN);

let answer = 0;

arrM.forEach((strM) => {
  if (set.has(strM)) {
    answer++;
  }
});

console.log(answer);

// 입력
// 5 11
// baekjoononlinejudge
// startlink
// codeplus
// sundaycoding
// codingsh
// baekjoon
// codeplus
// codeminus
// startlink
// starlink
// sundaycoding
// codingsh
// codinghs
// sondaycoding
// startrink
// icerink

// 출력
// 4
