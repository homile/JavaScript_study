// 문자열
// 링크: https://www.acmicpc.net/problem/1120

// 문제풀이 (1)
// 문자열 A를 B에 겹쳤을 때 다른곳의 최소값을 구하면된다.
// A문자열의 길이 - B의 문자열의 길이만큼 반복순회하고,
// B의 문자열을 한칸씩 뒤로 미루면서 다른곳을 count하여 가장 작은 값을 찾아낸다. -> 슬라이딩 윈도우 기법
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [A, B] = require("fs").readFileSync(filePath).toString().trim().split(" ");

let min = Infinity;

// A와 B의 차이만큼 반복한다.
for (let i = 0; i <= B.length - A.length; i++) {
  let diff = 0;
  // 한칸씩 뒤로 미루면서 가장 차이가 적은 것을 골라낸다.
  for (let j = 0; j < A.length; j++) {
    if (A[j] !== B[i + j]) {
      diff++;
    }
  }
  min = Math.min(min, diff);
}

console.log(min);

// 입력
// adaabc aababbc

// 출력
// 2
