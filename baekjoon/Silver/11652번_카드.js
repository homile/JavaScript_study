// 카드
// 링크: https://www.acmicpc.net/problem/11652

// 문제풀이(1)
// 가지고 있는 정수 중에 가장 많이 가지고 있는 정수를 고르되, 가장 많이 가지고 있는 정수가 여러개라면 낮은 수를 출력한다.
// Map을 사용하여 카운팅하면서 동시에 가장 큰수와, 가장 큰수의 개수를 비교하여 변경한다.
// Number 범위를 초과하기 때문에 BigInt를 사용해야하며 출력시 toString을 사용해야한다.
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const [N, ...arr] = require("fs").readFileSync(filePath).toString().trim().split("\n").map(BigInt);

// const map = new Map();
// let maxNum;
// let maxCount = 0;

// for (let i = 0; i < N; i++) {
//   const num = arr[i];

//   map.has(num) ? map.set(num, map.get(num) + 1) : map.set(num, 1);

//   if (num === maxNum) {
//     maxCount++;
//     continue;
//   }

//   if (map.get(num) > maxCount) {
//     maxNum = num;
//     maxCount = map.get(num);
//   } else if (map.get(num) === maxCount && num < maxNum) {
//     maxNum = num;
//     maxCount = map.get(num);
//   }
// }

// console.log(maxNum.toString());

// 문제풀이(2) - 리팩토링
// 1. 코드의 가독성 향상 - 반복적으로 사용되는 값 변수할당, 조건문 간소화
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, ...arr] = require("fs").readFileSync(filePath).toString().trim().split("\n").map(BigInt);

const map = new Map();
let maxNum;
let maxCount = 0;

for (let i = 0; i < N; i++) {
  const num = arr[i];
  const currentCount = (map.get(num) || 0) + 1;

  map.set(num, currentCount);

  if (num === maxNum) {
    maxCount++;
  } else if (currentCount > maxCount || (currentCount === maxCount && num < maxNum)) {
    maxNum = num;
    maxCount = currentCount;
  }
}

console.log(maxNum.toString());

// 입력
// 5
// 1
// 2
// 1
// 2
// 1

// 출력
// 1
