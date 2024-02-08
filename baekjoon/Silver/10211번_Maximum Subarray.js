// Maximum Subarray
// 링크: https://www.acmicpc.net/problem/10211

// 문제풀이(1)
// DP문제
// 1. 현재값, 현재값 + 이전값 중 큰수를 쌓아준다.
// 2. 테스트 케이스별로 최대값을 구한다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const T = Number(input.shift());

const answer = [];

for (let i = 0; i < T; i++) {
  const N = Number(input.shift());
  const nums = input.shift().split(" ").map(Number);
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
  }

  answer.push(Math.max(...nums));
}

console.log(answer.join("\n"));

// input
// 2
// 5
// 1 2 3 4 5
// 5
// 2 1 -2 3 -5

// output
// 15
// 4
