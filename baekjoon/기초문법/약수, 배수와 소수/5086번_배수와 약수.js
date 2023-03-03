// 배수와 약수
// 링크: https://www.acmicpc.net/problem/5086

// 문제풀이(1)
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 맨 마지막 줄 0 0 제거
input.pop();

const nums = input.map((num) => num.split(" ").map(Number));

nums.forEach((el) => {
  if (el[1] % el[0] === 0) {
    console.log("factor");
  } else if (el[0] % el[1] === 0) {
    console.log("multiple");
  } else {
    console.log("neither");
  }
});
