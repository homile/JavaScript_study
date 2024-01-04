// 알바생 강호
// 링크: https://www.acmicpc.net/problem/1758

// 문제풀이(1)
// 문제에 로직이 있었다. 각 손님은 강호에게 원래 주려고 생각했던 돈 - (받은 등수 - 1)로 순서대로 구하면 된다.
// 하지만, 손님의 순서를 바꾸었을 때 줄 수 있는 최대값을 구해야하기 때문에 내림차순으로 정렬한뒤 위의 로직을 실행하면 된다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, ...arr] = require("fs").readFileSync(filePath).toString().trim().split("\n").map(Number);

let answer = 0;

arr.sort((a, b) => b - a);

for (let i = 0; i < N; i++) {
  const tip = arr[i] - (i + 1 - 1);
  if (tip > 0) answer += tip;
}

console.log(answer);

// 입력
// 4
// 3
// 3
// 3
// 3

// 출력
// 6
