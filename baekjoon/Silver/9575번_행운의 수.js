// 행운의 수
// 링크: https://www.acmicpc.net/problem/9575

// 문제풀이(1)
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");
const T = parseInt(input.shift());

for (let i = 0; i < T; i++) {
  const testCaseArr = input.splice(0, 6);
  const A = testCaseArr[1].split(" ").map(Number);
  const B = testCaseArr[3].split(" ").map(Number);
  const C = testCaseArr[5].split(" ").map(Number);

  const luckySet = new Set();

  for (const a of A) {
    for (const b of B) {
      for (const c of C) {
        const sum = a + b + c;
        if (isLuckyNumber(sum)) {
          luckySet.add(sum);
        }
      }
    }
  }
  console.log(luckySet.size);
}

function isLuckyNumber(num) {
  const forbiddenDigits = ["0", "1", "2", "3", "4", "6", "7", "9"];
  const digits = num.toString().split("");
  return !digits.some((digit) => forbiddenDigits.includes(digit));
}

// input
// 2
// 6
// 100 1 10 100 1 1
// 7
// 3 53 53 53 53 53 53
// 6
// 4 54 4 54 4 54
// 1
// 47
// 1
// 500
// 1
// 33

// output
// 2
// 0
