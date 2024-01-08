// 2+1 세일
// 링크: https://www.acmicpc.net/problem/11508

// 문제풀이(1) - 실패(런타임 에러 (EACCES))
// 물건들을 3개씩 끊어서 계산을 하는데 3개일 경우에는 최소 금액 값을 뺀 나머지를 구하고,
// 3개 이하일 경우에는 모든 금액을 더한 값을 구한 후 모든 값을 합하면 되는 문제이다.
// 이때, 최소 비용을 구해야하니 내림차순으로 정렬하면 최소비용을 구할 수 있다.
// 1. 3번째 자리의 수만 더하지 않으면 된다.
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const [N, ...arr] = require("fs").readFileSync(filePath).toString().trim().split("\n").map(Number);

// arr.sort((a, b) => b - a);

// let answer = 0;

// for (let i = 0; i < N; i++) {
//   if ((i + 1) % 3 !== 0) {
//     answer += arr[i];
//   }
// }

// console.log(answer);

// 문제풀이(2)
// 문제풀이(1)이 런타임 에러 (EACCES)가 나는 것을 확인했고, 왜 나는지 찾아본 결과 input을 다른 방식으로 해야했다.
// require('fs') -> require('readline')으로 변경하면 통과되는 것을 확인할 수 있다.
// 이유는 fs.readFileSync와 같은 파일 입출력 함수를 사용하면, 서버에서는 해당 파일에 접근할 수 없어 에러가 발생한다고 한다.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const N = Number(input[0]);
  const arr = input
    .slice(1)
    .map(Number)
    .sort((a, b) => b - a);

  let answer = 0;
  for (let i = 0; i < N; i++) {
    if ((i + 1) % 3 !== 0) {
      answer += arr[i];
    }
  }

  console.log(answer);
  process.exit();
});

// input
// 4
// 3
// 2
// 3
// 2

// output
// 8
