// 배수 스위치
// 링크: https://www.acmicpc.net/problem/12927

// 문제풀이(1)
// 원래는 에라토스테네스의 체를 생각했지만 i번째 이전의 값들은 수정하지 않는다는 것을 다시 깨닫고 풀었다.
// 1. i번째의 배수마다 전등의 동작 유무를 반전시키며 카운트를 해준다.
// 2. 모든 스위치가 꺼졌을 때의 카운트를 출력한다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const arr = require("fs").readFileSync(filePath).toString().trim().split("");

let count = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "Y") {
    arr[i] = "N";
    count++;

    for (let j = i + 1; j <= arr.length; j += i + 1) {
      arr[j - 1] = arr[j - 1] === "Y" ? "N" : "Y";
    }
  }
}

console.log(count);

// input
// YNYNYNYNY

// output
// 2
