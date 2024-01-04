// 자리배정
// 링크: https://www.acmicpc.net/problem/10157

// 문제풀이(1)
// 달팽이 모양을 만든뒤 좌표값을 구하는 문제이다.
// 1. C x R 크기의 2차원 배열을 0으로 채운다.
// 2. 문제의 달팽이 모양은 상 우 하 좌 순서로 이동한다. 이 규칙을 사용해서 달팽이를 그려준다.
// 3. seatNum과 target 번호가 같아졌을 때 x, y 좌표값을 출력하고 달팽이 안에 값이 없을 경우 0을 출력한다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [C, R] = input.shift().split(" ").map(Number);
const K = Number(input[0]);

// 0으로 채워진 2차원 배열 생성
const arr = Array.from({ length: R }, () => Array.from({ length: C }, () => 0));

const moves = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

let x = 0;
let y = R - 1;
let seatNum = 1;
let direction = 0;

while (seatNum <= C * R) {
  arr[y][x] = seatNum;

  // 좌석번호랑 대기번호가 같을 경우
  if (seatNum === K) break;

  seatNum++;
  const nx = x + moves[direction][1];
  const ny = y + moves[direction][0];

  if (nx < 0 || ny < 0 || nx >= C || ny >= R || arr[ny][nx] !== 0) {
    // 상 -> 우 -> 하 -> 좌 순서로 달팽이가 이동
    direction = (direction + 1) % 4;
  }

  x += moves[direction][1];
  y += moves[direction][0];
}

console.log(seatNum !== K ? 0 : `${x + 1} ${R - y}`);

// 입력
// 7 6
// 11

// 출력
// 6 6
