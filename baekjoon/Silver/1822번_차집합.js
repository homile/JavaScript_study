// 차집합
// 링크: https://www.acmicpc.net/problem/1822

// 문제풀이(1)
// A 집합에는 속하지만 B 집합에는 속하지 않는 A 집합의 값을 찾는 문제이다.
// 두가지 풀이방법을 생각할 수 있다.
// 1. set 객체를 활용해서 집합 B를 set 객체에 할당한뒤 집합 A를 순회하며 집합 B에 존재 유무를 판단하면 된다.
// 2. 2진 탐색을 활용하여 집합 B에 집합 A의 값이 존재 유무를 판단하면 된다.
// 2진 탐색은 O(log N)의 시간복잡도를 갖지만 
// set 객체를 활용한 풀이은 O(N)의 시간복잡도를 가지게 되어 이럴경우는 2진탐색보다 set 객체를 활용한 풀이가 더 좋다.
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// input.shift();

// const arrA = input[0].split(" ").map(Number);
// const arrB = new Set(input[1].split(" ").map(Number));

// const answer = [];

// arrA.forEach((num) => {
//   if (!arrB.has(num)) {
//     answer.push(num);
//   }
// });

// answer.sort((a, b) => a - b);

// console.log(answer.length === 0 ? 0 : `${answer.length}\n${answer.join(" ")}`);

// 문제풀이(2)
// 2진탐색 풀이
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

input.shift();

const arrA = input[0].split(" ").map(Number);
const arrB = input[1]
  .split(" ")
  .sort((a, b) => a - b)
  .map(Number);

const answer = [];

const binarySearch = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;
  let result = false;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

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

arrA.forEach((num) => {
  if (!binarySearch(arrB, num)) {
    answer.push(num);
  }
});

console.log(answer.length === 0 ? 0 : `${answer.length}\n${answer.join(" ")}`);

// input
// 4 3
// 2 5 11 7
// 9 7 4

// output
// 3
// 2 5 11
