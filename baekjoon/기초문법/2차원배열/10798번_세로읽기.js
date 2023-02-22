// 세로읽기
// 링크: https://www.acmicpc.net/problem/10798

// 문제설명
// 2차원 배열의 내용을 세로로 읽어서 가로로 나열한 내용을 return

// 문제풀이(1)
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 문자열의 길이가 다를 수 있다.
const maxLen = Math.max(...input.map((el) => el.length));

let result = "";

for (let i = 0; i < maxLen; i++) {
  for (let j = 0; j < input.length; j++) {
    result += input[j][i] || "";
  }
}

console.log(result);
