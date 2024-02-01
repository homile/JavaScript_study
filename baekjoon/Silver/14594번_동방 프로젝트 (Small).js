// 동방 프로젝트 (Small)
// 링크: https://www.acmicpc.net/problem/14594

const { log, Console } = require("console");

// 문제풀이(1)
// 동아리방의 개수 = 5, 빅-종빈빌런의 행동횟수 = 2,
// 빅-종빈빌런의 행동 양의정수 x = 1, 2, y = 2, 4
// true, true, true, true, true이고, x < y 일 때, 사이의 방을부순다.
// 2번의 행동 모두 위의 조건을 만족하기 때문에 사이의 벽을 부순다.
// 첫번째 행동: true, false, true, true, true
// 두번째 행동: true, false, false, false, true
// 벽이 사라진다는 것은 x < 부숴지는 방 <= y 이다.

// 1. N만큼의 배열의 공간에 true로 방을 만든다.
// 2. 시작방과 끝방-1만큼 반복문을 순회하며 false로 방을 제거한다.
// 3. 남아있는 방의 개수를 카운트한다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const M = Number(input.shift());

// true = 부숴지지 않은 벽, false = 부숴진 벽
const walls = Array.from({ length: N }).fill(true);

for (let i = 0; i < M; i++) {
  const [startRoom, endRoom] = input[i].split(" ").map(Number);

  for (let j = startRoom; j < endRoom; j++) {
    walls[j] = false;
  }
}

console.log(walls.filter((el) => el === true).length);

// input
// 5
// 2
// 1 2
// 2 4

// output
// 2
