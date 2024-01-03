// 연속부분최대곱
// 링크: https://www.acmicpc.net/problem/2670

// 문제풀이(1)
// 첫 번째 값을 temp에 추가한뒤 이후 나오는 연속된 값을 곱한 값과 현재의 값을 비교하여 계산한다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n").map(Number);

const N = input.shift();
let temp = input[0];

let answer = 0;

for (let i = 1; i < N; i++) {
  // 현재 숫자가 이전값 *  현재 숫자보다 클 경우 이전값을 현재 값으로 변경한다.
  if (input[i] > temp * input[i]) {
    temp = input[i];
  } else {
    temp *= input[i];
  }
  answer = Math.max(temp, answer);
}

console.log(answer.toFixed(3));

// 입력
// 8
// 1.1
// 0.7
// 1.3
// 0.9
// 1.4
// 0.8
// 0.7
// 1.4

// 출력
// 1.638
