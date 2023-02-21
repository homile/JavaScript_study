// 팰린드롬인지 확인하기
// 링크: https://www.acmicpc.net/problem/10988

/*
  문제설명
  주어진 단어가 팰린드롬인지 확인후 맞다면 1, 아니라면 0을 출력
*/

// 문제풀이(1)
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs").readFileSync(filePath).toString().trim();

let inputReverse = input.split("").reverse().join("");

input === inputReverse ? console.log(1) : console.log(0);
