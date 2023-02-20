// 최댓값
// 링크: https://www.acmicpc.net/problem/2566

// 문제풀이(1)  96%까지 성공
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let max = 0;
let x = 0;
let y = 0;

for (let i = 0; i < 9; i++) {
  let nowArr = input[i].split(" ").map(Number);
  let nowMax = Math.max(...nowArr);

  if (max < nowMax) {
    max = nowMax;
    x = i + 1;
    y = nowArr.indexOf(nowMax) + 1;
  }
}

console.log(max);
console.log(x, y);

// 문제풀이(2)
let totArr = [];
for (let i = 0; i < 9; i++) {
  totArr.push(input[i].split(' ').map(Number));
}

let flatArr = totArr.flat();

// 1) 최댓값 구하기
let maxVal = flatArr.slice().sort((a, b) => b - a)[0];
console.log(maxVal);

// 2) 몇 행 몇 열인지 구하기
const maxNumIdx = flatArr.indexOf(maxVal);
const x2 = Math.floor(maxNumIdx / 9) + 1;
const y2 = (maxNumIdx % 9) + 1;
console.log(x2, y2);
