// 인사성 밝은 곰곰이
// 링크: https://www.acmicpc.net/problem/25192

// 문제풀이(1)
// ENTER : 새로운 사람이 채팅방에 입장했음.
// 그 외 : 채팅을 입력한 유저의 닉네임
// ENTER로 새로운 사람이 채팅방에 입장했다는 커맨드 다음으로 나온 닉네임의 개수를 구한다.
// ENTER는 여러번 나올수 있고, 한 번의 ENTER에는 중복된 닉네임이 없어야하며 다른 ENTER에는 이전 ENTER와 중복된 닉네임이 있을 수 있다.
// set을 이용해서 중복제거를 하고 ENTER가 나올때마다 set을 초기화 해주면 된다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());

const set = new Set();
let answer = 0;

for (let i = 0; i < N; i++) {
  if (input[i] === "ENTER") {
    answer += set.size;
    set.clear();
    continue;
  }

  set.add(input[i]);
  if (i === N - 1) {
    answer += set.size;
  }
}

console.log(answer);

// 입력
// 9
// ENTER
// pjshwa
// chansol
// chogahui05
// lms0806
// pichulia
// r4pidstart
// swoon
// tony9402

// 출력
// 8
