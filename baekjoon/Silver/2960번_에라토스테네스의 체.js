// 에라토스테네스의 체
// 링크: https://www.acmicpc.net/problem/2960

// 문제풀이(1)
// 에라토스테네스의 체는 소수를 구하는 방법이다.
// 에라토스테네스의 체를 이용하여 K번쨰로 지워지는 수를 구하는 문제이다.
// 1. 2부터 N까지 모든 정수를 적는다.
// 2. 아직 지우지 않은 수 중 가장 작은 수를 찾는다. 이것을 P라고 하고, 이 수는 소수이다.
// 3. P를 지우고, 아직 지우지 않은 P의 배수를 크기 순서대로 지운다.
// 4. 아직 모든 수를 지우지 않았다면, 다시 2번 단계로 간다.
// 2,3,4,5,6,7 -> 제거 순서: 2, 4, 6, 3, 5, 7
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const [N, K] = require("fs").readFileSync(filePath).toString().trim().split(" ").map(Number);

// const numbers = [];
// const answer = [];

// for (let i = 2; i <= N; i++) {
//   numbers.push(i);
// }

// numbers.forEach((num, idx) => {
//   let i = idx;
//   while (i < numbers.length && num) {
//     if (numbers[i]) {
//       if (numbers[i] % num === 0) {
//         answer.push(numbers[i]);
//         numbers[i] = null;
//       }
//     }
//     i++;
//   }
// });

// console.log(answer[K - 1]);

// 문제풀이(2)
// 시간복잡도 개선 (불필요한 반복문 제거)
// O(N^2) -> O(N log log N)
// N의 배수를 지우는 과정이 각 소수마다 한 번씩만 수행하도록 코드 리팩토링 진행
// 먼저 숫자 배열을 모두 true로 초기화한다.
// 그리고 2부터 시작하여 소수를 찾고, 해당 소수의 배수를 모두 false로 만드는 과정을 반복한다.
// 이 때, K번째로 지워진 수를 찾기 위해 K를 하나씩 줄여나가며 K가 0이 되었을 때의 수를 정답으로 출력한다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, K] = require("fs").readFileSync(filePath).toString().trim().split(" ").map(Number);

let numbers = new Array(N + 1).fill(true);
numbers[0] = numbers[1] = false;

let answer;

for (let i = 2; i <= N; i++) {
  if (numbers[i]) {
    for (let j = i; j <= N; j += i) {
      if (numbers[j]) {
        numbers[j] = false;
        K--;
        if (K === 0) {
          answer = j;
          break;
        }
      }
    }
  }
  if (K === 0) break;
}

console.log(answer);

// 입력
// 7 3

// 출력
// 6
