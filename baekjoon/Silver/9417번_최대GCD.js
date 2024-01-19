// 최대GCD
// 링크: https://www.acmicpc.net/problem/9417

// 문제풀이(1)
// 유클리드 호제법을 사용해서 각 수들의 최대공약수를 구하면되는 문제이다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());

const result = [];

const getGCD = (num1, num2) => (num2 > 0 ? getGCD(num2, num1 % num2) : num1);

for (let i = 0; i < N; i++) {
  const numbers = input[i].split(" ").map(BigInt);
  let max = 0;
  for (let j = 0; j < numbers.length; j++) {
    for (let k = j + 1; k < numbers.length; k++) {
      let gcd = getGCD(numbers[j], numbers[k]);
      if (gcd > max) max = gcd;
    }
  }
  result.push(max.toString());
}

console.log(result.join("\n"));

// input
// 3
// 10 20 30 40
// 7 5 12
// 125 15 25

// output
// 20
// 1
// 25
