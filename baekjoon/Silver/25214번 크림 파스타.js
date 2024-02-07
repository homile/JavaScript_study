// 크림 파스타
// 링크: https://www.acmicpc.net/problem/25214

// 문제풀이(1)
// 문제를 해석해보면 아래와 같았다.
// 1. 첫번째 값을 최소값으로 지정한다.
// 2. 두번째 값부터 반복문을 순회하며 이전의 결과값과 현재값 - 최소값중 큰값을 dp 배열에 추가한다.
// 3. 이전값과 현재값중 최소값을 찾는다.
// 4. 2~3번까지 반복한다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const arr = input[0].split(" ").map(Number);

const dp = [0];
let minNum = arr[0];

for (let i = 1; i < N; i++) {
  dp[i] = Math.max(arr[i] - minNum, dp[i - 1]);
  minNum = Math.min(minNum, arr[i]);
}

console.log(dp.join(" "));

// input
// 6
// 50 100 70 110 10 100

// output
// 0 50 50 60 60 90
