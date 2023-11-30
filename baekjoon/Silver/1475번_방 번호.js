// 방 번호
// 링크: https://www.acmicpc.net/problem/1475

// [문제접근]
// 0~9까지의 플라스틱 번호판이 1세트이다.
// 6 -> 9, 9 -> 6이 될 수 있다.
// input 값을 순회하며 0~9까지의 나온횟수를 빈배열에 인덱스번호에 맞춰 +1해준다.
// 6 또는 9일경우 6번째 인덱스에 값을 추가해준뒤 마지막이 나누기 2를 해준다.(반올림)
// 해당 배열에 가장 큰 값을 찾는다.

// 문제풀이(1) for문 140ms, forEach문 136ms
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs").readFileSync(filePath).toString().trim().split("").map(Number);
const numbers = new Array(10).fill(0);

input.forEach((num) => {
  if (num === 6 || num === 9) {
    numbers[6] += 1;
  } else {
    numbers[num] += 1;
  }
});

numbers[6] = Math.ceil(numbers[6] / 2);

console.log(Math.max(...numbers));

// 입력 - 출력
// 9999 - 2
// 122 - 2
// 12635 - 1
// 888888 - 6
