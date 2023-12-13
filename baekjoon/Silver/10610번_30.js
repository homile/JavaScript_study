// 30
// 링크: https://www.acmicpc.net/problem/10610

// 문제풀이(1)
// 입력된 숫자들을 조합하여 30의 배수가 되는 최대 값을 구하는 문제이다.
// 예외처리로 입력받은 숫자들을 split으로 나눴을 때 0을 포함하지 않는다면 30의 배수가 될 수 없기 때문에 -1을 리턴하는 조건을 추가한다.
// 최대값을 구해야하기 때문에 내림차순으로 정렬한다.
// 30의 배수가 될 수 있는 숫자가 입력으로 들어왔을 경우 각 자리수들을 더해서 3으로 나눴을 때 나머지가 0일 경우 30의 배수가 될 수 있다. (배수판정법)
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("").map(Number);

input.sort((a, b) => b - a);

let sum = input.reduce((acc, cur) => acc + cur, 0);
if (!input.includes(0) || sum % 3 !== 0) {
  console.log(-1);
} else {
  console.log(input.join(""));
}

// 입력
// 30

// 출력
// 30
