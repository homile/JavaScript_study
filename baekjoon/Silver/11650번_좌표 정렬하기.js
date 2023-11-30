// 좌표 정렬하기
// 링크: https://www.acmicpc.net/problem/11650

// [문제접근]
// 간단하게 sort를 사용해서 정렬하면된다.

// 문제풀이(1)
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs").readFileSync(filePath).toString().trim().split("\n");
let N = Number(input.shift());

const inputFilter = input.map((el) => el.split(" ").map(Number));

let answer = "";

inputFilter
  .sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  })
  .forEach((arr) => {
    answer += `${arr[0]} ${arr[1]}\n`;
  });

console.log(answer.trim());

// 입력
// 5
// 3 4
// 1 1
// 1 -1
// 2 2
// 3 3

// 출력
// 1 -1
// 1 1
// 2 2
// 3 3
// 3 4
