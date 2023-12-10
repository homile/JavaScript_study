// 로프
// 링크: https://www.acmicpc.net/problem/2217

// 문제풀이(1)
// 로프들이 같이 들어올릴 수 있는 최대의 중량을 구하는 문제이다.
// 로프가 들어올릴수 있는 중량이 들어있는 배열을 오름차순으로 정렬한다.
// 해당 배열을 순회하면서 arr[i]*(N-i)으로 계산한 값을 새로운 배열에 추가한뒤 가장 큰 값을 출력한다.
// ㄴ (가장 중량이 낮은 로프) * 로프 개수
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = require("fs").readFileSync(filePath).toString().trim().split("\n").map(Number);

// const N = input.shift();
// input.sort((a, b) => a - b);

// const result = [];

// for (let i = 0; i < N; i++) {
//   const multipliedValue = input[i] * (N - i);

//   result.push(multipliedValue);
// }

// console.log(Math.max(...result));

// 문제풀이(2)
// 문제풀이(1)에서는 계산된 값을 배열에 추가한 후 해당 배열을 순회하며 최대값을 찾는 Math.max를 사용했는데 이부분을 개선했다.
// 계산한 값을 바로 비교해서 큰 값을 maxResult 변수에 변경해주는 방식으로 개선했다.
// 메모리 - 24552kb -> 19328kb
// 실행시간	268ms -> 248ms
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n").map(Number);

const N = input.shift();
input.sort((a, b) => a - b);

let maxResult = 0;

for (let i = 0; i < N; i++) {
  const multipliedValue = input[i] * (N - i);
  if (multipliedValue > maxResult) {
    maxResult = multipliedValue;
  }
}

console.log(maxResult);

// 입력
// 2
// 10
// 15

// 출력
// 20
