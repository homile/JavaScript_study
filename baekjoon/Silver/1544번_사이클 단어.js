// 사이클 단어
// 링크: https://www.acmicpc.net/problem/1544

// 문제풀이(1)
// 브루트포스 문제이다.
// 1. i번째 단어를 입력받으면 해당 단어로 만들 수 있는 모든 경우의 수를 만든다.
// 2. 이전에 만들어진 모든 회전들과 현재 문자열의 회전들을 비교하여, 현재 문자열이 새로운 회전을 만들었는지 확인한다.
// 3. 만약 현재 문자열이 새로운 회전을 만들었다면, 카운트를 증가시킨다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const rotations = Array.from({ length: n }, () => []);

let count = 0;

for (let i = 0; i < n; i++) {
  const current = input[i + 1];

  const currentRotations = Array.from({ length: current.length }, (_, j) => current.slice(j) + current.slice(0, j));

  const isUnique = rotations
    .slice(0, i)
    .every((prevRotations) => !prevRotations.some((prev) => currentRotations.includes(prev)));

  if (isUnique) {
    count++;
  }

  rotations[i] = currentRotations;
}

console.log(count);

// input
// 5
// picture
// turepic
// icturep
// word
// ordw

// output
// 2
