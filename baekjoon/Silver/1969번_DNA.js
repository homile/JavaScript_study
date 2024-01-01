// DNA
// 링크: https://www.acmicpc.net/problem/1969

// 문제풀이(1)
// Hamming Distance의 합이 가장 작은 DNA는 각 자리수별 가장 많이 등장한 DNA며,
// Hamming Distance의 합은 가장 작은 DNA를 나열한 것에서 각 자리수마다 다른 것을 더한 값이다.
// 1. 각 자리수별 가장 많이 등장한 DNA를 찾는다.
// 2. 각 자리수별 Hamming Distance의 합을 구한다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);

let hammingDistanceDNA = "";
let countHammingDistanceDNA = 0;

for (let i = 0; i < M; i++) {
  const map = new Map();
  for (let j = 0; j < N; j++) {
    const dna = input[j][i];
    map.has(dna) ? map.set(dna, map.get(dna) + 1) : map.set(dna, 1);
  }
  const hamming = [...map].sort().reduce((a, b) => (a[1] >= b[1] ? a : b));
  hammingDistanceDNA += hamming[0];
  countHammingDistanceDNA += N - hamming[1];
}

console.log(hammingDistanceDNA);
console.log(countHammingDistanceDNA);

// 입력
// 5 8
// TATGATAC
// TAAGCTAC
// AAAGATCC
// TGAGATAC
// TAAGATGT

// 출력
// TAAGATAC
// 7
