// 가로수
// 링크: https://www.acmicpc.net/problem/2485

// 문제풀이(1) - 72%에서 실패
// 임의로 세우진 간격 사이에 최소한의 가로수를 일정한 간격으로 심었을 때 가로수의 개수를 출력하는 문제이다.
// 가로수 간의 간격을 구한다음에 간격들의 최대공약수를 구한뒤 일정한 간격으로 세워지지 않은 간격을 찾아서 최대공약수 마다 나무를 심어주면된다.
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const [N, ...arr] = require("fs").readFileSync(filePath).toString().trim().split("\n").map(Number);

// const interval = [];

// let answer = 0;

// for (let i = 0; i < N - 1; i++) {
//   interval[i] = Math.abs(arr[i] - arr[i + 1]);
// }

// // 유클리드 호제법 최대공약수 구하기
// const getGcd = (a, b) => {
//   if (a % b === 0) {
//     return b;
//   }
//   return getGcd(b, a % b);
// };

// let gcd = interval[0];

// for (let i = 0; i < N - 2; i++) {
//   let temp = getGcd(interval[i + 1], interval[i]);
//   if (temp < gcd) gcd = temp;
// }

// for (let i = 0; i < N - 1; i++) {
//   const temp = interval[i];

//   if (temp !== gcd) {
//     answer += temp / gcd - 1;
//   }
// }

// console.log(answer);

// 문제풀이(2) - 성공
// 문제풀이(1)에서 최대공약수를 잘 못 구하고 있었다. 해당 부분을 확인하여 수정하여 통과하였다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, ...arr] = require("fs").readFileSync(filePath).toString().trim().split("\n").map(Number);

const interval = [];

let answer = 0;

for (let i = 1; i < N; i++) {
  interval[i - 1] = arr[i] - arr[i - 1];
}

// 유클리드 호제법 최대공약수 구하기
const getGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGcd(b, a % b);
};

let gcd = interval[0];

for (let i = 1; i < N - 1; i++) {
  gcd = getGcd(gcd, interval[i]);
}

interval.forEach((value) => {
  answer += value / gcd - 1;
});

console.log(answer);

// 입력
// 4
// 1
// 3
// 7
// 13

// 출력
// 3
