// 블라인드
// 링크: https://www.acmicpc.net/problem/2799

// 문제풀이(1)
// ....이 몇번째에 나오느냐에 따라 어떤형태의 창문인지 알 수 있다.
// 반복문을 순회하며 ....이 몇번째에 나오는지 확인한다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [M, N] = input.shift().split(" ").map(Number);

const answer = Array.from({ length: 5 }).fill(0);

// 아파트의 세로 개수
for (let i = 1; i <= M * 5; i += 5) {
  // 아파트의 가로 개수
  for (let j = 1; j <= N * 5; j += 5) {
    if (input[i][j] === ".") {
      answer[0] += 1;
    } else if (input[i + 1][j] === ".") {
      answer[1] += 1;
    } else if (input[i + 2][j] === ".") {
      answer[2] += 1;
    } else if (input[i + 3][j] === ".") {
      answer[3] += 1;
    } else {
      answer[4] += 1;
    }
  }
}

console.log(answer.join(' '));

// input
// 1 2
// ###########
// #....#****#
// #....#****#
// #....#....#
// #....#....#
// ###########

// output
// 1 0 1 0 0
