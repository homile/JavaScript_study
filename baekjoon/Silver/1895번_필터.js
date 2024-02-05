// 필터
// 링크: https://www.acmicpc.net/problem/1895

// 문제풀이(1)
// 주어진 R x C의 이미지 I에서 3x3크기의 필터의 중앙값을 찾아서 필터된 이미지를 구하고
// 해당 이미지에서 T이상인 값들의 개수를 구하는 문제이다.
// 1. 3x3크기의 필터를 돌면서 필터의 중앙값들을 필터이미지 배열에 추가한다.
// 2. 필터이미지가 완성되면 T이상인 값들의 개수를 구해서 출력한다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [R, C] = input.shift().split(" ").map(Number);
const T = Number(input.pop());

const nosieArr = input.map((el) => el.split(" ").map(Number));

const nosieImage = [];

const checkMid = (x, y, arr) => {
  const result = [];
  for (let i = x; i < x + 3; i++) {
    for (let j = y; j < y + 3; j++) {
      result.push(arr[i][j]);
    }
  }
  return result.sort((a, b) => a - b)[(result.length - 1) / 2];
};

for (let i = 0; i < R - 2; i++) {
  for (let j = 0; j < C - 2; j++) {
    let mid = checkMid(i, j, nosieArr);
    if (mid >= T) {
      nosieImage.push(mid);
    }
  }
}

console.log(nosieImage.length);

// input
// 6 5
// 49 36 73 62 21
// 27 88 14 11 12
// 99 18 36 91 21
// 45 96 72 12 10
// 12 48 49 75 56
// 12 15 48 86 78
// 40

// output
// 7
