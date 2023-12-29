// 수열
// 링크: https://www.acmicpc.net/problem/2491

// 문제풀이(1)
// 연속해서 커지거나 작아지는 수열이 가장 큰 길이를 구하면된다.
// 연속해서 커지는지 확인하는 로직, 연속해서 작아지는지 확인하는 로직 2개가 필요하다.
// 같은 숫자 예를들어 2 -> 2는 연속해서 작아지거나 커지는 것으로 간주한다.
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const [N, ...arr] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// const sequence = arr[0].split(" ").map(Number);

// let upCount = 1;
// let downCount = 1;

// const answer = [];

// for (let i = 0; i < Number(N); i++) {
//   const nowNum = sequence[i];
//   const nextNum = sequence[i + 1];

//   if (nowNum <= nextNum) {
//     upCount++;
//   } else if (nowNum > nextNum) {
//     upCount = 1;
//   }

//   if (nowNum >= nextNum) {
//     downCount++;
//   } else if (nowNum < nextNum) {
//     downCount = 1;
//   }
//   answer.push(upCount);
//   answer.push(downCount);
// }

// console.log(Math.max(...answer));

// 문제풀이(2)
// 1. 배열에 모든 count를 넣는 것이 아니라 바로 비교하여 메모리 최적화
// 2. 최고 값을 찾는 max 메서드를 사용하지 않음으로 실행시간 최적화
// 메모리 - 20132kb	-> 12192kb
// 실행시간 - 208ms -> 188ms
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, ...arr] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const sequence = arr[0].split(" ").map(Number);

let upCount = 1;
let upResult = 1;

let downCount = 1;
let downResult = 1;

for (let i = 0; i < Number(N); i++) {
  const nowNum = sequence[i];
  const nextNum = sequence[i + 1];

  if (nowNum <= nextNum) {
    upCount++;
    if (upCount >= upResult) {
      upResult = upCount;
    }
  } else if (nowNum > nextNum) {
    upCount = 1;
  }

  if (nowNum >= nextNum) {
    downCount++;
    if (downCount >= downResult) {
      downResult = downCount;
    }
  } else if (nowNum < nextNum) {
    downCount = 1;
  }
}

console.log(upResult >= downResult ? upResult : downResult);

// 입력
// 9
// 1 2 2 4 4 5 7 7 2

// 출력
// 8
