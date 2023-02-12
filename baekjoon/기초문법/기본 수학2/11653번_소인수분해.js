// 소인수분해
// 링크: https://www.acmicpc.net/problem/11653

/*
  문제설명
  정수 N이 주어졌을 때, 소인수분해하는 프로그램을 작성하시오.
*/

// 문제풀이(1)
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = require("fs").readFileSync(filePath).toString().trim();

let num = parseInt(input);

let result = [];

for (let i = 2; i <= num; i++) {
  while (num % i === 0) {
    num = num / i;
    result.push(i);
  }
}
console.log(result.join("\n"));
