// 부녀회장이 될테야
// 링크: https://www.acmicpc.net/problem/2775

/*
  문제설명
  “a층의 b호에 살려면 자신의 아래(a-1)층의 1호부터 b호까지 사람들의 수의 합만큼 사람들을 데려와 살아야 한다” 
  양의 정수 k와 n에 대해 k층에 n호에는 몇 명이 살고 있는지 출력하라. 
  단, 아파트에는 0층부터 있고 각층에는 1호부터 있으며, 0층의 i호에는 i명이 산다.

  이항계수 식
*/

// 문제풀이(1)
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs").readFileSync(filePath).toString().trim().split("\n");
const T = Number(input.shift());

for (let i = 0; i < T; i++) {
  let k = Number(input.shift());
  let n = Number(input.shift());

  let result = 1;

  for (let j = 0; j < n - 1; j++) {
    result = result * (k + n - j);
  }

  for (let l = 1; l < n; l++) {
    result = result / l;
  }

  console.log(Math.abs(result));
}
