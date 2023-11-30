// RGB거리
// 링크: https://www.acmicpc.net/problem/1149

// [조건]
// 빨강 초록 파랑 순서
// 모든 집을 칠하는 비용의 최소값
// 1번집의 색은 2번 집의 색과 같지 않아야 한다.
// N번 집의 색은 N-1번 집의 색과 같지 않아야 한다.
// i(2 ≤ i ≤ N-1)번 집의 색은 i-1번, i+1번 집의 색과 같지 않아야 한다.

// [문제접근]
// 경우의 수기 떄문에 DP 문제이다.

// 문제풀이(1)
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let N = Number(input.shift());
const arr = input.map((el) => el.split(" ").map(Number));

for (let i = 1; i < N; i++) {
  arr[i][0] = arr[i][0] + Math.min(arr[i - 1][1], arr[i - 1][2]);
  arr[i][1] = arr[i][1] + Math.min(arr[i - 1][0], arr[i - 1][2]);
  arr[i][2] = arr[i][2] + Math.min(arr[i - 1][0], arr[i - 1][1]);
}

console.log(Math.min(...arr.at(-1)));

// 입력
// 3
// 26 40 83
// 49 60 57
// 13 89 99

// 출력
// 96
