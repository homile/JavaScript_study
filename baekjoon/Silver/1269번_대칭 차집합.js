// 대칭 차집합
// 링크: https://www.acmicpc.net/problem/1269

// 문제풀이(1)
// A와 B의 차집합을 구하고 각 원소의 개수를 더한 값을 출력하면되는 문제이다.
// set을 사용하여 B배열에 A의 원소가 있는지 확인하여 있을 경우 제거해준 뒤 A, B의 사이즈의 합을 출력한다.
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = require("fs").readFileSync(filePath).toString().trim().split("\n");
// input.shift();

// const A = new Set(input[0].split(" ").map(Number));
// const B = new Set(input[1].split(" ").map(Number));

// A.forEach((numA) => {
//   if (B.has(numA)) {
//     A.delete(numA);
//     B.delete(numA);
//   }
// });

// console.log(A.size + B.size);

// 문제풀이(2)
// 이진탐색으로 바꾸어 풀어보았다.
// 요즘 탐색하는 문제를 풀어볼 때는 이진 탐색으로 풀어보는 형식으로 기초를 다시 잡는 느낌이다.
// 메모리 - 73440kb -> 47788kb
// 실행시간 - 528ms -> 432ms
// 위와 같이 메모리의 사용량은 줄였지만 이진탐색의 특성상 정렬을 매번 해주어야 하고 배열을 두번 loop 하기때문에 시간은 더 걸리는 것을 볼 수 있다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

input.shift();

const A = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const B = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let answer = 0;

const binarySearch = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;
  let result = false;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] < target) {
      low = mid + 1;
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else {
      result = true;
      break;
    }
  }

  return result;
};

A.forEach((numA) => {
  if (!binarySearch(B, numA)) {
    answer++;
  }
});

B.forEach((numB) => {
  if (!binarySearch(A, numB)) {
    answer++;
  }
});

console.log(answer);

// 입력
// 3 5
// 1 2 4
// 2 3 4 5 6

// 출력
// 4
