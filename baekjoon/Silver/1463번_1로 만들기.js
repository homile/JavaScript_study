// 1로 만들기
// 링크: https://www.acmicpc.net/problem/1463

// 문제풀이(1)
// 1. X가 3으로 나누어 떨어지면, 3으로 나눈다.
// 2. X가 2로 나누어 떨어지면, 2로 나눈다.
// 3. 1을 뺀다.
// 위의 공식을 실행하면 된다. 횟수를 카운트해서 출력한다.
// 하지만, 10^6승의 수가 나왔을 경우 연산횟수가 많아 질 수 있기 때문에 dp로 이전 값을 가져와서 계산하는 방법을 사용했다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let num = Number(require("fs").readFileSync(filePath).toString().trim());

const dp = new Array(num + 1).fill(0);

for (let i = 2; i <= num; i++) {
  dp[i] = dp[i - 1] + 1;

  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 2] + 1);
  }

  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  }
}

console.log(dp[num]);

// input
// 2

// output
// 1
