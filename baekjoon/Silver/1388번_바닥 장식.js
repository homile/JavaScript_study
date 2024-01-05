// 바닥 장식
// 링크: https://www.acmicpc.net/problem/1388

// 문제풀이(1)
// 나무판자 -, |가 있을 때 ----|로 있다면 - 나무판자 1개 | 나무판자 1개가 된다.
// --|--| 가 있다면 - 나무판자 2개 | 나무판자 2개가 된다.
// 간단하게 푼다면 for문을 사용해서 가로 나무판자와 세로 나무판자를 구하는 로직을 작성하면된다.
// 효율성이 있게 알고리즘을 작성한다면 DFS로 방문한 곳과 방문하지 않은 곳을 판단하여 나무판자의 개수를 구할 수 있다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);

let answer = 0;

// 가로 탐색
for (let i = 0; i < N; i++) {
  let flag = true;
  for (let j = 0; j < M; j++) {
    const woodenPlank = input[i][j];
    if (flag === true && woodenPlank === "-") {
      answer++;
      flag = false;
    } else if (woodenPlank === "|") {
      flag = true;
    }
  }
}

// 세로 탐색
for (let i = 0; i < M; i++) {
  let flag = true;
  for (let j = 0; j < N; j++) {
    const woodenPlank = input[j][i];
    if (flag === true && woodenPlank === "|") {
      answer++;
      flag = false;
    } else if (woodenPlank === "-") {
      flag = true;
    }
  }
}

console.log(answer);

// 입력
// 4 4
// ----
// ----
// ----
// ----

// 출력
// 4
