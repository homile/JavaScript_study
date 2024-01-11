// 온라인 판매
// 링크: https://www.acmicpc.net/problem/1246

// 문제풀이(1)
// 내림차순으로 정렬해서 최대수익과 달걀가격을 구하면 된다.
// 이때, 최대수익은 i + 1 * arr[i]이고, 달걀의 가격은 arr[i]이다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const arr = input.map(Number);
arr.sort((a, b) => b - a);

const answer = [];

for (let i = 0; i < arr.length; i++) {
  if (i + 1 > N) {
    break;
  }

  // total - 최대 수익, value - 달걀 가격
  answer.push({ total: (i + 1) * arr[i], value: arr[i] });
}

answer.sort((a, b) => b.total - a.total);

console.log(answer[0].value, answer[0].total);

// input
// 5 4
// 2
// 8
// 10
// 7

// output
// 7 21
