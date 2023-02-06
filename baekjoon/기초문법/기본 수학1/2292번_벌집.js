/* 벌집
링크: https://www.acmicpc.net/problem/2292
*/

// 문제풀이(1)
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs").readFileSync(filePath).toString().trim();

let sum = 1;
let count = 1;

while (Number(input) > sum) {
  sum += 6 * count;
  count++;
}

console.log(count);

// input
// 13