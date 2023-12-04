// 동전 0
// 링크: https://www.acmicpc.net/problem/11047

// 문제풀이(1)
// 동전의 가치를 내림차순 정렬하여 가치의 합을 을 가치로 나눴을 때의 몫이 1이상인 것을 count한다.
// 나머지 값을 가지고 순회한다.

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs").readFileSync(filePath).toString().trim().split("\n");
let [N, K] = input.shift().split(" ").map(Number);

const coins = input.map(Number).sort((a, b) => b - a); // 내림차순

let count = 0;

for (let i = 0; i < N; i++) {
  let division = Math.floor(K / coins[i]);
  if (division) {
    count += division;
    K -= division * coins[i];
  }
}

console.log(count);

// 입력
// 10 4200
// 1
// 5
// 10
// 50
// 100
// 500
// 1000
// 5000
// 10000
// 50000

// 출력
// 6
