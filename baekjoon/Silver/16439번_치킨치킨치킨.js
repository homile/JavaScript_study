// 치킨치킨치킨
// 링크: https://www.acmicpc.net/problem/16439

// 문제풀이(1)
// 치킨의 종류는 3개이며, 치킨 선호도 점수의 최대합을 구하는 문제이다.
// 아래와 같은 input이 있을 때, 1번 = 6번째 치킨, 점수 6점 | 2번 = 1번째 치킨, 점수 6점 | 3번 = 4번째 치킨, 점수 9점이다.
// 이때, 4번의 최대값은 6이지만 1, 4, 6번째 치킨 중 가장 선호도 점수가 높은 1번째 치킨의 선호도만 구할 수 있다.
// 완전탐색을 통해 문제를 풀 수 있다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const arr = input.map((el) => el.split(" ").map(Number));

const answer = [];

for (let i = 0; i < M - 2; i++) {
  for (let j = i + 1; j < M - 1; j++) {
    for (let k = j + 1; k < M; k++) {
      let total = 0;

      arr.forEach((el) => {
        total += Math.max(el[i], el[j], el[k]);
      });

      answer.push(total);
    }
  }
}

console.log(Math.max(...answer));

// input
// 4 6
// 1 2 3 4 5 6
// 6 5 4 3 2 1
// 3 2 7 9 2 5
// 4 5 6 3 2 1

// output
// 25
