// 게임을 만든 동준이
// 링크: https://www.acmicpc.net/problem/2847

// 문제풀이(1)
// 레벨을 클리어 할 떄마다 주어지는 점수를 배열에 넣고, 뒤에서 부터 순회하면서 arr[i-1]이 arr[i] 값보다 크거나 같다면 arr[i-1]을 arr[i]보다 1작게 한다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, ...arr] = require("fs").readFileSync(filePath).toString().trim().split("\n").map(Number);

let answer = 0;

for (let i = N - 1; i > 0; i--) {
  if (arr[i - 1] >= arr[i]) {
    answer += arr[i - 1] - arr[i] + 1;
    arr[i - 1] = arr[i] - 1;
  }
}

console.log(answer);

// 입력
// 3
// 5
// 5
// 5

// 출력
// 3
