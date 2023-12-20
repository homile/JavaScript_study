// 기타줄
// 링크: https://www.acmicpc.net/problem/1049

// 문제풀이(1)
// 첫번째줄에 주어지는 N, M의 관계 - N은 끊어진 기타줄의 개수이고, M은 기타줄을 구매할 수 있는 브랜드의 개수이다.
// 두번째줄 이후로는 패키지의 가격, 1개의 가격이 적혀있다. 이때, 1개의 가격이 패키지의 가격보다 비쌀 수 있다.
// 최소한의 금액으로 N개의 기타줄을 사는 가격을 구하는 문제이다.
// 1. 패키지의 최소 금액과 1개의 최소 금액을 구한다.
// 2-1. 6개를 낱개로 사는 것이 패키지를 구매하는 것보다 싸다면 모두 낱개로 구매한다.
// 2-2. 6개를 낱개로 사는 것이 패키지를 구매하는 것보다 비싸다면 N/6의 몫만큼 패키지로 구매하고, 나머지를 패키지로 구매하는 것과 낱개로 구매하는 것중에 싼것을 찾는다.
// 3. 2-1, 2-2에서 나온 값들의 합을 출력한다.
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// const [N, M] = input.shift().split(" ").map(Number);
// const brand = input.map((line) => line.split(" ").map(Number));

// const minPackage = brand.reduce((min, curr) => (curr[0] < min ? curr[0] : min), brand[0][0]);
// const minPiece = brand.reduce((min, curr) => (curr[1] < min ? curr[1] : min), brand[0][1]);
// const pacakgeCount = Math.floor(N / 6);
// const pieceCount = N % 6;

// let answer = 0;

// // 낱개로 사는 것 보다 패키지로 구매하는게 효율이 좋을 경우
// if (minPackage / 6 < minPiece) {
//   // 패키지 만큼 구매
//   answer += pacakgeCount * minPackage;
//   // 패키지 만큼 구매하고 남은 낱개를 구매할 때 더 가격이 낮은쪽을 구매
//   answer += pieceCount * minPiece < minPackage ? pieceCount * minPiece : minPackage;
// } else {
//   // 낱개로 사는 것 보다 패키지로 구매하는게 효율이 좋지 않을 경우
//   answer += N * minPiece;
// }

// console.log(answer);

// 문제풀이(2) - 리팩토링
// 1. 가독성을 위해 변수명 수정
// 2. 불필요한 조건문 제거
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const brand = input.map((line) => line.split(" ").map(Number));

const minPackage = brand.reduce((min, curr) => (curr[0] < min ? curr[0] : min), brand[0][0]);
const minPiece = brand.reduce((min, curr) => (curr[1] < min ? curr[1] : min), brand[0][1]);
const pacakgeCount = Math.floor(N / 6);
const pieceCount = N % 6;

let totalCost = pacakgeCount * minPackage + Math.min(pieceCount * minPiece, minPackage);

if (minPackage / 6 >= minPiece) {
  totalCost = N * minPiece;
}

console.log(totalCost);

// 입력
// 4 2
// 12 3
// 15 4

// 출력
// 12
