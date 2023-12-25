// 돌 게임 2
// 링크: https://www.acmicpc.net/problem/9656

// 문제풀이(1)
// 실버4에서 문제가 이렇게 간단하게 나온건 처음인것 같다.
// 2명이 게임을 하고 있을 떄 하나씩 돌을 번갈아 가면서 갖게 되고, 상근이가 이기면 SK, 창영이가 이기면 CY를 출력하면 되는 문제이다.
// 주어진 수를 2로 나눠서 나머지가 있다면 CY를 없다면 SK를 출력한다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const N = Number(require("fs").readFileSync(filePath).toString().trim());

if (N % 2) {
  console.log("CY");
} else {
  console.log("SK");
}

// 입력
// 4

// 출력
// SK
