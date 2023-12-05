// 수 찾기
// 링크: https://www.acmicpc.net/problem/1920

// 문제풀이(1)
// 4번째 줄에 나온 수들이 2번째 줄에 나온 수들 중에 존재하는지 여부를 판단하는 문제이다.
// -2^31 ~ 2^31까지 범위가 정해져 있기 때문에 include를 사용할 경우 시간초과가 나올 것이라 생각했다.
// 이진탐색으로 풀면될 것 같다.
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// const input = require("fs").readFileSync(filePath).toString().trim().split("\n");
// const [N, A, M, B] = input.map((line) => line.split(" ").map(Number));
// A.sort((a, b) => a - b); // 탐색 대상 정렬

// const answer = [];

// const binarySearch = (list, target) => {
//   let low = 0;
//   let high = A.length - 1;
//   let result = 0;

//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2); // 중간점

//     if (list[mid] < target) {
//       low = mid + 1;
//     } else if (list[mid] > target) {
//       high = mid - 1;
//     } else {
//       result = 1;
//       break;
//     }
//   }

//   return result;
// };

// B.forEach((num) => {
//   answer.push(binarySearch(A, num));
// });

// console.log(answer.join("\n"));

// 문제풀이(2)
// 1. B배열의 값들이 A배열에 값이 있을 경우 1을 아닐경우 0을 추출하는 문제인데 만약, A에 같은 값이 [1, 1, 1, 1]로 되어 있는 경우를 생각해 중복된 값을 제거함.
// 2. 코드의 가독성을 위해 result 대신 0과 1로 결과값을 반환.
// 3. mid값은 while문을 순회하는 동안 변하지 않는 값이므로 let -> const로 변경.

// 메모리와 실행시간이 풀이(1)보다 더 높게 나왔다.
// 수정내용 1번이 중복을 제거해야한다면 괜찮을 수 있지만 중복을 제거하는 과정이 들어가기 때문에 더 높게 나왔다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs").readFileSync(filePath).toString().trim().split("\n");
const [N, A, M, B] = input.map((line) => line.split(" ").map(Number));
const uniqueSetA = Array.from(new Set(A)).sort((a, b) => a - b);

const answer = [];

const binarySearch = (list, target) => {
  let low = 0;
  let high = uniqueSetA.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2); // 중간점

    if (list[mid] < target) {
      low = mid + 1;
    } else if (list[mid] > target) {
      high = mid - 1;
    } else {
      return 1;
    }
  }

  return 0;
};

B.forEach((num) => {
  answer.push(binarySearch(uniqueSetA, num));
});

console.log(answer.join("\n"));

// 입력
// 5
// 4 1 5 2 3
// 5
// 1 3 7 9 5

// 출력
// 1
// 1
// 0
// 0
// 1
