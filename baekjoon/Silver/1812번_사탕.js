// 사탕
// 링크: https://www.acmicpc.net/problem/1812

// 문제풀이(1)
// 처음에는 a의 값에 0부터 1씩 증가하면서 a의 값을 먼저 찾은 뒤 모든 값을 빼서 각 학생별 사탕의 개수를 구하려햇다.
// 하지만, 학생의 수가 늘수록 실행시간이 높아질 수 있음을 깨달았다.
// 그래서 방법을 바꿨다. 직접 그려보면서 공식을 찾았다.
// 1. 첫번째 학생의 사탕의 개수를 구한다. (a - b + c)/2 <- 홀수이기 때문에 가능 짝수일 경우 0이 나옴.
// 2. i번째 학생과 i+1번째 학생의 사탕개수의 합 - i번째 학생의 사탕개수를 빼주면 i+1번째 학생의 사탕개수를 구할 수 있다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, ...arr] = require("fs").readFileSync(filePath).toString().trim().split("\n").map(Number);

let calc = 0;
const students = [];

// 첫번째 학생의 개수를 구하는 공식 (a - b + c)
for (let i = 0; i < N; i++) {
  calc += i % 2 ? -arr[i] : arr[i];
}

students.push(calc / 2);

// 각학생별 사탕의 개수 구하는 공식
for (let i = 0; i < N - 1; i++) {
  students.push(arr[i] - students[i]);
}

console.log(students.join("\n"));

// input
// 3
// 5
// 7
// 6

// output
// 2
// 3
// 4
