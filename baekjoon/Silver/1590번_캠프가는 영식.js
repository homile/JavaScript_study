// 캠프가는 영식
// Link: https://www.acmicpc.net/problem/1590

// solution(1)
// 버스의 개수 N, 영식이가 버스터미널에 도착하는 시간 T
// 버스의 시작 시각 S, 간격 I, 대수 C
// 대수 만큼 반복순회를 하며 버스의 시작 시각 + 간격 * 반복횟수(j)를 하면 버스의 간격별 버스의 시간을 알 수 있다.
// 버스의 간격별 시간이 영식이가 버스터미널에 도착하는 시간인 T 보다 크거나 같다면 반복순회를 종료한다.
// 영식이가 버스터미널에 도착하는 시간과 마지막 버스의 간격별 시간중 작은 값을 찾는다.
// 가장 작은 값을 찾았다면 가장 작은 값 - 영식이가 버스터미널에 도착하는 시간을 계산하면 기다려야하는 시간이 나온다.

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, T] = input.shift().split(" ").map(Number);
let answer = Infinity;

input.forEach((line) => {
  const [S, I, C] = line.split(" ").map(Number);

  const busDispatches = Array.from({ length: C }, (_, i) => S + I * i);
  const validDispatches = busDispatches.filter((busDispatch) => busDispatch >= T);

  if (validDispatches.length) answer = Math.min(answer, ...validDispatches);
});

console.log(answer !== Infinity ? answer - T : -1);

// input
// 1 285
// 150 50 10

// output
// 15
