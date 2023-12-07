// 듣보잡
// 링크: https://www.acmicpc.net/problem/1764

// 문제풀이(1)
// N = 듣도 못한 사람의 수, M = 보도 못한 사람의 수
// 듣도 못한 사람과 보도 못한 사람들의 이름에는 중복이 없다.
// 이진탐색을 사용해서 탐색한다.
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// const input = require("fs").readFileSync(filePath).toString().trim().split("\n");
// const [N, M] = input.shift().split(" ").map(Number);

// const peopleN = input.slice(0, N).sort();
// const peopleM = input.slice(N).sort();

// let answer = [];

// const binarySearch = (arr, target) => {
//   let low = 0;
//   let high = arr.length - 1;

//   while (low <= high) {
//     const mid = Math.floor((low + high) / 2);

//     // 중간값이 타겟과 일치하는 경우
//     if (arr[mid] === target) {
//       return target;
//     }

//     // 중간값이 타겟보다 작으면 오른쪽 부분 탐색
//     if (arr[mid] < target) {
//       low = mid + 1;
//     } else if (arr[mid] > target) {
//       // 중간값이 타겟보다 크면 왼쪽 부분 탐색
//       high = mid - 1;
//     } else {
//       return target;
//     }
//   }

//   return false;
// };

// const [longArr, shortArr] = N > M ? [peopleN, peopleM] : [peopleM, peopleN];

// shortArr.forEach((name) => {
//   let peopleNM = binarySearch(longArr, name);
//   if (peopleNM) {
//     answer.push(peopleNM);
//   }
// });

// console.log(`${answer.length}\n${answer.join("\n")}`);

// 문제풀이(2)
// 이진탐색을 사용하지 않은 풀이
// 이진탐색을 했을경우보다 메모리는 많이 사용하지만 실행시간은 줄었다.
// 문제풀이(1)-이진탐색o : 메모리 23056kb, 실행시간 364ms
// 문제풀이(2)-이진탐색x : 메모리 30660kb, 실행시간 256ms
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs").readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);

const map = new Map();
const answer = [];

for (let i = 0; i < input.length; i++) {
  if (map.has(input[i])) {
    answer.push(input[i]);
  } else {
    map.set(input[i]);
  }
}

console.log(`${answer.length}\n${answer.sort().join("\n")}`);

// 입력
// 3 4
// ohhenrie
// charlie
// baesangwook
// obama
// baesangwook
// ohhenrie
// clinton

// 출력
// 2
// baesangwook
// ohhenrie
