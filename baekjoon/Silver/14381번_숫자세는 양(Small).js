// 숫자세는 양(Small)
// Link: https://www.acmicpc.net/problem/14381

// solution(1)
// 입력 받은 N을 한자리씩 나눠서 set에 저장하며 1회씩 카운트한다.
// 0 ~ 9까지 모든 숫자를 set에 저장하고, set의 size가 10이 된다면
// 마지막에 완료되는 수를 출력하고, 만일 영원히 될 수 없는 수라면 'INSOMNIA'을 출력한다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [testCase, ...numbers] = require("fs").readFileSync(filePath).toString().trim().split("\n").map(Number);

const check = (N) => {
  const digitsSet = new Set();

  for (let i = 1; i <= 200; i++) {
    let current = i * N;
    String(current)
      .split("")
      .forEach((digit) => digitsSet.add(digit));

    if (digitsSet.size === 10) return current;
  }

  return "INSOMNIA";
};

numbers.forEach((N, index) => {
  console.log(`Case #${index + 1}: ${check(N)}`);
});

// input
// 4
// 0
// 1
// 2
// 11

// output
// Case #1: INSOMNIA
// Case #2: 10
// Case #3: 90
// Case #4: 110
