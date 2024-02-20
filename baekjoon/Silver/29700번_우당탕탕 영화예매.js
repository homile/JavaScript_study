// 우당탕탕 영화예매
// 링크: https://www.acmicpc.net/problem/29700

// 문제풀이(1)
// N x M의 영화관 자리에서 이미 완료가 된 자리를 제외한 빈자리를 동아리원들이 가로로 연속되게 앉는 방법의 개수를 구하는 문제이다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, M, K] = input.shift().split(" ").map(Number);

let answer = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j <= M - K; j++) {
    const seatList = input[i].slice(j, K + j).split("");

    if (seatList.filter((el) => el === "0").length === K) {
      answer++;
    }
  }
}

console.log(answer);

// input
// 3 5 3
// 11000
// 01010
// 10000

// output
// 3
