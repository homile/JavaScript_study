// 수들의 합 2
// 링크: https://www.acmicpc.net/problem/2003

// 문제풀이(1)
// 인접한 수들의 합이 M이상인 것을 카운트하면 되는 문제이다.
// 간단하게 2중 for문으로 문제를 해결할 수 있다.
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// const [N, M] = input.shift().split(" ").map(Number);
// const arr = input[0].split(" ").map(Number);

// let answer = 0;

// for (let i = 0; i < N; i++) {
//   let sum = 0;
//   for (let j = i; j < N; j++) {
//     sum += arr[j];
//     if (sum === M) answer++;
//   }
// }

// console.log(answer);

// 문제풀이(2)
// 투포인터 알고리즘을 사용한 풀이이다.
// 투포인터 알고리즘 - 배열 또는 리스트에서 두 개의 포인터를 사용하여 원하는 결과를 얻는 알고리즘입니다. 일반적으로 배열이나 리스트의 선형 탐색 작업을 효율적으로 수행하기 위해 사용됩니다.
// 1. 시작 포인터와 끝 포인터를 초기화합니다.
// 2. 시작 포인터와 끝 포인터를 기준으로 조건을 만족하는지 확인합니다.
// 3. 조건을 만족하면 결과를 처리하고, 조건을 만족하지 않으면 포인터를 이동시킵니다.
// 4. 포인터를 이동시킨 후 다시 2번 단계로 돌아가 조건을 확인합니다.
// 5. 모든 경우를 탐색할 때까지 위의 과정을 반복합니다.

// 결과
// 메모리 - 10052kb -> 9776kb
// 시간 - 240ms -> 120ms
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const arr = input[0].split(" ").map(Number);

let answer = 0;
let start = 0;
let end = 0;
let sum = arr[0];

while (end < N) {
  if (sum < M) {
    end++;
    sum += arr[end];
  } else if (sum === M) {
    answer++;
    end++;
    sum += arr[end];
  } else {
    sum -= arr[start];
    start++;
  }
}

console.log(answer);

// 입력
// 4 2
// 1 1 1 1

// 출력
// 3
