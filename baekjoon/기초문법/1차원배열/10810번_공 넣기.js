// 공 넣기
// 링크: https://www.acmicpc.net/problem/10810

/*
  문제설명
  M개의 줄에 걸쳐 공을 넣는 방법
  i, j, k가 있고, i ~ j까지 공을 넣는데 k번 넣는다.
*/

// 문제풀이(1)
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let [N, M] = input.shift().split(" ").map(Number);

const result = Array.from({ length: N }, () => 0);

for (let cnt = 0; cnt < M; cnt++) {
  let [i, j, k] = input[cnt].split(" ").map(Number);

  // 공을 몇번 넣는지 계속 누적으로 교체하며 값을 할당
  for (let ball = i; ball <= j; ball++) {
    result[ball - 1] = k;
  }
}

console.log(result.join(" "));
